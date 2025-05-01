"use client";

import { motion } from 'framer-motion';
import { Brain, Users, Lightbulb, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type IconType = typeof Brain | typeof Users | typeof Lightbulb | typeof Shield;

interface CoreValueItem {
  title: string;
  description: string;
  icon: IconType;
  image: string;
}

export const CoreValues = () => {
  const { t } = useLanguage();
  
  const icons = {
    'Curiosity-Driven Excellence': Brain,
    'Impact through Intelligence': Lightbulb,
    'Community of Growth': Users,
    'Integrity in Consulting & Learning': Shield
  };

  const defaultValues = [
    {
      title: t('coreValues.values.0.title'),
      description: t('coreValues.values.0.description')
    },
    {
      title: t('coreValues.values.1.title'),
      description: t('coreValues.values.1.description')
    },
    {
      title: t('coreValues.values.2.title'),
      description: t('coreValues.values.2.description')
    },
    {
      title: t('coreValues.values.3.title'),
      description: t('coreValues.values.3.description')
    }
  ];

  const coreValuesWithIcons: CoreValueItem[] = defaultValues.map((value, index) => ({
    ...value,
    icon: Object.values(icons)[index],
    image: `/images/corevalues/placeholder${index + 1}.png`
  }));

  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  return (
    <section id="core-values" className="relative h-screen w-full flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header - Animation khi scroll vào view */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            {t('coreValues.title')}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto text-gray-500" style={{ fontFamily: 'var(--font-body)' }}>
            {t('coreValues.subtitle')}
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {coreValuesWithIcons.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className="aspect-[4/3]"
            >
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                {/* Mặt trước của card */}
                <div 
                  className="w-full h-full rounded-xl p-6 flex flex-col items-center justify-center text-center"
                  style={{ 
                    border: '1px solid var(--glass-border)',
                    background: 'white',
                    boxShadow: 'var(--shadow-primary)'
                  }}
                >
                  {index === 0 && (
                    // Curiosity-Driven Excellence
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center relative overflow-hidden"
                      variants={iconVariants}
                    >
                      <motion.div
                        className="absolute inset-0 opacity-30"
                        animate={{
                          background: [
                            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 100%, transparent 100%)"
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.svg 
                        className="w-8 h-8 text-white relative z-10" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </motion.svg>
                    </motion.div>
                  )}

                  {index === 1 && (
                    // Impact through Intelligence
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center relative"
                      variants={iconVariants}
                    >
                      <motion.div
                        className="absolute w-full h-full"
                        animate={{
                          background: [
                            "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
                            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
                          ],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <motion.svg 
                        className="w-8 h-8 text-white relative z-10" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </motion.svg>
                      <motion.div
                        className="absolute -right-1 -top-1 w-3 h-3 bg-white rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  )}

                  {index === 2 && (
                    // Community of Growth
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center relative overflow-hidden"
                      variants={iconVariants}
                    >
                      <motion.div
                        className="absolute inset-0"
                        animate={{
                          background: [
                            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                            "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.svg 
                        className="w-8 h-8 text-white relative z-10" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </motion.svg>
                    </motion.div>
                  )}

                  {index === 3 && (
                    // Integrity in Consulting & Learning
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center relative overflow-hidden"
                      variants={iconVariants}
                    >
                      <motion.div
                        className="absolute inset-0"
                        animate={{
                          background: [
                            "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                            "linear-gradient(225deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.svg 
                        className="w-8 h-8 text-white relative z-10" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </motion.svg>
                    </motion.div>
                  )}

                  <h3 className="mt-4 text-xl font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
                    {value.title}
                  </h3>
                  <p className="mt-2 text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 