/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { View } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Introduction from './components/Introduction';
import SaaSManagement from './components/SaaSManagement';
import Lifecycle from './components/Lifecycle';
import Challenges from './components/Challenges';
import Integrations from './components/Integrations';
import CTA from './components/CTA';
import Auth from './components/Auth';
import Footer from './components/Footer';
import Loader from './components/Loader';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    } catch (e) {
      console.error('LocalStorage not accessible', e);
    }
    return false;
  });

  useEffect(() => {
    try {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {
      console.error('LocalStorage not accessible', e);
    }
  }, [isDark]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to hash on load or view change
  useEffect(() => {
    if (currentView === 'landing' && window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [currentView]);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <AnimatePresence>
        <Loader />
      </AnimatePresence>
    );
  }

  if (currentView === 'login' || currentView === 'signup') {
    return <Auth mode={currentView} onNavigate={handleNavigate} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans text-gray-900 dark:text-slate-100 selection:bg-indigo-100 dark:selection:bg-indigo-900 transition-colors duration-300">
      <Navbar onNavigate={handleNavigate} themeProps={{ isDark, onToggle: () => setIsDark(prev => !prev) }} />
      
      <main>
        <Hero onNavigate={handleNavigate} />
        <Introduction />
        <Features />
        <SaaSManagement />
        <Lifecycle />
        <Challenges />
        <Integrations />
        <CTA onNavigate={handleNavigate} />
      </main>

      <Footer />
    </div>
  );
}

