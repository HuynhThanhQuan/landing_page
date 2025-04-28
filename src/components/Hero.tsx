"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  const handleScrollToLearning = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const learningSection = document.getElementById('learning');
    if (learningSection) {
      learningSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const statistics = [
    {
      value: "5000+",
      label: t('hero.stats.members')
    },
    {
      value: "100+",
      label: t('hero.stats.hours')
    },
    {
      value: "95%",
      label: t('hero.stats.recommendation')
    }
  ];

  return (
    // Main hero section with adjusted height and center alignment
    <section id="hero" className="relative h-[75vh] flex items-start justify-center pt-20 pb-0">
      {/* Background gradient layer */}
      <div 
        className="absolute inset-1 -z-10" 
        style={{ background: 'var(--gradient-background)' }}
      />
      
      {/* Main content wrapper with max width and padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 w-full">
        {/* Two-column grid layout on large screens */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left column - Text content */}
          <motion.div
            // Slide in from left animation
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:pt-0 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Heading container with underline effect */}
            <motion.div className="relative">
              {/* Main heading with responsive font size */}
              <motion.h1 
                className="text-6xl lg:text-7xl font-bold mb-3"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--text-color)',
                  lineHeight: '1.5'
                }}
              >
                {/* First line with fade up and hover animation */}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="block"
                >
                  <motion.span
                    className="inline-block"
                    whileHover={{ 
                      scale: 1.02,
                      color: 'var(--quaternary-color)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    Learn Together
                  </motion.span>
                </motion.span>

                {/* Second line with hover animation */}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="block"
                >
                  <motion.span
                    className="inline-block"
                    style={{ color: 'var(--tertiary-color)' }}
                    whileHover={{ 
                      scale: 1.02,
                      color: 'var(--quaternary-color)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    Grow Together
                  </motion.span>
                </motion.span>
              </motion.h1>
              
              {/* Animated underline effect */}
              <motion.div
                className="relative -left-0 -right-4 h-2 rounded-full"
                style={{ 
                  background: 'var(--gradient-secondary)',
                  bottom: '-10px',
                  opacity: 0.5
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.div>
            
            {/* Description text with fade up animation */}
            <motion.p 
              className="text-xl mb-12 mt-8 opacity-90 max-w-2xl"
              style={{ 
                fontFamily: 'var(--font-body)',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {t('hero.description')}
            </motion.p>

            {/* Statistics Section */}
            <motion.div 
              className="grid grid-cols-3 gap-8 max-w-1xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center relative group cursor-pointer p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  {/* Stat content */}
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-3xl lg:text-4xl font-bold mb-2"
                      style={{ 
                        fontFamily: 'var(--font-heading)',
                        background: 'var(--gradient-primary)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0px 0px 0px rgba(58, 190, 249, 0)',
                      }}
                      whileHover={{ 
                        y: -4,
                        textShadow: [
                          '0px 4px 8px rgba(58, 190, 249, 0.3)',
                          '0px 8px 16px rgba(58, 190, 249, 0.3)'
                        ],
                        transition: { 
                          duration: 0.3,
                          textShadow: { 
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 1
                          }
                        }
                      }}
                    >
                      {stat.value}
                    </motion.h3>
                    <motion.p 
                      className="text-sm lg:text-base text-gray-600"
                      style={{ 
                        fontFamily: 'var(--font-body)',
                        textShadow: '0px 0px 0px rgba(58, 188, 249, 0.65)',
                      }}
                      whileHover={{ 
                        y: -4,
                        textShadow: '0px 4px 8px rgba(26, 148, 205, 0.7)',
                        transition: { duration: 0.1 }
                      }}
                    >
                      {stat.label}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button container */}
            <div className="flex justify-center lg:justify-start mb-16 w-full">
              {/* Primary CTA button with hover effect */}
              <motion.a
                href="#learning"
                onClick={handleScrollToLearning}
                className="px-8 py-3 rounded-full text-white font-medium"
                style={{ background: 'var(--gradient-primary)' }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: 'var(--shadow-primary)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.cta.primary')}
              </motion.a>
            </div>
          </motion.div>
          
          {/* Right column - Animated shapes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[500px]"
          >
            {/* Central circular shape */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full"
              style={{ 
                background: 'var(--gradient-primary)',
                boxShadow: 'var(--shadow-primary)'
              }}
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Orbiting circle */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full"
              style={{ 
                background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 50%, #ffb347 100%)',
                boxShadow: '0 4px 20px rgba(255, 107, 107, 0.3)'
              }}
              animate={{ 
                rotate: [0, 360],
                x: [-100, 100, -100],
                y: [-100, 100, -100]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Second orbiting circle */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-10 h-10 rounded-full"
              style={{ 
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #00c6fb 100%)',
                boxShadow: '0 4px 20px rgba(79, 172, 254, 0.3)'
              }}
              animate={{ 
                rotate: [0, -360],
                x: [0, 150, 0, -150, 0],
                y: [0, -150, 0, 150, 0]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Top left square with floating animation */}
            <motion.div
              className="absolute top-0 left-0 w-24 h-24 rounded-2xl"
              style={{ 
                background: 'var(--gradient-secondary)',
                boxShadow: 'var(--shadow-secondary)'
              }}
              animate={{ 
                rotate: [0, 45, 0],
                scale: [1, 1.2, 1],
                y: [0, -20, 0],
                x: [0, 20, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Bottom right triangle with floating animation */}
            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32"
              style={{ 
                background: 'var(--gradient-primary)',
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                boxShadow: 'var(--shadow-primary)'
              }}
              animate={{ 
                rotate: [0, -45, 0],
                scale: [1, 1.15, 1],
                y: [0, 20, 0],
                x: [0, -20, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Middle right circle with floating animation */}
            <motion.div
              className="absolute top-1/2 right-0 w-16 h-16 rounded-full"
              style={{ 
                background: 'var(--gradient-secondary)',
                boxShadow: 'var(--shadow-secondary)'
              }}
              animate={{ 
                x: [0, -30, 0],
                y: [0, 30, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Middle left diamond with floating animation */}
            <motion.div
              className="absolute top-1/2 left-0 w-20 h-20"
              style={{ 
                background: 'var(--gradient-primary)',
                transform: 'rotate(45deg)',
                boxShadow: 'var(--shadow-primary)'
              }}
              animate={{ 
                rotate: [45, 90, 45],
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Small floating circles with dynamic positioning */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full"
                style={{ 
                  background: i % 2 ? 'var(--gradient-primary)' : 'var(--gradient-secondary)',
                  top: `${20 + i * 15}%`,
                  left: `${20 + i * 15}%`
                }}
                animate={{ 
                  y: [0, -20, 0],
                  x: [0, 20, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 