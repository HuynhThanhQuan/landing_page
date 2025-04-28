"use client";

import { motion } from 'framer-motion';
import { Brain, Users, Lightbulb, Shield } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

interface CoreValue {
  title: string;
  description: string;
  icon: any; // We'll keep the icon type as any since it's a component
  image: string;
}

const coreValues = [
  {
    title: "Curiosity-Driven Excellence",
    description: "We ignite and nurture an unending spirit of exploration to push boundaries in AI & Data Science, constantly seeking new frontiers of knowledge and innovation.",
    icon: Brain,
    image: "/images/corevalues/placeholder1.png"
  },
  {
    title: "Impact through Intelligence",
    description: "We cultivate professionals who master both technical expertise and business acumen – transforming data into actionable insights that drive real-world value.",
    icon: Lightbulb,
    image: "/images/corevalues/placeholder2.png"
  },
  {
    title: "Community of Growth",
    description: "We foster a sustainable ecosystem of learning, sharing, and development for AI & Data enthusiasts, creating a supportive environment for continuous growth.",
    icon: Users,
    image: "/images/corevalues/placeholder3.png"
  },
  {
    title: "Integrity in Consulting & Learning",
    description: "We uphold the highest standards of transparency, honesty, and responsibility in both education and business consulting, building trust through ethical practices.",
    icon: Shield,
    image: "/images/corevalues/placeholder4.png"
  }
];

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

  const coreValuesWithIcons = defaultValues.map((value, index) => ({
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
          {coreValuesWithIcons.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="aspect-[4/3] perspective-1000"
              >
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ rotateY: 180 }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Mặt trước của card */}
                  <div 
                    className="absolute w-full h-full backface-hidden rounded-xl p-6 flex flex-col items-center justify-center text-center"
                    style={{ 
                      border: '1px solid var(--glass-border)',
                      background: 'white',
                      boxShadow: 'var(--shadow-primary)',
                      backfaceVisibility: 'hidden'
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
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
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
                              "linear-gradient(45deg, rgba(255,255,255,0.2) 0%, transparent 100%)",
                              "linear-gradient(225deg, rgba(255,255,255,0.2) 0%, transparent 100%)",
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </motion.svg>
                      </motion.div>
                    )}

                    <h3 className="text-2xl font-bold text-black mt-6" style={{ fontFamily: 'var(--font-heading)' }}>
                      {value.title}
                    </h3>
                    <p className="mt-4 text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                      {value.description}
                    </p>
                  </div>

                  {/* Mặt sau của card - Hình ảnh */}
                  <div 
                    className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden"
                    style={{ 
                      background: 'var(--gradient-secondary)',
                      boxShadow: 'var(--shadow-secondary)',
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 