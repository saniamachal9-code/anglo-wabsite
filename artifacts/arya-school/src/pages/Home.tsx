import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, BookOpen, Users, Compass, Award, Shield } from 'lucide-react';

import heroImg from '@assets/generated_images/school_hero.jpg';
import vedicFireImg from '@assets/generated_images/vedic_fire.jpg';

export default function Home() {
  const FADE_UP = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const STAGGER = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="flex flex-col w-full bg-noise">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40 z-10" />
          <img 
            src={heroImg} 
            alt="Arya School Building" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-3xl"
          >
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Admissions Open for Session 2024-25
            </motion.div>
            
            <motion.h1 variants={FADE_UP} className="font-serif text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Where Vedic Values Meet Modern Education
            </motion.h1>
            
            <motion.h2 variants={FADE_UP} className="font-hindi text-3xl md:text-4xl text-primary mb-6 font-medium">
              कृण्वन्तो विश्वमार्यम्
            </motion.h2>

            <motion.p variants={FADE_UP} className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
              Arya School, Pundri nurtures young minds through academic excellence, moral integrity, and character building, offering both Hindi and English mediums from classes 1st to 12th.
            </motion.p>

            <motion.div variants={FADE_UP} className="flex flex-wrap gap-4">
              <Link href="/admissions" className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5">
                Apply for Admission
              </Link>
              <Link href="/about" className="inline-flex h-14 items-center justify-center rounded-md bg-white/10 backdrop-blur-md px-8 text-base font-semibold text-white border border-white/20 transition-all hover:bg-white/20">
                Discover Our Heritage
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* THREE PILLARS SECTION */}
      <section className="py-20 md:py-28 bg-white relative z-10 -mt-8 rounded-t-[2.5rem]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Core Philosophy</h2>
            <h3 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">Built on the Principles of Arya Samaj</h3>
            <p className="text-muted-foreground text-lg">
              We believe education is not just about academic success, but about creating noble human beings grounded in truth and moral conduct.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Academic Rigor",
                desc: "Comprehensive curriculum available in both English and Hindi mediums, ensuring conceptual clarity and excellence."
              },
              {
                icon: Shield,
                title: "Character Building",
                desc: "Instilling deep-rooted Vedic values, discipline, and respect for culture alongside modern scientific temper."
              },
              {
                icon: Compass,
                title: "Holistic Growth",
                desc: "Focusing on physical, mental, and spiritual well-being through sports, arts, and daily moral education."
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={FADE_UP}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-card border border-card-border shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <pillar.icon className="h-7 w-7" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-foreground mb-4">{pillar.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HERITAGE SECTION */}
      <section className="py-20 md:py-32 bg-background border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={vedicFireImg} 
                  alt="Vedic Havan Fire" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="font-hindi text-4xl text-white block mb-2 shadow-sm">सत्यं वद। धर्मं चर।</span>
                  <span className="text-white/90 text-sm tracking-wider uppercase font-semibold">Speak the Truth. Practice Righteousness.</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full blur-2xl opacity-40" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full blur-3xl opacity-30" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Our Heritage</h2>
              <h3 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Decades of Trust in <span className="text-accent italic">Pundri</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded on the visionary ideals of Swami Dayanand Saraswati, Arya School has been a beacon of light in Pundri for decades. We believe that true education brings liberation — liberating the mind from ignorance while grounding the soul in cultural heritage.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our institution stands unique in offering both Hindi and English mediums of instruction, ensuring that every child in the community has access to quality education without losing touch with their linguistic roots.
              </p>

              <div className="pt-6 border-t border-border mt-8 flex items-center gap-8">
                <div>
                  <div className="font-serif text-4xl font-bold text-secondary mb-1">1st-12th</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Classes Offered</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <div className="font-serif text-4xl font-bold text-secondary mb-1">Dual</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Mediums (EN/HI)</div>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors group text-lg">
                  Read Our Full Story
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS/CTA SECTION */}
      <section className="py-20 md:py-24 bg-secondary text-white relative overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <Award className="w-16 h-16 text-primary mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Shape Your Child's Future With Us</h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            Join the Arya School family. Admissions are currently open for classes 1st through 12th for the upcoming academic session. Experience an environment where tradition and modernity walk hand in hand.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/admissions" className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-md bg-primary px-10 text-lg font-bold text-white transition-transform hover:scale-105 shadow-xl">
              Start Admission Process
            </Link>
            <Link href="/contact" className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-md bg-transparent border-2 border-white/30 px-10 text-lg font-bold text-white transition-colors hover:bg-white/10">
              Contact Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
