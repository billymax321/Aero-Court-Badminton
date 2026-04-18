import { motion } from 'motion/react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { MEMBERSHIP_TIERS } from '../constants';

const Membership = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center space-y-6 mb-24">
        <h1 className="text-7xl md:text-9xl tracking-tighter italic font-black">UNLEASH THE<br /><span className="text-aero-green">PRO IN YOU.</span></h1>
        <p className="text-aero-text-muted max-w-2xl mx-auto text-lg">
          Join the Aero Court family and enjoy exclusive benefits, priority bookings, and a community of dedicated athletes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MEMBERSHIP_TIERS.map((tier) => (
          <div 
            key={tier.name}
            className={`relative p-10 rounded-[3rem] border transition-all duration-500 overflow-hidden group
              ${tier.isPopular 
                ? 'bg-aero-dark border-aero-green shadow-[0_0_50px_rgba(139,215,160,0.1)]' 
                : 'bg-aero-dark/50 border-aero-border hover:border-white/30'
              }`}
          >
            {tier.isPopular && (
              <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-aero-green text-aero-black px-6 py-2 rounded-full font-bold text-xs tracking-[0.2em]">
                MOST POPULAR
              </div>
            )}

            <div className="space-y-8 relative z-10">
              <div className="space-y-2">
                <h3 className="text-4xl font-bebas tracking-widest">{tier.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black italic">{tier.price}</span>
                  <span className="text-aero-text-muted text-sm tracking-widest">/MO</span>
                </div>
              </div>

              <div className="w-full h-px bg-aero-border" />

              <ul className="space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4 text-sm text-aero-text-muted group-hover:text-white transition-colors">
                    <span className="text-aero-green shrink-0"><Check size={18} /></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-impact text-xl tracking-widest transition-all
                ${tier.isPopular 
                  ? 'bg-aero-green text-aero-black hover:scale-105' 
                  : 'border border-aero-border text-white hover:bg-white hover:text-aero-black underline-offset-4'
                }`}
              >
                SELECT {tier.name}
              </button>
            </div>

            {/* Background Accent */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-aero-green/5 rounded-full blur-[100px] group-hover:bg-aero-green/10 transition-colors" />
          </div>
        ))}
      </div>

      <div className="mt-32 bg-aero-green rounded-[4rem] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
        <div className="relative z-10 space-y-6 max-w-2xl">
          <div className="flex gap-1 text-aero-black">
            {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
          </div>
          <h2 className="text-aero-black text-5xl md:text-7xl font-black italic leading-none">
            "THE BEST COURT EXPERIENCE I'VE EVER HAD."
          </h2>
          <p className="text-aero-black/70 font-semibold tracking-wide">— CHEN LONG, NATIONAL PLAYER</p>
        </div>
        <button className="relative z-10 bg-aero-black text-white px-10 py-5 rounded-full font-impact text-2xl tracking-widest hover:scale-110 transition-transform flex items-center gap-3">
          JOIN OUR CLUB <ArrowRight size={24} />
        </button>
        
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] border-[50px] border-aero-black/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border-[30px] border-aero-black/5 rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
};

export default Membership;
