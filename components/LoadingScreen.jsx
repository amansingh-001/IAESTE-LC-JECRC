import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../src/assets/logos/Iaeste Logo Standard.png';

export default function LoadingScreen({ onLoadingComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500); // Wait for zoom-out animation to complete
    }, 1500); // Show loading screen for 1.5 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
          className="fixed inset-0 bg-white flex items-center justify-center z-9999 overflow-hidden"
        >
          {/* Content with Netflix-style zoom-out exit */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ 
              scale: 3, 
              opacity: 0,
              transition: {
                duration: 1.5,
                ease: [0.25, 0.46, 0.45, 0.94] // Smooth ease-out for dramatic zoom
              }
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
            style={{ willChange: 'transform, opacity' }}
            className="text-center relative z-20"
          >
            {/* Logo */}
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <img 
                src={logo} 
                alt="IAESTE Logo" 
                width="200"
                height="96"
                className="h-16 sm:h-20 md:h-24 w-auto mx-auto object-contain"
                loading="eager"
                fetchpriority="high"
              />
            </motion.div>
            
            {/* Welcome Text */}
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ 
                scale: 1.2,
                opacity: 0,
                transition: {
                  duration: 1.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-2"
            >
              Welcome to
            </motion.h1>
            
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ 
                scale: 1.2,
                opacity: 0,
                transition: {
                  duration: 1.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#003F68] mb-6"
            >
              IAESTE LC JECRC
            </motion.h2>

            {/* Loading Spinner */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="w-6 h-6 border-2 border-gray-300 border-t-[#003F68] rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
