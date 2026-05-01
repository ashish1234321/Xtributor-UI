
import { motion } from 'motion/react';

interface OrbProps {
  className?: string;
  delay?: number;
  duration?: number;
  size?: string;
}

const Orb = ({ className = '', delay = 0, duration = 10, size = 'w-64 h-64' }: OrbProps) => (
  <motion.div
    initial={{ x: 0, y: 0, opacity: 0 }}
    animate={{ 
      x: [0, 50, -30, 0], 
      y: [0, 80, 40, 0],
      opacity: [0.1, 0.3, 0.2, 0.1]
    }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay 
    }}
    className={`absolute rounded-full blur-[100px] pointer-events-none ${size} ${className}`}
  />
);

export const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <Orb className="bg-indigo-600/20 top-[10%] left-[5%]" duration={15} />
      <Orb className="bg-emerald-600/10 bottom-[20%] right-[10%]" delay={2} duration={18} />
      <Orb className="bg-blue-600/10 top-[40%] right-[20%]" delay={5} duration={20} />
      <Orb className="bg-purple-600/10 bottom-[10%] left-[20%]" delay={3} duration={22} />
    </div>
  );
};
