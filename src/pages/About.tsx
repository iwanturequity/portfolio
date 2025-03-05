import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { Code, Briefcase, GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
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

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'C++', level: 90 },
  ];

  return (
    <motion.div
      className="container mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit={{ opacity: 0, y: 20 }}
    >
      <motion.h1 className="text-4xl font-bold mb-8 gradient-text text-center" variants={itemVariants}>
        About Me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div className="md:col-span-1" variants={itemVariants}>
          <GlassCard glowOnHover>
            <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Rajiv Kumar</h2>
              <p className="text-text-secondary mb-4">Full Stack Developer</p>
              <div className="flex justify-center gap-4">
                <span className="px-3 py-1 glass-card text-sm">1+ Years Experience</span>
                <span className="px-3 py-1 glass-card text-sm">Remote</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div className="md:col-span-2" variants={itemVariants}>
          <GlassCard>
            <h2 className="text-2xl font-bold mb-6 gradient-text">Biography</h2>
            <p className="text-text-secondary mb-4">
              I'm a passionate Full Stack Developer with over 1 years of experience in building web applications. I specialize in React, Node.js, and TypeScript, and I'm dedicated to creating clean, efficient, and user-friendly solutions.
            </p>
            <p className="text-text-secondary mb-4">
              My journey in web development began during my college years when I discovered my passion for coding. Since then, I've worked with various startups and established companies, helping them build scalable and maintainable web applications.
            </p>
            <p className="text-text-secondary">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities like hiking and photography.
            </p>
          </GlassCard>
        </motion.div>
      </div>

      <motion.div className="mb-12" variants={itemVariants}>
        <GlassCard>
          <h2 className="text-2xl font-bold mb-6 gradient-text">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 * index }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div variants={itemVariants}>
          <GlassCard glowOnHover className="h-full">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-accent-1/20 mr-4">
                <Briefcase className="text-accent-1" size={24} />
              </div>
              <h3 className="text-xl font-bold">Experience</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">Frontend Developer</h4>
                <p className="text-text-secondary">Appkul Tech Solution • 10-2024 - 12-2025</p>
              </li>
            </ul>
          </GlassCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GlassCard glowOnHover className="h-full">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-accent-2/20 mr-4">
                <GraduationCap className="text-accent-2" size={24} />
              </div>
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">B.Tech in Computer Science Engineering</h4>
                <p className="text-text-secondary">Institute of Engineering and Management Kolkata • 2022 - 2026</p>
              </li>
              <li>
                <h4 className="font-semibold">ISc in Mathematics</h4>
                <p className="text-text-secondary">A.N College Patna • 2019- 2021</p>
              </li>
              <li>
                <h4 className="font-semibold">High School</h4>
                <p className="text-text-secondary">National Public High School • 2019</p>
              </li>
            </ul>
          </GlassCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GlassCard glowOnHover className="h-full">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-accent-3/20 mr-4">
                <Award className="text-accent-3" size={24} />
              </div>
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">JavaScript By Meta</h4>
                <p className="text-text-secondary">Coursera • 2023</p>
              </li>
              <li>
                <h4 className="font-semibold">React Advanced </h4>
                <p className="text-text-secondary">Self-taught • 2024</p>
              </li>
              <li>
                <h4 className="font-semibold">MongoDB </h4>
                <p className="text-text-secondary">Self-taught • 2024</p>
              </li>
              <li>
                <h4 className="font-semibold">UI/UX Design Fundamentals</h4>
                <p className="text-text-secondary">Self-taught • 2024</p>
              </li>
            </ul>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;