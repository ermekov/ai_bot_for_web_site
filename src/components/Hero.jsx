import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { contactLinks, trustPoints } from '../data/siteData.js';
import ChatPreview from './ChatPreview.jsx';

function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="top" className="overflow-hidden bg-premium-radial pb-20 pt-32 sm:pt-36 lg:min-h-screen lg:pb-24">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={prefersReducedMotion ? false : 'hidden'}
          animate="visible"
          transition={{ staggerChildren: prefersReducedMotion ? 0 : 0.12 }}
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-mintGlow shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
            AI-ассистенты для малого и среднего бизнеса
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="max-w-4xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="gradient-text">AI-бот для бизнеса</span>, который отвечает клиентам и собирает заявки 24/7
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            Подключим умного AI-ассистента к Telegram, WhatsApp или Instagram, чтобы он консультировал клиентов,
            отвечал на вопросы и передавал заявки вам в таблицу или CRM.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href={contactLinks.demo}
              target="_blank"
              rel="noreferrer"
              whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 px-7 py-4 text-base font-semibold text-slate-950 shadow-glow transition hover:shadow-violet"
            >
              Попробовать демо
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.08] px-7 py-4 text-base font-semibold text-white backdrop-blur-xl transition hover:border-cyan-200/40 hover:bg-white/[0.12]"
            >
              Получить консультацию
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.text}
                  className="flex min-h-[64px] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-slate-200 backdrop-blur-xl"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-mintGlow" aria-hidden="true" />
                  <span>{point.text}</span>
                  <Icon className="ml-auto hidden h-4 w-4 shrink-0 text-cyan-100/70 sm:block" aria-hidden="true" />
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: 34, scale: 0.98 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-tr from-cyan-400/20 via-violet-400/[0.16] to-emerald-300/[0.16] blur-3xl" aria-hidden="true" />
          <ChatPreview />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
