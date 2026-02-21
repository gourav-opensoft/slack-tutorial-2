"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useConvexAuth } from "convex/react";
import { AuthScreen } from "@/features/auth/components/auth-screen";

const AuthPage = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push("/");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return null; // Or a loading spinner
  }

  return <AuthScreen />;
};

export default AuthPage;
