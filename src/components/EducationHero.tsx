"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const EducationHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('education.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {t('education.subtitle')}
        </motion.p>
      </div>
    </section>
  );
}; 