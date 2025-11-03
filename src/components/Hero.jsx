import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-blocking overlay for contrast and depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/30 to-slate-950" />
      <div className="pointer-events-none absolute -inset-x-20 -top-32 h-72 opacity-50 blur-3xl bg-[radial-gradient(60%_50%_at_50%_50%,rgba(99,102,241,0.25),transparent_60%)]" />

      <div className="relative z-10 max-w-5xl px-6 mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
            Hyper-Modern AI & Automation
          </span>
          <span className="block text-slate-100 mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl">Soluzioni Tech Futuristiche per il tuo Business</span>
        </h1>
        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-200/90">
          Sono Nicolas Micolani. Progetto Agenti AI interattivi, automazioni Make/n8n e web app ad alte prestazioni. Minimalismo digitale, impatto reale.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#servizi"
            className="inline-flex items-center justify-center rounded-lg bg-blue-500/90 hover:bg-blue-400 transition-colors px-5 py-3 text-sm sm:text-base font-semibold shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] ring-1 ring-blue-400/30 hover:ring-blue-300/50"
          >
            Esplora i Servizi
          </a>
          <a
            href="#contatti"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700/80 hover:border-blue-500/60 hover:bg-white/5 transition-colors px-5 py-3 text-sm sm:text-base font-semibold"
          >
            Parliamo del tuo Progetto
          </a>
        </div>

        <div className="mt-10 grid gap-6">
          <h2 className="text-2xl md:text-3xl font-bold">Dall'Idea al Deploy: end‑to‑end</h2>
          <p className="text-slate-200/90 max-w-3xl mx-auto">
            Diamo vita a prodotti intelligenti: RAG su dati proprietari, agenti autonomi con tool e memorie, dashboard e workflow orchestrati. Design minimalista, performance massime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
