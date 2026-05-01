import { motion } from 'motion/react';

export default function Loader() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background soft glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] -z-10"
      />

      <div className="relative flex flex-col items-center">
        {/* Animated Logo Container */}
        <div className="relative mb-8">
          {/* The Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: [0.95, 1.05, 0.95],
              opacity: 1 
            }}
            transition={{ 
              opacity: { duration: 0.5 },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative z-10"
          >
            <img 
              src="https://xtributor.com/AppGallop2.0_API/file/2_1776152935712.png"
              alt="Xtributor Logo"
              className="h-12 w-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Animated Loading Bar */}
        <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden mb-4">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-full bg-gradient-to-r from-transparent via-indigo-600 to-transparent"
          />
        </div>

        {/* Text Animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">
            Xtributor Cloud
          </span>
          <motion.span 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[9px] font-bold text-indigo-500 mt-1 uppercase tracking-widest"
          >
            Loading Ecosystem...
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
