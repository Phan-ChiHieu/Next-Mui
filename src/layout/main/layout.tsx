import React from "react";


type TMainLayoutProps = {
    children: React.ReactNode;
  };

export default function MainLayout({children}:TMainLayoutProps) {
  return (
    <div>
      <header>Header</header>
      <div>{children}</div>
      <footer>footer</footer>
    </div>
  );
}
