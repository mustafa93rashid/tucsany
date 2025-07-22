"use client";

import React, { useEffect, useState } from "react";
import Title from "./Title";

interface CarouselProps {
  defaultItemsToShow?: number;
  children: React.ReactNode[];
  title: string
}

const Carousel: React.FC<CarouselProps> = ({ defaultItemsToShow = 4, children, title }) => {
  const [itemsToShow, setItemsToShow] = useState(defaultItemsToShow);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = children.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setItemsToShow(1);
      } else {
        setItemsToShow(defaultItemsToShow);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [defaultItemsToShow]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, totalItems - itemsToShow)
    );
  };

  return (
    <div className="w-full">

      <div className="flex justify-between  ">
        <Title title={title} />

        <div className="flex justify-between gap-5 ">
          <button onClick={handlePrev} disabled={currentIndex === 0}
            className="bg-[#EFEFEF] p-3 w-[50px] h-[50px] flex items-center justify-center rounded-full 
               disabled:opacity-50 cursor-pointer transition-all duration-300 
               hover:scale-105 hover:shadow-md"
          >
            <img src="/images/pagination/backward.svg" alt="Prev"  />
          </button>
          <button onClick={handleNext} disabled={currentIndex >= totalItems - itemsToShow}
            className="bg-orange p-3 w-[50px] h-[50px] flex items-center justify-center rounded-full 
               disabled:opacity-50 cursor-pointer transition-all duration-300 
               hover:scale-105 hover:shadow-md"
          >
            <img src="/images/pagination/forward.svg" alt="Next"  />
          </button>
        </div>
      </div>

      <div className="flex gap-[33px] transition-all duration-500 ease-in-out overflow-hidden">
        {children.slice(currentIndex, currentIndex + itemsToShow)}
      </div>
    </div>
  );
};

export default Carousel;
