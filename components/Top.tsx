"use client";
import React from "react";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Top() {
  return (
    <div className="relative bg-white text-black">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-5xl pt-[4rem] sm:pt-[6rem] md:pt-[7rem] lg:pt-[8rem]">
          <div className="text-center">
            <h1 className={`${poppins.className} text-[2rem] font-bold tracking-tight text-textPrimary xs:text-[2.5rem] sm:text-[3rem] md:text-[4rem]`}>
              Learn Agentic AI in{" "}
              <span className="bg-linear-to-r from-[#0D905C] to-[#11A46A] bg-clip-text text-[#11A46A]">
                Live Online Classes
              </span>{" "}
              by Experts
            </h1>

            <p className={`${inter.className} mt-6 text-[0.9rem] leading-8 text-textSecondary md:text-[1.1rem]`}>
              Access Live Classes and Labs on{" "}
              <span className="gradient-border2">Zoom</span> from Anywhere
              Worldwide – Choose Between Dedicated English or Urdu/Hindi{" "}
              <span className="gradient-border2">Sections!</span>
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                aria-label="Go to courses offered page"
                className={`${inter.className} bg-[#11A46A] group relative inline-flex items-center overflow-hidden rounded-[40px] border-2 border-[#11A46A] bg-accent px-6 py-2.5 text-sm font-semibold text-textPrimary hover:bg-white hover:text-textPrimary sm:px-12 sm:py-4 sm:text-[0.9rem]`}
                href="/flagship-program/courses"
              >
                <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-transparent opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
                <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0">
                  <svg
                    className="hidden h-5 w-5 sm:flex"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Start Your AI Journey</span>
              </a>
            </div>
          </div>
        </div>

        {/* Background video */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -z-10 mt-[-30rem] overflow-hidden xs:mt-[-34.5rem] sm:ml-[-8rem] sm:mt-[-33rem] md:ml-[-2rem] md:mt-[-32rem] lg:mt-[-34.5rem] xl:ml-[-6rem] xl:mt-[-37rem]"
        >
          <video
            src="video.mp4"
            loop
            muted
            autoPlay
            playsInline
            className="custom-control h-[55rem] w-full object-cover opacity-[0.4] sm:h-[65rem] md:h-[75rem] lg:h-[85rem] xl:h-[95rem]"
          ></video>
        </div>
      </div>
    </div>
  );
}
