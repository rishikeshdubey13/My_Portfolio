import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export function AllProjects() {
  return (
    <div className="pt-20 bg-[#0a192f] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#64ffda] hover:text-[#8892b0] transition-colors mb-8"
        >
          ← Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-[#ccd6f6] mb-12">All Projects</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#112240] rounded-lg overflow-hidden hover:transform hover:translate-y-[-4px] transition-all duration-300"
              >
                <Link to={`/project/${project.id}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-[#64ffda]/20 group-hover:bg-transparent transition-colors"></div>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">{project.name}</h3>
                  <p className="text-[#8892b0] mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[#64ffda] text-sm px-2 py-1 rounded-full border border-[#64ffda]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <Link
                      to={`/project/${project.id}`}
                      className="ml-auto text-[#64ffda] hover:text-[#8892b0] transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}