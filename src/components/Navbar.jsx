import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Bot, Menu, X } from 'lucide-react';
import { contactLinks, navLinks } from '../data/siteData.js';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        hidden: { opacity: 0, y: -18 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -12 },
      };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-midnight/[0.72] backdrop-blur-2xl">
      <nav className="container flex h-20 items-center justify-between" aria-label="Основная навигация">
        <a href="#top" className="focus-ring flex items-center gap-3 rounded-full" aria-label="AI Assistant">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/[0.35] bg-cyan-300/10 shadow-glow">
            <Bot className="h-5 w-5 text-cyan-200" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-wide">AI Assistant</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <motion.a
            href={contactLinks.demo}
            target="_blank"
            rel="noreferrer"
            whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            className="focus-ring rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:shadow-violet"
          >
            Попробовать демо
          </motion.a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.08] text-white lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="container pb-5 lg:hidden"
          >
            <div className="glass-panel rounded-[28px] p-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="focus-ring block rounded-2xl px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={contactLinks.demo}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="focus-ring mt-3 block rounded-2xl bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 px-4 py-3 text-center font-semibold text-slate-950"
              >
                Попробовать демо
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
