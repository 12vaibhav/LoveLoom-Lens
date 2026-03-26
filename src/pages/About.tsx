import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Camera, 
  Sparkles, 
  Quote, 
  Facebook, 
  Instagram, 
  ChevronRight,
  ArrowRight,
  Users,
  Target,
  Eye,
  History,
  Menu,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { IMAGES, WhatsappIcon, TESTIMONIALS } from '../constants';

import weddingImg from '../assets/services/wedding photo.webp';
import preWeddingImg from '../assets/services/Pre-wedding-photo.webp';
import babyImg from '../assets/services/baby-photo.webp';
import modelingImg from '../assets/services/modeling-photo.webp';
import productImg from '../assets/services/product-photo.webp';
import port1 from '../assets/portfolio/portfolio-1.webp';
import port2 from '../assets/portfolio/portfolio-2.webp';
import port3 from '../assets/portfolio/portfolio-3.webp';

const About = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
  };

  const shareOnWhatsapp = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Discover the story behind LoveLoom Lens!");
    window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
  };

  const shareOnInstagram = () => {
    window.open(`https://www.instagram.com/`, '_blank');
  };

  const values = [
    {
      icon: Heart,
      title: "Authentic Connection",
      desc: "We believe the best photos come from a place of genuine trust and friendship.",
      color: "bg-rose/20 text-pink-600"
    },
    {
      icon: Eye,
      title: "Artistic Vision",
      desc: "Seeing the extraordinary in the ordinary, capturing light as it whispers through time.",
      color: "bg-sky/20 text-blue-600"
    },
    {
      icon: Target,
      title: "Uncompromising Quality",
      desc: "From the first click to the final print, we pursue excellence in every detail.",
      color: "bg-mint/20 text-emerald-600"
    }
  ];

  const team = [
    {
      name: "Elena Vance",
      role: "Lead Photographer & Founder",
      bio: "With over a decade of experience, Elena captures the soul of every moment.",
      img: port1
    },
    {
      name: "Marcus Thorne",
      role: "Creative Director",
      bio: "Marcus ensures every anthology tells a cohesive and breathtaking story.",
      img: port2
    },
    {
      name: "Sarah Jenkins",
      role: "Post-Production Artist",
      bio: "Sarah's touch brings the ethereal glow to every single frame.",
      img: port3
    }
  ];

  return (
    <div className="min-h-screen selection:bg-accent-pink/30 overflow-x-hidden bg-[#FFFCF8]">
      
      {/* 1. Pill Shaped glassmorphism Navbar */}
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
            <Link to="/about" className="text-accent-pink font-bold transition-colors">About</Link>
            <Link to="/services" className="text-slate-800 font-bold hover:text-accent-pink transition-colors">Package</Link>
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
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-accent-pink font-bold hover:bg-lavender/20 rounded-xl transition-colors">About</Link>
                <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-800 font-bold hover:bg-lavender/20 rounded-xl transition-colors">Package</Link>
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
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center pt-28 pb-12 md:pt-32 md:pb-20 overflow-hidden watercolor-bg">
        <div className="max-w-7xl mx-auto text-center relative z-10 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-script text-5xl sm:text-6xl md:text-9xl text-slate-950 mb-6 md:mb-8 drop-shadow-sm">
              Our Story
            </h1>
            <div className="inline-block bg-white/40 backdrop-blur-md border border-white/50 px-6 py-3 md:px-10 md:py-4 rounded-full shadow-sm">
              <p className="text-slate-800 font-bold italic text-base sm:text-lg md:text-2xl tracking-wide">
                Where Light Meets Legacy
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

      {/* 3. About the Photographer / Studio story */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative z-10 rounded-[40px] md:rounded-[60px] overflow-hidden border-4 md:border-8 border-white shadow-2xl aspect-[4/5] max-w-sm mx-auto lg:max-w-none">
                <img 
                  src={port1} 
                  alt="Elena Vance - Founder" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-48 h-48 md:w-64 md:h-64 bg-peach/20 rounded-full blur-2xl md:blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-48 h-48 md:w-64 md:h-64 bg-lavender/20 rounded-full blur-2xl md:blur-3xl -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left"
            >
              <div className="space-y-4">
                <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-slate-950">The Visionary Behind the Lens</h2>
                <p className="text-slate-600 font-bold italic text-lg sm:text-xl">"I don't just take photos; I curate the whispers of your soul."</p>
              </div>
              
              <div className="space-y-4 md:space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Founded by Elena Vance in 2015, LoveLoom Lens was born from a desire to move away from traditional, posed photography and towards a more organic, storytelling approach. Elena's background in fine arts and classical painting heavily influences the studio's signature "ethereal" style—characterized by soft light, watercolor hues, and a focus on raw emotion.
                </p>
                <p>
                  What started as a solo journey has grown into a boutique collective of artists who share a singular passion: preserving the most sacred moments of human connection. Whether it's the quiet anticipation before a wedding or the delicate first breaths of a newborn, we treat every session as a unique anthology.
                </p>
              </div>

              <div className="pt-2 md:pt-4">
                <Link to="/portfolio" className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-accent-pink text-white px-8 py-4 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-xl hover:shadow-accent-pink/40 hover:-translate-y-1">
                  Explore Our Work <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Our Philosophy & Values (glass cards) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 unifying-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-slate-950">Our Philosophy</h2>
            <p className="text-slate-600 font-bold italic max-w-2xl mx-auto text-sm sm:text-base">The principles that guide every frame we capture and every story we tell.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/60 backdrop-blur-xl p-8 md:p-10 rounded-[32px] md:rounded-[40px] border-4 border-white shadow-xl hover:shadow-2xl transition-all group"
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${value.color} flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform`}>
                  <value.icon size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-950 mb-3 md:mb-4">{value.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Meet Our Team or Journey timeline */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-slate-950">The Collective</h2>
            <p className="text-slate-600 font-bold italic max-w-2xl mx-auto text-sm sm:text-base">Meet the artists who bring your ethereal vision to life.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group max-w-sm mx-auto w-full"
              >
                <div className="relative rounded-[40px] md:rounded-[50px] overflow-hidden border-4 border-white shadow-xl aspect-[4/5] mb-4 md:mb-6">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                    <p className="text-white text-xs sm:text-sm font-medium italic">{member.bio}</p>
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <h4 className="text-xl md:text-2xl font-bold text-slate-950">{member.name}</h4>
                  <p className="text-accent-pink font-bold uppercase tracking-widest text-[10px] md:text-xs">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Journey Timeline */}
          <div className="mt-20 md:mt-32 pt-16 md:pt-20 border-t border-slate-100">
            <div className="text-center mb-10 md:mb-16">
              <h3 className="font-script text-4xl md:text-5xl text-slate-950">Our Journey</h3>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-lavender/30 -translate-x-1/2 hidden md:block"></div>
              
              {[
                { year: "2015", event: "LoveLoom Lens is founded in a small home studio." },
                { year: "2017", event: "First international wedding shoot in the hills of Tuscany." },
                { year: "2019", event: "Opened our flagship studio in the Arts District." },
                { year: "2023", event: "Named 'Artist of the Year' by Global Photography Guild." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 lg:mb-20 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="hidden md:block w-5/12"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-accent-pink rounded-full z-10 hidden md:flex items-center justify-center shadow-lg">
                    <History size={20} className="text-accent-pink" />
                  </div>
                  <div className="w-full md:w-5/12 bg-white/40 backdrop-blur-md p-6 md:p-8 rounded-[24px] md:rounded-[30px] border-2 border-white shadow-md hover:shadow-lg transition-all text-center md:text-left">
                    <span className="text-accent-pink font-bold text-xl md:text-2xl mb-2 block">{item.year}</span>
                    <p className="text-slate-700 font-medium text-sm md:text-base">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Client Love / Selected Testimonials */}
      <section className="py-16 md:py-24 px-4 sm:px-6 unifying-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-16 space-y-4">
            <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-slate-950">Client Love</h2>
            <p className="text-slate-600 font-bold italic max-w-2xl mx-auto text-sm sm:text-base">Kind words from the beautiful souls we've had the honor to capture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-[32px] md:rounded-[40px] border-2 border-white shadow-lg space-y-6 relative"
              >
                <Quote size={32} className="text-accent-pink/20 absolute top-6 right-6 md:top-8 md:right-8 md:w-10 md:h-10" />
                <p className="text-slate-700 italic font-medium leading-relaxed relative z-10 text-sm md:text-base">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 pt-2 md:pt-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-accent-pink"
                  />
                  <span className="font-bold text-slate-950 text-sm md:text-base">{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-xl p-8 sm:p-12 md:p-20 rounded-[40px] md:rounded-[60px] border-4 border-white shadow-2xl space-y-6 md:space-y-8"
          >
            <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-slate-950">
              Ready to Create Memories With Us?
            </h2>
            <p className="text-slate-700 text-base sm:text-xl md:text-2xl font-bold italic max-w-2xl mx-auto">
              Your story is a masterpiece waiting to be told. Let's begin the first chapter together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4 md:pt-6">
              <Link to="/contact" className="w-full sm:w-auto bg-accent-pink text-white px-8 py-4 md:px-12 md:py-5 rounded-full font-bold text-base md:text-lg transition-all shadow-xl hover:shadow-accent-pink/40 hover:-translate-y-1 flex items-center justify-center gap-3">
                Begin Your Anthology <ArrowRight size={20} />
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto bg-white text-slate-950 border-4 border-accent-pink px-8 py-4 md:px-12 md:py-5 rounded-full font-bold text-base md:text-lg transition-all hover:bg-accent-pink/10">
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] sm:text-[15rem] md:text-[20rem] font-script text-slate-900/5 select-none pointer-events-none -rotate-6 whitespace-nowrap">
          LoveLoom Lens
        </div>
      </section>

      {/* 8. Footer */}
      <Footer />

    </div>
  );
};

export default About;
