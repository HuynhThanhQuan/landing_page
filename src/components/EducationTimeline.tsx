"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const EducationTimeline = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('education.timeline.title')}
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200" />

          {/* Timeline items */}
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 flex items-center ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="w-1/2 px-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {t(`education.timeline.items.${index-1}.title`)}
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                    {t(`education.timeline.items.${index-1}.description`)}
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 