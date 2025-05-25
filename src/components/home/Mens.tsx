"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import { Grid, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";


type Product = {
  name: string;
  image: string;
  href: string;
};

const Mens = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/json/mens.json");
      const data: Product[] = await res.json(); 
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="border">
        <h1 className="text-heading3 font-bold text-black font-sans mt-3 mx-5">Men&apos;s</h1>
        <div className="flex p-5 gap-5">
          <div className="w-[50%]">
            <Image
              className="h-[320px] w-full border object-cover"
              src="/images/mens/mens.jpg"
              alt=""
              width={500}
              height={500}
            />
          </div>

          <div className="relative w-[50%] flex justify-center items-center">
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
                    <div className="border flex flex-col justify-center items-center h-full">
                      <Image
                        className="h-[120px] w-full object-cover border-b"
                        src={product.image}
                        alt={product.name}
                        width={100}
                        height={100}
                      />
                      <p className="text-body3 font-medium text-black font-sans my-1 block">
                        {product.name}
                      </p>
                    </div>
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

export default Mens;
