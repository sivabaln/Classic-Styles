import React, { useState, useEffect, useRef } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import hero1 from "./assets/B1.jpg";
import hero2 from "./assets/B2.jpg";
import hero3 from "./assets/B4.jpg";
import { Link } from "react-router-dom";

const Carousel = () => {
  const slides = [
    { image: hero1, fl: "/" },
    { image: hero2, fl: "/collection" },
    { image: hero3, fl: "/bestseller" },
  ];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const total = slides.length;

  const nextSlide = () => setIndex((prev) => (prev + 1) % total);
  const previousSlide = () => setIndex((prev) => (prev - 1 + total) % total);
  const goToSlide = (i) => setIndex(i);

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <div className="relative w-full h-[45vh] sm:h-[65vh] md:h-[85vh] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full h-full flex-shrink-0 relative group"
          >
            <img
              src={slide.image}
              alt={slide.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10" />

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center px-4 sm:px-8">
              <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-md animate-fade-in">
                {slide.name}
              </h2>
              <Link
                to={slide.fl}
                className="mt-4 inline-block bg-pink-500 hover:bg-pink-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={previousSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10 text-white text-xl sm:text-3xl p-2 sm:p-3 bg-black/40 rounded-full hover:bg-black/60 transition"
      >
        <BiLeftArrow />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 z-10 text-white text-xl sm:text-3xl p-2 sm:p-3 bg-black/40 rounded-full hover:bg-black/60 transition"
      >
        <BiRightArrow />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === i ? "bg-pink-500 scale-125" : "bg-white/70 hover:bg-pink-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
