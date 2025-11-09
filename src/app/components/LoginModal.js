"use client";

import { useState } from "react";
import { FaTimes, FaEye, FaEyeSlash, FaUser, FaLock } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

export default function LoginModal({ isOpen, onClose }) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await login(email, password);

    if (result.success) {
      onClose();
      setEmail("");
      setPassword("");
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#2F534E] border border-primary rounded-2xl w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute left-4 top-4 text-[#B8C9C7] hover:text-white transition-colors"
        >
          <FaTimes size={20} />
        </button>

        {/* Header */}
        <div className="text-center pt-8 pb-6 border-b border-primary/30">
          <h2 className="text-2xl font-bold text-white">تسجيل الدخول</h2>
          <p className="text-[#B8C9C7] mt-2">مرحباً بعودتك إلى أسرة آل ملحم</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-[#B8C9C7] text-sm font-medium">
              البريد الإلكتروني
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1a3d38] border border-secondary rounded-lg py-3 pr-4 pl-10 text-white placeholder-[#8DAEAA] focus:border-primary focus:outline-none transition-colors"
                placeholder="ادخل بريدك الإلكتروني"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-[#B8C9C7] text-sm font-medium">
              كلمة المرور
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#1a3d38] border border-secondary rounded-lg py-3 pr-4 pl-10 text-white placeholder-[#8DAEAA] focus:border-primary focus:outline-none transition-colors"
                placeholder="ادخل كلمة المرور"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-10 top-1/2 transform -translate-y-1/2 text-[#8DAEAA] hover:text-primary transition-colors"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 space-x-reverse text-[#B8C9C7] cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-secondary bg-[#1a3d38] text-primary focus:ring-primary"
              />
              <span>تذكرني</span>
            </label>
            <button
              type="button"
              className="text-primary hover:text-[#a8835f] transition-colors"
            >
              نسيت كلمة المرور؟
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-[#a8835f] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
          </button>

          {/* Demo Credentials */}
          <div className="bg-secondary/30 border border-primary/30 rounded-lg p-3 mt-4">
            <p className="text-[#B8C9C7] text-sm text-center">
              <strong>بيانات تجريبية:</strong>
              <br />
              البريد: user@example.com
              <br />
              كلمة المرور: password
            </p>
          </div>
        </form>

        {/* Footer */}
        <div className="border-t border-primary/30 p-6 text-center">
          <p className="text-[#B8C9C7]">
            ليس لديك حساب؟{" "}
            <button className="text-primary hover:text-[#a8835f] font-medium transition-colors">
              انضم إلينا
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
