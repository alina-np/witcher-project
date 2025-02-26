import { useRef } from "react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "./Swiper.scss";

interface SwiperProps {
  children: React.ReactNode;
}

export function SwiperCustom({ children }: SwiperProps) {
  const swiperRef = useRef(null);
  return (
    <Swiper
      navigation={true}
      pagination={{
        el: ".pagination",
        type: "progressbar",
      }}
      modules={[Pagination, Navigation]}
      ref={swiperRef}
      spaceBetween={24}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1250: {
          slidesPerView: 4,
        },
      }}
    >
      <div className="pagination" />
      {children}
    </Swiper>
  );
}
