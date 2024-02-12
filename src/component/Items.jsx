import React, { useState } from "react";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import Cards from "./Cards";
const Items = () => {
  const [fruit, setFruit] = useState([
    {
      id: 1,
      image: img1,
      name: "Green Grapes",
      price: 100,
    },
    {
      id: 2,
      image: img2,
      name: "Pomegranate",
      price: 200,
    },
    {
      id: 3,
      image: img3,
      name: "Black Grapes",
      price: 250,
    },
    {
      id: 4,
      image: img4,
      name: "Grape Fruit",
      price: 300,
    },
    {
      id: 5,
      image: img5,
      name: "Berry",
      price: 250,
    },
    {
      id: 6,
      image: img6,
      name: "lemon",
      price: 150,
    },
  ]);
  return (
    <section className="w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 my-10">
      {fruit.map((fruit) => {
        return <Cards key={fruit.id} fruit={fruit} />;
      })}
    </section>
  );
};

export default Items;
