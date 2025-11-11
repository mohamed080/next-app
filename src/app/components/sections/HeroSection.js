"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Navbar from "../Navbar";
import Image from "next/image";
import shape_1 from "../../assets/shape_1.png";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(33.33);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const t = useTranslations("home");

  const slides = [
    {
      title: "أسرة ال ملحم",
      description:
        'تنتمي أسرة آل ملحم في الأحساء إلى قبيلة مطير نسبا وتحديدا من "العقفانة" ويسمون (القنازعة) من الجغاوين وهو فرع من العبيات المشهور والمنتمي إلى واصل من بريه أحد الأقسام الرئيسية الثلاثة لقبيلة مطير.',
      buttonText: "تواصل معنا",
    },
    {
      title: "تاريخ عريق",
      description:
        "تمتد جذور أسرة آل ملحم عبر تاريخ طويل من الإنجازات والمساهمات في بناء المجتمع السعودي والحفاظ على التراث والعادات الأصيلة.",
      buttonText: "تعرف على تاريخنا",
    },
    {
      title: "رؤية مستقبلية",
      description:
        "نسعى دائمًا لمواكبة التطور مع الحفاظ على قيمنا وأصالتنا، من أجل مستقبل أفضل للأجيال القادمة.",
      buttonText: "انضم إلينا",
    },
  ];

  const updateProgress = (activeIndex) => {
    setProgress(((activeIndex + 1) / slides.length) * 100);
  };

  return (
    <section
      className="min-h-screen relative">
        <div className="absolute inset-0 -z-10">
        <Image
          src="/bg-1.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority // ensures LCP image loads fast
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-overlay1"></div>

      {/* Navbar with decreased height */}
      <Navbar />

      <div className="container max-w-6xl mx-auto px-4 z-10 relative h-screen -mt-31">
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.activeIndex);
            updateProgress(swiper.activeIndex);
          }}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="absolute top-1/2 transform -translate-y-1/2 text-start text-white w-full">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-2">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-[#B8C9C7] font-medium max-w-full sm:max-w-lg mb-4">
                  {slide.description}
                </p>
                <button className="px-6 md:px-8 py-2 cursor-pointer bg-transparent text-white border border-white hover:bg-[#a8835f] text-base md:text-lg transition duration-300">
                  {slide.buttonText}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Progress Bar and Fraction with Navigation Buttons */}
        <div className="absolute bottom-8 md:bottom-20 left-0 right-0 z-50">
          <div className="container max-w-5xl px-4 mx-auto lg:px-0">
            <div className="flex items-center justify-between gap-3 sm:gap-4">
              {/* Left Navigation Button - Behind progress */}
              <div className="flex gap-2">
                <button
                  className={`swiper-prev bg-transparent p-2 sm:p-3 border transition duration-300 z-30 group ${
                    currentSlide === 0
                      ? "border-gray-400 cursor-not-allowed opacity-50"
                      : "border-[#989898] hover:bg-primary cursor-pointer"
                  }`}
                  onClick={() => swiperInstance?.slidePrev()}
                  disabled={currentSlide === 0}
                  aria-label="Previous slide"
                >
                  <FaArrowRight
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      currentSlide === 0
                        ? "text-gray-400"
                        : "text-primary group-hover:text-white"
                    }`}
                  />
                </button>
                <button
                  className={`swiper-next bg-transparent p-2 sm:p-3 border transition duration-300 z-30 group ${
                    currentSlide === slides.length - 1
                      ? "border-gray-400 cursor-not-allowed opacity-50"
                      : "border-[#989898] hover:bg-primary cursor-pointer"
                  }`}
                  onClick={() => swiperInstance?.slideNext()}
                  disabled={currentSlide === slides.length - 1}
                  aria-label="Next slide"
                >
                  <FaArrowLeft
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      currentSlide === slides.length - 1
                        ? "text-gray-400"
                        : "text-primary group-hover:text-white"
                    }`}
                  />
                </button>
              </div>
              {/* Progress */}
              <div className="flex items-center justify-center flex-1 max-w-md mx-2 sm:mx-8">
                <div
                  role="progressbar"
                  aria-valuenow={currentSlide + 1}
                  aria-valuemin={1}
                  aria-valuemax={slides.length}
                  className="flex-1 bg-[#FFFFFF26] h-0.5 rounded-full relative"
                >
                  <div
                    className="bg-white h-1 rounded-full absolute top-0 right-0 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
              {/* Fraction */}
              <div className="text-[#B8C9C7] text-xl font-medium min-w-[60px] text-center">
                {String(slides.length).padStart(2, "0")}/{" "}
                <span className="text-white text-5xl">
                  {String(currentSlide + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-9">
        <Image
          src={shape_1}
          alt="corner shape"
          width={400}
          height={200}
          className="w-32 sm:w-45 md:w-72 lg:w-96 translate-y-1/6"
        />
      </div>
    </section>
  );
}
