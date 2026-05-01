/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { View } from '../types';

import { BackgroundAnimation } from './BackgroundAnimation';
import { InteractiveBackground } from './InteractiveBackground';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const SLIDES = [
  {
    badge: "Industry's First Subscription Platform",
    title: "Reselling Cloud the <span class='text-indigo-600 dark:text-indigo-400'>old-fashioned way?</span> <br /> One nudge is all it takes to transform",
    description: "Whether you are an established Cloud Services Provider (CSP) or a Managed Services Provider (MSP) just starting out, focus on your revenue growth while letting Xtributor transform your back-office chores with complete automation.",
    features: ["100% Automated Provisioning", "Multi-Distributor APIs", "Built by Cloud Veterans", "Custom White-label Store"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
  },
  {
    badge: "Infinite Marketplace",
    title: "Launch your <span class='text-indigo-600 dark:text-indigo-400'>online Marketplace</span> with hundreds of cloud products & services",
    description: "Fetch products, price lists and promotions from multiple Distributors, merge common products, manage margins, discounts and bundles from a single place.",
    features: ["Price List Sync", "Promotion Management", "Margin Control", "Bundle Creator"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
  },
  {
    badge: "Hyper-Automation",
    title: "Automated provisioning, <span class='text-indigo-600 dark:text-indigo-400'>tax tools</span>, pro-rata billing and instant payments",
    description: "Faster subscription delivery with online payments, integrations with Ava-Tax and QuickBooks for taxation and accounting sync.",
    features: ["Ava-Tax Integration", "QuickBooks Sync", "Pro-rata Calculations", "Instant Payments"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
  },
  {
    badge: "Unified Dashboard",
    title: "Single login and <span class='text-indigo-600 dark:text-indigo-400'>simple user interface</span> connecting to multiple Distributors",
    description: "Pre-configured API integrations with cloud distributors, fetch price lists, manage customers and subscriptions from one single dashboard.",
    features: ["Multi-Distributor API", "Single Dashboard", "Customer Management", "Subscription Lifecycle"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
  }
];

export default function Hero({ onNavigate }: HeroProps) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden group bg-white dark:bg-slate-950 transition-colors duration-300" id="hero">
      <BackgroundAnimation />
      <InteractiveBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 xl:-left-16 z-20 hidden md:block">
          <button 
            onClick={handlePrev}
            className="p-4 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-indigo-600 transition-all shadow-xl backdrop-blur-md group"
          >
            <ChevronLeft className="h-6 w-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 xl:-right-16 z-20 hidden md:block">
          <button 
            onClick={handleNext}
            className="p-4 rounded-full bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-indigo-600 transition-all shadow-xl backdrop-blur-md group"
          >
            <ChevronRight className="h-6 w-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
              id="hero-content"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-800/50">
                {SLIDES[current].badge}
              </div>
              <h1 
                className="text-[27px] md:text-[33px] font-black text-slate-900 dark:text-white leading-[1.1] mb-4 tracking-tight"
                dangerouslySetInnerHTML={{ __html: SLIDES[current].title }}
              />
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed max-w-xl font-medium">
                {SLIDES[current].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => onNavigate('signup')}
                  className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 dark:shadow-none flex items-center justify-center group"
                  id="hero-primary-cta"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center shadow-sm"
                  id="hero-secondary-cta"
                >
                  Watch Demo
                </button>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                {SLIDES[current].features.map((item, i) => (
                  <div key={i} className="flex items-center text-sm text-slate-500 dark:text-slate-400 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 mr-2" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-10">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${i === current ? 'w-8 bg-indigo-500' : 'w-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700'}`}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:col-span-6"
              id="hero-visual"
            >
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-slate-100 dark:bg-slate-900/10 rounded-full blur-3xl opacity-50"></div>
              
              <div className="relative bg-slate-50 dark:bg-slate-900 p-2 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm overflow-hidden group">
                <img 
                  src={SLIDES[current].image} 
                  alt={SLIDES[current].badge} 
                  className="w-full h-[450px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
