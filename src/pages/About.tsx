import { motion } from "motion/react";
import { Target, Eye, Users, Trophy, Zap, Calendar, MapPin, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex items-center overflow-hidden mb-24">
        <div className="absolute inset-0 z-0">
          <img
            alt="Athletic Badminton Motion"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyC2u41Mf5-09VvABkLoGTZy0WN8oawfF-22F9aYnOhRktII3UrHgstWmkNGsOF59UPr7xjHDXIHuKJ_8hTE5Z4ZJyRTAuJmKQulH04kI7_K3lmOpHnHE6nWv1PwJuA_RfzFL70JsNAP6e3_1o1UDbYixNISZhWHV1ZgvIuJSjIy7NGZRGZmgFWtn0umJsb4cjC_Y7kf49QSL1xnvDNSlgydhGabm81Tv11WebeL68I6pSnlLNY5HdJ5oXvnbzpfvof1fDqTrQ1To"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-2/3 lg:w-1/2"
          >
            <span className="text-tertiary-fixed font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Est. 2012</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter mb-6">
              LEGACY IN <br /> <span className="text-primary-fixed italic">EVERY STROKE.</span>
            </h1>
            <p className="text-xl text-surface-container-low max-w-md leading-relaxed">
              Redefining the standard of badminton excellence through precision coaching and a championship culture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <h2 className="text-4xl font-bold text-primary mb-8 tracking-tight">Our Story</h2>
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
              <p>Aero Court Badminton Academy began with a single court and a singular vision: to bring world-class training techniques to the local community. Founded by former national athletes, we understood that badminton is more than a game—it's a symphony of power and finesse.</p>
              <p>Over the last decade, we have grown from a small training hub into a multi-location powerhouse, producing regional champions and fostering a lifelong love for the sport in thousands of members. Our growth is built on the foundation of technical rigor and an unwavering commitment to the "Aero Way."</p>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <motion.div
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="bg-surface-container-high p-4 rounded-xl rotate-3 transition-all duration-500"
            >
              <img
                alt="Academy History"
                className="rounded-lg shadow-xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApc0m6zk-Avw9kueox4GONDM1zS2ZXxNgj_pg-8o0G5Ouqti-mAMDBUmsNp-8ucKJUwNtljdYUdasNXOzuJbqiPYACmtiMMq4j8Ej2KdX2jm6E1fqAhDB4b7ngpTAXAk9uRhiZh2kD42yJwzK3BKTWaFgd_q6BPLr20h88ZrSwrOcIcRkrKn79Q5P7qn4CGuzmlKpddhTSmaLT9a_EjBZR3b8a3Y-NUe0FclFyMAWRIZ4w733iCmbNtCxCH__to8E9ygQlMnnC3bY"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-8 -left-8 bg-primary p-6 rounded-xl shadow-2xl text-white hidden lg:block">
              <p className="text-4xl font-black">12+</p>
              <p className="text-xs tracking-widest uppercase opacity-70">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface-container-low py-32 mb-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-primary p-12 rounded-xl text-white flex flex-col justify-between min-h-[400px]">
              <div>
                <Target className="w-12 h-12 text-tertiary-fixed mb-6" />
                <h3 className="text-3xl font-bold mb-6 tracking-tight uppercase">Our Mission</h3>
                <p className="text-xl opacity-90 leading-relaxed max-w-2xl">To empower athletes of all levels by providing elite-tier coaching, professional facilities, and a community that inspires discipline, resilience, and peak performance.</p>
              </div>
              <div className="mt-8 flex gap-4">
                <span className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest">Precision</span>
                <span className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest">Discipline</span>
                <span className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest">Growth</span>
              </div>
            </div>
            <div className="bg-surface-container-highest p-12 rounded-xl flex flex-col justify-center border-b-4 border-primary">
              <Eye className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight uppercase">Our Vision</h3>
              <p className="text-on-surface-variant leading-relaxed">To be the global benchmark for badminton academies, where champions are forged and the spirit of the sport is celebrated daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-primary tracking-tight mb-2">The Aero Court Team</h2>
            <p className="text-on-surface-variant uppercase tracking-widest text-sm font-bold">World-class expertise at your service</p>
          </div>
          <div className="h-px flex-grow bg-outline-variant/30 mx-8 mb-3 hidden md:block"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Marcus Tan",
              role: "Founder & Head Coach",
              desc: "Former National Team Captain with 20 years of international competitive experience.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm2Fvh0yE3Qj9jP-HemQjMl_jIE8R6n3tQAcNrHOoic7AXpbMSRVZC1zOltjUzgLeGxBlVrSm9NBiasf3v-broSetLuTzz0J-oq4csyzjQmHP4Wx2yQeKnHAy9dASao9gQ5kCc1samDCjB8Hi3SiNwxh5eMY7XrzNlYz_nwKz7-_S6aHOFR_MS4KzQSsf4TAig9ghlI0aLdWE5onYY_3jLzIXOHu5nDSfA1Cn0_AY7LZQiOHbI_YCfAH0ea1v-auhrMwG8MdRDfR0"
            },
            {
              name: "Sarah Jenkins",
              role: "Operations Director",
              desc: "Specializing in athlete management and multi-facility operational excellence.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmvX0BhQlg2gLAwKiR_3nBhMFWVJzzhn-Pht-r2PHBnHvCwjwlXUeSbdR1Sgb8k-kZoBwdkjvTzT2Czj1CRVe8JjflZHLQ77Qqiw9Z4Xp5nSLZUTqg6_JisaiavrfwL_hDg5nkpCEsrJ8c4AOWv2lbbh7mh908g0ZeMAVdkjQwMJD3e1Bt7dm-e-rr7PtRCrorwnOh7vUn1ZX2cPm-LF6N-QjayCuA0fKIcUUW2nlw6Lx_xq-GoysgfnRNaKvFT-GI4MZuYpZPfvM"
            },
            {
              name: "David Wong",
              role: "Senior Performance Coach",
              desc: "Expert in footwork biomechanics and psychological high-performance training.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBduJxwRnbStZtSVk8bE2we-Rq4KDXUWjRLiFEoga6STGfcugU5NBSUPb8MsIHyAfezkNKpo-TkMDp03WW9coeDs3y23VWpkO8R01lmXEB5YA73FIGe2RBedSMIKiS9scyvld_EItIgMr6vH_tNKAQcCyJtdk3DPNKRFRGChPoonTt3gVHRXi7Zbsu9o2TtBg_QRoqxOA2YpD8NHdbYZFi_G2TWcjGQ2Xk5OZzP7sUXoqSWrzuUqMsUNAPu2TVUHjMs9WEqjcp4iQc"
            },
            {
              name: "Elena Rossi",
              role: "Youth Academy Lead",
              desc: "Certified youth sports development specialist focused on foundational skills.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcWhYXQGiqFjsaFpnboV8EDjdDshP9mwLYBAMgN3lhKxKO6AoBcaoEFzRSrmkLMoTZswdaIuvnYzxfDhebJHICxlTwp_Iqk5ZEumUyEctvINMqEtiZuxMTV8FI108JfqmOKvnyVNj62Kkrdg1ZvrXYE9HfOOjerft7W7ctAq99BK1KLDt4F03jnLG_9F2rIoTv2_uFooQ48pjtU2BntgIfsKgbVzYyIVKXsocndkzq92m_spnBm11mGiFMthWRK1YB1Diui6XlQZs"
            }
          ].map((member) => (
            <div key={member.name} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/5] bg-surface-container-low">
                <img
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={member.img}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="text-xl font-bold text-primary">{member.name}</h4>
              <p className="text-on-surface-variant text-sm uppercase tracking-wider mb-2">{member.role}</p>
              <p className="text-xs text-stone-500 leading-relaxed">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="bg-primary py-24 px-12 rounded-xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container opacity-20 -mr-32 -mt-32 rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tighter uppercase italic">Ready to step onto the court?</h2>
            <p className="text-primary-fixed text-lg mb-12 max-w-xl mx-auto opacity-90">Become part of a community that values performance, respect, and the pursuit of mastery.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-10 py-4 bg-tertiary-fixed text-on-tertiary-fixed font-bold rounded-xl text-lg hover:scale-105 active:scale-95 transition-all">Join the Family</button>
              <button className="px-10 py-4 border-2 border-primary-fixed text-primary-fixed font-bold rounded-xl text-lg hover:bg-primary-fixed hover:text-primary transition-all">View Memberships</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
