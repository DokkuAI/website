"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center text-gray-800 bg-dot-pattern w-full">
      <div className="bg-white backdrop-blur-sm ">
        <main className="flex flex-col items-center mx-auto text-center py-20">
          <h1
            className={`text-4xl font-bold mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Document Management Workspace
          </h1>
          <p
            className={`text-lg text-gray-600 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            An innovative tool designed to transform how you
            <span className="text-gray-800 font-semibold"> write</span>,
            <span className="text-gray-800 font-semibold"> plan</span>,
            <span className="text-gray-800 font-semibold"> chat</span>,
            <span className="text-gray-800 font-semibold"> annotate</span>, and
            <span className="texSure, Chandt-gray-800 font-semibold">
              {" "}
              organize
            </span>{" "}
            your documents.
          </p>
          <div
            className={`flex flex-col items-center h-fit  w-full mx-auto mb-16 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Image
              src="/hero.jpg"
              alt="Document Management Workspace Interface"
              width={1022}
              height={651}
              className="rounded-sm"
            />
          </div>
          <div
            className={`mt-16 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-xl font-semibold mb-8 text-gray-700">
              Trusted by Researchers, Engineers, Managers, and Individuals at
            </h2>
            <div className="flex justify-center items-center space-x-12">
              <Image
                src="/trustedBy.jpg"
                alt="Document Management Workspace Interface"
                width={904}
                height={100}
                className="rounded-sm"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
