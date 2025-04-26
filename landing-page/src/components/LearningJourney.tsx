"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export const LearningJourney = () => {
  const [isLearningHovered, setIsLearningHovered] = useState(false);
  const [isCommunityHovered, setIsCommunityHovered] = useState(false);

  return (
    <section id="learning" className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10 opacity-50" 
        style={{ 
          background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(224,242,254,0.5) 100%)'
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
            className="text-4xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent"
            style={{ 
              fontFamily: 'var(--font-heading)',
              backgroundImage: 'linear-gradient(to right, #2563eb, #3b82f6)'
            }}
          >
            Learning Journey
          </motion.h2>
          <motion.p 
            className="text-xl md:text-1xl text-gray-500"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Your journey to mastery starts here
          </motion.p>
        </motion.div>

        {/* Learning & Community Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Learning Section */}
          <motion.div
            className="relative rounded-2xl p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsLearningHovered(true)}
            onMouseLeave={() => setIsLearningHovered(false)}
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              boxShadow: isLearningHovered 
                ? '0 25px 35px -12px rgba(37, 99, 235, 0.25), 0 15px 25px -12px rgba(0, 0, 0, 0.15), 0 0 8px 2px rgba(37, 99, 235, 0.1)'
                : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isLearningHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)'
            }}
          >
            {/* Icon */}
            <div 
              className="h-16 w-16 rounded-full mb-6 flex items-center justify-center"
              style={{ 
                background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isLearningHovered ? 'scale(1.1)' : 'scale(1)',
                boxShadow: isLearningHovered 
                  ? '0 12px 20px -6px rgba(37, 99, 235, 0.4)'
                  : '0 4px 6px -1px rgba(37, 99, 235, 0.1)'
              }}
            >
              <svg 
                className="w-8 h-8 text-white"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>

            {/* Content */}
            <h3 
              className="text-2xl font-bold mb-4 text-gray-900"
              style={{
                transition: 'transform 0.3s ease-in-out',
                transform: isLearningHovered ? 'translateY(-2px)' : 'translateY(0)'
              }}
            >
              Learning
            </h3>
            <ul className="space-y-4 text-gray-700">
              {['Structured learning paths for all skill levels',
                'Hands-on projects and real-world applications',
                'Expert-led workshops and tutorials'].map((text, index) => (
                <li 
                  key={index}
                  className="flex items-start"
                >
                  <svg 
                    className="w-6 h-6 mr-3 mt-1 text-blue-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="transition-colors duration-200 hover:text-blue-600">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Community Section */}
          <motion.div
            className="relative rounded-2xl p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsCommunityHovered(true)}
            onMouseLeave={() => setIsCommunityHovered(false)}
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              boxShadow: isCommunityHovered 
                ? '0 25px 35px -12px rgba(59, 130, 246, 0.25), 0 15px 25px -12px rgba(0, 0, 0, 0.15), 0 0 8px 2px rgba(59, 130, 246, 0.1)'
                : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isCommunityHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)'
            }}
          >
            {/* Icon */}
            <div 
              className="h-16 w-16 rounded-full mb-6 flex items-center justify-center"
              style={{ 
                background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isCommunityHovered ? 'scale(1.1)' : 'scale(1)',
                boxShadow: isCommunityHovered 
                  ? '0 12px 20px -6px rgba(59, 130, 246, 0.4)'
                  : '0 4px 6px -1px rgba(59, 130, 246, 0.1)'
              }}
            >
              <svg 
                className="w-8 h-8 text-white"
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
            </div>

            {/* Content */}
            <h3 
              className="text-2xl font-bold mb-4 text-gray-900"
              style={{
                transition: 'transform 0.3s ease-in-out',
                transform: isCommunityHovered ? 'translateY(-2px)' : 'translateY(0)'
              }}
            >
              Community
            </h3>
            <ul className="space-y-4 text-gray-700">
              {['Connect with like-minded learners',
                'Collaborative projects and study groups',
                'Mentorship and networking opportunities'].map((text, index) => (
                <li 
                  key={index}
                  className="flex items-start"
                >
                  <svg 
                    className="w-6 h-6 mr-3 mt-1 text-blue-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="transition-colors duration-200 hover:text-blue-600">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 