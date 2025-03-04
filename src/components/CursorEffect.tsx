import React from 'react';
import { motion } from 'framer-motion';

interface CursorEffectProps {
  position: { x: number; y: number };
}

const CursorEffect: React.FC<CursorEffectProps> = ({ position }) => {
  return (
    <>
      <motion.div
        className="cursor-glow bg-accent-1/30"
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          x: position.x,
          y: position.y,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}
      />
      <motion.div
        className="cursor-glow bg-accent-2/20"
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          x: position.x,
          y: position.y,
          scale: [1.2, 1.5, 1.2],
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
          delay: 0.1,
        }}
      />
    </>
  );
};

export default CursorEffect;