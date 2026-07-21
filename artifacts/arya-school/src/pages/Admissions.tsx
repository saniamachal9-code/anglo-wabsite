import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, CheckCircle2, UserPlus, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const inquirySchema = z.object({
  parentName: z.string().min(2, "Parent name is required"),
  studentName: z.string().min(2, "Student name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  classLookingFor: z.string().min(1, "Class is required"),
  message: z.string().optional(),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

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
          <h1 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Admissions</h1>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Join the Arya Family</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            We welcome students from all backgrounds who seek academic excellence and moral growth. Explore our admission process for the upcoming academic session.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Info Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Procedure */}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <UserPlus className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Admission Procedure</h3>
              </div>
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
                      <h4 className="font-bold text-foreground mb-1">Step {idx + 1}: {item.step}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.section>

            {/* Documents */}
            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <FileText className="w-6 h-6" />
                </div>
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
            </motion.section>
            
          </div>

          {/* Sidebar Inquiry Form */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="bg-secondary text-secondary-foreground rounded-2xl p-8 sticky top-32 shadow-xl"
            >
              <h3 className="font-serif text-2xl font-bold text-white mb-2">Admission Inquiry</h3>
              <p className="text-white/80 text-sm mb-6">Fill this form and our admission counselor will call you.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
