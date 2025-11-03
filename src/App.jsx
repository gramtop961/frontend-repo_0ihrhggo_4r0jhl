import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 scroll-smooth">
      {/* Sticky navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur supports-backdrop-blur:bg-slate-950/70">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-white">Nicolas Micolani</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#servizi" className="hover:text-blue-400 transition-colors">Servizi</a>
            <a href="#chi-sono" className="hover:text-blue-400 transition-colors">Chi Sono</a>
            <a href="#contatti" className="hover:text-blue-400 transition-colors">Contatti</a>
          </nav>
          <a href="#contatti" className="sm:hidden inline-flex items-center justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold hover:bg-blue-400 shadow-md shadow-blue-500/20">Contatti</a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-slate-800/60 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Nicolas Micolani. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4">
            <a href="#servizi" className="hover:text-blue-400 transition-colors">Servizi</a>
            <a href="#chi-sono" className="hover:text-blue-400 transition-colors">Chi Sono</a>
            <a href="#contatti" className="hover:text-blue-400 transition-colors">Contatti</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
