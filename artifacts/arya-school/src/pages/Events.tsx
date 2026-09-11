import { motion } from 'framer-motion';
import { CalendarDays, Lightbulb, FlaskConical, Users, Trophy, Target, Medal, Sparkles } from 'lucide-react';

import event14 from '@assets/WhatsApp_Image_2026-07-24_at_2.13.46_PM_(14)_1785388618202.jpeg';
import event15 from '@assets/WhatsApp_Image_2026-07-24_at_2.13.46_PM_(15)_1785388621448.jpeg';
import event16 from '@assets/WhatsApp_Image_2026-08-01_at_11.11.41_AM_1785563103203.jpeg';

const ANNUAL_EVENTS = [
  {
    image: event14,
    date: '2026-27 Session',
    title: '150 Glorious Years Celebration',
    desc: 'A grand community celebration honouring the school\'s rich legacy with cultural performances, alumni reunions, and a lamp-lighting ceremony.',
  },
  {
    image: event15,
    date: '15 Aug 2026',
    title: 'Independence Day Celebrations',
    desc: 'Flag hoisting followed by patriotic songs, dance performances, and a march past by the student contingent on the school grounds.',
  },
  {
    image: event16,
    date: 'Dec 2026',
    title: 'Annual Day & Prize Distribution',
    desc: 'Students showcase theatre, music, and dance, while academic and sports achievers are felicitated on stage in front of parents.',
  },
];

const WORKSHOPS = [
  {
    icon: Lightbulb,
    title: 'Career Guidance & Board Preparation',
    desc: 'Expert-led sessions for classes 9th–12th on stream selection, entrance exams, and effective board exam strategies.',
  },
  {
    icon: FlaskConical,
    title: 'Science & Technology Exhibition',
    desc: 'An inter-house exhibition where young scientists present their models, projects, and innovations to the school community.',
  },
  {
    icon: Users,
    title: 'Skill Development & Arts',
    desc: 'Public speaking, debating, art, craft, and yoga workshops that build confidence, creativity, and life skills beyond the syllabus.',
  },
];

const SPORTS_EVENTS = [
  {
    icon: Trophy,
    title: 'Annual Sports Meet',
    desc: 'A full day of track and field events, relay races, and tug-of-war where every house competes for the championship trophy.',
  },
  {
    icon: Target,
    title: 'Inter-House Championships',
    desc: 'Cricket, volleyball, kabaddi, and athletics fixtures run throughout the year with pride, teamwork, and sportsmanship.',
  },
  {
    icon: Medal,
    title: 'Yoga & Fitness Day',
    desc: 'A special morning of asanas, meditation, and fitness drills reinforcing physical and mental well-being in the Vedic tradition.',
  },
];

export default function Events() {
  const FADE_UP = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col w-full bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">

        {/* Page Header */}
        <motion.div initial="hidden" animate="visible" variants={FADE_UP} className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3" aria-hidden="true">School Life</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Upcoming Events &amp; Programs</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Beyond the classroom, our calendar is full of celebrations, workshops, and competitions that build confidence, character, and community spirit.
          </p>
        </motion.div>

        {/* Annual Events */}
        <motion.section aria-labelledby="annual-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="annual-heading" className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Annual Events</h2>
            <p className="text-muted-foreground text-lg">
              Our signature celebrations that bring the entire school, parents, and community together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ANNUAL_EVENTS.map((event, i) => (
              <motion.article
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} transition={{ delay: i * 0.1 }}
                className="group overflow-hidden rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
                    <CalendarDays className="w-3.5 h-3.5 text-primary" />
                    {event.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{event.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Workshops */}
        <motion.section aria-labelledby="workshops-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="workshops-heading" className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Workshops</h2>
            <p className="text-muted-foreground text-lg">
              Interactive sessions that bring industry, subject experts, and hands-on learning to our students.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {WORKSHOPS.map((w, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <w.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Sports Events */}
        <motion.section aria-labelledby="sports-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="sports-heading" className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Sports Events</h2>
            <p className="text-muted-foreground text-lg">
              We believe a strong body builds a strong mind — our sports calendar keeps every student active.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SPORTS_EVENTS.map((s, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <s.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-primary/5 border border-primary/20 px-6 py-4 text-sm text-muted-foreground">
              <Sparkles className="w-5 h-5 text-primary shrink-0" />
              For exact dates and timings, please contact the school office or check the notice board.
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}