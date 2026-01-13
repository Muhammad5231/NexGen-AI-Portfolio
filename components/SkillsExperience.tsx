import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { SKILLS, EXPERIENCE } from '../constants';
import { Code, Briefcase } from 'lucide-react';

const SkillsExperience: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen pt-20 pb-20 ${theme === 'dark' ? 'bg-transparent' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Skills & <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme === 'dark' ? 'from-neon-blue to-neon-purple' : 'from-blue-600 to-purple-600'}`}>Experience</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
            A comprehensive overview of my technical abilities and professional journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          {/* Skills Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-neon-blue/10' : 'bg-blue-100'}`}>
                <Code className={theme === 'dark' ? 'text-neon-blue' : 'text-blue-600'} size={24} />
              </div>
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Technical Arsenal</h3>
            </div>

            <div className="space-y-6">
              {SKILLS.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`flex justify-between mb-2 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>
                    <span>{skill.name}</span>
                    <span className="opacity-60">{skill.level}%</span>
                  </div>
                  <div className={`h-2 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-slate-200'}`}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                      className={`h-full rounded-full ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-r from-neon-blue to-neon-purple' 
                          : 'bg-gradient-to-r from-blue-500 to-purple-600'
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-neon-purple/10' : 'bg-purple-100'}`}>
                <Briefcase className={theme === 'dark' ? 'text-neon-purple' : 'text-purple-600'} size={24} />
              </div>
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Journey So Far</h3>
            </div>

            <div className={`relative border-l-2 ml-3 space-y-10 ${theme === 'dark' ? 'border-gray-800' : 'border-slate-200'}`}>
              {EXPERIENCE.map((exp, index) => (
                <div key={exp.id} className="relative pl-8">
                  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${
                    theme === 'dark' 
                      ? 'bg-dark-bg border-neon-purple' 
                      : 'bg-slate-50 border-purple-500'
                  }`} />
                  
                  <div className={`p-6 rounded-xl transition-all hover:-translate-y-1 duration-300 ${
                    theme === 'dark'
                      ? 'bg-dark-card border border-white/5 hover:border-neon-purple/30 text-white'
                      : 'bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-purple-100'
                  }`}>
                    <span className={`text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-neon-purple' : 'text-purple-600'}`}>
                      {exp.period}
                    </span>
                    <h4 className={`text-xl font-bold mt-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h4>
                    <p className={`font-medium opacity-80 mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-700'}`}>{exp.company}</p>
                    <p className={`text-sm opacity-60 leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsExperience;