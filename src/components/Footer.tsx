import { NavLink } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Facebook, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-aero-dark border-t border-aero-border mt-20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-aero-green rounded-full" />
            <span className="font-bebas text-2xl tracking-tighter">AERO COURT</span>
          </NavLink>
          <p className="text-aero-text-muted text-sm leading-relaxed max-w-xs">
            The ultimate destination for badminton enthusiasts. Experience elite coaching and premium facilities.
          </p>
          <div className="flex gap-4">
            <Instagram size={20} className="text-aero-text-muted hover:text-white transition-colors cursor-pointer" />
            <Twitter size={20} className="text-aero-text-muted hover:text-white transition-colors cursor-pointer" />
            <Youtube size={20} className="text-aero-text-muted hover:text-white transition-colors cursor-pointer" />
            <Facebook size={20} className="text-aero-text-muted hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-white text-lg mb-6 tracking-widest font-bebas">QUICK LINKS</h4>
          <ul className="space-y-4 text-sm text-aero-text-muted">
            <li><NavLink to="/booking" className="hover:text-aero-green transition-colors">Court Booking</NavLink></li>
            <li><NavLink to="/membership" className="hover:text-aero-green transition-colors">Membership Tiers</NavLink></li>
            <li><NavLink to="/training" className="hover:text-aero-green transition-colors">Training Programs</NavLink></li>
            <li><NavLink to="/about" className="hover:text-aero-green transition-colors">Our Coaches</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg mb-6 tracking-widest font-bebas">LOCATION</h4>
          <address className="not-italic space-y-4 text-sm text-aero-text-muted">
            <p>123 Velocity Drive<br />Badminton District, SC 90210</p>
            <p>Mon - Sun: 6:00 AM - 11:00 PM</p>
            <p className="text-white font-medium">+1 (555) AERO-CRT</p>
          </address>
        </div>

        <div className="space-y-6">
          <h4 className="text-white text-lg mb-2 tracking-widest font-bebas">NEWSLETTER</h4>
          <p className="text-aero-text-muted text-sm">Join the club for exclusive updates.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="w-full bg-aero-black border border-aero-border rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-aero-green transition-colors truncate"
            />
            <button className="absolute right-2 top-1.5 p-1.5 bg-aero-green text-aero-black rounded-md hover:scale-105 transition-transform">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-aero-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium tracking-[0.2em] text-aero-text-muted">
        <p>© 2026 AERO COURT. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <span className="hover:text-white transition-colors cursor-pointer">PRIVACY POLICY</span>
          <span className="hover:text-white transition-colors cursor-pointer">TERMS OF SERVICE</span>
        </div>
      </div>
    </footer>
  );
};
