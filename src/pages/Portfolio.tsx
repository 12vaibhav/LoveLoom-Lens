import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { 
  Heart, 
  Camera, 
  Baby, 
  Sparkles, 
  Image as ImageIcon, 
  Printer, 
  X, 
  ArrowRight,
  Plus,
  Menu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { IMAGES, WhatsappIcon } from '../constants';

import weddingImg from '../assets/services/wedding photo.webp';
import preWeddingImg from '../assets/services/Pre-wedding-photo.webp';
import babyImg from '../assets/services/baby-photo.webp';
import modelingImg from '../assets/services/modeling-photo.webp';
import productImg from '../assets/services/product-photo.webp';
import printingImg from '../assets/services/photo-printing.webp';
import bigHero from '../assets/hero/big-image-card.webp';
import smallHero from '../assets/hero/small-image-card.webp';
import port1 from '../assets/portfolio/portfolio-1.webp';
import port2 from '../assets/portfolio/portfolio-2.webp';
import port3 from '../assets/portfolio/portfolio-3.webp';
import port4 from '../assets/portfolio/portfolio-4.webp';
import port5 from '../assets/portfolio/portfolio-5.webp';
import port6 from '../assets/portfolio/portfolio-6.webp';
import port7 from '../assets/portfolio/portfolio-7.webp';

// Reusable Tilt Component
const TiltCard = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const CATEGORIES = [
  { id: 'all', label: 'All', icon: Sparkles },
  { id: 'wedding', label: 'Wedding Photography', icon: Heart },
  { id: 'pre-wedding', label: 'Pre-Wedding', icon: Camera },
  { id: 'newborn', label: 'Newborn', icon: Baby },
  { id: 'candid', label: 'Candid & Modeling', icon: Sparkles },
  { id: 'product', label: 'Product Photography', icon: ImageIcon },
  { id: 'printing', label: 'Photo Printing', icon: Printer },
];

const PORTFOLIO_IMAGES = [
  { id: 1, category: 'wedding', src: weddingImg, title: 'Ethereal Vows', size: 'tall' },
  { id: 2, category: 'pre-wedding', src: preWeddingImg, title: 'Golden Hour Love', size: 'wide' },
  { id: 3, category: 'newborn', src: babyImg, title: 'Pure Innocence', size: 'square' },
  { id: 4, category: 'candid', src: modelingImg, title: 'Authentic Smile', size: 'tall' },
  { id: 5, category: 'product', src: productImg, title: 'Shadow & Light', size: 'square' },
  { id: 6, category: 'printing', src: printingImg, title: 'Printed Legacy', size: 'wide' },
  { id: 7, category: 'wedding', src: port1, title: 'Intimate Moments', size: 'tall' },
  { id: 8, category: 'pre-wedding', src: port2, title: 'Mountain Romance', size: 'wide' },
  { id: 9, category: 'newborn', src: port3, title: 'Tiny Toes', size: 'square' },
  { id: 10, category: 'candid', src: port4, title: 'Street Magic', size: 'tall' },
  { id: 11, category: 'product', src: port5, title: 'Elegance Redefined', size: 'square' },
  { id: 12, category: 'printing', src: port6, title: 'Archival Beauty', size: 'wide' },
  { id: 13, category: 'wedding', src: port7, title: 'The First Dance', size: 'tall' },
  { id: 14, category: 'pre-wedding', src: bigHero, title: 'Lakeside Dreams', size: 'wide' },
  { id: 15, category: 'newborn', src: smallHero, title: 'Soft Slumber', size: 'square' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof PORTFOLIO_IMAGES[0] | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredImages = useMemo(() => {
    return activeCategory === 'all' 
      ? PORTFOLIO_IMAGES 
      : PORTFOLIO_IMAGES.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  const displayedImages = filteredImages.slice(0, visibleCount);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 4);
      setIsLoading(false);
    }, 800);
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
  };

  const shareOnWhatsapp = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out the stunning portfolio of LoveLoom Lens!");
    window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
  };

  const shareOnInstagram = () => {
    window.open(`https://www.instagram.com/`, '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-accent-pink/30 overflow-x-hidden bg-[#FFFCF8]">
      
      {/* 1. Pill Shaped Glassmorphism Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto flex items-center justify-between bg-white/70 backdrop-blur-md rounded-full px-6 sm:px-8 py-3 border border-lavender shadow-sm"
        >
          <a href="/" className="text-2xl md:text-3xl font-script font-bold text-slate-950">
            LoveLoom Lens
          </a>
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link to="/" className="text-slate-800 font-bold hover:text-accent-pink transition-colors">Home</Link>
            <Link to="/about" className="text-slate-800 font-bold hover:text-accent-pink transition-colors">About</Link>
            <Link to="/services" className="text-slate-800 font-bold hover:text-accent-pink transition-colors">Package</Link>
            <Link to="/portfolio" className="text-accent-pink font-bold transition-colors">Portfolio</Link>
            <Link to="/contact" className="text-slate-800 font-bold hover:text-accent-pink transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={shareOnWhatsapp}
              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors hidden sm:flex items-center justify-center"
              title="Share on WhatsApp"
            >
              <WhatsappIcon size={24} />
            </button>
            <Link to="/contact" className="hidden md:block bg-accent-pink hover:bg-white border-2 border-accent-pink text-white hover:text-accent-pink px-5 sm:px-6 py-2 rounded-full font-bold text-sm transition-all shadow-md">
              Book Now
            </Link>
            <button 
              className="md:hidden p-2 text-slate-800 hover:bg-lavender/20 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/90 backdrop-blur-xl border border-lavender rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col p-4">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-800 font-bold hover:bg-lavender/20 rounded-xl transition-colors">Home</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-800 font-bold hover:bg-lavender/20 rounded-xl transition-colors">About</Link>
                <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-800 font-bold hover:bg-lavender/20 rounded-xl transition-colors">Package</Link>
                <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-accent-pink font-bold hover:bg-lavender/20 rounded-xl transition-colors">Portfolio</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-800 font-bold hover:bg-lavender/20 rounded-xl transition-colors">Contact</Link>
                <div className="h-px bg-lavender/30 my-2"></div>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mx-4 my-2 bg-accent-pink text-white text-center py-3 rounded-xl font-bold shadow-md">
                  Book Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 overflow-hidden watercolor-bg">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-script text-5xl sm:text-6xl md:text-9xl text-slate-950 mb-6 md:mb-8 drop-shadow-sm">
              Our Portfolio
            </h1>
            <div className="inline-block bg-white/40 backdrop-blur-md border border-white/50 px-6 py-3 md:px-10 md:py-4 rounded-full shadow-sm">
              <p className="text-slate-800 font-bold italic text-base sm:text-lg md:text-2xl tracking-wide">
                Real Moments, Timeless Stories
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Orbs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ y: [0, 50, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            className="absolute top-1/4 -left-20 w-96 h-96 bg-lavender/30 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ y: [0, -50, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 -right-20 w-96 h-96 bg-peach/30 rounded-full blur-3xl"
          />
        </div>
      </section>

      {/* 3. Category Filters */}
      <section className="pt-8 pb-0 px-4 sticky top-20 z-40 bg-[#FFFCF8]/80 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto overflow-x-auto no-scrollbar">
          <div className="flex flex-nowrap md:justify-center gap-2 md:gap-3 pt-2 pb-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setVisibleCount(8);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs md:text-sm transition-all border-2 whitespace-nowrap ${
                  activeCategory === cat.id 
                    ? 'bg-accent-pink border-accent-pink text-white shadow-md scale-105' 
                    : 'bg-white/40 border-lavender/30 text-slate-600 hover:border-accent-pink/50 hover:bg-white/60'
                }`}
              >
                <cat.icon size={14} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Masonry Gallery Grid */}
      <section className="pt-4 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 sm:gap-8 sm:space-y-8"
          >
            <AnimatePresence mode="popLayout">
              {displayedImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="break-inside-avoid"
                >
                  <TiltCard 
                    onClick={() => setSelectedImage(img)}
                    className="group cursor-pointer relative overflow-hidden rounded-[32px] border-4 border-white shadow-lg bg-white"
                  >
                    <div className="relative overflow-hidden rounded-[28px]">
                      <img 
                        src={img.src} 
                        alt={img.title} 
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          className="space-y-2"
                        >
                          <h4 className="font-script text-3xl text-white drop-shadow-md">{img.title}</h4>
                          <div className="flex items-center justify-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest">
                            <Plus size={14} />
                            View Story
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 5. Load More / Infinite Scroll Section */}
      {visibleCount < filteredImages.length && (
        <section className="pt-4 pb-16 text-center px-4">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="relative group px-8 py-4 sm:px-14 sm:py-5 rounded-full font-bold text-slate-950 border-4 border-lavender hover:border-accent-pink transition-all overflow-hidden w-full sm:w-auto"
          >
            <span className={`relative z-10 flex items-center gap-3 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
              Load More Stories <ArrowRight size={20} />
            </span>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-6 h-6 border-4 border-accent-pink border-t-transparent rounded-full"
                />
              </div>
            )}
            <div className="absolute inset-0 bg-accent-pink/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </button>
        </section>
      )}

      {/* 6. Final CTA Section */}
      <section className="py-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-xl p-8 sm:p-10 md:p-16 rounded-[32px] md:rounded-[60px] border-4 border-white shadow-2xl space-y-6"
          >
            <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-slate-950">
              Ready to Create Your Own Story?
            </h2>
            <p className="text-slate-700 text-base sm:text-lg md:text-xl font-bold italic max-w-2xl mx-auto">
              Every masterpiece begins with a single conversation. Let's capture the magic that makes your story unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4">
              <Link to="/services" className="w-full sm:w-auto bg-accent-pink text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Book Your Session
              </Link>
              <Link to="/services" className="w-full sm:w-auto bg-white text-slate-950 border-4 border-accent-pink px-8 py-4 rounded-full font-bold text-base transition-all hover:bg-accent-pink/10">
                Explore Packages
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] sm:text-[15rem] md:text-[20rem] font-script text-slate-900/5 select-none pointer-events-none -rotate-6 whitespace-nowrap">
          LoveLoom Lens
        </div>
      </section>

      {/* 7. Footer */}
      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-slate-950/90 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-5xl w-full bg-white rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border-4 md:border-8 border-white max-h-[90vh] overflow-y-auto no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/3 bg-slate-100 flex items-center justify-center">
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.title} 
                    className="w-full h-auto max-h-[50vh] md:max-h-[80vh] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-1/3 p-6 sm:p-8 md:p-12 flex flex-col justify-center space-y-4 md:space-y-6">
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 md:px-4 md:py-1 bg-accent-pink/20 text-accent-pink rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {CATEGORIES.find(c => c.id === selectedImage.category)?.label}
                    </div>
                    <h3 className="font-script text-3xl sm:text-4xl md:text-5xl text-slate-950">{selectedImage.title}</h3>
                  </div>
                  <p className="text-slate-600 italic font-bold leading-relaxed text-sm md:text-base">
                    "A moment suspended in time, where light and emotion dance together to tell a story that words cannot express."
                  </p>
                  <div className="pt-2 md:pt-4">
                    <Link to="/services" className="inline-flex items-center gap-2 text-accent-pink font-bold hover:gap-4 transition-all text-sm md:text-base">
                      Book a Similar Session <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
