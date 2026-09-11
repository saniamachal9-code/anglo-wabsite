import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface PageMeta {
  title: string;
  description: string;
}

const pageMetaMap: Record<string, PageMeta> = {
  '/': {
    title: 'Anglo School | CBSE & HBSE | Kaithal, Haryana',
    description: 'Anglo School Pundri - Top CBSE & HBSE school in Kaithal, Haryana. Quality education, experienced staff. Admissions 2026-27 open.',
  },
  '/about': {
    title: 'About Anglo School | Mission & Vision | Kaithal',
    description: "Learn about Anglo School's mission, vision, and commitment to excellence in education in Kaithal, Haryana.",
  },
  '/academics': {
    title: 'Academics | Anglo School | CBSE HBSE Curriculum',
    description: "Explore Anglo School's comprehensive academic programs for CBSE and HBSE boards with modern teaching methods.",
  },
  '/admissions': {
    title: 'Admissions 2026-27 | Anglo School | Apply Now',
    description: 'Join Anglo School! Admissions open for 2026-27. Excellent curriculum, experienced teachers. Apply today in Kaithal.',
  },
  '/staff': {
    title: 'Our Staff | Experienced Teachers | Anglo School',
    description: "Meet Anglo School's highly qualified and dedicated teaching staff committed to student excellence.",
  },
  '/contact': {
    title: 'Contact Anglo School | Kaithal, Haryana',
    description: "Get in touch with Anglo School. Contact details, location map, and inquiry form. We're here to help!",
  },
  '/gallery': {
    title: 'Gallery | Anglo School | School Events & Campus',
    description: "View Anglo School's photo gallery showcasing campus, events, and student activities.",
  },
  '/events': {
    title: 'Events | Anglo School | Upcoming Activities',
    description: 'Discover upcoming events, programs, and activities at Anglo School in Kaithal.',
  },
  '/facilities': {
    title: 'Facilities | Anglo School | Modern Infrastructure',
    description: "Explore Anglo School's modern facilities including library, labs, sports grounds, and digital classrooms.",
  },
};

const DEFAULT_PAGE_META: PageMeta = {
  title: 'Anglo School | CBSE & HBSE School',
  description: 'Anglo School - Premier educational institution in Kaithal, Haryana.',
};

const SITE_URL = 'https://anglo-school.vercel.app';

function setMetaAttribute(selector: string, tagName: string, attributes: Record<string, string>): HTMLMetaElement {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement(tagName);
    document.head.appendChild(el);
  }
  Object.entries(attributes).forEach(([key, value]) => el!.setAttribute(key, value));
  return el;
}

export const usePageMeta = (): void => {
  const [location] = useLocation();
  const path = location.split('?')[0].split('#')[0];

  useEffect(() => {
    const pageMeta: PageMeta = pageMetaMap[path] ?? DEFAULT_PAGE_META;

    document.title = pageMeta.title;
    setMetaAttribute('meta[name="description"]', 'meta', { name: 'description', content: pageMeta.description });

    const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`;
    setMetaAttribute('link[rel="canonical"]', 'link', { rel: 'canonical', href: canonicalUrl });
    setMetaAttribute('meta[property="og:url"]', 'meta', { property: 'og:url', content: canonicalUrl });
    setMetaAttribute('meta[property="og:title"]', 'meta', { property: 'og:title', content: pageMeta.title });
    setMetaAttribute('meta[property="og:description"]', 'meta', { property: 'og:description', content: pageMeta.description });
  }, [path]);
};