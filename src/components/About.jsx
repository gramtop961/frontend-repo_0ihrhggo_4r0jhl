import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="chi-sono" className="w-full py-16 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight"
        >
          Chi è Nicolas Micolani
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.6 }}
          className="mt-4 text-slate-200 leading-relaxed"
        >
          Ciao, sono Nicolas. Sono uno sviluppatore e consulente specializzato nell'intersezione tra Intelligenza Artificiale Generativa e Sviluppo Software.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-slate-200 leading-relaxed"
        >
          La mia missione è aiutare le aziende a non "subire" l'innovazione, ma a cavalcarla. Credo che la vera potenza dell'AI non stia nei grandi modelli teorici, ma nella loro applicazione pratica per risolvere problemi reali: automatizzare un task noioso, dare risposte immediate a un cliente o analizzare dati in modi prima impossibili.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-3 text-slate-200 leading-relaxed"
        >
          Con un background solido nello sviluppo web tradizionale (Python, TypeScript) e una specializzazione verticale su piattaforme di automazione (Make, n8n) e architetture AI (RAG, Agenti), offro un profilo ibrido capace di gestire un progetto dalla consulenza iniziale fino alla messa in produzione.
        </motion.p>

        <div className="mt-8">
          <h2 className="text-2xl md:text-3xl font-bold">Il Mio Stack Tecnologico</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-6 text-sm text-slate-200">
            <div className="rounded-lg border border-slate-700/50 p-4 bg-slate-900/60">
              <h3 className="font-semibold text-white">AI & Automazione</h3>
              <ul className="mt-2 space-y-1">
                <li>Python (LangChain, LlamaIndex)</li>
                <li>Make, n8n</li>
                <li>Addestramento Agenti, RAG</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-700/50 p-4 bg-slate-900/60">
              <h3 className="font-semibold text-white">Sviluppo Web (Full-Stack)</h3>
              <ul className="mt-2 space-y-1">
                <li>TypeScript, JavaScript</li>
                <li>HTML5, CSS3, Node.js</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-700/50 p-4 bg-slate-900/60">
              <h3 className="font-semibold text-white">Backend & Database</h3>
              <ul className="mt-2 space-y-1">
                <li>Python (FastAPI, Flask)</li>
                <li>Supabase, PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
