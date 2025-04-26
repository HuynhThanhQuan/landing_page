"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';

// Placeholder type for feedback data
type FeedbackItem = {
  id: number;
  name: string;
  avatar?: string;
  feedback: string;
  role?: string;
};

// Placeholder data for feedback images
const feedbackImages = [
  "/images/feedback/feedback1.PNG",
  "/images/feedback/feedback3.PNG",
  "/images/feedback/feedback4.PNG",
  "/images/feedback/feedback5.PNG",
  "/images/feedback/feedback2.PNG",
];

// Placeholder data - will be replaced with real data
const placeholderFeedbacks: FeedbackItem[] = [
  {
    id: 1,
    name: "John Doe",
    feedback: "The personalized learning approach helped me transition from marketing to data science smoothly. The structured curriculum and hands-on projects made complex concepts accessible.",
    role: "Marketing Professional"
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Despite my non-technical background, the structured curriculum made machine learning concepts accessible.",
    role: "Business Analyst"
  },
  {
    id: 3,
    name: "Alex Johnson",
    feedback: "The community support and practical projects were invaluable in my learning journey. I never felt alone in this journey.",
    role: "Software Engineer"
  },
  {
    id: 4,
    name: "Sarah Wilson",
    feedback: "The flexibility of the learning platform allowed me to balance my studies with my full-time job. The bite-sized lessons and practical exercises were perfect for my schedule.",
    role: "Product Manager"
  },
  {
    id: 5,
    name: "Michael Chen",
    feedback: "As someone from a finance background, I appreciated how the course connected data science concepts to real-world business applications.",
    role: "Financial Analyst"
  },
  {
    id: 6,
    name: "Emily Rodriguez",
    feedback: "The AI projects and real-world case studies helped me develop practical skills that I could immediately apply in my current role. The mentorship program was particularly valuable.",
    role: "Data Analyst"
  },
  {
    id: 7,
    name: "David Kim",
    feedback: "The collaborative learning environment and peer review system helped me gain different perspectives on problem-solving approaches. It's amazing how much you can learn from fellow students.",
    role: "Research Scientist"
  },
  {
    id: 8,
    name: "Lisa Thompson",
    feedback: "The course's focus on ethical AI and responsible data practices gave me a comprehensive understanding of not just the technical aspects, but also the societal impact of our work.",
    role: "AI Ethics Consultant"
  }
];

export const Feedback = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            Every Story Shapes Our Learning Community
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transforming diverse backgrounds into data science expertise through personalized learning paths
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative">
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
          <div className="columns-1 md:columns-2 gap-8 max-w-7xl mx-auto px-10 sm:px-6 lg:px-10">
            {placeholderFeedbacks.map((feedback, index) => (
              <motion.div
                key={feedback.id}
                className="break-inside-avoid mb-8 bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* User Info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0">
                    {feedback.avatar ? (
                      <img 
                        src={feedback.avatar} 
                        alt={feedback.name}
                        className="w-12 h-12 rounded-full"
                      />
                    ) : (
                      <FaUserCircle className="w-12 h-12 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                      {feedback.name}
                    </h3>
                    {feedback.role && (
                      <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
                        {feedback.role}
                      </p>
                    )}
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