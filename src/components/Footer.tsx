/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { View } from '../types';

interface FooterProps {
  onNavigate?: (view: View) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white py-16 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-sm">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="https://xtributor.com/AppGallop2.0_API/file/2_1776152935712.png" 
                alt="Xtributor Logo" 
                className="h-10 w-auto dark:invert cursor-pointer" 
                onClick={() => onNavigate?.('landing')}
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
              Xtributor is the industry's first subscription billing management software for resellers to make billing and provisioning of cloud services effortless.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400 font-medium">
              <li><button onClick={() => onNavigate?.('about')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</button></li>
              <li><button onClick={() => onNavigate?.('cloud-sellers')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Cloud Sellers</button></li>
              <li><button onClick={() => onNavigate?.('b2b-saas')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">B2B SaaS</button></li>
              <li><button onClick={() => onNavigate?.('integrations')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Integrations</button></li>
              <li><button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-not-allowed">FAQs</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-6">Info Links</h4>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400 font-medium">
              <li><button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-not-allowed text-left">Find a Reseller</button></li>
              <li><button onClick={() => onNavigate?.('contact')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</button></li>
              <li><button onClick={() => onNavigate?.('careers')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Careers</button></li>
              <li><button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-not-allowed text-left">Privacy Policy</button></li>
              <li><button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-not-allowed text-left">Terms</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="mailto:sales@xtributor.com" className="flex items-center text-slate-600 dark:text-slate-400 font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Mail className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                sales@xtributor.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest">
          <p>Copyright 2026 Xtributor | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
