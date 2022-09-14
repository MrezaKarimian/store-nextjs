import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import HeaderCard from "../index/HeaderCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        // navigation
        loop
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <HeaderCard />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
