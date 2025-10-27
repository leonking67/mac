'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Dil tipleri
type Language = 'tr' | 'en';

// Context tipi
interface LanguageContextProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

// Çeviriler
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

// Context oluştur
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Provider bileşeni
export const LanguageProvider = ({ children }: { children?: ReactNode }) => {
  const [lang, setLang] = useState<Language>('tr');

  const t = (key: string) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook
export const useI18n = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useI18n must be used within a LanguageProvider');
  return context;
};

// Default export
export default LanguageProvider;
