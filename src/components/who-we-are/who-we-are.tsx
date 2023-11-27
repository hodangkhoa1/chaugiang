import React from 'react';
import Style from './who-we-are.module.scss';
import { Breadcrumb, Carousel, Col, Form, Image, Input, Row } from 'antd';
import {
  ArrowRightOutlined,
  RightOutlined,
  LeftOutlined,
} from '@ant-design/icons';
import useI18n from '@/i18n/useI18N';
import { Reveal } from '../commons/reveal';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
const { TextArea } = Input;

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

export default function WhoWeArePage() {
  const { translate: translateWhoWeAre } = useI18n('whoWeAre');
  const { translate: translateCommon } = useI18n('common');

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
      <Reveal>
        <div className={Style.headerBackground}></div>
      </Reveal>

      <Reveal>
        <div className={Style.introduceWhoWeAre}>
          <div className={`${Style.dflex} ${Style.introduceWhoWeAreTopCover}`}>
            <div className={Style.introduceWhoWeAreTitle}>
              <h1>{translateCommon('introduce')}</h1>
            </div>
          </div>

          <Breadcrumb
            className={Style.introduceWhoWeAreBreadcrumb}
            items={[
              {
                title: `${translateCommon('home')}`,
              },
              {
                title: `${translateCommon('introduce')}`,
              },
              {
                title: `${translateCommon('whoWeAre')}`,
              },
            ]}
          />
        </div>
      </Reveal>

      <Reveal>
        <div className={`${Style.dflex} ${Style.introduceOurFamily}`}>
          <div className={`${Style.dflex} ${Style.introduceOurFamilyTopCover}`}>
            <div className={Style.introduceOurFamilyTitle}>
              <h1>{translateWhoWeAre('ourFamily')}</h1>
            </div>
          </div>

          <div className={Style.introduceOurFamilyCenter}>
            <p>{translateWhoWeAre('ourFamilyChauGiangFood')}</p>
          </div>

          <Row className={`${Style.dflex}`}>
            <Col md={12} lg={6} span={24}>
              <Image
                src="/images/introduce/30years.png"
                alt="logo"
                width={380}
                preview={false}
              />
            </Col>
            <Col md={12} lg={6} span={24}>
              <Image
                src="/images/introduce/CGFood.png"
                alt="logo"
                preview={false}
              />
            </Col>
          </Row>

          {/* <div className={`${Style.dflex} ${Style.introduceOurFamilyLogo}`}>
            
          </div> */}
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.viewCompany}></div>
      </Reveal>

      <Reveal>
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
      </Reveal>

      <Reveal>
        <div className={`${Style.dflex} ${Style.ourProducts}`}>
          <div className={`${Style.dflex} ${Style.ourProductsTopCover}`}>
            <div className={Style.ourProductsTitle}>
              <h1>{translateWhoWeAre('ourProducts')}</h1>
            </div>
          </div>

          <div className={Style.ourProductsCenter}>
            <p>{translateWhoWeAre('ourProductsWithMore')}</p>
          </div>

          <div className={Style.ourProductsLogo}>
            <img
              src="/images/introduce/our_products.png"
              alt="logo"
              className={Style.imageOurProduct}
            />
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={`${Style.dflex} ${Style.certification}`}>
          <div className={`${Style.dflex} ${Style.certificationTopCover}`}>
            <div className={Style.certificationTitle}>
              <h1>{translateWhoWeAre('certifications')}</h1>
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
      </Reveal>

      <Reveal>
        <div className={`${Style.dflex} ${Style.ourFactory}`}>
          <div className={`${Style.dflex} ${Style.ourFactoryLeft}`}>
            <div className={`${Style.dflex} ${Style.ourFactoryLeftCover}`}>
              <div className={Style.ourFactoryTitle}>
                <h1>{translateWhoWeAre('ourFactory')}</h1>
              </div>
            </div>

            <div className={Style.ourFactoryLeftCenter}>
              <p>{translateWhoWeAre('ourFactoryInOrder')}</p>
              <p>{translateWhoWeAre('ourFactoryBesides')}</p>
              <p>{translateWhoWeAre('ourFactoryInAddition')}</p>
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
      </Reveal>

      <Reveal>
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
      </Reveal>

      <Reveal>
        <div className={`${Style.whyChooseUs} ${Style.aboutUs}`}>
          <div className={`${Style.aboutUsCover} ${Style.whyChooseUsCover}`}>
            <div className={Style.aboutUsTop}>
              <div className={`${Style.dflex} ${Style.whyChooseUsTopCover}`}>
                <div className={`${Style.dflex} ${Style.whyChooseUsTitle}`}>
                  <h1>{translateWhoWeAre('whyChooseUs')}</h1>
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
                      <img src="/images/why_choose_us/Untitled-28.png" alt="" />
                    </div>
                    <h2>{translateWhoWeAre('hightQuality')}</h2>
                    <p>{translateWhoWeAre('hightQualityProduct')}</p>
                  </div>
                </Col>

                <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
                      <img src="/images/why_choose_us/Untitled-29.png" alt="" />
                    </div>
                    <h2>{translateWhoWeAre('fastDelivery')}</h2>
                    <p>{translateWhoWeAre('fastDeliveryInOrder')}</p>
                  </div>
                </Col>

                <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
                      <img src="/images/why_choose_us/Untitled-30.png" alt="" />
                    </div>
                    <h2>{translateWhoWeAre('flexiblePackaging')}</h2>
                    <p>
                      {translateWhoWeAre('flexiblePackagingWeConsistently')}
                    </p>
                  </div>
                </Col>

                <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
                      <img src="/images/why_choose_us/Untitled-31.png" alt="" />
                    </div>
                    <h2>{translateWhoWeAre('freeSample')}</h2>
                    <p>{translateWhoWeAre('freeSampleBecause')}</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
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
                  <h1>{translateWhoWeAre('customerInformation')}</h1>
                </div>
              </div>
            </div>

            <div className={Style.customerInformationCenter}>
              <p>{translateWhoWeAre('customerInformationPleaseProvide')}</p>
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
                  <Input placeholder={translateWhoWeAre('firstAndLastName')} />
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
                  <Input placeholder={translateWhoWeAre('phoneNumber')} />
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
                  <Input placeholder={translateWhoWeAre('email')} />
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
                    placeholder={translateWhoWeAre('informationNeededSupport')}
                  />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <div className={Style.btn_see_more}>
                    <button className={`${Style.dflex}`}>
                      <p>{translateWhoWeAre('sendInformation')}</p>
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
