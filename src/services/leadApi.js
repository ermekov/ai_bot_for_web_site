const LEAD_WEBHOOK_URL = import.meta.env.VITE_LEAD_WEBHOOK_URL?.trim();

export async function submitLead(form) {
  if (!LEAD_WEBHOOK_URL) {
    throw new Error('LEAD_WEBHOOK_NOT_CONFIGURED');
  }

  const payload = {
    ...form,
    source: 'landing-page',
    page: window.location.href,
    submittedAt: new Date().toISOString(),
  };

  await fetch(LEAD_WEBHOOK_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });
}
