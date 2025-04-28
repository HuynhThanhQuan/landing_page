import { ButtonProps } from '@/types';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export const Button = ({ children, className, onClick, variant = 'primary' }: ButtonProps) => {
  const baseStyle = 'px-6 py-2 rounded-lg font-medium transition-all duration-200';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyle, variants[variant], className)}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}; 