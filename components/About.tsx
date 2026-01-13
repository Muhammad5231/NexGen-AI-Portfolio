import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { User, Heart, Coffee, Globe, BookOpen, Monitor, Award, Code2 } from 'lucide-react';

const PROFILE_IMAGES = [
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop", // Coding setup
    "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop", // Code screen
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"  // Team/Collaboration
];

const About: React.FC = () => {
  const { theme } = useTheme();
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setCurrentBgIndex((prev) => (prev + 1) % PROFILE_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 }
    })
  };

  return (
    <div className={`min-h-screen pt-24 pb-20 ${theme === 'dark' ? 'bg-transparent' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeIn}
          className="text-center mb-20"
        >
          <span className={`inline-block py-1 px-3 rounded-full text-xs font-semibold tracking-wide mb-4 border ${
             theme === 'dark' 
             ? 'border-neon-purple/30 text-neon-purple bg-neon-purple/10' 
             : 'border-purple-200 text-purple-700 bg-purple-50'
          }`}>
             BIO & JOURNEY
          </span>
          <h2 className={`text-4xl md:text-6xl font-extrabold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Behind the <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme === 'dark' ? 'from-neon-blue to-neon-purple' : 'from-indigo-600 to-purple-600'}`}>Code</span>
          </h2>
          <p className={`max-w-3xl mx-auto text-xl leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
            More than just a developer. A creator, a thinker, and a tech enthusiast obsessed with building the future of the web.
          </p>
        </motion.div>

        {/* Profile Split Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          
          {/* Image / Visual Area */}
          <div className="relative order-2 md:order-1 flex justify-center md:justify-end pr-8">
             {/* Dynamic Background Stack */}
             <div className="absolute w-[300px] h-[400px] md:w-[350px] md:h-[450px] rounded-3xl rotate-[-6deg] overflow-hidden z-0 shadow-xl opacity-60">
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={currentBgIndex}
                        src={PROFILE_IMAGES[currentBgIndex]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full h-full object-cover grayscale"
                        alt="Background Context"
                    />
                </AnimatePresence>
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-neon-purple/20' : 'bg-purple-500/20'}`} />
             </div>

             {/* Main "Teda" Image */}
             <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
                animate={{ opacity: 1, scale: 1, rotate: 6 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02, rotate: 0 }} // Straighten on hover
                className={`relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl z-10 transition-all duration-500 ${
                    theme === 'dark' ? 'border-2 border-white/10' : 'border-4 border-white shadow-slate-200/50'
                }`}
             >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                />

                {/* Badge */}
                <div className="absolute bottom-6 right-6 z-20">
                    <div className={`px-4 py-2 rounded-full backdrop-blur-md border shadow-lg flex items-center gap-2 ${
                        theme === 'dark' 
                        ? 'bg-black/60 border-neon-blue/40 text-white' 
                        : 'bg-white/90 border-slate-200 text-slate-900'
                    }`}>
                        <div className={`w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-neon-green' : 'bg-green-500'} animate-pulse`}></div>
                        <span className="text-xs font-bold uppercase tracking-wider">Open to Work</span>
                    </div>
                </div>
             </motion.div>
          </div>

          {/* Text Content */}
          <motion.div
             initial="hidden"
             animate="visible"
             custom={2}
             variants={fadeIn}
             className="space-y-8 order-1 md:order-2"
          >
             <div>
                <h3 className={`text-3xl font-bold mb-4 flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    <User className={theme === 'dark' ? 'text-neon-blue' : 'text-indigo-600'} /> 
                    Who I Am
                </h3>
                <p className={`leading-loose text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    Hello! I'm Muhammad, a dedicated Frontend Engineer based in the cloud. My journey began with a simple curiosity: "How do things move on a screen?" 
                    That curiosity spiraled into a career obsession with performance, interactivity, and pixel-perfect design.
                </p>
                <p className={`leading-loose text-lg mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
                    I don't just write code; I craft experiences. I bridge the gap between design and engineering, ensuring that every interaction feels natural and intentional.
                </p>
             </div>

             <div className={`p-6 rounded-2xl ${
                 theme === 'dark' 
                 ? 'bg-white/5 border-l-4 border-neon-purple text-gray-300' 
                 : 'bg-white border border-slate-200 border-l-4 border-l-purple-600 shadow-lg shadow-slate-200/50 text-slate-700'
             }`}>
                <h3 className={`text-xl font-bold mb-2 flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    <Heart className={theme === 'dark' ? 'text-pink-500' : 'text-rose-500'} /> 
                    My Philosophy
                </h3>
                <p className="opacity-80 italic">
                    "Great software is a blend of engineering excellence and artistic vision. It should be invisible, yet unforgettable."
                </p>
             </div>
          </motion.div>
        </div>

        {/* "What I Do" Cards */}
        <motion.div 
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeIn}
            className="mb-24"
        >
             <h3 className={`text-2xl font-bold mb-10 text-center uppercase tracking-widest opacity-60 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>What I Bring to the Table</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: Monitor, title: 'Frontend Architecture', desc: 'Building scalable, component-driven UI systems using Next.js and React.' },
                    { icon: Award, title: 'UI/UX Engineering', desc: 'Translating Figma designs into pixel-perfect, accessible, and responsive code.' },
                    { icon: Code2, title: 'Performance Optimization', desc: 'Obsessing over Core Web Vitals, bundle size reduction, and render performance.' }
                ].map((card, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className={`p-8 rounded-3xl border transition-all ${
                            theme === 'dark' 
                            ? 'bg-[#12121a] border-white/5 hover:border-neon-blue/30 text-white' 
                            : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-indigo-100'
                        }`}
                    >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                            theme === 'dark' ? 'bg-white/5 text-neon-blue' : 'bg-indigo-50 text-indigo-600'
                        }`}>
                            <card.icon size={24} />
                        </div>
                        <h4 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{card.title}</h4>
                        <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>{card.desc}</p>
                    </motion.div>
                ))}
             </div>
        </motion.div>

        {/* Timeline / Journey Section */}
        <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeIn}
            className="max-w-4xl mx-auto mb-20"
        >
            <h3 className={`text-2xl font-bold mb-12 text-center uppercase tracking-widest opacity-60 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>My Journey</h3>
            <div className={`space-y-12 border-l-2 border-dashed ml-4 md:ml-0 pl-8 md:pl-0 md:border-none ${theme === 'dark' ? 'border-white/20' : 'border-slate-300'}`}>
                {[
                    { year: '2023', title: 'Senior Frontend Engineer', desc: 'Leading architecture at TechFlow, moving to Next.js 14.' },
                    { year: '2021', title: 'Full Stack Developer', desc: 'Scaled InnovateX startup from 0 to 50k users.' },
                    { year: '2019', title: 'Freelance UI Developer', desc: 'Worked with global clients to build animated portfolios.' },
                    { year: '2018', title: 'Hello World', desc: 'Wrote my first line of JavaScript. Was hooked instantly.' }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between group">
                        {/* Desktop: Left side year */}
                        <div className="hidden md:block w-5/12 text-right pr-8">
                            <span className={`text-2xl font-black ${theme === 'dark' ? 'text-white/20 group-hover:text-neon-blue' : 'text-slate-300 group-hover:text-indigo-600'} transition-colors`}>
                                {item.year}
                            </span>
                        </div>
                        
                        {/* Center Dot */}
                        <div className={`hidden md:flex w-2/12 justify-center`}>
                            <div className={`w-4 h-4 rounded-full border-4 ${
                                theme === 'dark' ? 'bg-dark-bg border-neon-blue' : 'bg-slate-50 border-indigo-600'
                            }`}></div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-5/12 pl-0 md:pl-8 relative">
                             <span className="md:hidden text-4xl font-black absolute -left-12 -top-2 opacity-20">{item.year}</span>
                             <h4 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                             <p className={`mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>

        {/* Personal Interests Grid */}
        <motion.div
             initial="hidden"
             animate="visible"
             custom={5}
             variants={fadeIn}
        >
             <h3 className={`text-2xl font-bold mb-10 text-center uppercase tracking-widest opacity-60 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>When I'm AFK</h3>
             <div className="flex flex-wrap justify-center gap-4">
                 {[
                     { icon: Coffee, label: 'Specialty Coffee' },
                     { icon: Globe, label: 'Traveling' },
                     { icon: BookOpen, label: 'Sci-Fi Reading' },
                     { icon: Monitor, label: 'Gaming' },
                 ].map((interest, i) => (
                     <div key={i} className={`flex items-center gap-3 px-6 py-3 rounded-full border ${
                         theme === 'dark' 
                         ? 'bg-white/5 border-white/10 text-gray-300' 
                         : 'bg-white border-slate-200 text-slate-700 shadow-sm hover:shadow-md'
                     }`}>
                         <interest.icon size={18} className={theme === 'dark' ? 'text-neon-green' : 'text-indigo-600'} />
                         <span className="font-medium">{interest.label}</span>
                     </div>
                 ))}
             </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;