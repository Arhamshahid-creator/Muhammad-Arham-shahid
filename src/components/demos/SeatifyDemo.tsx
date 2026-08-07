import React, { useState } from 'react';
import { Seat } from '../../types';
import { Smartphone, Wifi, WifiOff, Users, CheckCircle2, RotateCcw, Shuffle, Download, LayoutGrid, Award, Info } from 'lucide-react';

export const SeatifyDemo: React.FC = () => {
  const [pwaOfflineMode, setPwaOfflineMode] = useState(false);
  const [layoutPreset, setLayoutPreset] = useState<'classroom' | 'conference' | 'exam'>('classroom');
  const [selectedSeat, setSelectedSeat] = useState<Seat | null>(null);
  const [guestNameInput, setGuestNameInput] = useState('');

  // Initial seating grid generator
  const generateSeats = (type: 'classroom' | 'conference' | 'exam'): Seat[] => {
    const seats: Seat[] = [];
    const rows = type === 'exam' ? 5 : type === 'conference' ? 4 : 4;
    const cols = type === 'exam' ? 6 : type === 'conference' ? 6 : 5;

    let count = 1;
    for (let r = 1; r <= rows; r++) {
      for (let c = 1; c <= cols; c++) {
        const isVip = r === 1 && (c === 2 || c === 3 || c === 4);
        const isDesk = type === 'conference' && (r === 2 || r === 3) && (c === 2 || c === 3 || c === 4 || c === 5);
        
        seats.push({
          id: `s-${r}-${c}`,
          row: r,
          col: c,
          label: `R${r}-S${c}`,
          type: isVip ? 'vip' : 'standard',
          status: Math.random() > 0.6 ? 'occupied' : 'available',
          assignedTo: Math.random() > 0.6 ? `Attendee ${count++}` : undefined
        });
      }
    }
    return seats;
  };

  const [seats, setSeats] = useState<Seat[]>(() => generateSeats('classroom'));

  const handlePresetChange = (preset: 'classroom' | 'conference' | 'exam') => {
    setLayoutPreset(preset);
    setSeats(generateSeats(preset));
    setSelectedSeat(null);
  };

  const handleSeatClick = (seat: Seat) => {
    setSelectedSeat(seat);
    setGuestNameInput(seat.assignedTo || '');
  };

  const handleAssignName = () => {
    if (!selectedSeat) return;
    setSeats(prev => prev.map(s => {
      if (s.id === selectedSeat.id) {
        return {
          ...s,
          assignedTo: guestNameInput.trim() || undefined,
          status: guestNameInput.trim() ? 'occupied' : 'available'
        };
      }
      return s;
    }));
    setSelectedSeat(prev => prev ? { ...prev, assignedTo: guestNameInput.trim() || undefined, status: guestNameInput.trim() ? 'occupied' : 'available' } : null);
  };

  const handleAutoAssign = () => {
    const names = ['Arham Shahid', 'Alex Vance', 'Sara Khan', 'David Miller', 'Elena Rostova', 'Chen Wei', 'Zainab Ahmed', 'Liam O\'Connor'];
    let nameIdx = 0;
    setSeats(prev => prev.map(s => {
      if (s.status === 'available' && nameIdx < names.length) {
        return {
          ...s,
          assignedTo: names[nameIdx++],
          status: 'occupied'
        };
      }
      return s;
    }));
  };

  const handleResetSeats = () => {
    setSeats(prev => prev.map(s => ({ ...s, assignedTo: undefined, status: 'available' })));
    setSelectedSeat(null);
  };

  const occupiedCount = seats.filter(s => s.status === 'occupied').length;
  const totalCapacity = seats.length;
  const occupancyRate = Math.round((occupiedCount / totalCapacity) * 100);

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
      
      {/* Header Bar with PWA Status Indicator */}
      <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span>Seatify Interactive Layout Studio</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono border border-indigo-800">PWA Demo</span>
            </h4>
            <p className="text-xs text-slate-400">Offline-first seating organizer developed by ARSGROUP</p>
          </div>
        </div>

        {/* PWA Mode Simulation Switch */}
        <div className="flex items-center gap-3 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-mono">
          <span className="text-slate-400">PWA Service Worker:</span>
          <button
            onClick={() => setPwaOfflineMode(!pwaOfflineMode)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              pwaOfflineMode ? 'bg-amber-950 text-amber-300 border border-amber-800' : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
            }`}
          >
            {pwaOfflineMode ? (
              <>
                <WifiOff className="w-3.5 h-3.5 text-amber-400" />
                <span>Simulated Offline Mode</span>
              </>
            ) : (
              <>
                <Wifi className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>Cached & Online</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Interactive Controls & Grid */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 8 Cols: Seating Map Canvas */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            <div className="flex items-center gap-1 text-xs font-mono text-slate-300">
              <span className="mr-2 text-slate-400">Layout Preset:</span>
              <button
                onClick={() => handlePresetChange('classroom')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${layoutPreset === 'classroom' ? 'bg-indigo-600 text-white font-semibold' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
              >
                Classroom
              </button>
              <button
                onClick={() => handlePresetChange('conference')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${layoutPreset === 'conference' ? 'bg-indigo-600 text-white font-semibold' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
              >
                Conference
              </button>
              <button
                onClick={() => handlePresetChange('exam')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${layoutPreset === 'exam' ? 'bg-indigo-600 text-white font-semibold' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
              >
                Exam Grid
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleAutoAssign}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium cursor-pointer"
                title="Auto-assign attendees to open seats"
              >
                <Shuffle className="w-3.5 h-3.5 text-indigo-400" /> Auto-Fill
              </button>
              <button
                onClick={handleResetSeats}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium cursor-pointer"
                title="Clear all seats"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-400" /> Reset
              </button>
            </div>
          </div>

          {/* Stage / Podium Marker */}
          <div className="w-full py-2 bg-gradient-to-r from-indigo-950/60 via-indigo-900/40 to-indigo-950/60 rounded-lg border border-indigo-800/40 text-center text-xs font-mono text-indigo-300 font-semibold tracking-wider uppercase">
            [ Stage / Podium / Instructor Desk ]
          </div>

          {/* Seating Grid Canvas */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80 min-h-[260px] flex items-center justify-center">
            <div className="grid grid-cols-5 sm:grid-cols-6 gap-3 w-full max-w-xl">
              {seats.map((seat) => {
                const isSelected = selectedSeat?.id === seat.id;
                const isOccupied = seat.status === 'occupied';
                const isVip = seat.type === 'vip';

                return (
                  <button
                    key={seat.id}
                    onClick={() => handleSeatClick(seat)}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600 border-white text-white shadow-lg ring-2 ring-indigo-400/50 scale-105'
                        : isOccupied
                        ? isVip
                          ? 'bg-violet-900/60 border-violet-500/60 text-violet-200'
                          : 'bg-indigo-950/80 border-indigo-500/50 text-indigo-200'
                        : 'bg-slate-900/90 border-slate-800/80 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-[10px] font-mono opacity-80">{seat.label}</span>
                    <span className="text-xs font-bold truncate max-w-[80px]">
                      {seat.assignedTo ? seat.assignedTo.split(' ')[0] : 'Vacant'}
                    </span>
                    {isVip && <span className="text-[9px] px-1 bg-amber-500/20 text-amber-300 rounded font-mono">VIP</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-slate-900 border border-slate-700"></span>
              <span>Vacant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-indigo-950 border border-indigo-500"></span>
              <span>Occupied</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-violet-900 border border-violet-500"></span>
              <span>VIP Seat</span>
            </div>
          </div>

        </div>

        {/* Right 4 Cols: Selected Seat Inspector & Metrics */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Metrics Summary Card */}
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center justify-between">
              <span>Seating Analytics</span>
              <Users className="w-3.5 h-3.5 text-indigo-400" />
            </h5>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-slate-300 font-mono mb-1">
                  <span>Capacity Utilization</span>
                  <span className="text-indigo-400 font-bold">{occupancyRate}%</span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="bg-indigo-500 h-full transition-all duration-300"
                    style={{ width: `${occupancyRate}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-2 border-t border-slate-900">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <p className="text-slate-400 text-[10px]">Occupied</p>
                  <p className="text-base font-bold text-indigo-300">{occupiedCount} / {totalCapacity}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <p className="text-slate-400 text-[10px]">Vacant Seats</p>
                  <p className="text-base font-bold text-emerald-400">{totalCapacity - occupiedCount}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Seat Inspector Panel */}
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center justify-between">
              <span>Seat Configuration</span>
              <LayoutGrid className="w-3.5 h-3.5 text-slate-400" />
            </h5>

            {selectedSeat ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-300 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                  <span>Selected: <strong className="text-indigo-300">{selectedSeat.label}</strong></span>
                  <span className="px-2 py-0.5 rounded text-[10px] uppercase bg-indigo-950 text-indigo-400 border border-indigo-800">
                    {selectedSeat.type}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400">Assign Attendee Name:</label>
                  <input
                    type="text"
                    value={guestNameInput}
                    onChange={(e) => setGuestNameInput(e.target.value)}
                    placeholder="Enter student or guest name..."
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <button
                  onClick={handleAssignName}
                  className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Save Seat Assignment
                </button>
              </div>
            ) : (
              <div className="text-center py-6 text-xs text-slate-500 space-y-2">
                <Info className="w-5 h-5 mx-auto text-slate-600" />
                <p>Click any seat in the interactive grid to assign attendee details or inspect layout status.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
