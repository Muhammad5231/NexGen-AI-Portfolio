import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Terminal, Code2, Cpu, Globe, Database, Layers } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { ViewState } from '../types';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const HERO_CONTENT = [
    {
        headline: "Building Scalable Web Apps",
        description: "I leverage Next.js and Server Components to deliver lightning-fast, SEO-optimized applications that handle high traffic with ease."
    },
    {
        headline: "Crafting AI-Powered Experiences",
        description: "Integrating Gemini and modern LLMs to transform static interfaces into intelligent, context-aware digital assistants."
    },
    {
        headline: "Engineering Future-Ready Systems",
        description: "Architecting robust, type-safe backends with Node.js and TypeScript, ensuring scalability and maintainability."
    },
    {
        headline: "Designing Immersive UI Interactions",
        description: "Obsessed with pixel-perfection, utilizing Framer Motion and WebGL to create memorable, fluid user journeys."
    }
];

const StatItem = ({ value, label, delay }: { value: string, label: string, delay: number }) => {
    const { theme } = useTheme();
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="flex flex-col items-center"
        >
            <span className={`text-3xl md:text-4xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>{value}</span>
            <span className={`text-xs font-bold tracking-widest uppercase mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`}>{label}</span>
        </motion.div>
    )
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // Blinking cursor loop
  useEffect(() => {
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout2);
  }, []);

  // Typing Logic
  useEffect(() => {
    // If finished typing the sentence
    if (subIndex === HERO_CONTENT[index].headline.length + 1 && !reverse) {
      // Wait for reading (3.5 seconds pause to allow reading title & desc)
      const timeout = setTimeout(() => {
        setReverse(true);
      }, 3500);
      return () => clearTimeout(timeout);
    }

    // If finished deleting
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % HERO_CONTENT.length);
      return;
    }

    // Typing speed control
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : Math.random() * 30 + 50); // Faster delete, natural typing speed

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={`inline-block py-2 px-6 rounded-full text-sm font-bold tracking-wider mb-8 border shadow-lg backdrop-blur-md ${
            theme === 'dark' 
              ? 'border-neon-blue/30 bg-neon-blue/10 text-neon-blue' 
              : 'border-indigo-200 bg-white/60 text-indigo-600'
          }`}>
            FULL STACK ENGINEER
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 leading-tight">
            Hi, I'm Muhammad <br />
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
              theme === 'dark' 
                ? 'from-neon-blue via-purple-500 to-neon-green' 
                : 'from-indigo-600 via-purple-600 to-pink-500'
            }`}>
              {HERO_CONTENT[index].headline.substring(0, subIndex)}
              <span className={`${blink ? 'opacity-100' : 'opacity-0'} ml-1 text-inherit transition-opacity duration-100`}>|</span>
            </span>
          </h1>

          {/* Dynamic Animated Description */}
          <div className="h-24 md:h-20 mb-8 flex items-center justify-center">
             <AnimatePresence mode="wait">
                <motion.p
                    key={index} // Changing key triggers the animation
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400"
                >
                    {HERO_CONTENT[index].description}
                </motion.p>
             </AnimatePresence>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-5">
            <motion.button
              onClick={() => onNavigate('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center px-8 py-4 text-base font-bold rounded-full transition-all shadow-xl ${
                theme === 'dark'
                  ? 'bg-white text-black hover:bg-gray-200 shadow-neon-blue/20'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-600/30'
              }`}
            >
              View Projects <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center px-8 py-4 text-base font-bold rounded-full border transition-all ${
                theme === 'dark'
                  ? 'border-white/20 hover:bg-white/10 text-white'
                  : 'border-gray-200 hover:bg-white hover:border-gray-300 text-slate-700 bg-white/50 backdrop-blur-sm shadow-sm'
              }`}
            >
              Resume <Download className="ml-2 w-5 h-5" />
            </motion.a>
          </div>

          {/* Stats Section */}
          <div className={`mt-20 pt-10 border-t ${theme === 'dark' ? 'border-white/5' : 'border-gray-200'} grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto`}>
              <StatItem value="5+" label="Years Experience" delay={0.2} />
              <StatItem value="50+" label="Projects Completed" delay={0.4} />
              <StatItem value="1M+" label="Lines of Code" delay={0.6} />
              <StatItem value="100%" label="Client Satisfaction" delay={0.8} />
          </div>
        </motion.div>
      </div>

      {/* Bottom Tech Marquee */}
      <div className="mt-16 w-full overflow-hidden opacity-50">
        <div className={`flex items-center gap-16 animate-marquee whitespace-nowrap ${theme === 'dark' ? 'text-gray-500' : 'text-slate-400'}`}>
             {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                    <span className="flex items-center gap-2 text-lg font-bold"><Code2 size={20} /> REACT.JS</span>
                    <span className="flex items-center gap-2 text-lg font-bold"><Terminal size={20} /> NEXT.JS</span>
                    <span className="flex items-center gap-2 text-lg font-bold"><Cpu size={20} /> TYPESCRIPT</span>
                    <span className="flex items-center gap-2 text-lg font-bold"><Globe size={20} /> TAILWIND</span>
                    <span className="flex items-center gap-2 text-lg font-bold"><Database size={20} /> NODE.JS</span>
                    <span className="flex items-center gap-2 text-lg font-bold"><Layers size={20} /> FRAMER MOTION</span>
                    <span className="flex items-center gap-2 text-lg font-bold"><Code2 size={20} /> GRAPHQL</span>
                    <span className="flex items-center gap-2 text-lg font-bold"><Terminal size={20} /> AI INTEGRATION</span>
                </React.Fragment>
             ))}
        </div>
        {/* Style for animation */}
        <style>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 30s linear infinite;
            }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;