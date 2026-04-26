import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Loader2, MessageCircle, Send, ShieldCheck } from 'lucide-react';
import { contactLinks } from '../data/siteData.js';
import { submitLead } from '../services/leadApi.js';
import AnimatedCard from './AnimatedCard.jsx';
import SectionHeader from './SectionHeader.jsx';

const initialForm = {
  name: '',
  phone: '',
  businessType: '',
  message: '',
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');
  const prefersReducedMotion = useReducedMotion();

  const isSuccess = status === 'success';
  const isLoading = status === 'loading';

  const validationRules = useMemo(
    () => ({
      name: 'Введите имя',
      phone: 'Введите телефон',
      businessType: 'Укажите тип бизнеса',
      message: 'Коротко опишите задачу',
    }),
    [],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitError('');
    if (status === 'success') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = Object.entries(validationRules).reduce((acc, [field, message]) => {
      if (!form[field].trim()) {
        acc[field] = message;
      }
      return acc;
    }, {});

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('idle');
      return;
    }

    setStatus('loading');
    setSubmitError('');

    try {
      await submitLead(form);
      setStatus('success');
      setForm(initialForm);
    } catch (error) {
      setStatus('idle');
      setSubmitError(
        error.message === 'LEAD_WEBHOOK_NOT_CONFIGURED'
          ? 'Форма еще не подключена к Google Sheets. Напишите нам в Telegram или WhatsApp.'
          : 'Не удалось отправить заявку. Попробуйте еще раз или напишите нам в Telegram.',
      );
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <SectionHeader
          eyebrow="Контакты"
          title="Расскажите о бизнесе, и мы предложим сценарий AI-бота"
          text="Можно написать напрямую в Telegram или WhatsApp, либо оставить заявку через форму. Для подключения к Google Sheets или backend форма уже отделена логически."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <AnimatedCard className="rounded-[28px] border border-cyan-200/[0.18] bg-cyan-300/10 p-6 shadow-soft backdrop-blur-xl">
              <Send className="mb-5 h-7 w-7 text-cyan-100" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-white">Telegram</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Быстрый способ обсудить задачу, каналы, сроки и интеграции.
              </p>
              <a
                href={contactLinks.telegram}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950"
              >
                Написать в Telegram
                <Send className="h-4 w-4" aria-hidden="true" />
              </a>
            </AnimatedCard>

            <AnimatedCard className="rounded-[28px] border border-emerald-200/[0.18] bg-emerald-300/10 p-6 shadow-soft backdrop-blur-xl">
              <MessageCircle className="mb-5 h-7 w-7 text-mintGlow" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-white">WhatsApp</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Удобно, если хотите сразу отправить голосовое, сайт или пример переписки.
              </p>
              <a
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.08] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.12]"
              >
                Написать в WhatsApp
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
            </AnimatedCard>

            <AnimatedCard className="rounded-[28px] border border-white/10 bg-white/[0.055] p-6 shadow-soft backdrop-blur-xl">
              <ShieldCheck className="mb-5 h-7 w-7 text-violet-200" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-white">Что подготовить</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Список услуг, частые вопросы, цены, ссылки на каналы и куда нужно передавать заявки.
              </p>
            </AnimatedCard>
          </div>

          <AnimatedCard className="glass-panel rounded-[32px] p-6 sm:p-8">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Имя"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Ваше имя"
                  autoComplete="name"
                />
                <Field
                  label="Телефон"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="+7 ..."
                  autoComplete="tel"
                />
              </div>

              <Field
                label="Тип бизнеса"
                name="businessType"
                value={form.businessType}
                onChange={handleChange}
                error={errors.businessType}
                placeholder="Например: салон красоты, магазин, курсы"
              />

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-200">Сообщение</span>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Какие каналы нужно подключить и куда передавать заявки?"
                  className={`focus-ring w-full resize-none rounded-2xl border bg-white/[0.07] px-4 py-3 text-sm text-white placeholder:text-slate-500 ${
                    errors.message ? 'border-red-300/50' : 'border-white/[0.12]'
                  }`}
                />
                {errors.message && <span className="mt-2 block text-sm text-red-200">{errors.message}</span>}
              </label>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={prefersReducedMotion || isLoading ? undefined : { y: -2, scale: 1.01 }}
                whileTap={prefersReducedMotion || isLoading ? undefined : { scale: 0.98 }}
                className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 px-6 py-4 font-semibold text-slate-950 shadow-glow disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                    Отправляем заявку
                  </>
                ) : (
                  <>
                    Получить консультацию
                    <Send className="h-5 w-5" aria-hidden="true" />
                  </>
                )}
              </motion.button>

              {isSuccess && (
                <motion.p
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  className="rounded-2xl border border-emerald-200/25 bg-emerald-300/10 px-4 py-3 text-sm font-semibold text-emerald-100"
                >
                  Заявка принята! Мы свяжемся с вами в ближайшее время.
                </motion.p>
              )}

              {submitError && (
                <motion.p
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  className="rounded-2xl border border-red-200/25 bg-red-300/10 px-4 py-3 text-sm font-semibold text-red-100"
                >
                  {submitError}
                </motion.p>
              )}
            </form>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-200">{label}</span>
      <input
        {...props}
        className={`focus-ring w-full rounded-2xl border bg-white/[0.07] px-4 py-3 text-sm text-white placeholder:text-slate-500 ${
          error ? 'border-red-300/50' : 'border-white/[0.12]'
        }`}
      />
      {error && <span className="mt-2 block text-sm text-red-200">{error}</span>}
    </label>
  );
}

export default Contact;
