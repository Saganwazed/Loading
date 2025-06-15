import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Newsletter from './components/Newsletter';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Newsletter />
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center text-slate-400 border-t border-slate-800">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          © 2025 Sagan Chowdhury. Building the future, one model at a time.
        </motion.p>
      </footer>
    </div>
  );
}

export default App;