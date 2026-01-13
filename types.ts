import { ReactNode } from 'react';

export type SectionKey = 'overview' | 'documentation' | 'features' | 'working' | 'tech' | 'future';
export type ViewState = 'home' | 'about' | 'skills' | 'projects' | 'blog' | 'contact';

export interface ProjectSection {
  key: SectionKey;
  label: string;
  content: ReactNode;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  tags: string[];
  sections: ProjectSection[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: ReactNode;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface NavItem {
  label: string;
  view: ViewState;
}
