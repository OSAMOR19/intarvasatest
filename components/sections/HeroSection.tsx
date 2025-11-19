"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
}

let isFirstPageLoad = true;

const HeroSection = ({
  title = "Smart Telecom Solutions for Modern Businesses",
  subtitle = "Special Numbers, Call Centres, Bulk Messaging & Digital Solutions all tailored for modern Nigerian brands.",
  primaryButtonText = "Request Demo",
  secondaryButtonText = "Explore Services",
  onPrimaryClick,
  onSecondaryClick,
  imageSrc,
  imageAlt = "Telecom analytics and smartphone dashboard",
}: HeroSectionProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const hero2Ref = useRef<HTMLDivElement>(null);
  const hero4Ref = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasPlayed = useRef(false);
  const canStartAnimation = useRef(!isFirstPageLoad);
  const [allowScroll, setAllowScroll] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by only enabling client-side features after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // Trigger animation after mount
    const timer = setTimeout(() => {
      setupAnimation();
    }, 100);

    return () => clearTimeout(timer);
  }, [isMounted]);

  const setupAnimation = () => {
    // Only run GSAP after component is mounted to prevent hydration mismatch
    if (!isMounted) return;

    const ctx = gsap.context(() => {
      // Check if refs are available
      if (!titleRef.current || !subtitleRef.current || !buttonsRef.current || !hero4Ref.current) {
        console.log("HeroSection: Refs not ready");
        return;
      }

      console.log("HeroSection: Starting animations");

      // ========== INITIAL LOAD ANIMATION ==========
      // Set initial positions for slide-up animations
      gsap.set(titleRef.current, { y: 80, opacity: 0 });
      gsap.set(subtitleRef.current, { y: 60, opacity: 0 });
      gsap.set(buttonsRef.current, { y: 60, opacity: 0 });
      gsap.set(hero4Ref.current, { y: 100, opacity: 0 });

      // Initial load timeline - plays automatically
      const loadTl = gsap.timeline({ 
        delay: 0.3,
        onStart: () => console.log("HeroSection: Load animation started"),
        onComplete: () => console.log("HeroSection: Load animation complete")
      });
      
      loadTl
        .to(titleRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        })
        .to(
          subtitleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .to(
          buttonsRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .to(
          hero4Ref.current,
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        );

      // ========== SCROLL ANIMATION ==========
      // Dashboard zoom animation on scroll
      if (hero2Ref.current && hero4Ref.current && sectionRef.current) {
        console.log("HeroSection: Creating scroll animation");
        
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: true,
          scrub: 1,
          markers: true, // Add markers for debugging
          onUpdate: (self) => {
            const progress = self.progress;
            console.log("Scroll progress:", progress);
            
            // Hero-4 (phone) slides way off to the left
            gsap.to(hero4Ref.current, {
              x: `-${progress * 120}%`,
              ease: "none",
            });

            // Hero-2 (dashboard) scales up massively and centers to fill screen
            gsap.to(hero2Ref.current, {
              scale: 1 + progress * 4.5, // Much larger scale
              x: `${progress * 50}%`, // Move right to center
              y: `-${progress * 10}%`, // Move up slightly
              ease: "none",
            });
          },
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  };

  return (
    <section
      ref={sectionRef}
      className="lg:max-h-screen pt-18 lg:pt-16 overflow-hidden relative"
      style={{
        backgroundImage: "url(/images/herosectionbg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between flex-col lg:flex-row gap-6 lg:gap-0 min-h-screen pt-12 md:py-0 xl:pt-16">
        {/* Content */}
        <div className="flex flex-col pt-24 md:pt-24 lg:pt-36 2xl:pt-56 pb-58 md:pb-56 lg:pb-64 justify-start space-y-4 px-4 md:px-0 md:pl-[40px] 2xl:pl-[170px]">
          <h1
            ref={titleRef}
            className="2xl:max-w-2xl lg:max-w-[38rem] md:max-w-lg text-[32px] sm:text-[40px] md:text-[44px] lg:text-[64px]  font-inter text-white font-[800] tracking-tight leading-[1.2]"
          >
            {title}
          </h1>
          <p
            ref={subtitleRef}
            className="text-[20px] text-[#C2C6CE] max-w-[43rem]"
          >
            {subtitle}
          </p>
          <div
            ref={buttonsRef}
            className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <Link href="/about#services-showcase-section">
              <Button
                variant="outline"
                size="default"
                onClick={onSecondaryClick}
                className="bg-white text-[#001933] border-[#001933] hover:bg-gray-50 w-full sm:w-auto sm:px-6"
              >
                {secondaryButtonText}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="hero"
                size="default"
                onClick={onPrimaryClick}
                className="w-full sm:w-auto sm:px-6"
              >
                {primaryButtonText}
              </Button>
            </Link>
          </div>
        </div>

        {/* mobile image */}
        <div
          ref={imageRef}
          className="px-4 md:px-0 flex justify-end items-end lg:hidden"
        >
          <img
            src={imageSrc || "/Heroimage.svg"}
            alt={imageAlt}
            className="2xl:w-[60vw] object-contain"
            loading="eager"
          />
        </div>

        {/* desktop Image */}
        <div
          ref={imageRef}
          className="px-4 md:px-0 hidden lg:flex lg:justify-end lg:items-end relative"
        >
          <div className="">
            <img
              src="/images/hero-1.png"
              alt="logo"
              className="2xl:w-[60vw] object-contain z-50 -mb-20"
              loading="eager"
            />
          </div>

          <div
            ref={hero2Ref}
            className="z-40 w-[600px] h-[50%] bottom-0 lg:absolute -right-48 origin-center"
          >
            <img
              src="/images/hero-2.png"
              alt="logo"
              className="object-contain w-full h-full"
              loading="eager"
            />
          </div>

          <div className="">
            <img
              src="/images/hero-1.png"
              alt="logo"
              className="2xl:w-[60vw] object-contain -mb-20"
              loading="eager"
            />
          </div>
          <div className="z-20 lg:absolute -left-2 bottom-72">
            <img
              src="/images/hero-3.png"
              alt="logo"
              className="2xl:w-[60vw] object-contain"
              loading="eager"
            />
          </div>
          <img
            ref={hero4Ref}
            src="/images/hero-4.png"
            alt="logo"
            className="2xl:w-[60vw] object-contain z-20 lg:absolute bottom-32"
            loading="eager"
          />
          <div className="w-[600px] h-[60%] object-contain lg:absolute bottom-0 right-0">
            <img
              src="/images/blue-1.png"
              alt="logo"
              className=""
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;