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
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
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
      <div className={Style.carouselCertificationBackground}>
        <div className={Style.productBrandName}>
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
      {/* <div className="aboutUs">
        <div className="aboutUsContent">
          <img src="" alt="" />
          <h1 className="aboutUsTitle">About Us</h1>
        </div>
      </div> */}
      <div className={Style.carouselProductBackground}>
        <div className={Style.productTitle}>
          <h2>Product</h2>
        </div>

        <Carousel
          slidesToShow={4}
          className={Style.productCarousel}
          autoplay
          arrows={true}
        >
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="images/products/tamarind_330_short_can.png" alt="" />
            </div>
            <h1>Tamarind Juice</h1>
            <h4>330ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="images/products/mixed_330_short_can.png" alt="" />
            </div>
            <h1>Mixed Juice Drind</h1>
            <h4>330ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="images/products/rown_rice_milk.png" alt="" />
            </div>
            <h1>Rown Rice Milk</h1>
            <h4>250ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="images/products/coconut_mango.png" alt="" />
            </div>
            <h1>Coconut Water With Mango</h1>
            <h4>330ml</h4>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
