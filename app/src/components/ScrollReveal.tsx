import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
  staggerChildren?: number;
  centered?: boolean;
}

const variants = {
  hidden: (direction: string) => ({
    opacity: 0,
    x: direction === 'left' ? -20 : direction === 'right' ? 20 : 0,
    y: direction === 'up' ? 30 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
  },
};

const containerVariants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: {
      staggerChildren: stagger,
    },
  }),
};

const defaultEasing: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
  staggerChildren = 0,
  centered = false,
}: ScrollRevealProps) {
  const centerClass = centered ? 'text-center flex flex-col items-center' : '';
  if (staggerChildren > 0) {
    return (
      <motion.div
        className={`${className} ${centerClass}`}
        custom={staggerChildren}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`${className} ${centerClass}`}
      custom={direction}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: defaultEasing,
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({
  children,
  direction = 'up',
  className = '',
}: {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right';
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          x: direction === 'left' ? -20 : direction === 'right' ? 20 : 0,
          y: direction === 'up' ? 40 : 0,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.7,
            ease: defaultEasing,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
