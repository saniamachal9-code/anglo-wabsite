import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, CheckCircle2, UserPlus, Send, BadgeIndianRupee, HelpCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const inquirySchema = z.object({
  parentName: z.string().min(2, "Parent name is required"),
  studentName: z.string().min(2, "Student name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  classLookingFor: z.string().min(1, "Class is required"),
  message: z.string().optional(),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

const IMPORTANT_DATES = [
  { date: '01 Dec 2025', event: 'Admissions Open for Session 2026-27' },
  { date: 'Jan – Mar 2026', event: 'Interaction / Assessment for Students' },
  { date: '31 Mar 2026', event: 'Last Date for Admission Forms' },
  { date: '01 Apr 2026', event: 'New Academic Session Begins' },
];

const FAQ_ITEMS = [
  {
    question: "What is the age requirement for admission?",
    answer: "As per Haryana state norms, a child should generally be 5+ years for Class 1 and 6+ years for Class 2. Age may be relaxed at the descretion of the principal for deserving cases.",
  },
  {
    question: "Which mediums of instruction are available?",
    answer: "We offer both Hindi Medium and English Medium tracks from Class 1st onward, along with Sanskrit as an additional subject.",
  },
  {
    question: "Do you provide transport facility?",
    answer: "Yes, safe and reliable transport is available covering Pundri and the surrounding villages.",
  },
  {
    question: "How can I apply for admission?",
    answer: "You can obtain the registration form from the school office or simply submit the admission inquiry form on this page and our counselor will call you.",
  },
  {
    question: "Is there any concession or scholarship?",
    answer: "Yes. Sibling concessions and need-based scholarships are provided. Eligible families may also apply under government schemes such as PPP.",
  },
];

export default function Admissions() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const FADE_UP = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      parentName: '',
      studentName: '',
      phone: '',
      classLookingFor: '',
      message: '',
    }
  });

  const onSubmit = (data: InquiryFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Submitted Successfully",
        description: "Our admission office will contact you shortly.",
      });
      form.reset();
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">

        {/* Page Header */}
        <motion.div initial="hidden" animate="visible" variants={FADE_UP} className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3" aria-hidden="true">Admissions</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Admissions 2026-27 - Join Anglo School</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            We welcome students from all backgrounds who seek academic excellence and moral growth. Explore our admission process for the upcoming academic session.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Main Info Column */}
          <div className="lg:col-span-2 space-y-12">

            {/* Eligibility Criteria */}
            <motion.section aria-labelledby="eligibility-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
              <h2 id="eligibility-heading" className="font-serif text-3xl font-bold text-foreground mb-6">Eligibility Criteria</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { level: "Primary (1st – 5th)", desc: "Minimum entry age as per Haryana state norms. An informal interaction with the child and parents." },
                  { level: "Middle (6th – 8th)", desc: "Basic proficiency assessment in English, Hindi, and Mathematics to ensure suitable placement." },
                  { level: "Secondary (9th – 10th)", desc: "Assessment of previous class performance and core subject proficiency before enrollment." }
                ].map((item) => (
                  <div key={item.level} className="bg-card border border-card-border rounded-2xl p-6 shadow-sm">
                    <h3 className="font-serif text-lg font-bold text-secondary mb-2">{item.level}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Application Process */}
            <motion.section aria-labelledby="process-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
              <h2 id="process-heading" className="font-serif text-3xl font-bold text-foreground mb-6">Application Process</h2>
              <div className="bg-card border border-card-border p-8 rounded-2xl shadow-sm">
                <ol className="space-y-6 relative border-l-2 border-border ml-3 md:ml-4">
                  {[
                    { step: "Registration", desc: "Obtain the registration form from the school office or submit an online inquiry." },
                    { step: "Interaction / Assessment", desc: "An informal interaction for primary classes. A basic proficiency assessment for middle and secondary classes." },
                    { step: "Document Verification", desc: "Submission of required documents and verification by the admission committee." },
                    { step: "Fee Payment", desc: "Deposit the admission and first quarter fees to confirm the seat." }
                  ].map((item, idx) => (
                    <li key={idx} className="pl-8 relative">
                      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-card" />
                      <p className="font-bold text-foreground mb-1">Step {idx + 1}: {item.step}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-accent" />
                  <h3 className="font-serif text-2xl font-bold text-foreground">Documents Required</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Birth Certificate (Original + Photocopy)",
                    "Aadhar Card of Student and Parents",
                    "4 Passport size photographs of the student",
                    "2 Passport size photographs of parents",
                    "Transfer Certificate (TC) from previous school",
                    "Report Card of previous class passed",
                    "Family ID (Parivar Pehchan Patra - PPP)",
                    "Caste Certificate (if applicable)"
                  ].map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                      <span className="text-sm font-medium text-foreground">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Important Dates */}
            <motion.section aria-labelledby="dates-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
              <h2 id="dates-heading" className="font-serif text-3xl font-bold text-foreground mb-6">Important Dates</h2>
              <div className="overflow-hidden rounded-2xl border border-border">
                <ul className="divide-y divide-border bg-card">
                  {IMPORTANT_DATES.map((item) => (
                    <li key={item.date} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-6 py-4">
                      <div className="flex items-center gap-2 text-secondary font-bold shrink-0 sm:w-48">
                        <Calendar className="w-5 h-5 text-primary" />
                        {item.date}
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>

            {/* Fee Structure */}
            <motion.section aria-labelledby="fees-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
              <h2 id="fees-heading" className="font-serif text-3xl font-bold text-foreground mb-6">Fee Structure</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <BadgeIndianRupee className="w-6 h-6 text-primary" />
                    <h3 className="font-serif text-xl font-bold text-foreground">Transparent Fees</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The complete fee structure is displayed at the school office. Fees are charged per term and include tuition, exam, and activity components — with no hidden charges.
                  </p>
                </div>
                <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <UserPlus className="w-6 h-6 text-secondary" />
                    <h3 className="font-serif text-xl font-bold text-foreground">Concessions & Scholarships</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Sibling concessions and need-based scholarships are available. We also assist eligible families in applying for government schemes such as Family ID (PPP).
                  </p>
                </div>
              </div>
            </motion.section>

            {/* FAQ */}
            <motion.section aria-labelledby="faq-heading" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-8 h-8 text-primary" />
                <h2 id="faq-heading" className="font-serif text-3xl font-bold text-foreground">FAQ</h2>
              </div>
              <div className="space-y-4">
                {FAQ_ITEMS.map((item, idx) => (
                  <details
                    key={idx}
                    className="group bg-card border border-border rounded-2xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-4 font-semibold text-foreground hover:bg-muted/50 transition-colors">
                      {item.question}
                      <span className="text-primary shrink-0 transition-transform duration-300 group-open:rotate-45 text-2xl leading-none">+</span>
                    </summary>
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </motion.section>

          </div>

          {/* Sidebar Inquiry Form */}
          <div className="lg:col-span-1">
            <motion.aside
              aria-label="Admission inquiry form"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="bg-secondary text-secondary-foreground rounded-2xl p-8 sticky top-32 shadow-xl"
            >
              <p className="font-serif text-2xl font-bold text-white mb-2">Admission Inquiry</p>
              <p className="text-white/80 text-sm mb-6">Fill this form and our admission counselor will call you.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" aria-label="Admission inquiry form">
                  <FormField
                    control={form.control}
                    name="parentName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/90">Parent Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="studentName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/90">Student Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter student name" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/90">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="10-digit mobile number" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="classLookingFor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/90">Admission Required For Class</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 5th, 9th, 11th Science" className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 mt-2">
                    {isSubmitting ? "Submitting..." : <><Send className="w-4 h-4 mr-2"/> Send Inquiry</>}
                  </Button>
                </form>
              </Form>
            </motion.aside>
          </div>

        </div>
      </div>
    </div>
  );
}