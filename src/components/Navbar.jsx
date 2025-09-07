import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiX, FiLogOut } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageContext from '../context/LanguageContext';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { user, logout } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef();

  const labels = {
    en: {
      saveMore: 'SAVE MORE ON APP',
      becomeSeller: 'BECOME A SELLER',
      help: 'HELP & SUPPORT',
      login: 'Login',
      language: 'Language',
      searchPlaceholder: 'Search in nittosodai',
      home: 'Home',
      about: 'About Us',
      shop: 'Shop',
      food: 'Food',
      gadget: 'Gadget',
      profile: 'Profile',
      logout: 'Logout',
      callNow: 'Call us:',
    },
    bn: {
      saveMore: 'অ্যাপে আরও সাশ্রয় করুন',
      becomeSeller: 'বিক্রেতা হন',
      help: 'সাহায্য ও সহায়তা',
      login: 'লগইন',
      language: 'ভাষা',
      searchPlaceholder: 'নিত্তসদাইয়ে খুঁজুন',
      home: 'হোম',
      about: 'আমাদের সম্পর্কে',
      shop: 'দোকান',
      food: 'ফুড',
      gadget: 'গ্যাজেট',
      profile: 'প্রোফাইল',
      logout: 'লগআউট',
      callNow: 'কল করুন:',
    },
  };

  const current = labels[language];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-50 text-sm text-gray-700 py-2 px-4 border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="hidden sm:flex gap-4">
            <Link to="/save-more" className="hover:underline">{current.saveMore}</Link>
            <Link to="/seller" className="hover:underline">{current.becomeSeller}</Link>
            <Link to="/help" className="hover:underline">{current.help}</Link>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/8801712906942"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-700 font-medium"
            >
              <FaWhatsapp className="text-lg" />
              {current.callNow} +880 1712-906942
            </a>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white border px-2 py-1 rounded text-gray-700"
            >
              <option value="en">English</option>
              <option value="bn">বাংলা</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Nittosodai Logo" className="h-16" />
          </Link>

          {/* Search (Desktop) */}
          <div className="hidden md:block flex-1 mx-6">
            <div className="relative w-full max-w-xl mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={current.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-green-400 focus:ring-2"
              />
              <FiSearch className="absolute left-3 top-2.5 text-gray-500" size={18} />
            </div>
          </div>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-green-600">{current.home}</Link>
            <Link to="/about" className="hover:text-green-600">{current.about}</Link>
            <Link to="/shop" className="hover:text-green-600">{current.shop}</Link>
            <Link to="/food" className="hover:text-green-600">{current.food}</Link>
            <Link to="/gadget" className="hover:text-green-600">{current.gadget}</Link>

            {user ? (
              <div className="relative" ref={dropdownRef}>
                <img
                  src={user.photoURL || '/default-user.png'}
                  alt="Profile"
                  className="h-8 w-8 rounded-full object-cover border-2 border-green-500 cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                    <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">{current.profile}</Link>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <FiLogOut /> {current.logout}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="hover:text-green-600">{current.login}</Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-700"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col gap-4"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold">Menu</h2>
                <FiX className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
              </div>

              <Link to="/" onClick={() => setMenuOpen(false)} className="hover:underline">{current.home}</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:underline">{current.about}</Link>
              <Link to="/shop" onClick={() => setMenuOpen(false)} className="hover:underline">{current.shop}</Link>
              <Link to="/food" onClick={() => setMenuOpen(false)} className="hover:underline">{current.food}</Link>
              <Link to="/gadget" onClick={() => setMenuOpen(false)} className="hover:underline">{current.gadget}</Link>

              {user ? (
                <>
                  <Link to="/profile" onClick={() => setMenuOpen(false)} className="hover:underline">{current.profile}</Link>
                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="text-left hover:underline flex items-center gap-2"
                  >
                    <FiLogOut /> {current.logout}
                  </button>
                </>
              ) : (
                <Link to="/login" onClick={() => setMenuOpen(false)} className="hover:underline">
                  {current.login}
                </Link>
              )}

              <div className="pt-4 border-t mt-4">
                <span className="block mb-2">{current.callNow} <strong className="text-green-600">+880 1712-906942</strong></span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="mt-2 border rounded px-2 py-1 w-full"
                >
                  <option value="en">English</option>
                  <option value="bn">বাংলা</option>
                </select>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
