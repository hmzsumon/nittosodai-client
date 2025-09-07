import React from 'react';

const GadgetCards = () => {
  const products = [
    {
      name: 'Proton C4ix',
      price: 999,
      delivery: '1–3 days',
      image: 'https://i.ibb.co/YFkqHj5Y/Proton-C4ix.webp', // Replace with real image URL
    },
    {
      name: 'Geeoo X10 Plus 3.5mm In-Ear Wired Earphone',
      price: 240,
      delivery: '1–3 days',
      image: 'https://i.ibb.co/Cpcs4p5W/earphone.webp',
    },
    {
      name: 'Wireless Headphones',
      price: 1250,
      delivery: '1–3 days',
      image: 'https://i.ibb.co/nsdSTq3b/headphone.webp',
    },
    {
      name: 'GRV Smart Watch for iOS and Android Phones',
      price: 850,
      delivery: '1–3 days',
      image: 'https://i.ibb.co/nMGJGHcN/GRV-Smart-Watch-for-i-OS-and-Android-Phone.jpg',
    },
  ];

  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
        Popular Gadgets
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl overflow-hidden border border-gray-100"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-54 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2">Delivery: {product.delivery}</p>
              <p className="text-red-600 font-bold text-lg mb-4">৳{product.price} Per Piece</p>
              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transition"
              >
                + Add to Bag
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GadgetCards;
