"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "tr", label: "TR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
];

const LanguageProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lng);
    }
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLng = localStorage.getItem("language");
      if (savedLng && savedLng !== i18n.language) {
        i18n.changeLanguage(savedLng);
      }
    }
  }, [i18n]);

  return (
    <div className="flex items-center gap-2">
      {languages.map((lng) => (
        <button
          key={lng.code}
          onClick={() => changeLanguage(lng.code)}
          className={`px-2 py-1 text-sm rounded transition-colors ${
            i18n.language === lng.code
              ? "bg-blue-500 text-white"
              : "bg-transparent text-gray-300 hover:text-white"
          }`}
        >
          {lng.label}
        </button>
      ))}
      {children}
    </div>
  );
};

export default LanguageProvider;
