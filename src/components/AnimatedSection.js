"use client"
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, delay = 0, className = "", direction = "up" }) => {
  const getInitial = () => {
    switch (direction) {
      case 'left': return { opacity: 0, x: -100, y: 0 };
      case 'right': return { opacity: 0, x: 100, y: 0 };
      case 'down': return { opacity: 0, y: -100, x: 0 };
      case 'up':
      default: return { opacity: 0, y: 100, x: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] // custom easeOutCubic
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
