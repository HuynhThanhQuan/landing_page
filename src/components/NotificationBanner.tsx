"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { useLanguage } from '@/contexts/LanguageContext';

export const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative banner-gradient-primary text-white mt-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center">
                <span className="mr-2">{t('notification.emoji')}</span>
                <p className="text-sm sm:text-base font-medium">
                  {t('notification.message')}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <motion.a
                  href="/#faq-contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById('faq-contact');
                    if (contactSection) {
                      const headerOffset = 80;
                      const elementPosition = contactSection.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="text-sm bg-white/90 hover:bg-white/20 text-black px-4 py-1.5 rounded-full transition-colors font-bold align-middle"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(89, 162, 231, 0.82)",
                    color: "white"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('notification.cta')}
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