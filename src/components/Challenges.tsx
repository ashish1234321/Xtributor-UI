/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TrendingUp, Settings, BarChart3, Receipt } from 'lucide-react';
import { InteractiveBackground } from './InteractiveBackground';

const CHALLENGES = [
  {
    title: "Break Growth Barriers",
    description: "Get rid of operational challenges, grow beyond boundaries, with unmatched automation of compliance, tax, and almost everything.",
    icon: TrendingUp
  },
  {
    title: "Streamline Business Operations",
    description: "Automate provisioning, management of spreadsheets, taxation, and complicated cloud billing. It directs your focus towards growth.",
    icon: Settings
  },
  {
    title: "Accelerate Your Sales",
    description: "Intuitive marketplace with features to upsell, cross-sell, and bundle up cloud and SaaS solutions to boost sales and revenue.",
    icon: BarChart3
  },
  {
    title: "Flexible Cloud Billing",
    description: "Make your SaaS and reseller business flexible with Xtributor's advanced cloud subscription billing management software.",
    icon: Receipt
  }
];

export default function Challenges() {
  return (
    <section className="py-20 bg-slate-900 overflow-hidden relative group" id="challenges">
      <InteractiveBackground />
      {/* Decorative background element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05], x: [0, 100, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.06, 0.03], x: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" 
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-500/20"
            >
              Industry Challenges
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight leading-tight"
            >
              Built to Effectively Tackle <span className="text-indigo-400">Complex Billing</span> Challenges
            </motion.h2>
            <p className="text-slate-400 font-medium text-sm leading-relaxed mb-8">
              Xtributor is solely designed to transform the way cloud resellers and SaaS independent software vendors (ISVs) sell their services to customers.
            </p>
            <div className="flex items-center gap-4 text-indigo-400 font-bold text-xs uppercase tracking-widest">
              <span>View full feature list</span>
              <div className="h-px flex-1 bg-indigo-400/20" />
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CHALLENGES.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  rotateZ: 0.5,
                  transition: { duration: 0.2 } 
                }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all group cursor-default"
              >
                <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
