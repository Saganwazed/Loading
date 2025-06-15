import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Python", icon: "🐍", description: "Primary language for AI development" },
        { name: "TensorFlow", icon: "🧠", description: "Deep learning framework" },
        { name: "PyTorch", icon: "🔥", description: "Machine learning library" },
        { name: "OpenAI API", icon: "🤖", description: "GPT integration and AI services" },
        { name: "HuggingFace", icon: "🤗", description: "Transformers and model hub" },
        { name: "Scikit-learn", icon: "📊", description: "Machine learning toolkit" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", icon: "⚛️", description: "Frontend framework" },
        { name: "Next.js", icon: "▲", description: "Full-stack React framework" },
        { name: "TypeScript", icon: "📘", description: "Type-safe JavaScript" },
        { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS framework" },
        { name: "Node.js", icon: "💚", description: "JavaScript runtime" },
        { name: "Express", icon: "🚂", description: "Web application framework" }
      ]
    },
    {
      title: "Web3 & Blockchain",
      skills: [
        { name: "Ethereum", icon: "💎", description: "Smart contract platform" },
        { name: "Solidity", icon: "📜", description: "Smart contract language" },
        { name: "Web3.js", icon: "🌐", description: "Ethereum JavaScript API" },
        { name: "MetaMask", icon: "🦊", description: "Web3 wallet integration" },
        { name: "IPFS", icon: "🌍", description: "Distributed file system" },
        { name: "DeFi Protocols", icon: "🏦", description: "Decentralized finance" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-slate-200">
                {category.title}
              </h3>
              
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group relative bg-slate-800/50 rounded-xl p-4 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                        {skill.name}
                      </h4>
                    </div>

                    {/* Tooltip */}
                    <motion.div
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 border border-slate-700"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.description}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-slate-800/30 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
            <h3 className="text-xl font-bold mb-4 text-slate-200">Always Learning</h3>
            <p className="text-slate-400 leading-relaxed">
              I'm constantly exploring new technologies and frameworks. Currently diving deeper into 
              advanced AI architectures, Web3 protocols, and modern development practices to stay at 
              the forefront of innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;