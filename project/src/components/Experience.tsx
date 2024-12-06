import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Download } from 'lucide-react';

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: 'Tech Corp',
    position: 'Senior Software Engineer',
    duration: 'Jan 2022 - Present',
    description: [
      'Led a team of 5 developers in building a microservices architecture',
      'Improved application performance by 40% through code optimization',
      'Implemented CI/CD pipelines reducing deployment time by 60%'
    ]
  },
  {
    company: 'StartUp Inc',
    position: 'Full Stack Developer',
    duration: 'Mar 2020 - Dec 2021',
    description: [
      'Developed and maintained multiple React-based web applications',
      'Integrated third-party APIs and payment gateways',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    company: 'Digital Agency',
    position: 'Frontend Developer',
    duration: 'Jun 2018 - Feb 2020',
    description: [
      'Built responsive websites for various clients using React and TypeScript',
      'Collaborated with designers to implement pixel-perfect UI',
      'Reduced load time by 50% through optimization techniques'
    ]
  }
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 bg-[#0a192f]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="flex items-center gap-2 text-3xl font-bold text-[#ccd6f6] mb-12">
          <span className="text-[#64ffda]">02.</span> Where I've Worked
          <motion.a
            href="/public/Rishikesh_dubey_CV.pdf"
            download
            className="ml-auto flex items-center gap-2 px-4 py-2 text-sm border-2 border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <Download size={16} />
            Resume
          </motion.a>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-[#233554] hover:border-[#64ffda] transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0a192f] border-2 border-[#64ffda]" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-[#ccd6f6]">{exp.position}</h3>
                <span className="text-[#64ffda]">@ {exp.company}</span>
                <span className="text-[#8892b0] sm:ml-auto flex items-center gap-2">
                  <Briefcase size={16} />
                  {exp.duration}
                </span>
              </div>
              <ul className="space-y-2 text-[#8892b0]">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#64ffda] mt-1">▹</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}