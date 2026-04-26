import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { contactLinks, pricingPlans } from '../data/siteData.js';
import AnimatedCard from './AnimatedCard.jsx';
import SectionHeader from './SectionHeader.jsx';

function Pricing() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="Тарифы"
          title="Прозрачная стоимость запуска AI-бота под ваш бизнес"
          text="Цена включает сценарий, базу знаний, подключение канала, интеграцию заявок и тестирование перед запуском."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {pricingPlans.map((plan, index) => (
            <AnimatedCard
              key={plan.title}
              delay={index * 0.08}
              className={`relative overflow-hidden rounded-[32px] p-7 shadow-soft sm:p-8 ${
                plan.featured
                  ? 'border border-cyan-200/30 bg-gradient-to-b from-cyan-300/[0.16] via-white/[0.075] to-white/[0.045]'
                  : 'border border-white/10 bg-white/[0.055]'
              }`}
            >
              {plan.featured && (
                <div className="absolute right-6 top-6 rounded-full border border-cyan-200/25 bg-cyan-300/[0.12] px-4 py-2 text-xs font-semibold text-cyan-100">
                  Лучший старт
                </div>
              )}
              <div className="flex min-h-[146px] flex-col justify-between">
                <div>
                  <h3 className="pr-24 text-2xl font-semibold text-white sm:pr-0">{plan.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{plan.subtitle}</p>
                </div>
                <div className="mt-7">
                  <p className="text-5xl font-semibold text-white">{plan.price}</p>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mintGlow" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.01 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className={`focus-ring mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold ${
                  plan.featured
                    ? 'bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 text-slate-950 shadow-glow'
                    : 'border border-white/[0.12] bg-white/[0.08] text-white hover:bg-white/[0.12]'
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </motion.a>
            </AnimatedCard>
          ))}
        </div>

        <AnimatedCard className="mt-10 overflow-hidden rounded-[34px] border border-violet-200/[0.18] bg-gradient-to-r from-violet-400/[0.16] via-cyan-300/[0.12] to-emerald-300/[0.12] p-7 sm:p-9">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-cyan-100 ring-1 ring-white/[0.12]">
                <Sparkles className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Попробуйте демо-бот прямо сейчас</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  Откройте Telegram-бота и посмотрите, как AI-ассистент отвечает клиентам в реальном диалоге.
                </p>
              </div>
            </div>
            <motion.a
              href={contactLinks.demo}
              target="_blank"
              rel="noreferrer"
              whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-50"
            >
              Открыть Telegram-бота
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </motion.a>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}

export default Pricing;
