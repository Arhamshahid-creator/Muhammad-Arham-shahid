import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const PORT = 3000;
const ADMIN_PASSCODE = "admin173";
const DATA_DIR = path.join(process.cwd(), "data");
const STORE_FILE = path.join(DATA_DIR, "portfolio-store.json");
const AVATAR_FILE = path.join(DATA_DIR, "custom-avatar.png");
const PUBLIC_DIR = path.join(process.cwd(), "public");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

interface PortfolioStore {
  hasCustomAvatar: boolean;
  avatarContentType?: string;
  avatarTimestamp?: number;
  projects?: any[];
  lastUpdated?: string;
}

function readStore(): PortfolioStore {
  try {
    if (fs.existsSync(STORE_FILE)) {
      const raw = fs.readFileSync(STORE_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("Error reading portfolio store:", err);
  }
  return { hasCustomAvatar: fs.existsSync(AVATAR_FILE) };
}

function writeStore(data: PortfolioStore) {
  try {
    fs.writeFileSync(STORE_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing portfolio store:", err);
  }
}

async function startServer() {
  const app = express();

  // Middleware for parsing JSON with generous payload limit for image data URLs
  app.use(express.json({ limit: "25mb" }));
  app.use(express.urlencoded({ extended: true, limit: "25mb" }));

  // 1. Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // 2. Get server avatar
  app.get("/api/avatar", (_req, res) => {
    // If a custom uploaded avatar exists in data dir, serve it
    if (fs.existsSync(AVATAR_FILE)) {
      const store = readStore();
      res.setHeader("Content-Type", store.avatarContentType || "image/png");
      res.setHeader("Cache-Control", "public, max-age=60");
      return res.sendFile(AVATAR_FILE);
    }

    // Otherwise serve default bundled profile photo
    const defaultPng = path.join(PUBLIC_DIR, "arham_real_photo.png");
    if (fs.existsSync(defaultPng)) {
      res.setHeader("Content-Type", "image/png");
      res.setHeader("Cache-Control", "public, max-age=300");
      return res.sendFile(defaultPng);
    }
    const defaultPublicPhoto = path.join(PUBLIC_DIR, "profile-photo.jpg");
    if (fs.existsSync(defaultPublicPhoto)) {
      res.setHeader("Content-Type", "image/jpeg");
      res.setHeader("Cache-Control", "public, max-age=300");
      return res.sendFile(defaultPublicPhoto);
    }

    res.status(404).send("Not found");
  });

  // 3. Upload & persist avatar (Admin Only)
  app.post("/api/profile/avatar", (req, res) => {
    const { passcode, avatarData } = req.body;

    if (passcode !== ADMIN_PASSCODE) {
      return res.status(401).json({ error: "Unauthorized: Incorrect admin passcode." });
    }

    if (!avatarData || typeof avatarData !== "string") {
      return res.status(400).json({ error: "Missing avatar data string." });
    }

    try {
      // Parse data URL: e.g. data:image/png;base64,...
      const match = avatarData.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      let buffer: Buffer;
      let contentType = "image/jpeg";

      if (match) {
        contentType = match[1];
        buffer = Buffer.from(match[2], "base64");
      } else {
        // Raw base64 string
        buffer = Buffer.from(avatarData, "base64");
      }

      // Save to data directory
      fs.writeFileSync(AVATAR_FILE, buffer);

      // Also copy to public/profile-photo.jpg and dist/profile-photo.jpg if dist exists
      try {
        const publicTarget = path.join(PUBLIC_DIR, "profile-photo.jpg");
        fs.writeFileSync(publicTarget, buffer);

        const distTarget = path.join(process.cwd(), "dist", "profile-photo.jpg");
        if (fs.existsSync(path.join(process.cwd(), "dist"))) {
          fs.writeFileSync(distTarget, buffer);
        }
      } catch (copyErr) {
        console.warn("Could not copy avatar to static paths:", copyErr);
      }

      const store = readStore();
      const updatedStore: PortfolioStore = {
        ...store,
        hasCustomAvatar: true,
        avatarContentType: contentType,
        avatarTimestamp: Date.now(),
        lastUpdated: new Date().toISOString()
      };
      writeStore(updatedStore);

      const avatarUrl = `/api/avatar?v=${Date.now()}`;
      return res.json({ success: true, avatarUrl });
    } catch (err: any) {
      console.error("Failed to save avatar:", err);
      return res.status(500).json({ error: "Failed to persist avatar: " + err.message });
    }
  });

  // 4. Delete custom avatar (revert to bundled default)
  app.delete("/api/profile/avatar", (req, res) => {
    const { passcode } = req.body;

    if (passcode !== ADMIN_PASSCODE) {
      return res.status(401).json({ error: "Unauthorized: Incorrect admin passcode." });
    }

    try {
      if (fs.existsSync(AVATAR_FILE)) {
        fs.unlinkSync(AVATAR_FILE);
      }
      const store = readStore();
      writeStore({ ...store, hasCustomAvatar: false, avatarTimestamp: Date.now() });
      return res.json({ success: true, avatarUrl: "/profile-photo.jpg" });
    } catch (err: any) {
      return res.status(500).json({ error: "Failed to delete avatar: " + err.message });
    }
  });

  // 5. Get showcase projects from database
  app.get("/api/projects", (_req, res) => {
    const store = readStore();
    res.json({ projects: store.projects || null });
  });

  // 6. Save showcase projects to database (Admin Only)
  app.post("/api/projects", (req, res) => {
    const { passcode, projects } = req.body;

    if (passcode !== ADMIN_PASSCODE) {
      return res.status(401).json({ error: "Unauthorized: Incorrect admin passcode." });
    }

    if (!Array.isArray(projects)) {
      return res.status(400).json({ error: "Invalid projects data." });
    }

    const store = readStore();
    writeStore({ ...store, projects, lastUpdated: new Date().toISOString() });
    return res.json({ success: true, count: projects.length });
  });

  // 7. Vite middleware (dev) or Static serving (production)
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
