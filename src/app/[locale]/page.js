"use client";

import { useAuth } from "../context/AuthContext";
import HeroSection from "../components/sections/HeroSection";
import WhatsAppButton from "../components/WhatsAppButton";
import AboutSection from "../components/sections/AboutSection";
import NumbersSection from "../components/sections/NumbersSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProgramsSection from "../components/sections/ProgramsSection";
import LastNewsSection from "../components/sections/LastNewsSection";
import PartnersSection from "../components/sections/PartnersSection";
import ContactSection from "../components/sections/ContactSection";

export default function HomePage() {
  const { user } = useAuth();
  
  return (
    <main>
      <HeroSection />
      <WhatsAppButton />
      <AboutSection />
      {user ? <ServicesSection /> : <NumbersSection />}
      <ProgramsSection user={user} />
      <LastNewsSection />
      <PartnersSection />
      <ContactSection />
    </main>
  );
}
