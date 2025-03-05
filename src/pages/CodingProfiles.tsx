import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '../components/ProfileCard';
import { Code, Coffee, Linkedin, Github } from 'lucide-react';

const CodingProfiles: React.FC = () => {
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

  const profiles = [
    {
      platform: 'LeetCode',
      username: 'rajivkumar0001',
      stats: 'Solved 350+ problems | Top 5% in contests',
      icon: <Code size={24} className="text-white" />,
      url: 'https://leetcode.com/u/rajivkumar0001/',
      color: 'bg-yellow-600',
    },
    {
      platform: 'CodeChef',
      username: 'rajivkumar001',
      stats: '2 Star Coder | Participated in 6+ contests',
      icon: <Coffee size={24} className="text-white" />,
      url: 'https://www.codechef.com/users/rajivkumar001',
      color: 'bg-amber-700',
    },
    {
      platform: 'LinkedIn',
      username: 'rajivkumar0001',
      stats: '1000+ connections | Regular tech content creator',
      icon: <Linkedin size={24} className="text-white" />,
      url: 'https://www.linkedin.com/in/rajivkumar0001/',
      color: 'bg-blue-700',
    },
    {
      platform: 'GitHub',
      username: 'iwanturequity',
      stats: '15+ repositories | 150+ contributions last year',
      icon: <Github size={24} className="text-white" />,
      url: 'https://github.com/iwanturequity',
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
      <motion.h1 className="text-4xl font-bold mb-8 gradient-text text-center" variants={itemVariants}>
        Coding Profiles
      </motion.h1>
      <motion.p className="text-text-secondary text-center max-w-2xl mx-auto mb-12" variants={itemVariants}>
        Check out my coding profiles across various platforms. I regularly participate in coding contests and contribute to open-source projects.
      </motion.p>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
        {profiles.map((profile, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProfileCard {...profile} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="mt-16" variants={itemVariants}>
        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold mb-6 gradient-text">Coding Journey</h2>
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-accent-1">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent-1"></div>
              <h3 className="text-xl font-bold">Started Competitive Programming</h3>
              <p className="text-text-secondary">2023</p>
              <p className="mt-2">Began solving problems on LeetCode and participated in my first coding contest.</p>
            </div>
            <div className="relative pl-8 border-l-2 border-accent-2">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent-2"></div>
              <h3 className="text-xl font-bold">Reached 2-Star on CodeChef</h3>
              <p className="text-text-secondary">2024</p>
              <p className="mt-2">Consistently participated in monthly contests and improved my problem-solving skills.</p>
            </div>
            <div className="relative pl-8 border-l-2 border-accent-3">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent-3"></div>
              <h3 className="text-xl font-bold">Started Contributing to Open Source</h3>
              <p className="text-text-secondary">2024</p>
              <p className="mt-2">Made my first open-source contributions and started building my GitHub profile.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-white"></div>
              <h3 className="text-xl font-bold">Present Day</h3>
              <p className="text-text-secondary">2025</p>
              <p className="mt-2">Regularly participate in coding contests and contribute to open-source projects.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-white"></div>
              <h3 className="text-xl font-bold">Present Day</h3>
              <p className="text-text-secondary">2025</p>
              <p className="mt-2">Developing a chat App end to end encrypted</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CodingProfiles;