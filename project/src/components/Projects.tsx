import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const featuredProjects = projects.slice(0, 2);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-[#0a192f]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-center mb-12">
          <h2 className="flex items-center gap-2 text-3xl font-bold text-[#ccd6f6]">
            <span className="text-[#64ffda]">02.</span> Some Things I've Built
          </h2>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 text-[#64ffda] border-2 border-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="space-y-32">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative grid md:grid-cols-2 gap-8 ${
                index % 2 === 0 ? 'md:text-left' : 'md:text-right md:flex-row-reverse'
              }`}
            >
              <div className="relative group">
                <Link to={`/project/${project.id}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#64ffda]/20 group-hover:bg-transparent transition-colors"></div>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </Link>
              </div>

              <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                <p className="text-[#64ffda] text-sm mb-2">{project.title}</p>
                <h3 className="text-2xl font-bold text-[#ccd6f6] mb-4">{project.name}</h3>
                <p className="bg-[#112240] p-6 rounded-lg text-[#8892b0] mb-4">
                  {project.description}
                </p>
                <ul className={`flex flex-wrap gap-4 mb-8 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  {project.tech.slice(0, 4).map((tech) => (
                    <li key={tech} className="text-[#8892b0] text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ccd6f6] hover:text-[#64ffda]"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ccd6f6] hover:text-[#64ffda]"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-1 text-[#64ffda] hover:gap-2 transition-all"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}