import React from 'react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm font-mono text-muted uppercase tracking-wider">
        <div>
          &copy; {currentYear} {personalInfo.fullName}
        </div>
        <div>
          {personalInfo.location}
        </div>
        <div className="flex space-x-6">
          <a href="#home" className="hover:text-primary transition-colors">↑ BACK TO GRID</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
