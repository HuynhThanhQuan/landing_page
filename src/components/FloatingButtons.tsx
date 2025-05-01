"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowUpFill } from 'react-icons/ri';
import { BsChatDotsFill, BsSendFill } from 'react-icons/bs';
import { useLanguage } from '@/contexts/LanguageContext';

export const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
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

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // TODO: Handle sending message
      console.log('Sending message:', message);
      setMessage('');
    }
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
            className="fixed bottom-24 right-6 w-96 h-[32rem] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-50 overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[var(--tertiary-color)] to-[var(--secondary-color)] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <BsChatDotsFill className="w-5 h-5" />
                <h3 className="font-semibold text-base">{t('chat.title')}</h3>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
              <div className="text-center text-gray-600 bg-white p-4 rounded-xl shadow-sm text-sm">
                {t('chat.welcome')}
              </div>
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('chat.inputPlaceholder')}
                  className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-[var(--tertiary-color)] focus:ring-1 focus:ring-[var(--tertiary-color)] transition-all text-sm"
                />
                <motion.button
                  type="submit"
                  disabled={!message.trim()}
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--tertiary-color)] to-[var(--secondary-color)] text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BsSendFill className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 