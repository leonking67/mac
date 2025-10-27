'use client';
import ThemeToggle from './ThemeToggle';
import { useI18n } from './Language';
import { useState } from 'react';
const langs = [{code:'tr', label:'TR'},{code:'en', label:'EN'},{code:'ar', label:'AR'},{code:'zh', label:'中文'},{code:'ja', label:'日本語'}] as const;
export default function Nav(){
  const {t, setLang, lang} = useI18n();
  const [open, setOpen] = useState(false);
  const items = [
    {href:'#about', label:t('nav_about')},
    {href:'#ventures', label:t('nav_ventures')},
    {href:'#health', label:t('nav_health')},
    {href:'#speaking', label:t('nav_speaking')},
    {href:'#contact', label:t('nav_contact')},
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-[#0b0f17]/70 border-b border-gray-200/60 dark:border-white/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-semibold tracking-tight text-lg">İlker Kabacık</a>
        <nav className="hidden md:flex items-center gap-6">
          {items.map(i=> <a key={i.href} href={i.href} className="hover:opacity-80">{i.label}</a>)}
          <ThemeToggle/>
          <div className="flex gap-2">
            {langs.map(l=> (
              <button key={l.code} onClick={()=>setLang(l.code as any)} className={`px-2 py-1 rounded-xl text-sm border ${lang===l.code?'bg-brand text-white border-transparent':'border-gray-200/60 dark:border-white/10'}`}>{l.label}</button>
            ))}
          </div>
        </nav>
        <button className="md:hidden btn btn-ghost" onClick={()=>setOpen(!open)} aria-label="Menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200/60 dark:border-white/10">
          <div className="container py-3 space-y-3">
            {items.map(i=> <a key={i.href} href={i.href} onClick={()=>setOpen(false)} className="block">{i.label}</a>)}
            <div className="flex items-center gap-3"><ThemeToggle/>
              <div className="flex gap-2">
                {langs.map(l=> (
                  <button key={l.code} onClick={()=>setLang(l.code as any)} className={`px-2 py-1 rounded-xl text-sm border ${lang===l.code?'bg-brand text-white border-transparent':'border-gray-200/60 dark:border-white/10'}`}>{l.label}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
