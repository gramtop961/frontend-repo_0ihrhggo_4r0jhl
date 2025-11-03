import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', consent: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.consent) return;

    const mailto = new URL('mailto:nicolasmicolani1@gmail.com');
    const subject = `Richiesta: ${form.subject}`;
    const body = `Nome: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0AMessaggio:%0D%0A${encodeURIComponent(form.message)}`;
    mailto.searchParams.set('subject', subject);
    mailto.searchParams.set('body', body);
    window.location.href = mailto.toString();
  };

  return (
    <section id="contatti" className="w-full py-16 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Contattami</h1>
          <p className="mt-3 text-slate-300">
            Hai un'idea per un progetto AI? Vuoi automatizzare un processo aziendale? Scrivimi.
          </p>
          <p className="mt-1 text-slate-400 text-sm">
            Compila il modulo per richiedere una consulenza o un preventivo. Rispondo entro 24 ore lavorative.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-slate-200/20 bg-white/5 backdrop-blur-sm p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-900/60 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">Email Aziendale</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-900/60 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none px-4 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="subject">Oggetto</label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={form.subject}
              onChange={handleChange}
              placeholder="Es. Consulenza AI, Sviluppo Make, Preventivo Web App"
              className="w-full rounded-lg bg-slate-900/60 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">Il tuo messaggio</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-900/60 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none px-4 py-2"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              checked={form.consent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-slate-700 text-indigo-500 focus:ring-indigo-500"
            />
            <label htmlFor="consent" className="text-sm text-slate-300">
              Acconsento al trattamento dei dati personali (GDPR).
            </label>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={!form.consent}
              className="w-full md:w-auto inline-flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors px-6 py-3 text-base font-semibold shadow-lg shadow-indigo-500/20"
            >
              Invia Richiesta
            </button>
          </div>

          <p className="text-xs text-slate-400">
            Suggerimento: per un invio più affidabile, è possibile collegare questo modulo a un servizio come Formspree o Netlify Forms.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
