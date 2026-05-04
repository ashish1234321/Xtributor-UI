/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Shield, Zap, Layout, BarChart, Users, Settings, Ticket, ShoppingCart, ArrowRight } from 'lucide-react';
import { BackgroundAnimation } from './BackgroundAnimation';
import { View } from '../types';
import { AboutIllustration } from './AboutIllustration';
import { CloudSolutionsIllustration } from './CloudSolutionsIllustration';
import { BundlingIllustration } from './BundlingIllustration';

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
                <AboutIllustration />
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
                <div className="relative aspect-[4/5] lg:aspect-[5/6] rounded-[2.5rem] overflow-hidden group bg-slate-50 dark:bg-slate-950">
                  <CloudSolutionsIllustration type="azure" />
                  <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-transparent transition-all duration-500 pointer-events-none" />
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
                <div className="relative aspect-[4/5] lg:aspect-[5/6] rounded-[2.5rem] overflow-hidden group bg-slate-50 dark:bg-slate-950">
                   <BundlingIllustration />
                   <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-transparent transition-all duration-500 pointer-events-none" />
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

          {/* Testimonials Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] mb-4"
              >
                SUCCESS STORIES
              </motion.div>
              <h2 className="text-[27px] md:text-[33px] font-black text-slate-900 dark:text-white mb-4 tracking-tight">What Our Partners Say</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">Hear from the industry leaders who are transforming their business with Xtributor's automation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Xtributor has completely overhauled how we handle our Microsoft 365 licensing. What used to take hours of manual effort is now fully automated and error-free.",
                  author: "Sarah Jenkins",
                  role: "Cloud Operations Manager",
                  company: "Nexus Solutions",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
                },
                {
                  quote: "The billing automation platform is a game-changer. We've seen a 40% reduction in billing disputes and our customers love the self-service marketplace.",
                  author: "David Chen",
                  role: "Director of Product",
                  company: "SaaS Ventures",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
                },
                {
                  quote: "As an ISV, bundling our services with major cloud providers was always a nightmare. Xtributor made the integration seamless and scalable.",
                  author: "Elena Rodriguez",
                  role: "Chief Technology Officer",
                  company: "DataFlow Systems",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200"
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-indigo-100/10 dark:shadow-none flex flex-col h-full relative"
                >
                  <div className="absolute top-8 right-8 text-indigo-500/10 dark:text-indigo-400/10">
                    <svg width="45" height="36" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.25 36C8.125 36 5.5 35.0312 3.375 33.0938C1.25 31.1562 0.1875 28.5625 0.1875 25.3125C0.1875 22.1875 1.09375 19.3438 2.90625 16.7812C4.71875 14.1562 7.71875 11.2188 11.9062 7.96875C12.5312 7.53125 13.0625 7.15625 13.5 6.84375C13.9375 6.53125 14.1562 6.1875 14.1562 5.8125C14.1562 5.5625 14.0625 5.34375 13.875 5.15625C13.6875 4.96875 13.4375 4.875 13.125 4.875C12.75 4.875 12.3125 5 11.8125 5.25C11.3125 5.5 10.75 5.84375 10.125 6.28125L8.4375 2.15625C9.4375 1.40625 10.5 0.8125 11.625 0.375C12.75 -0.0625 13.875 -0.28125 15 -0.28125C17.1875 -0.28125 18.9688 0.3125 20.3438 1.5C21.7812 2.625 22.5 4.25 22.5 6.375C22.5 9.0625 21.6875 12.0312 20.0625 15.2812C18.4375 18.5312 15.5 22.7188 11.25 27.8438V36H11.25ZM33.75 36C30.625 36 28 35.0312 25.875 33.0938C23.75 31.1562 22.6875 28.5625 22.6875 25.3125C22.6875 22.1875 23.5938 19.3438 25.4062 16.7812C27.2188 14.1562 30.2188 11.2188 34.4062 7.96875C35.0312 7.53125 35.5625 7.15625 36 6.84375C36.4375 6.53125 36.6562 6.1875 36.6562 5.8125C36.6562 5.5625 36.5625 5.34375 36.375 5.15625C36.1875 4.96875 35.9375 4.875 35.625 4.875C35.25 4.875 34.8125 5 34.3125 5.25C33.8125 5.5 33.25 5.84375 32.625 6.28125L30.9375 2.15625C31.9375 1.40625 33 0.8125 34.125 0.375C35.25 -0.0625 36.375 -0.28125 37.5 -0.28125C39.6875 -0.28125 41.4688 0.3125 42.8438 1.5C44.2812 2.625 45 4.25 45 6.375C45 9.0625 44.1875 12.0312 42.5625 15.2812C40.9375 18.5312 38 22.7188 33.75 27.8438V36H33.75Z" />
                    </svg>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-slate-600 dark:text-slate-300 font-bold leading-relaxed italic mb-8 relative z-10 text-lg">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-14 h-14 rounded-2xl object-cover ring-4 ring-indigo-50 dark:ring-indigo-900/20"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white text-sm tracking-tight">{testimonial.author}</h4>
                      <div className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest leading-none mt-1">
                        {testimonial.role}
                      </div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
