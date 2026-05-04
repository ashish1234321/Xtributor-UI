import { motion } from 'motion/react';
import { 
  Cloud, Zap, Shield, Settings, BarChart, Server, 
  Database, Layers, ShoppingCart, ShoppingBag, 
  CreditCard, FileText, Calculator, Globe, 
  Users, Layout, Activity, Search
} from 'lucide-react';

interface HeroIllustrationProps {
  index: number;
}

export const HeroIllustration = ({ index }: HeroIllustrationProps) => {
  // Define themes for each slide
  const themes = [
    { primary: 'bg-indigo-500', secondary: 'bg-violet-500', accent: 'bg-blue-400' }, // Hyper-Growth
    { primary: 'bg-emerald-500', secondary: 'bg-indigo-500', accent: 'bg-teal-400' }, // Marketplace
    { primary: 'bg-amber-500', secondary: 'bg-indigo-500', accent: 'bg-orange-400' }, // Hyper-Automation
    { primary: 'bg-indigo-600', secondary: 'bg-purple-500', accent: 'bg-pink-400' }, // Single Window
  ];

  const currentTheme = themes[index] || themes[0];

  // Define labels for each slide
  const statusLabels = [
    'Cloud-Automation Ready',
    'Marketplace Active',
    'Automation In-Sync',
    'System Unified',
  ];

  return (
    <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden rounded-[3rem] bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-inner">
      {/* Dynamic Mesh Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -top-20 -left-20 w-[400px] h-[400px] ${currentTheme.primary} opacity-[0.15] dark:opacity-[0.2] rounded-full blur-[100px]`}
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className={`absolute -bottom-20 -right-20 w-[500px] h-[500px] ${currentTheme.secondary} opacity-[0.1] dark:opacity-[0.15] rounded-full blur-[100px]`}
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className={`absolute inset-0 bg-transparent`}
        />
        
        {/* Subtle Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.2] dark:opacity-[0.1]" 
          style={{ 
            backgroundImage: 'radial-gradient(#6366f1 0.8px, transparent 0.8px)', 
            backgroundSize: '32px 32px' 
          }} 
        />
      </div>

      {index === 0 && (
        <div className="relative z-10 w-full max-w-lg">
          {/* Central Core - Transforming */}
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-48 h-48 border-2 border-dashed border-indigo-200 dark:border-indigo-800 rounded-full flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 bg-indigo-600 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-indigo-800 opacity-50" />
                <Cloud className="w-16 h-16 text-white relative z-10" />
                
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 p-2"
                >
                  <Zap className="w-6 h-6 text-amber-300" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Orbiting Elements */}
            {[
              { icon: Database, delay: 0, scale: 0.8, x: -140, y: -40, color: 'text-slate-400' },
              { icon: Layers, delay: 0.5, scale: 1, x: 140, y: 60, color: 'text-indigo-400' },
              { icon: BarChart, delay: 1, scale: 0.9, x: -100, y: 120, color: 'text-indigo-500' },
              { icon: Shield, delay: 1.5, scale: 0.7, x: 120, y: -100, color: 'text-emerald-400' },
              { icon: Settings, delay: 2, scale: 1.1, x: 0, y: -160, color: 'text-indigo-600' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: item.scale,
                  y: [item.y, item.y - 15, item.y],
                  x: [item.x, item.x + 5, item.x]
                }}
                transition={{ 
                  delay: item.delay,
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.5 }
                }}
                className={`absolute p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 ${item.color}`}
              >
                <item.icon className="w-6 h-6" />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {index === 1 && (
        <div className="relative z-10 w-full max-w-lg">
          {/* Marketplace Illustration */}
          <div className="relative h-64 bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-2xl overflow-hidden mx-auto max-w-[340px]">
            {/* Header */}
            <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="flex-1 max-w-[150px] h-6 bg-slate-50 dark:bg-slate-900 rounded-full mx-4 flex items-center px-3 border border-slate-100 dark:border-slate-800">
                <Search className="w-3 h-3 text-slate-400 mr-2" />
                <div className="w-12 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full" />
              </div>
              <ShoppingCart className="w-4 h-4 text-indigo-600" />
            </div>

            {/* Product Cards Grid */}
            <div className="p-4 grid grid-cols-2 gap-4">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl"
                >
                  <div className="w-full aspect-square bg-white dark:bg-slate-800 rounded-lg mb-2 shadow-sm flex items-center justify-center">
                    {i % 2 === 0 ? <Cloud className="w-6 h-6 text-indigo-400" /> : <ShoppingBag className="w-6 h-6 text-emerald-400" />}
                  </div>
                  <div className="h-2 w-12 bg-slate-200 dark:bg-slate-700 rounded-full mb-1" />
                  <div className="h-1.5 w-8 bg-indigo-100 dark:bg-indigo-900 rounded-full" />
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                x: [0, 20, 0],
                y: [0, -10, 0]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-20 right-4 p-3 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-indigo-50 dark:border-indigo-900/50"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-indigo-50 dark:bg-indigo-900/50 rounded-lg">
                  <Zap className="w-3 h-3 text-indigo-600" />
                </div>
                <div>
                  <div className="text-[8px] font-black uppercase text-slate-400">Syncing</div>
                  <div className="text-[10px] font-black text-slate-900 dark:text-white">Price Lists</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* External Components */}
          <div className="mt-8 flex justify-center gap-4">
            {[Globe, Globe, Globe].map((Icon, i) => (
              <motion.div
                key={i}
                animate={{ scale: [0.9, 1, 0.9] }}
                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center justify-center"
              >
                <Icon className="w-6 h-6 text-slate-300" />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {index === 2 && (
        <div className="relative z-10 w-full max-w-lg px-8">
          {/* Hyper-Automation Illustration */}
          <div className="grid grid-cols-2 gap-6">
            {/* Payment Section */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700"
            >
              <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <div className="h-2 w-16 bg-slate-100 dark:bg-slate-900 rounded-full mb-2" />
              <div className="h-3 w-10 bg-slate-900 dark:text-white font-black text-sm">$499</div>
              
              <div className="mt-4 flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div 
                    key={i}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ delay: i * 0.2, repeat: Infinity }}
                    className="h-1 flex-1 bg-emerald-500 rounded-full" 
                  />
                ))}
              </div>
              <div className="mt-2 text-[8px] font-black text-emerald-600 uppercase">Paid Instantly</div>
            </motion.div>

            {/* Tax Section */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="p-6 bg-slate-900 dark:bg-slate-950 rounded-3xl shadow-xl border border-slate-800"
            >
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-4">
                <Calculator className="w-6 h-6" />
              </div>
              <div className="text-[10px] font-black text-slate-400 uppercase mb-1">Ava-Tax Auto</div>
              <div className="text-xl font-bold text-white mb-2 tracking-tight">Syncing...</div>
              <div className="space-y-1.5">
                <div className="h-1 w-full bg-slate-800 rounded-full" />
                <div className="h-1 w-2/3 bg-slate-800 rounded-full" />
              </div>
            </motion.div>

            {/* QuickBooks Syncing */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="col-span-2 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900 rounded-xl flex items-center justify-center text-indigo-600">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900 dark:text-white">QuickBooks Sync</div>
                  <div className="text-[10px] text-slate-400">Inventory updated</div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Settings className="w-4 h-4 text-slate-300" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}

      {index === 3 && (
        <div className="relative z-10 w-full max-w-lg">
          {/* Unified Dashboard Illustration */}
          <div className="relative flex flex-col items-center">
            {/* Central Dashboard Hub */}
            <motion.div
              animate={{ 
                boxShadow: ["0 0 0px rgba(79, 70, 229, 0)", "0 0 40px rgba(79, 70, 229, 0.2)", "0 0 0px rgba(79, 70, 229, 0)"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-48 h-48 bg-white dark:bg-slate-800 rounded-[3rem] border border-slate-100 dark:border-slate-700 shadow-2xl flex flex-col items-center justify-center p-6 relative z-20"
            >
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg">
                <Layout className="w-6 h-6" />
              </div>
              <div className="h-2 w-24 bg-slate-100 dark:bg-slate-900 rounded-full mb-2" />
              <div className="h-2 w-16 bg-slate-100 dark:bg-slate-900 rounded-full" />
              
              {/* Inner Stats */}
              <div className="mt-4 grid grid-cols-2 gap-2 w-full">
                <div className="h-6 bg-slate-50 dark:bg-slate-900 rounded-lg" />
                <div className="h-6 bg-slate-50 dark:bg-slate-900 rounded-lg" />
              </div>
            </motion.div>

            {/* Connection Nodes */}
            {[
              { icon: Users, angle: 0, r: 140 },
              { icon: Database, angle: 72, r: 140 },
              { icon: Cloud, angle: 144, r: 140 },
              { icon: Globe, angle: 216, r: 140 },
              { icon: Activity, angle: 288, r: 140 }
            ].map((node, i) => {
              const x = Math.cos((node.angle * Math.PI) / 180) * node.r;
              const y = Math.sin((node.angle * Math.PI) / 180) * node.r;
              
              return (
                <div key={i} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {/* Connection Line */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${x}px)`}
                      y2={`calc(50% + ${y}px)`}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="text-slate-200 dark:text-slate-800"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: i * 0.2, duration: 1 }}
                    />
                    <motion.circle
                      cx={`calc(50% + ${x}px)`}
                      cy={`calc(50% + ${y}px)`}
                      r="2"
                      className="fill-indigo-500"
                      animate={{ 
                        offset: [0, 100],
                        cx: ["50%", `calc(50% + ${x}px)`],
                        cy: ["50%", `calc(50% + ${y}px)`],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 0.5,
                        ease: "linear"
                      }}
                    />
                  </svg>

                  {/* Icon Node */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute p-4 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 text-slate-400"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    <node.icon className="w-5 h-5" />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Shared Elements Tooltips */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute top-8 left-8"
      >
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700 shadow-sm">
          <div className={`w-1.5 h-1.5 rounded-full ${index === 2 ? 'bg-amber-500' : index === 1 ? 'bg-emerald-500' : 'bg-indigo-600'}`} />
          <span className="text-[8px] font-black uppercase text-slate-500">{statusLabels[index] || 'Analytics Active'}</span>
        </div>
      </motion.div>
    </div>
  );
};
