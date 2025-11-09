"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector("#about-section");
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();
      setVisible(rect.top <= 0); // Show when About section reaches top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {visible && (
        <a
          href="https://wa.me/201060132785"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-0 right-4 md:right-10 z-30 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-[#a8835f] transition-all duration-300 cursor-pointer animate-fade-in"
        >
          <FaWhatsapp className="text-white text-xl sm:text-2xl md:text-3xl" />
        </a>
      )}
    </>
  );
}
