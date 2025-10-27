'use client';
import React, {createContext, useContext, useEffect, useState} from 'react';

// JSON'ları statik import (pakete kesin girer)
import tr from '../locales/tr.json';
// Diğer diller henüz yoksa sorun değil; TR'ye fallback yapacağız.
let en: any = tr, ar: any = tr, zh: any = tr, ja: any = tr;
try { en = (await import('../locales/en.json')).default } catch {}
try { ar = (await import('../locales/ar.json')).default } catch {}
try { zh = (await import('../locales/zh.json')).default } catch {}
try { ja = (await import('../locales/ja.json')).default } catch {}

type Dict = Record<string,string>;
type Lang = 'en'|'tr'|'ar'|'zh'|'ja';

const dicts: Record<Lang, Dict> = { tr, en, ar, zh, ja };

type Ctx = { lang: Lang; setLang: (l:Lang)=>void; t: (k:string)=>string; };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({children}:{children:React.ReactNode}) {
  const [lang, setLang] = useState<Lang>('tr');
  const [dict, setDict] = useState<Dict>(tr);

  useEffect(() => {
    const d = dicts[lang] ?? tr;       // her zaman bir sözlük var
    setDict(d);
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
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
