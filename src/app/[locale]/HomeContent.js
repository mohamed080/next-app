"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import shape_2 from "../assets/shape_2.png";
import img_2 from "../assets/img-2.png";
import icon_1 from "../assets/icon1.svg";
import icon_2 from "../assets/icon2.svg";
import union_bg from "../assets/Union.png";
import imgNum_1 from "../assets/imgNum_1.png";
import imgNum_2 from "../assets/imgNum_2.png";
import imgNum_3 from "../assets/imgNum_3.png";
import imgNum_4 from "../assets/imgNum_4.png";
import imgNum_5 from "../assets/imgNum_5.png";
import imgNum_6 from "../assets/imgNum_6.png";
import AnimatedCounter from "../components/AnimatedCounter";
import Programs from "../components/Programs";
import LastNews from "../components/LastNews";
import shape_tr from "../assets/shape-tr.png";
import shape_bl from "../assets/shape-bl.png";
import shape_bl2 from "../assets/shape-bl2.png";
import shape_tl from "../assets/shape-tl.png";
import OurPartners from "../components/OurPartners";
import ContactUs from "../components/ContactUs";
import WhatsAppButton from "../components/WhatsAppButton";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { useAuth } from "../context/AuthContext";
import CoolLoading from "../components/CoolLoading";
import { useEffect, useState } from "react";
import ArabicPatternLoading from "../components/ArabicPatternLoading";
import servicebg_tl from "../assets/servicebg-tl.png";
import servicebg_br from "../assets/servicebg-br.png";

export default function HomeContent() {
  const t = useTranslations("home");
  const { user, loading: authLoading } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || authLoading) {
    // return <CoolLoading />; // or your chosen loading component
    return <ArabicPatternLoading />;
  }
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero Section with Background Image */}
      <Hero />
      {/* Section 2: About Section */}
      <section className="relative" id="about-section">
        <Image
          src={shape_2}
          alt="shape image"
          width={400}
          height={200}
          className="hidden sm:block w-[80%] sm:w-[76%] md:w-[78%] lg:w-[80.7%] -translate-y-0.5"
        />
        <div className="absolute top-0">
          <Image
            src={union_bg}
            alt="union transparent bg"
            width={400}
            height={200}
            className="w-80 md:w-100 translate-x-1/4 -translate-y-1/4"
          />
        </div>
        <WhatsAppButton />
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 py-6">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              src={img_2}
              alt="corner shape"
              width={400}
              height={200}
              className="w-[90%] object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary">
              التاريخ حاضر
              <br />
              لنشكل المستقبل
            </h2>

            <p className="text-lg md:text-xl text-[#737D7C] font-medium max-w-2xl">
              تنتمي أسرة آل ملحم في الأحساء إلى قبيلة مطير نسبا وتحديدا من
              &quot;العقفانة&quot; ويسمون (القنازعة) من الجغاوين وهو فرع من
              العبيات المشهور والمنتمي إلى واصل من بريه أحد الأقسام الرئيسية
              الثلاثة لقبيلة مطير.
            </p>

            {/* Icons Row */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Vision */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#BA946C1F] rounded-full shrink-0">
                  <Image
                    src={icon_1}
                    alt="icon"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl text-secondary font-bold">
                    رؤيتنا
                  </h4>
                  <p className="text-sm md:text-lg text-[#737D7C] font-medium">
                    الارتقاء بمكانة الأسرة إلى مستوى رفيع يُشار إليه بالبنان في
                    كل محفل ومكان.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#BA946C1F] rounded-full flex-shrink-0">
                  <Image
                    src={icon_2}
                    alt="icon"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl text-secondary font-bold">
                    رسالتنا
                  </h4>
                  <p className="text-sm md:text-lg text-[#737D7C] font-medium">
                    إدارة شؤون مجلس الأسرة العامة والاجتماعية لتوثيق روابط
                    التواصل والمحبة بين أفرادها.
                  </p>
                </div>
              </div>
            </div>

            <button className="px-8 sm:px-10 md:px-12 py-2 max-w-fit cursor-pointer text-primary border-2 border-primary hover:bg-primary hover:text-white transition duration-300">
              المزيد
            </button>
          </div>
        </div>
        {/* service only */}
        {user && (
          <Image
            src={servicebg_tl}
            alt="decorative Top left"
            width={350}
            height={350}
            className="absolute -bottom-60 left-0 z-0 w-80 sm:w-90 pointer-events-none"
          />
        )}
      </section>
      {/* Section 3: Services Section - Only shown when logged in */}
      {user && (
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
          <Services />
        </section>
      )}
      {/*Section 3: Numbers */}
      {!user && (
        <section className="py-10 md:py-16">
          <div className="container max-w-6xl mx-auto">
            {/* Stats Grid */}
            <div
              className="
        grid 
        grid-cols-3
        sm:grid-cols-4
        md:grid-cols-5
        lg:grid-cols-6 
        xl:grid-cols-7 
        gap-4 
        md:gap-8 
        justify-items-center
      "
            >
              {[
                { img: imgNum_1, end: 19 },
                { img: imgNum_2, end: 40 },
                { img: imgNum_3, end: 1280, start: 1000 },
                { img: imgNum_4, end: 4 },
                { img: imgNum_5, end: 2 },
                { img: imgNum_6, end: 11 },
                { img: imgNum_6, end: 40 },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group text-center p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center"
                >
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4 md:mb-6 flex justify-center">
                    <Image
                      src={item.img}
                      alt="إنجازات وأرقام"
                      width={100}
                      height={100}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Number */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary mb-1 sm:mb-2">
                    <AnimatedCounter start={item.start || 0} end={item.end} />
                    <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary pr-1">
                      +
                    </span>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Section 4: Programs Section */}
      <section
        className={`relative pb-10 sm:pb-20 overflow-hidden
        ${user ? "pt-10 sm:pt-20" : ""}`}
      >
        {user && (
          <Image
            src={servicebg_br}
            alt="decorative bottom right"
            width={400}
            height={400}
            className="absolute -top-84 right-0 z-0 w-100 pointer-events-none"
          />
        )}
        <Image
          src={shape_bl2}
          alt="decorative bottom left"
          width={500}
          height={500}
          className="absolute -bottom-119 left-0 z-0"
        />
        <Programs />
      </section>
      {/* Section 5: last news */}
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
        <LastNews />
      </section>

      {/* Section 6: Our partners */}
      <section className="relative py-10 sm:py-20 overflow-hidden">
        <Image
          src={shape_tl}
          alt="decorative top left"
          width={350}
          height={350}
          className="absolute bottom-0 left-0 z-0 w-42 sm:w-48 md:w-72 lg:w-82 pointer-events-none"
        />
        <OurPartners />
      </section>
      {/* Section 6: Contact Us Section */}
      <section>
        <ContactUs />
      </section>
    </div>
  );
}
