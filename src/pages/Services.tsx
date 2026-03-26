import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Heart, 
  Baby, 
  User, 
  Box, 
  Printer, 
  Check, 
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { IMAGES, WhatsappIcon } from '../constants';
import weddingImg from '../assets/services/wedding photo.webp';

const SERVICES_DATA = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    icon: <Heart className="text-rose" />,
    description: 'Capturing the ethereal moments of your most sacred union.',
    packages: [
      { name: 'Basic', price: '$1,200', features: ['6 Hours Coverage', '200 Edited Photos', 'Online Gallery', '1 Photographer'] },
      { name: 'Premium', price: '$2,500', features: ['10 Hours Coverage', '400 Edited Photos', 'Luxury Photo Book', '2 Photographers', 'Engagement Session'] },
      { name: 'Luxury', price: '$4,500', features: ['Full Day Coverage', 'Unlimited Photos', 'Handcrafted Album', '3 Photographers', 'Drone Shots', 'Cinematic Highlight'] },
    ]
  },
  {
    id: 'pre-wedding',
    title: 'Pre-Wedding Shoot',
    icon: <Camera className="text-sky" />,
    description: 'The prologue to your beautiful journey together.',
    packages: [
      { name: 'Basic', price: '$600', features: ['2 Hours Session', '20 Edited Photos', '1 Location'] },
      { name: 'Premium', price: '$1,200', features: ['4 Hours Session', '50 Edited Photos', '2 Locations', 'Outfit Changes'] },
      { name: 'Luxury', price: '$2,000', features: ['Full Day Session', '100 Edited Photos', 'Multiple Locations', 'Makeup Artist Included'] },
    ]
  },
  {
    id: 'newborn',
    title: 'Newborn Photography',
    icon: <Baby className="text-mint" />,
    description: 'Preserving the delicate first chapters of a new life.',
    packages: [
      { name: 'Basic', price: '$400', features: ['1 Hour Session', '10 Edited Photos', 'Home Studio'] },
      { name: 'Premium', price: '$800', features: ['3 Hours Session', '30 Edited Photos', 'Props Included', 'Family Portraits'] },
      { name: 'Luxury', price: '$1,500', features: ['Full Day Lifestyle', '60 Edited Photos', 'Luxury Album', 'Birth Announcement Cards'] },
    ]
  },
  {
    id: 'candid',
    title: 'Candid & Modeling',
    icon: <User className="text-lavender" />,
    description: 'Unscripted emotions and striking visual narratives.',
    packages: [
      { name: 'Basic', price: '$300', features: ['1 Hour Session', '15 Edited Photos'] },
      { name: 'Premium', price: '$700', features: ['3 Hours Session', '40 Edited Photos', 'Studio or Outdoor'] },
      { name: 'Luxury', price: '$1,200', features: ['Full Day Session', '80 Edited Photos', 'Portfolio Design', 'High-End Retouching'] },
    ]
  },
  {
    id: 'product',
    title: 'Product Photography',
    icon: <Box className="text-peach" />,
    description: 'Elevating your brand through precision and artistry.',
    packages: [
      { name: 'Basic', price: '$500', features: ['10 Products', 'White Background', 'Standard Retouching'] },
      { name: 'Premium', price: '$1,200', features: ['30 Products', 'Lifestyle Staging', 'Advanced Retouching', 'Social Media Ready'] },
      { name: 'Luxury', price: '$2,500', features: ['Unlimited Products', 'Creative Direction', 'Video Snippets', 'Commercial License'] },
    ]
  },
  {
    id: 'printing',
    title: 'Photo Printing',
    icon: <Printer className="text-accent-pink" />,
    description: 'Turning digital memories into tangible heirlooms.',
    packages: [
      { name: 'Basic', price: '$100', features: ['Standard Prints Set', 'Matte or Glossy'] },
      { name: 'Premium', price: '$300', features: ['Canvas Prints', 'Framed Portraits', 'High-Quality Paper'] },
      { name: 'Luxury', price: '$800', features: ['Custom Photo Book', 'Large Format Canvas', 'Museum Grade Framing'] },
    ]
  }
];

const Services = () => {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES_DATA[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const packagesRef = useRef<HTMLElement>(null);

  const activeService = SERVICES_DATA.find(s => s.id === activeServiceId) || SERVICES_DATA[0];

  const scrollToPackages = (id: string) => {
    setActiveServiceId(id);
    setTimeout(() => {
      packagesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const shareOnWhatsapp = () => {
    const text = "Check out the beautiful photography services at LoveLoom Lens!";
    const url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FFFCF8] text-story-text selection:bg-peach/30">
      {/* 1. Pill Shaped glassmorphism Navbar */}
      <nav className="fixed top-6 left-0 w-full z-50 px-4">
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
            <a href="#services-overview" className="text-slate-800 font-bold hover:text-accent-pink transition-colors">Package</a>
            <Link to="/portfolio" className="text-slate-800 font-bold hover:text-accent-pink transition-colors">Portfolio</Link>
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
                <a href="#services-overview" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-800 font-bold hover:bg-lavender/20 rounded-xl transition-colors">Package</a>
                <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-800 font-bold hover:bg-lavender/20 rounded-xl transition-colors">Portfolio</Link>
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
      <section className="relative min-h-[70vh] w-full flex items-center justify-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden watercolor-bg">
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-script text-5xl sm:text-6xl md:text-8xl text-slate-950 mb-6"
          >
            Our Services & Packages
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-2xl text-slate-800 font-bold italic mb-8 md:mb-10 leading-relaxed"
          >
            "Every chapter of your life deserves to be told through a lens of wonder and grace."
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="#services-overview"
              className="inline-block bg-accent-pink text-white border border-accent-pink px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white hover:text-accent-pink transition-all shadow-xl"
            >
              Choose Your Package
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section id="services-overview" className="py-10 md:py-12 px-4 sm:px-6 unifying-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-slate-950 mb-4">The Anthology of Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-6 text-sm sm:text-base">Explore our range of specialized photography services, each designed to capture a unique facet of your story.</p>
            <div className="flex items-center justify-center gap-2 text-peach font-bold text-xs sm:text-sm uppercase tracking-widest animate-pulse">
              <span>Select a service to view its pricing</span>
              <ArrowRight size={14} className="rotate-90" />
            </div>
          </div>
          
          <div className="flex overflow-x-auto pb-6 px-4 -mx-4 gap-4 sm:gap-6 no-scrollbar snap-x snap-proximity">
            {SERVICES_DATA.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => scrollToPackages(service.id)}
                className={`flex-shrink-0 w-[240px] sm:w-64 snap-center cursor-pointer p-5 sm:p-6 rounded-[32px] border transition-all duration-300 group relative overflow-hidden ${
                  activeServiceId === service.id 
                  ? 'bg-white border-accent-pink shadow-xl ring-4 ring-accent-pink/10' 
                  : 'bg-white/50 backdrop-blur-sm border-lavender/30 hover:border-accent-pink/50 hover:shadow-lg'
                }`}
              >
                {activeServiceId === service.id && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute top-0 right-0 bg-accent-pink text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-tighter"
                  >
                    Active
                  </motion.div>
                )}
                
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm transition-all duration-300 ${
                  activeServiceId === service.id ? 'bg-accent-pink text-white scale-110' : 'bg-white group-hover:scale-110'
                }`}>
                  {React.cloneElement(service.icon as React.ReactElement, { 
                    size: 24,
                    className: activeServiceId === service.id ? 'text-white' : (service.icon as React.ReactElement).props.className
                  })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{service.title}</h3>
                <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeServiceId === service.id ? 'text-accent-pink' : 'text-slate-400 group-hover:text-accent-pink'
                }`}>
                  {activeServiceId === service.id ? 'Viewing Pricing' : 'Click to View Pricing'}
                  <ArrowRight size={12} className={activeServiceId === service.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all'} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Detailed Packages */}
      <section id="packages" ref={packagesRef} className="py-10 md:py-12 px-4 sm:px-6 bg-white/30 min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeServiceId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-8 gap-4 md:gap-6">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-accent-pink/20 rounded-xl flex items-center justify-center text-accent-pink shrink-0">
                      {React.cloneElement(activeService.icon as React.ReactElement, { size: 20 })}
                    </div>
                    <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-slate-950">{activeService.title}</h2>
                  </div>
                  <div className="h-1 w-20 bg-accent-pink rounded-full"></div>
                </div>
                <p className="text-slate-600 max-w-md italic text-sm sm:text-base">{activeService.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {activeService.packages.map((pkg, pIdx) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: pIdx * 0.1 }}
                    whileHover={{ y: -10 }}
                    className={`relative p-6 sm:p-8 rounded-[40px] border backdrop-blur-md flex flex-col h-full ${
                      pkg.name === 'Premium' 
                      ? 'bg-white/80 border-accent-pink shadow-xl scale-100 md:scale-105 z-10' 
                      : 'bg-white/40 border-lavender/30 shadow-sm'
                    }`}
                  >
                    {pkg.name === 'Premium' && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-pink text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                        Most Popular
                      </div>
                    )}
                    <div className="mb-6 sm:mb-8">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                      <div className="text-3xl sm:text-4xl font-script text-slate-950">{pkg.price}</div>
                    </div>
                    <ul className="space-y-4 mb-8 sm:mb-10 flex-grow">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-slate-700 text-sm">
                          <Check size={16} className="text-mint mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 sm:py-4 rounded-full font-bold transition-all ${
                      pkg.name === 'Premium'
                      ? 'bg-accent-pink text-white hover:bg-white hover:text-accent-pink border-2 border-accent-pink shadow-lg'
                      : 'bg-white/60 text-slate-900 border-2 border-accent-pink hover:bg-accent-pink hover:text-white'
                    }`}>
                      Select {pkg.name}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 5. Popular Packages Highlight section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 watercolor-bg">
        <div className="max-w-5xl mx-auto bg-white/40 backdrop-blur-xl rounded-[40px] md:rounded-[60px] p-6 sm:p-8 md:p-12 lg:p-20 border border-white/50 shadow-2xl">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-accent-pink font-bold tracking-widest uppercase text-xs sm:text-sm">Curated Excellence</span>
            <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-slate-950 mt-4">The Signature Anthology</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">The Ultimate Wedding Experience</h3>
              <p className="text-slate-700 leading-relaxed italic font-medium text-sm sm:text-base">
                "Our most sought-after package, combining the artistry of two lead photographers with a handcrafted luxury album that will be cherished for generations."
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <span className="bg-white/60 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-slate-800 border border-accent-pink">Full Day Coverage</span>
                <span className="bg-white/60 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-slate-800 border border-accent-pink">Luxury Photo Book</span>
                <span className="bg-white/60 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-slate-800 border border-accent-pink">Engagement Session</span>
              </div>
              <div className="pt-4 sm:pt-6">
                <div className="text-3xl sm:text-4xl font-script text-slate-950 mb-4">$3,200 <span className="text-base sm:text-lg font-sans text-slate-500 line-through ml-2">$3,800</span></div>
                <button className="w-full sm:w-auto bg-accent-pink text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-bold hover:bg-white hover:text-accent-pink border-2 border-accent-pink transition-all shadow-xl">
                  Inquire Now
                </button>
              </div>
            </div>
            <div className="relative order-1 md:order-2 max-w-sm mx-auto w-full">
              <div className="aspect-[4/5] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl rotate-2 md:rotate-3">
                <img 
                  src={weddingImg} 
                  alt="Wedding Highlight" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-accent-pink rounded-full flex items-center justify-center text-white font-script text-xl sm:text-2xl -rotate-12 shadow-lg">
                Save 15%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-script text-5xl sm:text-6xl md:text-8xl text-slate-950 mb-6 md:mb-8">Ready to Capture Your Story?</h2>
          <p className="text-slate-600 text-base sm:text-lg mb-8 md:mb-12">Every masterpiece begins with a single conversation. Let us help you write yours.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button className="w-full sm:w-auto bg-accent-pink text-white px-8 py-4 sm:px-12 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-accent-pink border-2 border-accent-pink transition-all shadow-xl">
              Begin Your Journey
            </button>
            <button className="w-full sm:w-auto bg-white text-slate-900 border-2 border-accent-pink px-8 py-4 sm:px-12 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-accent-pink hover:text-white transition-all shadow-md">
              Contact Studio
            </button>
          </div>
        </motion.div>
      </section>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
};

export default Services;
