import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { Download } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-8 px-6 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl relative"
        >
          {/* Background Shade for Name */}
          <div className="absolute top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Status Indicator */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-green-900/50 bg-green-900/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono tracking-widest text-green-500 uppercase">
              {personalInfo.status}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-normal mb-4 text-glow relative z-10 whitespace-nowrap font-f1-bold">
            {personalInfo.fullName}
          </h1>
          
          <h2 className="text-sm md:text-base font-bold text-primary tracking-wide mb-1 uppercase">
            {personalInfo.position}
          </h2>
          
          <p className="text-xs font-mono text-muted mb-8 opacity-80">
            Computer Science & Engineering Student
          </p>


          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a 
              href={personalInfo.resumeUrl}
              download
              className="group flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-white text-sm font-bold tracking-wider rounded-xl hover:bg-red-600 transition-colors duration-300"
            >
              <span className="whitespace-nowrap">DOWNLOAD RESUME</span>
              <Download size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a 
              href="#projects"
              className="flex items-center justify-center px-6 py-3 border border-[#333] bg-[#0a0a0a] text-text text-sm font-bold tracking-wider rounded-xl hover:border-primary transition-all duration-300"
            >
              <span className="whitespace-nowrap">VIEW PROJECTS</span>
            </a>
            <a 
              href="#contact"
              className="flex items-center justify-center px-6 py-3 border border-[#333] bg-[#0a0a0a] text-text text-sm font-bold tracking-wider rounded-xl hover:border-primary transition-all duration-300"
            >
              <span className="whitespace-nowrap">GET IN TOUCH</span>
            </a>
          </div>

        </motion.div>

        {/* Right Content / Profile Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-5/12 lg:w-5/12 mt-12 md:mt-0 flex justify-end"
        >
          {/* Profile Data Box */}
          <div className="w-full relative bg-[#0a0a0a] border-y border-r border-[#222] border-l-2 border-l-primary rounded-l-xl rounded-r-md p-6 shadow-[0_0_15px_rgba(225,6,0,0.05)] hover:shadow-[0_0_20px_rgba(225,6,0,0.15)] group transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm font-mono text-muted tracking-widest uppercase">PROFILE DATA</span>
              </div>
              <div className="w-6 h-6 rounded-full border border-[#333] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Computer Science & Engineering undergraduate (2027 batch) with hands-on experience in software development, AI/ML, cloud computing, and DevOps. Passionate about building intelligent and scalable solutions through Machine Learning, Deep Learning, Generative AI, and LLM-based applications. Skilled in RAG, cloud infrastructure, automation, and modern development tools, with a focus on applying technology to solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-text mb-1">{personalInfo.cgpa.split(' ')[0]}</span>
                <span className="text-[10px] font-mono text-muted uppercase tracking-widest">CGPA</span>
              </div>

              <div className="flex flex-col">
                <span className="text-3xl font-bold text-text mb-1">{personalInfo.expectedGraduation}</span>
                <span className="text-[10px] font-mono text-muted uppercase tracking-widest">GRADUATION</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
