/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { FEATURES } from '../constants';
import { BackgroundAnimation } from './BackgroundAnimation';

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="features">
      <BackgroundAnimation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-100"
          >
            Toolkit Specs
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight"
          >
            The Ultimate Toolkit for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-800">Cloud Distribution</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-slate-500 max-w-xl mx-auto font-medium"
          >
            Everything ISVs and distributors need to automate high-frequency cloud transactions globally.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
          {FEATURES.map((feature, i) => {
            const IconComponent = (Icons as any)[feature.icon];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ rotate: 1.5, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group p-6 bg-slate-50/50 rounded-2xl border border-slate-100/10 hover:bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-default"
                id={`feature-${feature.id}`}
              >
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-5 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:scale-110">
                  {IconComponent && <IconComponent className="h-5 w-5" />}
                </div>
                <h3 className="text-sm font-black text-slate-900 mb-2 uppercase tracking-tight leading-snug">{feature.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
