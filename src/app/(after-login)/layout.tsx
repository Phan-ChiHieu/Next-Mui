import AuthGuard from "@/auth/guard/auth-guard";
import React from "react";

type TDashboardProps = {
  children: React.ReactNode;
};

export default function layoutDashboard({ children }: TDashboardProps) {
  return <AuthGuard>{children}</AuthGuard>;
}
