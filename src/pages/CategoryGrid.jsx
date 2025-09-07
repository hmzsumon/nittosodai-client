// components/CategoryGrid.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import CategoryCard from './CategoryCard';
import useLanguage from '../context/useLanguage';

const categories = [
  {
    bn: { title: 'চাল ও আটা', description: 'চাল ও আটার বিভিন্ন জাতের সংগ্রহ।' },
    en: { title: 'Rice & Flour', description: 'Variety of rice and flour.' },
    image: 'https://i.ibb.co/rf1G4QD9/dal-or-lentil.png',
  },
  {
    bn: { title: 'তেল ও ঘি', description: 'খাঁটি তেল ও ঘি - স্বাস্থ্যকর রান্নার জন্য।' },
    en: { title: 'Oil & Ghee', description: 'Pure oil and ghee for healthy cooking.' },
    image: 'https://i.ibb.co/k2L7TnYJ/ghee.webp',
  },
  {
    bn: { title: 'ডাল ও ছোলা', description: 'ডাল ও ছোলা - প্রোটিন সমৃদ্ধ খাদ্য।' },
    en: { title: 'Lentils & Chickpeas', description: 'Protein-rich lentils and chickpeas.' },
    image: 'https://i.ibb.co/8n9Bf6fM/Fortune-Chana-Dal.webp',
  },
  {
    bn: { title: 'মসলা', description: 'রান্নায় ব্যবহৃত মশলার সমাহার।' },
    en: { title: 'Spices', description: 'A collection of cooking spices.' },
    image: 'https://i.ibb.co/xdgQ07h/Combo-Pack-500gm-1-scaled.webp',
  },
  {
    bn: { title: 'চা ও কফি', description: 'সকালের শুরু হোক চা ও কফির সাথে।' },
    en: { title: 'Tea & Coffee', description: 'Start your day with tea and coffee.' },
    image: 'https://i.ibb.co/N6NhJGrD/coffee.jpg',
  },
  {
    bn: { title: 'নুডুলস ও পাস্তা', description: 'দ্রুত ও সহজ রেসিপির জন্য নুডুলস ও পাস্তা।' },
    en: { title: 'Noodles & Pasta', description: 'Quick and easy recipes with noodles and pasta.' },
    image: 'https://i.ibb.co/BHBPJxWR/noodles.jpg',
  },
  {
    bn: { title: 'বিস্কুট ও স্ন্যাকস', description: 'বাচ্চা ও বড়দের জন্য মজাদার স্ন্যাকস।' },
    en: { title: 'Biscuits & Snacks', description: 'Tasty snacks for kids and adults.' },
    image: 'https://i.ibb.co/TBBvTGcv/image.jpg',
  },
  {
    bn: { title: 'জ্যাম ও মধু', description: 'নাস্তার জন্য সুস্বাদু জ্যাম ও স্বাস্থ্যকর মধু।' },
    en: { title: 'Jam & Honey', description: 'Delicious jams and healthy honey for breakfast.' },
    image: 'https://i.ibb.co/Y429msMd/honey.png',
  },
  {
    bn: { title: 'বেবি ফুড', description: 'শিশুদের পুষ্টিকর খাদ্য।' },
    en: { title: 'Baby Food', description: 'Nutritious food for babies.' },
    image: 'https://i.ibb.co/RkLh8KWg/babyfood.webp',
  },
  {
    bn: { title: 'জলপান ও পানীয়', description: 'তৃষ্ণা মেটাতে পানীয়ের সমাহার।' },
    en: { title: 'Beverages', description: 'A collection of thirst-quenching drinks.' },
    image: 'https://i.ibb.co/mm6z8LB/water.webp',
  },
  {
    bn: { title: 'ডিম ও দুগ্ধজাত', description: 'ডিম ও দুধ থেকে পাওয়া পুষ্টি।' },
    en: { title: 'Eggs & Dairy', description: 'Nutrients from eggs and milk.' },
    image: 'https://i.ibb.co/zHBttN4N/milk.jpg',
  },
  {
    bn: { title: 'ফ্রোজেন ফুড', description: 'ফ্রোজেন খাবারের সুবিধা এখন ঘরে।' },
    en: { title: 'Frozen Food', description: 'Frozen food convenience at home.' },
    image: 'https://i.ibb.co/gLXZKqMc/FROZEN-FOOD-0.jpg',
  },
  {
    bn: { title: 'বেকারি পণ্য', description: 'সকালের নাস্তা বা বিকেলের স্ন্যাকসের জন্য।' },
    en: { title: 'Bakery Items', description: 'For breakfast or evening snacks.' },
    image: 'https://i.ibb.co/6chtZBQd/bekharir.jpg',
  },
  {
    bn: { title: 'কনডেন্সড মিল্ক', description: 'মিষ্টিজাত রেসিপির জন্য বিশেষ উপাদান।' },
    en: { title: 'Condensed Milk', description: 'Special ingredient for sweet recipes.' },
    image: 'https://i.ibb.co/JWww48cj/Nestle-Sweetened-Condensed-Milk-395g-45819.webp',
  },
  {
    bn: { title: 'চিনি ও লবণ', description: 'প্রতিদিনের রান্নার জন্য প্রয়োজনীয় উপকরণ।' },
    en: { title: 'Sugar & Salt', description: 'Essential ingredients for daily cooking.' },
    image: 'https://i.ibb.co/99Hwx2bx/salt-sugar.png',
  },
  {
    bn: { title: 'পাকা ফল', description: 'তাজা ও পাকা মৌসুমি ফল।' },
    en: { title: 'Ripe Fruits', description: 'Fresh and ripe seasonal fruits.' },
    image: 'https://i.ibb.co/7tYV8Qjf/mangoe.jpg',
  },
  {
    bn: { title: 'তাজা শাকসবজি', description: 'তাজা ও পুষ্টিকর শাকসবজির সংগ্রহ।' },
    en: { title: 'Fresh Vegetables', description: 'A collection of fresh and nutritious vegetables.' },
    image: 'https://i.ibb.co/6JVHJycf/sobji.jpg',
  },
  {
    bn: { title: 'মাংস ও মাছ', description: 'তাজা মাছ ও মাংসের সংগ্রহ।' },
    en: { title: 'Meat & Fish', description: 'Fresh meat and fish collection.' },
    image: 'https://i.ibb.co/20N8pJm3/mangsho.jpg',
  },
  {
    bn: { title: 'ঘরোয়া হাইজিন', description: 'পরিষ্কার-পরিচ্ছন্ন ঘরের জন্য প্রয়োজনীয় সামগ্রী।' },
    en: { title: 'Home Hygiene', description: 'Essentials for a clean home.' },
    image: 'https://i.ibb.co/V0dMYxZt/house-cleaner.webp',
  },
  {
    bn: { title: 'টিস্যু ও ওয়াইপস', description: 'ব্যবহারযোগ্য টিস্যু ও ওয়াইপস।' },
    en: { title: 'Tissue & Wipes', description: 'Disposable tissues and wipes.' },
    image: 'https://i.ibb.co/DfDHBXJB/Top-Rated-Best-Baby-Wipes-Disposable-Wet-Wipes-For-Babies.jpg',
  },
  {
    bn: { title: 'কুকিং এসেনশিয়ালস', description: 'রান্নায় ব্যবহৃত গুরুত্বপূর্ণ উপকরণ।' },
    en: { title: 'Cooking Essentials', description: 'Essential items for cooking.' },
    image: 'https://i.ibb.co/WWP2jWnc/Milk-Tea-Fruit-Tea-Business-Accessories-Set-01.jpg',
  },
];

const CategoryGrid = () => {
  const { language } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const initialCount = 12;
  const visibleCategories = showAll ? categories : categories.slice(0, initialCount);

  const handleToggle = () => {
    setShowAll(prev => !prev);
  };

  const handleCategoryClick = (category) => {
    Swal.fire({
      title: category[language].title,
      text: category[language].description,
      imageUrl: category.image,
      imageWidth: 400,
      imageHeight: 300,
      confirmButtonText: language === 'bn' ? 'বন্ধ করুন' : 'Close',
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {language === 'bn' ? 'সেরা সব পণ্য ক্যাটাগরি' : 'Best Product Categories'}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {visibleCategories.map((cat, idx) => (
          <div key={idx} onClick={() => handleCategoryClick(cat)} className="cursor-pointer">
            <CategoryCard image={cat.image} title={cat[language].title} />
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={handleToggle}
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          {showAll
            ? language === 'bn' ? 'কম দেখাও' : 'Show Less'
            : language === 'bn' ? 'আরও দেখুন' : 'Show More'}
        </button>
      </div>
    </section>
  );
};

export default CategoryGrid;
