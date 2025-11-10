"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Loading from "./Loading";

export default function LoadingWrapper({ children }) {
  const { loading: authLoading } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading || authLoading) return <Loading />;

  return <>{children}</>;
}
