import React, { createContext, useState, useEffect } from "react";

// Default context
const LanguageContext = createContext({
  language: "bn",
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("bn"); // fallback to Bangla

  // Load saved language or detect browser preference
  useEffect(() => {
    const savedLang = localStorage.getItem("language");

    if (savedLang) {
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang.startsWith("en")) {
        setLanguage("en");
      } else if (browserLang.startsWith("bn")) {
        setLanguage("bn");
      }
    }
  }, []);

  // Save to localStorage when language changes (no reload)
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
