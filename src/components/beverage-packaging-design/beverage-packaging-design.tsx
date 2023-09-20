import useI18n from '@/i18n/useI18N';
import React, { useEffect, useState } from 'react';
import Style from './beverage-packaging-design.module.scss';
import { Breadcrumb, Col, Row, Image, Carousel } from 'antd';
import {
  ArrowRightOutlined,
  RightOutlined,
  LeftOutlined,
} from '@ant-design/icons';
import { ProductData } from './interface';
import Link from 'next/link';
import { ROUTERS } from '@/constant/router';

export default function BeveragePackagingDesignPage() {
  const { translate: translateCommon } = useI18n('common');
  const { translate: translateBeveragePackagingDesign } = useI18n(
    'beveragePackagingDesign'
  );

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

  const [productData, setProductData] = useState<ProductData[]>();

  useEffect(() => {
    import('../../data/productInOtherPage.json')
      .then((response) => {
        const data: ProductData[] = response.default;
        setProductData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <div className={Style.headerBackground}></div>

      <div className={Style.introduce}>
        <div className={`${Style.dflex} ${Style.introduceTopCover}`}>
          <div className={Style.introduceTitle}>
            <h1>{translateBeveragePackagingDesign('ourServices')}</h1>
          </div>
        </div>

        <Breadcrumb
          className={Style.introduceBreadcrumb}
          items={[
            {
              title: `${translateCommon('home')}`,
            },
            {
              title: `${translateBeveragePackagingDesign('ourServices')}`,
            },
            {
              title: `${translateCommon('beveragePackagingDesign')}`,
            },
          ]}
        />
      </div>

      <div className={`${Style.dflex} ${Style.introducePackagingDesigner}`}>
        <div
          className={`${Style.dflex} ${Style.introducePackagingDesignerTopCover}`}
        >
          <div className={Style.introducePackagingDesignerTitle}>
            <h1>{translateBeveragePackagingDesign('packagingDesigner')}</h1>
          </div>
        </div>

        <div className={Style.introducePackagingDesignerCenter}>
          <h2>{translateBeveragePackagingDesign('packagingDesigner1')}</h2>
          <p className={Style.introducePackagingDesignerSub}>
            {translateBeveragePackagingDesign('needAPackagingDesigner')}
          </p>
          <p>{translateBeveragePackagingDesign('needAPackagingDesigner1')}</p>
        </div>

        <div
          className={`${Style.dflex} ${Style.introducePackagingDesignerLogo}`}
        >
          <Image
            src="/images/services/can.png"
            alt="logo"
            width="100%"
            height={500}
          />
        </div>
      </div>

      <div className={`${Style.dflex} ${Style.usefulTips}`}>
        <div className={`${Style.dflex} ${Style.usefulTipsLeft}`}>
          <div className={Style.aboutTheDirectorLeftCenter}>
            <h2>
              {translateBeveragePackagingDesign('usefulTipsForGreatBeverage')}
            </h2>
            <p>
              {translateBeveragePackagingDesign('usefulTipsForGreatBeverage1')}
            </p>
            <p style={{ marginBottom: '20px' }}>
              {translateBeveragePackagingDesign('usefulTipsForGreatBeverage2')}
            </p>
            <p>
              {translateBeveragePackagingDesign('usefulTipsForGreatBeverage3')}
            </p>
            <p style={{ marginBottom: '20px' }}>
              {translateBeveragePackagingDesign('usefulTipsForGreatBeverage4')}
            </p>
            <p>
              {translateBeveragePackagingDesign('usefulTipsForGreatBeverage5')}
            </p>
            <p style={{ marginBottom: '20px' }}>
              {translateBeveragePackagingDesign('usefulTipsForGreatBeverage6')}
            </p>
            <p>
              {translateBeveragePackagingDesign('usefulTipsForGreatBeverage7')}
            </p>
            <p style={{ marginBottom: '20px' }}>
              {translateBeveragePackagingDesign('usefulTipsForGreatBeverage8')}
            </p>
            <p>
              {translateBeveragePackagingDesign('usefulTipsForGreatBeverage9')}
            </p>
            <p style={{ marginBottom: '20px' }}>
              {translateBeveragePackagingDesign('usefulTipsForGreatBeverage10')}
            </p>
            <p>
              {translateBeveragePackagingDesign('usefulTipsForGreatBeverage11')}
            </p>
          </div>
        </div>
        <div className={`${Style.dflex} ${Style.usefulTipsRight}`}>
          <div className={Style.usefulTipsRightBackground}>
            <Image
              src="/images/services/service2.png"
              alt="logo"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>

      <div className={Style.affiliateProduct}>
        <div className={`${Style.dflex} ${Style.affiliateProductTopCover}`}>
          <div className={Style.affiliateProductTitle}>
            <h1>{translateBeveragePackagingDesign('affiliateProducts')}</h1>
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
          {productData?.map((product, index) => (
            <Link
              href={ROUTERS.PRODUCTS_DETAIL(product.productDetail)}
              className={Style.productCard}
              key={index}
            >
              <div className={Style.productCardImage}>
                <img src={product.image} alt="" />
              </div>
              <h1>{product.name}</h1>
              <h4>{product.volume}</h4>
            </Link>
          ))}
        </Carousel>
      </div>

      <div className={Style.whyChooseUs}>
        <div className={Style.whyChooseUsCover}>
          <div className={Style.whyChooseUsTop}>
            <div className={`${Style.dflex} ${Style.whyChooseUsTopCover}`}>
              <div className={`${Style.dflex} ${Style.whyChooseUsTitle}`}>
                <h1>{translateBeveragePackagingDesign('whyChooseUs')}</h1>
              </div>
            </div>
          </div>

          <div className={Style.whyChooseUsBottom}>
            <Row
              gutter={100}
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-28.png" alt="" />
                  </div>
                  <h2>{translateBeveragePackagingDesign('hightQuality')}</h2>
                  <p>
                    {translateBeveragePackagingDesign('hightQualityProduct')}
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-29.png" alt="" />
                  </div>
                  <h2>{translateBeveragePackagingDesign('fastDelivery')}</h2>
                  <p>
                    {translateBeveragePackagingDesign('fastDeliveryInOrder')}
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-30.png" alt="" />
                  </div>
                  <h2>
                    {translateBeveragePackagingDesign('flexiblePackaging')}
                  </h2>
                  <p>
                    {translateBeveragePackagingDesign(
                      'flexiblePackagingWeConsistently'
                    )}
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-31.png" alt="" />
                  </div>
                  <h2>{translateBeveragePackagingDesign('freeSample')}</h2>
                  <p>{translateBeveragePackagingDesign('freeSampleBecause')}</p>
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
                <h1>
                  {translateBeveragePackagingDesign('customerInformation')}
                </h1>
              </div>
            </div>
          </div>

          <div className={Style.customerInformationCenter}>
            <p>
              {translateBeveragePackagingDesign(
                'customerInformationPleaseProvide'
              )}
            </p>
          </div>

          <div className={`${Style.dflex} ${Style.customerInformationBottom}`}>
            <input
              type="text"
              placeholder={translateBeveragePackagingDesign('firstAndLastName')}
            />
            <input
              type="tel"
              placeholder={translateBeveragePackagingDesign('phoneNumber')}
            />
            <input
              type="text"
              placeholder={translateBeveragePackagingDesign('email')}
            />
            <textarea
              cols={22}
              placeholder={translateBeveragePackagingDesign(
                'informationNeededSupport'
              )}
            ></textarea>

            <div className={Style.btn_see_more}>
              <button className={`${Style.dflex}`}>
                <p>{translateBeveragePackagingDesign('sendInformation')}</p>
                <ArrowRightOutlined className={Style.iconBtn} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
