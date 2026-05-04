import { motion } from 'motion/react';
import { 
  Cloud, Zap, CreditCard, ShoppingCart, 
  ArrowRight, Layers, Box, Globe
} from 'lucide-react';

export const AboutIllustration = () => {
  return (
    <div className="relative w-full aspect-[4/5] lg:aspect-[5/6] bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-800">
      {/* Background Pulse */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[100px]"
      />

      <div className="relative z-10 w-full px-8 flex flex-col items-center">
        {/* Top: Marketplace / Vendor Side */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-4 mb-12"
        >
          <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
            <ShoppingCart className="w-8 h-8 text-indigo-600" />
            <div className="mt-2 h-1.5 w-8 bg-slate-100 dark:bg-slate-700 rounded-full" />
          </div>
          <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
            <Box className="w-8 h-8 text-emerald-500" />
            <div className="mt-2 h-1.5 w-8 bg-slate-100 dark:bg-slate-700 rounded-full" />
          </div>
        </motion.div>

        {/* Center: The Xtributor Engine */}
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-48 h-48 border border-dashed border-indigo-300 dark:border-indigo-700 rounded-full flex items-center justify-center"
          >
            {/* Orbiting particles */}
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-indigo-400 rounded-full"
                style={{
                  transform: `rotate(${angle}deg) translateX(96px)`
                }}
              />
            ))}
          </motion.div>
          
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-24 h-24 bg-indigo-600 rounded-[2rem] shadow-2xl flex items-center justify-center relative shadow-indigo-500/50">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              <Zap className="w-10 h-10 text-white fill-white/20" />
              
              {/* Spinning Ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="44"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="20 150"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Cloud Resellers / Customer Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <div className="flex gap-4">
            <div className="p-4 bg-indigo-900 rounded-2xl shadow-xl border border-indigo-500/30 text-white">
              <Cloud className="w-8 h-8" />
            </div>
            <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
              <CreditCard className="w-8 h-8 text-violet-500" />
            </div>
          </div>
          
          <div className="flex items-center gap-3 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-100 dark:border-emerald-800/50">
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-emerald-500 rounded-full"
            />
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Automated & Syncing</span>
          </div>
        </motion.div>

        {/* Connecting Data Streaks */}
        <div className="absolute inset-0 pointer-events-none">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 500, opacity: [0, 1, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: i * 1.3,
                ease: "linear"
              }}
              className="absolute left-[20%] right-[20%] h-12 bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent blur-sm"
              style={{ left: `${20 + i * 30}%` }}
            />
          ))}
        </div>
      </div>

      {/* Floating Info Cards */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-12 p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl border border-white dark:border-slate-700 shadow-xl hidden md:block"
      >
        <div className="flex items-center gap-3">
          <Globe className="w-4 h-4 text-indigo-500" />
          <span className="text-[10px] font-black uppercase text-slate-400">Global Reach</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-12 p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl border border-white dark:border-slate-700 shadow-xl hidden md:block"
      >
        <div className="flex items-center gap-3">
          <Layers className="w-4 h-4 text-violet-500" />
          <span className="text-[10px] font-black uppercase text-slate-400">Multi-Disti API</span>
        </div>
      </motion.div>
    </div>
  );
};
