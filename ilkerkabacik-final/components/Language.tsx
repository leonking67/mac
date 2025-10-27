"use client";

import React from "react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "tr", label: "TR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" }
];

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const { i18n: i18nextInstance } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18nextInstance.changeLanguage(lng);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lng);
    }
  };

  React.useEffect(() => {
    const savedLng =
      typeof window !== "undefined" ? localStorage.getItem("language") : null;
    if (savedLng && savedLng !== i18nextInstance.language) {
      i18nextInstance.changeLanguage(savedLng);
    }
  }, [i18nextInstance]);

  return (
    <div className="flex items-center gap-2">
      {languages.map((lng) => (
        <button
          key={lng.code}
          onClick={() => changeLanguage(lng.code)}
          className={`px-2 py-1 text-sm rounded ${
            i18nextInstance.language === lng.code
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
