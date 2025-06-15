import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Clock } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Mashallah Fitness",
      description: "A comprehensive fitness tracking app with AI-powered workout recommendations and progress analytics.",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "AI/ML", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
      featured: true,
      comingSoon: true
    },
    {
      title: "AI Chat Interface",
      description: "Modern chat interface with multiple AI model integrations and real-time conversation handling.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "OpenAI API", "WebSocket", "Tailwind"],
      github: "#",
      demo: "#"
    },
    {
      title: "Web3 Portfolio Tracker",
      description: "Decentralized portfolio tracking with real-time crypto analytics and DeFi protocol integration.",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "Web3.js", "Ethereum", "Chart.js"],
      github: "#",
      demo: "#"
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive tool for visualizing and understanding neural network architectures and training processes.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "TensorFlow", "D3.js", "Flask"],
      github: "#",
      demo: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="projects" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`group relative bg-slate-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
              whileHover={{ y: -5 }}
            >
              {project.comingSoon && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center space-x-2 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border border-emerald-500/30">
                    <Clock size={14} />
                    <span>App Store Launch Coming Soon</span>
                  </div>
                </div>
              )}

              <div className={`${project.featured ? 'md:flex' : ''}`}>
                <div className={`${project.featured ? 'md:w-1/2' : ''} relative overflow-hidden`}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>

                <div className={`p-6 ${project.featured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Smartphone className="text-emerald-400" size={24} />
                    )}
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-slate-700/50 text-slate-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;