import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center py-12 dark:bg-gray-900">
      <p className="text-2xl font-semibold text-gray-800 dark:text-white">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-lg mx-auto text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden"
      >
        <input
          className="w-full sm:flex-1 px-4 py-3 outline-none bg-transparent text-gray-800 dark:text-gray-200"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold px-10 py-4 transition"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
