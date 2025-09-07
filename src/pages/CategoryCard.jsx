import React from 'react';

const CategoryCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-sm border rounded-lg p-4 hover:shadow-md transition">
      <img src={image} alt={title} className="w-16 h-16 object-contain mb-2" />
      <p className="text-sm text-center font-medium text-gray-800">{title}</p>
    </div>
  );
};

export default CategoryCard;