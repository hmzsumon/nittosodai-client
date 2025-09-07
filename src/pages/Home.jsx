import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import CategoryGrid from './CategoryGrid';
import ComingSoon from './ComingSoon';
import LanguageContext from '../context/LanguageContext';

const Home = () => {
  const { language } = useContext(LanguageContext);

  const meta = {
    en: {
      title: 'NittoSodai | Learn Smart, Succeed Fast',
      description:
        'NittoSodai is your gateway to smart and modern learning. Explore courses, vocabulary, and interactive English lessons.',
      keywords:
        'NittoSodai, English Learning, Vocabulary, Courses, Education, Online Study',
    },
    bn: {
      title: 'নিত্যসোডাই | স্মার্ট শিখুন, দ্রুত সফল হন',
      description:
        'নিত্যসোডাই হলো আপনার আধুনিক ইংরেজি শেখার স্মার্ট পথ। কোর্স, শব্দভান্ডার ও ইন্টারেক্টিভ লেসনের মাধ্যমে শিখুন।',
      keywords:
        'নিত্যসোডাই, ইংরেজি শেখা, শব্দভান্ডার, কোর্স, শিক্ষা, অনলাইন স্টাডি',
    },
  };

  const currentMeta = language === 'bn' ? meta.bn : meta.en;

  return (
    <div>
      <Helmet>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
        <meta name="keywords" content={currentMeta.keywords} />
        <meta name="author" content="NittoSodai Team" />

        <meta property="og:title" content={currentMeta.title} />
        <meta property="og:description" content={currentMeta.description} />
        <meta property="og:image" content="/logo.jpg" />
        <meta property="og:url" content="https://nittosodai.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/png" href="/logo.jpg" />
      </Helmet>

      <HeroSection />
      <CategoryGrid />
      <ComingSoon />
      <Features />
    </div>
  );
};

export default Home;
