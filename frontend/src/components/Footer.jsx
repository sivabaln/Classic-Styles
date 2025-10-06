import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 px-6 sm:px-12 md:px-20 text-sm">
        <div>
          <h1
            className="uppercase text-sm md:text-2xl font-extrabold tracking-wider p-5"
            style={{ fontFamily: "'Prata', serif" }}
          >
            Classic{" "}
            <span
              className="text-pink-500"
              style={{ fontFamily: "'Prata', serif" }}
            >
              Stylez
            </span>
          </h1>
          <p className="w-full md:w-2/3 text-gray-600 dark:text-gray-400 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry's standard dummy text ever since
            the 1500s.
          </p>
        </div>

        <div>
          <p className="text-xl font-semibold mb-5 text-gray-900 dark:text-white">
            COMPANY
          </p>
          <ul className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
            {["Home", "About us", "Delivery", "Privacy policy"].map(
              (item, index) => (
                <li
                  key={index}
                  className="hover:text-pink-500 transition-colors cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <p className="text-xl font-semibold mb-5 text-gray-900 dark:text-white">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
            <li className="hover:text-pink-500 transition-colors cursor-pointer">
              +1-212-456-7890
            </li>
            <li className="hover:text-pink-500 transition-colors cursor-pointer">
              contact@foreveryou.com
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-5">
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          © 2024 forever.com - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
