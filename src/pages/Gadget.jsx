import React from 'react';
import { Helmet } from 'react-helmet';
import {
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
  FaCamera,
  FaTabletAlt,
} from 'react-icons/fa';
import GadgetCards from './GadgetCards';

// Gadget data
const gadgets = [
  {
    icon: <FaMobileAlt className="text-4xl text-green-600" />,
    title: 'Smartphones',
    description: 'Latest Android & iPhones with top features',
  },
  {
    icon: <FaLaptop className="text-4xl text-blue-600" />,
    title: 'Laptops',
    description: 'Powerful laptops for work & gaming',
  },
  {
    icon: <FaHeadphones className="text-4xl text-purple-600" />,
    title: 'Headphones',
    description: 'Noise-cancelling & wireless options',
  },
  {
    icon: <FaCamera className="text-4xl text-red-500" />,
    title: 'Cameras',
    description: 'DSLR, mirrorless & action cameras',
  },
  {
    icon: <FaTabletAlt className="text-4xl text-orange-500" />,
    title: 'Tablets',
    description: 'Lightweight tablets for all your needs',
  },
];

// Single gadget card component
const GadgetCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300 ease-in-out">
    <div className="mb-4" aria-hidden="true">{icon}</div>
    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

// Main Gadget component
const Gadget = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Gadgets - NittoSodai</title>
      </Helmet>

      <section className="px-4 md:px-10 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Our Gadget Collection
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gadgets.map((gadget, index) => (
            <GadgetCard
              key={index}
              icon={gadget.icon}
              title={gadget.title}
              description={gadget.description}
            />
          ))}
        </div>
      </section>

      {/* Additional gadgets or content */}
      <section className="px-4 md:px-10 py-10">
        <GadgetCards />
      </section>
    </div>
  );
};

export default Gadget;
