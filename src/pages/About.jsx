import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import LanguageContext from '../context/LanguageContext';

const translations = {
  en: {
    title: 'About NittoSodai',
    metaDescription:
      'NittoSodai is a smart, tech‑driven grocery and educational e‑commerce platform.',
    heading: 'About NittoSodai',
    paragraph:
      'NittoSodai is a modern, tech‑powered smart grocery and education‑based e‑commerce platform. It is committed to delivering a smarter shopping and learning experience through modern tools and innovation. From everyday essentials to learning materials — everything is easily accessible here.',

    missionHeading: 'Our Mission',
    missionParagraph:
      'Our mission is to simplify the daily lives of people by making grocery shopping and learning materials more accessible, affordable, and efficient — powered by innovation and technology.',

    visionHeading: 'Our Vision',
    visionParagraph:
      'We envision a future where households across the country enjoy seamless access to quality groceries and educational products from a single digital platform — helping build smarter homes and smarter minds.',

    ceoHeading: 'Founder & CEO',
    ceoTitle: 'Founder & CEO',
    ceoName: 'Md. Matiur Rahman Sabirin',
    ceoBio:
      'Md. Matiur Rahman Sabirin is a forward‑thinking entrepreneur who founded NittoSodai to transform the grocery shopping experience through technology. Under his leadership, NittoSodai has grown into a modern and accessible platform for both groceries and education.',
  },
  bn: {
    title: 'নিত্তসদাই সম্পর্কে',
    metaDescription:
      'নিত্তসদাই একটি আধুনিক, প্রযুক্তিনির্ভর স্মার্ট গ্রোসারি ও শিক্ষা ভিত্তিক ই‑কমার্স প্ল্যাটফর্ম।',
    heading: 'নিত্তসদাই সম্পর্কে',
    paragraph:
      'নিত্তসদাই একটি আধুনিক, প্রযুক্তি‑চালিত স্মার্ট গ্রোসারি ও শিক্ষা‑ভিত্তিক ই‑কমার্স প্ল্যাটফর্ম। আধুনিক টুল ও উদ্ভাবনের মাধ্যমে স্মার্ট কেনাকাটা ও শেখার অভিজ্ঞতা প্রদানই আমাদের লক্ষ্য। দৈনিক প্রয়োজনীয় পণ্য থেকে শুরু করে শিক্ষাসামগ্রী — সবই এখানে সহজে পাওয়া যায়।',

    missionHeading: 'আমাদের মিশন',
    missionParagraph:
      'উদ্ভাবন ও প্রযুক্তি দ্বারা চালিত হয়ে আমরা মানুষের দৈনন্দিন জীবনকে সহজ, সাশ্রয়ী ও কার্যকর করতে গ্রোসারি ও শিক্ষাসামগ্রীকে আরও কাছাকাছি নিয়ে আসতে কাজ করছি।',

    visionHeading: 'আমাদের ভিশন',
    visionParagraph:
      'আমরা এমন একটি ভবিষ্যৎ কল্পনা করি যেখানে দেশের প্রতিটি পরিবার একটি মাত্র ডিজিটাল প্ল্যাটফর্ম থেকে মানসম্মত গ্রোসারি ও শিক্ষাসামগ্রী সহজেই পাবে — ফলে তৈরি হবে স্মার্ট ঘর ও স্মার্ট মনের মানুষ।',

    ceoHeading: 'প্রতিষ্ঠাতা ও সিইও',
    ceoTitle: 'প্রতিষ্ঠাতা ও সিইও',
    ceoName: 'মো. মতিউর রহমান সাবিরিন',
    ceoBio:
      'মো. মতিউর রহমান সাবিরিন একজন দূরদর্শী উদ্যোক্তা, যিনি প্রযুক্তির মাধ্যমে গ্রোসারি কেনাকাটার অভিজ্ঞতা বদলে দিতে নিত্তসদাই প্রতিষ্ঠা করেছেন। তাঁর নেতৃত্বে নিত্তসদাই আধুনিক ও সবার জন্য সহজলভ্য একটি গ্রোসারি ও শিক্ষা প্ল্যাটফর্মে রূপ নিয়েছে।',
  },
};

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations.en;

  return (
    <>
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.metaDescription} />
      </Helmet>

      {/* Hero Banner */}
      <div className="w-full h-64 bg-cover bg-center bg-[url('https://i.ibb.co/bjQRgCKs/the-95-best-online-clothing-stores-in-the-us.webp')] flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">{t.heading}</h1>
      </div>

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Intro Paragraph */}
          <p className="text-gray-700 text-lg leading-relaxed text-justify mb-12">
            {t.paragraph}
          </p>

          {/* Mission & Vision with Icons */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <img src="https://i.ibb.co/dsSY5jWQ/ourmission.jpg" alt="Mission" className="w-16 h-16 mb-4" />
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                {t.missionHeading}
              </h2>
              <p className="text-gray-700 text-justify">{t.missionParagraph}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <img src="https://i.ibb.co/3mXRTDJq/ourvission.webp" alt="Vision" className="w-16 h-16 mb-4" />
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                {t.visionHeading}
              </h2>
              <p className="text-gray-700 text-justify">{t.visionParagraph}</p>
            </div>
          </div>

          {/* CEO Card */}
          <div className="mt-20">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
              {t.ceoHeading}
            </h2>

            <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 hover:shadow-2xl transition">
              <img
                src="/sabirin.jpg"
                alt={t.ceoName}
                className="w-40 h-40 object-cover rounded-full border-4 border-blue-500"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{t.ceoName}</h3>
                <p className="text-sm text-gray-500 italic">{t.ceoTitle}</p>
                <p className="mt-4 text-gray-700 text-justify leading-relaxed">
                  {t.ceoBio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
