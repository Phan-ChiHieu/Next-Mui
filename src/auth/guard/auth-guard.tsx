"use client";

import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { useAuthContext } from "../hooks";
import { paths } from "@/routers/paths";


const loginPaths: Record<string, string> = {
    jwt: paths.auth.jwt.login,
  };

type TAuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: TAuthGuardProps) {
  const router = useRouter();
  const { authenticated, method } = useAuthContext();
  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    if (!authenticated) {
        const searchParams = new URLSearchParams({
          returnTo: window.location.pathname,
        }).toString();
        console.log("window", searchParams)

        const loginPath = loginPaths[method];
  
        const href = `${loginPath}?${searchParams}`;
  
        router.replace(href);
      } else {
        setChecked(true);
      }
  }, [authenticated, method, router]);

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!checked) {
    return null;
  }

  return <div>{children}</div>;
}
