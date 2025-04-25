"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

export const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white mt-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🚀</span>
                <p className="text-sm sm:text-base">
                  We're seeking cooperation to build the future of AI together.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <motion.a
                  href="#contact"
                  className="text-sm bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-full transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
                <motion.button
                  onClick={() => setIsVisible(false)}
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