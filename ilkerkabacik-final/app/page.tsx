'use client';

import { useTranslation } from 'react-i18next';
import Language from '../components/Language';

export default function Page() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-10">
      <div className="flex justify-between w-full max-w-5xl items-center mb-6">
        <h1 className="text-4xl font-bold">{t('hero_title')}</h1>
        <Language />
      </div>
      <p className="text-gray-400 mt-2">{t('hero_sub')}</p>
      <div className="mt-6 space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          {t('cta_view_work')}
        </button>
        <button className="border border-gray-500 text-gray-300 px-4 py-2 rounded">
          {t('cta_contact')}
        </button>
      </div>

      <section className="mt-10 bg-gray-800/40 p-6 rounded-xl w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-3">{t('about_title')}</h2>
        <p className="text-gray-400">{t('about_body')}</p>
      </section>
    </main>
  );
}
