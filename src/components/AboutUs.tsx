/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Shield, Zap, Layout, BarChart, Users, Settings, Ticket, ShoppingCart, ArrowRight } from 'lucide-react';
import { BackgroundAnimation } from './BackgroundAnimation';
import { View } from '../types';

interface AboutUsProps {
  onNavigate?: (view: View) => void;
}

export default function AboutUs({ onNavigate }: AboutUsProps) {
  const hypergrowthFeatures = [
    { title: "Subscription billing automation", icon: Zap },
    { title: "Automated provisioning", icon: Settings },
    { title: "Support ticket management", icon: Ticket },
    { title: "Product & pricing management", icon: Layout },
    { title: "Real-time analytics", icon: BarChart },
    { title: "Sales management", icon: Users },
    { title: "Ready-to-go marketplace", icon: ShoppingCart },
    { title: "Smart dashboard", icon: Layout }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
        <BackgroundAnimation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Intro (Matched with home page) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
            
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
                ABOUT XTRIBUTOR
              </div>

              {/* Main Heading */}
              <h2 className="text-[27px] md:text-[33px] font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                What is <span className="text-indigo-600 dark:text-indigo-400">Xtributor?</span>
              </h2>

              <div className="space-y-10">
                {/* Highlighted box */}
                <div className="relative pl-8 border-l-[3px] border-indigo-600/40 bg-slate-50/50 dark:bg-slate-900/50 p-8 rounded-tr-[2rem] rounded-br-[2rem]">
                  <p className="text-base text-slate-500 dark:text-slate-400 font-bold leading-relaxed">
                    Xtributor is the ultimate subscription billing and marketplace management platform for cloud resellers and SaaS independent software vendors (ISVs).
                  </p>
                </div>

                {/* Secondary text */}
                <p className="text-base text-slate-500 dark:text-slate-400 font-bold leading-relaxed px-1">
                  It enables seamless automation of billing and provisioning of cloud services and B2B SaaS applications. Xtributor holds the potential to tackle the biggest challenges related to management of complicated subscription & billing terms.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-12">
                <button 
                  onClick={() => onNavigate?.('contact')}
                  className="px-8 py-4 bg-indigo-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 dark:shadow-none flex items-center gap-3 group"
                >
                  GET STARTED
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* For Cloud Resellers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
            {/* Content Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 border border-indigo-100 dark:border-indigo-800/50">
                HELPING RESELLERS SKYROCKET
              </div>
              <h2 className="text-[27px] md:text-[33px] font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                Xtributor for <span className="text-indigo-600 dark:text-indigo-400">Cloud Resellers</span>
              </h2>
              
              <div className="space-y-8">
                <p className="text-base text-slate-500 dark:text-slate-400 font-bold leading-relaxed">
                  While there are a good number of subscription automation platforms for cloud service distributors, it is not the same for cloud resellers.
                </p>
                <div className="relative pl-8 border-l-[3px] border-indigo-600/40 bg-slate-50/50 dark:bg-slate-900/50 p-8 rounded-tr-[2rem] rounded-br-[2rem]">
                  <p className="text-base text-slate-900 dark:text-white font-black italic leading-relaxed">
                    Resellers are still managing the subscription, billing, and provisioning of cloud solutions manually—this has become a big roadblock to growth.
                  </p>
                </div>
                <p className="text-base text-slate-500 dark:text-slate-400 font-bold leading-relaxed">
                  That's where the role of Xtributor comes into play. It is the industry's first subscription management software designed specifically for cloud resellers.
                </p>
              </div>
            </motion.div>

            {/* Visual Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 opacity-10 pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(#6366f1 2px, transparent 2px)', backgroundSize: '16px 16px' }} 
              />
              <div className="bg-white dark:bg-slate-900 p-4 lg:p-6 rounded-[3rem] shadow-2xl shadow-indigo-100 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden">
                <div className="relative aspect-[4/5] lg:aspect-[5/6] rounded-[2.5rem] overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Cloud Resellers Dashboard" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 transition-opacity grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* For B2B SaaS Vendors */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
            {/* Visual Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-10 pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(#6366f1 2px, transparent 2px)', backgroundSize: '16px 16px' }} 
              />
              <div className="bg-white dark:bg-slate-900 p-4 lg:p-6 rounded-[3rem] shadow-2xl shadow-indigo-100 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden">
                <div className="relative aspect-[4/5] lg:aspect-[5/6] rounded-[2.5rem] overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
                    alt="SaaS Distribution" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 border border-indigo-100 dark:border-indigo-800/50">
                SELL SOFTWARE THE SMART WAY
              </div>
              <h2 className="text-[27px] md:text-[33px] font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                Xtributor for <span className="text-indigo-600 dark:text-indigo-400">B2B SaaS Vendors</span>
              </h2>
              
              <div className="space-y-8">
                <p className="text-base text-slate-500 dark:text-slate-400 font-bold leading-relaxed">
                  Simplify customer experience, increase profits, reduce marketing budget, save time & resources, and get rid of billing complexity.
                </p>
                <div className="relative pl-8 border-l-[3px] border-indigo-600/40 bg-slate-50/50 dark:bg-slate-900/50 p-8 rounded-tr-[2rem] rounded-br-[2rem]">
                  <p className="text-base text-slate-900 dark:text-white font-black italic leading-relaxed">
                    Xtributor helps SaaS vendors to bill customers at custom pricing, automate billing & provisioning, and manage all aspects from a unified interface.
                  </p>
                </div>
                <p className="text-base text-slate-500 dark:text-slate-400 font-bold leading-relaxed">
                  It has all the essential and advanced features required to become a high-growth ISV in the global cloud marketplace.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Platform Meant for Hypergrowth */}
          <div className="relative mb-32">
            <div className="absolute inset-0 bg-indigo-600/5 dark:bg-indigo-500/5 rounded-[3rem] -rotate-1 scale-105 pointer-events-none" />
            <div className="relative bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 p-12 lg:p-20 shadow-xl shadow-indigo-100/20 dark:shadow-none">
              <div className="text-center mb-16">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] mb-4"
                >
                  ENGINEERED FOR SUCCESS
                </motion.div>
                <h2 className="text-[27px] md:text-[33px] font-black text-slate-900 dark:text-white mb-4 tracking-tight">A Platform Meant for Hypergrowth</h2>
                <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">Let's overcome billing complexities & operational challenges, and skyrocket your business with Xtributor.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {hypergrowthFeatures.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative flex items-center gap-4 p-6 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-2xl transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/30"
                  >
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-black text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item.title}</span>
                    
                    {/* Decorative hover corner */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-indigo-500/10 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center mt-16">
                <div className="inline-block px-6 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full text-indigo-600 dark:text-indigo-400 font-black text-[10px] uppercase tracking-[0.3em] border border-indigo-100/50 dark:border-indigo-800/50">
                  And much...much more
                </div>
              </div>
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="text-center py-20 bg-indigo-600 dark:bg-indigo-700 rounded-3xl border border-indigo-500 text-white shadow-2xl">
            <h2 className="text-[27px] md:text-[33px] font-black mb-6 tracking-tight">Career Opportunities</h2>
            <p className="text-indigo-100 max-w-xl mx-auto mb-10 font-medium">
              We are a tight-knit team of enthusiastic strategists, developers, designers, and marketers. Want a rewarding professional career that helps you grow as we grow?
            </p>
            <button 
              onClick={() => onNavigate?.('careers')}
              className="px-8 py-4 bg-white text-indigo-600 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-3 mx-auto shadow-xl"
            >
              Join our Team
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
