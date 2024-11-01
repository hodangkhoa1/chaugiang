import React, { useEffect } from 'react';
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
import { Carousel, Col, Row, Image, Form, Input } from 'antd';
import Link from 'next/link';
import { ROUTERS } from '@/constant/router';
import { ICreateCustomerCare, IFormValues } from './interface';
import useI18n from '@/i18n/useI18N';
import { Reveal } from '../commons/reveal';
import 'sweetalert2/src/sweetalert2.scss';
import {
  API_BANNER,
  API_CERTIFICATION,
  API_NEWS,
  API_PRODUCT,
  API_TYPE_PRODUCT,
} from '@/fetcherAxios/endpoint';
import { useMutation, useQuery } from 'react-query';
import {
  createCustomerCare,
  getListBanner,
  getListCertification,
  getListNews,
  getListProduct,
  getListProductWithType,
} from './fetcher';
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { errorToast, successToast } from '@/hook/toast';
import { API_MESSAGE } from '@/constant/message';
const { TextArea } = Input;

const initialValue = {
  fullName: '',
  phoneNumber: '',
  email: '',
  customerCareContent: '',
};

export default function HomePage() {
  const { translate: translateHome } = useI18n('home');
  const [form] = Form.useForm();

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

  const banner = useQuery({
    queryKey: [API_BANNER.GET_ALL_BANNER],
    queryFn: () => getListBanner(),
  });
  const certification = useQuery({
    queryKey: [API_CERTIFICATION.GET_ALL_CERTIFICATION],
    queryFn: () => getListCertification(),
  });
  const product = useQuery({
    queryKey: [API_PRODUCT.GET_ALL_PRODUCT],
    queryFn: () => getListProduct(),
  });
  const typeProduct = useQuery({
    queryKey: [API_TYPE_PRODUCT.GET_ALL_TYPE_PRODUCT_WITH_NO_AUTHEN],
    queryFn: () => getListProductWithType(),
  });
  const news = useQuery({
    queryKey: [API_NEWS.GET_ALL_NEWS],
    queryFn: () => getListNews(),
  });

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
        {banner.data?.data.map((bannerData, index) => (
          <SwiperSlide key={index} className={Style.swiperSlide}>
            <div className={Style.swiperSlideBox}>
              <img src={bannerData.bannerImage} alt={`banner${index}`} />
            </div>
          </SwiperSlide>
        )) || []}
      </Swiper>

      <Reveal>
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
      </Reveal>

      <Reveal>
        <div className={Style.helloSummer}></div>
      </Reveal>

      <Reveal>
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
            infinite={false}
          >
            {product.data?.data.map((productData, index) => (
              <Link
                key={index}
                href={ROUTERS.PRODUCTS_DETAIL(productData.productID)}
                className={Style.productCard}
              >
                <div className={Style.productCardImage}>
                  <img src={productData.imageProduct} alt={`product${index}`} />
                </div>
                <h1>{productData.productName}</h1>
                <h4>{productData.weightProduct}</h4>
              </Link>
            )) || []}
          </Carousel>
        </div>
      </Reveal>

      {typeProduct.data?.data.map((typeProductData, index) => (
        <Reveal key={index}>
          <div className={Style.backgroundTypeProduct}>
            <Image
              className={Style.orderNowBackground}
              src={typeProductData.imageProduct.toString()}
              alt="typeProduct"
              preview={false}
            />

            <div className={Style.bestSelling}>
              <Row className={Style.bestSellingTop}>
                <Col md={24} lg={9} span={24}>
                  <div className={Style.bestSellingTop__left}>
                    <div className={Style.left__cover}>
                      <div className={Style.images}>
                        <img src="images/products/nho-xanh.png" alt="" />
                      </div>
                      <div className={Style.coverTitle}>
                        <div className={Style.title}>
                          <h2>{typeProductData.typeProductName}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md={24} lg={15} span={24}>
                  <div className={Style.bestSellingTop__right}>
                    <div className={Style.right__cover}>
                      <div className={Style.menuTop}>
                        {typeProductData.listProduct.map(
                          (productData, index) => (
                            <div key={index} className={Style.itemLink}>
                              <Link href={productData.productID}>
                                {productData.productName}
                              </Link>
                            </div>
                          )
                        ) || []}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

              <div key={index} className={Style.bestSelling}>
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

                    <Col md={1} lg={18} span={24} style={{ height: '100%' }}>
                      <div className={Style.bestSellingBottom__right}>
                        <div className={Style.carousel}>
                          <Carousel
                            slidesToShow={4}
                            className={Style.bestSellingCarousel}
                            autoplay
                            arrows
                            {...settings}
                            responsive={carouselResponsiveSettings}
                            infinite={false}
                          >
                            {typeProductData.listProduct.map(
                              (productData, index) => (
                                <Link
                                  href={ROUTERS.PRODUCTS_DETAIL(
                                    productData.productID
                                  )}
                                  className={Style.bestSellingCard}
                                  key={index}
                                >
                                  <div className={Style.bestSellingCardImage}>
                                    <img
                                      src={productData.imageProduct}
                                      alt=""
                                    />
                                  </div>
                                  <h1>{productData.productName}</h1>
                                  <h1>{productData.weightProduct}</h1>
                                </Link>
                              )
                            ) || []}
                          </Carousel>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      )) || []}

      <Reveal>
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
              <Carousel
                arrows
                {...settings}
                slidesToShow={4}
                className={Style.newsCarousel}
                autoplay
                responsive={carouselResponsiveSettings}
                infinite={false}
              >
                {news.data?.data.map((newsData, index) => (
                  <div
                    key={index}
                    className={`${Style.dflex} ${Style.newsItem}`}
                  >
                    <div className={Style.imageTop}>
                      <img src={newsData.newsImage} alt="" />
                    </div>
                    <div className={Style.contentCover}>
                      <div className={Style.content}>
                        <div className={Style.contentTitle}>
                          <h2>{newsData.newsTitle}</h2>
                        </div>
                      </div>

                      <div className={Style.btn_see_more}>
                        <Link
                          href={ROUTERS.NEWS(newsData.newsID)}
                          className={`${Style.dflex} ${Style.btn_see_more_link}`}
                        >
                          <p>{translateHome('seeMore')}</p>
                          <ArrowRightOutlined className={Style.iconBtn} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )) || []}
              </Carousel>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
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
                  <h1>{translateHome('customerInformation')}</h1>
                </div>
              </div>
            </div>

            <div className={Style.customerInformationCenter}>
              <p>{translateHome('customerInformationPleaseProvide')}</p>
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
                    placeholder={translateHome('firstAndLastName')}
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
                    placeholder={translateHome('phoneNumber')}
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
                    placeholder={translateHome('email')}
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
                    placeholder={translateHome('informationNeededSupport')}
                  />
                </Form.Item>

                <Form.Item className={Style.dflex}>
                  <div className={Style.btn_see_more}>
                    <button type="submit" className={`${Style.dflex}`}>
                      <p>{translateHome('sendInformation')}</p>
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
