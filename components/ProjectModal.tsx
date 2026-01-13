import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Menu } from 'lucide-react';
import { Project, SectionKey } from '../types';
import { useTheme } from './ThemeContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState<SectionKey>('overview');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Reset state when project changes
  useEffect(() => {
    if (project) {
      setActiveSection('overview');
    }
  }, [project]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  const activeContent = project?.sections.find(s => s.key === activeSection);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 overflow-hidden"
        >
          {/* Backdrop with Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 backdrop-blur-md ${
                theme === 'dark' ? 'bg-black/80' : 'bg-white/30'
            }`}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            layoutId={`project-${project.id}`}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`relative w-full h-full md:h-[90vh] md:max-w-6xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl border ${
              theme === 'dark' 
                ? 'bg-[#0f0f13] border-white/10 shadow-black/50' 
                : 'bg-white border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)]'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 z-50 p-2 rounded-full transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-black/50 hover:bg-neon-blue/20 text-white hover:text-neon-blue' 
                  : 'bg-white/80 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 shadow-sm border border-gray-100'
              }`}
            >
              <X size={20} />
            </button>

            {/* Sidebar (Desktop: Left Col, Mobile: Top Bar) */}
            <div className={`
              w-full md:w-80 flex-shrink-0 flex flex-col border-b md:border-b-0 md:border-r z-40 transition-colors duration-300
              ${theme === 'dark' ? 'bg-[#12121a] border-white/5' : 'bg-slate-50/80 backdrop-blur-xl border-gray-100'}
            `}>
              {/* Sidebar Header */}
              <div className="p-6 md:p-8">
                <div className="w-16 h-16 md:w-full md:h-48 rounded-2xl overflow-hidden mb-6 hidden md:block shadow-lg">
                  <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold leading-tight">{project.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className={`text-[10px] uppercase font-bold px-3 py-1 rounded-full border ${
                      theme === 'dark' 
                        ? 'border-neon-blue/30 text-neon-blue bg-neon-blue/5' 
                        : 'border-indigo-200 text-indigo-600 bg-indigo-50'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile Navigation Toggle */}
              <div className="md:hidden px-6 pb-4">
                 <button 
                  onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border ${
                    theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'
                  }`}
                 >
                   <span className="font-semibold">{activeContent?.label}</span>
                   <Menu size={16} />
                 </button>
              </div>

              {/* Nav List */}
              <nav className={`
                flex-1 overflow-y-auto px-4 pb-4 space-y-1
                ${isMobileNavOpen ? 'block absolute top-[180px] left-0 right-0 bg-[#12121a] p-4 shadow-xl z-50 border-b border-white/10' : 'hidden'} md:block md:static md:shadow-none md:bg-transparent md:border-none
              `}>
                <div className={`text-xs font-bold uppercase tracking-wider opacity-50 mb-3 px-4 mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-400'}`}>Navigation</div>
                {project.sections.map((section) => (
                  <button
                    key={section.key}
                    onClick={() => {
                      setActiveSection(section.key);
                      setIsMobileNavOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                      activeSection === section.key
                        ? theme === 'dark' 
                          ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/20' 
                          : 'bg-white text-indigo-600 border border-gray-100 shadow-md shadow-indigo-100/50'
                        : theme === 'dark'
                          ? 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                          : 'text-slate-500 hover:text-indigo-600 hover:bg-white/60 border border-transparent'
                    }`}
                  >
                    <span>{section.label}</span>
                    {activeSection === section.key && <ChevronRight size={14} className="animate-pulse" />}
                  </button>
                ))}
              </nav>
            </div>

            {/* Right Content Area */}
            <div className={`flex-1 overflow-y-auto relative ${theme === 'dark' ? 'bg-dark-bg' : 'bg-white'}`}>
              
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                   style={{ 
                     backgroundImage: `radial-gradient(${theme === 'dark' ? '#ffffff' : '#000000'} 1px, transparent 1px)`, 
                     backgroundSize: '32px 32px' 
                   }} 
              />

              <div className="relative p-6 md:p-12 max-w-4xl mx-auto min-h-full">
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header for content */}
                    <div className={`mb-8 pb-4 border-b ${theme === 'dark' ? 'border-white/5' : 'border-gray-100'}`}>
                      <h3 className={`text-3xl font-extrabold tracking-tight ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>
                        {activeContent?.label}
                      </h3>
                    </div>

                    {/* Content Body */}
                    <div className={`prose max-w-none leading-relaxed ${
                      theme === 'dark' 
                      ? 'prose-invert prose-p:text-gray-300 prose-headings:text-white prose-strong:text-neon-blue' 
                      : 'prose-slate prose-p:text-slate-600 prose-headings:text-slate-900 prose-strong:text-indigo-600'
                    }`}>
                      {activeContent?.content}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
