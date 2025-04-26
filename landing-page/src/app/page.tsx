import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { LearningJourney } from '@/components/LearningJourney';
import { Members } from '@/components/Members';
import { CoreValues } from '@/components/CoreValues';
import { Feedback } from '@/components/Feedback';
import { Roadmap } from '@/components/Roadmap';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div className="bg-[var(--gradient-background)]">
        <LearningJourney />
      </div>
      <div className="bg-white">
        <Members />
      </div>
      <CoreValues />
      <Feedback />
      <Roadmap />
    </main>
  );
}
