import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors relative h-10 w-10 overflow-hidden group border border-slate-200 dark:border-slate-700 shadow-sm"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{
          y: isDark ? -40 : 0,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </motion.div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{
          y: isDark ? 0 : 40,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute inset-0 flex items-center justify-center text-indigo-400"
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </motion.div>
    </button>
  );
}
