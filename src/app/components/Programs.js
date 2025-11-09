"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import squareIcon from "../assets/square.svg";
import program_3 from "../assets/program_3.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";

const programs = [
  {
    id: 1,
    title: "برنامج قربى ",
    description:
      "برنامج يعزز التواصل بين أفراد الأسرة من خلال أنشطة تفاعلية واجتماعات دورية تهدف إلى تقوية الروابط الأسرية.",
    image: program_3,
  },
  {
    id: 2,
    title: "برنامج التميز والتفوق العلمي ",
    description:
      "برنامج التطوع في صندوق صلة ورحم - أسرة آل ملحم يهدف إلى تفعيل دور أفراد الأسرة من فئة الشباب او المختصين في العمل التطوعي من خلال المشاركة الفعالة في البرامج والفعاليات والأنشطة والمناسبات المختلفة.وتتنوع أعمال التطوع في هذه البرامج .",
    image: program_3,
  },
  {
    id: 3,
    title: "برنامج تطوع",
    description:
      "برنامج التطوع في صندوق صلة ورحم - أسرة آل ملحم يهدف إلى تفعيل دور أفراد الأسرة من فئة الشباب او المختصين في العمل التطوعي من خلال المشاركة الفعالة في البرامج والفعاليات والأنشطة والمناسبات المختلفة.وتتنوع أعمال التطوع في هذه البرامج .",
    image: program_3,
  },
  {
    id: 4,
    title: "برنامج مجالس العيد ",
    description:
      "برنامج التطوع في صندوق صلة ورحم - أسرة آل ملحم يهدف إلى تفعيل دور أفراد الأسرة من فئة الشباب او المختصين في العمل التطوعي من خلال المشاركة الفعالة في البرامج والفعاليات والأنشطة والمناسبات المختلفة.وتتنوع أعمال التطوع في هذه البرامج .",
    image: program_3,
  },
  {
    id: 5,
    title: "برنامج وطن",
    description:
      "برنامج التطوع في صندوق صلة ورحم - أسرة آل ملحم يهدف إلى تفعيل دور أفراد الأسرة من فئة الشباب او المختصين في العمل التطوعي من خلال المشاركة الفعالة في البرامج والفعاليات والأنشطة والمناسبات المختلفة.وتتنوع أعمال التطوع في هذه البرامج .",
    image: program_3,
  },
];

export default function Programs() {
  const [activeIndex, setActiveIndex] = useState(2);
  const swiperRef = useRef(null);

  const { user } = useAuth();
  return (
    <div className="container max-w-6xl mx-auto px-4 relative z-10">
      <div className="flex justify-center items-center gap-4 sm:gap-6 mb-4">
        <Image
          src={squareIcon}
          alt="square"
          width={50}
          height={50}
          className="w-10 sm:w-13"
        />
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-secondary">
          {user ? "استكشف برامجنا" : "تعرف على برامجنا"}
        </h2>

        <Image
          src={squareIcon}
          alt="square"
          width={50}
          height={50}
          className="w-10 sm:w-13"
        />
      </div>
      <div className="bg-[#FAF8F5] rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          {/* Left Side - Content */}
          <div className="md:w-1/2">
            <div className="h-full flex flex-col">
              <div className="flex-1 relative pr-4 sm:pr-8">
                {programs.map((program, index) => (
                  <div
                    key={program.id}
                    className={`my-0 sm:my-2 p-2 transition-all duration-300 hover:-translate-x-2 ease-in-out cursor-pointer
                      ${activeIndex === index ? "-translate-x-2" : ""}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <h4
                      className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-0 sm:mb-3 transition-all duration-300 ease-in-out ${
                        activeIndex === index
                          ? "text-primary"
                          : "text-secondary"
                      }`}
                    >
                      <span className="text-primary">{index + 1}.</span>{" "}
                      {program.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>{" "}
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2">
            <div className="h-full">
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                mousewheel={true}
                keyboard={true}
                modules={[Mousewheel, Keyboard]}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="h-[450px] sm:h-[480px]"
              >
                {programs.map((program, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex items-center justify-center flex-col gap-4 sm:gap-6 p-4">
                      <div className="w-full h-full pt-4">
                        <Image
                          src={program.image}
                          alt={`Program ${index + 1}`}
                          className="w-35 sm:w-38 md:w-40 h-auto mx-auto"
                        />
                      </div>
                      <p className="text-[#737D7C] text-base sm:text-xl leading-relaxed max-w-md">
                        {programs[activeIndex].description}
                      </p>
                      <button className="text-lg sm:text-xl text-primary cursor-pointer flex items-center gap-2 hover:scale-105 transition-all duration-300">
                        قراءة المزيد
                        <FaArrowLeftLong className="bg-primary text-white rounded-full p-2 w-8 h-8 text-sm " />
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="px-6 sm:px-8 py-2 bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-base sm:text-lg">
          استكشف جميع الخدمات
        </button>
      </div>
    </div>
  );
}
