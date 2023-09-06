// import useI18n from '@/i18n/useI18N';
import React from 'react';
import Style from './who-we-are.module.scss';
import { Breadcrumb, Carousel, Col, Image, Row } from 'antd';
import {
  ArrowRightOutlined,
  RightOutlined,
  LeftOutlined,
} from '@ant-design/icons';

export default function WhoWeArePage() {
  // const { translate: translateHome } = useI18n('common');

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

  return (
    <div>
      <div className={Style.headerBackground}></div>

      <div className={Style.introduceWhoWeAre}>
        <div className={`${Style.dflex} ${Style.introduceWhoWeAreTopCover}`}>
          <div className={Style.introduceWhoWeAreTitle}>
            <h1>Introduce</h1>
          </div>
        </div>

        <Breadcrumb
          className={Style.introduceWhoWeAreBreadcrumb}
          items={[
            {
              title: 'Home',
            },
            {
              title: 'Introduce',
            },
            {
              title: 'Who we are',
            },
          ]}
        />
      </div>

      <div className={`${Style.dflex} ${Style.introduceOurFamily}`}>
        <div className={`${Style.dflex} ${Style.introduceOurFamilyTopCover}`}>
          <div className={Style.introduceOurFamilyTitle}>
            <h1>Our Family</h1>
          </div>
        </div>

        <div className={Style.introduceOurFamilyCenter}>
          <p>
            Chau Giang Food Processing Trade Company was established in 1990, is
            an enterprise with over 30 years of experience in the industry of
            producing all kinds of domestic and international branded beverage
            products. . Currently, Chau Giang has been expanding production
            lines, continuing to improve production processes to meet
            international standards to promote exports to markets around the
            world, ensuring standards. in terms of design, product quality and
            price.
          </p>
        </div>

        <div className={`${Style.dflex} ${Style.introduceOurFamilyLogo}`}>
          <Image
            src="/images/introduce/30years.png"
            alt="logo"
            width={380}
            preview={false}
          />
          <Image
            src="/images/introduce/CGFood.png"
            alt="logo"
            width={430}
            preview={false}
          />
        </div>
      </div>

      <div className={Style.viewCompany}></div>

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

      <div className={`${Style.dflex} ${Style.ourProducts}`}>
        <div className={`${Style.dflex} ${Style.ourProductsTopCover}`}>
          <div className={Style.ourProductsTitle}>
            <h1>Our Products</h1>
          </div>
        </div>

        <div className={Style.ourProductsCenter}>
          <p>
            With more than 30 years of leading in the Food and Beverage
            industry, COCONUT WATER, BROWN RICE MILK, SOYA MILK, GREEN BEAN
            MILK, OAT MILK, NATURAL FRUIT JUICE, ALOE VERA, and ENERGY Drink are
            our best selling products in both do mestic and international
            markets.
          </p>
        </div>

        <div className={Style.ourProductsLogo}>
          <img
            src="/images/introduce/our_products.png"
            alt="logo"
            className={Style.imageOurProduct}
          />
        </div>
      </div>

      <div className={`${Style.dflex} ${Style.certification}`}>
        <div className={`${Style.dflex} ${Style.certificationTopCover}`}>
          <div className={Style.certificationTitle}>
            <h1>Certifications</h1>
          </div>
        </div>

        <div className={Style.certificationCenter}>
          <p>
            F.D.A, HALAL, BRC, BSCI, SMETA, FCSS 22000, HACCP, GMP, ISO 22000
          </p>
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
                className={Style.certificationImg}
              />
            </div>
            <h1>HALAL</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <Image
                src="/images/certifications/BSCI.png"
                alt="logo"
                className={Style.certificationImg}
              />
            </div>
            <h1>BSCI</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <Image
                src="/images/certifications/FDA.png"
                alt="logo"
                className={Style.certificationImg}
              />
            </div>
            <h1>FDA</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <Image
                src="/images/certifications/FSSC.png"
                alt="logo"
                className={Style.certificationImg}
              />
            </div>
            <h1>FSSC22000</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <Image
                src="/images/certifications/HALAL.png"
                alt="logo"
                className={Style.certificationImg}
              />
            </div>
            <h1>HALAL</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <Image
                src="/images/certifications/BSCI.png"
                alt="logo"
                className={Style.certificationImg}
              />
            </div>
            <h1>BSCI</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <Image
                src="/images/certifications/FDA.png"
                alt="logo"
                className={Style.certificationImg}
              />
            </div>
            <h1>FDA</h1>
          </div>
          <div className={Style.certificationCard}>
            <div className={Style.certificationCardImage}>
              <Image
                src="/images/certifications/FSSC.png"
                alt="logo"
                className={Style.certificationImg}
              />
            </div>
            <h1>FSSC22000</h1>
          </div>
        </Carousel>
      </div>

      <div className={`${Style.dflex} ${Style.ourFactory}`}>
        <div className={`${Style.dflex} ${Style.ourFactoryLeft}`}>
          <div className={`${Style.dflex} ${Style.ourFactoryLeftCover}`}>
            <div className={Style.ourFactoryTitle}>
              <h1>Our Factory</h1>
            </div>
          </div>

          <div className={Style.ourFactoryLeftCenter}>
            <p>
              In order to meet international standards and the needs of the
              market, Chau Giang Co., always prioritizes improving modern
              equipment and machines. Currently, Chau Giang&apos;s factory is
              producing with full of automatically can filling lines and PET
              plastic bottles, which can meet all types of products from hot to
              cold filling.
            </p>
            <p>
              Besides, Chau Giang also invests in a chain of labeling and
              packaging systems for the purpose of committing to delivery and
              output for customers on time. In addition, Chau Giang Company has
              full departments from the R&D department, Accountant offices,
              warehouse systems, and other departments.
            </p>
            <p>
              In addition to expanding and developing production lines according
              to international standards, Chau Giang Co., always focuses on the
              enhancement and training of high-quality human resources through
              careful selection, creating chances to experience the best
              environment, being guided in working specifically and clearly to
              maximize personal capacity, thereby optimizing collective
              strength.
            </p>
          </div>
        </div>
        <div className={Style.ourFactoryRight}>
          <Carousel slidesToShow={1} autoplay>
            <Image
              src="/images/introduce/our_factory_2.jpg"
              alt="logo"
              width={610}
              height={650}
            />
            <Image
              src="/images/introduce/our_factory_3.jpg"
              alt="logo"
              width={610}
              height={650}
            />
            <Image
              src="/images/introduce/our_factory_4.jpg"
              alt="logo"
              width={610}
              height={650}
            />
            <Image
              src="/images/introduce/our_factory_5.jpg"
              alt="logo"
              width={610}
              height={650}
            />
            <Image
              src="/images/introduce/our_factory_6.jpg"
              alt="logo"
              width={610}
              height={650}
            />
          </Carousel>
        </div>
      </div>

      <div>
        <iframe
          width="100%"
          height="768px"
          src="https://www.youtube.com/embed/vyqrV-t0sPc?autoplay=1&controls=0&rel=0&mute=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className={Style.whyChooseUs}>
        <div className={Style.whyChooseUsCover}>
          <div className={Style.whyChooseUsTop}>
            <div className={`${Style.dflex} ${Style.whyChooseUsTopCover}`}>
              <div className={`${Style.dflex} ${Style.whyChooseUsTitle}`}>
                <h1>Why choose Us?</h1>
              </div>
            </div>
          </div>

          <div className={Style.whyChooseUsBottom}>
            <Row
              gutter={100}
              style={{ marginLeft: 'unset', marginRight: 'unset' }}
            >
              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-28.png" alt="" />
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
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-29.png" alt="" />
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
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-30.png" alt="" />
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
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-31.png" alt="" />
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

      <div className={Style.customerInformation}>
        <div className={Style.customerInformationCover}>
          <div className={Style.customerInformationTop}>
            <div
              className={`${Style.dflex} ${Style.customerInformationTopCover}`}
            >
              <div
                className={`${Style.dflex} ${Style.customerInformationTitle}`}
              >
                <h1>Customer Information</h1>
              </div>
            </div>
          </div>

          <div className={Style.customerInformationCenter}>
            <p>
              Please provide the information below to receive our free
              consultation service package
            </p>
          </div>

          <div className={`${Style.dflex} ${Style.customerInformationBottom}`}>
            <input type="text" placeholder="First and last name" />
            <input type="tel" placeholder="Phone number" />
            <input type="text" placeholder="Email" />
            <textarea
              cols={22}
              placeholder="Information needed support"
            ></textarea>

            <div className={Style.btn_see_more}>
              <button className={`${Style.dflex}`}>
                <p>Send information</p>
                <ArrowRightOutlined className={Style.iconBtn} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
