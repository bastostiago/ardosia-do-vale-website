"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: "/quem_somos_principal-1038x460.jpg",
      path: "",
    },
    {
      image: "/pedra_ardosia-1038x460.jpg",
      path: "",
    },
    {
      image: "/trombudo_central1-1038x460.jpg",
      path: "",
    },
    {
      image: "/produtos-1038x460.jpg",
      path: "",
    },
  ];

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
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
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
