import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from '../context/LanguageContext';

const slidesData = {
  en: [
    {
      id: 1,
      title: 'NittoSodai with Sabirin | Smart Grocery Shopping, Made Easy',
      subtitle: 'From daily essentials to monthly stocks — order fast, fresh & affordably from home.',
      image: 'https://i.ibb.co/ymtkWYhV/package-02.png',
      button: {
        label: 'Start Shopping',
        link: '/shop',
      },
      highlight: 'All-in-One Grocery Hub',
    },
    {
      id: 2,
      title: 'Payday Mega Sale!',
      subtitle: 'Big discounts on essentials — only for this week!',
      image: 'https://i.ibb.co/GQtcvH2y/oil-teams.jpg',
      button: {
        label: 'Shop Now',
        link: '/shop',
      },
      highlight: 'Limited Time Offer',
    },
    {
      id: 3,
      title: 'Freshness Delivered',
      subtitle: '100% quality groceries, delivered in just 3 hours.',
      image: 'https://i.ibb.co/R5hnp7q/cookware.jpg',
      button: {
        label: 'Explore Products',
        link: '/shop',
      },
      highlight: 'Fast & Reliable',
    },
  ],
  bn: [
    {
      id: 1,
      title: 'নিত্যসদাই উইথ সাবিরিন | ঘরে বসেই স্মার্ট বাজার',
      subtitle: 'প্রতিদিনের প্রয়োজন হোক বা মাসিক বাজার — পান দ্রুত, টাটকা ও সাশ্রয়ী মূল্যে।',
      image: 'https://i.ibb.co/ymtkWYhV/package-02.png',
      button: {
        label: 'বাজার শুরু করুন',
        link: '/shop',
      },
      highlight: 'সবার জন্য একক বাজার সমাধান',
    },
    {
      id: 2,
      title: 'পেইডে মেগা সেল!',
      subtitle: 'সপ্তাহজুড়ে বিশাল ছাড়, এখনই কিনুন।',
      image: 'https://i.ibb.co/GQtcvH2y/oil-teams.jpg',
      button: {
        label: 'এখনই কিনুন',
        link: '/shop',
      },
      highlight: 'সীমিত সময়ের অফার',
    },
    {
      id: 3,
      title: 'তাজা বাজার, ঘরে ডেলিভারি',
      subtitle: 'মাত্র ৩ ঘণ্টায় পৌঁছে যাবে আপনার দরজায়।',
      image: 'https://i.ibb.co/R5hnp7q/cookware.jpg',
      button: {
        label: 'প্রোডাক্ট দেখুন',
        link: '/shop',
      },
      highlight: 'দ্রুত ও নির্ভরযোগ্য',
    },
  ],
};

const HeroSection = () => {
  const { language } = useContext(LanguageContext);
  const slides = slidesData[language] || slidesData.en;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleDotClick = (index) => setCurrentSlide(index);
  const slide = slides[currentSlide];

  return (
    <section className="w-full bg-gradient-to-br from-lime-300 via-green-400 to-yellow-200 py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden transition-all duration-700 ease-in-out">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          {slide.highlight && (
            <span className="inline-block bg-white/80 text-green-800 text-xs font-semibold px-4 py-1 rounded-full uppercase shadow-md">
              {slide.highlight}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 leading-tight drop-shadow-md">
            {slide.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-800 font-medium">
            {slide.subtitle}
          </p>
          {slide.button && (
            <Link to={slide.button.link}>
              <button className="mt-4 bg-green-800 hover:bg-green-900 text-white px-8 py-3 rounded-full transition duration-300 shadow-lg">
                {slide.button.label}
              </button>
            </Link>
          )}
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative p-4 bg-white/40 rounded-3xl backdrop-blur-xl shadow-2xl">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full max-w-md md:max-w-lg rounded-2xl transform hover:scale-105 transition duration-700"
            />
            <div className="absolute -inset-5 bg-lime-300 blur-3xl opacity-40 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="mt-10 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3.5 h-3.5 rounded-full border border-white ${
              index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/70'
            } transition-all duration-300`}
          />
        ))}
      </div>

      {/* Background Effects */}
      <div className="absolute -top-28 left-0 w-80 h-80 bg-lime-200 rounded-full blur-3xl opacity-30 animate-ping"></div>
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
