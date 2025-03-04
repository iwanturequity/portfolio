import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Code, Briefcase, GraduationCap, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import ProjectCard from '../components/ProjectCard';
import ProfileCard from '../components/ProfileCard';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      }
    },
  };

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
  ];

  const featuredProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, task assignment, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather data for multiple locations.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'OpenWeather API', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];

  const codingProfiles = [
    {
      platform: 'LeetCode',
      username: 'johndoe',
      stats: 'Solved 350+ problems',
      icon: <Code size={24} className="text-white" />,
      url: 'https://leetcode.com',
      color: 'bg-yellow-600',
    },
    {
      platform: 'GitHub',
      username: 'johndoe-dev',
      stats: '500+ contributions last year',
      icon: <Github size={24} className="text-white" />,
      url: 'https://github.com',
      color: 'bg-gray-800',
    },
  ];

  return (
    <motion.div
      className="container mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit={{ opacity: 0, y: 20 }}
    >
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-12rem)] flex flex-col md:flex-row items-center justify-center gap-8 mb-24">
        <motion.div className="md:w-1/2" variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">John Doe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-text-secondary mb-6">
            Full Stack Developer & UI/UX Designer
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's turn your vision into reality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="btn btn-primary flex items-center gap-2">
              View My Work <ArrowRight size={18} />
            </Link>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-3 glass-card hover:bg-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div className="md:w-1/2 flex justify-center" variants={itemVariants}>
          <GlassCard className="w-full max-w-md" glowOnHover>
            <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold gradient-text mb-2">John Doe</h3>
              <p className="text-text-secondary mb-4">
                Passionate about creating beautiful and functional web experiences
              </p>
              <div className="flex justify-center gap-4">
                <span className="px-3 py-1 glass-card text-sm">React</span>
                <span className="px-3 py-1 glass-card text-sm">Node.js</span>
                <span className="px-3 py-1 glass-card text-sm">TypeScript</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section 
        className="mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <GlassCard>
            <h3 className="text-2xl font-bold mb-6 gradient-text">My Story</h3>
            <p className="text-text-secondary mb-4">
              I'm a passionate Full Stack Developer with over 5 years of experience in building web applications. I specialize in React, Node.js, and TypeScript, and I'm dedicated to creating clean, efficient, and user-friendly solutions.
            </p>
            <p className="text-text-secondary mb-4">
              My journey in web development began during my college years when I discovered my passion for coding. Since then, I've worked with various startups and established companies, helping them build scalable and maintainable web applications.
            </p>
            <div className="flex justify-end mt-6">
              <Link to="/about" className="flex items-center text-accent-1 hover:text-accent-2 transition-colors">
                Read more about me <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </GlassCard>

          <div className="space-y-6">
            <GlassCard>
              <h3 className="text-xl font-bold mb-4 gradient-text">Key Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-text-secondary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent-1 to-accent-2"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 * index }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <div className="grid grid-cols-2 gap-6">
              <GlassCard glowOnHover className="h-full">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-accent-1/20 mr-4">
                    <Briefcase className="text-accent-1" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Experience</h3>
                </div>
                <p className="text-text-secondary">5+ years of professional experience in web development</p>
              </GlassCard>

              <GlassCard glowOnHover className="h-full">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-accent-2/20 mr-4">
                    <GraduationCap className="text-accent-2" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
                <p className="text-text-secondary">MSc in Computer Science from Tech University</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Link to="/projects" className="btn btn-primary flex items-center gap-2">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </motion.section>

      {/* Coding Profiles Section */}
      <motion.section 
        className="mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">Coding Profiles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {codingProfiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Link to="/coding-profiles" className="btn btn-primary flex items-center gap-2">
            View All Profiles <ArrowRight size={18} />
          </Link>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center">Get In Touch</h2>
        
        <GlassCard>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-accent-1/20 mr-4">
                    <Mail className="text-accent-1" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-text-secondary">contact@johndoe.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-accent-2/20 mr-4">
                    <Linkedin className="text-accent-2" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <p className="text-text-secondary">linkedin.com/in/johndoe</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <Link to="/contact" className="btn btn-primary flex items-center gap-2">
                  Send a Message <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            
            <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Contact" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <p className="text-white text-lg font-medium">Let's collaborate on your next project</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpVariants}
      >
        <GlassCard className="text-center p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Ready to Work Together?</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
            I'm currently available for freelance work and open to new opportunities. If you have a project that needs some creative touch, I'd love to hear about it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary flex items-center gap-2">
              Contact Me <ArrowRight size={18} />
            </Link>
            <a
              href="#"
              className="btn bg-white/10 hover:bg-white/20 flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                // Add download functionality here
                alert('CV download functionality would be implemented here');
              }}
            >
              Download CV <ExternalLink size={18} />
            </a>
          </div>
        </GlassCard>
      </motion.section>
    </motion.div>
  );
};

export default Home;