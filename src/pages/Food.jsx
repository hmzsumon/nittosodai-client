import React from 'react';
import FoodCards from './FoodCards';

const Food = () => {
  return (
    <section className="bg-[#fffdf7] min-h-screen w-full py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600 drop-shadow-sm mb-4">
            🍽️ আমাদের ফুড কালেকশন
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            ঘরে বসেই পছন্দের খাবার অর্ডার করুন। সুস্বাদু, হালাল এবং ঘরোয়া রান্না।
          </p>
        </div>

        {/* Category Filter (Static Demo UI) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['সব', 'রাইস', 'ফাস্টফুড', 'রোলস', 'পাস্তা'].map((cat, i) => (
            <button
              key={i}
              className="bg-orange-100 hover:bg-orange-200 text-orange-700 font-medium px-4 py-1.5 rounded-full text-sm transition"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Food Cards */}
        <FoodCards />
      </div>
    </section>
  );
};

export default Food;
