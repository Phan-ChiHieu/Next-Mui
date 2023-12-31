import ThemeRegistry from "@/theme/ThemeRegistry/ThemeRegistry";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/theme";
import AuthProvider from "@/auth/jwt/auth-provider";
import MotionLazy from "@/components/animate/motion-lazy";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>
            <MotionLazy>{children}</MotionLazy>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
