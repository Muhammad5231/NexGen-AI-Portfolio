import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsExperience from './components/SkillsExperience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CursorFollower from './components/CursorFollower';
import CodeBackground from './components/CodeBackground';
import { Project, ViewState } from './types';
import { AnimatePresence, motion } from 'framer-motion';

const BackgroundAnimation = () => {
  const { theme } = useTheme();
  return (
    <div className={`fixed inset-0 z-0 pointer-events-none overflow-hidden ${theme === 'dark' ? 'bg-dark-bg' : 'bg-slate-50'}`}>
        {/* Animated Blobs - Refined for Light Mode */}
        <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full mix-blend-multiply filter blur-[80px] animate-blob ${
            theme === 'dark' 
            ? 'bg-purple-600 opacity-20' 
            : 'bg-indigo-300 opacity-30'
        }`}></div>
        <div className={`absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000 ${
            theme === 'dark' 
            ? 'bg-blue-600 opacity-20' 
            : 'bg-purple-300 opacity-30'
        }`}></div>
        <div className={`absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000 ${
            theme === 'dark' 
            ? 'bg-pink-600 opacity-20' 
            : 'bg-blue-200 opacity-40'
        }`}></div>
        
        {/* Code Rain Animation Layer */}
        <CodeBackground />

        {/* Grid Overlay */}
        <div className="absolute inset-0" 
           style={{ 
             backgroundImage: `linear-gradient(${theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'} 1px, transparent 1px), linear-gradient(90deg, ${theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'} 1px, transparent 1px)`, 
             backgroundSize: '50px 50px' 
           }} 
        />
    </div>
  )
}

const App = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <ThemeProvider>
      <div className="font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-900 min-h-screen relative flex flex-col">
        <CursorFollower />
        <BackgroundAnimation />
        
        <Navbar currentView={currentView} onNavigate={handleNavigate} />
        
        <main className="relative z-10 pt-20 flex-grow">
          <AnimatePresence mode='wait'>
            <motion.div key={currentView} initial={{opacity:0, y: 10}} animate={{opacity:1, y: 0}} exit={{opacity:0, y: -10}} transition={{duration: 0.3}}>
              {currentView === 'home' && <Hero onNavigate={handleNavigate} />}
              {currentView === 'about' && <About />}
              {currentView === 'skills' && <SkillsExperience />}
              {currentView === 'projects' && <Projects onSelectProject={setSelectedProject} />}
              {currentView === 'blog' && <Blog />}
              {currentView === 'contact' && <Contact />}
            </motion.div>
          </AnimatePresence>
        </main>
        
        <div className="relative z-10">
            <Footer onNavigate={handleNavigate} />
        </div>

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </ThemeProvider>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);