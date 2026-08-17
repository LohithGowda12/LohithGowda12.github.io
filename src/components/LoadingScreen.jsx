import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // We want the progress to reach 100% in a smooth flow over about 1.5 seconds.
    // E.g., 60 frames per second means updates roughly every 16ms.
    // 1.5 seconds / 16ms = ~90 frames. So we increment by ~1.1 each time.
    const intervalId = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return Math.min(prev + 1.2, 100);
      });
    }, 16);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070707] text-white"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: 'center center'
      }}
    >
      <div className="flex flex-col items-center z-10 w-full max-w-2xl px-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-f1-bold tracking-widest mb-8 text-white text-center">
          LOHITH GOWDA
        </h1>
        
        <div className="flex flex-col items-center w-full max-w-sm mb-6">
          <span className={`text-sm font-mono uppercase tracking-[0.3em] mb-4 transition-colors duration-300 ${progress === 100 ? 'text-primary font-bold' : 'text-slate-400'}`}>
            {progress === 100 ? "SYSTEM READY" : "SYSTEM INITIALIZING"}
          </span>
          
          <div className="w-full h-1.5 bg-[#1a1a1a] rounded-full relative overflow-hidden mb-4 border border-[#333]">
            <motion.div
              className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_rgba(225,6,0,0.8)] overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "circOut", duration: 0.2 }}
            >
              {/* Layer 1: The primary fast bright streak */}
              <motion.div 
                className="absolute top-0 bottom-0 w-[40px] bg-gradient-to-r from-transparent via-white/90 to-transparent skew-x-[-30deg] blur-[1px]"
                style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.6)' }}
                animate={{ left: ['300px', '-100px', '800px'] }}
                transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.3, 1], ease: "easeInOut" }}
              />
              
              {/* Layer 2: A wider, softer red/white streak that moves slightly slower */}
              <motion.div 
                className="absolute top-0 bottom-0 w-[80px] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] blur-[2px]"
                style={{ boxShadow: '0 0 15px rgba(255, 100, 100, 0.4)' }}
                animate={{ left: ['400px', '-150px', '800px'] }}
                transition={{ repeat: Infinity, duration: 2.2, times: [0, 0.35, 1], ease: "easeInOut", delay: 0.1 }}
              />
              
              {/* Layer 3: A very thin, intensely bright leading edge moving fast */}
              <motion.div 
                className="absolute top-0 bottom-0 w-[15px] bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-40deg]"
                style={{ boxShadow: '0 0 8px rgba(255, 255, 255, 0.9)' }}
                animate={{ left: ['200px', '-50px', '800px'] }}
                transition={{ repeat: Infinity, duration: 1.2, times: [0, 0.25, 1], ease: "easeInOut", delay: 0.2 }}
              />

              {/* Layer 4: A subtle ambient reflection moving very slowly */}
              <motion.div 
                className="absolute top-0 bottom-0 w-[120px] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-15deg] blur-[3px]"
                animate={{ left: ['500px', '-200px', '800px'] }}
                transition={{ repeat: Infinity, duration: 3.5, times: [0, 0.4, 1], ease: "easeInOut" }}
              />
            </motion.div>
          </div>
          
          <span className="text-2xl font-bold text-primary tracking-widest text-glow">
            {Math.floor(progress)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
