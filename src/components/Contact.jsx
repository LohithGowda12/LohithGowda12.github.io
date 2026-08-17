import React from 'react';
import { motion } from 'framer-motion';
import { contactLinks, personalInfo } from '../data/portfolio';
import { Mail, MessageCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const iconMap = {
  Email: Mail,
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  WhatsApp: MessageCircle,
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-f1-bold tracking-widest uppercase mb-4">
          <span className="text-white">Get In </span>
          <span className="text-primary text-glow">Touch</span>
        </h2>
        <div className="w-12 h-1 bg-primary mb-8 shadow-[0_0_10px_rgba(225,6,0,0.8)]"></div>
        
        <div className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
          <p>Actively seeking opportunities in software engineering, full stack and DevOps.</p>
          <p className="mt-2">let's talk</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 w-full">
        {contactLinks.map((link, index) => {
          const IconComponent = iconMap[link.channel] || Mail;
          return (
            <motion.a
              key={link.channel}
              href={link.action}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col p-4 bg-[#0a0a0a] border-y border-r border-[#222] border-l-2 border-l-primary rounded-l-xl rounded-r-md hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="border border-primary rounded-md p-1.5 text-primary w-fit mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                <IconComponent size={16} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-0.5">
                  {link.channel}
                </span>
                <span className="text-sm font-bold text-white tracking-wide group-hover:text-primary transition-colors">
                  {link.displayed}
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center"
      >
        <a 
          href={personalInfo.resumeUrl}
          download
          className="px-8 py-3 bg-primary rounded-md text-white font-bold tracking-widest text-sm hover:bg-red-600 transition-colors duration-300 shadow-[0_0_20px_rgba(225,6,0,0.4)] hover:shadow-[0_0_25px_rgba(225,6,0,0.5)]"
        >
          DOWNLOAD RESUME
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
