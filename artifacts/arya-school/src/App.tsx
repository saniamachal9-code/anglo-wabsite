import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';

import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Academics from '@/pages/Academics';
import Admissions from '@/pages/Admissions';
import Facilities from '@/pages/Facilities';
import Contact from '@/pages/Contact';
import Gallery from '@/pages/Gallery';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

const DEFAULT_TITLE = 'Anglo School Pundri';
const DEFAULT_DESCRIPTION =
  'Anglo School Pundri - academic excellence, character building, and Vedic values in Kaithal, Haryana. CBSE & HBSE classes 1st to 12th.';

const TITLE_MAP: Record<string, string> = {
  '/': 'Anglo School Pundri | CBSE & HBSE School in Kaithal',
  '/about': 'About Anglo School - Mission & Vision | Pundri',
  '/academics': 'CBSE & HBSE Academics | Anglo School Pundri',
  '/admissions': 'School Admissions 2026-27 | Anglo School Pundri',
  '/staff': 'Faculty & Staff | Anglo School Pundri Haryana',
  '/contact': 'Contact Anglo School - Pundri Kaithal | Details',
  '/gallery': 'School Gallery | Anglo School Events Pundri',
  '/events': 'School Events & Activities | Anglo School Pundri',
  '/facilities': 'School Facilities | Anglo School Pundri',
};

const DESCRIPTION_MAP: Record<string, string> = {
  '/': 'Anglo School Pundri - CBSE & HBSE education excellence in Kaithal, Haryana. Admissions 2026-27 open.',
  '/about': "Learn about Anglo School's mission, vision, and history. Committed to educational excellence in Pundri.",
  '/academics': 'CBSE & HBSE academic programs with experienced faculty at Anglo School Pundri. Quality education focus.',
  '/admissions': 'School admissions 2026-27 open at Anglo School. CBSE & HBSE boards. Enroll now for quality education.',
  '/staff': 'Meet experienced faculty and staff at Anglo School Pundri. Dedicated educators committed to student success.',
  '/contact': 'Contact Anglo School Pundri - Address, phone, email. Reach us for admissions and inquiries.',
  '/gallery': 'View school events, activities, and campus gallery at Anglo School Pundri. Visual journey of our school.',
  '/events': 'Upcoming school events and activities at Anglo School. Participate in cultural and academic programs.',
  '/facilities': 'Modern facilities at Anglo School Pundri - labs, library, sports, classrooms. World-class infrastructure.',
};

function setMetaDescription(content: string) {
  let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'description';
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

function useDocumentTitle() {
  const [location] = useLocation();
  const path = location.split('?')[0].split('#')[0];

  useEffect(() => {
    document.title = TITLE_MAP[path] ?? DEFAULT_TITLE;
    setMetaDescription(DESCRIPTION_MAP[path] ?? DEFAULT_DESCRIPTION);
  }, [path]);
}

function Router() {
  useDocumentTitle();

  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/academics" component={Academics} />
        <Route path="/admissions" component={Admissions} />
        <Route path="/facilities" component={Facilities} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;