"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  videoId?: string; // YouTube video ID to be added later
}

const courses: Course[] = [
  {
    id: 'data-science-in-finance',
    title: 'Data Science in Finance',
    description: 'Learn the basics of Artificial Intelligence and Machine Learning',
    duration: '8 weeks',
    level: 'Advanced',
  },
  {
    id: 'data-science',
    title: 'Data Science Essentials',
    description: 'Master the core concepts of Data Science and Analytics',
    duration: '10 weeks',
    level: 'Intermediate',
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning Advanced',
    description: 'Advanced techniques in Neural Networks and Deep Learning',
    duration: '12 weeks',
    level: 'Advanced',
  },
];

export const EducationHero = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('education.title')}
          </h1>
          <p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('education.subtitle')}
          </p>
        </motion.div>

        {/* Course List */}
        <div className="space-y-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-4 bg-gradient-to-r from-gray-50/50 to-gray-100/50 rounded-3xl cursor-pointer"
            >
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                whileHover={{
                  boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Course Information */}
                  <motion.div 
                    className="flex-1 p-8"
                    whileHover={{
                      backgroundColor: "rgba(249, 250, 251, 0.3)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.h3 
                      className="text-2xl font-bold mb-4"
                      style={{ fontFamily: 'var(--font-heading)' }}
                      whileHover={{
                        x: 3,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {course.title}
                    </motion.h3>
                    <p 
                      className="text-gray-600 mb-6"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {course.description}
                    </p>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">⏱</span>
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">📚</span>
                        <span>{course.level}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Video Placeholder */}
                  <div className="flex-1 bg-gray-100 min-h-[300px] flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <span className="block text-4xl mb-2">🎥</span>
                      <span>Video coming soon</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 