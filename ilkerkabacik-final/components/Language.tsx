'use client';
import React, {createContext, useContext, useState, useEffect} from 'react';
type Dict = Record<string,string>;
type Lang = 'en'|'tr'|'ar'|'zh'|'ja';
type Ctx = { lang: Lang; setLang: (l:Lang)=>void; t: (k:string)=>string; };
const LanguageContext = createContext<Ctx | null>(null);
export function LanguageProvider({children}:{children:React.ReactNode}){
  const [lang,setLang] = useState<Lang>('tr');
  const [dict, setDict] = useState<Dict>({});
  useEffect(()=>{(async()=>{
    const res = await fetch(`/locales/${lang}.json`);
    setDict(await res.json());
    document.documentElement.dir = (lang==='ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  })();},[lang]);
  const t = (k:string)=> dict[k] ?? k;
  return <LanguageContext.Provider value={{lang,setLang,t}}>{children}</LanguageContext.Provider>
}
export function useI18n(){ const ctx = useContext(LanguageContext); if(!ctx) throw new Error('useI18n must be used within LanguageProvider'); return ctx; }
