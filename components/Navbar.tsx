import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { NAV_ITEMS } from '../constants';
import { ViewState } from '../types';
import { Sun, Moon, Menu, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b h-20 flex items-center ${
        theme === 'dark' 
          ? 'bg-dark-bg/80 border-white/5 text-white shadow-lg shadow-black/20 backdrop-blur-xl' 
          : 'bg-white/70 border-slate-200/60 text-slate-800 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-white/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('home')}>
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

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onNavigate(item.view)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    currentView === item.view
                      ? theme === 'dark' 
                        ? 'text-black bg-neon-blue shadow-[0_0_15px_rgba(0,243,255,0.4)]' 
                        : 'text-white bg-slate-900 shadow-lg shadow-slate-900/20'
                      : theme === 'dark'
                        ? 'text-gray-400 hover:text-white hover:bg-white/5'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Theme Toggle Button */}
              <div className={`h-8 w-[1px] mx-4 ${theme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}`}></div>

              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-full transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-white/5 hover:bg-white/10 text-yellow-400' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === 'dark' ? 'bg-white/10' : 'bg-slate-100'
              }`}
            >
               {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`absolute top-20 left-0 right-0 md:hidden overflow-hidden ${
                theme === 'dark' ? 'bg-dark-card/95 border-b border-white/5' : 'bg-white/95 border-b border-slate-200 shadow-xl'
            } backdrop-blur-xl`}
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigate(item.view);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all ${
                    currentView === item.view
                      ? theme === 'dark'
                        ? 'text-black bg-neon-blue'
                        : 'text-white bg-indigo-600'
                      : theme === 'dark'
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;