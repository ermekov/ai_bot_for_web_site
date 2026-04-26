import { motion, useReducedMotion } from 'framer-motion';

function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={align === 'left' ? 'max-w-3xl' : 'mx-auto max-w-3xl text-center'}
    >
      {eyebrow && (
        <p className="mb-4 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{text}</p>}
    </motion.div>
  );
}

export default SectionHeader;
