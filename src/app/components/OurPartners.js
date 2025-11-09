"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import squareIcon from "../assets/square.svg";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";
import partner6 from "../assets/partner6.png";
import partner7 from "../assets/partner4.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Partners data
const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
];

export default function OurPartners() {
  const pagRef = useRef(null);

  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    // Delay until refs are attached
    setSwiperReady(true);
  }, []);

  return (
    <div className="relative z-10 container max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex justify-center items-center gap-4 sm:gap-6 mb-4">
        <Image
          src={squareIcon}
          alt="square"
          width={50}
          height={50}
          className="w-10 sm:w-13"
        />
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-secondary text-center">
          شركاؤنا
        </h2>
        <Image
          src={squareIcon}
          alt="square"
          width={50}
          height={50}
          className="w-10 sm:w-13"
        />
      </div>

      {/* Swiper Slider */}
      {swiperReady && (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={2}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 25,
            },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.pagination.el = pagRef.current;
          }}
          pagination={{
            el: pagRef.current,
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="partners-swiper"
        >
          {partners.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="transition-all duration-300 hover:scale-105 p-3">
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  width={150}
                  height={90}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div ref={pagRef} className="swiper-pagination custom-pagination"></div>
    </div>
  );
}
