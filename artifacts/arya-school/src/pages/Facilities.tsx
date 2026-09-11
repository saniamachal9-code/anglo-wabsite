import { motion } from 'framer-motion';
import { BookOpen, Monitor, MonitorPlay, FlaskConical, Trophy, Bus, Stethoscope } from 'lucide-react';
import libraryImg from '@assets/WhatsApp_Image_2026-07-24_at_2.13.46_PM_(12)_1785388499013.jpeg';
import sportsImg from '@assets/WhatsApp_Image_2026-07-24_at_2.13.46_PM_(13)_1785388533869.jpeg';

export default function Facilities() {
  const FADE_UP = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const featuredFacilities = [
    {
      title: "Library",
      desc: "A rich repository of knowledge spanning modern academics, literature, and rare Vedic texts. A silent sanctuary for focused learning.",
      icon: BookOpen,
      image: libraryImg,
      alt: "Anglo School Library - Vedic and Modern Academic Resources for Students in Pundri, Kaithal",
    },
    {
      title: "Sports Ground",
      desc: "Expansive green fields dedicated to physical development. We offer facilities for cricket, volleyball, athletics, and traditional sports.",
      icon: Trophy,
      image: sportsImg,
      alt: "Anglo School Sports Ground - Cricket, Volleyball and Athletics Facilities in Pundri, Haryana",
    },
  ];

  const facilityGrid = [
    {
      title: "Science Labs",
      desc: "Well-equipped Physics, Chemistry, and Biology labs complying with board standards to encourage practical learning and scientific temper.",
      icon: FlaskConical,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      title: "Computer Lab",
      desc: "Modern computer labs with high-speed internet to ensure our students are well-versed with the latest technological advancements.",
      icon: Monitor,
      color: "text-blue-600",
      bg: "bg-blue-600/10"
    },
    {
      title: "Digital Classrooms",
      desc: "Smart class technology and audio-visual aids make lessons interactive, engaging, and easy to understand for every student.",
      icon: MonitorPlay,
      color: "text-accent",
      bg: "bg-accent/10"
    },
  ];

  const additionalFacilities = [
    {
      title: "Transport",
      desc: "Safe and reliable transport facility covering Pundri and surrounding villages.",
      icon: Bus,
      color: "text-orange-500",
      bg: "bg-orange-500/10"
    },
    {
      title: "Medical Room",
      desc: "A dedicated sick bay with trained staff for basic first-aid and medical emergencies.",
      icon: Stethoscope,
      color: "text-red-500",
      bg: "bg-red-500/10"
    },
  ];

  return (
    <div className="flex flex-col w-full bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">

        {/* Page Header */}
        <motion.div initial="hidden" animate="visible" variants={FADE_UP} className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3" aria-hidden="true">Campus Infrastructure</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">School Facilities &amp; Infrastructure</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our campus is designed to provide a safe, stimulating, and comprehensive environment that caters to the academic, physical, and creative needs of every student.
          </p>
        </motion.div>

        {/* Featured Facilities with Images */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {featuredFacilities.map((fac, i) => (
            <motion.section
              key={fac.title}
              aria-labelledby={`facility-${fac.title.toLowerCase().replace(/\s+/g, '-')}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden relative">
                <img src={fac.image} alt={fac.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                <h2
                  id={`facility-${fac.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="absolute bottom-6 left-6 font-serif text-2xl font-bold text-white z-10 flex items-center gap-3"
                >
                  <div className="p-2 rounded-lg bg-white/20 backdrop-blur-md">
                    <fac.icon className="w-6 h-6 text-white" />
                  </div>
                  {fac.title}
                </h2>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed">{fac.desc}</p>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Facility Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {facilityGrid.map((fac, i) => (
            <motion.section
              key={fac.title}
              aria-labelledby={`facility-${fac.title.toLowerCase().replace(/\s+/g, '-')}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors shadow-sm"
            >
              <div className={`w-14 h-14 rounded-xl ${fac.bg} flex items-center justify-center mb-6`}>
                <fac.icon className={`w-7 h-7 ${fac.color}`} />
              </div>
              <h2 id={`facility-${fac.title.toLowerCase().replace(/\s+/g, '-')}`} className="font-serif text-xl font-bold text-foreground mb-3">{fac.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{fac.desc}</p>
            </motion.section>
          ))}
        </div>

        {/* Additional Facilities */}
        <section aria-label="Additional facilities" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFacilities.map((fac, i) => (
            <motion.div
              key={fac.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors shadow-sm"
            >
              <div className={`w-14 h-14 rounded-xl ${fac.bg} flex items-center justify-center mb-6`}>
                <fac.icon className={`w-7 h-7 ${fac.color}`} />
              </div>
              <p className="font-serif text-xl font-bold text-foreground mb-3">{fac.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{fac.desc}</p>
            </motion.div>
          ))}
        </section>

      </div>
    </div>
  );
}