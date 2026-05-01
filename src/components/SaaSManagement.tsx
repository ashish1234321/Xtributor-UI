/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Store, Zap, Layers, Headset, Globe2, CreditCard, ShoppingCart, RefreshCcw } from 'lucide-react';

const SAAS_FEATURES = [
  {
    title: "Custom Storefront",
    description: "Create a personalized storefront where customers/partners can sign-up and buy your SaaS applications.",
    icon: Store,
    color: "blue"
  },
  {
    title: "Automated Billing & Provisioning",
    description: "Xtributor API completely automates the Microsoft subscription management and SaaS subscription management.",
    icon: Zap,
    color: "amber"
  },
  {
    title: "Bundle Third-Party Solutions",
    description: "Bundle up your apps or software with third-party solutions like Office 365, Azure, etc. to upsell and cross-sell.",
    icon: Layers,
    color: "emerald"
  },
  {
    title: "Sales & Support",
    description: "Inbuilt sales outreach module to manage leads and onboard customers. Support feature for customers with tracking and update options.",
    icon: Headset,
    color: "indigo"
  }
];

export default function SaaSManagement() {
  return (
    <section className="py-32 bg-slate-950 overflow-hidden relative" id="saas-management">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-emerald-600/5 rounded-full blur-[100px] translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-8"
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-400">
              SEAMLESSLY SELL YOUR SAAS SOFTWARE GLOBALLY
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]"
          >
            SaaS Subscription Management <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">
              Software For ISVs
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 font-medium leading-relaxed"
          >
            Xtributor helps you build a marketplace, bill the customers at custom pricing on a recurring basis, get consistent revenue, reduce customer churn, and manage their transactions and subscription cycles.
          </motion.p>
          
          <div className="mt-4 text-xs font-black text-slate-600 uppercase tracking-widest flex items-center justify-center gap-4">
             <span className="h-px w-8 bg-slate-800" />
             saas subscription billing management isvs
             <span className="h-px w-8 bg-slate-800" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {SAAS_FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 5,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-slate-900/50 border border-slate-800/50 hover:border-indigo-500/40 transition-shadow group relative perspective-1000 shadow-lg hover:shadow-indigo-500/10"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg ${
                  feature.color === 'blue' ? 'bg-blue-600/20 text-blue-400' :
                  feature.color === 'amber' ? 'bg-amber-600/20 text-amber-400' :
                  feature.color === 'emerald' ? 'bg-emerald-600/20 text-emerald-400' :
                  'bg-indigo-600/20 text-indigo-400'
                }`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black text-white mb-4 tracking-tight leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Visual Showcase */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900 rounded-[3rem] p-4 lg:p-6 shadow-2xl border border-slate-800"
            >
              <div className="bg-slate-950 rounded-[2.5rem] p-8 lg:p-10 relative overflow-hidden border border-white/5">
                {/* Visual Header */}
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <div className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-1">Global Dashboard</div>
                    <div className="text-2xl font-black text-white blur-sm select-none animate-pulse">$142,500 <span className="text-xs text-emerald-400">MRR</span></div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-2xl">
                    <Globe2 className="h-6 w-6 text-slate-400" />
                  </div>
                </div>

                {/* Automation Visuals */}
                <div className="space-y-6">
                  <div className="p-5 bg-white/5 border border-white/5 rounded-2xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                      <RefreshCcw className="h-5 w-5 animate-spin-slow" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 w-24 bg-white/10 rounded-full mb-2" />
                      <div className="h-1.5 w-full bg-indigo-500/20 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ width: ["0%", "100%"] }} 
                          transition={{ duration: 3, repeat: Infinity }} 
                          className="h-full bg-indigo-500" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 bg-white/5 border border-white/5 rounded-2xl">
                      <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Churn Rate</div>
                      <div className="text-xl font-black text-emerald-400 blur-sm select-none animate-pulse">0.8%</div>
                    </div>
                    <div className="p-5 bg-white/5 border border-white/5 rounded-2xl">
                      <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">ISV Nodes</div>
                      <div className="text-xl font-black text-white blur-sm select-none animate-pulse">42</div>
                    </div>
                  </div>
                </div>

                {/* Floating Action Callout */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-10 p-4 bg-indigo-600 rounded-2xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white">
                      <ShoppingCart className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-black text-white uppercase tracking-widest">Instant Marketplace Ready</span>
                  </div>
                  <div className="w-6 h-1 bg-white/30 rounded-full" />
                </motion.div>
              </div>
            </motion.div>

            {/* Glowing backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

