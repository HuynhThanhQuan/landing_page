"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  linkedin?: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Huỳnh Thanh Quan",
    role: "Founder & CEO",
    avatar: "/images/team/quan.webp",
    linkedin: "https://www.linkedin.com/in/charles-huynh/"
  }
];

export const AboutUs = () => {
  return (
    <section id="about" className="py-12 relative">
      {/* Glass Background */}
      <div 
        className="absolute inset-0 backdrop-blur-sm bg-white/30"
        style={{ 
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          backgroundColor: 'rgba(240, 249, 255, 0.7)',
          boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.05)'
        }}
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto font-light"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          </motion.p>
        </div>

        {/* Team Members */}
        <div className="flex justify-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Avatar Container */}
              <motion.div
                className="relative w-48 h-48 mb-6 rounded-full overflow-hidden bg-gradient-to-r from-blue-100 to-cyan-100"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 hover:opacity-20 transition-opacity duration-300" />
                
                {/* Avatar Image */}
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Name and Role */}
              <motion.h3
                className="text-xl font-semibold mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
                whileHover={{ scale: 1.05 }}
              >
                {member.name}
              </motion.h3>
              <motion.p
                className="text-lg text-gray-500 text-center mb-4"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {member.role}
              </motion.p>

              {/* LinkedIn Link */}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors text-base"
                >
                  Connect on LinkedIn
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 