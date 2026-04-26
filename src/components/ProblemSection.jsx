import { AlertTriangle } from 'lucide-react';
import { problems } from '../data/siteData.js';
import AnimatedCard from './AnimatedCard.jsx';
import SectionHeader from './SectionHeader.jsx';

function ProblemSection() {
  return (
    <section id="product" className="section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="Проблема"
          title="Заявки часто теряются не из-за рекламы, а из-за медленной обработки"
          text="Когда клиент уже написал вам, скорость ответа и понятная консультация напрямую влияют на шанс продажи."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <AnimatedCard
                key={problem.title}
                delay={index * 0.05}
                className="group min-h-[250px] rounded-[26px] border border-red-300/10 bg-gradient-to-b from-red-400/10 to-white/[0.045] p-6 shadow-soft backdrop-blur-xl transition hover:border-red-200/25"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-200/20 bg-red-300/10 text-red-100">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <AlertTriangle className="h-5 w-5 text-red-200/50 transition group-hover:text-red-100" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{problem.text}</p>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
