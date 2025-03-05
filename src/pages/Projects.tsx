import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: 'Decentralized DigiVault',
      description: 'Decentralized DigiVault is a blockchain-based document storage system that ensures secure, tamper-proof storage using IPFS, smart contracts, and Polygon. It also integrates machine learning for document authenticity verification.',
      image: 'Decentralized-Storage.jpg',
      tags: ['React', 'Node.js', 'Solidity', 'IPFS', 'Polygon', ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/iwanturequity/Decentralized-DigiVault',
    },
    {
      title: 'Charles-AI',
      description: 'Charles-AI is a creative powerhouse web application that integrates advanced AI tools to generate code, images, videos, and audio.Utilized OpenAI advanced AI models to generate high-quality images',
      image: '/AI-Webpage.png',
      tags: [ 'Next Js','Redux' , 'Open AI', 'typescript', 'Prisma', 'Postgresql'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/iwanturequity/charles-ai',
    },
    {
      title: 'Portfolio Website',
      description: 'My portfolio highlights my web development, machine learning projects, along with open-source contributions. It includes case studies, live demos, and GitHub repositories demonstrating my technical expertise.',
      image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/iwanturequity/portfolio',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A dashboard for managing and analyzing social media accounts across multiple platforms.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      tags: ['React', 'Node.js', 'Express', 'Social APIs'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Recipe Finder',
      description: 'An application that helps users find recipes based on available ingredients and dietary preferences.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'Spoonacular API', 'Styled Components'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with product listings, shopping cart, and payment processing.',
      image: 'https://images.unsplash.com/photo-1556761175-597e0d6f8f25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
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
        My Projects
      </motion.h1>
      <motion.p className="text-text-secondary text-center max-w-2xl mx-auto mb-12" variants={itemVariants}>
        Here are some of the projects I've worked on. Each project represents a unique challenge and solution that I've developed.
      </motion.p>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;