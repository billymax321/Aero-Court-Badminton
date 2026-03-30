import { motion } from "motion/react";
import { Trophy, Target, Users, Zap, Star, ChevronRight } from "lucide-react";

export default function AcademyPage() {
  const programs = [
    {
      title: "Junior Elite",
      age: "7-12 Years",
      desc: "Foundational mastery focusing on biomechanics, footwork, and the joy of the game.",
      features: ["Bi-weekly sessions", "Skill assessment", "Internal tournaments"],
      color: "bg-primary",
      textColor: "text-white"
    },
    {
      title: "High Performance",
      age: "13-18 Years",
      desc: "Intensive training for competitive athletes aiming for national and international levels.",
      features: ["Daily training", "Video analysis", "Strength & Conditioning"],
      color: "bg-tertiary-fixed",
      textColor: "text-on-tertiary-fixed"
    },
    {
      title: "Adult Mastery",
      age: "18+ Years",
      desc: "Refine your technique and strategy. Perfect for club players looking to dominate.",
      features: ["Flexible scheduling", "Tactical workshops", "Social integration"],
      color: "bg-surface-container-highest",
      textColor: "text-primary"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-40">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0faVXRYO_29COqZ00xl4kewh2Xk0QFex30wgt8z3YlEh576ZibYfR9mIHNi2kEWV9HfTmdGMMJ9kVC7L0UGejjlSsEqBbTif-hyt7m5a4Ga3xjacBux1grdqarLHfoEL0JPtgLmXxZxgWtMf7u0wuT_clTPh3-Ej0wDwmLNRXFYAlutdp7YeyRM1-g0hl0TqOSSuwLbYMytLzOH3keKuYg5dfGLOT9ECbjPm2s4bYhNwgQSuI4-KzZO_EBFYdjBSjvgjzv8GC2Ko"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-tertiary-fixed font-bold tracking-widest uppercase text-sm mb-4 block">The Aero Academy</span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-6 uppercase">
              FORGING <br /> <span className="text-primary-fixed italic">CHAMPIONS.</span>
            </h1>
            <p className="text-xl text-white/80 max-w-xl leading-relaxed">
              Our curriculum is designed by world-class athletes to transform potential into performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={cn("p-10 rounded-2xl flex flex-col min-h-[500px]", program.color)}
            >
              <div className="flex justify-between items-start mb-12">
                <span className={cn("px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest", program.textColor === "text-white" ? "bg-white/20" : "bg-primary/10")}>
                  {program.age}
                </span>
                <Zap className={cn("w-6 h-6", program.textColor)} />
              </div>
              <h3 className={cn("text-4xl font-black uppercase tracking-tighter mb-6", program.textColor)}>
                {program.title}
              </h3>
              <p className={cn("text-lg mb-10 opacity-90 leading-relaxed", program.textColor)}>
                {program.desc}
              </p>
              <ul className="space-y-4 mb-12 flex-grow">
                {program.features.map((f) => (
                  <li key={f} className={cn("flex items-center gap-3 font-medium", program.textColor)}>
                    <ChevronRight className="w-4 h-4" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={cn(
                "w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all",
                program.textColor === "text-white" ? "bg-white text-primary hover:bg-tertiary-fixed hover:text-on-tertiary-fixed" : "bg-primary text-white hover:scale-105"
              )}>
                Enquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl font-black text-primary tracking-tighter uppercase mb-8">The Aero <br /> Philosophy</h2>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-12">
                We believe that technical mastery is the foundation of creative play. Our coaching methodology balances rigorous physical conditioning with psychological resilience training.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-black text-primary mb-2">98%</div>
                  <p className="text-xs uppercase tracking-widest font-bold text-stone-500">Student Satisfaction</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary mb-2">15+</div>
                  <p className="text-xs uppercase tracking-widest font-bold text-stone-500">Pro Coaches</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary rounded-3xl overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgYY2yHwydUUQZsjKrgZec6bdsmAZokbQf8jVH9-5RSu-HoOf77GzR8gJw7X_FOTy89EVfuAzyw6seuO0NfMWAcEX4yUn5Ix4iyzf53w7qgi6rtSZ4GFXs2N5LgHhhFiXZt0TrbYdAElQsgNsTg6sYuBga92Ius4-l8TW7KJd4X8mWK5h1QFFDnFpIo_kUAcEJ2Jly1tyc3hEfkOWKrGZ9bEs7HmFEMhwEDGJZsCM_FULN2JDoR-VvVHHzxzwQxLPoSMH3KvfUbWI"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-tertiary-fixed p-8 rounded-2xl shadow-2xl hidden lg:block">
                <Trophy className="w-12 h-12 text-on-tertiary-fixed mb-4" />
                <p className="text-on-tertiary-fixed font-black uppercase tracking-tighter text-xl">Championship <br /> DNA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { cn } from "@/src/lib/utils";
