/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';
import { BackgroundAnimation } from './BackgroundAnimation';

export default function Introduction() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative transition-colors duration-300" id="intro">
      <BackgroundAnimation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Visual Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background pattern dots */}
            <div className="absolute -top-10 -left-10 w-40 h-40 opacity-10 pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#6366f1 2px, transparent 2px)', backgroundSize: '16px 16px' }} 
            />

            {/* Frame Container */}
            <div className="bg-white dark:bg-slate-900 p-4 lg:p-6 rounded-[3rem] shadow-2xl shadow-indigo-100 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden">
              <div className="relative aspect-[4/5] lg:aspect-[5/6] rounded-[2.5rem] overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
                  alt="Team working" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Decorative bottom orbs */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-3xl -z-10 opacity-60" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Subheading badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 border border-indigo-100 dark:border-indigo-800/50">
              MORE POWER TO CLOUD RESELLERS
            </div>

            {/* Main Heading */}
            <h2 className="text-[27px] md:text-[33px] font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
              What is <span className="text-indigo-600 dark:text-indigo-400">Xtributor?</span>
            </h2>

            <div className="space-y-10">
              {/* Highlighted box */}
              <div className="relative pl-8 border-l-[3px] border-indigo-600/40 bg-slate-50/50 dark:bg-slate-900/50 p-8 rounded-tr-[2rem] rounded-br-[2rem]">
                <p className="text-base text-slate-500 dark:text-slate-400 font-bold leading-relaxed">
                  Xtributor is the industry's first subscription management platform for cloud resellers to make billing and provisioning of solutions seamless and effortless.
                </p>
              </div>

              {/* Secondary text */}
              <p className="text-base text-slate-500 dark:text-slate-400 font-bold leading-relaxed px-1">
                It allows resellers to connect APIs of multiple distributors, fetch services directly to the marketplace, and sell them without any operational challenges.
              </p>

              {/* Italicized footer text */}
              <p className="text-base text-slate-400 dark:text-slate-500 font-bold italic leading-relaxed px-1">
                Built by cloud veterans, Xtributor has a plethora of valuable features that save time, streamline customer/sales management, while customizing product information, pricing and promotions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-12">
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 dark:shadow-none flex items-center gap-3 group">
                EXPLORE PLATFORM
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                BOOK A DEMO
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
