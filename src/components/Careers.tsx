/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight, Upload, Send, CheckCircle2 } from 'lucide-react';
import { BackgroundAnimation } from './BackgroundAnimation';
import { useState } from 'react';

export default function Careers() {
  const [charCount, setCharCount] = useState(0);

  const jobVacancies = [
    {
      title: "Team Leader",
      experience: "4 to 7 Year",
      guiSkills: "HTML, CSS, Bootstrap, JavaScript, Angular JS",
      devSkills: "Java, Spring Boot, JQuery, Ajax, NodeJS, MySQL, Mongo, SOAP & HTTP API",
      description: "Thorough experience of using JAVA, Spring Boot, MySql & Mongo to manage massive load on the application/DB Server. Can create and manage APIs for internal & external use. Knowledge of Cloud technologies (Azure & AWS), Git, Bitbucket, CI/CD and experience in managing micro-service based projects will be given preference.",
      responsibilities: "Should be able to handle the complete life cycle of a web application while managing multiple projects concurrently. Able to manage team size 10 to 15 people."
    },
    {
      title: "Sr. Java Developer",
      experience: "3 to 5 Year",
      guiSkills: "HTML, CSS, Bootstrap, JavaScript, Angular JS",
      devSkills: "Java, Spring Boot, JQuery, Ajax, NodeJS, MySQL, Mongo, SOAP & HTTP API",
      description: "Thorough experience of using JAVA, Spring Boot, MySql & Mongo to manage massive load on the application/DB Server. Can create and manage APIs for internal & external use. Knowledge of Cloud technologies (Azure & AWS), Git, Bitbucket, CI/CD and experience in managing micro-service based projects will be given preference.",
      responsibilities: "Should be able to handle the complete life cycle of a web application while managing multiple projects concurrently."
    },
    {
      title: "Software Support Executive",
      experience: "0 to 2 Year",
      description: "Need an Fresher or Software Support Executive on URGENT basis.",
      responsibilities: "Analytical & Troubleshooting Skills, Ability to provide Software Demo / Training, Should possess high customer focused mindset, Good spoken and written skills in English, Online support to Existing & New clients, Strong interpersonal skills and willingness to communicate with clients, colleagues, and management."
    },
    {
      title: "Front-End Developer",
      experience: "0 to 3 Year",
      guiSkills: "HTML, CSS, Bootstrap, JavaScript, JQuery, Angular JS, React JS, Adobe Photoshop, Adobe Illustrator, After Effects",
      description: "In-depth knowledge of HTML5, JavaScript and CSS with good hold on JS libraries like Backbone, jQuery, Bootstrap.",
      responsibilities: "Work with a team to design and develop world class responsive SPAs. Be able to analyse performance, security and scalability considerations of design. Participate in technical discussions with customer teams on technical matters. Stay up to date with the technology trends in the industry."
    },
    {
      title: "QA Automation",
      experience: "0 to 3 Year",
      testingSkills: "Writing test cases, execution of test cases, Test scripts writing, Bug Life Cycle, SQL, Selenium",
      description: "Thorough experience of Automation framework design and implementation according to project structure. Creating, Enhancing, Debugging and Running Test Cases.",
      responsibilities: "Organizing, monitoring defect management process Handling changes and conducting regression tests. Find solutions for issues related to object identity issues and error handling. Should be able to handle analysing test results on database impacts, errors or bugs, and usability."
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
        <BackgroundAnimation />

        {/* Decorative background orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[100px] -z-10 opacity-60" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[100px] -z-10 opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Hero Section */}
          <div className="text-center mb-24 max-w-4xl mx-auto">
             <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-100 dark:border-indigo-800/50"
             >
              JOIN OUR TEAM
             </motion.div>
             <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[27px] md:text-[33px] font-black text-slate-900 dark:text-white mb-6 tracking-tight"
             >
                We are Hiring !!
             </motion.h1>
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-6 text-lg text-slate-500 dark:text-slate-400 font-medium"
             >
                <p>
                  The promise of doing fun, meaningful, creative work that we can be proud of is what us all get out of our beds in the morning, even when it means waking up right in the middle of that recurring dream where we fly through outer space with a unicorn headed man. If working and playing with a bunch of smart, lovable goofballs sounds like fun, get in touch and let us know what you'd bring to the table.
                </p>
                <div className="p-8 bg-indigo-50 dark:bg-indigo-900/10 rounded-3xl border border-indigo-100 dark:border-indigo-800/30 text-left">
                  <h3 className="text-indigo-600 dark:text-indigo-400 font-black text-sm uppercase tracking-widest mb-4">What do we bring to the table?</h3>
                  <p className="text-sm leading-relaxed italic">
                    Friendly environment, flexible working hours, performance perks, and oh yeah, we have snacks. Lots of snacks. Sweet snacks, savory snacks. You name it, we snack it.
                  </p>
                </div>
             </motion.div>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 gap-8 mb-32">
             <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight flex items-center gap-3">
               <Briefcase className="h-6 w-6 text-indigo-600" />
               Latest Vacancies
             </h2>
             {jobVacancies.map((job, i) => (
                <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 15 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-500 transition-all group"
                >
                   <div className="flex flex-col md:flex-row justify-between gap-6 mb-8 items-start">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{job.title}</h3>
                        <div className="flex flex-wrap gap-4">
                           <div className="flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-black uppercase tracking-widest bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-700">
                              <Clock className="h-3 w-3" />
                              Exp: {job.experience}
                           </div>
                           <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">
                              <MapPin className="h-3 w-3" />
                              Remote / Hybrid
                           </div>
                        </div>
                      </div>
                      <a href="#apply-form" className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-100 dark:shadow-none">
                         Apply Now
                         <ArrowRight className="h-4 w-4" />
                      </a>
                   </div>

                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm">
                      <div className="space-y-6">
                        {job.guiSkills && (
                          <div>
                            <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2">GUI Skills</div>
                            <p className="text-slate-600 dark:text-slate-300 font-bold leading-relaxed">{job.guiSkills}</p>
                          </div>
                        )}
                        {job.devSkills && (
                          <div>
                            <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2">Developer Skills</div>
                            <p className="text-slate-600 dark:text-slate-300 font-bold leading-relaxed">{job.devSkills}</p>
                          </div>
                        )}
                        {job.testingSkills && (
                          <div>
                            <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2">Testing Skills</div>
                            <p className="text-slate-600 dark:text-slate-300 font-bold leading-relaxed">{job.testingSkills}</p>
                          </div>
                        )}
                        <div>
                          <div className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2">Description</div>
                          <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic">{job.description}</p>
                        </div>
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <div className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] mb-4">Key Responsibilities</div>
                        <ul className="space-y-3">
                          {job.responsibilities.split(', ').map((res, idx) => (
                            <li key={idx} className="flex gap-3 text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                              <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              {res}
                            </li>
                          ))}
                        </ul>
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>

          <div id="apply-form" className="max-w-4xl mx-auto">
             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-8 lg:p-16 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-2xl shadow-indigo-200/20 dark:shadow-none relative overflow-hidden"
             >
                <div className="relative z-10">
                  <div className="text-center mb-12">
                    <h2 className="text-[27px] md:text-[33px] font-black text-slate-900 dark:text-white mb-4 tracking-tight">Job Application</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Ready to grow with us? Tell us about yourself.</p>
                  </div>

                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 ml-1">Name*</label>
                        <input type="text" required className="w-full px-5 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 outline-none dark:text-white font-medium transition-all" placeholder="Enter Full Name" />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 ml-1">Email*</label>
                        <input type="email" required className="w-full px-5 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 outline-none dark:text-white font-medium transition-all" placeholder="your@email.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 ml-1">Contact Number*</label>
                        <input type="tel" required className="w-full px-5 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 outline-none dark:text-white font-medium transition-all" placeholder="+1 (555) 000-0000" />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 ml-1">Job Profile*</label>
                        <select required className="w-full px-5 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 outline-none dark:text-white font-medium appearance-none transition-all cursor-pointer">
                          <option value="" disabled selected>Select Profile*</option>
                          {jobVacancies.map(j => <option key={j.title} value={j.title.toLowerCase().replace(/ /g, '-')}>{j.title}</option>)}
                          <option value="other">Other - General Application</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-end mb-2 ml-1">
                        <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Message* (Max 500 characters)</label>
                        <span className={`text-[10px] font-black ${charCount > 500 ? 'text-red-500' : 'text-slate-400'}`}>{charCount} / 500</span>
                      </div>
                      <textarea 
                        required 
                        rows={5} 
                        maxLength={500}
                        onChange={(e) => setCharCount(e.target.value.length)}
                        className="w-full px-5 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 outline-none dark:text-white resize-none font-medium transition-all" 
                        placeholder="Why do you want to join our team of smart, lovable goofballs?"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 ml-1">Upload Resume*</label>
                      <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-[2.5rem] bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer group">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-10 h-10 text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 transition-colors mb-3" />
                          <p className="text-sm text-slate-500 dark:text-slate-400 font-bold mb-1">Click to upload or drag and drop</p>
                          <p className="text-xs text-slate-400 dark:text-slate-500">PDF, DOC, DOCX (Max 5MB)</p>
                        </div>
                        <input type="file" required className="hidden" accept=".pdf,.doc,.docx" />
                      </label>
                    </div>

                    <button type="submit" className="w-full px-8 py-5 bg-indigo-600 text-white rounded-[2rem] text-sm font-black uppercase tracking-[0.2em] hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 dark:shadow-none flex items-center justify-center gap-4 group">
                       SEND APPLICATION
                       <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                </div>
             </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
