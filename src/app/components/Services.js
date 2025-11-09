"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import squareIcon from "../assets/square.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import your service icons/images
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service1.png";
import currency from "../assets/currency.svg";

const services = [
  {
    id: 1,
    image: service1,
    title: "يكتب هنا اسم الخدمة",
    description:
      "الارتقاء بمكانة الأسرة إلى مستوى رفيع يُشار إليه بالبنان في كل محفل ومكان.",
    link: "/store",
    price: 65000,
  },
  {
    id: 2,
    image: service2,
    title: "يكتب هنا اسم الخدمة",
    description:
      "الارتقاء بمكانة الأسرة إلى مستوى رفيع يُشار إليه بالبنان في كل محفل ومكان.",
    link: "/cards",
    price: 65000,
  },
  {
    id: 3,
    image: service3,
    title: "يكتب هنا اسم الخدمة",
    description:
      "الارتقاء بمكانة الأسرة إلى مستوى رفيع يُشار إليه بالبنان في كل محفل ومكان.",
    link: "/admin-services",
    price: 65000,
  },
  // {
  //   id: 4,
  //   image: service1,
  //   title: "الفعاليات والمناسبات",
  //   description: "احجز لحضور الفعاليات والمناسبات الحصرية لأفراد الأسرة",
  //   link: "/events",
  // },
];

export default function Services() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    // Delay until refs are attached
    setSwiperReady(true);
  }, []);

  return (
    <div className="relative z-10 container max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="flex justify-center items-center gap-4 sm:gap-6 mb-10">
        <Image
          src={squareIcon}
          alt="square"
          width={50}
          height={50}
          className="w-10 sm:w-13"
        />
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center">
          احصل على خدمتك
        </h2>
        <Image
          src={squareIcon}
          alt="square"
          width={50}
          height={50}
          className="w-10 sm:w-13"
        />
      </div>

      <div className="relative">
        {/* Floating Navigation Buttons */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10 px-2 sm:px-0 flex justify-between pointer-events-none">
          <button
            ref={navigationPrevRef}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-[#a8835f] transition-all duration-300 shadow-lg hover:scale-110 pointer-events-auto translate-x-3 sm:translate-x-2 xl:translate-x-10"
            aria-label="Previous news"
          >
            <FaArrowRight className="text-sm sm:text-base" />
          </button>
          <button
            ref={navigationNextRef}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-[#a8835f] transition-all duration-300 shadow-lg hover:scale-110 pointer-events-auto -translate-x-3 sm:-translate-x-2 xl:-translate-x-10"
            aria-label="Next news"
          >
            <FaArrowLeft className="text-sm sm:text-base" />
          </button>
        </div>

        {/* Swiper Slider */}
        {swiperReady && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              450: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            loop={true}
            onBeforeInit={(swiper) => {
              swiper.params.pagination.el = paginationRef.current;
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="news-swiper"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="news-card overflow-hidden border border-[#4D625F] shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out hover:transform hover:scale-105 group">
                  {/* Image Container */}
                  <div className="relative h-44 sm:h-56 overflow-hidden">
                    {/* Replace with actual Image component */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 bg-[#2F4A46]">
                    <div className="flex justify-between items-center gap-4 py-3">
                      <h3 className="text-lg sm:text-2xl font-bold text-[#D4EBE8]">
                        {service.title}
                      </h3>
                      <h3 className="flex items-center gap-1 text-lg sm:text-2xl font-bold text-[#D4EBE8]">
                        {service.price}{" "}
                        <Image
                          src={currency}
                          alt="real currency Icon"
                          className="w-6 h-6 sm:w-7 sm:h-7"
                        />
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg text-[#B8C9C7] mb-2 sm:mb-3">
                      {service.description}
                    </p>
                    <button className="text-lg sm:text-xl text-white cursor-pointer bg-[#FFFFFF0D] w-full  py-3 my-3 hover:bg-primary  hover:scale-105 transition-all ease-in-out duration-300">
                      اطلب الخدمة الان
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Custom Pagination */}
        <div
          ref={paginationRef}
          className="swiper-pagination custom-pagination"
        ></div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="px-6 sm:px-8 py-2 bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-lg">
          استكشف جميع الخدمات
        </button>
      </div>
    </div>
  );
}
