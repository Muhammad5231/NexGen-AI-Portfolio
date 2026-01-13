import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronRight, Menu } from 'lucide-react';
import { Project, SectionKey } from '../types';
import { useTheme } from './ThemeContext';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState<SectionKey>('overview');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeContent = project.sections.find(s => s.key === activeSection);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className={`min-h-screen pt-16 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 h-[calc(100vh-80px)]">
         <button
            onClick={onBack}
            className={`mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors ${
                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
            }`}
          >
            <ArrowLeft size={16} /> Back to Projects
          </button>

        <div className={`w-full h-full rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl border ${
          theme === 'dark' ? 'bg-[#12121a] border-white/5' : 'bg-gray-50 border-gray-200'
        }`}>
          
          {/* Sidebar */}
          <div className={`
            w-full md:w-80 flex-shrink-0 flex flex-col border-b md:border-b-0 md:border-r z-20
            ${theme === 'dark' ? 'bg-[#12121a] border-white/5' : 'bg-white border-gray-200'}
          `}>
            {/* Header */}
            <div className="p-6">
               <div className="w-full h-48 rounded-lg overflow-hidden mb-6 shadow-lg">
                  <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
               </div>
              <h1 className="text-2xl font-bold leading-tight">{project.title}</h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className={`text-[10px] uppercase font-bold px-2 py-1 rounded-full border ${
                    theme === 'dark' ? 'border-neon-blue/30 text-neon-blue bg-neon-blue/5' : 'border-blue-400/30 text-blue-600 bg-blue-50'
                  }`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden px-6 pb-4">
                 <button 
                  onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border ${
                    theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
                  }`}
                 >
                   <span className="font-semibold">{activeContent?.label}</span>
                   <Menu size={16} />
                 </button>
            </div>

            {/* Nav Items */}
            <nav className={`
               flex-1 overflow-y-auto px-4 pb-6 space-y-1
               ${isMobileNavOpen ? 'block' : 'hidden'} md:block
            `}>
              <div className="text-xs font-semibold uppercase tracking-wider opacity-50 mb-3 px-2 mt-2">Modules</div>
              {project.sections.map((section) => (
                <button
                  key={section.key}
                  onClick={() => {
                    setActiveSection(section.key);
                    setIsMobileNavOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    activeSection === section.key
                      ? theme === 'dark' 
                        ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/20' 
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                      : theme === 'dark'
                        ? 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100 border border-transparent'
                  }`}
                >
                  <span>{section.label}</span>
                  {activeSection === section.key && <ChevronRight size={14} className="animate-pulse" />}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className={`flex-1 overflow-y-auto relative ${theme === 'dark' ? 'bg-dark-bg' : 'bg-white'}`}>
             {/* Decorative BG */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                   style={{ 
                     backgroundImage: `radial-gradient(${theme === 'dark' ? '#ffffff' : '#000000'} 1px, transparent 1px)`, 
                     backgroundSize: '24px 24px' 
                   }} 
              />
              
              <div className="relative p-8 md:p-12 max-w-4xl mx-auto">
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-8 pb-4 border-b border-gray-100 dark:border-white/5">
                      <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {activeContent?.label}
                      </h2>
                    </div>
                    <div className={`prose max-w-none ${theme === 'dark' ? 'prose-invert prose-p:text-gray-300' : 'prose-p:text-gray-600'}`}>
                      {activeContent?.content}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
