import { Link } from 'wouter';
import { BookOpen, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                <BookOpen className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-hindi text-xl font-bold text-white">
                  एंग्लो संस्कृत सीनियर सेकेंडरी स्कूल, पूंडरी
                </span>
                <span className="font-serif text-xs font-semibold tracking-wide text-white/80">
                  ANGLO SANSKRIT SENIOR SECONDARY SCHOOL, PUNDRI
                </span>
              </div>
            </Link>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed mt-2 font-hindi">
              कृण्वन्तो विश्वमार्यम्
            </p>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed italic border-l-2 border-primary pl-3">
              "Make the World Noble" — Rooted in Vedic values, delivering modern academic excellence since our foundation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors w-fit">About the School</Link>
              <Link href="/academics" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors w-fit">Academics & Curriculum</Link>
              <Link href="/admissions" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors w-fit">Admission Procedure</Link>
              <Link href="/facilities" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors w-fit">Campus Facilities</Link>
              <Link href="/contact" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors w-fit">Contact Us</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold text-white">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-secondary-foreground/80 leading-relaxed">
                  Anglo Sanskrit Senior Secondary School, Pundri,<br />
                  Kaithal, Haryana 136042
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  info@aryaschoolpundri.com
                </span>
              </li>
            </ul>
          </div>

          {/* Visiting Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold text-white">Office Hours</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col text-sm text-secondary-foreground/80">
                  <span className="font-medium text-white/90 mb-1">Summer Timings:</span>
                  <span>Mon - Sat: 8:00 AM - 2:00 PM</span>
                  <span className="mt-2 font-medium text-white/90 mb-1">Winter Timings:</span>
                  <span>Mon - Sat: 9:00 AM - 3:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} Anglo Sanskrit Senior Secondary School, Pundri. All rights reserved.
          </p>
          <p className="text-sm text-secondary-foreground/60 flex items-center gap-1">
            Managed by Arya Samaj <span className="text-primary mx-1">॥</span> Om
          </p>
        </div>
      </div>
    </footer>
  );
}
