// components/Card.js
import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg shadow-lg z-10">
      {children}
    </div>
  );
};

export default Card;
