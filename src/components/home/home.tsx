// import useI18n from '@/i18n/useI18N';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Style from './home.module.scss';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Carousel, Col, Row, Image } from 'antd';

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
        <div className={`${Style.dflex} ${Style.certificationTopCover}`}>
          <div className={Style.certificationTitle}>
            <h1>Our Certifications</h1>
          </div>
          <div className={Style.certificationLine}></div>
        </div>

        <Carousel
          slidesToShow={4}
          className={Style.certificationCarousel}
          autoplay
        >
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <Image
                src="/images/certifications/HALAL.png"
                alt="logo"
                width={300}
                height={430}
                className={Style.certificationCardImg}
              />
            </div>
            <h1>HALAL</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <Image
                src="/images/certifications/BSCI.png"
                alt="logo"
                width={300}
                height={430}
                className={Style.certificationCardImg}
              />
            </div>
            <h1>BSCI</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <Image
                src="/images/certifications/FDA.png"
                alt="logo"
                width={300}
                height={430}
                className={Style.certificationCardImg}
              />
            </div>
            <h1>FDA</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <Image
                src="/images/certifications/FSSC.png"
                alt="logo"
                width={300}
                height={430}
                className={Style.certificationCardImg}
              />
            </div>
            <h1>FSSC22000</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <Image
                src="/images/certifications/SMETA.jpg"
                alt="logo"
                width={300}
                height={430}
                className={Style.certificationCardImg}
              />
            </div>
            <h1>SMETA</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <Image
                src="/images/certifications/BSCI.png"
                alt="logo"
                width={300}
                height={430}
                className={Style.certificationCardImg}
              />
              {/* <img src="images/certifications/BSCI.png" alt="" /> */}
            </div>
            <h1>BSCI</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <Image
                src="/images/certifications/FDA.png"
                alt="logo"
                width={300}
                height={430}
                className={Style.certificationCardImg}
              />
              {/* <img src="images/certifications/FDA.png" alt="" /> */}
            </div>
            <h1>FDA</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <Image
                src="/images/certifications/FSSC.png"
                alt="logo"
                width={300}
                height={430}
                className={Style.certificationCardImg}
              />
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

      <div className={Style.helloSummer}></div>

      <div className={Style.carouselProductBackground}>
        <div className={`${Style.dflex} ${Style.productTopCover}`}>
          <div className={Style.productTitle}>
            <h1>Product</h1>
          </div>
          <div className={Style.productLine}></div>
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

      <div className={Style.orderNowBackground}></div>

      <div className={Style.bestSelling}>
        <div className={Style.bestSellingTop}>
          <div className={Style.bestSellingTop__left}>
            <div className={Style.left__cover}>
              <div className={Style.images}>
                <img src="images/best_selling/nho-xanh.png" alt="" />
              </div>
              <div className={Style.coverTitle}>
                <div className={Style.title}>
                  <h2>best selling</h2>
                </div>
                <div className={Style.line}></div>
              </div>
            </div>
          </div>

          <div className={Style.bestSellingTop__right}>
            <div className={Style.right__cover}>
              <div className={Style.menuTop}>
                <div className={Style.itemLink}>
                  <a href="">brown rice</a>
                </div>

                <div className={Style.itemLink}>
                  <a href="">oats</a>
                </div>

                <div className={Style.itemLink}>
                  <a href="">cononut</a>
                </div>

                <div className={Style.itemLink}>
                  <a href="">sparkling coconut</a>
                </div>
              </div>

              <div className={Style.menuBottom}>
                <div className={Style.itemLink}>
                  <a href="">tamarind</a>
                </div>

                <div className={Style.itemLink}>
                  <a href="">mango</a>
                </div>

                <div className={Style.itemLink}>
                  <a href="">bottle of aloe vera</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.bestSellingBottom}>
          <Row
            gutter={100}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Col lg={6} span={24}>
              <div className={Style.bestSellingBottom__left}>
                <div className={Style.images}>
                  <img src="images/best_selling/nuoc-dua.jpg" alt="" />
                </div>
              </div>
            </Col>

            <Col lg={18} span={24}>
              <div className={Style.bestSellingBottom__right}>
                <div className={Style.carousel}>
                  <Carousel
                    slidesToShow={4}
                    className={Style.bestSellingCarousel}
                    autoplay
                  >
                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img src="images/best_selling/13.png" alt="" />
                      </div>
                      <h1>Bird&apos;s Nest Water</h1>
                      <h4>330ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img src="images/best_selling/15.png" alt="" />
                      </div>
                      <h1>Brown Rice Milk</h1>
                      <h4>250ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img
                          src="images/best_selling/coconut pine.png"
                          alt=""
                        />
                      </div>
                      <h1>Coconut Water With Mango</h1>
                      <h4>330ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img src="images/best_selling/tamSenTra.png" alt="" />
                      </div>
                      <h1>Lotus Hert Tea</h1>
                      <h4>250ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img src="images/best_selling/13.png" alt="" />
                      </div>
                      <h1>Bird&apos;s Nest Water</h1>
                      <h4>330ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img src="images/best_selling/15.png" alt="" />
                      </div>
                      <h1>Brown Rice Milk</h1>
                      <h4>250ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img
                          src="images/best_selling/coconut pine.png"
                          alt=""
                        />
                      </div>
                      <h1>Coconut Water With Mango</h1>
                      <h4>330ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img src="images/best_selling/tamSenTra.png" alt="" />
                      </div>
                      <h1>Lotus Hert Tea</h1>
                      <h4>250ml</h4>
                    </div>
                  </Carousel>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className={Style.freshSummerDay}></div>

      <div className={`${Style.bestSelling} ${Style.newProduct}`}>
        <div className={Style.bestSellingTop}>
          <div className={Style.bestSellingTop__left}>
            <div className={Style.left__cover}>
              <div className={Style.images}>
                <img src="images/new_product/nho-xanh.png" alt="" />
              </div>
              <div className={Style.coverTitle}>
                <div className={Style.title}>
                  <h2>new product</h2>
                </div>
                <div className={Style.line}></div>
              </div>
            </div>
          </div>

          <div className={Style.bestSellingTop__right}>
            <div className={Style.right__cover}>
              <div className={Style.menuTop}>
                <div className={Style.itemLink}>
                  <a href="">sparkling watermelon</a>
                </div>

                <div className={Style.itemLink}>
                  <a href="">sparkling fragrant coconut</a>
                </div>

                <div className={Style.itemLink}>
                  <a href="">black coffee</a>
                </div>
              </div>

              <div className={Style.menuBottom}>
                <div className={Style.itemLink}>
                  <a href="">cappuccino</a>
                </div>

                <div className={Style.itemLink}>
                  <a href="">custard apple</a>
                </div>

                <div className={Style.itemLink}>
                  <a href="">peach tea</a>
                </div>

                <div className={Style.itemLink}>
                  <a href="">lemon tea</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.bestSellingBottom}>
          <Row
            gutter={100}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Col lg={6} span={24}>
              <div className={Style.bestSellingBottom__left}>
                <div className={Style.images}>
                  <img src="images/new_product/newProduct.jpg" alt="" />
                </div>
              </div>
            </Col>

            <Col lg={18} span={24}>
              <div className={Style.bestSellingBottom__right}>
                <div className={Style.carousel}>
                  <Carousel
                    slidesToShow={4}
                    className={Style.bestSellingCarousel}
                    autoplay
                  >
                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img
                          src="images/new_product/cafe ORIGINAL.png"
                          alt=""
                        />
                      </div>
                      <h1>coffee original</h1>
                      <h4>330ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img src="images/new_product/cafeMocha.png" alt="" />
                      </div>
                      <h1>coffee mocha</h1>
                      <h4>250ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img src="images/new_product/19.png" alt="" />
                      </div>
                      <h1>energy drink 109</h1>
                      <h4>250ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img src="images/new_product/20.png" alt="" />
                      </div>
                      <h1>strawberry flavor 109</h1>
                      <h4>250ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img
                          src="images/new_product/cafe ORIGINAL.png"
                          alt=""
                        />
                      </div>
                      <h1>coffee original</h1>
                      <h4>330ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img src="images/new_product/cafeMocha.png" alt="" />
                      </div>
                      <h1>coffee mocha</h1>
                      <h4>250ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img src="images/new_product/19.png" alt="" />
                      </div>
                      <h1>energy drink 109</h1>
                      <h4>250ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img src="images/new_product/20.png" alt="" />
                      </div>
                      <h1>strawberry flavor 109</h1>
                      <h4>250ml</h4>
                    </div>
                  </Carousel>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className={Style.juiceGuava}></div>

      <div className={`${Style.bestSelling} ${Style.featuredProduct}`}>
        <div className={Style.bestSellingTop}>
          <div className={Style.bestSellingTop__left}>
            <div className={Style.left__cover}>
              <div className={Style.images}>
                <img src="images/featured_product/nho-xanh.png" alt="" />
              </div>
              <div className={Style.coverTitle}>
                <div className={Style.title}>
                  <h2>featured product</h2>
                </div>
                <div className={Style.line}></div>
              </div>
            </div>
          </div>

          <div className={Style.bestSellingTop__right}>
            <div className={Style.right__cover}>
              <div className={Style.menuTop}>
                <div className={Style.itemLink}>
                  <a href="">brown rice milk</a>
                </div>

                <div className={Style.itemLink}>
                  <a href="">soy milk</a>
                </div>

                <div className={Style.itemLink}>
                  <a href="">mung bean milk</a>
                </div>

                <div className={Style.itemLink}>
                  <a href="">corn milk</a>
                </div>
              </div>

              <div className={Style.menuBottom}>
                <div className={Style.itemLink}>
                  <a href="">Bird&apos;s Nest</a>
                </div>

                <div className={Style.itemLink}>
                  <a href="">stir-fried Bird&apos;s Nest</a>
                </div>

                <div className={Style.itemLink}>
                  <a href="">aloe vera Bird&apos;s Nest</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.bestSellingBottom}>
          <Row
            gutter={100}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Col lg={6} span={24}>
              <div className={Style.bestSellingBottom__left}>
                <div className={Style.images}>
                  <img
                    src="images/featured_product/featureProduct.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Col>

            <Col lg={18} span={24}>
              <div className={Style.bestSellingBottom__right}>
                <div className={Style.carousel}>
                  <Carousel
                    slidesToShow={4}
                    className={Style.bestSellingCarousel}
                    autoplay
                  >
                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img
                          src="images/featured_product/mixed 330 short can.png"
                          alt=""
                        />
                      </div>
                      <h1>mixed juice drink</h1>
                      <h4>330ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img src="images/featured_product/15.png" alt="" />
                      </div>
                      <h1>brown rice milk</h1>
                      <h4>250ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img
                          src="images/featured_product/coconut mango 1.png"
                          alt=""
                        />
                      </div>
                      <h1>Coconut Water With Mango</h1>
                      <h4>330ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img
                          src="images/featured_product/energy_250 slin can.png"
                          alt=""
                        />
                      </div>
                      <h1>energy drink</h1>
                      <h4>250ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img
                          src="images/featured_product/mixed 330 short can.png"
                          alt=""
                        />
                      </div>
                      <h1>mixed juice drink</h1>
                      <h4>330ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img src="images/featured_product/15.png" alt="" />
                      </div>
                      <h1>brown rice milk</h1>
                      <h4>250ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img
                          src="images/featured_product/coconut mango 1.png"
                          alt=""
                        />
                      </div>
                      <h1>Coconut Water With Mango</h1>
                      <h4>330ml</h4>
                    </div>

                    <div className={Style.bestSellingCard}>
                      <div className={Style.bestSellingCardImage}>
                        <img
                          src="images/featured_product/energy_250 slin can.png"
                          alt=""
                        />
                      </div>
                      <h1>energy drink</h1>
                      <h4>250ml</h4>
                    </div>
                  </Carousel>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div>
        <iframe
          width="100%"
          height="770px"
          src="https://www.youtube.com/embed/vyqrV-t0sPc?autoplay=1&controls=0&rel=0&mute=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className={Style.brands}>
        <Row gutter={100}>
          <Col lg={8} span={24} className={Style.dflex}>
            <div className={Style.brandImage}>
              <img src="images/brand/12.png" alt="" />
            </div>
          </Col>

          <Col lg={8} span={24} className={Style.dflex}>
            <div className={Style.brandImage}>
              <img src="images/brand/13.png" alt="" />
            </div>
          </Col>

          <Col lg={8} span={24} className={Style.dflex}>
            <div className={Style.brandImage}>
              <img src="images/brand/14.png" alt="" />
            </div>
          </Col>
        </Row>
      </div>

      <div className={Style.news}>
        <div className={Style.newsCover}>
          <div className={Style.newsTop}>
            <div className={`${Style.dflex} ${Style.newsTopCover}`}>
              <div className={`${Style.dflex} ${Style.newsTitle}`}>
                <h1>News and event</h1>
              </div>
              <div className={Style.newsLine}></div>
            </div>
          </div>

          <div className={Style.newsBottomCover}>
            <Row gutter={80}>
              <Col lg={8} span={24} className={`${Style.dflex}`}>
                <div className={`${Style.dflex} ${Style.newsItem}`}>
                  <div className={Style.imageTop}>
                    <img
                      src="images/news/introduce_leadership_group.png"
                      alt=""
                    />
                  </div>
                  <div className={Style.contentCover}>
                    <div className={Style.content}>
                      <div className={Style.contentTitle}>
                        <h2>
                          a sweet meeting and a new energetic week with king
                          coffee
                        </h2>
                      </div>

                      <div className={Style.contentBottom}>
                        <p>Thanh Trang Ecom 22</p>
                        <p>Moday 22/05/2022</p>
                        <p className={Style.contentBottomUp}>
                          Thanks for visting Chau Giang Food Prcessing trade CO,
                          LTD
                        </p>
                        <p>
                          Thanks for visting Chau Giang Food Prcessing trade CO,
                          LTD
                        </p>
                      </div>
                    </div>

                    <div className={Style.btn_see_more}>
                      <button className={`${Style.dflex}`}>
                        <p>See More</p>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={8} span={24} className={`${Style.dflex}`}>
                <div className={`${Style.dflex} ${Style.newsItem}`}>
                  <div className={Style.imageTop}>
                    <img
                      src="images/news/introduce_leadership_group.png"
                      alt=""
                    />
                  </div>
                  <div className={Style.contentCover}>
                    <div className={Style.content}>
                      <div className={Style.contentTitle}>
                        <h2>
                          a sweet meeting and a new energetic week with king
                          coffee
                        </h2>
                      </div>

                      <div className={Style.contentBottom}>
                        <p>Thanh Trang Ecom 22</p>
                        <p>Moday 22/05/2022</p>
                        <p className={Style.contentBottomUp}>
                          Thanks for visting Chau Giang Food Prcessing trade CO,
                          LTD
                        </p>
                        <p>
                          Thanks for visting Chau Giang Food Prcessing trade CO,
                          LTD
                        </p>
                      </div>
                    </div>

                    <div className={Style.btn_see_more}>
                      <button className={`${Style.dflex}`}>
                        <p>See More</p>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={8} span={24} className={`${Style.dflex}`}>
                <div className={`${Style.dflex} ${Style.newsItem}`}>
                  <div className={Style.imageTop}>
                    <img
                      src="images/news/introduce_leadership_group.png"
                      alt=""
                    />
                  </div>
                  <div className={Style.contentCover}>
                    <div className={Style.content}>
                      <div className={Style.contentTitle}>
                        <h2>
                          a sweet meeting and a new energetic week with king
                          coffee
                        </h2>
                      </div>

                      <div className={Style.contentBottom}>
                        <p>Thanh Trang Ecom 22</p>
                        <p>Moday 22/05/2022</p>
                        <p className={Style.contentBottomUp}>
                          Thanks for visting Chau Giang Food Prcessing trade CO,
                          LTD
                        </p>
                        <p>
                          Thanks for visting Chau Giang Food Prcessing trade CO,
                          LTD
                        </p>
                      </div>
                    </div>

                    <div className={Style.btn_see_more}>
                      <button className={`${Style.dflex}`}>
                        <p>See More</p>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className={`${Style.whyChooseUs} ${Style.aboutUs}`}>
        <div className={`${Style.aboutUsCover} ${Style.whyChooseUsCover}`}>
          <div className={Style.aboutUsTop}>
            <div className={`${Style.dflex} ${Style.whyChooseUsTopCover}`}>
              <div className={`${Style.dflex} ${Style.whyChooseUsTitle}`}>
                <h1>Why choose Us?</h1>
              </div>

              <div
                className={`${Style.lineWhyChooseUs} ${Style.whyChooseUsLine}`}
              ></div>
            </div>
          </div>

          <div className={`${Style.aboutUsBottom}`}>
            <Row
              gutter={100}
              style={{ marginLeft: 'unset', marginRight: 'unset' }}
            >
              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/why_choose_us/Untitled-28.png" alt="" />
                  </div>
                  <h2>Hight Quality</h2>
                  <p>
                    Product quality is always developed by CG Food to meet
                    national and international requirements. We are certain that
                    our products will have a natural flavor, be highly
                    nutritious, and follow the latest trends in the market.
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/why_choose_us/Untitled-29.png" alt="" />
                  </div>
                  <h2>Fast Delivery</h2>
                  <p>
                    In order to ensure the leading time in accordance with
                    client requests, CG Food has a sizable packing and labeling
                    area. We also have a skilled logistic crew on hand to assist
                    you whenever you need it.
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
                    We consistently satisfy the demands for product packaging
                    from clients across the global market by combining modernism
                    and experience. Our employees are trained to catch up with
                    recent trends of packing specification.
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
                    Because their satisfaction makes us happy, we only deliver
                    the best products to our consumers. In order for the model
                    to rapidly reach clients, we always select the best shipping
                    services.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className={Style.customerImformation}>
        <div className={Style.customerImformationCover}>
          <div className={Style.customerImformationTop}>
            <div
              className={`${Style.dflex} ${Style.customerImformationTopCover}`}
            >
              <div
                className={`${Style.dflex} ${Style.customerImformationTitle}`}
              >
                <h1>Customer Information</h1>
              </div>

              <div className={Style.customerImformationLine}></div>
            </div>
          </div>
          <div className={Style.customerImformationCenter}>
            <p>
              Please provide the information below to receive our free
              consultation service package
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
