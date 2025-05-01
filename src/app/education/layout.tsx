import { EducationHeader } from "@/components/EducationHeader";
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <EducationHeader />
      {children}
    </LanguageProvider>
  );
} 