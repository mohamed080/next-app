"use client";

import { useState, useEffect } from "react";

export default function CoolLoading() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-[#2F534E] z-50 flex flex-col items-center justify-center">
      {/* Animated Logo/Brand */}
      <div className="relative mb-8">
        <div className="w-24 h-24 border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">م</span>
          </div>
        </div>
      </div>

      {/* Arabic Calligraphy Text */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-primary mb-2 animate-pulse">
          أسرة آل ملحم
        </h2>
        <p className="text-[#B8C9C7] text-lg">جاري التحميل...</p>
      </div>

      {/* Progress Bar */}
      <div className="w-64 bg-secondary rounded-full h-2 mb-4">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Percentage */}
      <div className="text-[#B8C9C7] text-sm">{progress}%</div>

      {/* Decorative Dots */}
      <div className="flex space-x-2 mt-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
