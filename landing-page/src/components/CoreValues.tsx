"use client";

import { motion } from 'framer-motion';

const coreValues = [
  {
    title: "Curiosity-Driven Excellence",
    description: "We ignite and nurture an unending spirit of exploration to push boundaries in AI & Data Science, constantly seeking new frontiers of knowledge and innovation."
  },
  {
    title: "Impact through Intelligence",
    description: "We cultivate professionals who master both technical expertise and business acumen – transforming data into actionable insights that drive real-world value."
  },
  {
    title: "Community of Growth",
    description: "We foster a sustainable ecosystem of learning, sharing, and development for AI & Data enthusiasts, creating a supportive environment for continuous growth."
  },
  {
    title: "Integrity in Consulting & Learning",
    description: "We uphold the highest standards of transparency, honesty, and responsibility in both education and business consulting, building trust through ethical practices."
  }
];

export const CoreValues = () => {
  return (
    <section id="core-values" className="relative h-screen flex items-center justify-center">
      {/* Background pattern - Tạo hiệu ứng nền với 2 lớp gradient chồng lên nhau */}
      <div className="absolute inset-0 bg-[var(--gradient-background)]" />
      <div className="absolute inset-0 bg-[var(--gradient-primary)] opacity-10" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header - Animation khi scroll vào view */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Trạng thái ban đầu: ẩn và dịch chuyển xuống 20px
          whileInView={{ opacity: 1, y: 0 }} // Khi scroll vào view: hiện ra và trở về vị trí ban đầu
          transition={{ duration: 0.5 }} // Thời gian animation: 0.5s
          viewport={{ once: true }} // Chỉ chạy animation một lần
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Our Core Values
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            The principles that guide our journey in AI & Data Science education
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }} // Trạng thái ban đầu: ẩn và dịch chuyển xuống
              whileInView={{ opacity: 1, y: 0 }} // Khi scroll vào view: hiện ra
              transition={{ 
                duration: 0.5, // Thời gian animation: 0.5s
                delay: index * 0.1 // Delay tăng dần theo index để tạo hiệu ứng tuần tự
              }}
              viewport={{ once: true }} // Chỉ chạy animation một lần
              className="aspect-[4/3] perspective-1000" // Tạo perspective cho hiệu ứng 3D
            >
              {/* Card container với hiệu ứng flip */}
              <motion.div
                className="relative w-full h-full"
                whileHover={{ rotateY: 180 }} // Khi hover: xoay 180 độ theo trục Y
                transition={{ 
                  duration: 0.8, // Thời gian flip: 0.8s
                  ease: [0.4, 0, 0.2, 1] // Easing function tạo hiệu ứng mượt mà tự nhiên
                }}
                style={{ transformStyle: 'preserve-3d' }} // Giữ hiệu ứng 3D khi transform
              >
                {/* Mặt trước của card */}
                <div 
                  className="absolute w-full h-full backface-hidden rounded-xl p-6 flex items-center justify-center text-center"
                  style={{ 
                    background: 'var(--gradient-primary)',
                    boxShadow: 'var(--shadow-primary)',
                    backfaceVisibility: 'hidden' // Ẩn mặt sau khi xoay
                  }}
                >
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                    {value.title}
                  </h3>
                </div>

                {/* Mặt sau của card */}
                <div 
                  className="absolute w-full h-full backface-hidden rounded-xl p-6 flex items-center justify-center text-center"
                  style={{ 
                    background: 'var(--gradient-secondary)',
                    boxShadow: 'var(--shadow-secondary)',
                    backfaceVisibility: 'hidden', // Ẩn mặt trước khi xoay
                    transform: 'rotateY(180deg)' // Xoay 180 độ để làm mặt sau
                  }}
                >
                  <p className="text-white text-base" style={{ fontFamily: 'var(--font-body)' }}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 