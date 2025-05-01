import { Header } from "@/components/Header";
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <Header />
      {children}
    </LanguageProvider>
  );
} 