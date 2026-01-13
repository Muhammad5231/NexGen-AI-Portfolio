import React from 'react';
import { useTheme } from './ThemeContext';
import { Github, Linkedin, Twitter, Heart, ArrowUp, Mail, MapPin, Cpu } from 'lucide-react';
import { ViewState } from '../types';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative mt-20 border-t transition-colors duration-300 ${
        theme === 'dark' 
        ? 'bg-[#050508] border-white/5 text-gray-400' 
        : 'bg-white border-gray-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Column 1: Brand */}
            <div className="space-y-4">
                {/* Logo matches Navbar exactly */}
                <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('home')}>
                    <div className={`p-2 rounded-xl transition-colors ${
                        theme === 'dark' ? 'bg-white/5 group-hover:bg-white/10' : 'bg-indigo-600 text-white group-hover:bg-indigo-700'
                    }`}>
                        <Cpu className={`w-8 h-8 ${theme === 'dark' ? 'text-neon-blue' : 'text-white'}`} />
                    </div>
                    <div className="flex flex-col">
                        <span className={`font-bold text-xl tracking-wider leading-none ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>MUHAMMAD</span>
                        <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>Portfolio v2.0</span>
                    </div>
                </div>

                <p className="text-sm leading-relaxed opacity-80 pt-2">
                    Crafting digital experiences that blend artistic vision with engineering excellence. Open for new opportunities.
                </p>
                <div className="flex gap-4 pt-2">
                    {[Github, Linkedin, Twitter].map((Icon, i) => (
                        <a key={i} href="#" className={`p-2 rounded-full transition-all ${
                            theme === 'dark' ? 'bg-white/5 hover:bg-neon-blue hover:text-black' : 'bg-slate-100 hover:bg-indigo-600 hover:text-white'
                        }`}>
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Navigation
                </h3>
                <ul className="space-y-3 text-sm">
                    {['Home', 'About', 'Projects', 'Skills', 'Blog'].map((item) => (
                        <li key={item}>
                            <button 
                                onClick={() => onNavigate(item.toLowerCase() as ViewState)}
                                className="hover:underline hover:text-neon-blue transition-colors"
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Contact
                </h3>
                <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                        <Mail size={18} className={theme === 'dark' ? 'text-neon-blue' : 'text-indigo-600'} />
                        <span>contact@muhammad.dev</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <MapPin size={18} className={theme === 'dark' ? 'text-neon-blue' : 'text-indigo-600'} />
                        <span>San Francisco, CA<br/>(Remote Available)</span>
                    </li>
                </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
                <h3 className={`text-sm font-bold uppercase tracking-wider mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Stay Updated
                </h3>
                <p className="text-sm mb-4 opacity-80">Get the latest on frontend tech and design trends.</p>
                <form className="flex gap-2">
                    <input 
                        type="email" 
                        placeholder="Email address"
                        className={`w-full px-3 py-2 rounded-lg text-sm outline-none border transition-all ${
                            theme === 'dark' 
                            ? 'bg-white/5 border-white/10 focus:border-neon-blue text-white' 
                            : 'bg-slate-50 border-slate-200 focus:border-indigo-500'
                        }`}
                    />
                    <button className={`p-2 rounded-lg ${
                        theme === 'dark' ? 'bg-neon-blue text-black hover:bg-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}>
                        <ArrowUp className="rotate-45" size={18} />
                    </button>
                </form>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${
            theme === 'dark' ? 'border-white/5' : 'border-gray-200'
        }`}>
            <p className="text-xs opacity-60">
                © {new Date().getFullYear()} Muhammad. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-xs opacity-60">
                <span>Designed & Built with</span>
                <Heart size={12} className="text-red-500 fill-red-500" />
                <span>using React & Tailwind</span>
            </div>

            <button 
                onClick={scrollToTop}
                className={`p-3 rounded-full shadow-lg transition-all ${
                    theme === 'dark' ? 'bg-white/10 hover:bg-neon-blue hover:text-black' : 'bg-white hover:bg-indigo-50 text-indigo-600'
                }`}
            >
                <ArrowUp size={16} />
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;