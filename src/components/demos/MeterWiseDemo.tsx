import React, { useState } from 'react';
import { MetricLog } from '../../types';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Zap, Droplets, Flame, Activity, Plus, CheckCircle2, Globe, Server, ArrowUpRight, ShieldCheck, RefreshCw } from 'lucide-react';

export const MeterWiseDemo: React.FC = () => {
  const [selectedResourceType, setSelectedResourceType] = useState<'Electricity' | 'Water' | 'Gas' | 'Bandwidth'>('Electricity');
  const [metricValueInput, setMetricValueInput] = useState('142');
  const [locationInput, setLocationInput] = useState('Building A - Server Room');

  const [chartData, setChartData] = useState([
    { time: '08:00', Electricity: 110, Water: 45, Gas: 12, Bandwidth: 210 },
    { time: '10:00', Electricity: 145, Water: 60, Gas: 18, Bandwidth: 430 },
    { time: '12:00', Electricity: 190, Water: 85, Gas: 25, Bandwidth: 620 },
    { time: '14:00', Electricity: 165, Water: 70, Gas: 20, Bandwidth: 580 },
    { time: '16:00', Electricity: 140, Water: 55, Gas: 15, Bandwidth: 490 },
    { time: '18:00', Electricity: 125, Water: 50, Gas: 14, Bandwidth: 350 },
  ]);

  const [logsHistory, setLogsHistory] = useState<MetricLog[]>([
    { id: 'm1', timestamp: '18:00', type: 'Electricity', value: 125, unit: 'kWh', location: 'Building A - Server Room', status: 'optimal' },
    { id: 'm2', timestamp: '16:00', type: 'Water', value: 55, unit: 'Liters', location: 'Main Facility', status: 'optimal' },
    { id: 'm3', timestamp: '14:00', type: 'Gas', value: 20, unit: 'Therms', location: 'HVAC Plant', status: 'normal' },
  ]);

  const handleLogMetric = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(metricValueInput) || 100;
    const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newLog: MetricLog = {
      id: `m-${Date.now()}`,
      timestamp: nowStr,
      type: selectedResourceType,
      value: val,
      unit: selectedResourceType === 'Electricity' ? 'kWh' : selectedResourceType === 'Water' ? 'Liters' : selectedResourceType === 'Gas' ? 'Therms' : 'GB',
      location: locationInput.trim() || 'Zone 1',
      status: val > 180 ? 'warning' : 'optimal'
    };

    setLogsHistory([newLog, ...logsHistory.slice(0, 4)]);

    // Update Chart
    setChartData(prev => [
      ...prev.slice(1),
      {
        time: nowStr,
        Electricity: selectedResourceType === 'Electricity' ? val : prev[prev.length - 1].Electricity,
        Water: selectedResourceType === 'Water' ? val : prev[prev.length - 1].Water,
        Gas: selectedResourceType === 'Gas' ? val : prev[prev.length - 1].Gas,
        Bandwidth: selectedResourceType === 'Bandwidth' ? val : prev[prev.length - 1].Bandwidth,
      }
    ]);
  };

  const resourceConfig = {
    Electricity: { color: '#6366f1', icon: Zap, unit: 'kWh' },
    Water: { color: '#06b6d4', icon: Droplets, unit: 'Liters' },
    Gas: { color: '#f59e0b', icon: Flame, unit: 'Therms' },
    Bandwidth: { color: '#10b981', icon: Activity, unit: 'GB' },
  };

  const CurrentIcon = resourceConfig[selectedResourceType].icon;

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
      
      {/* Vercel & Google Search Console Deployment Pipeline Header */}
      <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span>Meter-wise Resource Analytics Studio</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono border border-emerald-800">Live Vercel Pipeline</span>
            </h4>
            <p className="text-xs text-slate-400">Utility metrics web application developed by ARSGROUP</p>
          </div>
        </div>

        {/* Infrastructure Badges */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
            <Server className="w-3.5 h-3.5 text-indigo-400" />
            <span>Vercel Edge</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>GSC Indexed</span>
          </div>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 8 Cols: Recharts Realtime Resource Graph */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Resource Selection Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800">
            {(['Electricity', 'Water', 'Gas', 'Bandwidth'] as const).map((type) => {
              const Icon = resourceConfig[type].icon;
              const isActive = selectedResourceType === type;
              return (
                <button
                  key={type}
                  onClick={() => setSelectedResourceType(type)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-slate-800 text-white font-semibold border border-slate-700 shadow-md'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: resourceConfig[type].color }} />
                  <span>{type}</span>
                </button>
              );
            })}
          </div>

          {/* Recharts Canvas */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800/80 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <CurrentIcon className="w-4 h-4" style={{ color: resourceConfig[selectedResourceType].color }} />
                <span>{selectedResourceType} Consumption ({resourceConfig[selectedResourceType].unit})</span>
              </span>
              <span className="text-emerald-400 flex items-center gap-1">
                <RefreshCw className="w-3 h-3 animate-spin" /> Live Syncing
              </span>
            </div>

            <div className="h-[220px] w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="resourceGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={resourceConfig[selectedResourceType].color} stopOpacity={0.4} />
                      <stop offset="95%" stopColor={resourceConfig[selectedResourceType].color} stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="time" stroke="#64748b" fontSize={11} />
                  <YAxis stroke="#64748b" fontSize={11} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px', color: '#fff' }}
                  />
                  <Area
                    type="monotone"
                    dataKey={selectedResourceType}
                    stroke={resourceConfig[selectedResourceType].color}
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#resourceGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Log History */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 space-y-2">
            <h5 className="text-xs font-mono uppercase text-slate-400 font-semibold">Recent Meter Logs</h5>
            <div className="space-y-1.5">
              {logsHistory.map((log) => (
                <div key={log.id} className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800/60 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">{log.timestamp}</span>
                    <span className="text-slate-200 font-semibold">{log.type}</span>
                    <span className="text-slate-500">• {log.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-indigo-300 font-bold">{log.value} {log.unit}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] ${log.status === 'optimal' ? 'bg-emerald-950 text-emerald-300' : 'bg-amber-950 text-amber-300'}`}>
                      {log.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right 4 Cols: Log Entry Form */}
        <div className="lg:col-span-4 space-y-6">
          <form onSubmit={handleLogMetric} className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center justify-between">
              <span>Log Metric Entry</span>
              <Plus className="w-4 h-4 text-emerald-400" />
            </h5>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-slate-400 block mb-1">Resource Category:</label>
                <select
                  value={selectedResourceType}
                  onChange={(e) => setSelectedResourceType(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-indigo-500 font-mono"
                >
                  <option value="Electricity">Electricity (kWh)</option>
                  <option value="Water">Water (Liters)</option>
                  <option value="Gas">Gas (Therms)</option>
                  <option value="Bandwidth">Bandwidth (GB)</option>
                </select>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Reading Value ({resourceConfig[selectedResourceType].unit}):</label>
                <input
                  type="number"
                  value={metricValueInput}
                  onChange={(e) => setMetricValueInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Meter Location / Facility Tag:</label>
                <input
                  type="text"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Submit Metric Log</span>
              </button>
            </div>
          </form>

          {/* Vercel Status Info Card */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono space-y-2">
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> Vercel CI/CD Pipeline
              </span>
              <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded text-slate-400">v2.4.0</span>
            </div>
            <p className="text-slate-400 text-[11px]">
              Continuous integration auto-triggers on GitHub main branch pushes. Custom domain sitemaps indexed via Google Search Console.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
