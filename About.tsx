import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Sparkles } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              variants={itemVariants}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-4">
                <GraduationCap className="text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-slate-400">Computer Science at Cal State East Bay</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 mb-4">
                <Code className="text-emerald-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-slate-400">AI Applications & Web3 Projects</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 mb-4">
                <Sparkles className="text-purple-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-slate-400">Experimenting with AI Tools</p>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50"
          >
            <p className="text-lg leading-relaxed text-slate-300">
              I'm currently pursuing my Bachelor's in Computer Science at California State University, East Bay. 
              I build AI applications for fun, and I experiment with existing AI tools to learn and innovate. 
              I'm currently working on a fitness app called <span className="text-emerald-400 font-semibold">Mashallah Fitness</span>, 
              which will launch on the App Store soon.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;