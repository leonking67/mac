'use client';
import { useI18n } from './Language';
export default function Footer(){
  const { t } = useI18n();
  return (
    <footer className="section border-top border-gray-200/60 dark:border-white/10">
      <div className="container text-sm text-gray-500 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
        <p>© {new Date().getFullYear()} İlker Kabacık • {t('footer_rights')}</p>
        <div className="flex gap-4">
          <a href="mailto:ilkerkabacik@defipayusdt.io" className="hover:underline">Email</a>
          <a href="https://github.com/" target="_blank" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
