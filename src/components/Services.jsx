import React from 'react';
import { Bot, Cog, Code2 } from 'lucide-react';

const ServiceCard = ({ Icon, title, description }) => (
  <div className="group rounded-2xl border border-slate-200/20 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors">
    <div className="flex items-center gap-3">
      <span className="inline-flex items-center justify-center rounded-xl bg-indigo-500/20 p-3 text-indigo-300">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-slate-200">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="servizi" className="relative w-full py-16 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Servizi di Sviluppo AI, Automazione e Web
          </h1>
          <p className="mt-3 text-slate-300">
            Soluzioni su misura per digitalizzare, automatizzare e potenziare la tua azienda con l'Intelligenza Artificiale.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            Icon={Bot}
            title="Sviluppo Agenti AI"
            description="Progettazione e addestramento di assistenti virtuali e agenti AI personalizzati per task specifici, dal customer care all'analisi dati. Implementazione RAG per basi di conoscenza private."
          />
          <ServiceCard
            Icon={Cog}
            title="Automazione Processi (Make/n8n)"
            description="Ottimizzazione dei workflow aziendali. Integrazione di API e servizi, creazione di scenari Make e workflow custom su n8n, con manutenzione continua."
          />
          <ServiceCard
            Icon={Code2}
            title="Sviluppo Web App & Tools"
            description="Dashboard, tool interni e applicazioni web con frontend in TypeScript/JS e backend robusti in Python (FastAPI). Integrazione con database moderni come Supabase."
          />
        </div>

        <div className="mt-12 grid gap-6">
          <h2 className="text-2xl md:text-3xl font-bold">Cosa Posso Fare Per Te</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-200">
            <ul className="space-y-2">
              <li className="leading-relaxed">Agenti AI e Assistenti Virtuali avanzati</li>
              <li className="leading-relaxed">Implementazione RAG per risposte contestualizzate</li>
              <li className="leading-relaxed">Addestramento specifico su dominio</li>
            </ul>
            <ul className="space-y-2">
              <li className="leading-relaxed">Integrazione API (CRM, ERP, Google Workspace)</li>
              <li className="leading-relaxed">Scenari complessi su Make</li>
              <li className="leading-relaxed">Workflow custom su n8n</li>
              <li className="leading-relaxed">Ottimizzazione automazioni esistenti</li>
            </ul>
            <ul className="space-y-2">
              <li className="leading-relaxed">Sviluppo Full-Stack (TS/JS + Python)</li>
              <li className="leading-relaxed">Integrazione Database (Supabase, SQL/NoSQL)</li>
              <li className="leading-relaxed">Tool interni e dashboard dati</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Hai un progetto in mente?</h2>
          <p className="mt-2 text-slate-300">Discutiamo di come automazione e AI generativa possono risolvere le tue sfide.</p>
          <a
            href="#contatti"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-400 transition-colors px-5 py-3 text-base font-semibold shadow-lg shadow-indigo-500/20"
          >
            Richiedi una Consulenza Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
