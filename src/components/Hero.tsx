/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { View } from '../types';

import { BackgroundAnimation } from './BackgroundAnimation';

interface HeroProps {
  onNavigate: (view: View) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" id="hero">
      <BackgroundAnimation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            id="hero-content"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-100">
              Industry's First Subscription Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Reselling Cloud the old-fashioned way? <br /> 
              <span className="text-indigo-600">One nudge</span> is all it takes to transform
            </h1>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl font-medium">
              Whether you are an established Cloud Services Provider (CSP) or a Managed Services Provider (MSP) just starting out, focus on your revenue growth while letting Xtributor transform your back-office chores with complete automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={() => onNavigate('signup')}
                className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center group"
                id="hero-primary-cta"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                className="bg-white text-slate-700 border border-slate-200 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-all flex items-center justify-center shadow-sm"
                id="hero-secondary-cta"
              >
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                "100% Automated Provisioning",
                "Multi-Distributor APIs",
                "Built by Cloud Veterans",
                "Custom White-label Store"
              ].map((item, i) => (
                <div key={i} className="flex items-center text-sm text-slate-500 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-indigo-500 mr-2" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            id="hero-visual"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative bg-slate-50 p-2 rounded-2xl shadow-2xl border border-slate-200 backdrop-blur-sm overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                alt="Cloud Transformation" 
                className="w-full h-[450px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
