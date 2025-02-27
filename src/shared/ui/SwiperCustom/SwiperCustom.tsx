import React, { useRef, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import "swiper/scss";
import "./Swiper.scss";

interface SwiperProps {
  children: React.ReactNode;
  swiperOptions?: SwiperOptions;
}

export function SwiperCustom({ children, swiperOptions }: SwiperProps) {
  const swiperRef = useRef(null);

  const defaultSwiperOptions: SwiperOptions = {
    modules: [Pagination, Navigation],
    spaceBetween: 24,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      el: ".pagination",
      type: "progressbar",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.7,
      },
      768: {
        slidesPerView: 2.4,
      },
      1024: {
        slidesPerView: 3,
      },
      1250: {
        slidesPerView: 4,
      },
    },
  };

  const combinedSwiperOptions: SwiperOptions = {
    ...defaultSwiperOptions,
    ...swiperOptions,
  };

  return (
    <Swiper {...combinedSwiperOptions} ref={swiperRef}>
      <div className="pagination" />
      {children}
    </Swiper>
  );
}
