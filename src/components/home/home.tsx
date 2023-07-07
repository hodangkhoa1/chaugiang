// import useI18n from '@/i18n/useI18N';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Style from './home.module.scss';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Carousel } from 'antd';

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
      <div className={Style.carouselProduct}>
        <div className={Style.productBrandName}>
          <h2>Our Certifications</h2>
          <h2>Our Certifications</h2>
        </div>

        <Carousel
          slidesToShow={4}
          className={Style.certificationCarousel}
          autoplay
        >
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <img src="images/certifications/HALAL.png" alt="" />
            </div>
            <h1>HALAL</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <img src="images/certifications/BSCI.png" alt="" />
            </div>
            <h1>BSCI</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <img src="images/certifications/FDA.png" alt="" />
            </div>
            <h1>FDA</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <img src="images/certifications/FSSC.png" alt="" />
            </div>
            <h1>FSSC22000</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <img src="images/certifications/HALAL.png" alt="" />
            </div>
            <h1>HALAL</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <img src="images/certifications/BSCI.png" alt="" />
            </div>
            <h1>BSCI</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <img src="images/certifications/FDA.png" alt="" />
            </div>
            <h1>FDA</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <img src="images/certifications/FSSC.png" alt="" />
            </div>
            <h1>FSSC22000</h1>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
