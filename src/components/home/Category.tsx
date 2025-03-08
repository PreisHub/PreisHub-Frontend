"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Autoplay } from "swiper/modules";

export default function SwiperComponent() {
  const swiperRef = useRef<SwiperType>();

  // Category & Image Data
  const categories = [
    { name: "Electronics", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Fashion", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Home & Living", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Books", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Sports", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Health", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Toys", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Automotive", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Garden", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Beauty", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Jewelry", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Office", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Electronics", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Fashion", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Home & Living", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Books", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Sports", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Health", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Toys", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Automotive", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Garden", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Beauty", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Jewelry", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
    { name: "Office", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/175/17540/17540088.jpeg" },
  ];

  return (
    <div className="relative mt-10">
      <h1 className="absolute -top-10 left-0 flex items-center justify-center text-xl font-bold text-black font-sans">
        Category
      </h1>

      {/* Left Arrow Button */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#D7000F] text-white hover:bg-[#D7000F] hover:text-white border border-[#D7000F] opacity-20 hover:opacity-100 transition h-[100px] rounded-ee-md rounded-tr-md z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#D7000F] text-white shadow-lg hover:bg-[#D7000F] hover:text-white border border-[#D7000F] opacity-20 hover:opacity-100 transition h-[100px] rounded-ss-md rounded-bl-md z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={6}
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={15}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={800}
        modules={[Grid, Autoplay]}
        className="mySwiper"
      >
        {categories.map((category, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center p-2">
              <img
                src={category.image}
                alt={category.name}
                className="h-[100px] w-[100px] object-cover rounded-md"
              />
              <span className="mt-2 text-gray-800 font-semibold">{category.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
