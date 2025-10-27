'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Language() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('tr')}
        className={`px-2 py-1 rounded ${i18n.language === 'tr' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
      >
        TR
      </button>
    </div>
  );
}
