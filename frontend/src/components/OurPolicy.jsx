import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  const policies = [
    {
      icon: assets.exchange_icon,
      title: "Easy Exchange Policy",
      desc: "We offer hassle-free exchange policy",
    },
    {
      icon: assets.quality_icon,
      title: "7 Days Return Policy",
      desc: "We provide 7 days free return policy",
    },
    {
      icon: assets.support_img,
      title: "Best Customer Support",
      desc: "We provide 24/7 customer support",
    },
  ];

  return (
    <div className="py-20 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg 
                       transition-transform transform hover:-translate-y-2 text-center border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-center mb-5">
              <img
                src={policy.icon}
                className="w-14 h-14 object-contain"
                alt={policy.title}
              />
            </div>
            <p className="font-semibold text-gray-800 dark:text-gray-200 text-lg">
              {policy.title}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
              {policy.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPolicy;
