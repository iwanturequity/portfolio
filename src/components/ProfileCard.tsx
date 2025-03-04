import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProfileCardProps {
  platform: string;
  username: string;
  stats: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  platform,
  username,
  stats,
  icon,
  url,
  color,
}) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group glow block"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="glass-card p-6 h-full flex flex-col">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-full ${color} mr-4`}>{icon}</div>
          <div>
            <h3 className="text-xl font-bold">{platform}</h3>
            <p className="text-text-secondary">{username}</p>
          </div>
        </div>
        <p className="text-lg font-semibold mb-4 flex-grow">{stats}</p>
        <div className="flex justify-end">
          <span className="flex items-center text-sm text-text-secondary group-hover:text-accent-1 transition-colors">
            View Profile <ExternalLink size={16} className="ml-1" />
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export default ProfileCard;