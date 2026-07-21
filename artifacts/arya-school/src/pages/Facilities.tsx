import { motion } from 'framer-motion';
import { BookOpen, Monitor, FlaskConical, Trophy, Bus, Stethoscope } from 'lucide-react';
import libraryImg from '@assets/generated_images/students_library.jpg';
import sportsImg from '@assets/generated_images/sports_ground.jpg';

export default function Facilities() {
  const FADE_UP = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const facilitiesList = [
    {
      title: "Vedic Library",
      desc: "A rich repository of knowledge spanning modern academics, literature, and rare Vedic texts. A silent sanctuary for focused learning.",
      icon: BookOpen,
      image: libraryImg,
      color: "text-accent",
      bg: "bg-accent/10"
    },
    {
      title: "Sports Ground",
      desc: "Expansive green fields dedicated to physical development. We offer facilities for cricket, volleyball, athletics, and traditional sports.",
      icon: Trophy,
      image: sportsImg,
      color: "text-secondary",
      bg: "bg-secondary/10"
    },
    {
      title: "Science Laboratories",
      desc: "Well-equipped Physics, Chemistry, and Biology labs complying with board standards to encourage practical learning and scientific temper.",
      icon: FlaskConical,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      title: "Computer Center",
      desc: "Modern computer labs with high-speed internet to ensure our students are well-versed with the latest technological advancements.",
      icon: Monitor,
      color: "text-blue-600",
      bg: "bg-blue-600/10"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Page Header */}
        <motion.div initial="hidden" animate="visible" variants={FADE_UP} className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Campus Infrastructure</h1>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">World-Class Facilities</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our campus is designed to provide a safe, stimulating, and comprehensive environment that caters to the academic, physical, and creative needs of every student.
          </p>
        </motion.div>

        {/* Featured Facilities with Images */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {facilitiesList.slice(0, 2).map((fac, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden relative">
                {fac.image ? (
                  <img src={fac.image} alt={fac.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <fac.icon className={`w-16 h-16 ${fac.color} opacity-20`} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                <h3 className="absolute bottom-6 left-6 font-serif text-2xl font-bold text-white z-10 flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-white/20 backdrop-blur-md`}>
                    <fac.icon className="w-6 h-6 text-white" />
                  </div>
                  {fac.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed">{fac.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilitiesList.slice(2).map((fac, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors shadow-sm"
            >
              <div className={`w-14 h-14 rounded-xl ${fac.bg} flex items-center justify-center mb-6`}>
                <fac.icon className={`w-7 h-7 ${fac.color}`} />
              </div>
              <h4 className="font-serif text-xl font-bold text-foreground mb-3">{fac.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{fac.desc}</p>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors shadow-sm"
          >
            <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
              <Bus className="w-7 h-7 text-orange-500" />
            </div>
            <h4 className="font-serif text-xl font-bold text-foreground mb-3">Transport</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Safe and reliable transport facility covering Pundri and surrounding villages.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors shadow-sm"
          >
            <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
              <Stethoscope className="w-7 h-7 text-red-500" />
            </div>
            <h4 className="font-serif text-xl font-bold text-foreground mb-3">Medical Room</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">A dedicated sick bay with trained staff for basic first-aid and medical emergencies.</p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
