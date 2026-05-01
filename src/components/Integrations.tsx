/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BackgroundAnimation } from './BackgroundAnimation';

const LOGOS = [
  { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "PayPal", url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
  { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  { name: "QuickBooks", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Intuit_QuickBooks_logo.svg/3840px-Intuit_QuickBooks_logo.svg.png" }
];

export default function Integrations() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden border-y border-slate-100 dark:border-slate-800 relative transition-colors duration-300" id="integrations">
      <BackgroundAnimation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-800/50"
        >
          ACHIEVE MORE WITH SUBSCRIPTION BILLING SOFTWARE
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[27px] md:text-[33px] font-extrabold text-slate-900 dark:text-white tracking-tight mb-16"
        >
          Xtributor's <span className="text-indigo-600 dark:text-indigo-400">Powerful Integrations</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
          {LOGOS.map((logo, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:scale-105 transition-transform hover:border-indigo-100 dark:hover:border-indigo-500/50 h-32"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-8 md:h-10 w-auto object-contain transition-all duration-300 dark:brightness-200 dark:contrast-125 grayscale hover:grayscale-0 dark:grayscale dark:hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
