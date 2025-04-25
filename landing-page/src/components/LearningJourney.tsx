"use client";

import { motion } from 'framer-motion';

export const LearningJourney = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10" 
        style={{ background: 'var(--gradient-background)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-heading)',
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Learning Journey
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Your journey to mastery starts here
          </motion.p>
        </motion.div>

        {/* Learning & Community Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Learning Section */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ translateY: -5 }}
            style={{ 
              background: 'var(--glass-background)',
              border: '1px solid var(--glass-border)',
            }}
          >
            <div className="h-16 w-16 rounded-full mb-6 flex items-center justify-center"
              style={{ background: 'var(--gradient-primary)' }}
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
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--text-color)' }}
            >
              Learning
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
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
                <span>Structured learning paths for all skill levels</span>
              </li>
              <li className="flex items-start">
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
                <span>Hands-on projects and real-world applications</span>
              </li>
              <li className="flex items-start">
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
                <span>Expert-led workshops and tutorials</span>
              </li>
            </ul>
          </motion.div>

          {/* Community Section */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ translateY: -5 }}
            style={{ 
              background: 'var(--glass-background)',
              border: '1px solid var(--glass-border)',
            }}
          >
            <div className="h-16 w-16 rounded-full mb-6 flex items-center justify-center"
              style={{ background: 'var(--gradient-secondary)' }}
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
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--text-color)' }}
            >
              Community
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
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
                <span>Connect with like-minded learners</span>
              </li>
              <li className="flex items-start">
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
                <span>Collaborative projects and study groups</span>
              </li>
              <li className="flex items-start">
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
                <span>Mentorship and networking opportunities</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 