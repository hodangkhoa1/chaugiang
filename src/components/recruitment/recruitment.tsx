import useI18n from '@/i18n/useI18N';
import React, { useEffect } from 'react';
import Style from './recruitment.module.scss';
import { Breadcrumb, Col, Row, Image, Carousel, Input, Form } from 'antd';
import {
  ArrowRightOutlined,
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Reveal } from '../commons/reveal';
import 'sweetalert2/src/sweetalert2.scss';
import { ICreateCustomerCare, IFormValues } from './interface';
const { TextArea } = Input;
import Link from 'next/link';
import { ROUTERS } from '@/constant/router';
import { useMutation, useQuery } from 'react-query';
import { createCustomerCare, getListNews, getListProduct } from './fetcher';
import { errorToast, successToast } from '@/hook/toast';
import { API_MESSAGE } from '@/constant/message';
import { API_NEWS, API_PRODUCT } from '@/fetcherAxios/endpoint';

const initialValue = {
  fullName: '',
  phoneNumber: '',
  email: '',
  customerCareContent: '',
};

export default function RecruitmentPage() {
  const { translate: translateCommon } = useI18n('common');
  const { translate: translateRecruitment } = useI18n('recruitment');
  const [form] = Form.useForm();
  const product = useQuery({
    queryKey: [API_PRODUCT.GET_ALL_PRODUCT],
    queryFn: () => getListProduct(),
  });
  const news = useQuery({
    queryKey: [API_NEWS.GET_ALL_NEWS],
    queryFn: () => getListNews(),
  });

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
                  {news.data?.data.map((newsData, index) => (
                    <Link
                      href={ROUTERS.NEWS(newsData.newsID)}
                      className={Style.lastestPostContent}
                      key={index}
                    >
                      <p>{newsData.newsTitle}</p>
                      <div className={Style.lastestPostContent}></div>
                    </Link>
                  )) || []}
                </div>
                <div className={Style.recruimentBodyLastestPost}>
                  <h1>{translateRecruitment('productCagories')}</h1>
                  {product.data?.data.map((productData, index) => (
                    <Link
                      href={ROUTERS.PRODUCTS_DETAIL(productData.productID)}
                      className={Style.lastestPostContent}
                      key={index}
                    >
                      <p>{productData.productName}</p>
                      <div className={Style.lastestPostContent}></div>
                    </Link>
                  )) || []}
                </div>
                <div className={Style.recruimentBodyLastestPost}>
                  <h1>{translateRecruitment('categories')}</h1>
                  <Link
                    href={ROUTERS.NEWS('1')}
                    className={Style.lastestPostContent}
                  >
                    <p>{translateCommon('news')}</p>
                    <div className={Style.lastestPostContent}></div>
                  </Link>
                  <Link
                    href={ROUTERS.RECRUITMENT}
                    className={Style.lastestPostContent}
                  >
                    <p>{translateRecruitment('event')}</p>
                    <div className={Style.lastestPostContent}></div>
                  </Link>
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
            arrows
            {...settings}
            slidesToShow={4}
            className={Style.productCarousel}
            autoplay
            responsive={carouselResponsiveSettings}
            infinite={false}
          >
            {product.data?.data.map((productData, index) => (
              <Link
                href={ROUTERS.PRODUCTS_DETAIL(productData.productID)}
                className={Style.productCard}
                key={index}
              >
                <div className={Style.productCardImage}>
                  <img src={productData.imageProduct} alt="" />
                </div>
                <h1>{productData.productName}</h1>
                <h4>{productData.weightProduct}</h4>
              </Link>
            )) || []}
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
                    placeholder={translateRecruitment('firstAndLastName')}
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
                    placeholder={translateRecruitment('phoneNumber')}
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
                    placeholder={translateRecruitment('email')}
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
                    placeholder={translateRecruitment(
                      'informationNeededSupport'
                    )}
                  />
                </Form.Item>

                <Form.Item className={Style.dflex}>
                  <div className={Style.btn_see_more}>
                    <button type="submit" className={`${Style.dflex}`}>
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
