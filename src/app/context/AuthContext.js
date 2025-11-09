"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  // Defer setState to avoid synchronous updates on mount
  Promise.resolve().then(() => {
    const token = localStorage.getItem("auth_token");
    const userData = localStorage.getItem("user_data");

    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  });
}, []);


  const login = async (email, password) => {
    try {
      // Simulate API call - replace with your actual authentication API
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          if (email === "user@example.com" && password === "password") {
            resolve({
              success: true,
              user: {
                id: 1,
                name: "محمد أحمد",
                email: email,
                phone: "+966555555555",
              },
              token: "mock_jwt_token_12345",
            });
          } else {
            resolve({
              success: false,
              error: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
            });
          }
        }, 1000)
      );

      if (response.success) {
        setUser(response.user);
        localStorage.setItem("auth_token", response.token);
        localStorage.setItem("user_data", JSON.stringify(response.user));
        return { success: true };
      } else {
        return { success: false, error: response.error };
      }
    } catch (error) {
      return { success: false, error: "حدث خطأ أثناء تسجيل الدخول" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_data");
  };

  const value = {
    user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
