"use client"

import { useAuthContext } from "@/auth/hooks";
import { useRouter } from "next/navigation";
import React from "react";

export default function OverviewDashboardView() {
  const { logout } = useAuthContext();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace("/");
  };

  return (
    <div>
      <h1>OverviewDashboardView</h1>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
}
