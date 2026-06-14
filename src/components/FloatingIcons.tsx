import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Cloud, 
  GitBranch, 
  Terminal, 
  Container, 
  Network, 
  Shield, 
  Cpu 
} from 'lucide-react';

const icons = [
  { Icon: Server, delay: 0, x: '10vw', y: '20vh' },
  { Icon: Cloud, delay: 0.5, x: '85vw', y: '15vh' },
  { Icon: GitBranch, delay: 1, x: '20vw', y: '70vh' },
  { Icon: Terminal, delay: 1.5, x: '80vw', y: '75vh' },
  { Icon: Container, delay: 2, x: '15vw', y: '45vh' },
  { Icon: Network, delay: 2.5, x: '75vw', y: '50vh' },
  { Icon: Shield, delay: 3, x: '25vw', y: '85vh' },
  { Icon: Cpu, delay: 3.5, x: '90vw', y: '35vh' }
];

const FloatingIcons: React.FC = () => {
  return (
    <>
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="fixed pointer-events-none text-gray-300 opacity-30"
          style={{
            left: x,
            top: y,
            zIndex: 1
          }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: 0.3, 
            scale: 1, 
            rotate: 0,
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            delay,
            duration: 2,
            y: {
              repeat: Infinity,
              duration: 4 + index * 0.5,
              ease: 'easeInOut'
            },
            x: {
              repeat: Infinity,
              duration: 6 + index * 0.3,
              ease: 'easeInOut'
            }
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}
    </>
  );
};

export default FloatingIcons;
