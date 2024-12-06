import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Featured Project',
    name: 'Spotify Profile',
    description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800&h=500',
    tech: ['React', 'Node.js', 'Express', 'Spotify API'],
    github: 'https://github.com',
    external: 'https://example.com',
  },
  {
    title: 'Featured Project',
    name: 'AI Code Assistant',
    description: 'An AI-powered code assistant that helps developers write better code faster. Features include code completion, bug detection, and automated code reviews. Built with cutting-edge machine learning models.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=500',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    github: 'https://github.com',
    external: 'https://example.com',
  },
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-[#0a192f]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="flex items-center gap-2 text-3xl font-bold text-[#ccd6f6] mb-12">
          <span className="text-[#64ffda]">03.</span> Some Things I've Built
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative grid md:grid-cols-2 gap-8 ${
                index % 2 === 0 ? 'md:text-left' : 'md:text-right md:flex-row-reverse'
              }`}
            >
              <div className="relative group">
                <a href={project.external} target="_blank" rel="noopener noreferrer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#64ffda]/20 group-hover:bg-transparent transition-colors"></div>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </a>
              </div>

              <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                <p className="text-[#64ffda] text-sm mb-2">{project.title}</p>
                <h3 className="text-2xl font-bold text-[#ccd6f6] mb-4">{project.name}</h3>
                <p className="bg-[#112240] p-6 rounded-lg text-[#8892b0] mb-4">
                  {project.description}
                </p>
                <ul className={`flex flex-wrap gap-4 mb-8 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  {project.tech.map((tech) => (
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}