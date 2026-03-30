import { Link, useLocation } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

const navLinks = [
  { name: "Academy", href: "/academy" },
  { name: "Locations", href: "/locations" },
  { name: "Membership", href: "/membership" },
  { name: "Social", href: "/social" },
  { name: "About", href: "/" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-extrabold tracking-tighter text-primary">
          AERO COURT BADMINTON
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-stone-600 hover:text-primary transition-colors font-medium",
                location.pathname === link.href && "text-primary font-bold border-b-2 border-primary pb-1"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-xl bg-primary-container text-white font-semibold hover:bg-primary transition-all scale-95 active:scale-90 duration-200">
            Book a Court
          </button>
          <button className="hidden md:block px-6 py-2 rounded-xl text-stone-600 hover:bg-stone-100/50 transition-all scale-95 active:scale-90 duration-200">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
