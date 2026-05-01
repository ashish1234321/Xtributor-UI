/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Megaphone, Share2, MessageSquareText } from 'lucide-react';

const SOLUTIONS = [
  {
    title: "Sales CRM",
    description: "Boost your revenue with impactful management of leads, renewals, potential clients, and fresh sales.",
    icon: Target
  },
  {
    title: "Marketing Management",
    description: "Manage promotions and marketing activities, including coupons, discounts, campaigns, etc.",
    icon: Megaphone
  },
  {
    title: "Multi Disti Connect",
    description: "Connect APIs of multiple distributors and enable automated provisioning of services.",
    icon: Share2
  },
  {
    title: "Smart Helpdesk",
    description: "Resolve tickets faster and effectively, reduce ticket backlog, get real-time metrics.",
    icon: MessageSquareText
  }
];

export default function Solutions() {
  return (
    <section className="py-24 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 block mb-4"
          >
            EVERYTHING THAT YOUR BUSINESS NEEDS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight"
          >
            Seamless Cloud Subscription <span className="text-indigo-600">Billing Automation</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            Easily manage and personalize for every user. The best subscription billing software for cloud resellers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SOLUTIONS.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <solution.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{solution.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
