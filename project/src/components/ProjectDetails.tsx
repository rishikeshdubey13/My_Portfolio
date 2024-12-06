import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a192f] text-[#8892b0]">
        Project not found
      </div>
    );
  }

  return (
    <div className="pt-20 bg-[#0a192f] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#64ffda] hover:text-[#8892b0] transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-[#ccd6f6] mb-4">{project.name}</h1>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#112240] text-[#64ffda] rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-[#8892b0] leading-relaxed">{project.longDescription}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
                >
                  <Github size={20} />
                  View Source
                </a>
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-[#ccd6f6] mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#8892b0]">
                    <span className="text-[#64ffda] mt-1">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#ccd6f6] mb-4">Technical Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#8892b0]">
                    <span className="text-[#64ffda] mt-1">▹</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#ccd6f6] mb-6">Screenshots</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={screenshot}
                    alt={`${project.name} screenshot ${index + 1}`}
                    className="rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}