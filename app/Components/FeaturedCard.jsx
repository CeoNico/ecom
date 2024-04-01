import Image from "next/image";
import React from "react";

const FeaturedCard = ({ image, title, price }) => {
  return (
    <div className="p-2 flex-col flex text-center justify-center">
      <Image
        className="rounded-xl shadow-lg shadow-black "
        src={image}
        alt="Image of Product"
      />
      <div className="p-5">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="p-2 text-2xl">{price}</p>
        <button className="bg-black rounded-lg p-2">Ver Mas!</button>
      </div>
    </div>
  );
};

export default FeaturedCard;
