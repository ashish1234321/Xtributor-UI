/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ClipboardList, CreditCard, PieChart, Puzzle, Target, Megaphone, Share2, MessageSquareText } from 'lucide-react';
import { BackgroundAnimation } from './BackgroundAnimation';

const TABS = [
  {
    id: 'management',
    label: 'Subscription Management',
    icon: ClipboardList,
    title: 'Automate Entire Lifecycle',
    subtitle: 'From Order to Revenue',
    description: 'Cloud subscription billing management system for resellers to automate the complete lifecycle.',
    data: [
      { title: 'Operations', icon: ClipboardList, items: ["Offer trials", "Send product quotation", "Customer onboarding", "Taxation management"] },
      { title: 'Billing', icon: CreditCard, items: ["Varied price modeling", "Manage catalogs", "Usage billing", "Generate invoices"] }
    ]
  },
  {
    id: 'growth',
    label: 'Growth Solutions',
    icon: Target,
    title: 'Powerful Business Tools',
    subtitle: 'Scaling your sales',
    description: 'Everything your business needs to manage and personalize for every user.',
    data: [
      { title: 'Sales CRM', icon: Target, items: ["Lead management", "Renewal tracking", "Sales pipeline", "Potential clients"] },
      { title: 'Marketing', icon: Megaphone, items: ["Coupons & discounts", "Campaign management", "Promotions", "Social activities"] }
    ]
  },
  {
    id: 'ecosystem',
    label: 'Integration & Support',
    icon: Puzzle,
    title: 'Platform Synergy',
    subtitle: 'Connected ecosystem',
    description: 'Resolve tickets faster and connect directly with distributor APIs.',
    data: [
      { title: 'Connectivity', icon: Share2, items: ["Multi Disti Connect", "Automated provisioning", "API mapping", "Provider sync"] },
      { title: 'Helpdesk', icon: MessageSquareText, items: ["Ticket tracking", "Real-time metrics", "SLA monitoring", "Automated replies"] }
    ]
  }
];

export default function Lifecycle() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const currentTab = TABS.find(t => t.id === activeTab)!;

  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden" id="capabilities">
      <BackgroundAnimation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-100"
          >
            PLATFORM CAPABILITIES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            One Platform, <span className="text-indigo-600">Infinite Possibilities</span>
          </motion.h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === tab.id 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                : 'bg-white text-slate-500 hover:bg-slate-100'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Info Column */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">
                  {currentTab.title}
                </h3>
                <div className="h-1.5 w-12 bg-indigo-600 rounded-full mb-6"></div>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
                  {currentTab.description}
                </p>
                
                <div className="space-y-4">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Key Modules</div>
                  <div className="flex flex-wrap gap-2">
                    {currentTab.data.map((cat, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-wider">
                        {cat.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-[2rem] bg-indigo-600 text-white shadow-xl shadow-indigo-200">
                <div className="flex items-center gap-3 mb-2">
                  <PieChart className="h-5 w-5 text-indigo-200" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-100">Live Efficiency</span>
                </div>
                <div className="text-2xl font-black mb-1">99.9%</div>
                <div className="text-[9px] font-bold text-indigo-200 uppercase tracking-widest">Automation Success Rate</div>
              </div>
            </div>

            {/* Right Visual Dashboard Column */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-[3rem] p-4 shadow-2xl shadow-slate-200 relative overflow-hidden border border-slate-100">
                <div className="bg-slate-50/50 rounded-[2.5rem] p-8 lg:p-12 border border-white relative z-10">
                  <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                        <currentTab.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-lg font-black text-slate-900">{currentTab.subtitle}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {currentTab.data.map((cat, i) => (
                      <div key={i} className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600">
                            <cat.icon className="h-4 w-4" />
                          </div>
                          <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">{cat.title}</h4>
                        </div>
                        
                        <div className="space-y-4">
                          {cat.items.map((item, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (i * 0.2) + (idx * 0.1) }}
                              className="group p-4 bg-white border border-slate-100 rounded-2xl hover:border-indigo-200 hover:bg-white transition-all flex items-center justify-between shadow-sm hover:shadow-md"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                                  <Check className="h-3 w-3" />
                                </div>
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item}</span>
                              </div>
                              <div className="h-1 w-8 bg-indigo-100 rounded-full overflow-hidden group-hover:w-16 transition-all duration-500">
                                <motion.div 
                                  animate={{ x: [-32, 64] }} 
                                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                  className="h-full w-full bg-indigo-600"
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Aesthetic Dashboard Decoration removed */}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

