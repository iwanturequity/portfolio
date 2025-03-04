import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', glowOnHover = false }) => {
  return (
    <motion.div
      className={`glass-card p-6 ${glowOnHover ? 'group glow' : ''} ${className}`}
      whileHover={{ scale: glowOnHover ? 1.02 : 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;