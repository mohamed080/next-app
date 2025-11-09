"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/logo.png";

export default function ArabicLoading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#2F4A46] z-50 flex flex-col items-center justify-center">
      {/* Rotating Arabic Pattern */}
      <div className="relative mb-8">
        <div className="w-32 h-32 relative">
          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-18 h-18 bg-linear-to-br from-primary to-[#a8835f] rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              <Image
                src={logo}
                alt="logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Text */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-primary mb-2">أسرة آل ملحم</h2>
        <p className="text-[#B8C9C7] text-lg">نرحب بكم في منصة الأسرة</p>
      </div>

      {/* Progress Bar */}
      <div className="w-80 bg-secondary rounded-full h-3 mb-4 overflow-hidden">
        <div
          className="h-3 bg-linear-to-r from-primary to-[#a8835f] rounded-full transition-all duration-200 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
        </div>
      </div>

      {/* Percentage */}
      <div className="text-[#B8C9C7] text-sm font-mono">{progress}% اكتمال</div>

      {/* Animated Dots */}
      <div className="flex space-x-2 mt-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
