"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
}

const Hero = ({
  title = "Smart Telecom Solutions for Modern Businesses",
  subtitle = "Special Numbers, Call Centres, Bulk Messaging & Digital Solutions all tailored for modern Nigerian brands.",
  primaryButtonText = "Request Demo",
  secondaryButtonText = "Explore Services",
  onPrimaryClick,
  onSecondaryClick,
  imageSrc,
  imageAlt = "Telecom analytics and smartphone dashboard",
}: HeroProps) => {
  return (
    <section
      className="lg:max-h-screen pt-18 lg:pt-16 overflow-hidden relative"
      style={{
        backgroundImage: "url(/images/herosectionbg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between flex-col lg:flex-row gap-6 lg:gap-0 min-h-screen pt-12 md:py-0 xl:pt-16">
        {/* Content */}
        <div className="flex flex-col lg:pt-10 pt-24 md:pt-24 lg:pt-36 2xl:pt-56 pb-58 md:pb-56 lg:pb-64 justify-start space-y-4 px-4 md:px-0 md:pl-[40px] 2xl:pl-[170px]">
          <h1 className="2xl:max-w-2xl lg:max-w-[38rem] md:max-w-lg text-[32px] sm:text-[40px] md:text-[44px] lg:text-[64px] font-inter text-white font-[800] tracking-tight leading-[1.2]">
            {title}
          </h1>
          <p className="text-[20px] text-[#C2C6CE] max-w-[43rem]">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
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

        {/* Mobile Image */}
        <div className="px-4 md:px-0 flex justify-end items-end lg:hidden">
          <img
            src={imageSrc || "/Heroimage.svg"}
            alt={imageAlt}
            className="2xl:w-[60vw] object-contain"
            loading="eager"
          />
        </div>

        {/* Desktop Image */}
        <div className="px-4 md:px-0 hidden lg:flex lg:justify-end lg:items-end relative">
          <div className="z-40 w-[600px] h-[50%] bottom-0 lg:absolute -right-48 origin-center">
            <img
              src="/images/hero-2.png"
              alt="hero-2"
              className="object-contain w-full h-full"
              loading="eager"
            />
          </div>

          <div className="z-20 lg:absolute -left-2 bottom-72">
            <img
              src="/images/hero-3.png"
              alt="hero-3"
              className="2xl:w-[60vw] object-contain"
              loading="eager"
            />
          </div>

          <div className="w-[600px] h-[60%] object-contain lg:absolute bottom-0 right-0">
            <img
              src="/images/blue-1.png"
              alt="blue-1"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;