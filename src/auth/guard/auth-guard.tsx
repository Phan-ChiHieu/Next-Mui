"use client"

import { useRouter } from "next/navigation";
import React from "react";
import { useAuthContext } from "../hooks";

type TAuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: TAuthGuardProps) {
  const router = useRouter();
  const { authenticated, method } = useAuthContext();

  console.log("router>>>", router);

  return <div>{children}</div>;
}
