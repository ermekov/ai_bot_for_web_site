import { MessageCircle, Send } from 'lucide-react';
import { contactLinks } from '../data/siteData.js';

function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 sm:bottom-6 sm:right-6">
      <a
        href={contactLinks.telegram}
        target="_blank"
        rel="noreferrer"
        aria-label="Написать в Telegram"
        className="focus-ring flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200/25 bg-cyan-300/[0.15] text-cyan-100 shadow-glow backdrop-blur-xl transition hover:scale-105 hover:bg-cyan-300/[0.22] sm:h-14 sm:w-14"
      >
        <Send className="h-5 w-5" aria-hidden="true" />
      </a>
      <a
        href={contactLinks.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Написать в WhatsApp"
        className="focus-ring flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-200/25 bg-emerald-300/[0.15] text-emerald-100 shadow-glow backdrop-blur-xl transition hover:scale-105 hover:bg-emerald-300/[0.22] sm:h-14 sm:w-14"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </a>
    </div>
  );
}

export default FloatingCTA;
