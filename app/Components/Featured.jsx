import React from "react";
import FeaturedCard from "./FeaturedCard";
import { featuredProducts } from "@/lib/const";

export const Featured = () => {
  return (
    <section className="w-full bg-gray-600 p-12 md:p-24 lg:p-32">
      <h1 className="text-center font-bold text-3xl">
        {" "}
        Nuestros Productos Destacados{" "}
      </h1>
      {featuredProducts.map((product) => (
        <FeaturedCard
          key={product.price}
          image={product.image}
          price={product.price}
          title={product.title}
        />
      ))}
    </section>
  );
};
