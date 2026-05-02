import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Top 3 Challenges for CSPs With Microsoft NCE (New Commerce Experience)",
    date: "February 11, 2026",
    excerpt: "In efforts to improve the Cloud Solution Provider (CSP) program, Microsoft has rolled out updates to the New...",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    slug: "microsoft-nce-challenges"
  },
  {
    title: "Full Guide: Microsoft Direct CSP to Indirect Reseller Journey",
    date: "February 01, 2026",
    excerpt: "Over the past few years, Microsoft has been updating its Cloud Solution Provider (CSP) program and changing...",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    slug: "direct-csp-to-indirect-reseller"
  },
  {
    title: "Top 8 Biggest Cloud Computing Trends to Watch in 2026",
    date: "January 13, 2026",
    excerpt: "What are the latest cloud computing trends in 2026 that are shaping the technology industry? What will...",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    slug: "cloud-computing-trends-2026"
  }
];

export const BlogSection = () => {
  return (
    <section className="py-32 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-indigo-100 dark:border-indigo-800/50"
            >
              Featured Posts
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[36px] md:text-[48px] font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight"
            >
              Latest From The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Xtributor Blog</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm ml-auto">
              Explore the blog posts for actionable tips, information, and impactful resources related to selling cloud services.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-slate-50/50 dark:bg-slate-900/50 rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800/50 hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl hover:shadow-indigo-100/50 dark:hover:shadow-none hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-500 flex flex-col h-full"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-4">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <button className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-[11px] font-black uppercase tracking-widest group/btn">
                    Read More 
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
