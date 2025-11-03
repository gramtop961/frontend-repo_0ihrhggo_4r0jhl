import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle overlay to ensure text contrast over the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/80" />

      <div className="relative z-10 max-w-5xl px-6 mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Sviluppatore GenAI e Automazioni: Trasforma il tuo Business con l'Intelligenza Artificiale
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-200">
          Ciao, sono Nicolas Micolani. Sviluppo Agenti AI personalizzati, Automazioni intelligenti (Make/n8n) e Web App per ottimizzare i tuoi processi e creare nuovo valore.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#servizi"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-400 transition-colors px-5 py-3 text-sm sm:text-base font-semibold shadow-lg shadow-indigo-500/20"
          >
            Scopri i miei Servizi
          </a>
          <a
            href="#contatti"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 transition-colors px-5 py-3 text-sm sm:text-base font-semibold"
          >
            Contattami Ora
          </a>
        </div>

        <div className="mt-10 grid gap-6">
          <h2 className="text-2xl md:text-3xl font-bold">Dall'Idea all'Esecuzione: Soluzioni AI Complete</h2>
          <p className="text-slate-200 max-w-3xl mx-auto">
            Aiuto le aziende a sfruttare la potenza dell'Intelligenza Artificiale Generativa. Non mi limito a creare un prototipo: progetto, sviluppo e integro soluzioni complete. Dalla creazione di Agenti AI che usano RAG (Retrieval-Augmented Generation) per accedere ai tuoi dati, fino allo sviluppo di webapp performanti in Python e TypeScript che li rendono utilizzabili dal tuo team o dai tuoi clienti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
