// import useI18n from '@/i18n/useI18N';
import React, { useEffect, useState } from 'react';
import Style from './private-label-services.module.scss';
import { Breadcrumb, Carousel, Col, Image, Row } from 'antd';
import {
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { PrivateLabelServicesProductData } from './interface';
import Link from 'next/link';
import { ROUTERS } from '@/constant/router';

export default function PrivateLabelServicesPage() {
  // const { translate: translateHome } = useI18n('common');

  const [privateLabelServicesProductData, setPrivateLabelServicesProductData] =
    useState<PrivateLabelServicesProductData[]>();

  useEffect(() => {
    import('../../data/productInPrivateLabelService.json')
      .then((response) => {
        const data: PrivateLabelServicesProductData[] = response.default;
        setPrivateLabelServicesProductData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

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

  return (
    <div>
      <div className={Style.headerBackground}></div>

      <div className={Style.introduce}>
        <div className={`${Style.dflex} ${Style.introduceTopCover}`}>
          <div className={Style.introduceTitle}>
            <h1>Our Service</h1>
          </div>
        </div>

        <Breadcrumb
          className={Style.introduceBreadcrumb}
          items={[
            {
              title: 'Home',
            },
            {
              title: 'Our Services',
            },
            {
              title: 'Private Label Services (OEM/ODM)',
            },
          ]}
        />
      </div>

      <div className={`${Style.dflex} ${Style.introducePackagingDesigner}`}>
        <div
          className={`${Style.dflex} ${Style.introducePackagingDesignerTopCover}`}
        >
          <div className={Style.introducePackagingDesignerTitle}>
            <h1>Private Label Your</h1>
          </div>
        </div>

        <div className={Style.introducePackagingDesignerCenter}>
          <p>
            Nam Viet F&B has been developing OEM/ODM products many years. Our
            dedicated Research and Development team closely follows global
            trends of the health food markets in Europe, America and Asia to
            ensure we are able to introduce the latest products for customer
            needs and requirements. Nam Viet F&B has also collaborated with
            well-known international firms using our integrated one-stop OEM/ODM
            services to produce and manufacture the best products with excellent
            services. Further details to our OEM/ODM services are listed below:
            OEM/ODM flow
          </p>
        </div>

        <div
          className={`${Style.dflex} ${Style.introducePackagingDesignerLogo}`}
        >
          <Image
            src="/images/services/service4.png"
            alt="logo"
            width="100%"
            height={500}
            preview={false}
          />
        </div>
      </div>

      <div className={`${Style.stepProduct}`}>
        <Row>
          <Col md={12} lg={4} span={24}>
            <p>Brand development</p>
          </Col>
          <Col md={12} lg={3} span={24}>
            <Image
              src="/images/services/arrow.png"
              alt="logo"
              width={70}
              height={35}
              preview={false}
            />
          </Col>
          <Col md={12} lg={3} span={24}>
            <p>Production</p>
          </Col>
          <Col md={12} lg={3} span={24}>
            <Image
              src="/images/services/arrow.png"
              alt="logo"
              width={70}
              height={35}
              preview={false}
            />
          </Col>
          <Col md={12} lg={3} span={24}>
            <p>Labeling</p>
          </Col>
          <Col md={12} lg={3} span={24}>
            <Image
              src="/images/services/arrow.png"
              alt="logo"
              width={70}
              height={35}
              preview={false}
            />
          </Col>
          <Col md={12} lg={3} span={24}>
            <p>Packaging</p>
          </Col>
          <Col md={12} lg={2} span={24}>
            <Image
              src="/images/services/arrow.png"
              alt="logo"
              width={70}
              height={35}
              preview={false}
            />
          </Col>
        </Row>
      </div>

      <div className={Style.capacityList}>
        <Row style={{ height: '100%' }}>
          <Col md={12} lg={7} span={24}>
            <div className={`${Style.dflex} ${Style.capacityListLeft}`}>
              <p>250 sleek can</p>
              <p>330 sleek can</p>
              <p>330 standard can</p>
              <p>355 sleek can</p>
              <p>355 standard</p>
              <p>500ml sleek</p>
              <button className={Style.capacityListButton}>Alumnium can</button>
            </div>
          </Col>
          <Col md={12} lg={7} span={24}>
            <div className={`${Style.dflex} ${Style.capacityListLeft}`}>
              <p>320ml</p>
              <p>330ml</p>
              <p>350ml</p>
              <p>500ml</p>
              <button className={Style.capacityListButton}>Pet Bottle</button>
            </div>
          </Col>
          <Col md={12} lg={10} span={24}>
            <div className={`${Style.dflex} ${Style.capacityListRight}`}>
              <Image
                src="/images/services/service6.png"
                alt="logo"
                preview={false}
                className={Style.capacityListRightImg}
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className={Style.listProduct}></div>

      <div className={Style.affiliateProduct}>
        <div className={`${Style.dflex} ${Style.affiliateProductTopCover}`}>
          <div className={Style.affiliateProductTitle}>
            <h1>You May Also Like...</h1>
          </div>
        </div>
      </div>

      <div className={Style.carouselProductBackground}>
        <Carousel
          slidesToShow={4}
          className={Style.productCarousel}
          autoplay
          responsive={carouselResponsiveSettings}
          arrows
          {...settings}
        >
          {privateLabelServicesProductData?.map((bestSelling, index) => (
            <Link
              href={ROUTERS.PRODUCTS_DETAIL(bestSelling.productDetail)}
              className={Style.productCard}
              key={index}
            >
              <div className={Style.productCardImage}>
                <img src={bestSelling.image} alt="" />
              </div>
              <h1>{bestSelling.name}</h1>
              <h4>{bestSelling.volume}</h4>
            </Link>
          ))}
        </Carousel>
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
                    Nam Viet continuously develops new drinks which bring
                    original natural tastes, high nutrition facts, catch the
                    newest trends in the market.
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
                    Production runs in accordance with world highest standards
                    of Food Safety. Big variety of soft drinks, non-alcohol
                    drinks, fruit juice drinks.
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
                    Production runs in accordance with world highest standards
                    of Food Safety. Big variety of soft drinks, non-alcohol
                    drinks, fruit juice drinks.
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
                    Production runs in accordance with world highest standards
                    of Food Safety. Big variety of soft drinks, non-alcohol
                    drinks, fruit juice drinks.
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
