import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Layout } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const { theme } = useTheme();

  return (
    <section className={`min-h-screen pt-24 pb-12 relative ${theme === 'dark' ? '' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className={`inline-block py-1 px-3 rounded-full text-xs font-semibold tracking-wide mb-4 ${
             theme === 'dark' ? 'bg-white/10 text-white' : 'bg-indigo-100 text-indigo-700'
          }`}>
            PORTFOLIO V2.0
          </span>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Featured <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme === 'dark' ? 'from-neon-green to-neon-blue' : 'from-indigo-600 to-purple-600'}`}>Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative rounded-3xl overflow-hidden flex flex-col h-full border transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-[#12121a] border-white/5 hover:border-neon-blue/50 hover:shadow-[0_0_30px_-5px_rgba(0,243,255,0.3)]' 
                  : 'bg-white border-slate-100 hover:border-indigo-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10'
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 opacity-60 ${theme === 'dark' ? 'bg-gradient-to-t from-black/80 to-transparent' : 'bg-gradient-to-t from-slate-900/60 to-transparent'}`} />
                
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-hidden">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded bg-white/20 backdrop-blur-md text-white border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className={`text-2xl font-bold mb-2 transition-colors ${
                    theme === 'dark' 
                    ? 'text-white group-hover:text-neon-blue' 
                    : 'text-slate-900 group-hover:text-indigo-600'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-6 flex-1 line-clamp-3 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                  {project.shortDescription}
                </p>

                <button
                  onClick={() => onSelectProject(project)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all ${
                    theme === 'dark'
                      ? 'bg-white text-black hover:bg-neon-blue hover:text-black shadow-lg hover:shadow-neon-blue/50'
                      : 'bg-slate-900 text-white hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30'
                  }`}
                >
                  <Layout size={16} />
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;