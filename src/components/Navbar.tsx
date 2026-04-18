import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-aero-black/80 backdrop-blur-md border-b border-aero-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-aero-green rounded-full flex items-center justify-center overflow-hidden">
            <div className="w-4 h-0.5 bg-aero-black transform -rotate-45" />
          </div>
          <span className="font-bebas text-2xl tracking-tighter group-hover:text-aero-green transition-colors">AERO COURT</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `text-xs font-semibold tracking-widest transition-colors hover:text-aero-green ${
                  isActive ? 'text-aero-green' : 'text-aero-text-muted'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <button className="bg-aero-green text-aero-black px-6 py-2 rounded-full font-bold text-xs tracking-widest hover:scale-105 active:scale-95 transition-transform flex items-center gap-2">
            BOOK NOW <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-aero-dark border-b border-aero-border active:focus-within:border-aero-green"
      >
        <div className="flex flex-col p-6 gap-6">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bebas tracking-widest hover:text-aero-green transition-colors"
            >
              {item.label}
            </NavLink>
          ))}
          <button className="bg-aero-green text-aero-black w-full py-4 rounded-xl font-bebas text-xl tracking-widest">
            BOOK A COURT
          </button>
        </div>
      </motion.div>
    </nav>
  );
};
