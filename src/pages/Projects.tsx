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
      title: 'AI-Interview-Coach',
      description: 'Built a generative AI-powered mock interview platform using Gemini, with dynamic prompt engineering and Firestore integration for personalized, real-time interview feedback and ChatBot.',
      image: '/image.png',
      tags: ['React','Node Js',' Firebase (Firestore & Auth)','Express.js', 'TailWind CSS', ],
      liveUrl: 'https://ai-interview-coach-wheat.vercel.app/',
      githubUrl: 'https://github.com/iwanturequity/AI-Interview-Coach',
    },
    {
      title: 'Chat-App',
      description: 'Developed a full stack real-time chat application with React, Node.js, and Socket.io, featuring JWT-based authentication, MongoDB integration, and secure private messaging and implementing firebase Authentication.',
      image: '/Chat-App.jpg',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Firebase'],
      liveUrl: 'https://fullstack-chat-app-fxt7.onrender.com/login',
      githubUrl: 'https://github.com/iwanturequity/fullstack-chat-app',
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
      tags: ['React', 'Framer Motion','FormSpree', 'Tailwind CSS'],
      liveUrl: 'https://portfolio-rajiv-kumar.vercel.app/',
      githubUrl: 'https://github.com/iwanturequity/portfolio',
    },
    {
      title: 'Pathsphere',
      description: 'Scholarship Finder: Users can search and filter scholarships based on academic performance, GPA,and location. Detailed listings provide eligibility criteria, deadlines, and application links.',
      image: '/jobScholership.jpg',
      tags: ['React', 'Node.js', 'Express', 'Social APIs'],
      liveUrl: 'https://pathsphere.netlify.app/',
      githubUrl: 'https://github.com/iwanturequity/Pathsphere',
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