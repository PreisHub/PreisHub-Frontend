"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import { Grid, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const Womens = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const products = [
    { name: "Shoes", image: "https://i.ibb.co.com/cdCrR6p/DALL-E-2025-03-08-03-44-58-A-high-quality-PNG-image-of-a-modern-wireless-headphone-centered-on-a-whi.webp", href: "/products" },
    { name: "T-Shirts", image: "https://i.ibb.co.com/cdCrR6p/DALL-E-2025-03-08-03-44-58-A-high-quality-PNG-image-of-a-modern-wireless-headphone-centered-on-a-whi.webp", href: "/products" },
    { name: "Pants", image: "https://i.ibb.co.com/cdCrR6p/DALL-E-2025-03-08-03-44-58-A-high-quality-PNG-image-of-a-modern-wireless-headphone-centered-on-a-whi.webp", href: "/products" },
    { name: "Jackets", image: "https://i.ibb.co.com/cdCrR6p/DALL-E-2025-03-08-03-44-58-A-high-quality-PNG-image-of-a-modern-wireless-headphone-centered-on-a-whi.webp", href: "/products" },
    { name: "Watches", image: "https://i.ibb.co.com/cdCrR6p/DALL-E-2025-03-08-03-44-58-A-high-quality-PNG-image-of-a-modern-wireless-headphone-centered-on-a-whi.webp", href: "/products" },
    { name: "Accessories", image: "https://i.ibb.co.com/cdCrR6p/DALL-E-2025-03-08-03-44-58-A-high-quality-PNG-image-of-a-modern-wireless-headphone-centered-on-a-whi.webp", href: "/products" },
    { name: "Belts", image: "https://i.ibb.co.com/cdCrR6p/DALL-E-2025-03-08-03-44-58-A-high-quality-PNG-image-of-a-modern-wireless-headphone-centered-on-a-whi.webp", href: "/products" },
    { name: "Sunglasses", image: "https://i.ibb.co.com/cdCrR6p/DALL-E-2025-03-08-03-44-58-A-high-quality-PNG-image-of-a-modern-wireless-headphone-centered-on-a-whi.webp", href: "/products" },
  ];

  return (
    <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
    <div className="border">
      <h1 className="text-xl font-bold text-black font-sans mt-3 mx-5">Women&apos;s</h1>
      <div className="flex p-5 gap-5">
        <div className="bg-red-700 w-[50%]">
          <img className="h-full w-full border object-cover" src="https://i.ibb.co.com/cdCrR6p/DALL-E-2025-03-08-03-44-58-A-high-quality-PNG-image-of-a-modern-wireless-headphone-centered-on-a-whi.webp" alt="" />
        </div>

        <div className="relative w-[50%]">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={2}
            grid={{ rows: 2, fill: "row" }}
            spaceBetween={20}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
            modules={[Grid, Autoplay]}
            className="h-full"
            slidesPerGroup={4}
            speed={1200}
            allowTouchMove={true}
            grabCursor={true}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <Link href={product.href}>
                    <div className="border h-[100px] hover:shadow-md transition-shadow">
                      <img className="h-full w-full object-cover" src={product.image} alt={product.name} />
                    </div>
                    <p className="text-[14px] font-medium text-black font-sans my-2 block">{product.name}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Womens;
