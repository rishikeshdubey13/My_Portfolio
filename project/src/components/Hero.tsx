import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 bg-[#0a192f]">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#64ffda]"
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-7xl font-bold text-[#ccd6f6]"
          >
            Rishi Developer.
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-6xl font-bold text-[#8892b0]"
          >
            I build things for the web.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-lg text-[#8892b0] text-lg"
          >
            I'm a software engineer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 mt-8 border-2 border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
            >
              Check out my work <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}