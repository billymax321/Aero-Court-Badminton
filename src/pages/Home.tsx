import React from 'react';
import { motion } from 'motion/react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Shield, Zap } from 'lucide-react';
import { PRODUCTS, TEAM } from '../constants';

const Home = () => {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-aero-black via-aero-black/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1626225967045-9410dded2e41?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-110 motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="text-7xl md:text-[10rem] leading-none mb-4 italic font-black text-white mix-blend-difference"
              >
                SPEED
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                className="text-7xl md:text-[10rem] leading-none mb-4 italic font-black text-white mix-blend-difference"
              >
                PRECISION
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                className="text-7xl md:text-[10rem] leading-none mb-4 italic font-black text-white mix-blend-difference"
              >
                <span className="text-aero-green underline decoration-4 underline-offset-8">AERO.</span>
              </motion.h1>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-aero-text-muted text-lg md:text-xl mb-12 font-medium tracking-wide"
            >
              Level up your game at the city's premier badminton arena. Elite courts, Olympic coaching, and a community of winners.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <button className="bg-aero-green text-aero-black px-10 py-5 rounded-full font-impact text-2xl tracking-wider hover:scale-105 active:scale-95 transition-transform flex items-center gap-3 group">
                RESERVE NOW <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="border border-aero-border text-white px-10 py-5 rounded-full font-impact text-2xl tracking-wider hover:bg-white/5 transition-colors">
                VIEW PROGRAMS
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 right-6 hidden xl:grid grid-cols-2 gap-px bg-aero-border">
          {[
            { label: 'O1', title: 'COURTS', value: '12' },
            { label: 'O2', title: 'COACHES', value: '08' },
            { label: 'O3', title: 'MEMBERS', value: '500+' },
            { label: 'O4', title: 'HOURS', value: '24/7' },
          ].map((stat) => (
            <div key={stat.label} className="bg-aero-dark p-8 w-48 text-center group transition-colors hover:bg-aero-green duration-500">
              <p className="text-xs font-mono text-aero-text-muted mb-4 group-hover:text-aero-black">{stat.label}</p>
              <h4 className="text-4xl font-bold mb-1 group-hover:text-aero-black">{stat.value}</h4>
              <p className="text-[10px] tracking-[0.3em] font-semibold text-aero-text-muted group-hover:text-aero-black/60">{stat.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-aero-border pb-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl mb-4">THE AERO<br />ADVANTAGE</h2>
            <p className="text-aero-text-muted">We don't just provide courts; we provide an ecosystem engineered for peak performance.</p>
          </div>
          <button className="text-aero-green font-impact text-xl tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
            EXPLORE FACILITIES <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Zap />, title: 'PRO LIGHTING', desc: 'Glare-free LED systems designed for high-speed tracking.' },
            { icon: <Shield />, title: 'ELITE TURF', desc: 'Professional grade mats with advanced shock absorption.' },
            { icon: <Trophy />, title: 'HI-TECH LAB', desc: 'Video analysis and biomechanical feedback tools.' },
            { icon: <Users />, title: 'LOUNGE', desc: 'Premium recovery spaces and social zones for networking.' },
          ].map((feature, i) => (
            <div key={i} className="bg-aero-dark p-10 border border-aero-border rounded-3xl group hover:border-aero-green/50 transition-colors">
              <div className="w-14 h-14 bg-aero-black rounded-2xl flex items-center justify-center mb-8 text-aero-green group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl mb-4">{feature.title}</h3>
              <p className="text-aero-text-muted text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Elite Training Banner */}
      <section className="h-[600px] relative mx-6 rounded-3xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?q=80&w=2070&auto=format&fit=crop" 
          alt="Coach" 
          className="w-full h-full object-cover grayscale brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-aero-green/10 backdrop-blur-[2px]">
          <span className="text-aero-green text-sm tracking-[0.5em] font-bold mb-8">ELITE TRAINING</span>
          <h2 className="text-6xl md:text-9xl mb-12 mix-blend-overlay">LEARN FROM<br />THE BEST.</h2>
          <button className="bg-white text-aero-black px-12 py-6 rounded-full font-impact text-2xl tracking-widest hover:scale-110 transition-transform">
            MEET OUR COACHES
          </button>
        </div>
      </section>

      {/* Gear Shop Preview */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl md:text-7xl">PRO SHOP</h2>
          <RouterNavLink to="/shop" className="text-aero-text-muted hover:text-white transition-colors text-sm tracking-widest font-bold">VIEW ALL ITEMS</RouterNavLink>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-aero-dark mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {product.badge && (
                  <span className="absolute top-6 left-6 bg-aero-green text-aero-black text-[10px] font-bold px-3 py-1 rounded-full tracking-tighter">
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-aero-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-aero-black px-6 py-3 rounded-full font-bold text-xs tracking-widest">ADD TO CART</span>
                </div>
              </div>
              <h4 className="text-xl mb-1 tracking-tight">{product.name}</h4>
              <p className="text-aero-text-muted font-mono">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};



export default Home;
