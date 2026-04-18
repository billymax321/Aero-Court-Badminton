import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { Filter, ChevronDown, ShoppingBag } from 'lucide-react';

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row justify-between items-baseline gap-8 mb-20">
        <h1 className="text-7xl md:text-9xl italic font-black">PRO<br /><span className="text-aero-green">EQUIPMENT.</span></h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 border border-aero-border px-6 py-3 rounded-full text-xs font-bold tracking-widest hover:border-aero-green transition-colors">
            FILTER <Filter size={14} />
          </button>
          <button className="flex items-center gap-2 border border-aero-border px-6 py-3 rounded-full text-xs font-bold tracking-widest hover:border-aero-green transition-colors">
            SORT: FEATURED <ChevronDown size={14} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {PRODUCTS.map((product) => (
          <motion.div 
            key={product.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-aero-dark mb-6">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {product.badge && (
                <span className="absolute top-8 left-8 bg-aero-green text-aero-black text-[10px] font-bold px-4 py-1.5 rounded-full tracking-tighter shadow-lg">
                  {product.badge}
                </span>
              )}
              <div className="absolute inset-0 bg-aero-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                <button className="bg-white text-aero-black px-8 py-3 rounded-full font-bold text-xs tracking-widest hover:scale-105 transition-transform flex items-center gap-2">
                  ADD TO CART <ShoppingBag size={14} />
                </button>
                <button className="text-white text-xs font-bold tracking-widest hover:underline decoration-aero-green underline-offset-4">
                  QUICK VIEW
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start px-2">
              <div>
                <h4 className="text-xl mb-1 tracking-tight font-bold group-hover:text-aero-green transition-colors">{product.name}</h4>
                <p className="text-aero-text-muted text-xs tracking-widest uppercase font-semibold">PREMIUM GEAR</p>
              </div>
              <span className="font-mono text-lg text-aero-green">{product.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recommendations Banner */}
      <section className="mt-40 bg-aero-dark/50 border border-aero-border p-12 md:p-20 rounded-[4rem] relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl">NOT SURE WHAT<br />TO PICK?</h2>
            <p className="text-aero-text-muted max-w-md">Our gear specialists can help you find the perfect racket based on your playstyle.</p>
            <button className="bg-aero-green text-aero-black px-10 py-5 rounded-full font-impact text-xl tracking-widest hover:scale-105 transition-transform">
              GET RECOMMENDATION
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-square bg-aero-black rounded-3xl border border-aero-border flex flex-col items-center justify-center p-8 text-center gap-4 group hover:border-aero-green transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-aero-border flex items-center justify-center text-aero-green group-hover:bg-aero-green group-hover:text-aero-black transition-all font-impact">SM</div>
                <h4 className="font-bold text-sm tracking-widest">SMASH POWER</h4>
             </div>
             <div className="aspect-square bg-aero-black rounded-3xl border border-aero-border flex flex-col items-center justify-center p-8 text-center gap-4 group hover:border-aero-green transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-aero-border flex items-center justify-center text-aero-green group-hover:bg-aero-green group-hover:text-aero-black transition-all font-impact">CT</div>
                <h4 className="font-bold text-sm tracking-widest">CONTROL</h4>
             </div>
          </div>
        </div>
        
        {/* Decorative background text */}
        <div className="absolute -bottom-10 -right-20 text-[20rem] font-black italic text-white/5 select-none pointer-events-none tracking-tighter">
          AERO
        </div>
      </section>
    </div>
  );
};

export default Shop;
