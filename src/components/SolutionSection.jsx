import { ArrowRight, ShieldCheck } from 'lucide-react';
import { solutions } from '../data/siteData.js';
import AnimatedCard from './AnimatedCard.jsx';
import SectionHeader from './SectionHeader.jsx';

function SolutionSection() {
  return (
    <section className="section-padding bg-white/[0.025]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            align="left"
            eyebrow="Решение"
            title="AI-бот берет на себя первичную коммуникацию и доводит клиента до заявки"
            text="Он не заменяет ваш бизнес-процесс. Он закрывает самый болезненный участок: быстрый ответ, понятная консультация и аккуратная передача заявки туда, где работает ваша команда."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <AnimatedCard
                  key={solution.title}
                  delay={index * 0.05}
                  className={`glass-panel rounded-[26px] p-6 ${index === 0 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-violet-400/20 text-cyan-100 ring-1 ring-white/10">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{solution.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{solution.text}</p>
                </AnimatedCard>
              );
            })}
          </div>
        </div>

        <AnimatedCard className="mt-12 overflow-hidden rounded-[30px] border border-cyan-200/[0.15] bg-gradient-to-r from-cyan-300/[0.12] via-violet-400/[0.12] to-emerald-300/10 p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mintGlow/[0.15] text-mintGlow ring-1 ring-mintGlow/25">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Подходит для реальных продаж, а не только для FAQ</h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300">
                  Бот уточняет потребность, собирает контакты и передает менеджеру уже структурированную заявку.
                </p>
              </div>
            </div>
            <a
              href="#pricing"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.15]"
            >
              Посмотреть тарифы
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}

export default SolutionSection;
