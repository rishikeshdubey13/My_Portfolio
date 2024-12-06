import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const technologies = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Next.js',
    'Tailwind CSS',
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-[#0a192f]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="flex items-center gap-2 text-3xl font-bold text-[#ccd6f6] mb-8">
          <span className="text-[#64ffda]">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-[#8892b0] space-y-4">
            <p>
              Hello! My name is Rishi and I enjoy creating things that live on the internet.
              My interest in web development started back in 2015 when I decided to try
              editing custom Tumblr themes — turns out hacking together a custom reblog
              button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a student-led
              design studio.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative group">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
                alt="Profile"
                className="rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg transform translate-x-5 translate-y-5 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}