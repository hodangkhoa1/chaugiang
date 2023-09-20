import useI18n from '@/i18n/useI18N';
import React from 'react';
import Style from './recruitment.module.scss';
import { Breadcrumb, Col, Row, Image, Carousel } from 'antd';
import {
  ArrowRightOutlined,
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';

export default function RecruitmentPage() {
  const { translate: translateCommon } = useI18n('common');
  const { translate: translateRecruitment } = useI18n('recruitment');

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
    <div style={{ background: '#fff' }}>
      <div className={Style.headerBackground}></div>

      <div className={Style.introduce}>
        <div className={`${Style.dflex} ${Style.introduceTopCover}`}>
          <div className={Style.introduceTitle}>
            <h1>{translateCommon('recruitment')}</h1>
          </div>
          <div className={Style.introduceLine}></div>
        </div>

        <Breadcrumb
          className={Style.introduceBreadcrumb}
          items={[
            {
              title: `${translateCommon('home')}`,
            },
            {
              title: `${translateCommon('recruitment')}`,
            },
          ]}
        />
      </div>

      <div className={Style.recruimentAnouncement}>
        <h1>{translateRecruitment('recruimentAnouncement')}</h1>
        <h2>{translateRecruitment('recruimentAnouncementChauGiang')}</h2>
      </div>

      <div className={Style.recruimentBody}>
        <Row>
          <Col md={18} lg={18} span={24}>
            <div className={Style.recruimentBodyLeft}>
              <Image
                src="/images/recruitment/recruitment2.png"
                alt="logo"
                width="100%"
                height={500}
                preview={false}
              />
              <div className={Style.recruimentBodyContent}>
                <h1>{translateRecruitment('marketingStaff')}</h1>
                <h1>{translateRecruitment('salesStaff')}</h1>
                <h1>{translateRecruitment('imageDesign')}</h1>
                <h1>{translateRecruitment('accountingOffice')}</h1>
                <h1>{translateRecruitment('importExport')}</h1>
              </div>
              <div className={Style.recruimentJob}>
                <p>{translateRecruitment('request')}</p>
                <h2>{translateRecruitment('requestGraduated')}</h2>
                <h2>{translateRecruitment('requestPriority')}</h2>
                <h2>{translateRecruitment('requestFluent')}</h2>
                <h2>{translateRecruitment('requestAge')}</h2>
              </div>
              <div className={Style.recruimentJob}>
                <p>{translateRecruitment('regime')}</p>
                <h2>{translateRecruitment('regimeWageAgreement')}</h2>
                <h2>{translateRecruitment('regimeHaveLabor')}</h2>
                <h2>{translateRecruitment('regimePaidSocialInsurance')}</h2>
                <h2>{translateRecruitment('regimeAnnualTravel')}</h2>
              </div>
              <div className={Style.recruimentJob}>
                <p>{translateRecruitment('contact')}</p>
                <h2>{translateRecruitment('contactCandidates')}</h2>
                <h3>{translateRecruitment('contactEmail')}</h3>
                <h3>{translateRecruitment('contactPhoneNumber')}</h3>
                <h3>{translateRecruitment('contactTimeReceive')}</h3>
                <h2>{translateRecruitment('contactInterviewTime')}</h2>
                <h2>{translateRecruitment('contactAddress')}</h2>
                <h2>{translateRecruitment('contactDocuments')}</h2>
                <h3>{translateRecruitment('contactJobApplication')}</h3>
                <h3>{translateRecruitment('contactNotarized')}</h3>
                <h3>{translateRecruitment('contactIdentificationCard')}</h3>
              </div>
              <div className={Style.recruimentJob}>
                <h1>{translateRecruitment('accountant')}</h1>
                <div className={Style.recruimentJobLine}></div>
              </div>
              <div className={Style.recruimentJob}>
                <h1>{translateRecruitment('logistic')}</h1>
                <div className={Style.recruimentJobLine}></div>
              </div>
              <div className={Style.recruimentJob}>
                <h1>{translateRecruitment('marketing')}</h1>
                <div className={Style.recruimentJobLine}></div>
              </div>
              <div className={Style.recruimentJob}>
                <h1>{translateRecruitment('businessMan')}</h1>
                <div className={Style.recruimentJobLine}></div>
              </div>
              <div className={Style.recruimentJob}>
                <h1>{translateRecruitment('design')}</h1>
                <div className={Style.recruimentJobLine}></div>
              </div>
              <div className={Style.recruimentJob}>
                <h1>{translateRecruitment('recruitment')}</h1>
                <div className={Style.recruimentJobLine}></div>
              </div>
              <div className={Style.recruimentJob}>
                <h1>{translateRecruitment('office')}</h1>
                <div className={Style.recruimentJobLine}></div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={6} span={24}>
            <div className={Style.recruimentBodyRight}>
              <div className={Style.recruimentBodySearch}>
                <h1>{translateRecruitment('search')}</h1>
                <div className={Style.searchBox}>
                  <div className={Style.buttonSearch}>
                    <SearchOutlined className={Style.btnSearch} />
                  </div>
                  <input
                    className={Style.searchPlace}
                    type="text"
                    placeholder={translateCommon('search')}
                  />
                </div>
              </div>
              <div className={Style.recruimentBodyLastestPost}>
                <h1>{translateRecruitment('lastestPosts')}</h1>
                <div className={Style.lastestPostContent}>
                  <p>{translateRecruitment('lastestPostsMilkTea')}</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>{translateRecruitment('lastestPostsReadyForSummer')}</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>{translateRecruitment('lastestPostsNewVariants')}</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>{translateRecruitment('lastestPostsSomePrivateLabel')}</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>{translateRecruitment('lastestPostsOEMEnergy')}</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
              </div>
              <div className={Style.recruimentBodyLastestPost}>
                <h1>{translateRecruitment('productCagories')}</h1>
                <div className={Style.lastestPostContent}>
                  <p>Coconut water</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>Fruit Juice Drink</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>Milk Drink</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>Sparkling Juice Drink</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>Coffee</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>Energy Drink</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>PET Aloe Vera Drink</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
              </div>
              <div className={Style.recruimentBodyLastestPost}>
                <h1>{translateRecruitment('categories')}</h1>
                <div className={Style.lastestPostContent}>
                  <p>{translateRecruitment('news')}</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>{translateRecruitment('event')}</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
              </div>
              <div className={Style.recruimentBodyLastestPost}>
                <h1>
                  {translateRecruitment('chauGiangBeverageIntroductionVideo')}
                </h1>
                <div>
                  <iframe
                    width="100%"
                    height="195"
                    src="https://www.youtube.com/embed/vyqrV-t0sPc?autoplay=1&controls=0&rel=0&mute=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className={Style.affiliateProduct}>
        <div className={`${Style.dflex} ${Style.affiliateProductTopCover}`}>
          <div className={Style.affiliateProductTitle}>
            <h1>{translateRecruitment('youMayAlsoLike')}</h1>
          </div>
        </div>
      </div>

      <div className={Style.carouselProductBackground}>
        <Carousel
          slidesToShow={4}
          className={Style.productCarousel}
          autoplay
          arrows
          {...settings}
          responsive={carouselResponsiveSettings}
        >
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/22.png" alt="" />
            </div>
            <h1>Coffee Mocha</h1>
            <h4>250ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/23.png" alt="" />
            </div>
            <h1>Coffee Latte</h1>
            <h4>250ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/24.png" alt="" />
            </div>
            <h1>Bubble Tea With Lemon</h1>
            <h4>330ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/25.png" alt="" />
            </div>
            <h1>Lotus Heart Tea</h1>
            <h4>250ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/22.png" alt="" />
            </div>
            <h1>Coffee Mocha</h1>
            <h4>250ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/23.png" alt="" />
            </div>
            <h1>Coffee Latte</h1>
            <h4>250ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/24.png" alt="" />
            </div>
            <h1>Bubble Tea With Lemon</h1>
            <h4>330ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/25.png" alt="" />
            </div>
            <h1>Lotus Heart Tea</h1>
            <h4>250ml</h4>
          </div>
        </Carousel>
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
                <h1>{translateRecruitment('customerInformation')}</h1>
              </div>
            </div>
          </div>

          <div className={Style.customerInformationCenter}>
            <p>{translateRecruitment('customerInformationPleaseProvide')}</p>
          </div>

          <div className={`${Style.dflex} ${Style.customerInformationBottom}`}>
            <input
              type="text"
              placeholder={translateRecruitment('firstAndLastName')}
            />
            <input
              type="tel"
              placeholder={translateRecruitment('phoneNumber')}
            />
            <input type="text" placeholder={translateRecruitment('email')} />
            <textarea
              cols={22}
              placeholder={translateRecruitment('informationNeededSupport')}
            ></textarea>

            <div className={Style.btn_see_more}>
              <button className={`${Style.dflex}`}>
                <p>{translateRecruitment('sendInformation')}</p>
                <ArrowRightOutlined className={Style.iconBtn} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
