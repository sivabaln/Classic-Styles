import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-16 px-3">
      <div className="text-center py-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            BEST
          </span>{" "}
          SELLERS
        </h2>
        <div className="w-20 sm:w-24 h-[3px] bg-gradient-to-r from-pink-500 to-purple-500 mx-auto my-3"></div>
        <p className="w-11/12 sm:w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our most loved picks, curated just for you.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
        {bestSeller.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden 
                       transform transition-all duration-300 hover:scale-105"
          >
            <ProductItem
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
