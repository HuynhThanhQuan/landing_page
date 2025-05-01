"use client";

import { motion } from 'framer-motion';
import { EducationHero } from '@/components/EducationHero';
import { EducationHeader } from '@/components/EducationHeader';
import { Footer } from '@/components/Footer';

export default function EducationPage() {
  return (
    <main>
      <EducationHeader />
      <EducationHero />
      <Footer />
    </main>
  );
} 