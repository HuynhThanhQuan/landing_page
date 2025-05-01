"use client";

import { motion } from 'framer-motion';
import { EducationTimeline } from '../../components/EducationTimeline';
import { EducationHero } from '../../components/EducationHero';
import { EducationFeatures } from '../../components/EducationFeatures';
import { Footer } from '@/components/Footer';

export default function EducationPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <EducationHero />
      <EducationTimeline />
      <EducationFeatures />
      <Footer />
    </motion.div>
  );
} 