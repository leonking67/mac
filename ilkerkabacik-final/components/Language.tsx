'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  tr: {
    home: 'Ana Sayfa',
    about: 'Hakkında',
    contact: 'İletişim',
    welcome: 'Hoş geldin',
  },
  en: {
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    welcome: 'Welcome',
  },
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useI18n must be used within a LanguageProvider');
  return context;
};
export default LanguageProvider;
