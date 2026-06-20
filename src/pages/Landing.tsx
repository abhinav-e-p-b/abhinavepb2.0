import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import InteractiveText from '../components/InteractiveText';
import BlobCursor from '../components/BlobCursor';
import FloatingIcons from '../components/FloatingIcons';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-hidden" style={{ background: '#0a0a0f' }}>
      <BlobCursor
        blobType="blob"
        fillColor="#F97316"
        trailCount={3}
        sizes={[20, 40, 60]}
        innerSizes={[8, 16, 24]}
        innerColor="rgba(255,255,255,0.9)"
        opacities={[0.8, 0.6, 0.4]}
        shadowColor="rgba(249, 115, 22, 0.3)"
        shadowBlur={8}
        shadowOffsetX={2}
        shadowOffsetY={2}
        filterStdDeviation={15}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.3}
        zIndex={9999}
      />

      <FloatingIcons />

      {/* Navigation */}
      <motion.nav
        className="flex justify-between items-center p-6 md:p-8 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="text-lg font-bold tracking-wide"
          style={{ color: '#f5f5f5' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          abhinave.
        </motion.span>
        <div className="flex gap-3 md:gap-4">
          {['WORK', 'ABOUT'].map((item, index) => (
            <motion.button
              key={item}
              onClick={() => navigate('/portfolio')}
              className="px-4 py-2 rounded-full text-sm md:text-base font-medium tracking-wide transition-colors duration-300"
              style={{
                border: '2px solid rgba(249,115,22,0.5)',
                color: '#f5f5f5',
                background: 'transparent',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = '#F97316';
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#F97316';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(249,115,22,0.5)';
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Hero Section — relative so the absolute scroll hint anchors correctly */}
      <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 md:px-12 text-center z-10">
        {/* Main Heading */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight mb-8" style={{ color: '#f5f5f5' }}>
            <InteractiveText text="HI THERE " className="inline" />
            <InteractiveText text="ITS " className="inline" />
            <br className="hidden md:block" />
            <InteractiveText text="ABHINAVE " className="inline" />
            <InteractiveText text="P B" className="inline" />
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-sm md:text-base font-mono tracking-widest mb-12"
          style={{ color: 'rgba(249,115,22,0.6)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          ** HOVER OVER THE LETTERS TO SEE MAGIC **
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={() => navigate('/portfolio')}
          className="group relative px-10 py-4 rounded-full font-bold text-lg tracking-wide overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #F97316, #fb923c)',
            color: 'white',
            boxShadow: '0 8px 32px rgba(249,115,22,0.35)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          whileHover={{
            scale: 1.06,
            boxShadow: '0 12px 40px rgba(249,115,22,0.5)',
          }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            View My Work
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </span>
        </motion.button>

        {/* Scroll hint — absolute anchored to the bottom of the hero section */}
        <motion.p
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest font-mono whitespace-nowrap"
          style={{ color: 'rgba(245,245,245,0.35)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          AI · DEVOPS · WEB DEV
        </motion.p>
      </div>
    </div>
  );
};

export default Landing;
