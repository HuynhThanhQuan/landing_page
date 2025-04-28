'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';

// Placeholder for company data - you can replace with actual data
type Company = {
  name: string;
  iconUrl: string;
};

const PLACEHOLDER_COMPANIES: Company[] = [
  { name: 'Techcombank', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Techcombank_logo.png' },
  { name: 'Company 2', iconUrl: 'https://hrchannels.com/Upload/avatar/20210607/183053882_2x4-OneMount-Wordmark-RGB-Black.png' },
  { name: 'Company 3', iconUrl: 'https://svglogos.net/wp-content/uploads/katalon.svg' },
  { name: 'Company 4', iconUrl: 'https://th.bing.com/th/id/R.ffde201fa563b1d6631cd306773de16a?rik=aVUkNGSn109tGw&riu=http%3a%2f%2fdesignday.msu.edu%2fwp-content%2fuploads%2f2016%2f09%2fBosch-Logo1.png&ehk=ooxhGhTsN4DGTZqTLFV56%2fwQDVVxQNkg3HEGy4t%2fC4s%3d&risl=&pid=ImgRaw&r=0' },
  { name: 'Company 5', iconUrl: 'https://cdn.haitrieu.com/wp-content/uploads/2022/05/Logo-Grab-1024x404.png' },
  { name: 'Company 5', iconUrl: 'https://www.correlation-one.com/hubfs/Client%20Logos/WorldQuant%2c%20dark.png' },
  { name: 'Company 5', iconUrl: 'https://solutions.viettel.vn/storage/logo-text.png' },
  { name: 'Company 5', iconUrl: 'https://vectorseek.com/wp-content/uploads/2023/09/Vietcombank-Logo-Vector.svg-.png' },
  { name: 'Company 5', iconUrl: 'https://svtech.com.vn/wp-content/uploads/2020/10/ACB_Logo-1-1.png' },
  { name: 'Company 5', iconUrl: 'https://i1.wp.com/logos-world.net/wp-content/uploads/2021/02/JP-Morgan-Chase-Emblem.png' },
  { name: 'Company 5', iconUrl: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
  { name: 'Company 5', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png' },
];

export const Members = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-10 bg-white overflow-hidden">
      {/* Section Header */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-2xl font-bold bg-clip-text text-transparent"
          style={{ 
            fontFamily: 'var(--font-heading)',
            backgroundImage: 'linear-gradient(to left,rgb(142, 149, 158), #020617)'
          }}
        >
          Our Community Members Come From
        </motion.h2>
      </motion.div>

      {/* Infinite Scroll Container */}
      <div 
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex whitespace-nowrap">
          {/* First set of logos */}
          <motion.div
            className="flex space-x-16 py-8"
            animate={isHovered ? { x: "0%" } : { x: "-100%" }}
            transition={{
              x: {
                duration: 35,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }
            }}
          >
            {PLACEHOLDER_COMPANIES.map((company, index) => (
              <div 
                key={`set1-${company.name}-${index}`}
                className="flex items-center justify-center min-w-[120px] p-4"
              >
                <motion.div 
                  className="w-24 h-16"
                  whileHover={{ 
                    scale: 1.15,
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img
                    src={company.iconUrl}
                    alt={`${company.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Second set of logos (exact duplicate for seamless loop) */}
          <motion.div
            className="flex space-x-16 py-8"
            animate={isHovered ? { x: "0%" } : { x: "-100%" }}
            transition={{
              x: {
                duration: 35,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }
            }}
          >
            {PLACEHOLDER_COMPANIES.map((company, index) => (
              <div 
                key={`set2-${company.name}-${index}`}
                className="flex items-center justify-center min-w-[120px] p-4"
              >
                <motion.div 
                  className="w-24 h-16"
                  whileHover={{ 
                    scale: 1.15,
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img
                    src={company.iconUrl}
                    alt={`${company.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays with animation */}
        <motion.div 
          className="absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-white via-white to-transparent pointer-events-none"
          animate={{
            opacity: [1, 0.3, 1],
            x: [-5, 0, -5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-white via-white to-transparent pointer-events-none"
          animate={{
            opacity: [1, 0.3, 1],
            x: [5, 0, 5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
}; 