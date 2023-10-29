"use client";
import Image from "next/image";
import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weights: [400, 700],
});

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

export default function Projects() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    // Update window width on component mount
    setWindowWidth(window.innerWidth);

    // Update window width on window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section id="projects" className="px-4 py-10 md:py-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-orange-400 text-lg text-center font-medium">
          OUR WORKS
        </h3>
        <h1
          className={`${saira.className} text-3xl md:text-4xl text-center font-medium mt-2`}
        >
          LATEST PROJECTS
        </h1>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={windowWidth <= 600 ? 1 : windowWidth < 900 ? 2 : 3}
          className="mt-12 w-full"
        >
          <SwiperSlide className="w-full aspect-[3/4]">
            <Image
              src={"/project1.webp"}
              alt=""
              width={2152}
              height={1435}
              className="w-full aspect-[3/4] h-full object-cover brightness-90"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/project2.webp"}
              alt=""
              width={2152}
              height={1435}
              className="w-full aspect-[3/4] h-auto object-cover brightness-90"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/project3.webp"}
              alt=""
              width={2152}
              height={1435}
              className="w-full aspect-[3/4] h-auto object-cover brightness-90"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/project4.webp"}
              alt=""
              width={2152}
              height={1435}
              className="w-full aspect-[3/4] h-auto object-cover brightness-90"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
