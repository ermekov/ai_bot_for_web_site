import { useCases } from '../data/siteData.js';
import AnimatedCard from './AnimatedCard.jsx';
import SectionHeader from './SectionHeader.jsx';

function UseCases() {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="Для каких ниш"
          title="AI-бот можно адаптировать под разные бизнесы в Казахстане и СНГ"
          text="Сценарий не универсальный для всех. Он собирается под вашу нишу, услуги, язык общения и реальные вопросы клиентов."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedCard
                key={item.title}
                delay={(index % 4) * 0.04}
                className="rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.075] to-white/[0.035] p-6 shadow-soft backdrop-blur-xl"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.08] text-mintGlow">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
