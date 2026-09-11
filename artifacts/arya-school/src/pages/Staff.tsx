import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, BadgeCheck, Languages, Atom, Globe, Monitor, Trophy, Calculator } from 'lucide-react';
import principalImg from '@assets/WhatsApp_Image_2026-08-01_at_11.11.34_AM_1785562984254.jpeg';

export default function Staff() {
  const FADE_UP = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const departments = [
    { icon: Calculator, title: "Mathematics", desc: "Algebra, geometry, and mental mathematics taught with strong conceptual foundations." },
    { icon: Atom, title: "Science", desc: "Physics, Chemistry, and Biology with hands-on laboratory practice and scientific temper." },
    { icon: Languages, title: "Languages", desc: "Hindi, English, and Sanskrit — grammar, literature, and confident communication." },
    { icon: Globe, title: "Social Science", desc: "History, Geography, and Civics with a deep focus on national heritage and values." },
    { icon: Monitor, title: "Computer Science", desc: "Digital literacy, coding fundamentals, and practical computer skills for every student." },
    { icon: Trophy, title: "Physical Education", desc: "Sports coaching, fitness routines, yoga, and discipline through games." },
  ];

  const qualifications = [
    { icon: GraduationCap, title: "Post-Graduate Faculty", desc: "Subject specialists holding M.A., M.Sc., and M.Com. degrees in their respective fields." },
    { icon: BookOpen, title: "B.Ed. Trained Teachers", desc: "Every classroom teacher is professionally trained in child psychology and modern pedagogy." },
    { icon: Award, title: "Continuous Development", desc: "Regular workshops, refresher courses, and board-level training keep the faculty up to date." },
    { icon: BadgeCheck, title: "Dedicated Mentors", desc: "Beyond academics, our staff guide students in character, discipline, and life skills." },
  ];

  return (
    <div className="flex flex-col w-full bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">

        {/* Page Header */}
        <motion.div initial="hidden" animate="visible" variants={FADE_UP} className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3" aria-hidden="true">Our People</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Our Teaching Staff</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            The heart of Anglo Sanskrit Senior Secondary School is its faculty — dedicated, experienced, and committed to every student's intellectual and moral growth.
          </p>
        </motion.div>

        {/* Principal */}
        <motion.section
          aria-labelledby="principal-heading"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-card border border-card-border rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src={principalImg} alt="Principal of Anglo Sanskrit Senior Secondary School, Pundri - School Leadership in Kaithal, Haryana" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-5">
              <h2 id="principal-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground">Principal</h2>
              <p className="text-lg text-secondary font-semibold">A Message from the Principal's Desk</p>
              <p className="text-muted-foreground leading-relaxed">
                At Anglo Sanskrit Senior Secondary School, Pundri, we believe every child carries a spark of greatness. Our team of experienced and caring teachers is dedicated to kindling that spark through personal attention, strong values, and academic excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We invite you to visit our campus and experience the warmth, discipline, and spirit of learning that defines our school family.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Teachers */}
        <motion.section aria-labelledby="teachers-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="teachers-heading" className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Teachers</h2>
            <p className="text-muted-foreground text-lg">
              Our faculty spans every subject with experienced specialists who make learning engaging and meaningful.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <dept.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{dept.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{dept.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Qualifications */}
        <motion.section aria-labelledby="qualifications-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="qualifications-heading" className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Qualifications</h2>
            <p className="text-muted-foreground text-lg">
              Our staff meet strict qualification standards and grow continuously through professional development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualifications.map((qual, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <qual.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{qual.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{qual.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}