import { features } from '../data/siteData.js';
import AnimatedCard from './AnimatedCard.jsx';
import SectionHeader from './SectionHeader.jsx';

function Features() {
  return (
    <section id="features" className="section-padding bg-white/[0.025]">
      <div className="container">
        <SectionHeader
          eyebrow="Возможности"
          title="Все нужное, чтобы AI-ассистент помогал продавать и не мешал процессам"
          text="Функции собраны вокруг практики: ответы клиентам, сбор контактов, передача заявок и контроль качества коммуникации."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedCard
                key={feature.title}
                delay={(index % 4) * 0.04}
                className="group rounded-[24px] border border-white/10 bg-white/[0.055] p-6 shadow-soft backdrop-blur-xl transition hover:border-cyan-200/25 hover:bg-white/[0.075]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/[0.18] to-violet-400/[0.18] text-cyan-100 ring-1 ring-white/10 transition group-hover:scale-105">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{feature.text}</p>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
