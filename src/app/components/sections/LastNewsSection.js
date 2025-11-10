"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import shape_tr from "../../assets/shape-tr.png";
import shape_bl from "../../assets/shape-bl.png";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import squareIcon from "../../assets/square.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import imgNew1 from "../../assets/imgNew1.png";
import imgNew2 from "../../assets/imgNew2.png";
import { TbCalendarTime } from "react-icons/tb";
import { FaArrowLeftLong } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Mock news data - replace with your actual data
const newsData = [
  {
    id: 1,
    title:
      "آل ملحم تدعم تكريم متفوقي أبناء جمعية الرياحين لرعاية الأيتام بالأحساء",
    description:
      "انعقد الاجتماع السنوي لأسرة آل ملحم بحضور كافة أفراد الأسرة لمناقشة مستجدات الأسرة وخطط المستقبل.",
    image: imgNew1,
    date: "2024-03-15",
  },
  {
    id: 2,
    title:
      "آل ملحم تدعم تكريم متفوقي أبناء جمعية الرياحين لرعاية الأيتام بالأحساء",
    description:
      "تم إطلاق برنامج التميز العلمي لدعم الطلاب المتفوقين من أبناء الأسرة وتقديم المنح الدراسية.",
    image: imgNew2,
    date: "2024-03-10",
  },
  {
    id: 3,
    title:
      "آل ملحم تدعم تكريم متفوقي أبناء جمعية الرياحين لرعاية الأيتام بالأحساء",
    description:
      "مشاركة أسرة آل ملحم في الملتقى العائلي الخامس الذي أقيم في مدينة الرياض بحضور العائلات الكريمة.",
    image: imgNew1,
    date: "2024-03-05",
  },
  {
    id: 4,
    title:
      "آل ملحم تدعم تكريم متفوقي أبناء جمعية الرياحين لرعاية الأيتام بالأحساء",
    description:
      "انطلاق مشروع توثيق التاريخ العائلي لأسرة آل ملحم لجمع المعلومات والصور والوثائق التاريخية.",
    image: imgNew2,
    date: "2024-02-28",
  },
  {
    id: 5,
    title:
      "آل ملحم تدعم تكريم متفوقي أبناء جمعية الرياحين لرعاية الأيتام بالأحساء",
    description:
      "احتفال أسرة آل ملحم بتكريم الأفراد المتقاعدين تقديراً لجهودهم وعطائهم المميز خلال سنوات العمل.",
    image: imgNew1,
    date: "2024-02-20",
  },
  {
    id: 6,
    title:
      "آل ملحم تدعم تكريم متفوقي أبناء جمعية الرياحين لرعاية الأيتام بالأحساء",
    description:
      "انطلاق مبادرة الدعم الاجتماعي لتقديم المساعدات للأسر المحتاجة من أبناء العائلة.",
    image: imgNew2,
    date: "2024-02-15",
  },
];

export default function LastNewsSection() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    // Delay until refs are attached
    setSwiperReady(true);
  }, []);

  return (
    <section className="relative py-10 sm:py-20 bg-[#2F4A46] overflow-hidden">
      <Image
        src={shape_tr}
        alt="decorative top right"
        width={350}
        height={350}
        className="absolute top-0 right-0 z-0 w-42 sm:w-48 md:w-72 lg:w-82 pointer-events-none"
      />
      <Image
        src={shape_bl}
        alt="decorative bottom left"
        width={350}
        height={350}
        className="absolute bottom-0 left-0 z-0 w-42 sm:w-48 md:w-72 lg:w-82 pointer-events-none"
      />
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
            اخر الأخبار
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
              // centeredSlides={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  centeredSlides: true,
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
              {newsData.map((news) => (
                <SwiperSlide key={news.id}>
                  <div className="news-card overflow-hidden border border-[#4D625F] shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 hover:transform hover:scale-105 group">
                    {/* Image Container */}
                    <div className="relative h-44 sm:h-56 overflow-hidden">
                      {/* Replace with actual Image component */}
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-110 ease-in-out transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 bg-[#2F4A46]">
                      <div className="text-[#B8C9C7] text-lg sm:text-xl flex items-center gap-2">
                        <span>
                          <TbCalendarTime />
                        </span>
                        {new Date(news.date).toLocaleDateString("ar-EG")}
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3 py-2 sm:py-4">
                        {news.title}
                      </h3>
                      <button className="text-lg sm:text-xl text-primary cursor-pointer flex items-center gap-2 hover:scale-105 transition-all duration-300">
                        قراءة المزيد
                        <FaArrowLeftLong className="bg-primary text-white rounded-full p-2 w-7 h-7 sm:w-8 sm:h-8 text-sm " />
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
    </section>
  );
}
