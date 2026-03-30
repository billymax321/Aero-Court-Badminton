import { motion } from "motion/react";
import { Calendar, Sun, Moon, Users, Camera, Share2 } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function SocialPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[716px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqXqO0n3_LacNrUrekaOPMZU26jjfWAVQUD64A9AjqF6crxUnJ_OvVHVMfUCjEnjLEpHYbkR_vlHvQsMBDL05EIYW0SXa0dUGbjf_upUam92yl9gTn5hsWsjONy2xn6T6AbDY1FCr44NjMu4WZlf5TOrOz5thMwDfgEE7ISt6lNhgk-po2347Iyccf-s_-gPgoyIM_TKpu6wbgsWvVedvkpkPNlLvIXgdpehJK5Du66_GfuXCHSOh7V7qnXEXK0CrhBlUZ5Bt0mjs"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary-container/60 opacity-40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-tertiary-fixed font-bold tracking-[0.2em] text-sm mb-4 uppercase">The Social Hub</span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter">
              WHERE THE <br /> <span className="text-tertiary-fixed">COMMUNITY</span> SMASHES.
            </h1>
            <p className="text-xl text-white/90 font-medium max-w-lg mb-8 leading-relaxed">
              Beyond the lines of the court lies a community built on passion, energy, and shared victory. Join the Aero Court family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Weekly Social Sessions */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-primary tracking-tighter mb-4 uppercase">Weekly Social Sessions</h2>
              <p className="text-on-surface-variant text-lg">Drop in and play. No partner needed, just bring your racket and your game face. All levels welcome across our curated weekly schedule.</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-secondary-container p-4 rounded-xl flex items-center gap-3">
                <Calendar className="text-primary w-6 h-6" />
                <span className="font-bold text-primary uppercase text-sm tracking-wider">Open 7 Days</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Morning Social Mix */}
            <div className="group bg-surface-container-low rounded-xl p-8 hover:bg-surface-container-high transition-all duration-300">
              <div className="flex justify-between items-start mb-12">
                <div className="bg-primary-container text-white p-3 rounded-xl">
                  <Sun className="w-6 h-6" />
                </div>
                <span className="text-primary font-bold text-lg">$15 / Session</span>
              </div>
              <h3 className="text-2xl font-extrabold text-primary mb-2 uppercase">Morning Social Mix</h3>
              <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">The perfect start to your day. Low-pressure games designed for rhythm and cardio.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-on-surface-variant font-medium text-sm">
                  <span className="material-symbols-outlined text-xs">schedule</span>
                  07:00 AM - 09:30 AM
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant font-medium text-sm">
                  <Users className="w-4 h-4" />
                  Mon, Wed, Fri
                </div>
              </div>
              <button className="w-full py-4 bg-white text-primary border border-outline-variant font-bold rounded-xl group-hover:bg-primary group-hover:text-white transition-all uppercase tracking-widest text-xs">Join Session</button>
            </div>
            {/* Night Smash Social */}
            <div className="group bg-primary rounded-xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -right-8 -top-8 opacity-10">
                <span className="material-symbols-outlined text-[120px]">bolt</span>
              </div>
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="bg-tertiary-fixed text-on-tertiary-fixed p-3 rounded-xl">
                  <Moon className="w-6 h-6" />
                </div>
                <span className="text-primary-fixed font-bold text-lg">$22 / Session</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2 uppercase relative z-10">Night Smash Social</h3>
              <p className="text-white/70 mb-8 text-sm leading-relaxed relative z-10">High energy, competitive rotations, and music. Our most popular weekly event for intermediate players.</p>
              <div className="space-y-3 mb-8 relative z-10">
                <div className="flex items-center gap-2 text-white/80 font-medium text-sm">
                  <span className="material-symbols-outlined text-xs">schedule</span>
                  07:00 PM - 10:00 PM
                </div>
                <div className="flex items-center gap-2 text-white/80 font-medium text-sm">
                  <Users className="w-4 h-4" />
                  Tue, Thu, Sat
                </div>
              </div>
              <button className="w-full py-4 bg-tertiary-fixed text-on-tertiary-fixed font-bold rounded-xl hover:scale-[1.02] transition-all uppercase tracking-widest text-xs relative z-10">Book Spot</button>
            </div>
            {/* Family Open Play */}
            <div className="group bg-surface-container-low rounded-xl p-8 hover:bg-surface-container-high transition-all duration-300">
              <div className="flex justify-between items-start mb-12">
                <div className="bg-secondary text-white p-3 rounded-xl">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-primary font-bold text-lg">$12 / Session</span>
              </div>
              <h3 className="text-2xl font-extrabold text-primary mb-2 uppercase">Family Open Play</h3>
              <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">Quality time on court. Specially priced for parents and children to play together.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-on-surface-variant font-medium text-sm">
                  <span className="material-symbols-outlined text-xs">schedule</span>
                  01:00 PM - 04:00 PM
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant font-medium text-sm">
                  <Users className="w-4 h-4" />
                  Every Sunday
                </div>
              </div>
              <button className="w-full py-4 bg-white text-primary border border-outline-variant font-bold rounded-xl group-hover:bg-primary group-hover:text-white transition-all uppercase tracking-widest text-xs">Register Family</button>
            </div>
          </div>
        </div>
      </section>

      {/* The Community Experience */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">Visual Stories</span>
              <h2 className="text-5xl font-extrabold text-primary leading-tight tracking-tighter uppercase mb-6">The Community Experience</h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">Aero Court isn't just about the shuttlecock—it's about the people. From post-match coffee to our annual championships, catch a glimpse of the vibrant atmosphere our members create every single day.</p>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-primary">2.5k+</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Active Members</span>
                </div>
                <div className="w-px h-12 bg-outline-variant"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-primary">120+</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Monthly Events</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img className="rounded-xl object-cover h-64 w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkNLKtCH0nYnrfoquhQJ07CD_k40sFXWMzWkaRO9Qp9s-36KUdFSQDFwfPHuS-ZJQYWgKAoFzjhLKPiDfDGn-TjixwV_plAeOu9_fpSIXftjbpro6pEHSPFUOpo0JDcGlcQ-gKNZ5EhZaYVWlmNRfK4xRlgZOxzQBmRs4E16NXCaZMya9JSe1z3keP5YLWRgtUqYcWAM91LAJjPTCZNfn6wc1bGgql8HysrtlIFK7nkrUgmJvvvCWwRXJL-f59Cp4csZIkYscrXZE" referrerPolicy="no-referrer" />
                <img className="rounded-xl object-cover h-48 w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXptRrvcUIMUnVqYJ8kyPgTIho-h2fkqw2vMTTTZ0MK5wQU71fyFFGSYmF7ge19bWOUppKmRxACSddPsihryUELmqm5JyZwG0P_AZwGAo6MtKDmbcfquOxPcJ22tPyNhVhV7f9cfAShEZYyHnQUpDg_d98N-0iyf2lZFABYYDWMUvCY38c1eiFpko3M_SXHAplRJFcydK86sshavtami3RoPxGRw3_GQNgJsQ8t2mKR87BY-srPPg1Oj_JjFM-M4SsUuzPtY9vH-8" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4">
                <img className="rounded-xl object-cover h-48 w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWHkP6KoqZBsOqLYEBPsxbgj02xoWcLrEEBSbcAD_i-5ZQQRuKywc1zjAbH1S1s-sna8qd0Con257i3vfuuthNqE7RotfDBpMYntVz58EBdRnmCbwG5Y2mzFK9gZKNj8CDFadNf7jdx_tqblwhg6yL4o7qI8-AOhXzisyYdOVkHh8tpwatI9AduKEImSbCw33h1J9SZp9-YrMi5d1IqD0Tpv8pMEl4ORr3MaB9zImi9hGeLx83GBnKQZzlK5rlR0YmjjlZSU0ofVg" referrerPolicy="no-referrer" />
                <img className="rounded-xl object-cover h-64 w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgYY2yHwydUUQZsjKrgZec6bdsmAZokbQf8jVH9-5RSu-HoOf77GzR8gJw7X_FOTy89EVfuAzyw6seuO0NfMWAcEX4yUn5Ix4iyzf53w7qgi6rtSZ4GFXs2N5LgHhhFiXZt0TrbYdAElQsgNsTg6sYuBga92Ius4-l8TW7KJd4X8mWK5h1QFFDnFpIo_kUAcEJ2Jly1tyc3hEfkOWKrGZ9bEs7HmFEMhwEDGJZsCM_FULN2JDoR-VvVHHzxzwQxLPoSMH3KvfUbWI" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
        {/* Horizontal Bento Gallery */}
        <div className="px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuA0faVXRYO_29COqZ00xl4kewh2Xk0QFex30wgt8z3YlEh576ZibYfR9mIHNi2kEWV9HfTmdGMMJ9kVC7L0UGejjlSsEqBbTif-hyt7m5a4Ga3xjacBux1grdqarLHfoEL0JPtgLmXxZxgWtMf7u0wuT_clTPh3-Ej0wDwmLNRXFYAlutdp7YeyRM1-g0hl0TqOSSuwLbYMytLzOH3keKuYg5dfGLOT9ECbjPm2s4bYhNwgQSuI4-KzZO_EBFYdjBSjvgjzv8GC2Ko",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCNB6jSbfm_2WnH1PNa7E0lpXU2QUiyzEKIOALDTl1cQzjSL2bnVUfraBEFelB8ZXiLifH-EfGZiOwHSTaS8Wz0OonEFnNgAfIXk38gszut0topylBXObll-ixJ-vsQ8taoW5kggrsSYRBLCN_rwPAIOgDPWnYJmQIXn1c3yfDDAGreld7VhJGh2ijV9uRi3viWWKK586-gFdRPAN4N_-iV3ux168hAmaaRmeq2K5bkCHODKqfzGCZISFrhJkj9kAZZL5EIH2gK8v0",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAPL2Gi-91QId_kj5gDx5Oa7CLdqH78UY5FWkbNcwC67gYJPt0PaIsQevSqnS-BlwHIpR0zQMaszDXSezXHVbxhXzdjDU7mGTS48MkriHr1obyF8SObXlC4hCTYwDZ1BSiJmSg8crDZ5Y5Kx3DB6JrMnVQzbJSOS_gw2EhTpci5hgUyPSkTmbVtW2BqWynd4IJS4vK-ETSfhQ560MQXFAbTe07AA0t4Fzt7emsH0--EIg854gNvtyuy0S9RdqDhWTHGKT3IunMLppA",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDUGhhARJdigA7M9Sc4hDP24aar_LBnbKUpYaysF70kmcR-8MJRCQsljDnpWAXAtna1cMu-CQ4953N_CX654ZaCVPcrJ3s8xwUgbfcynoC6O8GaRG2KVqRdpqdHsd-Bh3Un8ij_Qfb98HIeU-bRwNVvrV5HcNvCjp1LbqWww0QNdAp8LDq-o6rAzjuo9Ub62cjtN8YlhV0w3-z9LYIAaOMI2K8qK4qmQID-29V_leT1p-AOnEnn2NKklsF5YAbcFUUmQY_hrfjhYZk",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDBkPJc3YhKhhA0zZuzDJFVzi8OkJ8YVWCnAT68CCR2WQ0ejj6IjpKdv_cLF0ShbVb3n1rtQEbegid2mGwKRIvs7rzA7GYwf_R5N7nk44_Fz_1jOaoUgFQ1Aq_KZt9mOZRMdMxhggXXDgLZTU7ApSovB-7iR3QguACOveW_mpTgFQC5PUxQx6LNFX-p5G0Q3jDX4z4gze9RL3Hh2XF0y69JFGmZ7MDvy_DI9CVT877g4wifzUoWc0L1plEMp08rh9kKz6S62a_d2YY"
            ].map((img, i) => (
              <div key={i} className={cn("aspect-square bg-surface-container-high rounded-xl overflow-hidden group", i === 2 && "lg:col-span-2")}>
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" src={img} referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-8">
          <div className="bg-primary text-white rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[300px] font-black tracking-tighter transform rotate-[-15deg]">AERO</span>
              </div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">Stay in the Loop</h2>
              <p className="text-xl text-primary-fixed max-w-2xl mx-auto mb-12">Join our digital community on Instagram and Facebook for daily highlights, schedule updates, and exclusive session alerts.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a className="inline-flex items-center justify-center gap-3 bg-white text-primary px-8 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-tertiary-fixed transition-colors" href="#">
                  <Camera className="w-5 h-5" />
                  Instagram
                </a>
                <a className="inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white px-8 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors" href="#">
                  <Share2 className="w-5 h-5" />
                  Facebook Group
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
