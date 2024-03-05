"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Philosopher } from "next/font/google";
import Link from "next/link";
import { Slide } from "@/models/website";

const philosopher = Philosopher({ weight: "400", subsets: ["latin"] });

interface CarouselProps {
  slides: Slide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 10000); // 10000 ms = 10 segundos

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
      setIsTransitioning(false);
    }, 300); // Duração da transição de opacidade
  };

  const goToPreviousSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setIsTransitioning(false);
    }, 300); // Duração da transição de opacidade
  };

  return (
    <div className="carousel w-full overflow-hidden relative">
      <Link href={slides[currentSlide].path} className="w-full">
        <div
          id="slide"
          className={`carousel-item w-full transition-opacity duration-500 ${
            !isTransitioning ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            alt=""
            src={slides[currentSlide].image}
            className="w-full"
            width={1500}
            height={1500}
          />
          <div className="hidden lg:flex absolute justify-end transform bottom-4 left-5 right-20 top-1/2 ">
            <div className="flex flex-col items-end">
              <div className="flex bg-[#e58b00] w-60 h-14 items-center justify-center text-white text-2xl">
                <div className={philosopher.className}>
                  {slides[currentSlide].title}
                </div>
              </div>
              <div className="flex bg-gray-700 opacity-80 w-96 h-36 items-center justify-center text-white text-sm mt-1 p-6">
                {slides[currentSlide].text}
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="hidden md:flex absolute justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button className="btn btn-circle" onClick={() => goToPreviousSlide()}>
          ❮
        </button>
        <button className="btn btn-circle" onClick={() => goToNextSlide()}>
          ❯
        </button>
      </div>
    </div>
  );
}
