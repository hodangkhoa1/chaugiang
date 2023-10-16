import useI18n from '@/i18n/useI18N';
import React, { useEffect, useState } from 'react';
import Style from './recruitment.module.scss';
import { Breadcrumb, Col, Row, Image, Carousel, Input, Form } from 'antd';
import {
  ArrowRightOutlined,
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Reveal } from '../commons/reveal';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { LastestPostsData, RecruitmentProductData } from './interface';
const { TextArea } = Input;
import Link from 'next/link';
import { ROUTERS } from '@/constant/router';

const onFinish = async (values: any) => {
  try {
    await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Email sent successfully!',
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error sending email!',
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

const onFinishFailed = (errorInfo: any) => {
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: `Failed: ${errorInfo}`,
    showConfirmButton: false,
    timer: 1500,
  });
};

type FieldType = {
  firstAndLastName?: string;
  phoneNumber?: string;
  email?: string;
  informationNeededSupport?: string;
};

export default function RecruitmentPage() {
  const { translate: translateCommon } = useI18n('common');
  const { translate: translateRecruitment } = useI18n('recruitment');

  const [recruitmentProductData, setRecruitmentProductData] =
    useState<RecruitmentProductData[]>();
  const [lastestPostsData, setLastestPostsData] =
    useState<LastestPostsData[]>();

  useEffect(() => {
    import('../../data/productInPrivateLabelService.json')
      .then((response) => {
        const data: RecruitmentProductData[] = response.default;
        setRecruitmentProductData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    import('../../data/newsHome.json')
      .then((response) => {
        const data: LastestPostsData[] = response.default;
        setLastestPostsData(data);
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
    <div style={{ background: '#fff' }}>
      <Reveal>
        <div className={Style.headerBackground}></div>
      </Reveal>

      <Reveal>
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
      </Reveal>

      <Reveal>
        <div className={Style.recruimentAnouncement}>
          <h1>{translateRecruitment('recruimentAnouncement')}</h1>
          <h2>{translateRecruitment('recruimentAnouncementChauGiang')}</h2>
        </div>
      </Reveal>

      <Reveal>
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
                  {lastestPostsData?.map((lastestPosts, index) => (
                    <Link
                      href={ROUTERS.NEWS(lastestPosts.detailID)}
                      key={index}
                      className={Style.lastestPostContent}
                    >
                      <p>{lastestPosts.title}</p>
                      <div className={Style.lastestPostContent}></div>
                    </Link>
                  ))}
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
      </Reveal>

      <Reveal>
        <div className={Style.affiliateProduct}>
          <div className={`${Style.dflex} ${Style.affiliateProductTopCover}`}>
            <div className={Style.affiliateProductTitle}>
              <h1>{translateRecruitment('youMayAlsoLike')}</h1>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.carouselProductBackground}>
          <Carousel
            slidesToShow={4}
            className={Style.productCarousel}
            autoplay
            responsive={carouselResponsiveSettings}
            arrows
            {...settings}
          >
            {recruitmentProductData?.map((bestSelling, index) => (
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
      </Reveal>

      <Reveal>
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

            <div
              className={`${Style.dflex} ${Style.customerInformationBottom}`}
            >
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item<FieldType>
                  name="firstAndLastName"
                  rules={[
                    {
                      required: true,
                      message: 'Please input first and last name!',
                    },
                  ]}
                >
                  <Input
                    placeholder={translateRecruitment('firstAndLastName')}
                  />
                </Form.Item>

                <Form.Item<FieldType>
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: 'Please input phone number!',
                    },
                  ]}
                >
                  <Input placeholder={translateRecruitment('phoneNumber')} />
                </Form.Item>

                <Form.Item<FieldType>
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input email!',
                    },
                  ]}
                >
                  <Input placeholder={translateRecruitment('email')} />
                </Form.Item>

                <Form.Item<FieldType>
                  name="informationNeededSupport"
                  rules={[
                    {
                      required: true,
                      message: 'Please input information needed support!',
                    },
                  ]}
                >
                  <TextArea
                    className={Style.styleTextArea}
                    cols={22}
                    placeholder={translateRecruitment(
                      'informationNeededSupport'
                    )}
                  />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <div className={Style.btn_see_more}>
                    <button className={`${Style.dflex}`}>
                      <p>{translateRecruitment('sendInformation')}</p>
                      <ArrowRightOutlined className={Style.iconBtn} />
                    </button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
