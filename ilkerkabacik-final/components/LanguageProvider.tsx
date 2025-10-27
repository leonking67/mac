'use client';

import React from 'react';
import '../i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

export default LanguageProvider;
