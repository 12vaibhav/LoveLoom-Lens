/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Quote, 
  Menu, 
  X
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import { IMAGES, WhatsappIcon, SERVICES, TESTIMONIALS } from './constants';
import bigHero from './assets/hero/big-image-card.webp';
import smallHero from './assets/hero/small-image-card.webp';
import port1 from './assets/portfolio/portfolio-1.webp';
import port2 from './assets/portfolio/portfolio-2.webp';
import port3 from './assets/portfolio/portfolio-3.webp';
import port4 from './assets/portfolio/portfolio-4.webp';
import port5 from './assets/portfolio/portfolio-5.webp';
import port6 from './assets/portfolio/portfolio-6.webp';
import port7 from './assets/portfolio/portfolio-7.webp';


const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
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

function Home() {
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
  };

  const shareOnWhatsapp = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out LoveLoom Lens - Capturing your story beautifully!");
    window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
  };

  const shareOnInstagram = () => {
    window.open(`https://www.instagram.com/`, '_blank');
  };
  
  // Parallax transforms for Hero Section - Reduced intensity on mobile
  const bgOrb1Y = useTransform(scrollY, [0, 1000], [0, isMobile ? 80 : 250]);
  const bgOrb2Y = useTransform(scrollY, [0, 1000], [0, isMobile ? -50 : -150]);
  const bgOrb3Y = useTransform(scrollY, [0, 1000], [0, isMobile ? 30 : 100]);
  const textY = useTransform(scrollY, [0, 1000], [0, isMobile ? 40 : 120]);
  const imageY = useTransform(scrollY, [0, 1000], [0, isMobile ? 15 : 40]);

  // Drag-to-scroll logic for Portfolio
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftValue, setScrollLeftValue] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current || isMobile) return;
    setIsDragging(true);
    // Use pageX to handle dragging properly
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftValue(scrollRef.current.scrollLeft);
    // Disable smooth scroll for instant feedback during drag
    scrollRef.current.style.scrollBehavior = 'auto';
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsDragging(false);
    if (scrollRef.current) scrollRef.current.style.scrollBehavior = 'smooth';
  };
  
  const handleMouseUp = () => {
    if (isMobile) return;
    setIsDragging(false);
    if (scrollRef.current) scrollRef.current.style.scrollBehavior = 'smooth';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current || isMobile) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Increased factor for better responsiveness
    scrollRef.current.scrollLeft = scrollLeftValue - walk;
  };

  return (
    <div className="min-h-screen selection:bg-accent-pink/30 overflow-x-hidden">
      
      {/* 1. Pill shaped glassmorphism Navbar */}
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
            <Link to="/portfolio" className="text-slate-800 font-bold hover:text-accent-pink transition-colors">Portfolio</Link>
            <Link to="/contact" className="text-slate-800 font-bold hover:text-accent-pink transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button 
              onClick={shareOnWhatsapp}
              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors flex items-center justify-center"
              title="Share on WhatsApp"
            >
              <WhatsappIcon size={24} />
            </button>
            <Link to="/contact" className="hidden sm:block bg-accent-pink hover:bg-white border-2 border-accent-pink text-white hover:text-accent-pink px-5 sm:px-6 py-2 rounded-full font-bold text-sm transition-all shadow-md">
              Book Now
            </Link>
            <button 
              className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
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
              className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-lavender p-4 flex flex-col gap-2 md:hidden z-50"
            >
              <Link to="/" className="text-slate-800 font-bold hover:bg-lavender/50 rounded-xl px-4 py-3 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-slate-800 font-bold hover:bg-lavender/50 rounded-xl px-4 py-3 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/services" className="text-slate-800 font-bold hover:bg-lavender/50 rounded-xl px-4 py-3 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Package</Link>
              <Link to="/portfolio" className="text-slate-800 font-bold hover:bg-lavender/50 rounded-xl px-4 py-3 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
              <Link to="/contact" className="text-slate-800 font-bold hover:bg-lavender/50 rounded-xl px-4 py-3 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link to="/contact" className="bg-accent-pink text-white text-center px-4 py-3 rounded-xl font-bold mt-2 shadow-md" onClick={() => setIsMobileMenuOpen(false)}>Book Now</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center pt-20 md:pt-28 pb-10 md:pb-14 overflow-hidden watercolor-bg">
        {/* Decorative Floating Background Elements with Parallax */}
        <motion.div style={{ y: bgOrb1Y }} className="absolute top-1/4 left-1/4 w-64 h-64 pointer-events-none">
          <motion.div 
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-full h-full bg-rose/40 rounded-full blur-3xl"
          />
        </motion.div>
        
        <motion.div style={{ y: bgOrb2Y }} className="absolute bottom-1/4 right-1/3 w-80 h-80 pointer-events-none">
          <motion.div 
            animate={{ y: [0, 40, 0], opacity: [0.2, 0.5, 0.2] }} 
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
            className="w-full h-full bg-mint/40 rounded-full blur-3xl"
          />
        </motion.div>
        
        <motion.div style={{ y: bgOrb3Y }} className="absolute top-1/3 right-1/4 w-56 h-56 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.2, 0.4, 0.2] }} 
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="w-full h-full bg-peach/30 rounded-full blur-3xl"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-32 px-4 sm:px-6 text-center lg:text-left">
          <motion.div style={{ y: textY }} className="flex-[1.2] z-10 lg:pr-12 order-1 lg:order-1">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2, delayChildren: 0.1 }
                }
              }}
            >
              <motion.h1 
                className="font-script text-[3rem] leading-[1.1] sm:text-6xl lg:text-[6.5rem] font-bold text-slate-950 mb-4 sm:mb-8 tracking-tight flex flex-col"
              >
                <motion.span variants={{ hidden: { opacity: 0, y: isMobile ? 20 : 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>Your Story,</motion.span>
                <motion.span variants={{ hidden: { opacity: 0, y: isMobile ? 20 : 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}>Beautifully</motion.span>
                <motion.span variants={{ hidden: { opacity: 0, y: isMobile ? 20 : 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="text-slate-900">Unfurled.</motion.span>
              </motion.h1>
              
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                className="text-lg sm:text-xl md:text-2xl text-slate-800 mb-6 sm:mb-8 text-narrative max-w-xl font-bold italic mx-auto lg:mx-0"
              >
                Capturing Your Love Story â€” from pre-wedding dreams to newborn smiles
              </motion.p>
              
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center"
              >
                <Link to="/services" className="group relative overflow-hidden bg-accent-pink text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg transition-all shadow-xl hover:shadow-accent-pink/40 hover:-translate-y-1 w-full sm:w-auto">
                  <span className="relative z-10">Book Your Shoot</span>
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 ease-out group-hover:scale-100 group-hover:bg-white/10"></div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div style={{ y: imageY }} className="flex-1 relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-md lg:max-w-xl lg:-mt-12 order-2 lg:order-2 mb-4 lg:mb-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              transition={{ duration: isMobile ? 0.8 : 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              {/* Continuous Floating Animation Wrapper */}
              <motion.div
                animate={{ y: isMobile ? [-8, 8, -8] : [-15, 15, -15] }}
                transition={{ repeat: Infinity, duration: isMobile ? 6 : 7, ease: "easeInOut" }}
                className="relative"
              >
                {/* Decorative backdrop glow for the image */}
                <div className="absolute inset-0 bg-white/40 blur-3xl rounded-full transform scale-125 -z-10"></div>
                
                {/* Secondary Smaller Card on the Left */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: -15, x: 20 }}
                  animate={{ opacity: 1, scale: 1, rotate: -10, x: 0 }}
                  transition={{ duration: isMobile ? 0.8 : 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                  className="absolute -left-8 sm:-left-16 md:-left-24 top-1/3 -translate-y-1/2 w-[110px] sm:w-[160px] md:w-[200px] z-20"
                >
                  <div className="book-shape-1 bg-white/80 p-2 sm:p-3 shadow-2xl border-4 border-white backdrop-blur-md">
                    <div className="aspect-[3/4] overflow-hidden book-shape-1 border-2 border-white shadow-inner">
                      <img 
                        src={smallHero} 
                        alt="Supporting showcase" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </motion.div>

                <div className="book-shape-3 bg-white/60 p-3 sm:p-6 lg:p-8 shadow-2xl border-4 border-white backdrop-blur-sm relative z-10">
                  <img 
                    src={bigHero} 
                    alt="Whimsical couple illustration" 
                    className="w-full h-auto book-shape-3 object-cover shadow-inner"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating badge */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
                    className="absolute -bottom-4 -left-4 lg:-bottom-8 lg:-left-8 bg-white rounded-full p-3 lg:p-5 shadow-xl border-2 border-lavender flex items-center justify-center"
                  >
                    <Sparkles className="text-pink-600 w-6 h-6 lg:w-8 lg:h-8" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="py-10 md:py-14 unifying-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12 text-center lg:text-left"
          >
            <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-slate-950 mb-3">Our Hand-Crafted Chapters</h2>
            <p className="text-slate-700 text-lg sm:text-xl font-bold max-w-xl italic mx-auto lg:mx-0">
              Dive into our curated anthology. Each service holds a different heartbeat, a different light, and a story waiting to be told.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group ${service.color} p-5 sm:p-6 md:p-8 ${service.shape} shadow-lg border-2 border-white/50 relative transition-all duration-500 hover:-translate-y-2 hover:-rotate-1 cursor-pointer ${index % 3 === 1 ? 'lg:mt-16' : ''} ${index % 3 === 2 ? 'lg:mt-8' : ''}`}
              >
                <div className={`absolute -top-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} bg-white rounded-full p-3 sm:p-4 shadow-md ${service.iconColor}`}>
                  <service.icon size={28} strokeWidth={2.5} />
                </div>
                <div className={`aspect-[4/3] sm:aspect-[3/4] overflow-hidden ${service.shape} mb-6 border-4 border-white/80 shadow-inner bg-white/40 flex items-center justify-center`}>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-script text-2xl sm:text-3xl md:text-4xl text-slate-950 mb-3">{service.title}</h3>
                <p className="text-slate-800 text-narrative font-bold text-base sm:text-lg">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Portfolio */}
      <section id="portfolio" className="pt-10 pb-2 md:py-14 bg-white relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute top-10 -right-20 text-[10rem] sm:text-[15rem] font-script text-slate-50 opacity-[0.03] select-none pointer-events-none rotate-12">
          Gallery
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center md:items-baseline justify-between mb-4 md:mb-6 gap-6 md:gap-8 text-center md:text-left"
          >
              <div className="space-y-1">
                <h2 className="font-script text-4xl sm:text-5xl md:text-8xl text-slate-950">A Gallery of Tales</h2>
                <div className="h-1.5 w-20 sm:w-24 bg-accent-pink rounded-full mx-auto md:mx-0"></div>
              </div>
            <p className="text-slate-700 italic max-w-md text-lg md:text-xl border-l-4 border-lavender pl-6 hidden md:block font-bold">
              Every portrait is a unique volume in our grand library of lives...
            </p>
          </motion.div>
        </div>

        {/* Suspended Horizontal Gallery */}
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`relative w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none transition-shadow duration-300 ${!isDragging && !isMobile ? 'snap-x snap-mandatory scroll-smooth' : ''} ${isMobile ? 'touch-auto' : ''}`}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex items-start gap-8 md:gap-20 px-6 md:px-[8vw] pt-24 pb-4 md:pb-8 min-w-max relative group select-none">
            {/* Single Continuous Horizontal Thread - Lifted to align with hooks */}
            <div className="absolute top-[54px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-slate-300 to-transparent z-10"></div>
            <motion.div 
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={isMobile ? { rotate: 0, x: 0 } : { rotate: [-1, 1, -1], x: [-2.5, 2.5, -2.5] }}
              transition={{ delay: 0.1, rotate: { repeat: Infinity, duration: isMobile ? 12 : 8, ease: "easeInOut" }, x: { repeat: Infinity, duration: isMobile ? 15 : 10, ease: "easeInOut" } }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              style={{ transformOrigin: "top center" }}
              className="relative z-10 w-[280px] md:w-[380px] flex-shrink-0 group cursor-pointer snap-center select-none"
            >
              {/* Vertical Threads with Hooks for Card 1 */}
              <div className="absolute -top-[42px] left-1/4 w-[1.5px] h-[42px] bg-slate-400/80 block origin-top z-20">
                {/* The "Hook" that sits on the thread */}
                <div className="absolute -top-3.5 -left-[5.5px] w-3.5 h-4.5 border-[2px] border-slate-500 rounded-t-full border-b-0 bg-white shadow-sm"></div>
                {/* The "Clasp" at card junction */}
                <div className="absolute bottom-0 -left-[3.5px] w-2 h-2 bg-slate-500 rounded-full border border-white"></div>
              </div>
              <div className="absolute -top-[42px] right-1/4 w-[1.5px] h-[42px] bg-slate-400/80 block origin-top z-20">
                {/* The "Hook" that sits on the thread */}
                <div className="absolute -top-3.5 -left-[5.5px] w-3.5 h-4.5 border-[2px] border-slate-500 rounded-t-full border-b-0 bg-white shadow-sm"></div>
                {/* The "Clasp" at card junction */}
                <div className="absolute bottom-0 -left-[3.5px] w-2 h-2 bg-slate-500 rounded-full border border-white"></div>
              </div>
              <div className="bg-lavender p-4 book-shape-1 shadow-xl border-2 border-white/50">
                <div className="aspect-[3/4] overflow-hidden book-shape-1 border-4 border-white shadow-inner">
                  <img src={port1} alt="Portrait" className="w-full h-full object-cover" draggable={false} />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-script text-2xl text-slate-950">The Silent Poet</h4>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={isMobile ? { rotate: 0, x: 0 } : { rotate: [1, -1, 1], x: [2, -2, 2] }}
              transition={{ delay: 0.2, rotate: { repeat: Infinity, duration: isMobile ? 12 : 7, ease: "easeInOut" }, x: { repeat: Infinity, duration: isMobile ? 15 : 9, ease: "easeInOut" } }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              style={{ transformOrigin: "top center" }}
              className="relative z-10 w-[280px] md:w-[380px] flex-shrink-0 mt-12 group cursor-pointer snap-center select-none"
            >
              {/* Vertical Threads with Hooks for Card 2 - Length matches staggered top */}
              <div className="absolute -top-[90px] left-1/4 w-[1.5px] h-[90px] bg-slate-400/80 block origin-top z-20">
                <div className="absolute -top-3.5 -left-[5.5px] w-3.5 h-4.5 border-[2px] border-slate-500 rounded-t-full border-b-0 bg-white shadow-sm"></div>
                <div className="absolute bottom-0 -left-[3.5px] w-2 h-2 bg-slate-500 rounded-full border border-white"></div>
              </div>
              <div className="absolute -top-[90px] right-1/4 w-[1.5px] h-[90px] bg-slate-400/80 block origin-top z-20">
                <div className="absolute -top-3.5 -left-[5.5px] w-3.5 h-4.5 border-[2px] border-slate-500 rounded-t-full border-b-0 bg-white shadow-sm"></div>
                <div className="absolute bottom-0 -left-[3.5px] w-2 h-2 bg-slate-500 rounded-full border border-white"></div>
              </div>
              <div className="bg-mint p-4 book-shape-2 shadow-xl border-2 border-white/50">
                <div className="aspect-square overflow-hidden book-shape-2 border-4 border-white shadow-inner">
                  <img src={port2} alt="Abstract" className="w-full h-full object-cover" draggable={false} />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-script text-2xl text-slate-950">Golden Slumber</h4>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={isMobile ? { rotate: 0, x: 0 } : { rotate: [-0.8, 0.8, -0.8], x: [-3, 3, -3] }}
              transition={{ delay: 0.4, rotate: { repeat: Infinity, duration: isMobile ? 12 : 9, ease: "easeInOut" }, x: { repeat: Infinity, duration: isMobile ? 15 : 11, ease: "easeInOut" } }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              style={{ transformOrigin: "top center" }}
              className="relative z-10 w-[280px] md:w-[380px] flex-shrink-0 group cursor-pointer snap-center select-none"
            >
              <div className="absolute -top-[42px] left-1/4 w-[1.5px] h-[42px] bg-slate-400/80 block origin-top z-20">
                <div className="absolute -top-3.5 -left-[5.5px] w-3.5 h-4.5 border-[2px] border-slate-500 rounded-t-full border-b-0 bg-white shadow-sm"></div>
                <div className="absolute bottom-0 -left-[3.5px] w-2 h-2 bg-slate-500 rounded-full border border-white"></div>
              </div>
              <div className="absolute -top-[42px] right-1/4 w-[1.5px] h-[42px] bg-slate-400/80 block origin-top z-20">
                <div className="absolute -top-3.5 -left-[5.5px] w-3.5 h-4.5 border-[2px] border-slate-500 rounded-t-full border-b-0 bg-white shadow-sm"></div>
                <div className="absolute bottom-0 -left-[3.5px] w-2 h-2 bg-slate-500 rounded-full border border-white"></div>
              </div>
              <div className="bg-peach p-4 book-shape-3 shadow-xl border-2 border-white/50">
                <div className="aspect-[4/5] overflow-hidden book-shape-3 border-4 border-white shadow-inner">
                  <img src={port3} alt="Portrait" className="w-full h-full object-cover" draggable={false} />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-script text-2xl text-slate-950">Floral Vows</h4>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={isMobile ? { rotate: 0, x: 0 } : { rotate: [0.7, -0.7, 0.7], x: [2.5, -2.5, 2.5] }}
              transition={{ delay: 0.1, rotate: { repeat: Infinity, duration: isMobile ? 12 : 7.5, ease: "easeInOut" }, x: { repeat: Infinity, duration: isMobile ? 15 : 9.5, ease: "easeInOut" } }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              style={{ transformOrigin: "top center" }}
              className="relative z-10 w-[280px] md:w-[380px] flex-shrink-0 mt-6 group cursor-pointer snap-center select-none"
            >
              <div className="absolute -top-[66px] left-1/4 w-[1.5px] h-[66px] bg-slate-400/80 block origin-top z-20">
                <div className="absolute -top-3.5 -left-[5.5px] w-3.5 h-4.5 border-[2px] border-slate-500 rounded-t-full border-b-0 bg-white shadow-sm"></div>
                <div className="absolute bottom-0 -left-[3.5px] w-2 h-2 bg-slate-500 rounded-full border border-white"></div>
              </div>
              <div className="absolute -top-[66px] right-1/4 w-[1.5px] h-[66px] bg-slate-400/80 block origin-top z-20">
                <div className="absolute -top-3.5 -left-[5.5px] w-3.5 h-4.5 border-[2px] border-slate-500 rounded-t-full border-b-0 bg-white shadow-sm"></div>
                <div className="absolute bottom-0 -left-[3.5px] w-2 h-2 bg-slate-500 rounded-full border border-white"></div>
              </div>
              <div className="bg-rose p-4 book-shape-1 shadow-xl border-2 border-white/50">
                <div className="aspect-[3/4] overflow-hidden book-shape-1 border-4 border-white shadow-inner">
                  <img src={port4} alt="The Meeting" className="w-full h-full object-cover" draggable={false} />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-script text-2xl text-slate-950">The First Meeting</h4>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={isMobile ? { rotate: 0, x: 0 } : { rotate: [-1.2, 1.2, -1.2], x: [-4, 4, -4] }}
              transition={{ delay: 0.3, rotate: { repeat: Infinity, duration: isMobile ? 12 : 8.5, ease: "easeInOut" }, x: { repeat: Infinity, duration: 10.5, ease: "easeInOut" } }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              style={{ transformOrigin: "top center" }}
              className="relative z-10 w-[280px] md:w-[380px] flex-shrink-0 group cursor-pointer snap-center select-none"
            >
              <div className="absolute -top-[42px] left-1/4 w-[1.5px] h-[42px] bg-slate-400/80 block origin-top z-20">
                <div className="absolute -top-3.5 -left-[5.5px] w-3.5 h-4.5 border-[2px] border-slate-500 rounded-t-full border-b-0 bg-white shadow-sm"></div>
                <div className="absolute bottom-0 -left-[3.5px] w-2 h-2 bg-slate-500 rounded-full border border-white"></div>
              </div>
              <div className="absolute -top-[42px] right-1/4 w-[1.5px] h-[42px] bg-slate-400/80 block origin-top z-20">
                <div className="absolute -top-3.5 -left-[5.5px] w-3.5 h-4.5 border-[2px] border-slate-500 rounded-t-full border-b-0 bg-white shadow-sm"></div>
                <div className="absolute bottom-0 -left-[3.5px] w-2 h-2 bg-slate-500 rounded-full border border-white"></div>
              </div>
              <div className="bg-sky p-4 book-shape-3 shadow-xl border-2 border-white/50">
                <div className="aspect-[3/4] overflow-hidden book-shape-3 border-4 border-white shadow-inner">
                  <img src={port5} alt="Landscape" className="w-full h-full object-cover" draggable={false} />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-script text-2xl text-slate-950">Mountain Silence</h4>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={isMobile ? { rotate: 0, x: 0 } : { rotate: [0.9, -0.9, 0.9], x: [3.5, -3.5, 3.5] }}
              transition={{ delay: 0.5, rotate: { repeat: Infinity, duration: isMobile ? 12 : 6.5, ease: "easeInOut" }, x: { repeat: Infinity, duration: isMobile ? 15 : 8.5, ease: "easeInOut" } }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              style={{ transformOrigin: "top center" }}
              className="relative z-10 w-[280px] md:w-[380px] flex-shrink-0 mt-12 group cursor-pointer snap-center select-none mr-12"
            >
              {/* Vertical Threads with Hooks for Card 6 - Length matches Card 2 staggered top */}
              <div className="absolute -top-[90px] left-1/4 w-[1.5px] h-[90px] bg-slate-400/80 block origin-top z-20">
                <div className="absolute -top-3.5 -left-[5.5px] w-3.5 h-4.5 border-[2px] border-slate-500 rounded-t-full border-b-0 bg-white shadow-sm"></div>
                <div className="absolute bottom-0 -left-[3.5px] w-2 h-2 bg-slate-500 rounded-full border border-white"></div>
              </div>
              <div className="absolute -top-[90px] right-1/4 w-[1.5px] h-[90px] bg-slate-400/80 block origin-top z-20">
                <div className="absolute -top-3.5 -left-[5.5px] w-3.5 h-4.5 border-[2px] border-slate-500 rounded-t-full border-b-0 bg-white shadow-sm"></div>
                <div className="absolute bottom-0 -left-[3.5px] w-2 h-2 bg-slate-500 rounded-full border border-white"></div>
              </div>
              <div className="bg-lavender p-4 book-shape-2 shadow-xl border-2 border-white/50">
                <div className="aspect-[3/4] overflow-hidden book-shape-2 border-4 border-white shadow-inner">
                  <img src={port6} alt="Wedding" className="w-full h-full object-cover" draggable={false} />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-script text-2xl text-slate-950">Whispered Vows</h4>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={isMobile ? { rotate: 0, x: 0 } : { rotate: [-0.6, 0.6, -0.6], x: [-3, 3, -3] }}
              transition={{ delay: 0.2, rotate: { repeat: Infinity, duration: isMobile ? 12 : 8, ease: "easeInOut" }, x: { repeat: Infinity, duration: isMobile ? 15 : 10, ease: "easeInOut" } }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              style={{ transformOrigin: "top center" }}
              className="relative z-10 w-[280px] md:w-[380px] flex-shrink-0 mt-6 group cursor-pointer snap-center select-none mr-12"
            >
              <div className="absolute -top-[66px] left-1/4 w-[1.5px] h-[66px] bg-slate-400/80 block origin-top z-20">
                <div className="absolute -top-3.5 -left-[5.5px] w-3.5 h-4.5 border-[2px] border-slate-500 rounded-t-full border-b-0 bg-white shadow-sm"></div>
                <div className="absolute bottom-0 -left-[3.5px] w-2 h-2 bg-slate-500 rounded-full border border-white"></div>
              </div>
              <div className="absolute -top-[66px] right-1/4 w-[1.5px] h-[66px] bg-slate-400/80 block origin-top z-20">
                <div className="absolute -top-3.5 -left-[5.5px] w-3.5 h-4.5 border-[2px] border-slate-500 rounded-t-full border-b-0 bg-white shadow-sm"></div>
                <div className="absolute bottom-0 -left-[3.5px] w-2 h-2 bg-slate-500 rounded-full border border-white"></div>
              </div>
              <div className="bg-sky p-4 book-shape-3 shadow-xl border-2 border-white/50">
                <div className="aspect-[3/4] overflow-hidden book-shape-3 border-4 border-white shadow-inner">
                  <img src={port7} alt="Final Portrait" className="w-full h-full object-cover" draggable={false} />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-script text-2xl text-slate-950">Eternal Echoes</h4>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Client Testimonials */}
      <section id="testimonials" className="pt-2 pb-10 md:py-14 watercolor-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-script text-4xl sm:text-5xl md:text-6xl text-slate-950"
          >
            Tales from Our Library
          </motion.h2>
        </div>

        <div className="relative flex overflow-hidden group py-4 md:py-8">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: isMobile ? 60 : 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-6 sm:gap-8 px-4 whitespace-nowrap"
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-block w-[280px] sm:w-[320px] md:w-[400px] bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border-b-4 border-accent-pink flex-shrink-0 whitespace-normal text-left relative perspective-1000"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-lavender overflow-hidden p-0.5 bg-white">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-slate-950 uppercase tracking-widest text-[10px] md:text-xs block">
                      {t.name}
                    </cite>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Sparkles key={i} size={10} className="text-peach fill-peach" />
                      ))}
                    </div>
                  </div>
                </div>
                <Quote className="text-pink-600 mb-4 opacity-50" size={24} />
                <p className="text-base md:text-lg font-script text-slate-800 italic leading-relaxed font-bold">
                  "{t.text}"
                </p>
                
                {/* Decorative shape */}
                <div className="absolute top-4 right-4 text-mint opacity-10 pointer-events-none">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Final CTA & Footer Section */}
      <section className="relative pt-10 pb-4 md:pt-14 md:pb-8 px-4 sm:px-6 overflow-hidden watercolor-bg">
        {/* Decorative background text */}
        <div className="absolute -bottom-10 -left-20 text-[10rem] sm:text-[15rem] md:text-[20rem] font-script text-slate-900/5 select-none pointer-events-none -rotate-6">
          Finis
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-10 md:mb-14">
            {/* Left: Compelling Copy */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left space-y-6"
            >
              <div className="space-y-3">
                <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-slate-950 leading-tight">
                  Unfurl Your <br/>Own Tale
                </h2>
                <div className="h-1 w-24 bg-accent-pink rounded-full mx-auto lg:mx-0"></div>
              </div>
              
              <p className="text-slate-800 text-base md:text-xl font-bold italic leading-relaxed max-w-lg mx-auto lg:mx-0">
                "Every love story is a masterpiece waiting to be painted. Our anthology has room for one more. Shall we begin yours?"
              </p>
 
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                <Link to="/services" className="bg-accent-pink hover:bg-white border-4 border-accent-pink text-white hover:text-accent-pink px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base transition-all shadow-2xl hover:scale-105 hover:shadow-accent-pink/50 active:scale-95">
                  Open Your Book
                </Link>
                <Link to="/services" className="bg-transparent hover:bg-accent-pink/10 border-4 border-accent-pink text-slate-800 px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base transition-all">
                  View Anthology
                </Link>
              </div>
            </motion.div>

            {/* Right: Gorgeous Image Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group flex justify-center lg:justify-end perspective-1000"
            >
              <div className="relative">
                {/* Vertical Threads - Suspended look */}
                <div className="absolute -top-24 left-[20%] w-px h-24 bg-slate-300 hidden lg:block z-0">
                  <div className="absolute top-0 -left-1 w-2 h-2 bg-slate-400 rounded-full"></div>
                </div>
                <div className="absolute -top-24 right-[20%] w-px h-24 bg-slate-300 hidden lg:block z-0">
                  <div className="absolute top-0 -left-1 w-2 h-2 bg-slate-400 rounded-full"></div>
                </div>

                <TiltCard className="relative z-10 max-w-[280px] md:max-w-xs">
                  <motion.div 
                    initial={{ rotate: 2 }}
                    animate={isMobile ? { rotate: 0, y: 0 } : { 
                      rotate: [2, -1, 2],
                      y: [3, -3, 3]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: isMobile ? 15 : 10, 
                      ease: "easeInOut" 
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="bg-white p-3 md:p-4 book-shape-1 shadow-2xl border-2 border-white/50 preserve-3d"
                  >
                    <div className="aspect-[4/5] overflow-hidden book-shape-1 border-4 md:border-6 border-white shadow-inner relative">
                      <img 
                        src={port7} 
                        alt="Final Masterpiece" 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                        referrerPolicy="no-referrer" 
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                        <span className="text-white font-script text-3xl md:text-4xl drop-shadow-lg">The Final Chapter</span>
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-mint opacity-20 rounded-full blur-3xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-lavender opacity-20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>

        {/* 7. Refined Footer */}
        <Footer />
      </section>
      </div>
    );
  }

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

