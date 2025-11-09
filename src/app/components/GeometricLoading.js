"use client";

import { useState, useEffect } from "react";

export default function GeometricLoading() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const shapes = [
    // Square
    <div
      key="square"
      className="w-16 h-16 border-4 border-primary animate-pulse"
    ></div>,
    // Circle
    <div
      key="circle"
      className="w-16 h-16 border-4 border-primary rounded-full animate-pulse"
    ></div>,
    // Triangle
    <div
      key="triangle"
      className="w-16 h-16 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-primary animate-pulse"
    ></div>,
    // Diamond
    <div
      key="diamond"
      className="w-16 h-16 border-4 border-primary rotate-45 animate-pulse"
    ></div>,
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#2F534E] to-secondary z-50 flex flex-col items-center justify-center">
      {/* Animated Shapes */}
      <div className="relative mb-8">
        {shapes[step]}

        {/* Floating particles */}
        <div className="absolute -top-4 -right-4 w-3 h-3 bg-primary rounded-full animate-bounce"></div>
        <div
          className="absolute -bottom-4 -left-4 w-3 h-3 bg-primary rounded-full animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="absolute -top-4 -left-4 w-2 h-2 bg-[#B8C9C7] rounded-full animate-bounce"
          style={{ animationDelay: "0.6s" }}
        ></div>
        <div
          className="absolute -bottom-4 -right-4 w-2 h-2 bg-[#B8C9C7] rounded-full animate-bounce"
          style={{ animationDelay: "0.9s" }}
        ></div>
      </div>

      {/* Text */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">أسرة آل ملحم</h3>
        <p className="text-[#B8C9C7] animate-pulse">
          {
            [
              "جاري التحميل",
              "جاري التحميل.",
              "جاري التحميل..",
              "جاري التحميل...",
            ][step]
          }
        </p>
      </div>

      {/* Progress Dots */}
      <div className="flex space-x-2 mt-6">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === step ? "bg-primary scale-125" : "bg-[#B8C9C7]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
