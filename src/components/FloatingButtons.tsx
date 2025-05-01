"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowUpFill } from 'react-icons/ri';
import { BsChatDotsFill } from 'react-icons/bs';
import { useLanguage } from '@/contexts/LanguageContext';

export const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { t } = useLanguage();

  // Show buttons when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Floating Buttons */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 flex flex-col gap-4 z-50"
          >
            {/* Chat Button */}
            <motion.button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-[var(--tertiary-color)] to-[var(--secondary-color)] text-white shadow-[0_4px_14px_0_rgba(0,118,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] flex items-center justify-center hover:opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <BsChatDotsFill className="w-6 h-6" />
            </motion.button>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-[var(--tertiary-color)] to-[var(--secondary-color)] text-white shadow-[0_4px_14px_0_rgba(0,118,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] flex items-center justify-center hover:opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <RiArrowUpFill className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-50 overflow-hidden border border-gray-100"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[var(--tertiary-color)] to-[var(--secondary-color)] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <BsChatDotsFill className="w-5 h-5" />
                <h3 className="font-semibold text-lg">{t('chat.title')}</h3>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-6 h-[calc(100%-4rem)] overflow-y-auto bg-gray-50">
              <div className="text-center text-gray-600 bg-white p-4 rounded-xl shadow-sm">
                {t('chat.welcome')}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 