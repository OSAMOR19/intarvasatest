"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
    
    const title = "Smart Telecom Solutions for Modern Businesses"
    const subtitle = "Special Numbers, Call Centres, Bulk Messaging & Digital Solutions all tailored for modern Nigerian brands.";
    const primaryButtonText = "Request Demo";
    const secondaryButtonText = "Explore Services";
    const imageSrc = '/images/herosectionbg.svg';
    const imageAlt = "Telecom analytics and smartphone dashboard";
    const onPrimaryClick = () => {
        console.log('Demo clicked');
    }
    const onSecondaryClick = () => {
        console.log('Explore clicked');
    }

    return (
        <section className="lg:max-h-screen pt-18 lg:pt-16 overflow-hidden relative" style={{
                backgroundImage: "url(/images/herosectionbg.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="2xl:container flex justify-between flex-col lg:flex-row gap-6 lg:gap-0 min-h-screen pt-12 md:py-0 xl:pt-16">
                {/* Content */}
                <div className="flex flex-col lg:pt-10 pt-24 md:pt-24 lg:pt-36 2xl:pt-56 pb-58 md:pb-56 lg:pb-64 justify-start space-y-4 px-4 md:px-0 md:pl-[40px] 2xl:pl-[170px] pb-8">
                    <h1 className="font-inter font-extrabold text-6xl text-white leading-[1.3] tracking-[0.3px] align-middle max-w-[90vw] sm:max-w-[600px] md:max-w-[600px] lg:max-w-[600px] xl:max-w-[628px]">
                        {title}
                    </h1>
                    <h1 className="font-inter text-[#C2C6CE] font-[400] text-[18px] md:leading-2 leading-8 tracking-[0.2px] align-left sm:w-5/6 w-full">
                        {subtitle}
                    </h1>
                    <div className="flex sm:flex-row gap-3 pt-3 sm:pt-6">
                        <Link href="/about#services-showcase-section">
                            <Button variant="outline" size="default" onClick={onSecondaryClick}className="bg-white text-[#001933] border-[#001933] hover:bg-gray-50 w-full sm:w-auto sm:px-6">
                                {secondaryButtonText}
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="hero" size="default" onClick={onPrimaryClick} className="w-full sm:w-auto sm:px-6">
                                {primaryButtonText}
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex">
                    <img
                        src={"/hero/hero-illustration-1.png"}
                        alt={"test"}
                        className="object-contain"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
