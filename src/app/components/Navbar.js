"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { useState } from "react";
import logo from "/public/logo.png";
import Image from "next/image";
import {
  FaAngleDown,
  FaAngleUp,
  FaBars,
  FaTimes,
  FaRegBell,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mediaOpen, setMediaOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const { user, logout } = useAuth();

  function handleLocaleToggle() {
    const newLocale = locale === "ar" ? "en" : "ar";
    router.replace(pathname, { locale: newLocale });
  }

  const handleLogout = () => {
    logout();
    setProfileDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const isActive = (href) => pathname === href;

  return (
    <div className="relative">
      <div className="nav-overlay"></div>
      <nav className="container max-w-6xl mx-auto flex justify-between items-center p-4 relative nav z-20">
        {/* Logo */}
        <Link href="/" className="z-10">
          <Image
            src={logo.src}
            alt="logo"
            width={100}
            height={100}
            className="w-16 md:w-20 lg:w-24"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center text-xl font-medium z-10">
          <li>
            <Link
              href="/"
              className={
                isActive("/")
                  ? "text-primary"
                  : "text-[#B8C9C7] hover:text-white transition-colors"
              }
            >
              الرئيسية
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={
                isActive("/about")
                  ? "text-primary"
                  : "text-[#B8C9C7] hover:text-white transition-colors"
              }
            >
              من نحن
            </Link>
          </li>
          <li>
            <Link
              href="/rules"
              className={
                isActive("/rules")
                  ? "text-primary"
                  : "text-[#B8C9C7] hover:text-white transition-colors"
              }
            >
              اللوائح والاحكام
            </Link>
          </li>
          <li>
            <Link
              href="/programs"
              className={
                isActive("/programs")
                  ? "text-primary"
                  : "text-[#B8C9C7] hover:text-white transition-colors"
              }
            >
              البرامج
            </Link>
          </li>

          {/* Dropdown for المركز الاعلامي */}
          <li className="relative">
            <button
              onClick={() => setMediaOpen(!mediaOpen)}
              className="cursor-pointer px-2 py-1 rounded text-[#B8C9C7] hover:text-white flex items-center gap-1 transition-colors"
            >
              المركز الاعلامي
              <span>{mediaOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
            </button>
            {mediaOpen && (
              <ul className="absolute top-full left-0 mt-1 w-48 bg-[#2F534E]/95 backdrop-blur-sm rounded shadow-lg z-50 text-[#B8C9C7] py-2">
                <li>
                  <Link
                    href="/media/news"
                    className="block px-4 py-2 hover:bg-primary hover:text-white transition-all duration-200"
                    onClick={() => setMediaOpen(false)}
                  >
                    الأخبار
                  </Link>
                </li>
                <li>
                  <Link
                    href="/media/press"
                    className="block px-4 py-2 hover:bg-primary hover:text-white transition-all duration-200"
                    onClick={() => setMediaOpen(false)}
                  >
                    الصور
                  </Link>
                </li>
                <li>
                  <Link
                    href="/media/videos"
                    className="block px-4 py-2 hover:bg-primary hover:text-white transition-all duration-200"
                    onClick={() => setMediaOpen(false)}
                  >
                    الفيديوهات
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/contact"
              className={
                isActive("/contact")
                  ? "text-primary"
                  : "text-[#B8C9C7] hover:text-white transition-colors"
              }
            >
              تواصل معنا
            </Link>
          </li>
          <li>
            <CiSearch className="text-xl cursor-pointer text-[#B8C9C7] hover:text-white transition-colors" />
          </li>
        </ul>

        {/* Desktop Language & Register */}
        <div className="hidden lg:flex items-center gap-5 text-xl font-medium z-10">
          <button
            onClick={handleLocaleToggle}
            className="flex items-center cursor-pointer gap-1 px-4 py-2 text-[#B8C9C7] hover:text-white transition-colors"
          >
            {locale === "ar" ? "English" : "Arabic"}
            <TbWorld />
          </button>
          {user ? (
            <div className="flex items-center gap-4">
              {/* Cart Icon with Badge */}
              <Link href="/cart" className="relative p-3 group bg-[#FFFFFF12]">
                <IoBagOutline className="text-2xl text-[#B8C9C7] group-hover:text-primary transition-colors" />
                <span className="absolute bottom-2 right-2 bg-primary text-white text-xs rounded-full w-3 h-3 flex items-center justify-center border border-[#585858]">
                  3
                </span>
              </Link>

              {/* Bills/notifactions Icon */}
              <Link
                href="/notifactions"
                className="relative p-3 group bg-[#FFFFFF12]"
              >
                <FaRegBell className="text-2xl text-[#B8C9C7] group-hover:text-primary transition-colors" />
                <span className="absolute top-3 right-3 bg-primary text-white text-xs rounded-full w-3 h-3 flex items-center justify-center border border-[#585858]">
                  3
                </span>
              </Link>

              {/* Profile Icon with Dropdown */}
              <div className="relative">
                <button
                  className="p-3 flex items-center gap-2 text-[#B8C9C7] hover:text-primary transition-colors bg-[#FFFFFF12]"
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                >
                  <FaUser className="text-2xl" />
                  <span className="text-base">{user.name}</span>
                </button>

                {/* Profile Dropdown */}
                {profileDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#2F534E]/95 backdrop-blur-sm rounded shadow-lg z-50 py-2">
                    <div className="px-4 py-2 border-b border-[#B8C9C7]/30">
                      <p className="text-white font-medium">{user.name}</p>
                      <p className="text-[#B8C9C7] text-sm">{user.email}</p>
                    </div>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-[#B8C9C7] hover:bg-primary hover:text-white transition-all duration-200"
                      onClick={() => setProfileDropdownOpen(false)}
                    >
                      الملف الشخصي
                    </Link>
                    <Link
                      href="/notifactions"
                      className="block px-4 py-2 text-[#B8C9C7] hover:bg-primary hover:text-white transition-all duration-200"
                      onClick={() => setProfileDropdownOpen(false)}
                    >
                      طلباتي
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 text-[#B8C9C7] hover:bg-primary hover:text-white transition-all duration-200"
                      onClick={() => setProfileDropdownOpen(false)}
                    >
                      الإعدادات
                    </Link>
                    <hr className="my-2 border-[#B8C9C7]/30" />
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full text-right px-4 py-2 text-[#B8C9C7] hover:bg-red-600 hover:text-white transition-all duration-200"
                    >
                      <FaSignOutAlt />
                      تسجيل الخروج
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <button
              onClick={() => setLoginModalOpen(true)}
              className="px-4 py-2 bg-primary text-white rounded hover:bg-[#a8835f] transition-colors"
            >
              انضم لعضوية المتجر الالكتروني
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4 z-50">
          <CiSearch className="text-xl cursor-pointer text-[#B8C9C7]" />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#B8C9C7] hover:text-white transition-colors p-2"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`
          lg:hidden fixed top-0 right-0 h-full w-80 bg-[#2F534E] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <div className="p-6 pt-20 h-full overflow-y-auto">
            {/* Language Toggle Mobile */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#B8C9C7]/30">
              <button
                onClick={handleLocaleToggle}
                className="flex items-center cursor-pointer gap-2 px-4 py-2 text-[#B8C9C7] hover:text-white transition-colors"
              >
                <TbWorld />
                {locale === "ar" ? "English" : "Arabic"}
              </button>
              {user ? (
                // Mobile User Profile Section
                <div className="flex items-center gap-3">
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 px-3 py-2 text-[#B8C9C7] hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <FaUser className="text-lg" />
                    <span className="text-sm">{user.name}</span>
                  </Link>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setLoginModalOpen(true);
                  }}
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-[#a8835f] transition-colors text-sm"
                >
                  انضم للعضوية
                </button>
              )}
            </div>

            {/* Mobile Navigation Links */}
            <ul className="space-y-4 text-xl font-medium">
              <li>
                <Link
                  href="/"
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    isActive("/")
                      ? "text-primary bg-white/10"
                      : "text-[#B8C9C7] hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    isActive("/about")
                      ? "text-primary bg-white/10"
                      : "text-[#B8C9C7] hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="/rules"
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    isActive("/rules")
                      ? "text-primary bg-white/10"
                      : "text-[#B8C9C7] hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  اللوائح والاحكام
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    isActive("/programs")
                      ? "text-primary bg-white/10"
                      : "text-[#B8C9C7] hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  البرامج
                </Link>
              </li>

              {/* Mobile Dropdown for المركز الاعلامي */}
              <li>
                <button
                  onClick={() => setMobileMediaOpen(!mobileMediaOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-lg text-[#B8C9C7] hover:text-white hover:bg-white/5 transition-colors"
                >
                  <span>المركز الاعلامي</span>
                  <span>
                    {mobileMediaOpen ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                </button>
                {mobileMediaOpen && (
                  <ul className="mt-2 space-y-2 bg-[#1a3d38] rounded-lg p-2">
                    <li>
                      <Link
                        href="/media/news"
                        className="block py-2 px-6 rounded hover:bg-primary hover:text-white transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileMediaOpen(false);
                        }}
                      >
                        الأخبار
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/media/press"
                        className="block py-2 px-6 rounded hover:bg-primary hover:text-white transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileMediaOpen(false);
                        }}
                      >
                        الصور
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/media/videos"
                        className="block py-2 px-6 rounded hover:bg-primary hover:text-white transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileMediaOpen(false);
                        }}
                      >
                        الفيديوهات
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Additional Links for Logged In Users */}
              {user && (
                <>
                  <li>
                    <Link
                      href="/cart"
                      className="flex items-center gap-3 py-3 px-4 rounded-lg text-[#B8C9C7] hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <IoBagOutline className="text-lg" />
                      <span>سلة التسوق</span>
                      <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-auto">
                        3
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/notifactions"
                      className="flex items-center gap-3 py-3 px-4 rounded-lg text-[#B8C9C7] hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FaRegBell className="text-lg" />
                      <span>الاشعارات</span>
                      <span className="bg-primary text-white text-sm rounded-full w-5 h-5 flex items-center justify-center border border-[#585858] mr-auto">
                        3
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 py-3 px-4 rounded-lg text-[#B8C9C7] hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FaUser className="text-lg" />
                      <span>الملف الشخصي</span>
                    </Link>
                  </li>
                </>
              )}

              <li>
                <Link
                  href="/contact"
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    isActive("/contact")
                      ? "text-primary bg-white/10"
                      : "text-[#B8C9C7] hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  تواصل معنا
                </Link>
              </li>

              {/* Logout Button for Mobile */}
              {user && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-right py-3 px-4 rounded-lg text-red-400 hover:bg-red-600 hover:text-white transition-colors"
                  >
                    تسجيل الخروج
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </div>
  );
}
