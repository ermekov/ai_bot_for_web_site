import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data/siteData.js';
import AnimatedCard from './AnimatedCard.jsx';
import SectionHeader from './SectionHeader.jsx';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="faq" className="section-padding bg-white/[0.025]">
      <div className="container">
        <SectionHeader
          eyebrow="FAQ"
          title="Частые вопросы перед запуском AI-бота"
          text="Коротко о сроках, каналах, заявках и поддержке после старта."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedCard key={item.question} delay={index * 0.03} hover={false} amount={0.1}>
                <div className="rounded-[24px] border border-white/10 bg-slate-950/[0.55] shadow-soft backdrop-blur-xl">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="focus-ring flex w-full items-center justify-between gap-5 rounded-[24px] px-5 py-5 text-left text-base font-semibold text-white sm:px-6"
                  >
                    <span>{item.question}</span>
                    <motion.span animate={prefersReducedMotion ? undefined : { rotate: isOpen ? 180 : 0 }}>
                      <ChevronDown className="h-5 w-5 text-cyan-100" aria-hidden="true" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                        animate={prefersReducedMotion ? undefined : { height: 'auto', opacity: 1 }}
                        exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-7 text-slate-300 sm:px-6">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
