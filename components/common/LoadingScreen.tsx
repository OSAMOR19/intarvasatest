"use client";

import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [visibleLetters, setVisibleLetters] = useState<number[]>([]);

  useEffect(() => {
    // Animate letters one by one
    const letterTimers = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) =>
      setTimeout(() => {
        setVisibleLetters((prev) => [...prev, index]);
      }, index * 200) // 200ms delay between each letter
    );

    const totalAnimationTime = 8 * 200 + 1000;

    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 800); // Wait for fade out animation
    }, totalAnimationTime);

    const handleLoad = () => {
      const loadTime = Date.now();
      const minimumLoadTime = 3000;
      
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setIsLoading(false), 800);
      }, Math.max(minimumLoadTime - (Date.now() - loadTime), totalAnimationTime));
    };

    if (document.readyState === "complete") {
      const minimumShowTime = Math.max(totalAnimationTime, 2000);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setIsLoading(false), 800);
      }, minimumShowTime);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      letterTimers.forEach((timer) => clearTimeout(timer));
      clearTimeout(fadeOutTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-800 bg-[#001933] ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Animated Logo */}
      <div className="flex flex-row items-end">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div
            key={index}
            className={`transform transition-all duration-500 ease-out ${
              visibleLetters.includes(index)
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            <img 
              src={`/load-logo/${
                index === 0 ? "logo" : 
                index === 1 ? "i" :
                index === 2 ? "n" :
                index === 3 ? "t" :
                index === 4 ? "a" :
                index === 5 ? "r" :
                index === 6 ? "v" :
                index === 7 ? "cap-A" : "s"
              }.png`} 
              alt="IntarVAS Logo" 
              className="block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;

{/* <img
  src="/images/Logo.svg"
  alt="IntarVAS Logo"
  className="w-64 md:w-96 lg:w-[500px] h-auto animate-logo-loading"
/> */}

// style={{
//   backgroundImage: "url(/images/herosectionbg.svg)",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   pointerEvents: isLoading ? "auto" : "none",
// }}