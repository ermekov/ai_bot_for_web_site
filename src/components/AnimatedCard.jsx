import { motion, useReducedMotion } from 'framer-motion';

function AnimatedCard({ children, className = '', delay = 0, hover = true, amount = 0.2 }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={!prefersReducedMotion && hover ? { y: -6, scale: 1.01 } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedCard;
