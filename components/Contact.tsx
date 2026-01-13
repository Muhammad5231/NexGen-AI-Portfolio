import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
        setIsSubmitting(false);
        setIsSent(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setIsSent(false), 3000);
    }, 1500);
  };

  return (
    <section className={`min-h-screen pt-24 pb-12 flex items-center justify-center ${theme === 'dark' ? 'bg-transparent' : 'bg-slate-50'}`}>
      <div className="max-w-5xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-12 rounded-3xl ${
            theme === 'dark' 
              ? 'bg-[#12121a] border border-white/5' 
              : 'bg-white shadow-2xl shadow-slate-200/50 border border-slate-100'
          }`}
        >
          {/* Left: Info */}
          <div className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Future Tech</h2>
            <p className={`text-lg opacity-70 mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>
               Have a project in mind? Looking for a Senior Engineer? 
               I am currently open to new opportunities.
            </p>

            <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${theme === 'dark' ? 'bg-neon-blue/10 text-neon-blue' : 'bg-blue-100 text-blue-600'}`}>
                        <Mail size={20} />
                    </div>
                    <span className="font-medium">contact@muhammad.dev</span>
                </div>
            </div>

            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className={`p-3 rounded-full transition-colors ${
                  theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 hover:text-neon-blue text-white' 
                  : 'bg-slate-100 hover:bg-slate-200 hover:text-blue-600 text-slate-600'
                }`}>
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-black/20' : 'bg-slate-50 border border-slate-100'}`}>
             <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className={`block text-sm font-bold mb-2 uppercase tracking-wider opacity-70 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-500'}`}>Name</label>
                    <input 
                        type="text" 
                        required
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                        className={`w-full p-3 rounded-lg outline-none transition-all ${
                            theme === 'dark' 
                            ? 'bg-white/5 border border-white/10 focus:border-neon-blue focus:bg-white/10 text-white' 
                            : 'bg-white border border-slate-200 focus:border-indigo-500 text-slate-900 focus:shadow-md'
                        }`}
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className={`block text-sm font-bold mb-2 uppercase tracking-wider opacity-70 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-500'}`}>Email</label>
                    <input 
                        type="email" 
                        required
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                        className={`w-full p-3 rounded-lg outline-none transition-all ${
                            theme === 'dark' 
                            ? 'bg-white/5 border border-white/10 focus:border-neon-blue focus:bg-white/10 text-white' 
                            : 'bg-white border border-slate-200 focus:border-indigo-500 text-slate-900 focus:shadow-md'
                        }`}
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label className={`block text-sm font-bold mb-2 uppercase tracking-wider opacity-70 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-500'}`}>Message</label>
                    <textarea 
                        rows={4}
                        required
                        value={formState.message}
                        onChange={e => setFormState({...formState, message: e.target.value})}
                        className={`w-full p-3 rounded-lg outline-none transition-all ${
                            theme === 'dark' 
                            ? 'bg-white/5 border border-white/10 focus:border-neon-blue focus:bg-white/10 text-white' 
                            : 'bg-white border border-slate-200 focus:border-indigo-500 text-slate-900 focus:shadow-md'
                        }`}
                        placeholder="Tell me about your project..."
                    />
                </div>
                
                <button 
                    type="submit" 
                    disabled={isSubmitting || isSent}
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                        isSent 
                        ? 'bg-green-500 text-white'
                        : theme === 'dark' 
                            ? 'bg-neon-blue text-black hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]' 
                            : 'bg-slate-900 text-white hover:bg-indigo-600 hover:shadow-lg'
                    }`}
                >
                    {isSubmitting ? 'Sending...' : isSent ? 'Sent Successfully!' : <>Send Message <Send size={18} /></>}
                </button>
             </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;