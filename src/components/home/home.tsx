// import useI18n from '@/i18n/useI18N';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Style from './home.module.scss';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HomePage() {
  // const { translate: translateHome } = useI18n('common');

  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className={Style.swiperSlide}>
          <img
            src="https://chaugiangfood.com/wp-content/uploads/2022/07/slide-2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <img
            src="https://chaugiangfood.com/wp-content/uploads/2022/07/slide-2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <img
            src="https://chaugiangfood.com/wp-content/uploads/2022/07/slide-2.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
