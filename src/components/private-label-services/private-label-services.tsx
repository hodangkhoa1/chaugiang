import useI18n from '@/i18n/useI18N';
import React, { useEffect } from 'react';
import Style from './private-label-services.module.scss';
import { Breadcrumb, Carousel, Col, Image, Row, Input, Form } from 'antd';
import {
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { ICreateCustomerCare, IFormValues } from './interface';
import Link from 'next/link';
import { ROUTERS } from '@/constant/router';
import { Reveal } from '../commons/reveal';
import 'sweetalert2/src/sweetalert2.scss';
const { TextArea } = Input;
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { useMutation, useQuery } from 'react-query';
import { createCustomerCare, getListProduct } from './fetcher';
import { errorToast, successToast } from '@/hook/toast';
import { API_MESSAGE } from '@/constant/message';
import { API_PRODUCT } from '@/fetcherAxios/endpoint';

const initialValue = {
  fullName: '',
  phoneNumber: '',
  email: '',
  customerCareContent: '',
};

export default function PrivateLabelServicesPage() {
  const { translate: translateCommon } = useI18n('common');
  const { translate: translatePrivateLabelServices } = useI18n(
    'privateLabelServices'
  );
  const [form] = Form.useForm();

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const product = useQuery({
    queryKey: [API_PRODUCT.GET_ALL_PRODUCT],
    queryFn: () => getListProduct(),
  });

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
    <div>
      <Reveal>
        <div className={Style.headerBackground}></div>
      </Reveal>

      <Reveal>
        <div className={Style.introduce}>
          <div className={`${Style.dflex} ${Style.introduceTopCover}`}>
            <div className={Style.introduceTitle}>
              <h1>{translatePrivateLabelServices('ourServices')}</h1>
            </div>
          </div>

          <Breadcrumb
            className={Style.introduceBreadcrumb}
            items={[
              {
                title: `${translateCommon('home')}`,
              },
              {
                title: `${translatePrivateLabelServices('ourServices')}`,
              },
              {
                title: `${translateCommon('privateLabelServices')}`,
              },
            ]}
          />
        </div>
      </Reveal>

      <Reveal>
        <div className={`${Style.dflex} ${Style.introducePackagingDesigner}`}>
          <div
            className={`${Style.dflex} ${Style.introducePackagingDesignerTopCover}`}
          >
            <div className={Style.introducePackagingDesignerTitle}>
              <h1>{translatePrivateLabelServices('privateLabelYour')}</h1>
            </div>
          </div>

          <div className={Style.introducePackagingDesignerCenter}>
            <p>{translatePrivateLabelServices('privateLabelYour1')}</p>
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
      </Reveal>

      <Reveal>
        <div className={`${Style.stepProduct}`}>
          <Row>
            <Col md={12} lg={4} span={24}>
              <p>{translatePrivateLabelServices('brandDevelopment')}</p>
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
              <p>{translatePrivateLabelServices('production')}</p>
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
              <p>{translatePrivateLabelServices('labeling')}</p>
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
              <p>{translatePrivateLabelServices('packaging')}</p>
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
      </Reveal>

      <Reveal>
        <div className={Style.capacityList}>
          <Row style={{ height: '100%' }}>
            <Col md={12} lg={7} span={24}>
              <div className={`${Style.dflex} ${Style.capacityListLeft}`}>
                <p>{translatePrivateLabelServices('250SleekCan')}</p>
                <p>{translatePrivateLabelServices('330SleekCan')}</p>
                <p>{translatePrivateLabelServices('330StandardCan')}</p>
                <p>{translatePrivateLabelServices('355SleekCan')}</p>
                <p>{translatePrivateLabelServices('355Standard')}</p>
                <p>{translatePrivateLabelServices('500mlSleek')}</p>
                <button className={Style.capacityListButton}>
                  {translatePrivateLabelServices('alumniumCan')}
                </button>
              </div>
            </Col>
            <Col md={12} lg={7} span={24}>
              <div className={`${Style.dflex} ${Style.capacityListLeft}`}>
                <p>320ml</p>
                <p>330ml</p>
                <p>350ml</p>
                <p>500ml</p>
                <button className={Style.capacityListButton}>
                  {translatePrivateLabelServices('petBottle')}
                </button>
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
      </Reveal>

      <Reveal>
        <div className={Style.listProduct}></div>
      </Reveal>

      <Reveal>
        <div className={Style.affiliateProduct}>
          <div className={`${Style.dflex} ${Style.affiliateProductTopCover}`}>
            <div className={Style.affiliateProductTitle}>
              <h1>{translatePrivateLabelServices('youMayAlsoLike')}</h1>
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
        <div className={`${Style.whyChooseUs} ${Style.aboutUs}`}>
          <div className={`${Style.aboutUsCover} ${Style.whyChooseUsCover}`}>
            <div className={Style.aboutUsTop}>
              <div className={`${Style.dflex} ${Style.whyChooseUsTopCover}`}>
                <div className={`${Style.dflex} ${Style.whyChooseUsTitle}`}>
                  <h1>{translatePrivateLabelServices('whyChooseUs')}</h1>
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
                    <h2>{translatePrivateLabelServices('hightQuality')}</h2>
                    <p>
                      {translatePrivateLabelServices('hightQualityProduct')}
                    </p>
                  </div>
                </Col>

                <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
                      <img src="/images/why_choose_us/Untitled-29.png" alt="" />
                    </div>
                    <h2>{translatePrivateLabelServices('fastDelivery')}</h2>
                    <p>
                      {translatePrivateLabelServices('fastDeliveryInOrder')}
                    </p>
                  </div>
                </Col>

                <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
                      <img src="/images/why_choose_us/Untitled-30.png" alt="" />
                    </div>
                    <h2>
                      {translatePrivateLabelServices('flexiblePackaging')}
                    </h2>
                    <p>
                      {translatePrivateLabelServices(
                        'flexiblePackagingWeConsistently'
                      )}
                    </p>
                  </div>
                </Col>

                <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
                      <img src="/images/why_choose_us/Untitled-31.png" alt="" />
                    </div>
                    <h2>{translatePrivateLabelServices('freeSample')}</h2>
                    <p>{translatePrivateLabelServices('freeSampleBecause')}</p>
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
                  <h1>
                    {translatePrivateLabelServices('customerInformation')}
                  </h1>
                </div>
              </div>
            </div>

            <div className={Style.customerInformationCenter}>
              <p>
                {translatePrivateLabelServices(
                  'customerInformationPleaseProvide'
                )}
              </p>
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
                    placeholder={translatePrivateLabelServices(
                      'firstAndLastName'
                    )}
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
                    placeholder={translatePrivateLabelServices('phoneNumber')}
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
                    placeholder={translatePrivateLabelServices('email')}
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
                    placeholder={translatePrivateLabelServices(
                      'informationNeededSupport'
                    )}
                  />
                </Form.Item>

                <Form.Item className={Style.dflex}>
                  <div className={Style.btn_see_more}>
                    <button type="submit" className={`${Style.dflex}`}>
                      <p>{translatePrivateLabelServices('sendInformation')}</p>
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
