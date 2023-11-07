"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import Menu from "@/components/Menu";
import Link from "next/link";
import PcMenu from "@/components/PcMenu";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isActive, setIsActive] = useState(false);

  const [isPcLayout, setIsPcLayout] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative h-screen">
          <header className="fixed flex justify-between items-center p-4 md:p-8 lg:p-12 xl:p-16 w-full">
            <div className="text-primary text-lg md:text-2xl lg:text-lg">
              ./Gabriel
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="lg:hidden w-8 h-8 md:w-16 md:h-16 text-primary"
              onClick={() => setIsActive(!isActive)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>

            {isActive && <Menu />}

            <PcMenu />
          </header>

          <div className="z-0 px-4 md:px-8 lg:px-12 xl:px-16 h-full lg:w-2/3 lg:mx-auto flex justify-center items-center md:text-xl">
            {children}

            <div className="hidden lg:flex border-l border-title h-32 absolute bottom-0 left-16"></div>

            <div className="hidden lg:block absolute bottom-36 left-14 text-title">
              <a href="https://github.com/GabrielOtsugua">
                <FiGithub className="mb-4 hover:text-primary" />
              </a>

              <a href="https://www.linkedin.com/in/gabriel-augusto-5aab41236/">
                <FiLinkedin className="hover:text-primary" />
              </a>
            </div>

            <div className="hidden lg:flex border-l border-title h-32 absolute bottom-0 right-16"></div>
          </div>
        </div>
      </body>
    </html>
  );
}
