/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Lock, Mail, User, ArrowLeft, ArrowRight, Building2, Globe, Phone, Briefcase, MapPin, ChevronDown } from 'lucide-react';
import { View } from '../types';

interface AuthProps {
  mode: 'login' | 'signup';
  onNavigate: (view: View) => void;
}

const FormInput = ({ label, placeholder, type = "text", icon: Icon }: any) => (
  <div>
    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1">{label}</label>
    <div className="relative">
      {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />}
      <input 
        type={type} 
        placeholder={placeholder}
        className={`w-full ${Icon ? 'pl-10' : 'px-4'} pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 transition-all font-sans text-sm font-medium`}
      />
    </div>
  </div>
);

const FormSelect = ({ label, options, icon: Icon }: any) => (
  <div>
    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-1">{label}</label>
    <div className="relative">
      {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />}
      <select 
        className={`w-full ${Icon ? 'pl-10' : 'px-4'} pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 transition-all font-sans text-sm font-medium appearance-none cursor-pointer`}
      >
        <option value="" disabled selected>Select {label.replace(' *', '')}</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
    </div>
  </div>
);

export default function Auth({ mode, onNavigate }: AuthProps) {
  return (
    <div className="min-h-screen flex" id="auth-page">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xl py-12"
        >
          <button 
            onClick={() => onNavigate('landing')}
            className="flex items-center text-sm font-semibold text-slate-500 hover:text-slate-900 mb-8 group transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <div className="flex items-center mb-6">
            <img
              src="https://xtributor.com/AppGallop2.0_API/file/2_1776152935712.png"
              alt="Xtributor Logo"
              className="h-8 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          <h2 className="text-[33px] font-extrabold text-slate-900 mb-2 tracking-tight">
            {mode === 'login' ? 'Welcome Back' : 'Fill Your Details'}
          </h2>
          <p className="text-slate-500 mb-8 font-medium">
            {mode === 'login' 
              ? 'Access your reseller dashboard and manage your subscriptions.' 
              : 'Join the next generation of cloud resellers today.'}
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {mode === 'signup' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                {/* User Type Selection */}
                <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 mb-6">
                  <label className="flex items-center cursor-pointer group">
                    <input type="radio" name="user_type" className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-slate-300" defaultChecked />
                    <span className="ml-2 text-sm font-bold text-slate-700">T2 Disti</span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input type="radio" name="user_type" className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-slate-300" />
                    <span className="ml-2 text-sm font-bold text-slate-700">MSP / Seller</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput label="First Name *" placeholder="First Name" icon={User} />
                  <FormInput label="Last Name *" placeholder="Last Name" icon={User} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput label="Business Email *" type="email" placeholder="email@company.com" icon={Mail} />
                  <FormInput label="Company Name *" placeholder="Company Name" icon={Building2} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormSelect 
                    label="Role / Designation *" 
                    icon={Briefcase} 
                    options={["CEO / Founder", "CTO", "Sales Manager", "IT Director", "Business Development", "Operations Manager", "Other"]}
                  />
                  <FormSelect 
                    label="Country *" 
                    icon={Globe} 
                    options={["India", "United States", "United Arab Emirates", "Singapore", "United Kingdom", "Australia", "Canada"]}
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="md:col-span-1 border-none">
                    <FormSelect 
                      label="State *" 
                      options={["Rajasthan", "Delhi", "Maharashtra", "Karnataka", "California", "New York", "Texas", "Dubai", "Other"]}
                    />
                  </div>
                  <div className="md:col-span-1"><FormInput label="City *" placeholder="City" /></div>
                  <div className="md:col-span-1"><FormInput label="Postal Code" placeholder="000000" /></div>
                  <div className="md:col-span-1"><FormInput label="Phone *" placeholder="Phone Number" icon={Phone} /></div>
                </div>

                <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100/30 mt-6 flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <input type="checkbox" required className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded cursor-pointer" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold italic">
                    By clicking this, you agree and understand that Xtributor and its associate brands may use this information to communicate with you for this or any other future promotional offers. Your information is stored securely and not shared anywhere else. Submitting this form does not guarantee invite to Xtributor platform. Our team will evaluate your information and then provide access to a select group of sellers the opportunity to kick-start with free access to Xtributor platform.
                  </p>
                </div>
              </div>
            )}
            
            {mode === 'login' && (
              <>
                <FormInput label="Email Address" type="email" placeholder="john@example.com" icon={Mail} />
                <FormInput label="Password" type="password" placeholder="••••••••" icon={Lock} />
                <div className="flex justify-end">
                  <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700">Forgot Password?</button>
                </div>
              </>
            )}

            <button className="w-full bg-indigo-600 text-white px-5 py-3 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 flex items-center justify-center group mt-6">
              {mode === 'login' ? 'Sign In' : 'Register Now'}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="text-center mt-8 text-slate-500 text-sm font-medium">
            {mode === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={() => onNavigate(mode === 'login' ? 'signup' : 'login')}
              className="font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-4 decoration-indigo-200"
            >
              {mode === 'login' ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </motion.div>
      </div>

      {/* Right side - Stats/Quotes */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 transform rotate-12">
          <img src="https://xtributor.com/AppGallop2.0_API/file/2_1776152935712.png" alt="" className="filter invert w-full h-auto" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 text-white max-w-lg"
        >
          <div className="mb-12">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="w-4 h-4 bg-indigo-500 rounded-sm"></div>
              ))}
            </div>
            <h3 className="text-[27px] md:text-[33px] font-extrabold mb-8 leading-tight tracking-tight">
              "Xtributor decreased our operational overhead by 70% in the first quarter."
            </h3>
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-indigo-500 overflow-hidden border-2 border-indigo-400">
                <img 
                  src="https://xtributor.com/img/3-rajeev.png" 
                  alt="Rajeev Vij"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="font-extrabold">Rajeev Vij</div>
                <div className="text-indigo-400 text-xs font-black uppercase tracking-widest">CEO at Xtributor</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
              <div className="text-3xl font-black text-indigo-400">4.9/5</div>
              <div className="text-xs text-slate-400 uppercase font-black tracking-widest mt-2">Reseller Rating</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
              <div className="text-3xl font-black text-indigo-400">15k+</div>
              <div className="text-xs text-slate-400 uppercase font-black tracking-widest mt-2">Managed Seats</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

