import { motion } from 'motion/react';
import { 
  Cloud, Calculator, CreditCard, FileJson, 
  RefreshCcw, CheckCircle2, Zap, Globe,
  Shield, Database, Wallet, Receipt
} from 'lucide-react';

interface IntegrationsIllustrationProps {
  type: 'distributors' | 'tax' | 'payments' | 'accounting';
}

export const IntegrationsIllustration = ({ type }: IntegrationsIllustrationProps) => {
  return (
    <div className="relative w-full h-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 bg-indigo-500 rounded-full blur-[100px]"
      />

      {type === 'distributors' && (
        <div className="relative z-10 w-full flex flex-col items-center justify-center p-8">
          <div className="relative flex items-center justify-center">
            {/* Central App Hub */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: ["0 0 0px rgba(79, 70, 229, 0)", "0 0 30px rgba(79, 70, 229, 0.2)", "0 0 0px rgba(79, 70, 229, 0)"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-24 h-24 bg-indigo-600 rounded-[2rem] flex items-center justify-center text-white z-20 shadow-2xl"
            >
              <Zap className="w-10 h-10" />
            </motion.div>

            {/* Orbiting Distributors */}
            {[Cloud, Globe, Database].map((Icon, i) => (
              <div key={i} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{
                    rotate: 360
                  }}
                  transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 border border-dashed border-indigo-200 dark:border-indigo-800 rounded-full flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                    className="absolute p-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 text-indigo-400 pointer-events-auto"
                    style={{
                      transform: `rotate(${i * 120}deg) translateX(96px) rotate(-${i * 120}deg)`
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                </motion.div>
              </div>
            ))}

            {/* Connection Streaks */}
            <svg className="absolute inset-0 w-[300px] h-[300px] pointer-events-none overflow-visible">
              {[0, 120, 240].map((angle, i) => {
                const r = 96;
                const x = Math.cos((angle * Math.PI) / 180) * r;
                const y = Math.sin((angle * Math.PI) / 180) * r;
                return (
                  <motion.circle
                    key={i}
                    cx={`calc(50% + ${x}px)`}
                    cy={`calc(50% + ${y}px)`}
                    r="3"
                    className="fill-indigo-400"
                    animate={{ 
                      cx: ["50%", `calc(50% + ${x}px)`, "50%"],
                      cy: ["50%", `calc(50% + ${y}px)`, "50%"],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                  />
                );
              })}
            </svg>
          </div>
          
          <div className="mt-16 flex items-center gap-3 bg-white/50 dark:bg-slate-800/50 px-4 py-2 rounded-full border border-white dark:border-slate-700">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Disti-API Connected</span>
          </div>
        </div>
      )}

      {type === 'tax' && (
        <div className="relative z-10 w-full flex flex-col items-center justify-center p-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-[280px] bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-2xl p-6 overflow-hidden"
          >
            {/* Tax Form Shell */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-500 rounded-lg text-white">
                  <Calculator className="w-5 h-5" />
                </div>
                <div className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight">Avalara Sync</div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <RefreshCcw className="w-3 h-3 text-slate-300" />
              </motion.div>
            </div>

            <div className="space-y-4">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl group transition-all hover:bg-emerald-50 dark:hover:bg-emerald-900/10">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-16 bg-slate-200 dark:bg-slate-800 rounded-full" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Floating Shield */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-2 -right-2 p-3 bg-indigo-600 rounded-2xl text-white shadow-xl"
            >
              <Shield className="w-6 h-6" />
            </motion.div>
          </motion.div>
          
          <div className="mt-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Compliance Verified</div>
        </div>
      )}

      {type === 'payments' && (
        <div className="relative z-10 w-full flex flex-col items-center justify-center p-8">
          {/* Card Stack */}
          <div className="relative w-64 h-40">
            <motion.div
              animate={{ x: -10, y: 10, rotate: -5 }}
              className="absolute inset-0 bg-slate-900 rounded-[2rem] border border-slate-800 shadow-xl p-6"
            >
              <div className="flex justify-between items-start opacity-20">
                <div className="w-10 h-6 bg-slate-800 rounded" />
                <div className="w-12 h-4 bg-slate-800 rounded" />
              </div>
            </motion.div>
            
            <motion.div
              animate={{ x: 10, y: -10, rotate: 2 }}
              className="absolute inset-0 bg-indigo-600 rounded-[2rem] border border-indigo-500 shadow-2xl p-6 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <CreditCard className="w-10 h-10 text-white/50" />
                <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Premium Card</div>
              </div>
              <div>
                <div className="flex gap-2 mb-4">
                  {[0,1,2,3].map(i => <div key={i} className="w-8 h-1.5 bg-white/20 rounded-full" />)}
                </div>
                <div className="flex justify-between items-center">
                  <div className="h-2 w-20 bg-white/40 rounded-full" />
                  <div className="w-8 h-5 bg-amber-400 rounded-lg" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating UI Elements */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mt-8 p-4 bg-white dark:bg-slate-800 rounded-[1.5rem] shadow-xl border border-emerald-100 dark:border-emerald-900/50 flex items-center gap-4"
          >
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Transaction</div>
              <div className="text-sm font-black text-slate-900 dark:text-white">Successful</div>
            </div>
          </motion.div>

          <div className="absolute top-10 right-10">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-lg text-indigo-600"
            >
              <Wallet className="w-5 h-5" />
            </motion.div>
          </div>
        </div>
      )}

      {type === 'accounting' && (
        <div className="relative z-10 w-full flex flex-col items-center justify-center p-12">
          <div className="grid grid-cols-2 gap-4 w-full max-w-[320px]">
             {/* Main Sync Card */}
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="col-span-2 p-6 bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-xl"
             >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                      <FileJson className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-black text-slate-900 dark:text-white uppercase">Ledger Hub</div>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="p-1.5 bg-slate-50 dark:bg-slate-900 rounded-lg"
                  >
                    <RefreshCcw className="w-3 h-3 text-indigo-600" />
                  </motion.div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-full bg-indigo-500"
                    />
                  </div>
                  <div className="flex justify-between text-[8px] font-black text-slate-400 uppercase tracking-widest">
                    <span>Syncing Data</span>
                    <span>98%</span>
                  </div>
                </div>
             </motion.div>

             {/* Smaller Info Cards */}
             <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-lg text-center"
             >
                <Receipt className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
                <div className="h-1.5 w-8 bg-slate-100 dark:bg-slate-900 rounded-full mx-auto" />
             </motion.div>

             <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="p-4 bg-slate-900 rounded-2xl border border-slate-800 shadow-lg text-center"
             >
                <Database className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
                <div className="h-1.5 w-8 bg-slate-800 rounded-full mx-auto" />
             </motion.div>
          </div>
          
          <div className="mt-8 flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-100 dark:border-indigo-800/50 text-[9px] font-black uppercase tracking-widest">
             <Zap className="w-3 h-3" />
             Tally & QuickBooks Integrated
          </div>
        </div>
      )}
    </div>
  );
};
