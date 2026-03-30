import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-stone-100 w-full py-12 px-8 font-sans text-sm uppercase tracking-widest">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold text-primary">
          AERO COURT
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link className="text-stone-500 hover:text-primary transition-colors opacity-80 hover:opacity-100" to="#">Privacy Policy</Link>
          <Link className="text-stone-500 hover:text-primary transition-colors opacity-80 hover:opacity-100" to="#">Terms of Service</Link>
          <Link className="text-stone-500 hover:text-primary transition-colors opacity-80 hover:opacity-100" to="#">Contact Us</Link>
          <Link className="text-stone-500 hover:text-primary transition-colors opacity-80 hover:opacity-100" to="#">Instagram</Link>
          <Link className="text-stone-500 hover:text-primary transition-colors opacity-80 hover:opacity-100" to="#">Facebook</Link>
        </div>
        <div className="text-stone-500 text-xs text-center md:text-right">
          © 2024 Aero Court Badminton Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
