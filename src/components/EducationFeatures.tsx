"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const EducationFeatures = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('education.features.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl font-bold">{index}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {t(`education.features.items.${index-1}.title`)}
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                {t(`education.features.items.${index-1}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 