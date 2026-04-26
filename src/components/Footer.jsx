import { Bot } from 'lucide-react';
import { contactLinks, navLinks } from '../data/siteData.js';

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/70 py-10">
      <div className="container grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <a href="#top" className="focus-ring inline-flex items-center gap-3 rounded-full">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/[0.35] bg-cyan-300/10">
              <Bot className="h-5 w-5 text-cyan-200" aria-hidden="true" />
            </span>
            <span className="text-lg font-semibold">AI Assistant</span>
          </a>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            AI-боты для бизнеса: консультации, автоответы, сбор заявок и интеграции с мессенджерами, таблицами и CRM.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Разделы</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="focus-ring rounded-md transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Контакты</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <a href={contactLinks.telegram} target="_blank" rel="noreferrer" className="focus-ring rounded-md transition hover:text-white">
              Telegram: @eeermekov
            </a>
            <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer" className="focus-ring rounded-md transition hover:text-white">
              WhatsApp: +7 708 989 8191
            </a>
            <a href={contactLinks.demo} target="_blank" rel="noreferrer" className="focus-ring rounded-md transition hover:text-white">
              Демо-бот в Telegram
            </a>
          </div>
        </div>
      </div>

      <div className="container mt-9 border-t border-white/10 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} AI Assistant. AI-боты для бизнеса в Казахстане и СНГ.
      </div>
    </footer>
  );
}

export default Footer;
