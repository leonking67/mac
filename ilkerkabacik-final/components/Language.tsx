'use client';
import React, { createContext, useContext, useState } from 'react';

// 1) TR sözlüğünü sabit olarak kodda tutuyoruz (hemen çalışır)
const TR: Record<string, string> = {
  "nav_about": "Hakkımda",
  "nav_ventures": "Projeler",
  "nav_health": "Sağlık",
  "nav_speaking": "Konuşmalar",
  "nav_contact": "İletişim",
  "hero_title": "İlker Kabacık",
  "hero_sub": "Girişimci • Üretici • Stratejist",
  "cta_view_work": "Projeleri Gör",
  "cta_contact": "İletişime Geç",
  "about_title": "Ben Kimim?",
  "about_body": "Teknoloji, finans ve sağlığı birleştiren yenilikçi sistemler kuruyorum. Yapay zekâ, DeFi ve endüstri projelerinde geleceği bugünden inşa ediyorum.",
  "ventures_title": "Projelerim",
  "ventures_payusdt": "PayUSDT — Merkeziyetsiz, sınır tanımayan ödeme altyapısı.",
  "ventures_ai": "Yapay Zekâ & Yazılım — otomasyon, veri ürünleri ve geliştirici araçları.",
  "ventures_industry": "Lojistik & Ağır Sanayi — pragmatik sistemler ve güvenilirlik.",
  "health_title": "Sağlık",
  "health_body": "Halka açık sağlık girişimleri, iyi yaşam eğitimi ve etik Ar-Ge iletişimi. (Tescilli ilaç formülleri yayımlanmaz.)",
  "speaking_title": "Konuşmalar & Medya",
  "speaking_body": "DeFi, yapay zekâ ve kurucu icrası üzerine anahtar konuşmalar ve danışmanlık. Seçici olarak çalışırım.",
  "contact_title": "İletişim",
  "contact_body": "Ciddi iş ortaklığı teklifleri için doğrudan e-posta gönderin.",
  "footer_rights": "Tüm hakları saklıdır."
};

// 2) Şimdilik yalnızca TR kullan (diğer dilleri sonra ekleriz)
type Lang = 'tr';
const DICTS: Record<Lang, Record<string,string>> = { tr: TR };

type Ctx = { lang: Lang; setLang: (l:Lang)=>void; t: (k:string)=>string };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('tr');
  const t = (k: string) => (DICTS[lang][k] ?? k);
  // Arayüz yönü ve lang attrib. TR olduğu için ltr kalır; AR eklerken dir='rtl' yapacağız.
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider');
  return ctx;
}
