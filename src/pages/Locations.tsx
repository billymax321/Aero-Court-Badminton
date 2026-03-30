import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";

export default function LocationsPage() {
  const locations = [
    {
      name: "Aero Court Central",
      address: "128 Kinetic Way, Downtown Hub",
      phone: "+65 6789 0123",
      email: "central@aerocourt.com",
      courts: 12,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyC2u41Mf5-09VvABkLoGTZy0WN8oawfF-22F9aYnOhRktII3UrHgstWmkNGsOF59UPr7xjHDXIHuKJ_8hTE5Z4ZJyRTAuJmKQulH04kI7_K3lmOpHnHE6nWv1PwJuA_RfzFL70JsNAP6e3_1o1UDbYixNISZhWHV1ZgvIuJSjIy7NGZRGZmgFWtn0umJsb4cjC_Y7kf49QSL1xnvDNSlgydhGabm81Tv11WebeL68I6pSnlLNY5HdJ5oXvnbzpfvof1fDqTrQ1To"
    },
    {
      name: "Aero Court North",
      address: "45 Skyline Drive, Northern District",
      phone: "+65 6789 0456",
      email: "north@aerocourt.com",
      courts: 8,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApc0m6zk-Avw9kueox4GONDM1zS2ZXxNgj_pg-8o0G5Ouqti-mAMDBUmsNp-8ucKJUwNtljdYUdasNXOzuJbqiPYACmtiMMq4j8Ej2KdX2jm6E1fqAhDB4b7ngpTAXAk9uRhiZh2kD42yJwzK3BKTWaFgd_q6BPLr20h88ZrSwrOcIcRkrKn79Q5P7qn4CGuzmlKpddhTSmaLT9a_EjBZR3b8a3Y-NUe0FclFyMAWRIZ4w733iCmbNtCxCH__to8E9ygQlMnnC3bY"
    },
    {
      name: "Aero Court East",
      address: "12 Coastal Road, East Bay",
      phone: "+65 6789 0789",
      email: "east@aerocourt.com",
      courts: 10,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmvX0BhQlg2gLAwKiR_3nBhMFWVJzzhn-Pht-r2PHBnHvCwjwlXUeSbdR1Sgb8k-kZoBwdkjvTzT2Czj1CRVe8JjflZHLQ77Qqiw9Z4Xp5nSLZUTqg6_JisaiavrfwL_hDg5nkpCEsrJ8c4AOWv2lbbh7mh908g0ZeMAVdkjQwMJD3e1Bt7dm-e-rr7PtRCrorwnOh7vUn1ZX2cPm-LF6N-QjayCuA0fKIcUUW2nlw6Lx_xq-GoysgfnRNaKvFT-GI4MZuYpZPfvM"
    }
  ];

  return (
    <div className="pt-24">
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="mb-16">
          <h1 className="text-6xl font-black text-primary tracking-tighter uppercase mb-4">Our Locations</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl">Premium facilities strategically located across the city to serve our community better.</p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 bg-surface-container-low rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className={cn("h-[400px] lg:h-auto", idx % 2 !== 0 && "lg:order-last")}>
                <img
                  className="w-full h-full object-cover"
                  src={loc.img}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4">
                  <MapPin className="w-4 h-4" />
                  {loc.courts} Professional Courts
                </div>
                <h2 className="text-4xl font-black text-primary mb-8 uppercase tracking-tighter">{loc.name}</h2>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-stone-400 mt-1" />
                    <p className="text-lg text-on-surface-variant">{loc.address}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-stone-400" />
                    <p className="text-lg text-on-surface-variant">{loc.phone}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-stone-400" />
                    <p className="text-lg text-on-surface-variant">{loc.email}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-stone-400" />
                    <p className="text-lg text-on-surface-variant">06:00 AM - 11:00 PM Daily</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-primary-container transition-all">Book Court</button>
                  <button className="px-8 py-4 border border-outline-variant text-primary font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white transition-all">Get Directions</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

import { cn } from "@/src/lib/utils";
