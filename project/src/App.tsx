import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { SocialLinks } from './components/SocialLinks';

function App() {
  return (
    <div className="bg-[#0a192f] text-white">
      <Header />
      <SocialLinks />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;