import { motion } from "motion/react";
import { CheckCircle, Shield, Users, Zap, Calendar, Tag, Network } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function MembershipPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIj9Q--bSqHLiFGT0YUex47H0vQtULwlg79yCxykmk3vFIh1MTd7tfRTaSTX9RrUrAFQNkHptz8pDPwpRTnCEztBy176sDpg-afdfp8IuNz3kuX22gw_q_qwIbtpGjtJSQn893ZRABT29DpfKAsI5fkQBk4KLLvQdr9-jtWG4vCpgT5WRTRdZY3y9H0WlOo6u91YXNZIkJIGdk5sM1AJoe_jlVbrM0VbcVsFYQlnzgC0ljASOvrpaAR45aFQF1TAJWYbmJhWrVdD0"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold tracking-widest uppercase mb-6">Elevate Your Game</span>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter leading-none mb-8">
              JOIN THE <br /> <span className="text-primary-fixed">ELITE</span>
            </h1>
            <p className="text-xl text-secondary-fixed-dim mb-10 leading-relaxed font-light">
              Unlock the full potential of your badminton journey with exclusive access, priority court time, and professional mentorship.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-xl font-extrabold uppercase tracking-widest hover:scale-105 transition-transform">Become a Member Today</button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">View Plans</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Aero Court Advantage */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGACdC68xQeI9quIhEnIRMPW0GhtnlhFiHLJPFOGFtEpxN-fHwJ3KYZpENsUOlzWsee4lRS4uuVMdecXMAGHYbn-ojU5aGIUxqm2gLjtceZZH_eby2aQP0jtGTO8U52P281_0z41yAfn5ii0GXlQdT67QXud365k4TPnSz3yl_KYRxd8Cm6PTzNenM8CEwMjXjeM2Q25CC1q30t461C1gmfkO_IBafXNaskMBHHLqeonPhLCU_nGawYqN71gTHrLI56V6kn3_zjiE"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white/80 backdrop-blur-md rounded-xl p-6 hidden md:block shadow-xl">
                <span className="text-4xl font-black text-primary block">24/7</span>
                <span className="text-sm text-on-surface-variant font-medium">Facility Access for Premium Members</span>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-extrabold tracking-tighter text-primary mb-8 uppercase">The Aero Court Advantage</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center">
                    <Shield className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Olympic-Grade Courts</h3>
                    <p className="text-on-surface-variant leading-relaxed">Play on BWF-approved flooring designed for optimal shock absorption and player performance.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center">
                    <Users className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Expert Coaching Team</h3>
                    <p className="text-on-surface-variant leading-relaxed">Access to former national players and certified professional coaches for all skill levels.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center">
                    <Zap className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Kinetic Training Zone</h3>
                    <p className="text-on-surface-variant leading-relaxed">Dedicated functional fitness area optimized specifically for badminton-specific movement and strength.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Benefits Bento Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold tracking-tighter text-primary uppercase text-center">Exclusive Benefits</h2>
            <div className="h-1 w-24 bg-tertiary-fixed mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-2 bg-primary text-white p-10 rounded-xl relative overflow-hidden flex flex-col justify-end">
              <div className="absolute top-10 right-10 opacity-20">
                <Calendar className="w-[120px] h-[120px]" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Priority Booking</h3>
              <p className="text-primary-fixed leading-relaxed max-w-md">Secure your favorite courts up to 14 days in advance. Members always get first choice during peak hours.</p>
            </div>
            <div className="bg-surface-container-high p-10 rounded-xl flex flex-col justify-between border-b-4 border-primary">
              <Tag className="text-primary w-10 h-10" />
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Member Discounts</h3>
                <p className="text-on-surface-variant">Save 20% on all court bookings and academy coaching programs.</p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-xl flex flex-col justify-between shadow-sm">
              <Network className="text-primary w-10 h-10" />
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Elite Network</h3>
                <p className="text-on-surface-variant">Join exclusive member-only tournaments and community social mixers.</p>
              </div>
            </div>
            <div className="md:col-span-2 relative group overflow-hidden rounded-xl">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP6iCchyAZf5CIRgu5xGgUXpl3fPWN-mYIT8z4PmPSwOPtwOMO1pmUTrKu2P-3Yy-9SMEtrnhiqEdxHM-PkKN1XVbNFQrcxOYwO7Hw5-Xon5ZR9gPyOA4Kzn81JUII95Hyf5acBfMMPsZdXZV01ti1UgikF6cj14TsaOQkMw0ycwV3D5m5x5y9JKqMFi9xMy7A7KI3L3EnCRE4ldyxzGDy5YtjTiP-ucT2JKSld1_hcPxWrsD3-T0Khtp5qRXgQMWDofhbVYTu2Rc" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-2">Pro-Shop Access</h3>
                <p className="text-white/80 leading-relaxed max-w-md">Early access to limited edition gear and complimentary racket restringing services every quarter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "SILVER", price: "49", perks: ["7-day priority booking", "10% Coaching Discount", "Access to lounge"] },
              { name: "GOLD", price: "89", perks: ["14-day priority booking", "20% Coaching Discount", "2 Guest passes per month", "Free racket restringing (1/mo)"], popular: true },
              { name: "PLATINUM", price: "159", perks: ["30-day priority booking", "Personal coaching session (1/mo)", "24/7 Facility access", "Private locker rental"] }
            ].map((tier) => (
              <div key={tier.name} className={cn(
                "p-10 rounded-xl flex flex-col border transition-all duration-300",
                tier.popular ? "bg-primary text-white scale-105 shadow-2xl relative z-10 border-transparent" : "bg-surface-container-low border-outline-variant/20"
              )}>
                {tier.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 rounded-full text-xs font-black tracking-widest">MOST POPULAR</div>}
                <h4 className={cn("text-lg font-bold mb-2", tier.popular ? "text-primary-fixed" : "text-primary-container")}>{tier.name}</h4>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black">$ {tier.price}</span>
                  <span className={tier.popular ? "text-primary-fixed-dim" : "text-on-surface-variant"}>/month</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <CheckCircle className={cn("w-4 h-4", tier.popular ? "text-tertiary-fixed" : "text-primary")} />
                      <span className={tier.popular ? "text-white/90" : "text-on-surface-variant"}>{perk}</span>
                    </li>
                  ))}
                </ul>
                <button className={cn(
                  "w-full py-4 font-bold rounded-xl transition-all",
                  tier.popular ? "bg-tertiary-fixed text-on-tertiary-fixed font-black uppercase tracking-widest hover:scale-105" : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                )}>
                  {tier.popular ? "Join Gold Now" : "Select Plan"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="bg-primary-container rounded-[2rem] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxhkYypw8G5osMo-QyNe7aMGpXSaN80ekrxi6tRn1Atx4XEA2fyfFyeDq1hZ856zXkHdq1RQjfeQkdRfMwjwW5qVXyXejXfzvQ6EnAcDUIX-_f4pxTdwTz1K4toRQU5d39UJCnzBKZ6FvZJT3KxHd7w3GJ_VFTrVKgPSef0jgv02bKdn_OqWrbi5Wj5i-d8LbtWhso5Bi2u8mZGm43TH9PyFTyyk3bl4aC07ajx3aIRJalP6LMAVHnZNqqgdsj9vWRM9xaHjX0zpc" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl font-extrabold tracking-tighter mb-6 uppercase">Ready to Start Your Journey?</h2>
            <p className="text-xl text-primary-fixed-dim mb-10 max-w-2xl mx-auto">Join a community of champions. Become a member of the Aero Court Badminton Academy today and experience excellence.</p>
            <button className="bg-white text-primary px-12 py-5 rounded-xl font-black uppercase tracking-[0.2em] hover:bg-tertiary-fixed transition-colors">Become a Member Today</button>
          </div>
        </div>
      </section>
    </div>
  );
}
