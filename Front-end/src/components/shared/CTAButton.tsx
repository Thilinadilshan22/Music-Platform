import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/components/ui/utils';

const ctaButtonVariants = cva(
  'relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 shadow-lg w-full sm:w-auto',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:shadow-purple-500/30',
        secondary: 'bg-white/90 backdrop-blur-xl text-slate-900 border-2 border-white/60 hover:bg-white hover:shadow-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ctaButtonVariants> {
  children: React.ReactNode;
}

export function CTAButton({ children, variant, className, ...props }: CTAButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Button
        className={cn(ctaButtonVariants({ variant, className }))}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}