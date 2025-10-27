'use client';
import { useI18n } from './Language';
export function Hero(){
  const { t } = useI18n();
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{t('hero_title')}</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{t('hero_sub')}</p>
          <div className="mt-8 flex gap-3">
            <a href="#ventures" className="btn btn-primary">{t('cta_view_work')}</a>
            <a href="#contact" className="btn btn-ghost">{t('cta_contact')}</a>
          </div>
        </div>
        <div className="card p-6">
          <div className="aspect-video rounded-xl bg-gradient-to-br from-brand/20 to-purple-500/20 dark:from-brand/10 dark:to-fuchsia-500/10 grid place-items-center text-center">
            <div className="p-6">
              <div className="text-6xl">🜁</div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Crafted with precision. Built to last.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export function About(){
  const { t } = useI18n();
  return (
    <section id="about" className="section">
      <div className="container grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card p-6">
          <h2 className="text-2xl font-bold mb-3">{t('about_title')}</h2>
          <p className="text-gray-700 dark:text-gray-300">{t('about_body')}</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Quick Facts</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>• Istanbul, TR</li>
            <li>• Founder & Operator</li>
            <li>• DeFi • AI • Logistics</li>
            <li>• Bilingual/TR-EN (plus AR/中文/日本語 on site)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export function Ventures(){
  const { t } = useI18n();
  const items = [
    { title: "PayUSDT", desc: t('ventures_payusdt'), href: "#" },
    { title: "AI & Software", desc: t('ventures_ai'), href: "#" },
    { title: "Logistics & Industry", desc: t('ventures_industry'), href: "#" }
  ];
  return (
    <section id="ventures" className="section">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">{t('ventures_title')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it)=> (
            <a key={it.title} href={it.href} className="card p-6 hover:scale-[1.01] transition">
              <div className="text-xl font-semibold">{it.title}</div>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{it.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
export function Health(){
  const { t } = useI18n();
  return (
    <section id="health" className="section">
      <div className="container card p-6">
        <h2 className="text-2xl font-bold mb-3">{t('health_title')}</h2>
        <p className="text-gray-700 dark:text-gray-300">{t('health_body')}</p>
        <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
          <li>• Wellness & performance education</li>
          <li>• Ethics-first communication</li>
          <li>• Community health content</li>
          <li>• Partnerships with verified labs/providers</li>
        </ul>
      </div>
    </section>
  )
}
export function Speaking(){
  const { t } = useI18n();
  return (
    <section id="speaking" className="section">
      <div className="container card p-6">
        <h2 className="text-2xl font-bold mb-3">{t('speaking_title')}</h2>
        <p className="text-gray-700 dark:text-gray-300">{t('speaking_body')}</p>
      </div>
    </section>
  )
}
export function Contact(){
  const { t } = useI18n();
  return (
    <section id="contact" className="section">
      <div className="container card p-6">
        <h2 className="text-2xl font-bold mb-3">{t('contact_title')}</h2>
        <p className="text-gray-700 dark:text-gray-300">{t('contact_body')}</p>
        <div className="mt-4">
          <a href="mailto:ilkerkabacik@defipayusdt.io" className="btn btn-primary">ilkerkabacik@defipayusdt.io</a>
        </div>
      </div>
    </section>
  )
}
