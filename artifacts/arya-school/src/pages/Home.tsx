import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, BookOpen, Compass, Award, Shield, CalendarDays } from 'lucide-react';

import heroImg from '@assets/WhatsApp_Image_2026-07-24_at_2.13.46_PM_(6)_1785129810087.jpeg';
import vedicFireImg from '@assets/generated_images/vedic_fire.jpg';

const NEWS_ITEMS = [
  {
    date: '10 Aug 2026',
    title: 'Admissions Open for Session 2026-27',
    text: 'Applications for classes 1st to 12th are open now. Limited seats available — book your school visit today.',
  },
  {
    date: '15 Aug 2026',
    title: 'Independence Day Celebrations',
    text: 'Students showcased patriotic performances and marched proudly on the school grounds.',
  },
  {
    date: '05 Sep 2026',
    title: 'Parents Orientation Program',
    text: 'A seminar for new parents covering the curriculum, medium selection, and school values.',
  },
];

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
      <section
        aria-labelledby="home-title"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        {/* Full-screen background — real school photo */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Anglo Sanskrit Senior Secondary School Campus - CBSE HBSE Senior Secondary School in Pundri, Kaithal, Haryana"
            className="w-full h-full object-cover object-center"
          />
          {/* Light left-side gradient only — photo stays visible on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-3xl translate-y-16 md:translate-y-24 border-l-4 border-primary/60 pl-6"
          >
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/25 border border-primary/40 text-primary text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Admissions Open for Session 2026-27
            </motion.div>

            <motion.p variants={FADE_UP} className="font-hindi text-2xl md:text-3xl text-primary mb-3 font-semibold drop-shadow">
              कृण्वन्तो विश्वमार्यम्
            </motion.p>

            <motion.h1 id="home-title" variants={FADE_UP} className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              Anglo School | CBSE &amp; HBSE Senior Secondary School
            </motion.h1>

            <motion.p variants={FADE_UP} className="font-serif text-2xl md:text-3xl font-semibold text-primary mb-4 drop-shadow">
              Where Vedic Values Meet Modern Education
            </motion.p>

            <motion.p variants={FADE_UP} className="text-base md:text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
              Anglo Sanskrit Senior Secondary School, Pundri — affiliated with Arya Samaj — nurtures young minds through academic excellence and character building. Classes 1st to 12th, Hindi &amp; English Medium.
            </motion.p>

            <motion.div variants={FADE_UP} className="flex gap-8 mt-10 pt-8 border-t border-white/20">
              {[
                { value: '1916', label: 'Estd.' },
                { value: '1–12', label: 'Classes' },
                { value: '2', label: 'Mediums' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl font-bold text-primary drop-shadow">{s.value}</div>
                  <div className="text-white/60 text-sm mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE ANGLO SCHOOL SECTION */}
      <section aria-labelledby="why-choose-heading" className="py-20 md:py-28 bg-white relative z-10 -mt-8 rounded-t-[2.5rem]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="why-choose-heading" className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">Why Choose Anglo School?</h2>
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
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR FEATURES SECTION */}
      <section aria-labelledby="features-heading" className="py-20 md:py-32 bg-background border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="features-heading" className="font-serif text-3xl md:text-5xl font-bold text-foreground">Our Features</h2>
          </div>

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
                  alt="Traditional Vedic Havan Ceremony at Anglo Sanskrit Senior Secondary School Promoting Indian Cultural Values"
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
              <p className="text-sm font-bold tracking-widest text-primary uppercase" aria-hidden="true">Our Heritage</p>
              <h3 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Decades of Trust in <span className="text-accent italic">Pundri</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded on the visionary ideals of Swami Dayanand Saraswati, Anglo Sanskrit Senior Secondary School has been a beacon of light in Pundri for decades. We believe that true education brings liberation — liberating the mind from ignorance while grounding the soul in cultural heritage.
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

      {/* ADMISSIONS 2026-27 CTA SECTION */}
      <section aria-labelledby="admissions-heading" className="py-20 md:py-24 bg-secondary text-white relative overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <Award className="w-16 h-16 text-primary mx-auto mb-8" />
          <h2 id="admissions-heading" className="font-serif text-3xl md:text-5xl font-bold mb-6">Admissions 2026-27</h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            Shape Your Child's Future With Us — join the Anglo Sanskrit Senior Secondary School family. Admissions are currently open for classes 1st through 12th for the upcoming academic session. Experience an environment where tradition and modernity walk hand in hand.
          </p>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-primary/90 hover:shadow-lg"
          >
            Apply for Admission
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* LATEST NEWS SECTION */}
      <section aria-labelledby="news-heading" className="py-20 md:py-28 bg-background border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <h2 id="news-heading" className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Latest News</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Stay updated with the latest announcements, celebrations, and milestones from our campus in Pundri.
              </p>
            </div>
            <Link href="/events" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors shrink-0">
              View All Events
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {NEWS_ITEMS.map((news, i) => (
              <motion.article
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={FADE_UP}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col p-8 rounded-2xl bg-card border border-card-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-4">
                  <CalendarDays className="w-4 h-4" />
                  {news.date}
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{news.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{news.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}