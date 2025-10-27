'use client';
import React, {createContext, useContext, useEffect, useState} from 'react';

type Dict = Record<string, string>;
type Lang = 'en'|'tr'|'ar'|'zh'|'ja';

type Ctx = { lang: Lang; setLang: (l:Lang)=>void; t: (k:string)=>string; };
const LanguageContext = createContext<Ctx | null>(null);

// JSON'ları bundle'dan yükle (fetch yok, 404 riski yok)
const loaders: Record<Lang, () => Promise<Dict>> = {
  tr: async () => (await import('../locales/tr.json')).default,
  en: async () => (await import('../locales/en.json')).default,
  ar: async () => (await import('../locales/ar.json')).default,
  zh: async () => (await import('../locales/zh.json')).default,
  ja: async () => (await import('../locales/ja.json')).default,
};

export function LanguageProvider({children}:{children:React.ReactNode}) {
  const [lang, setLang] = useState<Lang>('tr');
  const [dict, setDict] = useState<Dict>({});

  useEffect(() => {
    (async () => {
      try {
        const d = await loaders[lang]();
        setDict(d);
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
      } catch (e) {
        console.error('i18n load error', e);
      }
    })();
  }, [lang]);

  const t = (k:string) => dict[k] ?? k;
  return <LanguageContext.Provider value={{lang, setLang, t}}>{children}</LanguageContext.Provider>;
}

export function useI18n(){
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider');
  return ctx;
}
