import React from 'react';
import Swal from 'sweetalert2';

const FoodCards = () => {
  const foods = [
    {
      name: 'Chicken Biryani',
      price: 180,
      delivery: '১-২ ঘণ্টা',
      image: 'https://i.ibb.co/fG4330yx/Chicken-Biryani.webp',
    },
    {
      name: 'Beef Burger',
      price: 120,
      delivery: '১-২ ঘণ্টা',
      image: 'https://i.ibb.co/j915YXFW/Beef-Burger.jpg',
    },
    {
      name: 'Pasta Alfredo',
      price: 200,
      delivery: '১-৩ ঘণ্টা',
      image: 'https://i.ibb.co/RGDxLxvT/Pasta-Alfredo.jpg',
    },
    {
      name: 'Shawarma Roll',
      price: 100,
      delivery: 'আজই ডেলিভারি',
      image: 'https://i.ibb.co/h187L78F/Shawarma-Roll.jpg',
    },
  ];

  // Order function
  const handleOrder = (itemName) => {
    Swal.fire({
      title: '✅ অর্ডার সফল!',
      text: `${itemName} এর অর্ডার রিসিভ করা হয়েছে।`,
      icon: 'success',
      confirmButtonText: 'ঠিক আছে',
      confirmButtonColor: '#f97316', // Tailwind orange-500
    });
  };

  return (
    <div className="min-h-screen bg-[#fffdf7] py-16 px-4 sm:px-10">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-12">
        আজকের ফুড কালেকশন
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {foods.map((food, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden flex flex-col"
          >
            <div className="relative">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 bg-green-500 text-white text-[11px] font-medium px-2 py-[2px] rounded-full shadow">
                হোম ডেলিভারি
              </span>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{food.name}</h3>
              <p className="text-sm text-gray-500 mb-2">🚚 ডেলিভারি: {food.delivery}</p>
              <div className="text-orange-600 font-bold text-xl mb-4">
                <span className="bg-orange-50 px-3 py-1 rounded-lg shadow-sm">৳{food.price}</span>
              </div>
              <button
                onClick={() => handleOrder(food.name)}
                className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition duration-300"
              >
                🛒 অর্ডার করুন
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCards;
