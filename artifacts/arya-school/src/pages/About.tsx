import { motion } from 'framer-motion';
import { Target, Eye, Heart, BookOpen, User } from 'lucide-react';
import heroImg from '@assets/WhatsApp_Image_2026-07-24_at_2.13.46_PM_(11)_1785388331336.jpeg';

export default function About() {
  const FADE_UP = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col w-full bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Page Header */}
        <motion.div 
          initial="hidden" animate="visible" variants={FADE_UP}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">About Us</h1>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Our Roots & Heritage</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Anglo Sanskrit Senior Secondary School, Pundri is more than just an educational institution; it is a movement dedicated to building character, imparting true knowledge, and fostering a sense of duty towards the nation and humanity.
          </p>
        </motion.div>

        {/* History & Arya Samaj Connection */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl aspect-video"
          >
            <img src={heroImg} alt="Anglo Sanskrit Senior Secondary School Campus" className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-serif text-3xl font-bold text-secondary">The Arya Samaj Legacy</h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded on the profound tenets of the Arya Samaj, our school draws its inspiration from Maharishi Dayanand Saraswati. He envisioned an education system that synthesizes the ancient Vedic wisdom with modern scientific advancements.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At Anglo Sanskrit Senior Secondary School, Pundri, we carry this torch forward. We do not just teach subjects; we teach life. The ten principles of Arya Samaj serve as our guiding light, ensuring that every student who walks through our gates learns the value of truth, righteousness, and service.
            </p>
            <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 mt-6">
              <h4 className="font-hindi text-2xl font-bold text-accent mb-2">अज्ञानान्धकारं निवार्य ज्ञानालोकं कुरु।</h4>
              <p className="text-sm font-medium text-secondary">"Dispel the darkness of ignorance and spread the light of knowledge."</p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
            className="bg-card p-10 rounded-2xl shadow-sm border border-card-border"
          >
            <Target className="w-12 h-12 text-primary mb-6" />
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide a holistic educational environment that nurtures intellectual, physical, and spiritual growth. We strive to empower students with critical thinking, ethical values, and a deep respect for our cultural heritage, preparing them to be responsible global citizens.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} transition={{ delay: 0.2 }}
            className="bg-secondary p-10 rounded-2xl shadow-sm text-white"
          >
            <Eye className="w-12 h-12 text-primary mb-6" />
            <h3 className="font-serif text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-white/80 leading-relaxed">
              To be a premier institution in Haryana that sets the benchmark for value-based education. We envision a society where knowledge is pursued not just for livelihood, but for the elevation of the soul — creating a noble world (Krinvanto Vishwam Aryam).
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="font-serif text-3xl font-bold text-foreground mb-4">Our Core Values</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: BookOpen, title: "Satya (Truth)", desc: "Commitment to truth in thought, word, and deed." },
            { icon: Heart, title: "Dharma (Duty)", desc: "Upholding moral duties and righteous conduct." },
            { icon: User, title: "Charitra (Character)", desc: "Building strong, resilient, and honest individuals." },
            { icon: Target, title: "Seva (Service)", desc: "Instilling a spirit of selfless service to society." }
          ].map((val, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 text-center rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
            >
              <val.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-serif text-xl font-bold text-foreground mb-2">{val.title}</h4>
              <p className="text-sm text-muted-foreground">{val.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
