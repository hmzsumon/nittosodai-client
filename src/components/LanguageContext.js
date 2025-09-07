import React, { createContext, useState } from 'react';

export const LanguageContext = createContext({
  language: 'bn',
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('bn'); // You can load from localStorage if needed

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
