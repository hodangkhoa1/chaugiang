import useI18n from '@/i18n/useI18N';
import React, { useEffect, useState } from 'react';
import Style from './products-detail.module.scss';
import { Breadcrumb, Carousel, Col, Row, Image, Input, Form } from 'antd';
import {
  ArrowRightOutlined,
  DeliveredProcedureOutlined,
  StarFilled,
  RightOutlined,
  LeftOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTERS } from '@/constant/router';
import { Reveal } from '@/components/commons/reveal';
import 'sweetalert2/src/sweetalert2.scss';
import { useMutation, useQuery } from 'react-query';
import { ICreateCustomerCare, IFormValues } from './interface';
import {
  createCustomerCare,
  getListProduct,
  getProductDetail,
} from './fetcher';
import { errorToast, successToast } from '@/hook/toast';
import { API_MESSAGE } from '@/constant/message';
import { API_PRODUCT } from '@/fetcherAxios/endpoint';
const { TextArea } = Input;

const initialValue = {
  fullName: '',
  phoneNumber: '',
  email: '',
  customerCareContent: '',
};

const ProductDetailPage = () => {
  const { translate: translateProductDetail } = useI18n('productDetail');
  const { translate: translateCommon } = useI18n('common');
  const router = useRouter();
  const { id } = router.query;
  const [idQuery, setIdQuery] = useState<string>();
  const [form] = Form.useForm();

  useEffect(() => {
    if (!id) return;
    setIdQuery(id as string);
  }, [id, router]);

  const productDetail = useQuery({
    queryKey: [API_PRODUCT.GET_PRODUCT_BY_ID, idQuery],
    queryFn: () => getProductDetail(idQuery as string),
    enabled: idQuery !== undefined,
  });

  const product = useQuery({
    queryKey: [API_PRODUCT.GET_ALL_PRODUCT],
    queryFn: () => getListProduct(),
  });

  useEffect(() => {
    if (productDetail.data?.status === 'false') {
      router.push(ROUTERS.HOME);
    }
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
        <div className={`${Style.product}`}>
          <div className={`${Style.dflex} ${Style.productTopCover}`}>
            <div className={Style.productTitle}>
              <h1>{translateProductDetail('product')}</h1>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.introduce}>
          <Breadcrumb
            className={Style.introduceBreadcrumb}
            items={[
              {
                title: `${translateCommon('home')}`,
              },
              {
                title: `${translateProductDetail('product')}`,
              },
              {
                title: productDetail.data?.data.productName,
              },
            ]}
          />
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.productElement}>
          <Row gutter={100}>
            <Col lg={8} span={24} className={Style.productElementCol}>
              <div className={`${Style.productElementLeft}`}>
                <div className={Style.productImg}>
                  <img src={productDetail.data?.data.imageProduct} alt="" />
                </div>

                <div className={`${Style.dflex} ${Style.productView}`}>
                  <p>
                    <span>84</span> People watching this product now!
                  </p>
                </div>

                <div className={`${Style.dflex} ${Style.requestBtn}`}>
                  <button className={Style.dflex}>
                    <DeliveredProcedureOutlined className={Style.iconButton} />
                    <p>Request free samples now</p>
                  </button>
                </div>
              </div>
            </Col>

            <Col lg={16} span={24} className={Style.productElementCol}>
              <div className={`${Style.productElementRight} ${Style.dflex}`}>
                <div className={Style.productElementTitle}>
                  <h3>{productDetail.data?.data.productName}</h3>
                </div>

                <div className={`${Style.dflex} ${Style.productLinkImg}`}>
                  <Link href="#" className={Style.mediaLink}>
                    <img src="/images/zalo.png" alt="Zalo" />
                  </Link>

                  <Link
                    href="https://www.facebook.com/chaugiangfood.com.vn"
                    className={Style.mediaLink}
                  >
                    <img src="/images/fb.png" alt="Facebook" />
                  </Link>

                  <Link href="#" className={Style.mediaLink}>
                    <img src="/images/call.png" alt="Call" />
                  </Link>

                  <Link
                    href="https://www.youtube.com/@chaugiang3672"
                    className={Style.mediaLink}
                  >
                    <img src="/images/youtobe.png" alt="Youtube" />
                  </Link>
                </div>

                <div className={`${Style.dflex} ${Style.productStars}`}>
                  <StarFilled className={Style.productStarsIcon} />
                  <StarFilled className={Style.productStarsIcon} />
                  <StarFilled className={Style.productStarsIcon} />
                  <StarFilled className={Style.productStarsIcon} />
                  <StarFilled className={Style.productStarsIcon} />
                </div>

                <div className={Style.productElementTable}>
                  <div
                    className={`${Style.productElementContent} ${Style.dflex}`}
                  >
                    <p>Manfactured by:</p>
                    <p>{productDetail.data?.data.manufacturedBy}</p>
                  </div>
                  <div
                    className={`${Style.productElementContent} ${Style.dflex}`}
                  >
                    <p>Packing Specification:</p>
                    <p>{productDetail.data?.data.packingSpecification}</p>
                  </div>
                  <div
                    className={`${Style.productElementContent} ${Style.dflex}`}
                  >
                    <p>Certificate:</p>
                    <p>{productDetail.data?.data.certificateProduct}</p>
                  </div>
                  <div
                    className={`${Style.productElementContent} ${Style.dflex}`}
                  >
                    <p>MOQ:</p>
                    <p>{productDetail.data?.data.moq}</p>
                  </div>
                  <div
                    className={`${Style.productElementContent} ${Style.dflex}`}
                  >
                    <p>Shelflife:</p>
                    <p>{productDetail.data?.data.shelflife}</p>
                  </div>
                  <div
                    className={`${Style.productElementContent} ${Style.dflex}`}
                  >
                    <p>Volume:</p>
                    <p>{productDetail.data?.data.volume}</p>
                  </div>
                  <div
                    className={`${Style.productElementContent} ${Style.dflex}`}
                  >
                    <p>Payment:</p>
                    <p>{productDetail.data?.data.payment}</p>
                  </div>
                  <div
                    className={`${Style.productElementContent} ${Style.dflex}`}
                  >
                    <p>Selling Points:</p>
                    <p>{productDetail.data?.data.sellingPoints}</p>
                  </div>
                  <div
                    className={`${Style.productElementContent} ${Style.dflex}`}
                  >
                    <p>Place of Origin:</p>
                    <p>{productDetail.data?.data.placeOfOrigin}</p>
                  </div>
                </div>

                <div className={`${Style.dflex} ${Style.requestBtn}`}>
                  <button className={Style.dflex}>
                    <DeliveredProcedureOutlined className={Style.iconButton} />
                    <p>Request free samples now</p>
                  </button>
                </div>

                <div className={`${Style.dflex} ${Style.productElementNote}`}>
                  <p>{productDetail.data?.data.note1}</p>
                  <p>{productDetail.data?.data.note2}</p>
                  <p>{productDetail.data?.data.note3}</p>
                </div>

                <div
                  className={`${Style.dflex} ${Style.productElementBottomContent}`}
                >
                  <p>{productDetail.data?.data.bottomContent1}</p>
                  <p>{productDetail.data?.data.bottomContent2}</p>
                  <p>{productDetail.data?.data.bottomContent3}</p>
                  <p>{productDetail.data?.data.bottomContent4}</p>
                  <p>{productDetail.data?.data.bottomContent5}</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.productDescription}>
          <Row>
            <Col lg={24} span={24}>
              <h1>Introduction</h1>
            </Col>
            <Col lg={24} span={24}>
              <p>
                Chan Giang Food Processing Trade Co., Ltd is a 100% capital
                private enterprise in Vietnam with more than 33 years of
                experience in the field of production and processing of
                beverages with domestic and export brands, has achieved many
                acknowledge and awards in Vietnam and worldwide also.
              </p>
            </Col>
          </Row>

          <Row style={{ marginTop: '40px' }}>
            <Col lg={24} span={24}>
              <h1>Category</h1>
            </Col>
            <Col lg={24} span={24}>
              <p>
                CG Food specializes in processing Coconut water, Sparkling Fruit
                Juice Drink, Planted Milk Drink, Aloe Vera, Coffee and Energy
                Drink
              </p>
            </Col>
          </Row>

          <Row style={{ marginTop: '40px' }}>
            <Col lg={24} span={24}>
              <h1>Our Factory</h1>
            </Col>
            <Col lg={24} span={24}>
              <p>
                Since 2017, Chau Giang Food Processing Trade Co., Ltd has
                expanded production lines, improve production processes, enhance
                product quality towards promoting exports to markets worldwide,
                and develop domestic demand also. Chau Giang’s products have a
                modern design, high quality, and reasonable prices in accordance
                with the tastes of consumers. In addition, Chau Giang has been
                processing beverage products for supermarkets, retail, and big
                brands worldwide.
              </p>
            </Col>
            <Col
              md={24}
              lg={6}
              span={24}
              className={Style.productDescriptionCol}
            >
              <Image
                src="/images/introduce/our_factory_3.jpg"
                alt="logo"
                width={300}
                height={250}
                preview={true}
              />
            </Col>
            <Col
              md={24}
              lg={6}
              span={24}
              className={Style.productDescriptionCol}
            >
              <Image
                src="/images/introduce/our_factory_4.jpg"
                alt="logo"
                width={300}
                height={250}
                preview={true}
              />
            </Col>
            <Col
              md={24}
              lg={6}
              span={24}
              className={Style.productDescriptionCol}
            >
              <Image
                src="/images/introduce/our_factory_5.jpg"
                alt="logo"
                width={300}
                height={250}
                preview={true}
              />
            </Col>
            <Col
              md={24}
              lg={6}
              span={24}
              className={Style.productDescriptionCol}
            >
              <Image
                src="/images/introduce/our_factory_2.jpg"
                alt="logo"
                width={300}
                height={250}
                preview={true}
              />
            </Col>
          </Row>
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.affiliateProduct}>
          <div className={`${Style.dflex} ${Style.affiliateProductTopCover}`}>
            <div className={Style.affiliateProductTitle}>
              <h1>{translateProductDetail('youMayAlsoLike')}</h1>
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
                  <h1>{translateProductDetail('whyChooseUs')}</h1>
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
                    <h2>{translateProductDetail('hightQuality')}</h2>
                    <p>{translateProductDetail('hightQualityProduct')}</p>
                  </div>
                </Col>

                <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
                      <img src="/images/why_choose_us/Untitled-29.png" alt="" />
                    </div>
                    <h2>{translateProductDetail('fastDelivery')}</h2>
                    <p>{translateProductDetail('fastDeliveryInOrder')}</p>
                  </div>
                </Col>

                <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
                      <img src="/images/why_choose_us/Untitled-30.png" alt="" />
                    </div>
                    <h2>{translateProductDetail('flexiblePackaging')}</h2>
                    <p>
                      {translateProductDetail(
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
                    <h2>{translateProductDetail('freeSample')}</h2>
                    <p>{translateProductDetail('freeSampleBecause')}</p>
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
                  <h1>{translateProductDetail('customerInformation')}</h1>
                </div>
              </div>
            </div>

            <div className={Style.customerInformationCenter}>
              <p>
                {translateProductDetail('customerInformationPleaseProvide')}
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
                    placeholder={translateProductDetail('firstAndLastName')}
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
                    placeholder={translateProductDetail('phoneNumber')}
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
                    placeholder={translateProductDetail('email')}
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
                    placeholder={translateProductDetail(
                      'informationNeededSupport'
                    )}
                  />
                </Form.Item>

                <Form.Item className={Style.dflex}>
                  <div className={Style.btn_see_more}>
                    <button type="submit" className={`${Style.dflex}`}>
                      <p>{translateProductDetail('sendInformation')}</p>
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
};

export default ProductDetailPage;
