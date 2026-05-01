/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Settings, BarChart3, Receipt, Server, Globe, Shield, Zap } from 'lucide-react';
import { InteractiveBackground } from './InteractiveBackground';

const SLIDES = [
  {
    badge: "The Status Quo",
    title: "Reselling Cloud the <span class=\"text-indigo-600 dark:text-indigo-400\">old-fashioned</span> way?",
    description: "One nudge is all it takes to transform your manual distribution into a hyper-automated engine. Manual provisioning, delayed billing, and fragmented customer views are relics of the past.",
    items: [
      { title: "Manual Sync", description: "Double-entry errors in spreadsheets cause massive revenue leakage.", icon: Settings },
      { title: "Provisioning Gaps", description: "Delayed access leads to customer churn before they even start.", icon: Zap },
      { title: "Data Silos", description: "No unified view of customer consumption across multiple clouds.", icon: BarChart3 },
      { title: "Billing Fragments", description: "Spending days calculating prorated usage for thousands of seats.", icon: Receipt }
    ]
  },
  {
    badge: "Complex Billing",
    title: "Tackle Complex <span class=\"text-indigo-600 dark:text-indigo-400\">Billing Cycles</span> Effortlessly",
    description: "Complexity shouldn't be a barrier to entry. Xtributor handles the most intricate subscription models, from fixed recurring to usage-based billing.",
    items: [
      { title: "Auto-Proration", description: "Precision billing for mid-cycle upgrades and downgrades.", icon: Receipt },
      { title: "Dynamic Pricing", description: "Set custom price books for different tiers of your distribution network.", icon: Settings },
      { title: "Usage Tracking", description: "Real-time intake of consumption data for accurate end-of-month invoicing.", icon: BarChart3 },
      { title: "Global Taxation", description: "Embedded compliance for regional tax laws and VAT calculations.", icon: Shield }
    ]
  },
  {
    badge: "ISV Growth",
    title: "Empowering <span class=\"text-indigo-600 dark:text-indigo-400\">SaaS Vendors</span> Globally",
    description: "Take your SaaS product to the global market without worrying about localization or currency. We provide the infrastructure to scale your reach.",
    items: [
      { title: "Global Marketplace", description: "Instant access to a worldwide network of vetted cloud resellers.", icon: Globe },
      { title: "Local Currency", description: "Bill your customers in their local currency while keeping your books in USD.", icon: BarChart3 },
      { title: "Region-Specific Nodes", description: "Deploy localized storefronts to meet data residency requirements.", icon: Server },
      { title: "Partner Channel", description: "Manage hundreds of individual partners from a single command center.", icon: Shield }
    ]
  },
  {
    badge: "Marketplace Future",
    title: "The Ultimate <span class=\"text-indigo-600 dark:text-indigo-400\">Modern Distribution</span>",
    description: "Join a select group of sellers who have unlocked the potential of automated cloud commerce. Future-proof your business today.",
    items: [
      { title: "One-Click Deploy", description: "Pre-integrated connectors for Azure, AWS, and Google Cloud.", icon: Zap },
      { title: "White-Label UX", description: "Your brand, our engine. Fully customizable reseller portals.", icon: Settings },
      { title: "AI Analytics", description: "Predictive churn analysis and cross-sell recommendations for your team.", icon: BarChart3 },
      { title: "Secure Infrastructure", description: "Enterprise-grade security and compliance for every transaction.", icon: Shield }
    ]
  }
];

export default function Challenges() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden relative group transition-colors duration-300" id="challenges">
      <InteractiveBackground />
      {/* Decorative background element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.02, 0.05, 0.02], x: [0, 100, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.01, 0.03, 0.01], x: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" 
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-800/50"
              >
                {SLIDES[currentSlide].badge}
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                dangerouslySetInnerHTML={{ __html: SLIDES[currentSlide].title }}
                className="text-[27px] md:text-[33px] font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight"
              />
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-600 dark:text-slate-400 font-medium text-sm leading-relaxed mb-6"
              >
                {SLIDES[currentSlide].description}
              </motion.p>
              
              <div className="flex gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${i === currentSlide ? 'w-8 bg-indigo-600 dark:bg-indigo-500' : 'w-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700'}`}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SLIDES[currentSlide].items.map((item, i) => (
                <motion.div
                  key={`${currentSlide}-${i}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    transition: { duration: 0.2 } 
                  }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800/50 hover:border-indigo-100 dark:hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-100/50 dark:hover:shadow-none transition-all group cursor-default"
                >
                  <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-all">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

