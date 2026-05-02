/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { BackgroundAnimation } from './BackgroundAnimation';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
        <BackgroundAnimation />
        
        {/* Decorative background orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[100px] -z-10 opacity-60" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 dark:bg-emerald-900/10 rounded-full blur-[100px] -z-10 opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-100 dark:border-indigo-800/50">
                Contact Us
              </div>
              <h1 className="text-[27px] md:text-[33px] font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                Let's Start a <br />
                <span className="text-indigo-600 dark:text-indigo-400">Conversation</span>
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-12 max-w-lg leading-relaxed">
                Whether you're a cloud reseller looking to automate your billing or an ISV seeking to expand your distribution, our team is ready to help you scale.
              </p>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email Us", value: "sales@xtributor.com" },
                  { icon: Phone, label: "Call Us", value: "+1 (555) 000-0000" },
                  { icon: MapPin, label: "Our Office", value: "Cloud City, Digital District, 101" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-xl shadow-indigo-100/50 dark:shadow-none border border-slate-100 dark:border-slate-800 group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">{item.label}</div>
                      <div className="text-slate-900 dark:text-white font-black">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-8 lg:p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl shadow-indigo-200/20 dark:shadow-none"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 ml-1">First Name*</label>
                    <input type="text" required className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 outline-none dark:text-white font-medium text-sm" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 ml-1">Last Name*</label>
                    <input type="text" required className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 outline-none dark:text-white font-medium text-sm" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 ml-1">Company Name*</label>
                    <input type="text" required className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 outline-none dark:text-white font-medium text-sm" placeholder="Company Inc." />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 ml-1">Company Email*</label>
                    <input type="email" required className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 outline-none dark:text-white font-medium text-sm" placeholder="work@company.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 ml-1">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 outline-none dark:text-white font-medium text-sm" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 ml-1">Business Type*</label>
                    <div className="relative">
                      <select required className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 outline-none dark:text-white appearance-none font-medium text-sm cursor-pointer">
                        <option value="" disabled selected>Select...*</option>
                        <option value="reseller">Cloud Reseller</option>
                        <option value="isv">B2B SaaS / ISV</option>
                        <option value="distributor">Distributor</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 ml-1">Message*</label>
                  <textarea required rows={4} className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 outline-none dark:text-white resize-none font-medium text-sm" placeholder="Tell us how we can help skyrocket your business..."></textarea>
                </div>
                <button type="submit" className="w-full px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 dark:shadow-none flex items-center justify-center gap-3 group">
                   SEND MESSAGE
                   <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
