/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, ShieldCheck, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-[27px] md:text-[33px] font-extrabold text-slate-900 leading-tight tracking-tight">
              Built by <span className="text-indigo-600">Cloud Veterans</span> for Resellers
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We've spent decades in the cloud distribution industry. We know that manual billing, 
              provisioning delays, and fragmented systems kill your margins. Xtributor was built to 
              solve these exact problems.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Award, title: "Industry First", desc: "The first platform specifically optimized for cloud channel partners." },
                { icon: ShieldCheck, title: "Secure & Reliable", desc: "Enterprise-grade security and 99.9% uptime for your business operations." },
                { icon: Users, title: "Lead Management", desc: "Inbuilt sales outreach to proactively onboard your customers." }
              ].map((item, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <item.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden relative group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Cloud Veterans" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-indigo-600/10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-2xl border border-slate-100 hidden md:block">
              <div className="flex space-x-8">
                <div>
                  <div className="text-3xl font-extrabold text-indigo-600">20+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-black">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-slate-100"></div>
                <div>
                  <div className="text-3xl font-extrabold text-indigo-600">500+</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-black">Resellers Enabled</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
