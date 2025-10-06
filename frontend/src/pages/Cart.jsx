import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-6">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div className="flex flex-col gap-4">
        {cartData.length === 0 ? (
          <p className="text-center text-gray-500 py-10">Your cart is empty 🛒</p>
        ) : (
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            return (
              <div
                key={index}
                className="flex items-center justify-between bg-white dark:bg-gray-900 shadow-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700"
              >

                <div className="flex items-center gap-4">
                  <img
                    className="w-20 h-20 object-cover rounded-lg border border-gray-200 dark:border-gray-700"
                    src={productData.image[0]}
                    alt={productData.name}
                  />
                  <div>
                    <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-gray-600 dark:text-gray-400">
                      <p className="font-medium">
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-800 text-sm">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>

                <input
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(item._id, item.size, Number(e.target.value))
                  }
                  className="w-16 text-center border border-gray-300 dark:border-gray-600 rounded px-2 py-1 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />


                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-5 cursor-pointer hover:scale-110 hover:rotate-12 transition"
                  src={assets.bin_icon}
                  alt="Remove"
                />
              </div>
            );
          })
        )}
      </div>

      {cartData.length > 0 && (
        <div className="flex justify-end mt-12">
          <div className="w-full sm:w-[400px] bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 sticky top-24">
            <CartTotal />
            <button
              onClick={() => navigate("/place-order")}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium mt-6 py-3 rounded-lg transition"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
