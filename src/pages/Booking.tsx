import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ChevronDown, Search, Timer, MapPin, Shield, Info } from 'lucide-react';

const Booking = () => {
  const courts = ['CRT 01', 'CRT 02', 'CRT 03', 'CRT 04', 'CRT 05', 'CRT 06'];
  const times = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'];
  
  // Mock occupancy (Taken cells)
  const occupancy = [
    { court: 'CRT 01', time: '08:00' },
    { court: 'CRT 01', time: '18:00' },
    { court: 'CRT 02', time: '10:00' },
    { court: 'CRT 03', time: '16:00' },
    { court: 'CRT 04', time: '08:00' },
    { court: 'CRT 04', time: '10:00' },
    { court: 'CRT 05', time: '14:00' },
  ];

  const selected = { court: 'CRT 01', time: '14:00' };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Selection Area */}
        <div className="lg:col-span-8 space-y-16">
          <div className="space-y-4">
            <h1 className="text-8xl md:text-9xl font-black italic tracking-tighter">RESERVE YOUR LINE</h1>
            <p className="text-aero-text-muted text-sm tracking-[0.2em] font-bold uppercase">
              SELECT LOCATION, DATE, AND PERFORMANCE WINDOW.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.3em] font-bold text-aero-green uppercase">SELECT ARENA</label>
              <div className="relative group">
                <select className="w-full bg-white/5 border border-white/10 rounded-lg p-5 appearance-none focus:outline-none focus:border-aero-green transition-colors font-bebas text-2xl tracking-widest cursor-pointer">
                  <option>AERO HUB - DOWNTOWN DISTRICT</option>
                  <option>AERO ARENA - NORTH PLAZA</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-aero-green transition-colors" size={24} />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.3em] font-bold text-aero-green uppercase">TARGET DATE</label>
              <div className="relative group">
                <input 
                  type="text" 
                  value="OCTOBER 24, 2024" 
                  readOnly
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-5 focus:outline-none focus:border-aero-green transition-colors font-bebas text-2xl tracking-widest"
                />
                <Calendar className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-aero-green transition-colors" size={24} />
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <h2 className="text-4xl">COURT AVAILABILITY</h2>
              <div className="flex gap-6 text-[10px] tracking-widest font-bold text-aero-text-muted">
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-white/10 rounded-sm flex items-center justify-center text-[8px]">X</span> 
                  TAKEN
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-aero-green rounded-sm" /> 
                  SELECTED
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border border-white/20 rounded-sm" /> 
                  OPEN
                </span>
              </div>
            </div>

            {/* Matrix Table */}
            <div className="overflow-x-auto pb-4">
              <div className="min-w-[800px]">
                {/* Header */}
                <div className="grid grid-cols-[120px_1fr] border-b border-white/10 pb-6 mb-8 text-center">
                  <div className="text-left text-[10px] tracking-widest font-bold text-aero-text-muted uppercase">COURT</div>
                  <div className="grid grid-cols-6 text-xs tracking-[0.2em] font-bold text-aero-text-muted">
                    {times.map(t => <div key={t}>{t}</div>)}
                  </div>
                </div>

                {/* Rows */}
                <div className="space-y-4">
                  {courts.map((court) => (
                    <div key={court} className="grid grid-cols-[120px_1fr] items-center">
                      <div className="font-bebas text-2xl tracking-widest text-aero-green">{court}</div>
                      <div className="grid grid-cols-6 gap-4">
                        {times.map((time) => {
                          const isTaken = occupancy.some(o => o.court === court && o.time === time);
                          const isSelected = selected.court === court && selected.time === time;
                          
                          return (
                            <button
                              key={time}
                              disabled={isTaken}
                              className={`aspect-[16/6] rounded-sm border transition-all duration-300 flex items-center justify-center
                                ${isTaken 
                                  ? 'bg-white/10 border-transparent text-white/30 cursor-not-allowed' 
                                  : isSelected
                                    ? 'bg-aero-green/80 border-aero-green shadow-[0_0_15px_rgba(139,215,160,0.3)]'
                                    : 'bg-white/5 border-white/10 hover:border-aero-green/50 active:scale-95'
                                }`}
                            >
                              {isTaken && <span className="text-xs font-bold opacity-50">X</span>}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Reservation Log */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-aero-dark/50 backdrop-blur-xl rounded-[2rem] border border-white/10 p-10 space-y-12 sticky top-32">
            <h3 className="text-4xl font-bebas tracking-widest">RESERVATION LOG</h3>

            <div className="space-y-10">
              <div className="flex justify-between items-start border-b border-white/5 pb-8">
                <div className="space-y-2">
                  <p className="text-[10px] tracking-[0.4em] font-bold text-aero-green uppercase">SESSION</p>
                  <h4 className="text-xl font-bold">COURT 01 - INDOOR PRO</h4>
                </div>
                <Search size={22} className="text-aero-green opacity-50" />
              </div>

              <div className="flex justify-between items-start border-b border-white/5 pb-8">
                <div className="space-y-2">
                  <p className="text-[10px] tracking-[0.4em] font-bold text-aero-green uppercase">SCHEDULE</p>
                  <h4 className="text-xl font-bold uppercase tracking-tight">OCT 24 | 14:00 - 16:00</h4>
                </div>
                <Timer size={22} className="text-aero-green opacity-50" />
              </div>

              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-[10px] tracking-[0.4em] font-bold text-aero-green uppercase">PRICING MODEL</p>
                  <h4 className="text-xl font-bold uppercase">PEAK ATHLETIC RATE</h4>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bebas text-white">$45.00</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-aero-green text-aero-black py-6 rounded-xl font-impact text-2xl tracking-[0.1em] hover:bg-aero-green/90 transition-all hover:scale-[1.02] active:scale-[0.98]">
              INITIALIZE PAYMENT
            </button>

            <p className="text-center text-[10px] tracking-[0.15em] font-bold text-white/30 uppercase">
              24H CANCELLATION POLICY APPLIES. NO REFUNDS FOR NO-SHOWS.
            </p>
          </div>

          {/* Mini Map Card */}
          <div className="bg-aero-dark/30 rounded-[2rem] border border-white/5 overflow-hidden relative group">
            <div className="h-48 bg-aero-black relative overflow-hidden">
               {/* Mock Map View */}
               <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-64 h-64 border border-aero-green rounded-full animate-ping opacity-20" />
                  <div className="w-32 h-32 border border-aero-green rounded-full animate-pulse opacity-40" />
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-aero-green/20 p-6 rounded-full blur-2xl absolute inset-0 scale-150" />
                  <div className="relative bg-aero-green p-3 rounded-xl shadow-[0_0_20px_rgba(139,215,160,0.5)]">
                    <MapPin size={28} className="text-aero-black" />
                  </div>
               </div>
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bebas tracking-widest mb-2">AERO HUB DOWNTOWN</h4>
              <p className="text-[10px] tracking-widest font-bold text-aero-green uppercase">128 KINETIC WAY, NEO CITY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
