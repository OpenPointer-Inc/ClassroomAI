import React from "react";

export default function Faqs() {
  return (
    <div className="relative overflow-hidden py-16 text-gray-800 lg:mt-10">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-[990px] lg:px-8 xl:max-w-[1200px]">
        <div className="relative z-10">
          {/* Heading Section */}
          <div className="mb-10 flex flex-col items-center justify-center text-center lg:mb-0">
            <h2 className="gradient-border w-fit border-b text-sm font-semibold uppercase tracking-wide text-textPrimary sm:text-md md:text-lg">
              Career-Ready Path
            </h2>
            <h3 className="font-poppins mb-4 mt-2 text-center text-2xl font-semibold tracking-tight text-primary xs:text-3xl sm:text-4xl md:text-5xl">
              Beyond Learning:{" "}
              <span className="text-[#1A6DE0]">Accelerate Today with AI</span>
            </h3>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-700 md:text-xl">
              Our unique blend of Expert Mentors, Personalized Learning Agent,
              and insightful Assessments doesn’t just teach – it transforms your
              skills and potential.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="md-pt-0 grid grid-cols-1 items-center gap-12 pt-5 lg:grid-cols-12 lg:gap-10">
            {/* Left Graphic Column */}
            <div className="relative mx-auto flex h-96 w-full justify-center lg:col-span-6 lg:h-[520px]">
              <div className="relative flex h-full w-full max-w-xl items-center justify-center">
                {/* Animated Rings */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                  <div className="h-40 w-40 rounded-full border-4 border-indigo-100 opacity-80 sm:h-64 sm:w-64"></div>
                  <div className="animate-spin-slow absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-indigo-200 opacity-60 sm:h-80 sm:w-80"></div>
                  <div className="animate-spin-reverse absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-indigo-200 opacity-40 sm:h-96 sm:w-96"></div>
                </div>

                {/* Center Circle */}
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform sm:h-72 sm:w-72">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    <div className="absolute inset-0 bg-linear-to-br from-orange-300 to-amber-400 rotate-6 rounded-2xl opacity-90 shadow-lg"></div>
                    <div className="absolute inset-0 flex -rotate-3 items-center justify-center rounded-xl shadow-md">
                      <div className="p-3 text-center">
                        <div className="mb-3 text-amber-800">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-8 w-8"
                          >
                            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                            <path d="M22 10v6"></path>
                            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-amber-800">
                          ENROLL
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="mx-auto w-full max-w-2xl space-y-6 lg:col-span-6 lg:max-w-none">
              <div className="mx-auto mb-4 mt-8 flex justify-center space-x-2">
                <button className="h-2 w-12 rounded-full bg-gradient-to-r from-orange-400 to-amber-500"></button>
                <button className="h-2 w-12 rounded-full bg-gray-300"></button>
                <button className="h-2 w-12 rounded-full bg-gray-300"></button>
                <button className="h-2 w-12 rounded-full bg-gray-300"></button>
              </div>

              <div className="flex h-[425px] w-full flex-col rounded-2xl border border-indigo-100 bg-[#006AFF] bg-opacity-80 p-8 shadow-xl backdrop-blur-sm">
                <div className="flex h-full flex-col">
                  <div className="inline-block rounded-full bg-gradient-to-r from-[#e2e5e9] to-[#bbc6f8] px-4 py-1 text-xs font-medium text-black shadow-sm mb-4">
                    STEP 1
                  </div>
                  <h2 className="font-poppins mb-4 text-xl font-bold text-white">
                    ENROLL
                  </h2>
                  <div className="flex-grow overflow-y-auto pr-2">
                    <p className="text-justify text-sm leading-relaxed text-white">
                      Begin your AI educational experience through our streamlined enrollment portal. Discover comprehensive program offerings, select your ideal course, and register with ease. Panaversity is designed to make your first step into AI education simple, transparent, and fully supported.
                    </p>
                  </div>
                  <div className="mt-2 border-t-2 border-gray-300 pt-4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/panaversity_guide.pdf"
                      className="group flex w-fit items-center gap-3 rounded-lg bg-gradient-to-r from-orange-400 to-amber-500 px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:translate-x-1"
                    >
                      <span>View Guide</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
