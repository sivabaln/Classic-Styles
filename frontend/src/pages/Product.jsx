import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const found = products.find((item) => item._id === productId);
    if (found) {
      setProductData(found);
      setImage(found.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-8 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-4">
          <div className="flex sm:flex-col gap-2 sm:gap-3 overflow-x-auto sm:overflow-y-auto sm:w-[20%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                src={item}
                alt=""
                className={`w-[24%] sm:w-full flex-shrink-0 rounded-md cursor-pointer border transition-all duration-300 
                  hover:scale-105 hover:border-pink-500 ${
                    item === image ? "border-pink-500" : "border-gray-200"
                  }`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              className="w-full h-auto rounded-lg shadow-lg"
              src={image}
              alt={productData.name}
            />
          </div>
        </div>

        <div className="flex-1 space-y-5">
          <h1 className="font-semibold text-2xl sm:text-3xl">
            {productData.name}
          </h1>

          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="" className="w-4" />
            ))}
            <img src={assets.star_dull_icon} alt="" className="w-4" />
            <p className="pl-2 text-sm text-gray-600">(122 reviews)</p>
          </div>

          <p className="text-3xl font-bold text-pink-600">
            {currency}
            {productData.price}
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {productData.description}
          </p>

          <div className="space-y-3">
            <p className="font-medium">Select Size</p>
            <div className="flex gap-2 flex-wrap">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border rounded-lg py-2 px-4 transition-all duration-300 
                    ${
                      item === size
                        ? "border-pink-500 bg-pink-50"
                        : "border-gray-300 bg-gray-100 hover:border-pink-400"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-sm uppercase font-semibold tracking-wide"
          >
            Add to Cart
          </button>

          <hr className="my-5" />
          <div className="text-sm text-gray-500 space-y-1">
            <p>100% Original product.</p>
            <p>Cash on delivery available.</p>
            <p>Easy return & exchange within 7 days.</p>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="flex border-b">
          <b className="border-t border-x px-5 py-3 text-sm sm:text-base">
            Description
          </b>
          <p className="border-t border-r px-5 py-3 text-sm sm:text-base">
            Reviews (122)
          </p>
        </div>
        <div className="space-y-4 border px-6 py-6 text-sm sm:text-base text-gray-600">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without a physical presence.
          </p>
          <p>
            E-commerce websites typically display products with detailed
            descriptions, images, prices, and variations (e.g., sizes, colors).
          </p>
        </div>
      </div>

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
