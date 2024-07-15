import React from 'react';

const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src="" alt=""/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Data Heading from API</div>
        <p className="text-gray-700 text-base">
Where data from API will go in.        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
