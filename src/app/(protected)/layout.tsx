"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/src/feature/layout/components/header";
import { Sidebar } from "@/src/feature/layout/components/sidebar";
import { useAuth } from "@/src/shared/lib/auth/auth-context";
import type { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-neutral-500 text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 py-4 pb-24 md:pb-6 min-h-screen">
      <div className="flex flex-col gap-6 mx-auto max-w-380">
        <Header />
        <div className="flex gap-6 h-full">
          <Sidebar />
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
