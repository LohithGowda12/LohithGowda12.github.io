import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { FaCode, FaGithub, FaGitAlt } from 'react-icons/fa';
import { 
  Database, Share2, Bot, BrainCircuit, Network, 
  GitBranch, Server, Cpu, Box, Cloud, Braces, Terminal, LayoutTemplate
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const getIconUrl = (skill) => {
  const map = {
    "Python": "python/python-original.svg",
    "C": "c/c-original.svg",
    "C++": "cplusplus/cplusplus-original.svg",
    "JavaScript": "javascript/javascript-original.svg",
    "Java": "java/java-original.svg",
    "SQL": "mysql/mysql-original.svg",
    "React": "react/react-original.svg",
    "HTML": "html5/html5-original.svg",
    "CSS": "css3/css3-original.svg",
    "Tailwind CSS": "tailwindcss/tailwindcss-original.svg",
    "Bootstrap": "bootstrap/bootstrap-original.svg",
    "Node.js": "nodejs/nodejs-original.svg",
    "Express.js": "express/express-original.svg",
    "Django": "django/django-plain.svg",
    "Flask": "flask/flask-original.svg",
    "FastAPI": "fastapi/fastapi-original.svg",
    "MySQL": "mysql/mysql-original.svg",
    "MongoDB": "mongodb/mongodb-original.svg",
    "MongoDB Atlas": "mongodb/mongodb-original.svg",
    "Scikit-learn": "scikitlearn/scikitlearn-original.svg",
    "TensorFlow": "tensorflow/tensorflow-original.svg",
    "Keras": "keras/keras-original.svg",
    "OpenCV": "opencv/opencv-original.svg",
    "NumPy": "numpy/numpy-original.svg",
    "Pandas": "pandas/pandas-original.svg",
    "PyTorch": "pytorch/pytorch-original.svg",
    "Docker": "docker/docker-original.svg",
    "AWS": "amazonwebservices/amazonwebservices-original-wordmark.svg",
    "Linux": "linux/linux-original.svg",
    "Ansible": "ansible/ansible-original.svg",
    "Kubernetes": "kubernetes/kubernetes-plain.svg",
    "Jenkins": "jenkins/jenkins-original.svg",
    "Terraform": "terraform/terraform-original.svg",
    "Git": "git/git-original.svg",
    "GitHub": "github/github-original.svg",
    "VS Code": "vscode/vscode-original.svg",
    "Postman": "postman/postman-original.svg",
    "Google Cloud": "googlecloud/googlecloud-original.svg",
  };
  if (map[skill]) {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${map[skill]}`;
  }
  return null;
};

const CustomReactIcon = ({ skill, className }) => {
  const map = {
    // Generative AI
    "LangChain": <Share2 className={className} style={{ color: "#ffffff" }} strokeWidth={2.5} />,
    "Hugging Face": <Bot className={className} style={{ color: "#f59e0b" }} strokeWidth={2.5} />,
    "FAISS": <Database className={className} style={{ color: "#3b82f6" }} strokeWidth={2.5} />,
    "Generative AI": <BrainCircuit className={className} style={{ color: "#a855f7" }} strokeWidth={2.5} />,
    "RAG": <Network className={className} style={{ color: "#22c55e" }} strokeWidth={2.5} />,
    "LLMs": <BrainCircuit className={className} style={{ color: "#ec4899" }} strokeWidth={2.5} />,
    "Prompt Engineering": <Terminal className={className} style={{ color: "#14b8a6" }} strokeWidth={2.5} />,
    "Embeddings": <Database className={className} style={{ color: "#8b5cf6" }} strokeWidth={2.5} />,
    // Core CS
    "DSA": <Network className={className} style={{ color: "#ef4444" }} strokeWidth={2.5} />,
    "OOP": <Box className={className} style={{ color: "#3b82f6" }} strokeWidth={2.5} />,
    "DBMS": <Database className={className} style={{ color: "#eab308" }} strokeWidth={2.5} />,
    "OS": <Cpu className={className} style={{ color: "#9ca3af" }} strokeWidth={2.5} />,
    "CN": <Cloud className={className} style={{ color: "#22c55e" }} strokeWidth={2.5} />,
    "REST APIs": <Server className={className} style={{ color: "#3b82f6" }} strokeWidth={2.5} />,
    "Git/GitHub Workflow": <GitBranch className={className} style={{ color: "#ffffff" }} strokeWidth={2.5} />,
    // Cloud Extras
    "EC2": <Server className={className} style={{ color: "#f97316" }} strokeWidth={2.5} />,
    "S3": <Database className={className} style={{ color: "#f97316" }} strokeWidth={2.5} />,
    "IAM": <Braces className={className} style={{ color: "#f97316" }} strokeWidth={2.5} />,
    "IntelliJ IDEA": <Box className={className} style={{ color: "#ffffff" }} strokeWidth={2.5} />,
    "Render": <svg className={className} viewBox="0 0 24 24" fill="white"><path d="M18.263.007c-3.121-.147-5.744 2.109-6.192 5.082-.018.138-.045.272-.067.405-.696 3.703-3.936 6.507-7.827 6.507-1.388 0-2.691-.356-3.825-.979a.2024.2024 0 0 0-.302.178V24H12v-8.999c0-1.656 1.338-3 2.987-3h2.988c3.382 0 6.103-2.817 5.97-6.244-.12-3.084-2.61-5.603-5.682-5.75"/></svg>,
    "Vercel": <svg className={className} viewBox="0 0 24 24" fill="white"><path d="M12 1L24 22H0L12 1Z"/></svg>,
    "Netlify": <Cloud className={className} style={{ color: "#06b6d4" }} strokeWidth={2.5} />,
    
    // Brand Logo Fallbacks (safe generic icons in case devicon fails)
    "Git": <FaGitAlt className={className} style={{ color: "#F05032" }} />,
    "GitHub": <FaGithub className={className} style={{ color: "#ffffff" }} />,
    "VS Code": <Terminal className={className} style={{ color: "#007ACC" }} strokeWidth={2.5} />,
    "Postman": <Network className={className} style={{ color: "#FF6C37" }} strokeWidth={2.5} />,
    "Google Cloud": <Cloud className={className} style={{ color: "#4285F4" }} strokeWidth={2.5} />,
    "C++": <FaCode className={className} style={{ color: "#00599C" }} />,
    "Tailwind CSS": <LayoutTemplate className={className} style={{ color: "#06B6D4" }} strokeWidth={2.5} />,
    "Bootstrap": <LayoutTemplate className={className} style={{ color: "#7952B3" }} strokeWidth={2.5} />,
    "FastAPI": <Server className={className} style={{ color: "#009688" }} strokeWidth={2.5} />,
    "MongoDB Atlas": <Database className={className} style={{ color: "#47A248" }} strokeWidth={2.5} />,
  };
  
  return map[skill] || <FaCode className={`${className} text-primary opacity-80`} />;
};

const SkillIcon = ({ item, iconUrl }) => {
  const [error, setError] = useState(false);

  if (!iconUrl || error) {
    return <CustomReactIcon skill={item} className="w-3.5 h-3.5" />;
  }

  return (
    <img 
      src={iconUrl} 
      alt={item} 
      className="w-3.5 h-3.5 object-contain"
      onError={() => setError(true)}
    />
  );
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-12 px-4 max-w-7xl mx-auto border-t border-[#1a1a1a] relative"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: 'center center'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black tracking-widest uppercase mb-4">
          <span className="text-white">SKILL </span>
          <span className="text-primary text-glow">LOGS</span>
        </h2>
        <div className="w-12 h-[3px] bg-primary shadow-[0_0_10px_rgba(225,6,0,0.8)]"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {skills.map((skillGroup) => (
          <motion.div
            key={skillGroup.id}
            variants={itemVariants}
            className="bg-[#0a0a0a] border-y border-r border-[#222] border-l-2 border-l-primary p-4 rounded-l-xl rounded-r-md shadow-[0_0_15px_rgba(225,6,0,0.05)] hover:shadow-[0_0_20px_rgba(225,6,0,0.15)] transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(225,6,0,1)]"></div>
              <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                {skillGroup.category}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item) => {
                const iconUrl = getIconUrl(item);
                return (
                  <div
                    key={item}
                    className="group flex items-center space-x-2 px-2.5 py-1 bg-[#141414] rounded-md border border-[#2a2a2a] hover:border-primary/50 hover:bg-[#1a1a1a] transition-colors duration-300 relative"
                  >
                    <SkillIcon item={item} iconUrl={iconUrl} />
                    <span className="text-[11px] font-medium text-slate-300 group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
