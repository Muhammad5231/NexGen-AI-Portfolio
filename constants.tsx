import React from 'react';
import { Project, NavItem, ExperienceItem, BlogPost } from './types';
import { Laptop, Brain, Server, Rocket, Shield, Zap, Globe, Cpu, Lock } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', view: 'home' },
  { label: 'About', view: 'about' },
  { label: 'Skills', view: 'skills' },
  { label: 'Projects', view: 'projects' },
  { label: 'Blog', view: 'blog' },
  { label: 'Contact', view: 'contact' },
];

export const SKILLS = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'AI Integration (Gemini)', level: 85 },
  { name: 'Tailwind CSS', level: 98 },
  { name: 'Node.js', level: 80 },
  { name: 'Three.js / WebGL', level: 70 },
  { name: 'System Design', level: 75 },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Senior Frontend Engineer',
    company: 'TechFlow Solutions',
    period: '2023 - Present',
    description: 'Leading the frontend migration to Next.js 14, improving LCP scores by 40% and integrating GenAI for automated content drafting.',
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'InnovateX Startup',
    period: '2021 - 2023',
    description: 'Built scalable RESTful APIs with Node.js/Express and deployed microservices architecture on AWS Lambda.',
  },
  {
    id: '3',
    role: 'UI/UX Developer',
    company: 'Creative Studio',
    period: '2019 - 2021',
    description: 'Designed and implemented pixel-perfect animations using GSAP and Framer Motion for high-profile client portfolios.',
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Frontend: AI-Driven UIs',
    excerpt: 'How Generative AI is shifting the paradigm from static components to self-generating interfaces.',
    date: 'Oct 12, 2023',
    readTime: '5 min read',
    category: 'AI & Tech',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop',
    content: (
      <div className="space-y-6">
        <p className="lead text-lg">
          We are witnessing a tectonic shift in how we build user interfaces. The era of manually crafting every single state of a component is fading.
        </p>
        <h3 className="text-2xl font-bold">Generative UI</h3>
        <p>
          Imagine a dashboard that rearranges itself based on what the user is currently working on. With Gemini and GPT-4, we can now stream UI components directly to the client.
        </p>
        <p>
          In my recent experiments, I hooked up the Gemini API to a React component renderer. The result? A chat interface that doesn't just reply with text, but replies with <em>interactive widgets</em> tailored to the user's question.
        </p>
      </div>
    )
  },
  {
    id: '2',
    title: 'Mastering Framer Motion: Beyond the Basics',
    excerpt: 'Deep dive into layout animations, shared layout transitions, and performance optimization.',
    date: 'Nov 05, 2023',
    readTime: '8 min read',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    content: (
      <div className="space-y-6">
        <p>
          Animations are no longer just "delighters"—they are essential for spatial awareness in modern web apps.
        </p>
        <h3 className="text-2xl font-bold">The Magic of LayoutId</h3>
        <p>
          One of the most powerful features in Framer Motion is the `layoutId` prop. It allows you to automatically morph one component into another, even if they are in completely different parts of the React tree.
        </p>
        <pre className="p-4 rounded-lg bg-black/50 border border-white/10 font-mono text-sm text-green-400">
          {`<motion.div layoutId="underline" />`}
        </pre>
        <p>
          I used this extensively in the navigation bar of this very portfolio to create the floating background effect.
        </p>
      </div>
    )
  },
  {
    id: '3',
    title: 'Why I Switched from Redux to Zustand',
    excerpt: 'Redux Toolkit is great, but sometimes you just need simplicity and speed without the boilerplate.',
    date: 'Dec 15, 2023',
    readTime: '4 min read',
    category: 'State Management',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop',
    content: (
      <div className="space-y-6">
        <p>
          State management wars are eternal. But purely for developer experience (DX), Zustand has won my heart for small to medium-sized applications.
        </p>
        <h3 className="text-2xl font-bold">Less Boilerplate</h3>
        <p>
          No providers wrapping your app. No complex reducers. Just a hook. It feels like magic compared to the setup required for Context API or Redux.
        </p>
      </div>
    )
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'ai-portfolio-v2',
    title: 'Muhammad\'s AI Portfolio',
    shortDescription: 'A futuristic, self-generating portfolio powered by React, Tailwind, and AI-driven content.',
    thumbnail: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'AI', 'Framer Motion'],
    sections: [
      {
        key: 'overview',
        label: 'Overview',
        content: (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
            <p>
              This project redefines personal branding by utilizing a dynamic, documentation-style interface. 
              Instead of static pages, users explore projects through interactive modules.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <h4 className="font-bold text-blue-500">Goal</h4>
                <p className="text-sm opacity-80">Impress recruiters instantly with high-tech UX.</p>
              </div>
              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <h4 className="font-bold text-purple-500">Tech</h4>
                <p className="text-sm opacity-80">Built with modern React & Motion standards.</p>
              </div>
            </div>
          </div>
        )
      },
      {
        key: 'documentation',
        label: 'Documentation',
        content: (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Technical Documentation</h3>
            <p>
              The architecture follows a strict Component-Based Design pattern. State management is handled via React Context API for theming and local state for modal interactions.
            </p>
            <pre className="bg-slate-950 p-4 rounded-lg overflow-x-auto text-xs md:text-sm font-mono text-green-400 my-4 border border-white/10">
{`// Example Interface
interface Project {
  id: string;
  title: string;
  sections: Section[];
}`}
            </pre>
            <p>
              Data is decoupled from the UI, allowing a Headless CMS to easily plug into the `constants.tsx` file structure.
            </p>
          </div>
        )
      },
      {
        key: 'tech',
        label: 'Tech Stack',
        content: (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: Laptop, name: 'React 18' },
              { icon: Brain, name: 'Gemini API' },
              { icon: Zap, name: 'Vite' },
              { icon: Server, name: 'Node.js' },
              { icon: Shield, name: 'TypeScript' },
              { icon: Rocket, name: 'Framer Motion' },
            ].map((tech, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/5 hover:scale-105 transition-transform">
                <tech.icon className="w-8 h-8 mb-2 text-blue-500" />
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        )
      }
    ]
  },
  {
    id: 'eco-track',
    title: 'EcoTrack Analytics',
    shortDescription: 'Real-time dashboard for monitoring industrial carbon footprints using IoT sensors.',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    tags: ['IoT', 'Dashboard', 'Data Viz', 'D3.js'],
    sections: [
      {
        key: 'overview',
        label: 'Overview',
        content: (
          <div>
            <h3 className="text-2xl font-bold mb-4">Industrial Sustainability</h3>
            <p>EcoTrack connects to thousands of IoT endpoints to visualize emission data in real-time, enabling factories to reduce their carbon tax liability.</p>
          </div>
        )
      },
      {
        key: 'features',
        label: 'Key Features',
        content: (
          <ul className="space-y-3 list-disc pl-5 marker:text-blue-500">
            <li>Real-time WebSocket data streaming.</li>
            <li>Interactive Heatmaps using D3.js.</li>
            <li>Automated PDF report generation.</li>
            <li>Role-based access control (RBAC).</li>
          </ul>
        )
      },
      {
        key: 'tech',
        label: 'Tech Stack',
        content: (
           <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-white/5 rounded border border-white/10 flex items-center gap-2"><Globe className="text-green-400" /> D3.js</div>
              <div className="p-3 bg-white/5 rounded border border-white/10 flex items-center gap-2"><Server className="text-orange-400" /> Firebase</div>
           </div>
        )
      },
       {
        key: 'future',
        label: 'Future Scope',
        content: (
          <div className="p-4 border-l-4 border-green-500 bg-green-500/10">
             <p>Integration with blockchain for immutable sustainability records and expansion into agricultural sensors.</p>
          </div>
        )
      }
    ]
  },
  {
    id: 'crypto-nexus',
    title: 'Crypto Nexus',
    shortDescription: 'A decentralized exchange aggregator finding the best swap rates across multiple chains.',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop',
    tags: ['Web3', 'Blockchain', 'Solidity', 'Ethers.js'],
    sections: [
      {
        key: 'overview',
        label: 'Overview',
        content: (
          <div>
            <h3 className="text-2xl font-bold mb-4">DeFi Aggregation</h3>
            <p>Connecting users to liquidity pools across Ethereum, BSC, and Polygon to ensure the lowest slippage on token swaps.</p>
          </div>
        )
      },
      {
        key: 'working',
        label: 'How it Works',
        content: (
          <div className="space-y-4">
             <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shrink-0">1</div>
                <p>User connects wallet (MetaMask/WalletConnect).</p>
             </div>
             <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shrink-0">2</div>
                <p>Smart contract queries multiple DEX routers off-chain.</p>
             </div>
             <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold shrink-0">3</div>
                <p>Optimal route is executed atomically.</p>
             </div>
          </div>
        )
      },
      {
        key: 'tech',
        label: 'Smart Contracts',
        content: (
          <div className="space-y-2">
            <div className="flex items-center gap-2"><Cpu className="text-purple-400"/> Solidity</div>
            <div className="flex items-center gap-2"><Lock className="text-yellow-400"/> Hardhat</div>
            <div className="flex items-center gap-2"><Globe className="text-blue-400"/> Web3.js</div>
          </div>
        )
      }
    ]
  }
];
