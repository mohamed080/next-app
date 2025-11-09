"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaPhoneVolume,
  FaSnapchatGhost,
  FaTiktok,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import { FaComment, FaXTwitter } from "react-icons/fa6";
import shape_3 from "../assets/shape_3.png";
import shape_4 from "../assets/shape_4.png";
import shape_5 from "../assets/shape_5.png";
import footerImg from "../assets/footerImg.png";
import logo from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-store.png";
import PUIUX from "../assets/PUIUX 3.png";
import footerImgR from "../assets/footerImgR.png";
import footerImgL from "../assets/footerImgL.png";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="container max-w-6xl mx-auto relative z-32 -mb-[74%] sm:-mb-[56%] lg:-mb-[40%] xl:-mb-[35%]">
        {/* Header Section */}

        {/* Split Contact Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 justify-items-center md:justify-items-start">
          {/* Left Side - White Background */}
          <div className="bg-white p-4 md:p-8 shadow-[0px_0px_35px_0px_#2F4A4612] relative z-20 order-2 md:order-1 w-full">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-2">
              من فضلك املأ البيانات التالية
            </h4>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xl sm:text-2xl font-medium text-secondary">
                  ادخل اسمك
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-[#737D7C] text-xl font-medium bg-[#FAF8F5] border border-transparent focus:border focus:border-primary focus:outline-none pr-8"
                    placeholder="اسم تجريبى"
                    required
                  />
                  <span className="absolute right-3 text-[#737D7C]">
                    <FaUser />
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xl sm:text-2xl font-medium text-secondary">
                  البريد الإلكتروني
                </label>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-[#737D7C] text-xl font-medium bg-[#FAF8F5] border border-transparent focus:border focus:border-primary focus:outline-none pr-8"
                    placeholder="example@email.com"
                    required
                  />
                  <span className="absolute right-3 text-[#737D7C]">
                    <FaEnvelope />
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xl sm:text-2xl font-medium text-secondary">
                  رقم الهاتف
                </label>
                <div className="relative flex items-center">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-[#737D7C] text-xl font-medium bg-[#FAF8F5] border border-transparent focus:border focus:border-primary focus:outline-none pr-8 text-right"
                    placeholder="ادخل رقم جوالك"
                    required
                  />
                  <span className="absolute right-3 text-[#737D7C]">
                    <FaPhone />
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xl sm:text-2xl font-medium text-secondary">
                  الرسالة
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 text-[#737D7C] text-xl font-medium bg-[#FAF8F5] border border-transparent focus:border focus:border-primary focus:outline-none pr-8 resize-none"
                    placeholder="اكتب رسالتك هنا..."
                    required
                  ></textarea>
                  <span className="absolute top-4 right-3 text-[#737D7C]">
                    <FaComment />
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#054239] text-white py-3 px-6 cursor-pointer 
             hover:bg-[#a8835f] transition duration-300 font-medium text-xl 
             shadow-[0px_2px_2px_2px_#CCCCCC1A]"
              >
                إرسال
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="max-w-xs order-1 md:order-2 text-center md:text-start">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary">
              تواصل معنا
            </h2>
            <p className="text-lg font-medium text-[#737D7C]">
              نسعد دائما في صندوق صلة ورحم - أسرة آل ملحم - بتواصلكم معنا
              والإجابة على استفساراتكم
            </p>
          </div>
        </div>
      </div>
      <Image
        src={shape_3}
        alt="shape image"
        width={400}
        // height={100}
        className="hidden md:block h-auto lg:w-[81.3%] -mb-1  relative z-31"
      />
      <footer
        className="min-h-screen bg-cover bg-center bg-no-repeat relative z-31"
        style={{ backgroundImage: "url('/bg-3.png')" }}
      >
        <div className="absolute top-0 left-0 z-9 h-full">
          <Image
            src={shape_4}
            alt="corner shape"
            width={375}
            height={100}
            className="-translate-y-1/7 w-45 md:w-62 lg:w-[310px]"
          />
        </div>
        <div className="absolute top-[5%] sm:top-1/6 lg:top-1/8 xl:top-1/4 left-1/2 sm:left-1/2 lg:left-1/4 xl:left-1/3 z-20 -translate-x-1/2 md:translate-x-0 translate-y-1/3 sm:translate-y-1/7 md:translate-y-0 flex flex-col items-center">
          <Image
            src={shape_5}
            alt="corner shape"
            width={300}
            height={100}
            className="w-40 md:w-46 relative"
          />
          <div className="bg-primary w-24 h-24 md:w-30 md:h-30 rounded-full flex items-center justify-center -mt-32 md:-mt-38 realative z-21">
            <h5 className="text-lg text-white font-medium text-center">
              تواصل معنا
            </h5>
          </div>
        </div>

        <div className="max-w-7xl pt-[80%] lg:pt-[40%] xl:pt-[30%] relative z-9 mx-auto pb-8">
          <div className="bg-[#254742] p-4 sm:p-6 relative">
            <div className="absolute top-0 right-0 z-0">
              <Image
                src={footerImgR}
                alt="decorative"
                width={400}
                height={400}
                className=" w-55 sm:w-70 md:w-80 lg:w-100 pointer-events-none"
              />
            </div>
            <div className="absolute bottom-0 md:top-0 left-0 z-0">
              <Image
                src={footerImgL}
                alt="decorative"
                width={400}
                height={400}
                className=" w-55 sm:w-70 md:w-80 lg:w-100 pointer-events-none"
              />
            </div>

            <div className="relative border border-primary flex flex-col md:flex-row items-stretch">
              {/* Decorative Image - Moved to be direct child of the container */}
              <div className="hidden sm:block absolute top-1/3 md:top-1/2 left-1/2 md:left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <Image
                  src={footerImg}
                  alt="decorative"
                  width={50}
                  height={50}
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                />
              </div>

              {/* Second decorative image for the other border */}
              <div className="hidden sm:block absolute top-[70%] md:top-1/2 left-1/2 md:left-2/3 transform -translate-x-1/2 -translate-y-1/2 md:-translate-y-1/2 z-20">
                <Image
                  src={footerImg}
                  alt="decorative"
                  width={50}
                  height={50}
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                />
              </div>
              <div className="flex-1 p-4 sm:p-6 md:p-12 flex flex-col justify-center">
                <h5 className="text-xl md:text-2xl font-medium text-white mb-4">
                  معلومات التواصل
                </h5>
                <ul className="text-base text-[#8DAEAA] space-y-4 max-w-[200px]">
                  <li className="flex items-start gap-2">
                    <FaMapMarkerAlt />
                    9HH8+42H, المملكة العربية السعودية, القصيم, المملكة العربية
                    السعودية
                  </li>
                  <li className="flex items-center gap-2">
                    <FaEnvelope />
                    <Link
                      href="mailto:info@almelhem.com"
                      className="hover:text-primary hover:underline"
                    >
                      info@almelhem.com
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaWhatsapp />

                    <Link
                      href="tel:+966555555555"
                      className="hover:text-primary hover:underline"
                    >
                      +966 55 555 5555
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaPhoneVolume />
                    <Link
                      href="tel:+966555555555"
                      className="hover:text-primary hover:underline"
                    >
                      +966 55 555 5555
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1 border-t md:border-r border-primary p-4 sm:p-6 md:p-12 text-center flex flex-col justify-center space-y-4 sm:space-y-5">
                <Image
                  src={logo.src}
                  alt="logo"
                  width={100}
                  height={100}
                  className="mx-auto w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                />
                <p className="text-base sm:text-lg text-[#B8C9C7] font-medium">
                  تنتمي أسرة آل ملحم في الأحساء إلى قبيلة مطير نسبا وتحديدا من
                  &quot;العقفانة&quot; ويسمون (القنازعة) من الجغاوين وهو فرع من
                  العبيات المشهور والمنتمي إلى واصل من بريه أحد الأقسام الرئيسية
                  الثلاثة لقبيلة مطير.
                </p>
                {/* Social Icons */}
                <div className="flex justify-center items-center gap-3 sm:gap-4 mt-2 sm:mt-4">
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#FFFFFF80] hover:bg-primary rounded-full p-2 transition-all duration-300 ease-in-out group"
                  >
                    <FaTiktok className="text-[#FFFFFF80] text-lg group-hover:text-white transition-all duration-300 ease-in-out" />
                  </a>
                  <a
                    href="https://www.x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#FFFFFF80] hover:bg-primary rounded-full p-2 transition-all duration-300 ease-in-out group:"
                  >
                    <FaXTwitter className="text-[#FFFFFF80] text-lg group-hover:text-white transition-all duration-300 ease-in-out" />
                  </a>
                  <a
                    href="https://www.snapchat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#FFFFFF80] hover:bg-primary rounded-full p-2 transition-all duration-300 ease-in-out group"
                  >
                    <FaSnapchatGhost className="text-[#FFFFFF80] text-lg group-hover:text-white transition-all duration-300 ease-in-out" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#FFFFFF80] hover:bg-primary rounded-full p-2 transition-all duration-300 ease-in-out group"
                  >
                    <AiFillInstagram className="text-[#FFFFFF80] text-lg group-hover:text-white transition-all duration-300 ease-in-out" />
                  </a>
                </div>
              </div>
              <div className="flex-1 border-t md:border-r border-primary p-4 sm:p-6 md:p-12 flex flex-col justify-center">
                <h5 className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-2 sm:mb-3">
                  لتصلك أخبار أسرة آل ملحم
                </h5>
                <p className="text-base sm:text-lg text-[#B8C9C7] font-medium mb-3">
                  أضف رقم جوالك في قائمة الاشتراك
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Phone submitted:", phone);
                    setPhone(""); // clear input after submit
                  }}
                  className="flex items-stretch gap-2"
                >
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 sm:px-4 h-11 sm:h-[50px] text-[#B8C9C7] text-lg sm:text-xl font-medium bg-[#2F4A46] border border-transparent focus:border focus:border-primary focus:outline-none text-right"
                    placeholder=" رقم جوالك"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-primary text-white border border-transparent hover:bg-[#a8835f] transition duration-300 flex items-center justify-center px-3 sm:px-4 group cursor-pointer"
                  >
                    <FaPaperPlane className="text-lg sm:text-xl transform group-hover:-translate-y-1 transition-transform duration-300" />
                  </button>
                </form>
                {/* Store buttons */}
                <div className="flex items-center  mt-6">
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={appStore}
                      alt="App Store"
                      width={100}
                      height={45}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={googlePlay}
                      alt="Google Play"
                      width={130}
                      height={45}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6 mx-4 gap-4 sm:mx-15">
            <p className="text-base text-white font-medium">
              © جميع الحقوق محفوظة لدى ال ملحم 2025
            </p>
            <a
              href="https://puiux.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={PUIUX}
                alt="company PUIUX Logo"
                width={100}
                height={80}
                className="transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
