/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BackgroundAnimation } from './BackgroundAnimation';

const LOGOS = [
  "Microsoft", "Azure", "Office 365", "AWS", "Google Cloud", 
  "Stripe", "PayPal", "Xero", "QuickBooks", "Salesforce",
  "Slack", "Zoom", "HubSpot", "Zendesk"
];

export default function Integrations() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden border-y border-slate-100 relative" id="integrations">
      <BackgroundAnimation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-100"
        >
          POWERFUL CLOUD INTEGRATIONS
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
        >
          Works with your <span className="text-indigo-600">Favorite ecosystem</span>
        </motion.h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div 
          animate={{ x: [0, -100 * LOGOS.length] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap gap-6 items-center"
        >
          {/* Double the logos for seamless loop */}
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center px-8 py-4 bg-white rounded-lg border border-slate-100 shadow-sm text-slate-900 font-bold tracking-tight text-lg"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
