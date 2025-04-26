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
                    <Icon className="w-12 h-12 mb-4 text-[var(--tertiary-color)]" />
                    <h3 className="text-2xl font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>
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