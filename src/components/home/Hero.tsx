"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Mousewheel, Keyboard } from "swiper/modules";
import Link from "next/link";

const Hero = () => {
  const swiperRef = useRef<SwiperType>();
  const [slides, setSlides] = useState<{ slideImage: string; alt?: string; link: string; }[]>([]);

useEffect(() => {
  fetch("/json/hero.json")
    .then((response) => response.json())
    .then((data: { slideImage: string; alt?: string }[]) => setSlides(data))
    .catch((error) => console.error("Error fetching hero images:", error));
}, []);

  return (
    <div className="relative border rounded-md">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#D7000F] text-white shadow-lg hover:bg-[#D7000F] hover:text-white border border-[#D7000F] opacity-20 hover:opacity-100 transition h-[100px] rounded-ee-md rounded-tr-md z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#D7000F] text-white shadow-lg hover:bg-[#D7000F] hover:text-white border border-[#D7000F] opacity-20 hover:opacity-100 transition h-[100px] rounded-ss-md rounded-bl-md z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      
      <Swiper
        cssMode={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: true,
        }}
        speed={1800}
        modules={[Autoplay, Mousewheel, Keyboard]}
        className="h-[441px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href={slide.link}>
              <Image className="rounded-md" src={slide.slideImage} alt={slide.alt || "Hero Slide"} layout="fill" objectFit="cover" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
