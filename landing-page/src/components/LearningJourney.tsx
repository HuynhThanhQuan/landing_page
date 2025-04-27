"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const LearningJourney = () => {
  const [isLearningHovered, setIsLearningHovered] = useState(false);
  const [isCommunityHovered, setIsCommunityHovered] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="learning" className="relative py-24 overflow-hidden">
      {/* Background with subtle pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-10" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-5xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-heading)',
            }}
          >
            {t('learning.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('learning.subtitle')}
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Design Card */}
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsLearningHovered(true)}
            onMouseLeave={() => setIsLearningHovered(false)}
            style={{
              boxShadow: isLearningHovered 
                ? '0 25px 35px -12px rgba(0, 0, 0, 0.2)'
                : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transform: isLearningHovered ? 'translateY(-8px)' : 'translateY(0)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div className="relative z-10">
              <div className="bg-emerald-600 text-white px-6 py-2 rounded-lg inline-block mb-4">
                <h3 className="text-3xl font-bold">
                  {t('learning.education.title')}
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-8">
                {t('learning.education.description')}
              </p>
            </div>

            {/* Education Animation */}
            <div className="h-64 relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: isLearningHovered ? 1.05 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Dynamic Book Animation */}
                <div className="relative">
                  {/* Background Circle */}
                  <motion.div
                    className="absolute -inset-8 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  />

                  {/* Main Book Container */}
                  <motion.div
                    className="relative w-32 h-40 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center perspective-1000"
                    animate={{
                      rotateY: [0, 180, 360],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Front Cover */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Decorative Lines */}
                      <div className="absolute inset-0 p-4 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="h-1 w-3/4 bg-white/20 rounded" />
                          <div className="h-1 w-1/2 bg-white/20 rounded" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-1 w-2/3 bg-white/20 rounded" />
                          <div className="h-1 w-1/2 bg-white/20 rounded" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Book Icon */}
                    <motion.svg 
                      className="relative w-16 h-16 text-white z-10" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotateY: [0, -180, -360],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </motion.svg>

                    {/* Glowing Particles */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        animate={{
                          x: [0, Math.random() * 100 - 50],
                          y: [0, Math.random() * 100 - 50],
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.4,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <motion.span 
                className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {t('learning.education.keyword1')}
              </motion.span>
              <motion.span 
                className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t('learning.education.keyword2')}
              </motion.span>
              <motion.span 
                className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {t('learning.education.keyword3')}
              </motion.span>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-emerald-200 rounded-full opacity-20" />
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-teal-200 rounded-full opacity-20" />
          </motion.div>

          {/* Community Card */}
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-50 to-purple-50 p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsCommunityHovered(true)}
            onMouseLeave={() => setIsCommunityHovered(false)}
            style={{
              boxShadow: isCommunityHovered 
                ? '0 25px 35px -12px rgba(0, 0, 0, 0.2)'
                : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transform: isCommunityHovered ? 'translateY(-8px)' : 'translateY(0)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div className="relative z-10">
              <div className="bg-violet-600 text-white px-6 py-2 rounded-lg inline-block mb-4">
                <h3 className="text-3xl font-bold">
                  {t('learning.community.title')}
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-8">
                {t('learning.community.description')}
              </p>
            </div>

            {/* Community Animation */}
            <div className="h-64 relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: isCommunityHovered ? 1.05 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Connected Nodes Animation */}
                <motion.div className="relative w-48 h-48">
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    {[...Array(6)].map((_, i) => {
                      const nextIndex = (i + 1) % 6;
                      const x1 = 50 + Math.sin(i * (Math.PI / 3)) * 42;
                      const y1 = 50 + Math.cos(i * (Math.PI / 3)) * 42;
                      const x2 = 50 + Math.sin(nextIndex * (Math.PI / 3)) * 42;
                      const y2 = 50 + Math.cos(nextIndex * (Math.PI / 3)) * 42;
                      
                      return (
                        <motion.line
                          key={`line-${i}`}
                          x1={`${x1}%`}
                          y1={`${y1}%`}
                          x2={`${x2}%`}
                          y2={`${y2}%`}
                          stroke="rgb(124 58 237)"
                          strokeWidth="1"
                          strokeOpacity="0.3"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: i * 0.2
                          }}
                        />
                      );
                    })}
                    {/* Center connections */}
                    {[...Array(6)].map((_, i) => {
                      const x = 50 + Math.sin(i * (Math.PI / 3)) * 42;
                      const y = 50 + Math.cos(i * (Math.PI / 3)) * 42;
                      
                      return (
                        <motion.line
                          key={`center-line-${i}`}
                          x1="50%"
                          y1="50%"
                          x2={`${x}%`}
                          y2={`${y}%`}
                          stroke="rgb(124 58 237)"
                          strokeWidth="1"
                          strokeOpacity="0.3"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: i * 0.2
                          }}
                        />
                      );
                    })}
                  </svg>

                  {/* Orbiting Nodes */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-5 h-5 -ml-2.5 -mt-2.5 rounded-full bg-violet-600"
                      style={{
                        top: `${50 + Math.cos(i * (Math.PI / 3)) * 42}%`,
                        left: `${50 + Math.sin(i * (Math.PI / 3)) * 42}%`,
                        opacity: 0.8
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-violet-400"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  ))}
                  
                  {/* Center Node */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8 rounded-full bg-violet-600 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        '0 0 0 0 rgba(124, 58, 237, 0.4)',
                        '0 0 0 15px rgba(124, 58, 237, 0)',
                        '0 0 0 0 rgba(124, 58, 237, 0)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-violet-400"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <svg 
                      className="w-8 h-8 text-white relative z-10" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <motion.span 
                className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {t('learning.community.keyword1')}
              </motion.span>
              <motion.span 
                className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t('learning.community.keyword2')}
              </motion.span>
              <motion.span 
                className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {t('learning.community.keyword3')}
              </motion.span>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-violet-200 rounded-full opacity-20" />
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-purple-200 rounded-full opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 