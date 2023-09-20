import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Style from './home.module.scss';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Carousel, Col, Row, Image } from 'antd';
import Link from 'next/link';
import { ROUTERS } from '@/constant/router';
import { HomeProductData } from './interface';
import useI18n from '@/i18n/useI18N';

export default function HomePage() {
  const { translate: translateHome } = useI18n('home');

  const carouselResponsiveSettings = [
    {
      breakpoint: 1258,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 876,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: '#00894f',
          fontSize: '16px',
          background: '#8dc63f',
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          marginRight: '10px',
          marginTop: '-60px',
        }}
        onClick={onClick}
      >
        <RightOutlined />
      </div>
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          color: '#00894f',
          fontSize: '16px',
          background: '#8dc63f',
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          marginLeft: '10px',
          marginTop: '-60px',
        }}
        onClick={onClick}
      >
        <LeftOutlined />
      </div>
    );
  };

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [bestSellingData, setBestSellingData] = useState<HomeProductData[]>();
  const [newProductData, setNewProductData] = useState<HomeProductData[]>();
  const [featureProductData, setFeatureProductData] =
    useState<HomeProductData[]>();

  useEffect(() => {
    import('../../data/bestSelling.json')
      .then((response) => {
        const data: HomeProductData[] = response.default;
        setBestSellingData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    import('../../data/newProduct.json')
      .then((response) => {
        const data: HomeProductData[] = response.default;
        setNewProductData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    import('../../data/featureProduct.json')
      .then((response) => {
        const data: HomeProductData[] = response.default;
        setFeatureProductData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="animate__animated animate__slideInLeft animate__delay-2s mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{ animationDelay: `1s` }}
      >
        <SwiperSlide className={Style.swiperSlide}>
          <img src="./images/slider_header/slider_background_1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <img src="./images/slider_header/slider_background_2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className={Style.swiperSlide}>
          <img src="./images/slider_header/slider_background_3.png" alt="" />
        </SwiperSlide>
      </Swiper>

      <div
        className={`${Style.carouselCertificationBackground}`}
        data-wow-offset="10"
      >
        <div className={`${Style.dflex} ${Style.certificationTopCover}`}>
          <div className={Style.certificationTitle}>
            <h1>{translateHome('ourCertifications')}</h1>
          </div>
        </div>

        <Carousel
          slidesToShow={4}
          className={Style.certificationCarousel}
          autoplay
          arrows
          {...settings}
          responsive={carouselResponsiveSettings}
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
          <Row>
            <Col lg={8} span={24} className={Style.hideAboutUsPicture}>
              <div
                className={`${Style.aboutUsPicture} ${Style.dflex}`}
                style={{ justifyContent: 'end' }}
              >
                <img src="images/about_us/nho.png" alt="" />
              </div>
            </Col>
            <Col lg={8} span={24} className={`${Style.dflex}`}>
              <div className={`${Style.aboutUsTitle}`}>
                <h1>{translateHome('aboutUs')}</h1>
              </div>
            </Col>
            <Col lg={8} span={24} className={Style.hideAboutUsPicture}>
              <div
                className={`${Style.aboutUsPicture} ${Style.dflex}`}
                style={{ justifyContent: 'start' }}
              >
                <img src="images/about_us/thom.png" alt="" />
              </div>
            </Col>
          </Row>

          <Row gutter={100}>
            <Col
              lg={24}
              span={24}
              style={{ paddingLeft: 'unset', paddingRight: 'unset' }}
            >
              <div className={Style.aboutUsCenter}>
                <h2>{translateHome('aboutUsSuppliers')}</h2>
                <p>{translateHome('aboutUsEstablished')}</p>
              </div>
            </Col>
          </Row>

          <div className={`${Style.aboutUsBottom}`}>
            <Row gutter={100}>
              <Col md={8} lg={8} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/about_us/our_family.png" alt="" />
                  </div>
                  <h2>{translateHome('ourFamily')}</h2>
                </div>
              </Col>
              <Col md={8} lg={8} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/about_us/our_products.png" alt="" />
                  </div>
                  <h2>{translateHome('ourProducts')}</h2>
                </div>
              </Col>
              <Col md={8} lg={8} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/about_us/our_factory.png" alt="" />
                  </div>
                  <h2>{translateHome('ourFactory')}</h2>
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
            <h1>{translateHome('product')}</h1>
          </div>
        </div>

        <Carousel
          arrows
          {...settings}
          slidesToShow={4}
          className={Style.productCarousel}
          autoplay
          responsive={carouselResponsiveSettings}
        >
          <Link
            href={ROUTERS.PRODUCTS_DETAIL('1')}
            className={Style.productCard}
          >
            <div className={Style.productCardImage}>
              <img src="images/products/2.png" alt="" />
            </div>
            <h1>Pure Coconut Water</h1>
            <h4>325ml</h4>
          </Link>
          <Link
            href={ROUTERS.PRODUCTS_DETAIL('2')}
            className={Style.productCard}
          >
            <div className={Style.productCardImage}>
              <img src="images/products/3.png" alt="" />
            </div>
            <h1>Coconut Water 100% Pure</h1>
            <h4>330ml</h4>
          </Link>
          <Link href="" className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="images/products/31.png" alt="" />
            </div>
            <h1>Brown Rice Milk</h1>
            <h4>250ml</h4>
          </Link>
          <Link
            href={ROUTERS.PRODUCTS_DETAIL('7')}
            className={Style.productCard}
          >
            <div className={Style.productCardImage}>
              <img src="images/products/9.png" alt="" />
            </div>
            <h1>Soya Milk</h1>
            <h4>500ml</h4>
          </Link>
          <Link href="" className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="images/products/32.png" alt="" />
            </div>
            <h1>Tamarind Juice</h1>
            <h4>330ml</h4>
          </Link>
          <Link
            href={ROUTERS.PRODUCTS_DETAIL('22')}
            className={Style.productCard}
          >
            <div className={Style.productCardImage}>
              <img src="images/products/28.png" alt="" />
            </div>
            <h1>Energy Drink CG 109</h1>
            <h4>330ml</h4>
          </Link>
          <Link
            href={ROUTERS.PRODUCTS_DETAIL('18')}
            className={Style.productCard}
          >
            <div className={Style.productCardImage}>
              <img src="images/products/23.png" alt="" />
            </div>
            <h1>Coffee Latte</h1>
            <h4>250ml</h4>
          </Link>
          <Link
            href={ROUTERS.PRODUCTS_DETAIL('13')}
            className={Style.productCard}
          >
            <div className={Style.productCardImage}>
              <img src="images/products/17.png" alt="" />
            </div>
            <h1>Aloe Vera 100% Pure</h1>
            <h4>500ml</h4>
          </Link>
        </Carousel>
      </div>

      <div className={Style.orderNowBackground}></div>

      <div className={Style.bestSelling}>
        <Row className={Style.bestSellingTop}>
          <Col md={24} lg={8} span={24}>
            <div className={Style.bestSellingTop__left}>
              <div className={Style.left__cover}>
                <div className={Style.images}>
                  <img src="images/products/nho-xanh.png" alt="" />
                </div>
                <div className={Style.coverTitle}>
                  <div className={Style.title}>
                    <h2>{translateHome('bestSelling')}</h2>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={24} lg={16} span={24}>
            <div className={Style.bestSellingTop__right}>
              <div className={Style.right__cover}>
                <div className={Style.menuTop}>
                  <div className={Style.itemLink}>
                    <Link href={ROUTERS.PRODUCTS_DETAIL('5')}>
                      Brown Rice Milk Drink
                    </Link>
                  </div>

                  <div className={Style.itemLink}>
                    <Link href={ROUTERS.PRODUCTS_DETAIL('25')}>Oat Cereal</Link>
                  </div>

                  <div className={Style.itemLink}>
                    <Link href={ROUTERS.PRODUCTS_DETAIL('1')}>
                      Milk Drink Coconut Water
                    </Link>
                  </div>
                </div>

                <div className={Style.menuBottom}>
                  <div className={Style.itemLink}>
                    <Link href={ROUTERS.PRODUCTS_DETAIL('4')}>
                      Sparkling Coconut Water
                    </Link>
                  </div>

                  <div className={Style.itemLink}>
                    <Link href="">Fruit Juice Drink</Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className={Style.bestSellingBottom}>
          <Row
            gutter={100}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Col md={1} lg={6} span={24}>
              <div className={Style.bestSellingBottom__left}>
                <div className={Style.images}>
                  <img src="images/products/1.jpg" alt="" />
                </div>
              </div>
            </Col>

            <Col md={1} lg={18} span={24}>
              <div className={Style.bestSellingBottom__right}>
                <div className={Style.carousel}>
                  <Carousel
                    slidesToShow={4}
                    className={Style.bestSellingCarousel}
                    autoplay
                    responsive={carouselResponsiveSettings}
                  >
                    {bestSellingData?.map((bestSelling, index) => (
                      <Link
                        href={ROUTERS.PRODUCTS_DETAIL(
                          bestSelling.productDetail
                        )}
                        className={Style.bestSellingCard}
                        key={index}
                      >
                        <div className={Style.bestSellingCardImage}>
                          <img src={bestSelling.image} alt="" />
                        </div>
                        <h1>{bestSelling.name}</h1>
                        <h4>{bestSelling.volume}</h4>
                      </Link>
                    ))}
                  </Carousel>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className={Style.freshSummerDay}></div>

      <div className={`${Style.bestSelling} ${Style.newProduct}`}>
        <Row className={Style.bestSellingTop}>
          <Col md={24} lg={8} span={24}>
            <div className={Style.bestSellingTop__left}>
              <div className={Style.left__cover}>
                <div className={Style.images}>
                  <img src="images/products/nho-xanh.png" alt="" />
                </div>
                <div className={Style.coverTitle}>
                  <div className={Style.title}>
                    <h2 className={Style.newProductTitle}>
                      {translateHome('newProduct')}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={24} lg={16} span={24}>
            <div className={Style.bestSellingTop__right}>
              <div className={Style.right__cover}>
                <div className={Style.menuTop}>
                  <div className={Style.itemLink}>
                    <Link href={ROUTERS.PRODUCTS_DETAIL('13')}>
                      Pet Aloe Vera Drink
                    </Link>
                  </div>

                  <div className={Style.itemLink}>
                    <Link href={ROUTERS.PRODUCTS_DETAIL('9')}>
                      Sparkling Fruit Juice
                    </Link>
                  </div>

                  <div className={Style.itemLink}>
                    <Link href={ROUTERS.PRODUCTS_DETAIL('17')}>Coffee</Link>
                  </div>

                  <div className={Style.itemLink}>
                    <Link href={ROUTERS.PRODUCTS_DETAIL('19')}>Tea</Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className={Style.bestSellingBottom}>
          <Row
            gutter={100}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Col md={1} lg={6} span={24}>
              <div className={Style.bestSellingBottom__left}>
                <div className={Style.images}>
                  <img src="images/new_product/newProduct.jpg" alt="" />
                </div>
              </div>
            </Col>

            <Col md={1} lg={18} span={24}>
              <div className={Style.bestSellingBottom__right}>
                <div className={Style.carousel}>
                  <Carousel
                    slidesToShow={4}
                    className={Style.bestSellingCarousel}
                    autoplay
                    responsive={carouselResponsiveSettings}
                  >
                    {newProductData?.map((newProduct, index) => (
                      <Link
                        href={ROUTERS.PRODUCTS_DETAIL(newProduct.productDetail)}
                        className={Style.bestSellingCard}
                        key={index}
                      >
                        <div className={Style.bestSellingCardImage}>
                          <img src={newProduct.image} alt="" />
                        </div>
                        <h1>{newProduct.name}</h1>
                        <h4>{newProduct.volume}</h4>
                      </Link>
                    ))}
                  </Carousel>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className={Style.juiceGuava}></div>

      <div className={`${Style.bestSelling} ${Style.featuredProduct}`}>
        <Row className={Style.bestSellingTop}>
          <Col md={24} lg={9} span={24}>
            <div className={Style.bestSellingTop__left}>
              <div className={Style.left__cover}>
                <div className={Style.images}>
                  <img src="images/products/nho-xanh.png" alt="" />
                </div>
                <div className={Style.coverTitle}>
                  <div className={Style.title}>
                    <h2 className={Style.featuredProductTitle}>
                      {translateHome('featuredProduct')}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={24} lg={15} span={24}>
            <div className={Style.bestSellingTop__right}>
              <div className={Style.right__cover}>
                <div className={Style.menuTop}>
                  <div className={Style.itemLink}>
                    <Link href={ROUTERS.PRODUCTS_DETAIL('7')}>
                      Soy Bean Milk
                    </Link>
                  </div>

                  <div className={Style.itemLink}>
                    <Link href={ROUTERS.PRODUCTS_DETAIL('6')}>
                      Green Bean Milk
                    </Link>
                  </div>

                  <div className={Style.itemLink}>
                    <Link href={ROUTERS.PRODUCTS_DETAIL('8')}>Corn Milk</Link>
                  </div>

                  <div className={Style.itemLink}>
                    <Link href="">Bird&apos;s Nest Drink</Link>
                  </div>
                </div>

                <div className={Style.menuBottom}>
                  <div className={Style.itemLink}>
                    <Link href={ROUTERS.PRODUCTS_DETAIL('13')}>
                      Aloe Vera Bird&apos;s Nest Drink
                    </Link>
                  </div>

                  <div className={Style.itemLink}>
                    <Link href={ROUTERS.PRODUCTS_DETAIL('23')}>
                      Energy Drink
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className={Style.bestSellingBottom}>
          <Row
            gutter={100}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Col md={1} lg={6} span={24}>
              <div className={Style.bestSellingBottom__left}>
                <div className={Style.images}>
                  <img src="images/products/6.jpg" alt="" />
                </div>
              </div>
            </Col>

            <Col md={1} lg={18} span={24}>
              <div className={Style.bestSellingBottom__right}>
                <div className={Style.carousel}>
                  <Carousel
                    slidesToShow={4}
                    className={Style.bestSellingCarousel}
                    autoplay
                    responsive={carouselResponsiveSettings}
                  >
                    {featureProductData?.map((featureProduct, index) => (
                      <Link
                        href={ROUTERS.PRODUCTS_DETAIL(
                          featureProduct.productDetail
                        )}
                        className={Style.bestSellingCard}
                        key={index}
                      >
                        <div className={Style.bestSellingCardImage}>
                          <img src={featureProduct.image} alt="" />
                        </div>
                        <h1>{featureProduct.name}</h1>
                        <h4>{featureProduct.volume}</h4>
                      </Link>
                    ))}
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
              <img src="/images/brand/12.png" alt="" />
            </div>
          </Col>

          <Col lg={8} span={24} className={Style.dflex}>
            <div className={Style.brandImage}>
              <img src="/images/brand/13.png" alt="" />
            </div>
          </Col>

          <Col lg={8} span={24} className={Style.dflex}>
            <div className={Style.brandImage}>
              <img src="/images/brand/14.png" alt="" />
            </div>
          </Col>
        </Row>
      </div>

      <div className={Style.news}>
        <div className={Style.newsCover}>
          <div className={Style.newsTop}>
            <div className={`${Style.dflex} ${Style.newsTopCover}`}>
              <div className={`${Style.dflex} ${Style.newsTitle}`}>
                <h1>{translateHome('newsAndEvent')}</h1>
              </div>
            </div>
          </div>

          <div className={Style.newsBottomCover}>
            <Row gutter={80}>
              <Col lg={8} span={24} className={`${Style.dflex}`}>
                <div className={`${Style.dflex} ${Style.newsItem}`}>
                  <div className={Style.imageTop}>
                    <img
                      src="images/news/introduce_leadership_group_2.png"
                      alt=""
                    />
                  </div>
                  <div className={Style.contentCover}>
                    <div className={Style.content}>
                      <div className={Style.contentTitle}>
                        <h2>{translateHome('newsAndEventPrivateLabel')}</h2>
                      </div>
                    </div>

                    <div className={Style.btn_see_more}>
                      <button className={`${Style.dflex}`}>
                        <p>{translateHome('seeMore')}</p>
                        <ArrowRightOutlined className={Style.iconBtn} />
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={8} span={24} className={`${Style.dflex}`}>
                <div className={`${Style.dflex} ${Style.newsItem}`}>
                  <div className={Style.imageTop}>
                    <img
                      src="images/news/introduce_leadership_group_1.png"
                      alt=""
                    />
                  </div>
                  <div className={Style.contentCover}>
                    <div className={Style.content}>
                      <div className={Style.contentTitle}>
                        <h2>{translateHome('newsAndEventASweetMeeting')}</h2>
                      </div>
                    </div>

                    <div className={Style.btn_see_more}>
                      <button className={`${Style.dflex}`}>
                        <p>{translateHome('seeMore')}</p>
                        <ArrowRightOutlined className={Style.iconBtn} />
                      </button>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={8} span={24} className={`${Style.dflex}`}>
                <div className={`${Style.dflex} ${Style.newsItem}`}>
                  <div className={Style.imageTop}>
                    <img
                      src="images/news/introduce_leadership_group_3.png"
                      alt=""
                    />
                  </div>
                  <div className={Style.contentCover}>
                    <div className={Style.content}>
                      <div className={Style.contentTitle}>
                        <h2>
                          {translateHome('newsAndEventThankYouForVisting')}
                        </h2>
                      </div>
                    </div>

                    <div className={Style.btn_see_more}>
                      <button className={`${Style.dflex}`}>
                        <p>{translateHome('seeMore')}</p>
                        <ArrowRightOutlined className={Style.iconBtn} />
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
                <h1>{translateHome('whyChooseUs')}</h1>
              </div>
            </div>
          </div>

          <div className={`${Style.aboutUsBottom}`}>
            <Row
              gutter={100}
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/why_choose_us/Untitled-28.png" alt="" />
                  </div>
                  <h2>{translateHome('hightQuality')}</h2>
                  <p>{translateHome('hightQualityProduct')}</p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/why_choose_us/Untitled-29.png" alt="" />
                  </div>
                  <h2>{translateHome('fastDelivery')}</h2>
                  <p>{translateHome('fastDeliveryInOrder')}</p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/why_choose_us/Untitled-30.png" alt="" />
                  </div>
                  <h2>{translateHome('flexiblePackaging')}</h2>
                  <p>{translateHome('flexiblePackagingWeConsistently')}</p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/why_choose_us/Untitled-31.png" alt="" />
                  </div>
                  <h2>{translateHome('freeSample')}</h2>
                  <p>{translateHome('freeSampleBecause')}</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className={Style.customerInformation}>
        <div className={Style.customerInformationCover}>
          <div className={Style.customerInformationTop}>
            <div
              className={`${Style.dflex} ${Style.customerInformationTopCover}`}
            >
              <div
                className={`${Style.dflex} ${Style.customerInformationTitle}`}
              >
                <h1>{translateHome('customerInformation')}</h1>
              </div>
            </div>
          </div>

          <div className={Style.customerInformationCenter}>
            <p>{translateHome('customerInformationPleaseProvide')}</p>
          </div>

          <div className={`${Style.dflex} ${Style.customerInformationBottom}`}>
            <input
              type="text"
              placeholder={translateHome('firstAndLastName')}
            />
            <input type="tel" placeholder={translateHome('phoneNumber')} />
            <input type="text" placeholder={translateHome('email')} />
            <textarea
              cols={22}
              placeholder={translateHome('informationNeededSupport')}
            ></textarea>

            <div className={Style.btn_see_more}>
              <button className={`${Style.dflex}`}>
                <p>{translateHome('sendInformation')}</p>
                <ArrowRightOutlined className={Style.iconBtn} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
