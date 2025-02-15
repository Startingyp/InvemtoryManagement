import React, { useState } from 'react';
// import { Plus, Minus } from 'lucide-react';

const Card = ({ 
  imageSrc, 
  title, 
  description, 
  ManufacturedDate, 
  ExpiryDate
}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-72 rounded-lg shadow-lg bg-white">
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-60 object-cover rounded-t-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        />
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 hover:text-violet-600 transition-all duration-300">{title}</h2>
          
          <p className="text-gray-600 text-base">{ManufacturedDate}</p>
          <p className="text-gray-600 text-base">{ExpiryDate}</p>
          <p className="text-gray-600 text-base">{description}</p>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Card;