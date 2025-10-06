import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-16 py-10 px-3">
      <div className="text-center py-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            LATEST
          </span>{" "}
          COLLECTIONS
        </h2>
        <div className="w-20 sm:w-28 h-[3px] bg-gradient-to-r from-pink-500 to-purple-500 mx-auto my-3"></div>
        <p className="w-11/12 sm:w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Fresh arrivals, handpicked for style lovers.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
        {latestProducts.map((item, index) => (
          <div
            key={index}
            className="transform transition-all duration-300 hover:scale-105"
          >
            <ProductItem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
