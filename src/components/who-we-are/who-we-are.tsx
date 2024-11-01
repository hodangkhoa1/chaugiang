import React, { useEffect } from 'react';
import Style from './who-we-are.module.scss';
import { Breadcrumb, Carousel, Col, Form, Image, Input, Row } from 'antd';
import {
  ArrowRightOutlined,
  RightOutlined,
  LeftOutlined,
} from '@ant-design/icons';
import useI18n from '@/i18n/useI18N';
import { Reveal } from '../commons/reveal';
import 'sweetalert2/src/sweetalert2.scss';
import { useMutation, useQuery } from 'react-query';
import { ICreateCustomerCare, IFormValues } from './interface';
import { createCustomerCare, getListCertification } from './fetcher';
import { errorToast, successToast } from '@/hook/toast';
import { API_MESSAGE } from '@/constant/message';
const { TextArea } = Input;

const initialValue = {
  fullName: '',
  phoneNumber: '',
  email: '',
  customerCareContent: '',
};
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { API_CERTIFICATION } from '@/fetcherAxios/endpoint';

export default function WhoWeArePage() {
  const { translate: translateWhoWeAre } = useI18n('whoWeAre');
  const { translate: translateCommon } = useI18n('common');
  const [form] = Form.useForm();

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

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

  const createMutation = useMutation({
    mutationFn: (body: ICreateCustomerCare) => {
      return createCustomerCare(body);
    },
  });

  const onFinish = (formValues: IFormValues) => {
    const _requestData: ICreateCustomerCare = {
      fullName: formValues.fullName || '',
      phoneNumber: formValues.phoneNumber || '',
      email: formValues.email || '',
      customerCareContent: formValues.customerCareContent || '',
    };
    createMutation.mutate(_requestData, {
      onSuccess: (data) => {
        data.status
          ? (successToast(data.message), form.resetFields())
          : errorToast(data.message);
      },
      onError() {
        errorToast(API_MESSAGE.ERROR);
      },
    });
  };

  const certification = useQuery({
    queryKey: [API_CERTIFICATION.GET_ALL_CERTIFICATION],
    queryFn: () => getListCertification(),
  });

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
            {certification.data?.data.map((certificationData, index) => (
              <div key={index} className={Style.certificationCard}>
                <div className={Style.certificationCardImage}>
                  <Image
                    src={certificationData.certificationImage}
                    alt={`certification${index}`}
                    width={300}
                    height={430}
                    className={Style.certificationCardImg}
                  />
                </div>
                <h1>{certificationData.certificationName}</h1>
              </div>
            )) || []}
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
                form={form}
                initialValues={initialValue}
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  name="fullName"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập họ và tên!',
                    },
                  ]}
                >
                  <Input
                    placeholder={translateWhoWeAre('firstAndLastName')}
                    prefix={<UserOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập số điện thoại để được hỗ trợ!',
                    },
                    {
                      pattern: new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g),
                      message: 'Số điện thoại không đúng định dạng',
                    },
                  ]}
                >
                  <Input
                    placeholder={translateWhoWeAre('phoneNumber')}
                    prefix={<PhoneOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input email!',
                    },
                  ]}
                >
                  <Input
                    placeholder={translateWhoWeAre('email')}
                    prefix={<MailOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  name="customerCareContent"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập nội dung cần hỗ trợ!',
                    },
                  ]}
                >
                  <TextArea
                    className={Style.styleTextArea}
                    cols={22}
                    placeholder={translateWhoWeAre('informationNeededSupport')}
                  />
                </Form.Item>

                <Form.Item className={Style.dflex}>
                  <div className={Style.btn_see_more}>
                    <button type="submit" className={`${Style.dflex}`}>
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
