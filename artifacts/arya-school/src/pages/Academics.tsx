import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Languages, Atom, Calculator, Palette, Brain, Monitor, FlaskConical, FileText, Users, HeartHandshake } from 'lucide-react';
import studentsImg from '@assets/generated_images/students_library.jpg';

export default function Academics() {
  const FADE_UP = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col w-full bg-background pt-24 pb-20">
      {/* Header */}
      <div className="bg-secondary text-white py-20 mb-16 rounded-b-[3rem] px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Academic Excellence at Anglo School</h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            A comprehensive curriculum designed to foster intellectual curiosity, academic rigor, and moral integrity for classes 1st to 12th.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">

        {/* CBSE BOARD */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
          className="bg-muted/50 rounded-3xl p-8 md:p-12 border border-border mb-24"
        >
          <div className="max-w-3xl mb-10">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">CBSE Board</h2>
            <p className="text-muted-foreground text-lg">
              For classes 9th to 12th we follow the Central Board of Secondary Education (CBSE) curriculum, preparing students for the board examinations in classes 10 and 12 and for national-level competitive entrance tests.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Atom className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Science (Medical & Non-Medical)</h3>
              <p className="text-sm text-muted-foreground">Physics, Chemistry, Biology, Mathematics, English, Computer Science/Physical Education.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Calculator className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Commerce</h3>
              <p className="text-sm text-muted-foreground">Accountancy, Business Studies, Economics, Mathematics/IP, English.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Palette className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Humanities / Arts</h3>
              <p className="text-sm text-muted-foreground">History, Political Science, Geography, Hindi, English, Economics.</p>
            </div>
          </div>
        </motion.div>

        {/* HBSE BOARD */}
        <section aria-labelledby="hbse-heading" className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider">
              <Languages className="w-4 h-4" /> Dual Medium Instruction
            </div>
            <h2 id="hbse-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              HBSE Board
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For classes 1st to 8th we follow the curriculum of the Haryana Board of School Education (HBSE). We proudly offer both Hindi Medium and English Medium tracks so that every child learns in the language they are most comfortable with.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-0.5">✓</div>
                <span className="text-foreground font-medium">Parents can choose the track best suited for their child.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-0.5">✓</div>
                <span className="text-foreground font-medium">Equal emphasis on quality, syllabus, and faculty across both mediums.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 mt-0.5">✓</div>
                <span className="text-foreground font-medium">Bilingual support provided to ensure no concept is left misunderstood.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden shadow-xl">
            <img src={studentsImg}             alt="Anglo School Students Studying in Classroom - CBSE HBSE Academic Excellence in Kaithal, Haryana" className="w-full h-auto object-cover" />
          </motion.div>
        </section>

        {/* CURRICULUM */}
        <section aria-labelledby="curriculum-heading" className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="curriculum-heading" className="font-serif text-3xl font-bold text-foreground mb-4">Curriculum</h2>
            <p className="text-muted-foreground">Our academic journey is divided into carefully structured phases, ensuring age-appropriate development and progressive learning.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: "Primary (1st - 5th)",
                focus: "Foundational Learning & Curiosity",
                subjects: "English, Hindi, Mathematics, EVS, Moral Education, Arts."
              },
              {
                phase: "Middle (6th - 8th)",
                focus: "Exploration & Skill Building",
                subjects: "English, Hindi, Sanskrit, Mathematics, Science, Social Science, Computer Science."
              },
              {
                phase: "Secondary (9th - 10th)",
                focus: "Conceptual Depth & Board Prep",
                subjects: "Core subjects aligned with board requirements, focusing on analytical skills."
              }
            ].map((level, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} transition={{ delay: i * 0.1 }}
                className="bg-card border border-card-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <h3 className="font-serif text-2xl font-bold text-secondary mb-2">{level.phase}</h3>
                <p className="text-primary font-medium text-sm mb-6 uppercase tracking-wide">{level.focus}</p>
                <div className="flex gap-3">
                  <BookOpen className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">{level.subjects}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TEACHING METHODS */}
        <section aria-labelledby="teaching-heading" className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="teaching-heading" className="font-serif text-3xl font-bold text-foreground mb-4">Teaching Methods</h2>
            <p className="text-muted-foreground">
              We blend traditional discipline with modern pedagogy so that concepts are understood, not memorised.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: "Concept-First Learning", desc: "Every topic is built on underlying fundamentals, linking new ideas to a student's existing knowledge." },
              { icon: Users, title: "Group Discussions", desc: "Encourages peer learning, confidence, and articulation through structured classroom dialogue." },
              { icon: Monitor, title: "Smart Class Integration", desc: "Audio-visual aids and digital tools make abstract ideas tangible and engaging." },
              { icon: HeartHandshake, title: "Moral & Value Education", desc: "Daily assembly, Sanskrit verses, and life-skill sessions nurture character alongside academics." }
            ].map((method, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <method.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{method.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* RESOURCES */}
        <section aria-labelledby="resources-heading">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="resources-heading" className="font-serif text-3xl font-bold text-foreground mb-4">Resources</h2>
            <p className="text-muted-foreground">
              Every student has access to the materials, technology, and guidance needed to learn deeply and independently.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Well-Stocked Library", desc: "Textbooks, reference books, journals, and rare Vedic texts for every age group." },
              { icon: FlaskConical, title: "Science Laboratories", desc: "Fully equipped Physics, Chemistry, and Biology labs for hands-on practical work." },
              { icon: Monitor, title: "Modern Computer Lab", desc: "High-speed internet and current software to support the digital curriculum." },
              { icon: FileText, title: "Study Material & Guides", desc: "Worksheets, sample papers, and board guidance prepared by our faculty." }
            ].map((res, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP} transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <res.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{res.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{res.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}