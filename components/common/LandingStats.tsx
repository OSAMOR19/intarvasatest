"use client";

import Noise from '../Noise'
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProvenResultsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<(string | number)[]>([
    0, 0, 0, 0,
  ]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      value: "99.9%",
      title: "Uninterrupted connectivity",
      description: 'Our cloud-powered infrastructure ensures your communications run smoothly without interruptions.',
    },
    {
      value: "1M+",
      title: "Messages delivered daily",
      description: "Our system allows us tot be able to handle up to 1M+ messages daily, Handling large-scale communications with fast, secure and reliable messaging solutions",
    },
    {
      value: "3+",
      title: "Years Experience",
      description: "Proven success in delivering scalable and  innovative communication services across Nigeria.",
    },
    {
      value: "50+",
      title: "Businesses served",
      description: "We empower hundreds of Nigerian businesses and government agencies with reliable telecom solutions."
    },
  ];

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animate numbers when visible
  useEffect(() => {
    if (isVisible) {
      const targets = [99.9, 1000000, 3, 50]; // Target values for animation
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4); // Easing function

        setAnimatedStats(
          targets.map((target) => {
            if (target === 99.9) {
              return parseFloat((target * easeOutQuart).toFixed(1));
            } else if (target === 1000000) {
              const animatedValue = target * easeOutQuart;
              if (animatedValue >= 1000000) return "1M+";
              if (animatedValue >= 1000)
                return `${Math.floor(animatedValue / 1000)}K+`;
              return `${Math.floor(animatedValue)}+`;
            } else {
              return Math.floor(target * easeOutQuart);
            }
          })
        );

        if (step >= steps) {
          clearInterval(timer);
          // Set final values
          setAnimatedStats([99.9, "1M+", 3, 50]);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="max-h-screen bg-[#F6F6F6] flex items-center justify-center p-8 py-20" >
      <div className="w-full h-full max-w-[1275px] max-h-[617px] bg-[#00000040] rounded-3xl shadow-2xl p-1" style={{ position: 'relative', overflow: 'hidden'}}>
        <div className="w-full h-full max-w-[1275px] max-h-[617px] bg-[#1E1E1E] rounded-3xl shadow-2xl p-12 lg:p-16 z-10 ">
          <Noise patternSize={250} patternScaleX={1} patternScaleY={1} patternRefreshInterval={1} patternAlpha={15} />

          {/* Content */}
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              
              {/* Left Column */}
              <div
                className={`space-y-6 md:space-y-8 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                {/* Badge */}
                <div
                  className={`transition-all duration-700 delay-200 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <Button className="px-3 md:px-4 py-2 bg-[#38526D] text-[#C1DFFD] rounded-full text-xs md:text-sm font-medium border border-[#79B8FA] hover:bg-blue-600/30 transition-all duration-300 hover:scale-105">
                    Why Us?
                  </Button>
                </div>

                {/* Heading */}
                <div
                  className={`transition-all duration-700 delay-400 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                    Proven Results.
                    <br />
                    Measurable Impact
                  </h1>
                </div>

                {/* Description */}
                <div
                  className={`transition-all duration-700 delay-600 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <p className="text-[#E6E6E6] text-base md:text-lg leading-relaxed w-5/6">
                    Trusted by businesses and government agencies across Nigeria.
                  </p>
                </div>

                {/* CTA Button */}
                <div
                  className={`transition-all duration-700 delay-800 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <Link href={"/about"}>
                    <Button className="px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-[#208DFE] to-[#1670D8] text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-[0px_0px_0px_1px_#007DFEB8,0px_1px_2px_0px_#007DFEA6]">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column - Stats Grid */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-11 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`space-y-1 md:space-y-3 lg:space-y-4 transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 200 + 400}ms` }}
                  >
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold transition-all duration-500 hover:scale-110 text-transparent bg-clip-text bg-gradient-to-r from-[#208DFE] to-[#FFFFFF]">
                      {isVisible ? (
                        <>
                          {index === 0 && `${animatedStats[0]}%`}
                          {index === 1 && animatedStats[1]}
                          {index === 2 && `${animatedStats[2]}+`}
                          {index === 3 && `${animatedStats[3]}+`}
                        </>
                      ) : (
                        stat.value
                      )}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-200 transition-all duration-300 hover:text-white">
                      {stat.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed transition-all duration-300 hover:text-gray-300">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
          {/* <Noise patternSize={250} patternScaleX={1} patternScaleY={1} patternRefreshInterval={1} patternAlpha={15} /> */}
        </div>
      </div>
    </div>
  );
};

export default ProvenResultsSection;