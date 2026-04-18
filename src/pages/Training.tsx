import { TEAM } from '../constants';
import { Target, Zap, Shield, Trophy } from 'lucide-react';

const Training = () => {
  return (
    <div className="space-y-32 py-20">
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h1 className="text-7xl md:text-[8rem] leading-[0.8] font-black italic italic">
              MASTER<br />YOUR<br /><span className="text-aero-green">LIMITS.</span>
            </h1>
            <p className="text-aero-text-muted text-xl leading-relaxed">
              From beginners to pro-circuit athletes, our training programs are designed to optimize your movement, strategy, and power. 
            </p>
            <div className="flex flex-col gap-6">
              {[
                { icon: <Target className="text-aero-green" />, title: 'FOUNDATION', desc: 'Grip techniques, basic footwork, and service mastery.' },
                { icon: <Zap className="text-aero-green" />, title: 'VELOCITY', desc: 'Explosive movement and high-intensity smash drills.' },
                { icon: <Shield className="text-aero-green" />, title: 'ENDURANCE', desc: 'Sport-specific conditioning and agility training.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="mt-1 group-hover:scale-125 transition-transform">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold tracking-tight mb-1">{item.title}</h4>
                    <p className="text-aero-text-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-aero-dark">
                <img src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=2070&auto=format&fit=crop" alt="Training 1" className="w-full h-full object-cover grayscale brightness-75 hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-[2rem] overflow-hidden bg-aero-green p-8 flex flex-col justify-end">
                <Trophy size={48} className="text-aero-black mb-4" />
                <h3 className="text-aero-black text-3xl font-black">CHAMPIONS<br />MADE HERE</h3>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-square rounded-[2rem] overflow-hidden bg-aero-dark">
                 <img src="https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?q=80&w=2070&auto=format&fit=crop" alt="Training 2" className="w-full h-full object-cover grayscale brightness-75 hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-aero-dark">
                <img src="https://images.unsplash.com/photo-1617083281297-af33e69ad593?q=80&w=2070&auto=format&fit=crop" alt="Training 3" className="w-full h-full object-cover grayscale brightness-75 hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-aero-dark border-y border-aero-border py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-6xl md:text-8xl">ELITE COACHES</h2>
            <p className="text-aero-text-muted">International level athletes dedicated to your growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-aero-black mb-6 relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-aero-green/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-2xl mb-1 tracking-tight">{member.name}</h4>
                <p className="text-aero-green text-xs font-bold tracking-[0.2em]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-aero-green/5 border border-aero-green/20 rounded-[3rem] p-12 md:p-20 text-center space-y-8">
          <h3 className="text-4xl md:text-6xl">READY TO START?</h3>
          <p className="text-aero-text-muted max-w-xl mx-auto">Book a assessment session with one of our head coaches to determine your training path.</p>
          <button className="bg-aero-green text-aero-black px-12 py-6 rounded-full font-impact text-2xl tracking-widest hover:scale-105 transition-transform">
            BOOK ASSESSMENT
          </button>
        </div>
      </section>
    </div>
  );
};

export default Training;
