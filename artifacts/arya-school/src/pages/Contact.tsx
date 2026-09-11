import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required").optional().or(z.literal('')),
  phone: z.string().min(10, "Valid phone number is required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Please provide more details in your message"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'https://anglo-wabsite.onrender.com'}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Something went wrong.');
      }
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We will get back to you soon.",
      });
      form.reset();
    } catch (err: unknown) {
      toast({
        title: "Failed to Send",
        description: err instanceof Error ? err.message : 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">

        {/* Page Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3" aria-hidden="true">Contact Us</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Contact Anglo School</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are always here to answer your questions, listen to your feedback, and guide you through our admission process.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Left Column — Address & Contact Details */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-8 lg:order-1">

            <section aria-labelledby="address-heading" className="bg-card border border-border p-8 rounded-2xl shadow-sm">
              <h2 id="address-heading" className="font-serif text-2xl font-bold text-secondary mb-6">Office Address</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-1">Campus Address</p>
                    <p className="text-muted-foreground">Anglo Sanskrit Senior Secondary School, Pundri,<br />Kaithal, Haryana 136042</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-foreground/60" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-1">Office Hours</p>
                    <p className="text-muted-foreground">Monday to Saturday<br />08:00 AM - 02:00 PM</p>
                  </div>
                </li>
              </ul>
            </section>

            <section aria-labelledby="phone-email-heading" className="bg-card border border-border p-8 rounded-2xl shadow-sm">
              <h2 id="phone-email-heading" className="font-serif text-2xl font-bold text-secondary mb-6">Phone &amp; Email</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-1">Phone</p>
                    <p className="text-muted-foreground">+91 98765 43210<br />+91 12345 67890</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-1">Email</p>
                    <p className="text-muted-foreground">info@aryaschoolpundri.com<br />admissions@aryaschoolpundri.com</p>
                  </div>
                </li>
              </ul>
            </section>

          </motion.div>

          {/* Right Column — Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="lg:order-2">
            <section aria-labelledby="form-heading" className="bg-card border border-border p-8 rounded-2xl shadow-lg">
              <h2 id="form-heading" className="font-serif text-2xl font-bold text-foreground mb-2">Contact Form</h2>
              <p className="text-muted-foreground mb-8">Fill out the form below and we'll reply as soon as possible.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" aria-label="Contact form">

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl><Input placeholder="10-digit mobile" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address (Optional)</FormLabel>
                      <FormControl><Input placeholder="your@email.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="subject" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl><Input placeholder="e.g. Admission Inquiry, Job Application" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl><Textarea placeholder="Type your message here..." className="min-h-[150px] resize-none" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-14 text-lg">
                    {isSubmitting ? "Sending..." : <><Send className="w-5 h-5 mr-2"/> Send Message</>}
                  </Button>
                </form>
              </Form>
            </section>
          </motion.div>

          {/* Location Map — Full Width */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="lg:order-3 lg:col-span-2">
            <section aria-labelledby="map-heading" className="w-full rounded-2xl overflow-hidden border border-border shadow-sm">
              <div className="bg-secondary px-6 py-4">
                <h2 id="map-heading" className="font-serif text-xl font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Location Map
                </h2>
              </div>
              <iframe
                title="Anglo Sanskrit Senior Secondary School, Pundri Location"
                src="https://maps.google.com/maps?q=Anglo+Sanskrit+Senior+Secondary+School+Pundri+Kaithal+Haryana&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://maps.google.com/maps?q=Anglo+Sanskrit+Senior+Secondary+School+Pundri+Kaithal+Haryana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                View on Google Maps
              </a>
            </section>
          </motion.div>

        </div>
      </div>
    </div>
  );
}