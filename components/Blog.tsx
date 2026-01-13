import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';
import { Clock, Calendar, BookOpen, X, Share2, Facebook, Twitter, Linkedin, Link, Bookmark } from 'lucide-react';

const Blog: React.FC = () => {
  const { theme } = useTheme();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPost]);

  return (
    <>
      <div className={`min-h-screen pt-24 pb-20 ${theme === 'dark' ? 'bg-transparent' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className={`inline-block py-1 px-3 rounded-full text-xs font-semibold tracking-wide mb-4 border ${
                theme === 'dark' ? 'border-neon-green/30 text-neon-green bg-neon-green/10' : 'border-green-200 text-green-700 bg-green-50'
            }`}>
                THOUGHTS & INSIGHTS
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Latest <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme === 'dark' ? 'from-neon-green to-blue-500' : 'from-green-600 to-blue-600'}`}>Articles</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
              Exploring the frontiers of Frontend Development, AI, and Design Systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.div
                key={post.id}
                layoutId={`blog-card-${post.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedPost(post)}
                className={`group cursor-pointer rounded-3xl overflow-hidden border flex flex-col h-full transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-[#12121a] border-white/5 hover:border-neon-green/30 hover:shadow-lg hover:shadow-neon-green/10' 
                    : 'bg-white border-gray-100 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute top-4 left-4">
                       <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/50 backdrop-blur-md text-white border border-white/20">
                           {post.category}
                       </span>
                   </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs opacity-60 mb-3 font-medium uppercase tracking-wider">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                    </div>
                    <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${theme === 'dark' ? 'group-hover:text-neon-green' : 'group-hover:text-green-600'} transition-colors`}>
                        {post.title}
                    </h3>
                    <p className="text-sm opacity-70 mb-6 line-clamp-3 flex-1">
                        {post.excerpt}
                    </p>
                    <div className={`flex items-center gap-2 text-sm font-bold ${theme === 'dark' ? 'text-neon-green' : 'text-green-600'}`}>
                        Read Article <BookOpen size={16} />
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Redesigned Blog Detail Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8"
          >
             {/* Backdrop */}
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`absolute inset-0 backdrop-blur-sm ${theme === 'dark' ? 'bg-black/40' : 'bg-white/40'}`} 
                onClick={() => setSelectedPost(null)}
             />

             {/* Modal Container */}
             <motion.div
                layoutId={`blog-card-${selectedPost.id}`}
                className={`relative w-full max-h-[85vh] max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col border z-50 ${theme === 'dark' ? 'bg-[#0f0f13] border-white/10' : 'bg-white border-gray-200'}`}
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
             >
                {/* Scrollable Area */}
                <div className="flex-1 overflow-y-auto relative scroll-smooth">
                    
                    {/* Close Button (Fixed within Modal) */}
                    <button
                        onClick={() => setSelectedPost(null)}
                        className={`absolute top-6 right-6 z-50 p-2 rounded-full transition-all duration-300 ${
                            theme === 'dark' 
                            ? 'bg-black/40 hover:bg-neon-green/20 text-white hover:text-neon-green border border-white/10' 
                            : 'bg-white/80 hover:bg-gray-100 text-gray-700 shadow-md'
                        } backdrop-blur-md`}
                    >
                        <X size={24} />
                    </button>

                    {/* Hero Image */}
                    <div className="relative w-full h-[350px] md:h-[450px]">
                        <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                        <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-[#0f0f13]' : 'from-white'} to-transparent opacity-90`} />
                        
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ delay: 0.2 }}
                                className="max-w-3xl"
                            >
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                                    theme === 'dark' ? 'bg-neon-green text-black' : 'bg-green-600 text-white'
                                }`}>
                                    {selectedPost.category}
                                </span>
                                <h1 className={`text-3xl md:text-5xl font-black leading-tight mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                    {selectedPost.title}
                                </h1>
                                <div className="flex items-center gap-6 text-sm font-medium opacity-80">
                                    <span className="flex items-center gap-2"><Calendar size={16} /> {selectedPost.date}</span>
                                    <span className="flex items-center gap-2"><Clock size={16} /> {selectedPost.readTime}</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="flex flex-col md:flex-row gap-12 p-8 md:p-12 max-w-7xl mx-auto">
                        
                        {/* Main Text */}
                        <div className="flex-1">
                            <div className={`prose max-w-none text-lg leading-relaxed ${
                                theme === 'dark' 
                                ? 'prose-invert prose-p:text-gray-300 prose-headings:text-white prose-strong:text-neon-green prose-a:text-neon-green prose-code:text-pink-500' 
                                : 'prose-slate prose-p:text-slate-600 prose-headings:text-slate-900 prose-strong:text-green-700 prose-a:text-green-600 prose-code:text-pink-600'
                            }`}>
                                <p className="lead font-medium text-xl opacity-90 mb-8 border-l-4 pl-4 border-current">
                                    {selectedPost.excerpt}
                                </p>
                                {selectedPost.content}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="w-full md:w-64 flex-shrink-0 space-y-8">
                            {/* Author Card */}
                            <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-white/5 border border-white/5' : 'bg-gray-50 border border-gray-100'}`}>
                                <h4 className="font-bold text-sm uppercase tracking-wider mb-4 opacity-70">About the Author</h4>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" alt="Profile" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Muhammad</p>
                                        <p className="text-xs opacity-60">Senior Frontend Eng.</p>
                                    </div>
                                </div>
                                <button className={`w-full py-2 rounded-lg text-xs font-bold transition-colors ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                                    Follow
                                </button>
                            </div>

                            {/* Share */}
                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-wider mb-4 opacity-70">Share this</h4>
                                <div className="flex flex-col gap-2">
                                    <button className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                                        theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'
                                    }`}>
                                        <Twitter size={18} className="text-blue-400" /> Twitter
                                    </button>
                                    <button className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                                        theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'
                                    }`}>
                                        <Linkedin size={18} className="text-blue-600" /> LinkedIn
                                    </button>
                                    <button className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                                        theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'
                                    }`}>
                                        <Link size={18} className="text-gray-400" /> Copy Link
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Read Next Section */}
                    <div className={`p-8 md:p-12 border-t ${theme === 'dark' ? 'border-white/5 bg-white/5' : 'border-gray-100 bg-gray-50'}`}>
                        <h3 className="text-xl font-bold mb-6">Continue Reading</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {BLOG_POSTS.filter(p => p.id !== selectedPost.id).slice(0, 2).map(post => (
                                <div 
                                    key={post.id} 
                                    onClick={() => setSelectedPost(post)}
                                    className={`p-4 rounded-xl cursor-pointer transition-all flex gap-4 ${
                                        theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-white hover:shadow-md'
                                    }`}
                                >
                                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                                        <img src={post.image} className="w-full h-full object-cover" alt={post.title} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold opacity-60">{post.category}</span>
                                        <h4 className="font-bold leading-tight mt-1">{post.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Blog;