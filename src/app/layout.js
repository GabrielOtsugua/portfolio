"use client";

import { Inter } from "next/font/google";
// import Menu from "../components/Menu";
import "./globals.css";
import { useState } from "react";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen">
          <header className="flex justify-between items-center p-6 fixed w-full">
            <div className="text-primary text-lg">./Gabriel</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 text-primary"
              onClick={() => setIsActive(!isActive)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>

            {isActive && <Menu />}
          </header>

          <div className="p-6 h-full flex justify-center items-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
