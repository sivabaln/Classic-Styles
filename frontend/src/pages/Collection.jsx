import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    setCategory((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const toggleSubCategory = (e) => {
    setSubCategory((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = [...filterProducts];

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-8 pt-10 border-t border-gray-200">
      
      
      <div
        className={`bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg rounded-xl p-5 min-w-60 border border-gray-200 transition-all duration-300 
          ${showFilter ? "block" : "hidden sm:block"}`}
      >
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl font-bold flex items-center cursor-pointer gap-2 text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform duration-300 ${
              showFilter ? "rotate-90" : ""
            }`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        <div className="border border-gray-300 rounded-lg p-4 mt-6 hover:border-pink-400 transition-colors">
          <p className="mb-3 text-sm font-semibold text-gray-700">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            {["Men", "Women", "Kids"].map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                  className="accent-pink-500"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div className="border border-gray-300 rounded-lg p-4 mt-5 hover:border-pink-400 transition-colors">
          <p className="mb-3 text-sm font-semibold text-gray-700">TYPE</p>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            {["Topwear", "Bottomwear", "Winterwear"].map((sub) => (
              <label key={sub} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value={sub}
                  onChange={toggleSubCategory}
                  className="accent-pink-500"
                />
                {sub}
              </label>
            ))}
          </div>
        </div>
      </div>

      
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-pink-500 focus:outline-none bg-white shadow-sm"
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden transform transition-all duration-500 "
            >
              <ProductItem
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
