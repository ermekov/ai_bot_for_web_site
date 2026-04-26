import { Bot, Cable, DatabaseZap } from 'lucide-react';
import { integrations, stats } from '../data/siteData.js';
import AnimatedCard from './AnimatedCard.jsx';
import SectionHeader from './SectionHeader.jsx';

const accentClass = {
  cyan: 'from-cyan-300/25 to-blue-400/10 text-cyan-100 border-cyan-200/20',
  green: 'from-emerald-300/[0.24] to-cyan-300/10 text-emerald-100 border-emerald-200/20',
  violet: 'from-violet-400/[0.24] to-fuchsia-300/10 text-violet-100 border-violet-200/20',
};

function Integrations() {
  return (
    <section className="section-padding bg-white/[0.025]">
      <div className="container">
        <SectionHeader
          eyebrow="Интеграции"
          title="Бот соединяет ваши каналы, таблицы, CRM и автоматизации в одну систему"
          text="Можно начать с одного канала, а затем добавлять новые точки контакта и процессы без полной переделки логики."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.86fr] lg:items-center">
          <AnimatedCard className="glass-panel relative overflow-hidden rounded-[34px] p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_38%)]" aria-hidden="true" />
            <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="col-span-2 flex min-h-[150px] flex-col items-center justify-center rounded-[28px] border border-cyan-200/20 bg-cyan-300/10 text-center sm:col-span-4">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-300 to-violet-400 text-slate-950 shadow-glow">
                  <Bot className="h-8 w-8" aria-hidden="true" />
                </div>
                <p className="text-lg font-semibold text-white">Ядро AI-ассистента</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">Единая логика ответов, заявок и передачи данных</p>
              </div>

              {integrations.map((integration) => {
                const Icon = integration.icon;
                return (
                  <div
                    key={integration.title}
                    className={`min-h-[112px] rounded-[24px] border bg-gradient-to-br p-4 ${accentClass[integration.accent]}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                    <p className="mt-4 text-sm font-semibold">{integration.title}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedCard>

          <div className="space-y-4">
            <AnimatedCard className="rounded-[26px] border border-white/10 bg-white/[0.055] p-6 shadow-soft backdrop-blur-xl">
              <Cable className="mb-5 h-7 w-7 text-cyan-100" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-white">Гибкая архитектура</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Если сегодня нужен Telegram и Google Sheets, можно начать с них. Когда появится CRM или n8n-сценарий,
                бот можно подключить к новому процессу.
              </p>
            </AnimatedCard>
            <AnimatedCard className="rounded-[26px] border border-white/10 bg-white/[0.055] p-6 shadow-soft backdrop-blur-xl">
              <DatabaseZap className="mb-5 h-7 w-7 text-mintGlow" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-white">Данные не остаются в переписке</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Заявки можно сразу структурировать: источник, имя, телефон, интерес, комментарий и статус обработки.
              </p>
            </AnimatedCard>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedCard
              key={stat.value}
              delay={index * 0.05}
              className="rounded-[26px] border border-white/10 bg-slate-950/[0.55] p-6 shadow-soft backdrop-blur-xl"
            >
              <p className="gradient-text text-4xl font-semibold">{stat.value}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{stat.label}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{stat.text}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Integrations;
