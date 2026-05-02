/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { View } from '../types';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  onNavigate: (view: View) => void;
  themeProps: {
    isDark: boolean;
    onToggle: () => void;
  };
}

export default function Navbar({ onNavigate, themeProps }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('landing')} id="nav-logo">
            <img 
              src="https://xtributor.com/AppGallop2.0_API/file/2_1776152935712.png" 
              alt="Xtributor Logo" 
              className="h-8 w-auto px-1 dark:invert" 
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8" id="nav-links">
            <button onClick={() => onNavigate('landing')} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</button>
            
            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors py-8">
                Solutions
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-56 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all p-2">
                <button onClick={() => onNavigate('cloud-sellers')} className="w-full text-left block px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition-colors">Cloud Sellers</button>
                <button onClick={() => onNavigate('b2b-saas')} className="w-full text-left block px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition-colors">B2B SaaS</button>
              </div>
            </div>

            <button onClick={() => onNavigate('integrations')} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Integrations</button>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors py-8">
                Company
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-56 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all p-2">
                <button onClick={() => onNavigate('about')} className="w-full text-left block px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition-colors">About Us</button>
                <button onClick={() => onNavigate('contact')} className="w-full text-left block px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition-colors">Contact</button>
                <button onClick={() => onNavigate('careers')} className="w-full text-left block px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition-colors">Careers</button>
              </div>
            </div>

            <div className="flex items-center space-x-4 border-l border-slate-200 dark:border-slate-800 pl-6">
              <ThemeToggle isDark={themeProps.isDark} onToggle={themeProps.onToggle} />
              <button 
                onClick={() => onNavigate('login')}
                className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                id="login-btn"
              >
                Login
              </button>
              <button 
                onClick={() => onNavigate('signup')}
                className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm"
                id="signup-btn"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle isDark={themeProps.isDark} onToggle={themeProps.onToggle} />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-slate-400" id="mobile-menu-toggle">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

       {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800"
          id="mobile-menu"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            <button onClick={() => { onNavigate('landing'); setIsOpen(false); }} className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400">Home</button>
            
            <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest pt-4">Solutions</div>
            <button className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400" onClick={() => { onNavigate('cloud-sellers'); setIsOpen(false); }}>Cloud Sellers</button>
            <button className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400" onClick={() => { onNavigate('b2b-saas'); setIsOpen(false); }}>B2B SaaS</button>
            
            <button className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400" onClick={() => { onNavigate('integrations'); setIsOpen(false); }}>Integrations</button>
            
            <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest pt-4">Company</div>
            <button className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400" onClick={() => { onNavigate('about'); setIsOpen(false); }}>About Us</button>
            <button className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400" onClick={() => { onNavigate('contact'); setIsOpen(false); }}>Contact</button>
            <button className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400" onClick={() => { onNavigate('careers'); setIsOpen(false); }}>Careers</button>

            <div className="pt-4 space-y-2">
              <button 
                onClick={() => { onNavigate('login'); setIsOpen(false); }}
                className="w-full text-center px-3 py-3 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300"
              >
                Login
              </button>
              <button 
                onClick={() => { onNavigate('signup'); setIsOpen(false); }}
                className="w-full text-center px-3 py-3 bg-indigo-600 rounded-lg text-sm font-bold text-white shadow-sm"
              >
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
