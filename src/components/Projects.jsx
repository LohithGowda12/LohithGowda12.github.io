import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black tracking-widest uppercase mb-4">
          <span className="text-white">THINGS I'VE </span>
          <span className="text-primary text-glow">BUILT</span>
        </h2>
        <div className="w-12 h-[3px] bg-primary shadow-[0_0_10px_rgba(225,6,0,0.8)]"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            initial="hidden"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group project-card flex flex-col bg-card border-y border-r border-[#222] border-l-2 border-l-primary rounded-l-xl rounded-r-md hover:border-primary/50 transition-all duration-300 relative overflow-hidden h-full p-8 shadow-[0_0_15px_rgba(225,6,0,0.05)] hover:shadow-[0_0_20px_rgba(225,6,0,0.15)]"
          >
            {/* Project Number Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-4xl font-black text-muted/30 group-hover:text-primary/50 transition-colors">
                {project.id}
              </span>
              <h3 className="text-lg md:text-xl font-f1-bold text-text tracking-wide">{project.title.split(' — ')[0]}</h3>
            </div>
            
            <p className="text-muted leading-relaxed mb-6 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono border border-[#333] bg-[#111] rounded-md text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-auto pt-6 border-t border-[#222]">
              <a 
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 p-3 border border-[#333] bg-[#111] rounded-xl hover:border-primary hover:text-primary transition-all duration-300 w-full"
              >
                <FaGithub size={18} />
                <span className="font-bold tracking-wider text-sm">GITHUB</span>
              </a>
              
              {project.demo && project.demo !== "#" ? (
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 p-3 bg-primary text-white rounded-xl hover:bg-white hover:text-background transition-all duration-300 w-full font-bold tracking-wider text-sm"
                >
                  <ExternalLink size={18} />
                  <span>LIVE DEMO</span>
                </a>
              ) : (
                <button
                  disabled
                  className="flex items-center justify-center space-x-2 p-3 border border-[#333] bg-[#111] rounded-xl text-muted/50 cursor-not-allowed w-full font-bold tracking-wider text-sm"
                >
                  <ExternalLink size={18} />
                  <span>DEMO N/A</span>
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
