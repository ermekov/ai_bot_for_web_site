import { steps } from '../data/siteData.js';
import AnimatedCard from './AnimatedCard.jsx';
import SectionHeader from './SectionHeader.jsx';

function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="Как работает"
          title="От идеи до работающего AI-бота за понятные этапы"
          text="Сначала разбираемся в вашем бизнесе, затем создаем сценарий, подключаем каналы и запускаем бота на реальных клиентах."
        />

        <div className="relative mt-14 grid gap-4 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-cyan-300/0 via-cyan-300/40 to-violet-400/0 lg:block" aria-hidden="true" />
          {steps.map((step, index) => (
            <AnimatedCard
              key={step.number}
              delay={index * 0.06}
              className="relative rounded-[26px] border border-white/10 bg-slate-950/[0.55] p-6 shadow-soft backdrop-blur-xl"
            >
              <div className="mb-8 inline-flex rounded-2xl border border-cyan-200/20 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{step.text}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
