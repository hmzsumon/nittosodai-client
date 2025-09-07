import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';

const Shop = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    bn: {
      title: 'আমাদের অনলাইন শপে স্বাগতম',
      subtitle: 'নতুন প্রোডাক্ট আসছে শীঘ্রই! এক্সক্লুসিভ কালেকশন দেখতে আমাদের সঙ্গে থাকুন।',
      button: 'হোম পেজে ফিরে যান',
      coming: ' Products Coming Soon...',
      desc: 'আমরা আমাদের পণ্যসমূহ আপলোড করছি। আমাদের ফেসবুক পেজ ও ওয়েবসাইটে চোখ রাখুন। নতুন অফার ও ডিসকাউন্ট নিয়ে আমরা আসছি খুব তাড়াতাড়ি।',
    },
    en: {
      title: ' Welcome to Our Online Shop',
      subtitle: 'New products are coming soon! Stay tuned for our exclusive collections.',
      button: 'Back to Home',
      coming: 'Products Coming Soon...',
      desc: 'We are updating our products. Stay connected on our Facebook page and website for upcoming deals and discounts.',
    },
  };

  const lang = content[language] || content.bn;

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Banner Section */}
      <div
        className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://i.ibb.co/FkLZVLL9/h-co-Gviz3c-FSf-Y-unsplash.jpg')`,
        }}
      >
        <div className=" bg-opacity-90 absolute inset-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            {lang.title}
          </h1>
          <p className="text-lg text-orange-100 mb-6">{lang.subtitle}</p>
          <Link
            to="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition shadow-lg"
          >
            {lang.button}
          </Link>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">{lang.coming}</h2>
        <p className="text-gray-600 max-w-xl mx-auto">{lang.desc}</p>
      </div>
    </section>
  );
};

export default Shop;
