"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

// Placeholder data for feedback images
const feedbackImages = [
  "/images/feedback/feedback1.PNG",
  "/images/feedback/feedback3.PNG",
  "/images/feedback/feedback4.PNG",
  "/images/feedback/feedback5.PNG",
  "/images/feedback/feedback2.PNG",
];

export const Feedback = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useLanguage();

  // Get individual feedbacks directly
  const feedbacks = [
    {
      name: t('feedback.feedbacks.0.name'),
      feedback: t('feedback.feedbacks.0.feedback'),
      role: t('feedback.feedbacks.0.role')
    },
    {
      name: t('feedback.feedbacks.1.name'),
      feedback: t('feedback.feedbacks.1.feedback'),
      role: t('feedback.feedbacks.1.role')
    },
    {
      name: t('feedback.feedbacks.2.name'),
      feedback: t('feedback.feedbacks.2.feedback'),
      role: t('feedback.feedbacks.2.role')
    },
    {
      name: t('feedback.feedbacks.3.name'),
      feedback: t('feedback.feedbacks.3.feedback'),
      role: t('feedback.feedbacks.3.role')
    },
    {
      name: t('feedback.feedbacks.4.name'),
      feedback: t('feedback.feedbacks.4.feedback'),
      role: t('feedback.feedbacks.4.role')
    },
    {
      name: t('feedback.feedbacks.5.name'),
      feedback: t('feedback.feedbacks.5.feedback'),
      role: t('feedback.feedbacks.5.role')
    },
    {
      name: t('feedback.feedbacks.6.name'),
      feedback: t('feedback.feedbacks.6.feedback'),
      role: t('feedback.feedbacks.6.role')
    },
    {
      name: t('feedback.feedbacks.7.name'),
      feedback: t('feedback.feedbacks.7.feedback'),
      role: t('feedback.feedbacks.7.role')
    }
  ];

  return (
    <section id="feedback" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30">
        {/* Heading and Subtitle */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('feedback.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('feedback.subtitle')}
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Decorative elements between columns */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px">
            {/* Vertical line with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-200/50 to-transparent" />
            
            {/* Animated dots */}
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400/50 backdrop-blur-sm"
                style={{
                  top: `${20 + index * 20}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.4,
                }}
              />
            ))}

            {/* Floating shapes */}
            <motion.div
              className="absolute left-1/2 top-[30%] -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-300/20 to-cyan-300/20 backdrop-blur-sm"
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div
              className="absolute left-1/2 top-[60%] -translate-x-1/2 w-12 h-12"
              style={{
                background: 'var(--glass-background)',
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              }}
              animate={{
                y: [10, -10, 10],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Left Column - Stacked Images */}
          <div className="relative h-[800px] hidden lg:flex items-start pt-8">
            <div className="relative w-full h-full">
              {feedbackImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute w-[340px] bg-white rounded-xl overflow-hidden shadow-xl cursor-pointer"
                  style={{
                    top: index === 0 ? '0px' : 
                         index === 1 ? '150px' : 
                         index === 2 ? '300px' :
                         index === 3 ? '450px' :
                         '600px',
                    left: index === 0 ? '15%' : 
                          index === 1 ? '50%' : 
                          index === 2 ? '15%' :
                          index === 3 ? '45%' :
                          '30%',
                    zIndex: index === 0 ? 5 :
                           index === 1 ? 4 :
                           index === 2 ? 3 :
                           index === 3 ? 2 : 1,
                    transform: `rotate(${index === 0 ? -2 : 
                                       index === 1 ? 2 : 
                                       index === 2 ? -2 :
                                       index === 3 ? 2 :
                                       -2}deg)`,
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 0,
                    zIndex: 10,
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={image}
                      alt={`Student feedback ${index + 1}`}
                      fill
                      style={{ 
                        objectFit: 'contain',
                        backgroundColor: 'white',
                      }}
                      className="rounded-xl p-2"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Text Feedback */}
          <div className="columns-1 lg:columns-2 gap-6">
            {feedbacks.map((feedback, index) => (
              <motion.div
                key={index}
                className="break-inside-avoid mb-8 bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* User Info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    <FaUserCircle className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                      {feedback.name}
                    </h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                      {feedback.role}
                    </p>
                  </div>
                </div>
                
                {/* Feedback Content */}
                <p 
                  className="text-gray-700 leading-relaxed text-sm"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {feedback.feedback}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal for zoomed image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-xl overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <IoMdClose size={24} />
                </button>

                {/* Zoomed image */}
                <div className="relative w-full h-full min-h-[80vh]" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={selectedImage}
                    alt="Zoomed feedback"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-4"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}; 