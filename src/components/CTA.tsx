/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onNavigate: (view: any) => void;
}

export default function CTA({ onNavigate }: CTAProps) {
  return (
    <section className="py-24 bg-indigo-600 dark:bg-indigo-700 relative overflow-hidden transition-colors duration-300" id="cta">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[27px] md:text-[33px] font-extrabold text-white mb-10 tracking-tight leading-tight max-w-4xl mx-auto"
        >
          Get Rid Of Operational Challenges And Become A Successful Cloud Reseller!
        </motion.h2>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <button 
            onClick={() => onNavigate('signup')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 text-indigo-600 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all shadow-xl hover:shadow-indigo-500/20 group"
          >
            Start Your Transformation
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
