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
import weddingImgMobile from '../assets/services/wedding photo-mobile.webp';
import brandLogo from '../assets/logo/Logo_updated.png';

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
          <a href="/" className="flex items-center gap-2 text-2xl md:text-3xl font-script font-bold text-slate-950 group">
            <img src={brandLogo} alt="LoveLoom Lens Logo" className="h-8 md:h-10 w-auto object-contain drop-shadow-md group-hover:drop-shadow-lg transition-all" />
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

      {/* 3. Combined Service Selection & Pricing Section */}
      <section id="services-overview" className="py-8 md:py-14 px-4 sm:px-6 unifying-bg shadow-inner relative overflow-hidden">
        {/* Background elements for depth */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-pink/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-mint/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-slate-950 mb-4">The Anthology of Packages</h2>
            <div className="h-1.5 w-24 bg-accent-pink rounded-full mx-auto mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
              Every chapter of your life is unique. Select a service below to explore our carefully crafted photography investment options.
            </p>
          </div>
          
          {/* Service Selector Tabs */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-2 md:gap-3 lg:gap-4 mb-10 md:mb-16 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 no-scrollbar">
            {SERVICES_DATA.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`flex items-center gap-2 lg:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 border-2 whitespace-nowrap ${
                  activeServiceId === service.id 
                  ? 'bg-accent-pink border-accent-pink text-white shadow-lg scale-105' 
                  : 'bg-white/60 backdrop-blur-sm border-lavender/30 text-slate-600 hover:border-accent-pink/40 hover:bg-white'
                }`}
              >
                <div className={`${activeServiceId === service.id ? 'text-white' : ''}`}>
                  {React.cloneElement(service.icon as React.ReactElement, { size: 18 })}
                </div>
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content & Cards */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeServiceId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-8 md:space-y-10"
            >

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {activeService.packages.map((pkg, pIdx) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: pIdx * 0.1 }}
                    whileHover={{ y: -12 }}
                    className={`relative p-8 sm:p-10 rounded-[40px] border flex flex-col h-full transition-all duration-500 ${
                      pkg.name === 'Premium' 
                      ? 'bg-white border-accent-pink shadow-2xl scale-100 md:scale-105 lg:scale-110 z-10' 
                      : 'bg-white/70 backdrop-blur-md border-lavender/40 shadow-xl'
                    }`}
                  >
                    {pkg.name === 'Premium' && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent-pink text-white px-6 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-md pointer-events-none">
                        Most Popular
                      </div>
                    )}
                    <div className="mb-8 text-center md:text-left">
                      <h4 className="text-xl font-bold text-slate-900 mb-3">{pkg.name}</h4>
                      <div className="flex items-baseline gap-1 justify-center md:justify-start">
                        <span className="text-4xl sm:text-5xl font-script text-slate-950">{pkg.price}</span>
                        <span className="text-slate-400 text-sm font-sans">USD</span>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-10 flex-grow">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-4 text-slate-700 text-sm md:text-base">
                          <div className="w-5 h-5 rounded-full bg-mint/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={12} className="text-mint font-bold" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl ${
                      pkg.name === 'Premium'
                      ? 'bg-accent-pink text-white hover:bg-slate-950 border-2 border-accent-pink hover:border-slate-950'
                      : 'bg-white text-slate-900 border-2 border-accent-pink hover:bg-accent-pink hover:text-white'
                    }`}>
                      Inquire for {pkg.name}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 5. Popular Packages Highlight section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 watercolor-bg">
        <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-xl rounded-[40px] md:rounded-[50px] p-6 sm:p-8 md:p-10 lg:p-14 border border-white/50 shadow-2xl">
          <div className="text-center mb-6 md:mb-10">
            <span className="text-accent-pink font-bold tracking-widest uppercase text-[10px] sm:text-xs">Curated Excellence</span>
            <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-slate-950 mt-2">The Signature Anthology</h2>
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
              <div className="pt-3 sm:pt-4">
                <div className="text-2xl sm:text-3xl font-script text-slate-950 mb-3">$3,200 <span className="text-sm sm:text-base font-sans text-slate-500 line-through ml-2">$3,800</span></div>
                <button className="w-full sm:w-auto bg-accent-pink text-white px-7 py-3 sm:px-8 sm:py-3.5 rounded-full font-bold text-sm sm:text-base hover:bg-white hover:text-accent-pink border-2 border-accent-pink transition-all shadow-xl">
                  Inquire Now
                </button>
              </div>
            </div>
            <div className="relative order-1 md:order-2 max-w-sm mx-auto w-full">
              <div className="aspect-[4/5] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl rotate-2 md:rotate-3">
                <img 
                  src={weddingImg} 
                  srcSet={`${weddingImgMobile} 500w, ${weddingImg} 1000w`}
                  sizes="(max-width: 640px) 100vw, 400px"
                  alt="Wedding Highlight" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-24 sm:h-24 bg-accent-pink rounded-full flex items-center justify-center text-white font-script text-lg sm:text-xl -rotate-12 shadow-lg">
                Save 15%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-slate-950 mb-4 md:mb-6">Ready to Capture Your Story?</h2>
          <p className="text-slate-600 text-sm sm:text-base mb-6 md:mb-10 max-w-2xl mx-auto">Every masterpiece begins with a single conversation. Let us help you write yours.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button className="w-full sm:w-auto bg-accent-pink text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-white hover:text-accent-pink border-2 border-accent-pink transition-all shadow-xl">
              Begin Your Journey
            </button>
            <button className="w-full sm:w-auto bg-white text-slate-900 border-2 border-accent-pink px-8 py-3.5 sm:px-10 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-accent-pink hover:text-white transition-all shadow-md">
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
