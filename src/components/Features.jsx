import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const Features = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: 'Why Shop With Us?',
      features: [
        {
          title: 'Free Delivery',
          desc: 'Get 100% free home delivery on orders over ৳1000.',
        },
        {
          title: '24/7 Customer Support',
          desc: 'Contact us any time for assistance.',
        },
        {
          title: 'Secure Payment',
          desc: 'Your transactions are fully secure on our encrypted server.',
        },
      ],
    },
    bn: {
      title: 'আমাদের কেন বেছে নেবেন?',
      features: [
        {
          title: 'ফ্রি ডেলিভারি',
          desc: '৳১০০০ টাকার অধিক অর্ডারে সম্পূর্ণ ফ্রি হোম ডেলিভারি।',
        },
        {
          title: '২৪/৭ কাস্টমার সাপোর্ট',
          desc: 'যেকোনো সময় আমাদের সহায়তা পেতে আমাদের সাথে যোগাযোগ করুন।',
        },
        {
          title: 'নিরাপদ পেমেন্ট',
          desc: 'আপনার লেনদেন আমাদের সিকিউর সার্ভারে সম্পূর্ণ নিরাপদ।',
        },
      ],
    },
  };

  const current = content[language];

  return (
    <section className="py-12 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">{current.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {current.features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl border shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
