'use client';
import React, {createContext, useContext, useEffect, useState} from 'react';

type Dict = Record<string, string>;
type Lang = 'en'|'tr'|'ar'|'zh'|'ja';

type Ctx = { lang: Lang; setLang: (l:Lang)=>void; t: (k:string)=>string; };
const LanguageContext = createContext<Ctx | null>(null);

/** Dosyayı nerede olursa olsun bul: önce bundle import, olmazsa public'ten fetch */
async function loadDict(lang: Lang): Promise<Dict> {
  // 1) Root /locales içinden dynamic import
  try {
    const mod = await import(`../locales/${lang}.json`);
    return (mod as any).default as Dict;
  } catch {
    // 2) public/locales içinden fetch fallback
    try {
      const res = await fetch(`/locales/${lang}.json`, { cache: 'no-store' });
      if (!res.ok) throw new Error('404');
      return await res.json();
    } catch (e) {
      console.error('i18n load error for', lang, e);
      return {}; // dict boş kalırsa anahtarları gösterir
    }
  }
}

export function LanguageProvider({children}:{children:React.ReactNode}) {
  const [lang, setLang] = useState<Lang>('tr');
  const [dict, setDict] = useState<Dict>({});

  useEffect(() => {
    (async () => {
      const d = await loadDict(lang);
      setDict(d);
      document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
    })();
  }, [lang]);

  const t = (k:string) => dict[k] ?? k;
  return (
    <LanguageContext.Provider value={{lang, setLang, t}}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n(){
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider');
  return ctx;
}
