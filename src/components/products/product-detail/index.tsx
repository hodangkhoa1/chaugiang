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
} from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import productDetails from '../../../data/productDetail.json';
import { PrivateLabelServicesProductData } from './interfaceAlsoProduct';
import { ROUTERS } from '@/constant/router';
import { Reveal } from '@/components/commons/reveal';
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

const ProductDetailPage = () => {
  const { translate: translateProductDetail } = useI18n('productDetail');
  const { translate: translateCommon } = useI18n('common');
  const router = useRouter();
  const { id } = router.query;
  const productDetailData = getItemById(id as string);

  function getItemById(id: string) {
    return productDetails.find((item: { id: string }) => item.id === id);
  }

  const [privateLabelServicesProductData, setPrivateLabelServicesProductData] =
    useState<PrivateLabelServicesProductData[]>();

  useEffect(() => {
    import('../../../data/productInPrivateLabelService.json')
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
                title: productDetailData?.name,
              },
            ]}
          />
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.productElement}>
          <Row gutter={100}>
            <Col lg={8} span={24}>
              <div className={`${Style.productElementLeft}`}>
                <div className={Style.productImg}>
                  <img src={productDetailData?.image} alt="" />
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

            <Col lg={16} span={24}>
              <div className={`${Style.productElementRight} ${Style.dflex}`}>
                <div className={Style.productElementTitle}>
                  <h3>{productDetailData?.name}</h3>
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
                    <p>{productDetailData?.manufacturedBy}</p>
                  </div>
                  <div
                    className={`${Style.productElementContent} ${Style.dflex}`}
                  >
                    <p>Packing Specification:</p>
                    <p>{productDetailData?.packingSpecification}</p>
                  </div>
                  <div
                    className={`${Style.productElementContent} ${Style.dflex}`}
                  >
                    <p>Certificate:</p>
                    <p>{productDetailData?.certificate}</p>
                  </div>
                  <div
                    className={`${Style.productElementContent} ${Style.dflex}`}
                  >
                    <p>MOQ:</p>
                    <p>{productDetailData?.mOQ}</p>
                  </div>
                  <div
                    className={`${Style.productElementContent} ${Style.dflex}`}
                  >
                    <p>Shelflife:</p>
                    <p>{productDetailData?.shelflife}</p>
                  </div>
                  <div
                    className={`${Style.productElementContent} ${Style.dflex}`}
                  >
                    <p>Volume:</p>
                    <p>{productDetailData?.volume}</p>
                  </div>
                  <div
                    className={`${Style.productElementContent} ${Style.dflex}`}
                  >
                    <p>Payment:</p>
                    <p>{productDetailData?.payment}</p>
                  </div>
                  <div
                    className={`${Style.productElementContent} ${Style.dflex}`}
                  >
                    <p>Selling Points:</p>
                    <p>{productDetailData?.sellingPoints}</p>
                  </div>
                  <div
                    className={`${Style.productElementContent} ${Style.dflex}`}
                  >
                    <p>Place of Origin:</p>
                    <p>{productDetailData?.placeOfOrigin}</p>
                  </div>
                </div>

                <div className={`${Style.dflex} ${Style.requestBtn}`}>
                  <button className={Style.dflex}>
                    <DeliveredProcedureOutlined className={Style.iconButton} />
                    <p>Request free samples now</p>
                  </button>
                </div>

                <div className={`${Style.dflex} ${Style.productElementNote}`}>
                  <p>{productDetailData?.note1}</p>
                  <p>{productDetailData?.note2}</p>
                  <p>{productDetailData?.note3}</p>
                </div>

                <div
                  className={`${Style.dflex} ${Style.productElementBottomContent}`}
                >
                  <p>{productDetailData?.bottomContent1}</p>
                  <p>{productDetailData?.bottomContent2}</p>
                  <p>{productDetailData?.bottomContent3}</p>
                  <p>{productDetailData?.bottomContent4}</p>
                  <p>{productDetailData?.bottomContent5}</p>
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
            <Col lg={6} span={24}>
              <Image
                src="/images/introduce/our_factory_3.jpg"
                alt="logo"
                width={300}
                height={250}
                preview={true}
              />
            </Col>
            <Col lg={6} span={24}>
              <Image
                src="/images/introduce/our_factory_4.jpg"
                alt="logo"
                width={300}
                height={250}
                preview={true}
              />
            </Col>
            <Col lg={6} span={24}>
              <Image
                src="/images/introduce/our_factory_5.jpg"
                alt="logo"
                width={300}
                height={250}
                preview={true}
              />
            </Col>
            <Col lg={6} span={24}>
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
                    placeholder={translateProductDetail('firstAndLastName')}
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
                  <Input placeholder={translateProductDetail('phoneNumber')} />
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
                  <Input placeholder={translateProductDetail('email')} />
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
                    placeholder={translateProductDetail(
                      'informationNeededSupport'
                    )}
                  />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <div className={Style.btn_see_more}>
                    <button className={`${Style.dflex}`}>
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
