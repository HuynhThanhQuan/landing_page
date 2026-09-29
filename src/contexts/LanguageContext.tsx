"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '@/translations';

type Language = 'vi' | 'en';

type TranslationValue = string | { [key: string]: TranslationValue } | TranslationValue[];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, updateLanguage] = useState<Language>('en');
  useEffect(() => {
    try { const saved = localStorage.getItem('cm-language-v1'); if (saved === 'vi' || saved === 'en') updateLanguage(saved); } catch { /* Storage is optional. */ }
  }, []);
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  const setLanguage = (lang: Language) => {
    updateLanguage(lang);
    try { localStorage.setItem('cm-language-v1', lang); } catch { /* Private browsing still works. */ }
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value: TranslationValue = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        if (Array.isArray(value)) {
          const index = parseInt(k);
          if (!isNaN(index) && index >= 0 && index < value.length) {
            value = value[index];
          } else {
            return key;
          }
        } else {
          value = (value as { [key: string]: TranslationValue })[k];
        }
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
