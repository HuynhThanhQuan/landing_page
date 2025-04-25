"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import clsx from 'clsx';

export const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useSecondaryGradient, setUseSecondaryGradient] = useState(false);

  // Example of different className combinations
  const bannerClasses = clsx(
    'relative',
    useSecondaryGradient ? 'banner-gradient-secondary' : 'banner-gradient-primary',
    'text-white',
    'mt-24'
  );

  // Alternative using template literals
  const bannerClassesAlt = `relative ${
    useSecondaryGradient ? 'banner-gradient-secondary' : 'banner-gradient-primary'
  } text-white mt-24`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className={bannerClasses}
          onClick={() => setUseSecondaryGradient(!useSecondaryGradient)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🚀</span>
                <p className={clsx(
                  'text-sm sm:text-base',
                  'font-medium',
                  {'opacity-90': !useSecondaryGradient}
                )}>
                  We're seeking cooperation to build the future of AI together.
                  (Click banner to toggle gradient)
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <motion.a
                  href="#contact"
                  className={`
                    text-sm 
                    bg-white/10 
                    hover:bg-white/20 
                    text-white 
                    px-4 
                    py-1.5 
                    rounded-full 
                    transition-colors
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsVisible(false);
                  }}
                  className="text-white/80 hover:text-white p-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <RiCloseLine className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 