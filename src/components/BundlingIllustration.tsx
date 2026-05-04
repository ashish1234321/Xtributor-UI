import { motion } from 'motion/react';
import { 
  Box, Plus, Cloud, Zap, 
  TrendingUp, Shield, Layers,
  Package, CheckCircle2, DollarSign
} from 'lucide-react';

export const BundlingIllustration = () => {
  return (
    <div className="relative w-full h-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[100px]"
      />

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Bundling Action Area */}
        <div className="relative flex items-center justify-center h-64 w-full">
          {/* Main Bundle Box */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              boxShadow: ["0 20px 50px rgba(79, 70, 229, 0.1)", "0 30px 70px rgba(79, 70, 229, 0.2)", "0 20px 50px rgba(79, 70, 229, 0.1)"]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-40 h-40 bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 flex items-center justify-center relative z-20 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent dark:from-indigo-900/10" />
            <Package className="w-16 h-16 text-indigo-600" />
            
            {/* Success Indicators within box */}
            <motion.div
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-4 right-4"
            >
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            </motion.div>
          </motion.div>

          {/* Individual SaaS Products Flying In */}
          {[
            { icon: Cloud, label: "Azure", x: -140, y: -60, color: "text-blue-500", delay: 0 },
            { icon: Shield, label: "Security", x: 140, y: -40, color: "text-emerald-500", delay: 0.5 },
            { icon: Layers, label: "SaaS App", x: -120, y: 80, color: "text-violet-500", delay: 1 },
            { icon: DollarSign, label: "Billing", x: 120, y: 100, color: "text-amber-500", delay: 1.5 }
          ].map((item, i) => (
            <div key={i} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ opacity: 0, x: item.x * 1.5, y: item.y * 1.5 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  x: [item.x * 1.5, item.x, 0],
                  y: [item.y * 1.5, item.y, 0],
                  scale: [1, 1, 0.5]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: item.delay,
                  ease: "easeInOut"
                }}
                className={`p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 pointer-events-auto ${item.color}`}
              >
                <item.icon className="w-6 h-6" />
              </motion.div>
              
              {/* Plus Symbols */}
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: item.delay + 1 }}
                className="absolute"
                style={{ transform: `translate(${item.x * 0.7}px, ${item.y * 0.7}px)` }}
              >
                <Plus className="w-4 h-4 text-slate-300" />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Growth Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 bg-indigo-900 rounded-3xl border border-indigo-500/30 p-6 shadow-2xl relative"
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300 mb-1">Revenue Impact</div>
              <div className="text-2xl font-black text-white">+42% AOV Growth</div>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="mt-4 h-1.5 w-full bg-indigo-950 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: ["0%", "85%"] }}
              transition={{ duration: 2, delay: 1.5 }}
              className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500"
            />
          </div>
        </motion.div>

        {/* Floating Tooltips */}
        <motion.div
          animate={{ x: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-10 left-10 p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl shadow-lg border border-white dark:border-slate-700"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3 text-amber-500" />
            <span className="text-[9px] font-black uppercase text-slate-500">Auto-Bundled</span>
          </div>
        </motion.div>
      </div>
      
      {/* Streaming Particles towards center */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            scale: 0.2,
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200
          }}
          animate={{ 
            opacity: [0, 1, 0],
            x: 0,
            y: 0,
            scale: [0.2, 1, 0.2]
          }}
          transition={{ 
            duration: 3 + Math.random() * 2, 
            repeat: Infinity, 
            delay: i * 0.5,
            ease: "linear"
          }}
          className="absolute w-1.5 h-1.5 bg-indigo-400 rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};
