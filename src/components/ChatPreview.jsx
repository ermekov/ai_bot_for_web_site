import { motion, useReducedMotion } from 'framer-motion';
import { Bot, CheckCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { chatMessages, quickReplies } from '../data/siteData.js';

function ChatPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="glass-panel relative mx-auto h-[650px] max-w-[520px] overflow-hidden rounded-[34px] p-4 shadow-soft sm:h-[680px] sm:p-5">
      <div className="absolute left-10 top-8 h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-12 right-6 h-32 w-32 rounded-full bg-violet-400/20 blur-3xl" aria-hidden="true" />

      <div className="relative flex h-full flex-col rounded-[26px] border border-white/10 bg-slate-950/60">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-400 text-slate-950">
              <Bot className="h-6 w-6" aria-hidden="true" />
              <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-mintGlow" />
            </div>
            <div>
              <p className="font-semibold text-white">AI Assistant</p>
              <div className="mt-1 flex items-center gap-2 text-xs text-mintGlow">
                <span className="h-1.5 w-1.5 rounded-full bg-mintGlow" />
                онлайн, отвечает сейчас
              </div>
            </div>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-slate-200 sm:flex sm:items-center sm:gap-2">
            <ShieldCheck className="h-4 w-4 text-cyan-200" aria-hidden="true" />
            CRM готова
          </div>
        </div>

        <div className="flex-1 space-y-3 overflow-hidden px-4 py-5 sm:px-5">
          {chatMessages.map((message, index) => {
            const isBot = message.author === 'bot';
            return (
              <motion.div
                key={`${message.text}-${index}`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.42, delay: prefersReducedMotion ? 0 : index * 0.18, ease: 'easeOut' }}
                className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[84%] rounded-3xl px-4 py-3 text-sm leading-6 shadow-soft ${
                    isBot
                      ? 'rounded-bl-md border border-white/10 bg-white/[0.09] text-slate-100'
                      : 'rounded-br-md bg-gradient-to-br from-cyan-300 to-blue-500 text-slate-950'
                  }`}
                >
                  {message.text}
                  {!isBot && (
                    <span className="mt-1 flex justify-end">
                      <CheckCheck className="h-3.5 w-3.5 text-slate-800/70" aria-hidden="true" />
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 1.72, duration: 0.35 }}
            className="flex items-center gap-2 pl-2 text-xs text-slate-400"
          >
            <span className="flex h-8 items-center gap-1 rounded-full border border-white/10 bg-white/[0.08] px-3">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-200" />
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-200 [animation-delay:120ms]" />
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-200 [animation-delay:240ms]" />
            </span>
            AI печатает
          </motion.div>
        </div>

        <div className="border-t border-white/10 p-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                type="button"
                className="focus-ring rounded-full border border-white/10 bg-white/[0.08] px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-200/[0.35] hover:bg-cyan-300/10 hover:text-white"
              >
                {reply}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-sm text-slate-400">
            <Sparkles className="h-4 w-4 text-cyan-200" aria-hidden="true" />
            Клиентский вопрос обрабатывается ботом
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPreview;
