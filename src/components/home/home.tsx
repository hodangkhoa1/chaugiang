// import useI18n from '@/i18n/useI18N';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Style from './home.module.scss';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button, Carousel, Col, Row } from 'antd';

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
          <img src="images/slider_header/slider_background.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <img src="images/slider_header/slider_background.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <img src="images/slider_header/slider_background.png" alt="" />
        </SwiperSlide>
      </Swiper>

      <div className={Style.carouselCertificationBackground}>
        <div className={Style.productBrandName}>
          <h1>Our Certifications</h1>
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

      <div className={Style.aboutUs}>
        <div className={Style.aboutUsCover}>
          <div className={Style.aboutUsTop}>
            <div className={`${Style.dflex} ${Style.aboutUsTopCover}`}>
              <div className={`${Style.aboutUsPicture} ${Style.dflex}`}>
                <img src="images/about_us/nho.png" alt="" />
              </div>

              <div className={`${Style.dflex} ${Style.aboutUsTitle}`}>
                <h1>About Us</h1>
              </div>

              <div className={`${Style.dflex} ${Style.aboutUsPicture}`}>
                <img src="images/about_us/thom.png" alt="" />
              </div>

              <div className={Style.line}></div>
            </div>
          </div>

          <div className={Style.aboutUsCenter}>
            <h2>Suppliers, manufacturers top Beverages and Beverages</h2>
            <p>
              Established in 1990, Chau Giang Food Processing Trade Company,
              with more than 33 years of experience, is currently an industry
              leader in the beverage processing industry by extending its
              cutting-edge production line system and fostering its expansion
              into international markets, while continuously providing the
              highest level of customer service to meet product quality and
              demand.
            </p>
          </div>

          <div className={`${Style.aboutUsBottom}`}>
            <Row gutter={100}>
              <Col lg={8} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/about_us/our_family.png" alt="" />
                  </div>
                  <h2>Our family</h2>
                </div>
              </Col>
              <Col lg={8} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/about_us/our_products.png" alt="" />
                  </div>
                  <h2>Our products</h2>
                </div>
              </Col>
              <Col lg={8} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/about_us/our_factory.png" alt="" />
                  </div>
                  <h2>Our factory</h2>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className={Style.helloSummer}>
        <div className={Style.helloSummerCover}>
          <Button className={Style.btnChooseToBuy} htmlType="button">
            Choose to buy
          </Button>
        </div>
      </div>

      <div className={Style.carouselProductBackground}>
        <div className={Style.productTitle}>
          <h1>Product</h1>
        </div>

        <Carousel slidesToShow={4} className={Style.productCarousel} autoplay>
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
            <h1>Mixed Juice Drink</h1>
            <h4>330ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="images/products/rown_rice_milk.png" alt="" />
            </div>
            <h1>Brown Rice Milk</h1>
            <h4>250ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="images/products/coconut_mango.png" alt="" />
            </div>
            <h1>Coconut Water With Mango</h1>
            <h4>330ml</h4>
          </div>
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
            <h1>Mixed Juice Drink</h1>
            <h4>330ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="images/products/rown_rice_milk.png" alt="" />
            </div>
            <h1>Brown Rice Milk</h1>
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

      <div className={`${Style.whyChooseUs} ${Style.aboutUs}`}>
        <div className={`${Style.aboutUsCover} ${Style.whyChooseUsCover}`}>
          <div className={Style.aboutUsTop}>
            <div className={`${Style.dflex} ${Style.aboutUsTopCover}`}>
              <div className={`${Style.dflex} ${Style.aboutUsTitle}`}>
                <h1>Why choose Us</h1>
              </div>

              <div className={`${Style.lineWhyChooseUs} ${Style.line}`}></div>
            </div>
          </div>

          <div className={`${Style.aboutUsBottom}`}>
            <Row gutter={100}>
              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/why_choose_us/Untitled-28.png" alt="" />
                  </div>
                  <h2>Hight Quality</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Mollitia corrupti ex nisi sed modi ullam saepe, cum totam!
                    Iure fugit distinctio pariatur quae quia facere dicta ipsa
                    quas saepe alias?
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/why_choose_us/Untitled-29.png" alt="" />
                  </div>
                  <h2>Fast Delevery</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Mollitia corrupti ex nisi sed modi ullam saepe, cum totam!
                    Iure fugit distinctio pariatur quae quia facere dicta ipsa
                    quas saepe alias?
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/why_choose_us/Untitled-30.png" alt="" />
                  </div>
                  <h2>Flexible Packaging</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Mollitia corrupti ex nisi sed modi ullam saepe, cum totam!
                    Iure fugit distinctio pariatur quae quia facere dicta ipsa
                    quas saepe alias?
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/why_choose_us/Untitled-31.png" alt="" />
                  </div>
                  <h2>Free Sample</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Mollitia corrupti ex nisi sed modi ullam saepe, cum totam!
                    Iure fugit distinctio pariatur quae quia facere dicta ipsa
                    quas saepe alias?
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
