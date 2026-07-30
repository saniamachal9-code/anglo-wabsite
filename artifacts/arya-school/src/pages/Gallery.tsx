import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

import labImg from '@assets/WhatsApp_Image_2026-07-24_at_2.13.46_PM_(12)_1785388499013.jpeg';
import sportsImg from '@assets/WhatsApp_Image_2026-07-24_at_2.13.46_PM_(13)_1785388533869.jpeg';
import event14 from '@assets/WhatsApp_Image_2026-07-24_at_2.13.46_PM_(14)_1785388618202.jpeg';
import event15 from '@assets/WhatsApp_Image_2026-07-24_at_2.13.46_PM_(15)_1785388621448.jpeg';

const GALLERY_ITEMS = [
  {
    category: 'Sports',
    images: [
      { src: sportsImg, alt: 'Sports Ground' },
    ],
  },
  {
    category: 'Classrooms',
    images: [
      { src: labImg, alt: 'Science Lab' },
    ],
  },
  {
    category: 'Events',
    images: [
      { src: event14, alt: '150 Glorious Years Celebration' },
      { src: event15, alt: 'Cultural Dance Performance' },
    ],
  },
];

const ALL_IMAGES = GALLERY_ITEMS.flatMap((g) =>
  g.images.map((img) => ({ ...img, category: g.category }))
);

const CATEGORIES = ['All', ...GALLERY_ITEMS.map((g) => g.category)];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === 'All'
      ? ALL_IMAGES
      : ALL_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-secondary text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-hindi text-primary text-lg mb-3"
          >
            गैलरी
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold"
          >
            Our School Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/70 max-w-xl mx-auto"
          >
            A glimpse into the vibrant life at Anglo Sanskrit Senior Secondary School, Pundri — moments of
            learning, celebration, and growth.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-10 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-muted text-foreground/70 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.alt + img.category}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-lg transition-shadow"
                  onClick={() => setLightboxIndex(ALL_IMAGES.indexOf(img))}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
                      {img.category}
                    </span>
                    <p className="text-white font-semibold text-sm mt-0.5">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 rounded-full p-2"
              onClick={() => setLightboxIndex(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={ALL_IMAGES[lightboxIndex].src}
              alt={ALL_IMAGES[lightboxIndex].alt}
              className="max-w-3xl w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 text-center text-white">
              <p className="font-semibold">{ALL_IMAGES[lightboxIndex].alt}</p>
              <p className="text-sm text-white/60">{ALL_IMAGES[lightboxIndex].category}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
