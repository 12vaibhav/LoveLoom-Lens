import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { WhatsappIcon } from '../constants';

const Footer = () => {
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

  return (
    <footer className="py-16 px-6 border-t border-slate-200 bg-[#FFFCF8] watercolor-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="space-y-6 text-center md:text-left">
            <div className="text-4xl font-script font-bold text-slate-950">
              LoveLoom Lens
            </div>
            <p className="text-slate-600 font-bold italic max-w-xs text-lg">
              Capturing the whispers of time and the colors of emotion.
            </p>
            <div className="flex gap-6 justify-center md:justify-start">
              <button 
                onClick={shareOnFacebook} 
                className="p-3 text-blue-600 bg-white rounded-full shadow-sm hover:shadow-md transition-all"
                title="Share on Facebook"
              >
                <Facebook size={20} />
              </button>
              <button 
                onClick={shareOnWhatsapp} 
                className="p-3 text-emerald-600 bg-white rounded-full shadow-sm hover:shadow-md transition-all"
                title="Share on WhatsApp"
              >
                <WhatsappIcon size={20} />
              </button>
              <button 
                onClick={shareOnInstagram} 
                className="p-3 text-pink-600 bg-white rounded-full shadow-sm hover:shadow-md transition-all"
                title="Share on Instagram"
              >
                <Instagram size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 text-center md:text-left">
            <div className="space-y-4">
              <h5 className="font-bold text-slate-950 uppercase tracking-widest text-xs">Explore</h5>
              <ul className="space-y-2">
                <li><Link to="/" className="text-slate-600 hover:text-accent-pink transition-colors font-medium">Home</Link></li>
                <li><Link to="/about" className="text-slate-600 hover:text-accent-pink transition-colors font-medium">About</Link></li>
                <li><Link to="/services" className="text-slate-600 hover:text-accent-pink transition-colors font-medium">Services</Link></li>
                <li><Link to="/portfolio" className="text-slate-600 hover:text-accent-pink transition-colors font-medium">Portfolio</Link></li>
                <li><Link to="/contact" className="text-slate-600 hover:text-accent-pink transition-colors font-medium">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-slate-950 uppercase tracking-widest text-xs">Legal</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-600 hover:text-accent-pink transition-colors font-medium">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-600 hover:text-accent-pink transition-colors font-medium">Terms of Service</a></li>
                <li><a href="#" className="text-slate-600 hover:text-accent-pink transition-colors font-medium">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs font-bold tracking-widest uppercase">
          © {new Date().getFullYear()} LoveLoom Lens. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
