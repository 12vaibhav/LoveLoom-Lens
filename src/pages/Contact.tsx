import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Send, 
  Calendar, 
  User, 
  Camera,
  Facebook,
  Instagram,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import logoImg from '../assets/logo/logo.jpg';
import { IMAGES, WhatsappIcon } from '../constants';
import weddingImg from '../assets/services/wedding photo.webp';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'wedding',
    date: '',
    message: ''
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
  };

  const shareOnWhatsapp = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Contact LoveLoom Lens for your next photography session!");
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
          <a href="/" className="flex items-center gap-2 text-2xl md:text-3xl font-script font-bold text-slate-950">
            <img src={logoImg} alt="LoveLoom Lens Logo" className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full" />
            LoveLoom Lens
          </a>
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link to="/" className="text-slate-800 font-bold hover:text-accent-pink transition-colors">Home</Link>
            <Link to="/about" className="text-slate-800 font-bold hover:text-accent-pink transition-colors">About</Link>
            <Link to="/services" className="text-slate-800 font-bold hover:text-accent-pink transition-colors">Package</Link>
            <Link to="/portfolio" className="text-slate-800 font-bold hover:text-accent-pink transition-colors">Portfolio</Link>
            <Link to="/contact" className="text-accent-pink font-bold transition-colors">Contact</Link>
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
                <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-slate-800 font-bold hover:bg-lavender/20 rounded-xl transition-colors">Portfolio</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-3 text-accent-pink font-bold hover:bg-lavender/20 rounded-xl transition-colors">Contact</Link>
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
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 overflow-hidden watercolor-bg">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-script text-5xl sm:text-6xl md:text-9xl text-slate-950 mb-6 md:mb-8 drop-shadow-sm">
              Let's Capture Your Story
            </h1>
            <div className="inline-block bg-white/40 backdrop-blur-md border border-white/50 px-6 py-3 md:px-10 md:py-4 rounded-full shadow-sm">
              <p className="text-slate-800 font-bold italic text-base sm:text-lg md:text-2xl tracking-wide">
                Begin Your Journey Into The Ethereal
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

      {/* 3. Contact & Booking Form */}
      <section className="py-16 md:py-20 px-4 sm:px-6 unifying-bg">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-start">
            
            {/* Form Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white/60 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-[32px] md:rounded-[40px] border-4 border-white shadow-2xl space-y-6 md:space-y-8"
            >
              <div className="space-y-2">
                <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-slate-950">Reserve Your Date</h2>
                <p className="text-slate-600 font-bold italic text-sm sm:text-base">Tell us about the magic you want to capture.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4 flex items-center gap-2">
                      <User size={14} /> Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your beautiful name"
                      className="w-full bg-white/50 border-2 border-lavender/30 rounded-full px-6 py-4 focus:outline-none focus:border-accent-pink transition-all font-medium text-slate-800"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4 flex items-center gap-2">
                      <Mail size={14} /> Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="hello@example.com"
                      className="w-full bg-white/50 border-2 border-lavender/30 rounded-full px-6 py-4 focus:outline-none focus:border-accent-pink transition-all font-medium text-slate-800"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4 flex items-center gap-2">
                      <Phone size={14} /> Phone Number
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/50 border-2 border-lavender/30 rounded-full px-6 py-4 focus:outline-none focus:border-accent-pink transition-all font-medium text-slate-800"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4 flex items-center gap-2">
                      <Calendar size={14} /> Preferred Date
                    </label>
                    <input 
                      type="date" 
                      required
                      className="w-full bg-white/50 border-2 border-lavender/30 rounded-full px-6 py-4 focus:outline-none focus:border-accent-pink transition-all font-medium text-slate-800"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4 flex items-center gap-2">
                    <Camera size={14} /> Service Type
                  </label>
                  <select 
                    className="w-full bg-white/50 border-2 border-lavender/30 rounded-full px-6 py-4 focus:outline-none focus:border-accent-pink transition-all font-medium text-slate-800 appearance-none"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                  >
                    <option value="wedding">Wedding Photography</option>
                    <option value="pre-wedding">Pre-Wedding Shoot</option>
                    <option value="newborn">Newborn Baby</option>
                    <option value="candid">Candid & Modeling</option>
                    <option value="product">Product Photography</option>
                    <option value="printing">Photo Printing</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4 flex items-center gap-2">
                    <MessageSquare size={14} /> Your Vision
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your dream shoot..."
                    className="w-full bg-white/50 border-2 border-lavender/30 rounded-[30px] px-6 py-4 focus:outline-none focus:border-accent-pink transition-all font-medium text-slate-800 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-accent-pink text-white py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-accent-pink/40 hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  Send Inquiry <Send size={20} />
                </button>
              </form>
            </motion.div>

            {/* Info Side */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/40 backdrop-blur-md p-6 sm:p-8 rounded-[32px] md:rounded-[40px] border-2 border-white shadow-lg space-y-4 md:space-y-6"
              >
                <h3 className="font-script text-2xl sm:text-3xl text-slate-950">Why Choose Us?</h3>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    "Bespoke storytelling tailored to you",
                    "Luxury archival quality prints",
                    "Dreamy, ethereal editing style",
                    "Professional yet warm experience"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 font-bold italic text-sm sm:text-base">
                      <ChevronRight size={18} className="text-accent-pink mt-0.5 md:mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative rounded-[32px] md:rounded-[40px] overflow-hidden border-4 border-white shadow-xl aspect-square"
              >
                <img 
                  src={weddingImg} 
                  alt="Wedding Couple" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <p className="text-white font-script text-2xl sm:text-3xl">"Every glance is a sentence in your story."</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Quick Contact Options */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-slate-950 mb-4">Quick Connections</h2>
            <p className="text-slate-600 font-bold italic max-w-xl mx-auto text-sm sm:text-base">Prefer a faster way? Reach out directly through these channels.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                icon: Phone, 
                label: "Call Us", 
                value: "+1 (555) 123-4567", 
                href: "tel:+15551234567", 
                color: "bg-sky/20 text-blue-600",
                border: "border-sky/30"
              },
              { 
                icon: WhatsappIcon, 
                label: "WhatsApp", 
                value: "Chat with an Artist", 
                href: "https://wa.me/15551234567", 
                color: "bg-mint/20 text-emerald-600",
                border: "border-mint/30"
              },
              { 
                icon: Mail, 
                label: "Email Us", 
                value: "hello@loveloomlens.com", 
                href: "mailto:hello@loveloomlens.com", 
                color: "bg-rose/20 text-pink-600",
                border: "border-rose/30"
              }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.label === "WhatsApp" ? "_blank" : undefined}
                rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group p-6 sm:p-8 rounded-[32px] md:rounded-[40px] border-2 ${item.border} bg-white hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center space-y-4`}
              >
                <div className={`p-4 sm:p-5 rounded-full ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon size={28} className="sm:w-8 sm:h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">{item.label}</h4>
                  <p className="text-lg sm:text-xl font-bold text-slate-950">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Studio Location */}
      <section className="py-16 md:py-20 px-4 sm:px-6 unifying-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-4">
                <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-slate-950">Visit Our Studio</h2>
                <p className="text-slate-700 text-lg sm:text-xl font-bold italic max-w-md">
                  A sanctuary where light meets legacy. Come share your vision over a cup of tea.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm text-accent-pink shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-950 uppercase tracking-widest text-xs mb-1">Our Address</h5>
                    <p className="text-slate-600 font-medium text-sm sm:text-base">123 LoveLoom Way, Arts District<br />Creative City, ST 56789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm text-accent-pink shrink-0">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-950 uppercase tracking-widest text-xs mb-1">Studio Hours</h5>
                    <p className="text-slate-600 font-medium text-sm sm:text-base">Mon - Sat: 10:00 AM - 7:00 PM<br />Sunday: By Appointment Only</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[32px] md:rounded-[60px] overflow-hidden border-4 md:border-8 border-white shadow-2xl h-[300px] sm:h-[400px] md:h-[500px] bg-slate-200 order-1 lg:order-2"
            >
              {/* Embedded Map Placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.142293761933!2d-73.98731968459377!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480293%3A0x511747070259ad4b!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1625123456789!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Studio Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

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
              <Link to="/portfolio" className="w-full sm:w-auto bg-accent-pink text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                View Anthology
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

    </div>
  );
};

export default Contact;
