import React, { useState } from 'react';
import AppRouter from './Router/AppRouter';
import LanguageContext from './context/LanguageContext';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [language, setLanguage] = useState('bn');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="app-wrapper">
        <AppRouter />
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
