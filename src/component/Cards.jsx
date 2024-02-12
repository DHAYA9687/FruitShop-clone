import React from "react";
const Cards = ({ fruit }) => {
  return (
    <div className=" rounded-xl overflow-hidden shadow-xl transform group hover:scale-110 ease-in-out duration-100 relative">
      <img src={fruit.image} alt={fruit.name} className="w-full" />
      <div className="flex flex-col items-center my-2 font-body py-2">
        <span>{fruit.name}</span>
        <span>₹{fruit.price}</span>
        <span className="text-gray-500 invisible group-hover:visible">
          Add to Cart
        </span>
      </div>
      <span className="absolute top-3 right-3 bg-sky-300 text-black  border-sky-300 rounded-lg p-2">
        1% off
      </span>
    </div>
  );
};

export default Cards;
