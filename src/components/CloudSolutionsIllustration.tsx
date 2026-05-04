import { motion } from 'motion/react';
import { 
  Database, Cloud, Layout, Zap, 
  Settings, Users, BarChart, Server,
  Table, Mail, Briefcase
} from 'lucide-react';

interface CloudSolutionsIllustrationProps {
  type: 'dynamics' | 'azure' | 'office';
}

export const CloudSolutionsIllustration = ({ type }: CloudSolutionsIllustrationProps) => {
  return (
    <div className="relative w-full h-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-indigo-500 rounded-full blur-[100px]"
      />

      {type === 'dynamics' && (
        <div className="relative z-10 w-full flex flex-col items-center gap-6 p-8">
          <div className="flex gap-4">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700"
            >
              <Database className="w-8 h-8 text-indigo-600" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700"
            >
              <Users className="w-8 h-8 text-emerald-500" />
            </motion.div>
          </div>
          
          {/* Automation Central */}
          <div className="relative">
            <div className="w-24 h-24 bg-indigo-600 rounded-[2rem] flex items-center justify-center shadow-2xl relative z-20">
              <Table className="w-10 h-10 text-white" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-white/30 rounded-[2rem]"
              />
            </div>
            {/* Syncing indicators */}
            <motion.div
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-white shadow-lg"
            >
              <Zap className="w-5 h-5" />
            </motion.div>
          </div>

          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white/50 dark:bg-slate-800/50 px-4 py-2 rounded-full border border-white dark:border-slate-700">
            ERP & CRM Flow
          </div>
        </div>
      )}

      {type === 'azure' && (
        <div className="relative z-10 w-full flex flex-col items-center justify-center p-8">
          <div className="relative">
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-40 h-40 border-2 border-dashed border-indigo-200 dark:border-indigo-800 rounded-full"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-24 h-24 bg-indigo-600 rounded-3xl shadow-2xl flex items-center justify-center"
              >
                <Cloud className="w-12 h-12 text-white" />
              </motion.div>
            </div>

            {/* Orbiting Nodes */}
            {[Server, Database, Settings].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center text-indigo-600"
                style={{
                  top: '50%',
                  left: '50%',
                  marginTop: '-24px',
                  marginLeft: '-24px',
                }}
                animate={{
                  x: [
                    Math.cos((i * 120) * Math.PI / 180) * 80,
                    Math.cos((i * 120 + 360) * Math.PI / 180) * 80
                  ],
                  y: [
                    Math.sin((i * 120) * Math.PI / 180) * 80,
                    Math.sin((i * 120 + 360) * Math.PI / 180) * 80
                  ]
                }}
                transition={{ duration: i === 1 ? 15 : 20, repeat: Infinity, ease: "linear" }}
              >
                <Icon className="w-5 h-5" />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 flex items-center gap-3">
             <div className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg text-[9px] font-black uppercase tracking-wider border border-emerald-100 dark:border-emerald-800/50">
               Auto-Provisioned
             </div>
          </div>
        </div>
      )}

      {type === 'office' && (
        <div className="relative z-10 w-full max-w-[280px] p-6 bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-2xl">
          {/* Simplified UI Shell */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="h-2 w-16 bg-slate-100 dark:bg-slate-700 rounded-full mb-1" />
              <div className="h-1.5 w-10 bg-slate-50 dark:bg-slate-900 rounded-full" />
            </div>
          </div>

          <div className="space-y-4">
            {[Zap, Briefcase, BarChart].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-white dark:bg-slate-800 rounded-lg text-indigo-400">
                    <Icon className="w-3 h-3" />
                  </div>
                  <div className="h-1.5 w-20 bg-slate-200 dark:bg-slate-800 rounded-full" />
                </div>
                <div className="h-1.5 w-8 bg-emerald-400/20 rounded-full" />
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 -right-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-indigo-100 dark:border-indigo-900 shadow-indigo-100/50 dark:shadow-none"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <div className="text-[10px] font-black uppercase text-slate-500">Subscription Active</div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
