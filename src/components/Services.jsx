import React from 'react';
import { Bot, Cog, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ Icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay }}
    className="group rounded-xl border border-slate-200/15 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors shadow-sm hover:shadow-blue-500/10 hover:shadow-lg"
  >
    <div className="flex items-center gap-3">
      <span className="inline-flex items-center justify-center rounded-lg bg-blue-500/15 p-3 text-blue-300 ring-1 ring-inset ring-blue-500/20 group-hover:ring-blue-500/40 transition">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-slate-200">{description}</p>
  </motion.div>
);

const Services = () => {
  return (
    <section id="servizi" className="relative w-full py-16 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-6 relative">
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
            delay={0}
          />
          <ServiceCard
            Icon={Cog}
            title="Automazione Processi (Make/n8n)"
            description="Ottimizzazione dei workflow aziendali. Integrazione di API e servizi, creazione di scenari Make e workflow custom su n8n, con manutenzione continua."
            delay={0.08}
          />
          <ServiceCard
            Icon={Code2}
            title="Sviluppo Web App & Tools"
            description="Dashboard, tool interni e applicazioni web con frontend in TypeScript/JS e backend robusti in Python (FastAPI). Integrazione con database moderni come Supabase."
            delay={0.16}
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
            className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-400 transition-colors px-5 py-3 text-base font-semibold shadow-lg shadow-blue-500/20 ring-1 ring-transparent hover:ring-blue-400/30"
          >
            Richiedi una Consulenza Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
