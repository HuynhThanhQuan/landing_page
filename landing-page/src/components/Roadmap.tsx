"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

type RoadmapItem = {
  id: string;
  title: string;
  description: string;
  caption: string;
  image: string;
};

export const Roadmap = () => {
  const [activeItem, setActiveItem] = useState<RoadmapItem | null>(null);
  const { t } = useLanguage();

  const roadmapData: RoadmapItem[] = [
    {
      id: 'learning',
      title: t('ecosystem.learning.title'),
      description: t('ecosystem.learning.description'),
      caption: t('ecosystem.learning.caption'),
      image: '/images/roadmap/learning.png'
    },
    {
      id: 'consultant',
      title: t('ecosystem.consultant.title'),
      description: t('ecosystem.consultant.description'),
      caption: t('ecosystem.consultant.caption'),
      image: '/images/roadmap/consultant.png'
    },
    {
      id: 'innovation',
      title: t('ecosystem.innovation.title'),
      description: t('ecosystem.innovation.description'),
      caption: t('ecosystem.innovation.caption'),
      image: '/images/roadmap/innovation.png'
    }
  ];

  // Set initial active item
  if (!activeItem && roadmapData.length > 0) {
    setActiveItem(roadmapData[0]);
  }

  return (
    <section id="roadmap" className="py-20 relative">
      {/* Glass Background */}
      <div 
        className="absolute inset-0 backdrop-blur-sm bg-white/30"
        style={{ 
          background: 'var(--glass-background)',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('ecosystem.title')}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto font-light"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('ecosystem.subtitle')}
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Interactive Containers */}
          <div className="h-[700px] flex flex-col justify-between">
            {roadmapData.map((item, index) => (
              <motion.div
                key={item.id}
                className={`p-8 rounded-2xl cursor-pointer transition-all duration-300 h-[200px] flex flex-col justify-center ${
                  activeItem?.id === item.id 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg'
                    : 'bg-white shadow-md hover:shadow-xl'
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveItem(item)}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h3>
                <p 
                  className={`${
                    activeItem?.id === item.id ? 'text-white/90' : 'text-gray-500'
                  } italic font-light`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Dynamic Content */}
          <div className="bg-white rounded-2xl p-8 shadow-xl h-full flex flex-col">
            <AnimatePresence mode="wait">
              {activeItem && (
                <motion.div
                  key={activeItem.id}
                  className="flex flex-col h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Caption */}
                  <div className="h-[200px] flex items-start pt-4">
                    <p 
                      className="text-lg text-gray-700 leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {activeItem.caption}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="relative flex-1 rounded-xl overflow-hidden">
                    <Image
                      src={activeItem.image}
                      alt={activeItem.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-xl"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}; 