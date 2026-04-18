const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h1 className="text-7xl md:text-9xl tracking-tighter italic font-black">OUR<br /><span className="text-aero-green">STORY.</span></h1>
          <p className="text-aero-text-muted text-xl leading-relaxed">
            Aero Court was born from a simple obsession: to create the perfect environment for badminton. We believe that professional-grade facilities should be accessible to everyone who takes the sport seriously.
          </p>
          <div className="grid grid-cols-2 gap-8 border-t border-aero-border pt-12">
            <div>
              <h4 className="text-4xl font-bold text-aero-green mb-1">2015</h4>
              <p className="text-xs tracking-[0.2em] font-bold text-aero-text-muted">ESTABLISHED</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-aero-green mb-1">12K+</h4>
              <p className="text-xs tracking-[0.2em] font-bold text-aero-text-muted">STUDENTS TRAINED</p>
            </div>
          </div>
        </div>
        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1626225967045-9410dded2e41?q=80&w=2070&auto=format&fit=crop" alt="Founder" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        </div>
      </section>

      <section className="space-y-20">
        <div className="text-center">
          <h2 className="text-6xl md:text-8xl">OUR MISSION</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'INNOVATION', desc: 'Constantly integrating the latest technology in sports science to improve athlete performance.' },
            { title: 'COMMUNITY', desc: 'Building a supportive network where players of all levels can inspire and learn from each other.' },
            { title: 'EXCELLENCE', desc: 'Maintaining BWF standard facilities to ensure the highest quality of competitive play.' },
          ].map((item, i) => (
            <div key={i} className="bg-aero-dark p-12 rounded-[2.5rem] border border-aero-border space-y-6">
              <span className="text-aero-green font-mono text-xl">0{i+1}</span>
              <h3 className="text-3xl font-bebas tracking-wider">{item.title}</h3>
              <p className="text-aero-text-muted leading-relaxed italic">"{item.desc}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
