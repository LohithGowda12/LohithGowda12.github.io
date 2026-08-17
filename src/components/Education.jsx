import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { education } from '../data/portfolio';

const Education = () => {
  const containerRef = React.useRef(null);
  
  // Progressive scroll drawing for the red line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#1a1a1a]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-16"
      >

        <h2 className="text-4xl md:text-5xl font-black tracking-widest uppercase mb-4">
          <span className="text-white">EDUCATION </span>
          <span className="text-primary text-glow">JOURNEY</span>
        </h2>
        <div className="w-12 h-[3px] bg-primary shadow-[0_0_10px_rgba(225,6,0,0.8)]"></div>
      </motion.div>

      <div ref={containerRef} className="relative max-w-3xl mx-auto">
        {/* The Track (Background Line) */}
        <div className="absolute left-6 md:left-12 top-8 bottom-8 w-[2px] bg-primary/20"></div>
        
        {/* The Animated Red Line */}
        <motion.div 
          className="absolute left-6 md:left-12 top-8 w-[2px] bg-primary z-10 origin-top shadow-[0_0_10px_rgba(225,6,0,0.8)]"
          style={{ height: lineHeight }}
        ></motion.div>

        <div className="flex flex-col space-y-8 py-8">
          {education.map((item, index) => {
            // Extract the end year for the tag
            let endYear = "";
            if (item.period.includes("–")) endYear = item.period.split("–")[1].trim();
            else if (item.period.includes("-")) endYear = item.period.split("-")[1].trim();
            else endYear = item.period;
            
            const tag1Text = item.round === "ROUND 02" ? `Expected ${endYear}` : endYear;

            return (
              <div key={item.round} className="relative flex items-start w-full">
                
                {/* Year Marker / Dot with Ring */}
                <div className="absolute left-6 md:left-12 top-8 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                  {/* Outer Ring */}
                  <div className="absolute w-8 h-8 rounded-full border border-primary/50 shadow-[0_0_15px_rgba(225,6,0,0.3)]"></div>
                  {/* Inner Dot */}
                  <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(225,6,0,1)]"></div>
                </div>
                
                {/* Content Box */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="ml-16 md:ml-24 w-full p-5 md:p-6 border-y border-r border-[#222] border-l-2 border-l-primary bg-[#0a0a0a] rounded-l-xl rounded-r-md hover:border-primary/50 transition-all duration-300 shadow-[0_0_15px_rgba(225,6,0,0.05)] hover:shadow-[0_0_20px_rgba(225,6,0,0.15)] group"
                >
                  <div className="flex flex-col mb-3">
                    <span className="text-[#666] font-bold tracking-[0.2em] text-[10px] uppercase mb-1">
                      {item.round}
                    </span>
                    <span className="text-slate-400 font-bold tracking-widest text-xs uppercase">
                      {item.period}
                    </span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 tracking-wide group-hover:text-primary transition-colors">
                    {item.institution}
                  </h3>
                  <p className="text-slate-400 font-medium mb-5 text-sm">
                    {item.degree}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <div className="px-3 py-1.5 bg-[#141414] border border-[#2a2a2a] text-slate-400 text-[10px] font-bold tracking-widest rounded-md uppercase">
                      {tag1Text}
                    </div>
                    <div className="px-3 py-1.5 bg-red-950/20 border border-red-900/50 text-red-500 text-[10px] font-bold tracking-widest rounded-md uppercase">
                      {item.score}
                    </div>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
