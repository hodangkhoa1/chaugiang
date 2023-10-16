import useI18n from '@/i18n/useI18N';
import React, { useEffect, useState } from 'react';
import Style from './products.module.scss';
import { Col, Row, Image, Breadcrumb, Input, Form } from 'antd';
import { ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';
import { ROUTERS } from '@/constant/router';
import { ProductsData } from './interface';
import Link from 'next/link';
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

export default function ProductsPage() {
  const { translate: translateProducts } = useI18n('products');
  const { translate: translateCommon } = useI18n('common');
  const [productsData, setProductsData] = useState<ProductsData>();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    import('../../data/products.json')
      .then((response) => {
        const data: ProductsData = response.default;
        setProductsData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Reveal>
        <div className={Style.headerBackground}></div>
      </Reveal>

      <Reveal>
        <div className={`${Style.product}`}>
          <div className={`${Style.dflex} ${Style.productTopCover}`}>
            <div className={Style.productTitle}>
              <h1>{translateCommon('products')}</h1>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.productHome}>
          <Row>
            <Col md={6} lg={6} span={24}>
              <div className={Style.productHomeLeft}>
                <Breadcrumb
                  className={Style.productHomeBreadcrumb}
                  items={[
                    {
                      title: `${translateCommon('home')}`,
                    },
                    {
                      title: `${translateCommon('products')}`,
                    },
                  ]}
                />
                <div className={Style.productBodySearch}>
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
                <div className={Style.portfolio}>
                  <h1>{translateProducts('productPortfolio')}</h1>
                </div>
                <Link href="#">
                  <div className={Style.productBodyDetail}>
                    <p>Coconut water</p>
                    <div className={Style.productBodyDetailLine}></div>
                  </div>
                </Link>
                <Link href="#">
                  <div className={Style.productBodyDetail}>
                    <p>Fruit Juice Drink</p>
                    <div className={Style.productBodyDetailLine}></div>
                  </div>
                </Link>
                <Link href="#">
                  <div className={Style.productBodyDetail}>
                    <p>Milk Drink</p>
                    <div className={Style.productBodyDetailLine}></div>
                  </div>
                </Link>
                <Link href="#">
                  <div className={Style.productBodyDetail}>
                    <p>Sparkling Juice Drink</p>
                    <div className={Style.productBodyDetailLine}></div>
                  </div>
                </Link>
                <Link href="#">
                  <div className={Style.productBodyDetail}>
                    <p>Coffee</p>
                    <div className={Style.productBodyDetailLine}></div>
                  </div>
                </Link>
                <Link href="#">
                  <div className={Style.productBodyDetail}>
                    <p>Energy Drink</p>
                    <div className={Style.productBodyDetailLine}></div>
                  </div>
                </Link>
                <Link href="#">
                  <div className={Style.productBodyDetail}>
                    <p>PET Aloe Vera Drink</p>
                    <div className={Style.productBodyDetailLine}></div>
                  </div>
                </Link>
              </div>
            </Col>
            <Col md={18} lg={18} span={24}>
              <Image
                src="/images/products/productHome.png"
                alt="logo"
                width="100%"
                height={500}
                preview={false}
              />
            </Col>
          </Row>
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.listProduct}>
          <div className={Style.listProductBottom}>
            <Row
              gutter={100}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Col lg={6} span={24}>
                <div className={Style.listProductBottom__left}>
                  <div className={Style.images}>
                    <img src="images/products/6.jpg" alt="" />
                  </div>
                </div>
              </Col>

              <Col lg={18} span={24}>
                <Row gutter={100}>
                  {productsData?.milk.map((product, index) => (
                    <Col
                      lg={6}
                      span={24}
                      className={Style.listProductCol}
                      key={index}
                    >
                      <Link
                        href={ROUTERS.PRODUCTS_DETAIL(product.id.toString())}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div className={Style.listProductCard}>
                          <div className={Style.listProductCardImage}>
                            <img
                              src={
                                index === hoveredIndex
                                  ? product.hover
                                  : product.image
                              }
                              alt={product.title}
                            />
                          </div>
                          <h1>{product.title}</h1>
                          <h1>{product.subTitle}</h1>
                        </div>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.listProduct}>
          <div className={Style.listProductBottom}>
            <Row
              gutter={100}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Col lg={6} span={24}>
                <div className={Style.listProductBottom__left}>
                  <div className={Style.images}>
                    <img src="images/products/11.png" alt="" />
                  </div>
                </div>
              </Col>

              <Col lg={18} span={24}>
                <Row gutter={100}>
                  {productsData?.juice.map((product, index) => (
                    <Col
                      lg={6}
                      span={24}
                      className={Style.listProductCol}
                      key={index}
                    >
                      <Link
                        href={ROUTERS.PRODUCTS_DETAIL(product.id.toString())}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div className={Style.listProductCard}>
                          <div className={Style.listProductCardImage}>
                            <img
                              src={
                                index === hoveredIndex
                                  ? product.hover
                                  : product.image
                              }
                              alt={product.title}
                            />
                          </div>
                          <h1>{product.title}</h1>
                          <h1>{product.subTitle}</h1>
                        </div>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.listProduct}>
          <div className={Style.listProductBottom}>
            <Row
              gutter={100}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Col lg={6} span={24}>
                <div className={Style.listProductBottom__left}>
                  <div className={Style.images}>
                    <img src="images/products/16.jpg" alt="" />
                  </div>
                </div>
              </Col>

              <Col lg={18} span={24}>
                <Row gutter={100}>
                  {productsData?.aloeVera.map((product, index) => (
                    <Col
                      lg={6}
                      span={24}
                      className={Style.listProductCol}
                      key={index}
                    >
                      <Link
                        href={ROUTERS.PRODUCTS_DETAIL(product.id.toString())}
                      >
                        <div className={Style.listProductCard}>
                          <div className={Style.listProductCardImage}>
                            <img src={product.image} alt={product.title} />
                          </div>
                          <h1>{product.title}</h1>
                          <h1>{product.subTitle}</h1>
                        </div>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.listProduct}>
          <div className={Style.listProductBottom}>
            <Row
              gutter={100}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Col lg={6} span={24}>
                <div className={Style.listProductBottom__left}>
                  <div className={Style.images}>
                    <img src="images/products/21.jpg" alt="" />
                  </div>
                </div>
              </Col>

              <Col lg={18} span={24}>
                <Row gutter={100}>
                  {productsData?.coffee.map((product, index) => (
                    <Col
                      lg={6}
                      span={24}
                      className={Style.listProductCol}
                      key={index}
                    >
                      <Link
                        href={ROUTERS.PRODUCTS_DETAIL(product.id.toString())}
                      >
                        <div className={Style.listProductCard}>
                          <div className={Style.listProductCardImage}>
                            <img src={product.image} alt={product.title} />
                          </div>
                          <h1>{product.title}</h1>
                          <h1>{product.subTitle}</h1>
                        </div>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={`${Style.listProduct} ${Style.listProductLast}`}>
          <div className={Style.listProductBottom}>
            <Row
              gutter={100}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Col lg={6} span={24}>
                <div className={Style.listProductBottom__left}>
                  <div className={Style.images}>
                    <img src="images/products/energy.jpg" alt="" />
                  </div>
                </div>
              </Col>

              <Col lg={18} span={24}>
                <Row gutter={100}>
                  {productsData?.energyDrink.map((product, index) => (
                    <Col
                      lg={6}
                      span={24}
                      className={Style.listProductCol}
                      key={index}
                    >
                      <Link
                        href={ROUTERS.PRODUCTS_DETAIL(product.id.toString())}
                      >
                        <div className={Style.listProductCard}>
                          <div className={Style.listProductCardImage}>
                            <img src={product.image} alt={product.title} />
                          </div>
                          <h1>{product.title}</h1>
                          <h1>{product.subTitle}</h1>
                        </div>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={`${Style.whyChooseUs} ${Style.aboutUs}`}>
          <div className={`${Style.aboutUsCover} ${Style.whyChooseUsCover}`}>
            <div className={Style.aboutUsTop}>
              <div className={`${Style.dflex} ${Style.whyChooseUsTopCover}`}>
                <div className={`${Style.dflex} ${Style.whyChooseUsTitle}`}>
                  <h1>{translateProducts('whyChooseUs')}</h1>
                </div>
              </div>
            </div>

            <div className={`${Style.aboutUsBottom}`}>
              <Row
                gutter={100}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Col lg={6} span={24}>
                  <div className={Style.listProductBottom__left}>
                    <div className={Style.images}>
                      <img src="images/products/1.jpg" alt="" />
                    </div>
                  </div>
                </Col>

                <Col lg={18} span={24}>
                  <Row gutter={100}>
                    {productsData?.coconutWater.map((product, index) => (
                      <Col
                        lg={6}
                        span={24}
                        className={Style.listProductCol}
                        key={index}
                      >
                        <Link
                          href={ROUTERS.PRODUCTS_DETAIL(product.id.toString())}
                        >
                          <div className={Style.listProductCard}>
                            <div className={Style.listProductCardImage}>
                              <img src={product.image} alt={product.title} />
                            </div>
                            <h1>{product.title}</h1>
                            <h1>{product.subTitle}</h1>
                          </div>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.listProduct}>
          <div className={Style.listProductBottom}>
            <Row
              gutter={100}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Col lg={6} span={24}>
                <div className={Style.listProductBottom__left}>
                  <div className={Style.images}>
                    <img src="images/products/6.jpg" alt="" />
                  </div>
                </div>
              </Col>

              <Col lg={18} span={24}>
                <Row gutter={100}>
                  {productsData?.milk.map((product, index) => (
                    <Col
                      lg={6}
                      span={24}
                      className={Style.listProductCol}
                      key={index}
                    >
                      <Link
                        href={ROUTERS.PRODUCTS_DETAIL(product.id.toString())}
                      >
                        <div className={Style.listProductCard}>
                          <div className={Style.listProductCardImage}>
                            <img src={product.image} alt={product.title} />
                          </div>
                          <h1>{product.title}</h1>
                          <h1>{product.subTitle}</h1>
                        </div>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.listProduct}>
          <div className={Style.listProductBottom}>
            <Row
              gutter={100}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Col lg={6} span={24}>
                <div className={Style.listProductBottom__left}>
                  <div className={Style.images}>
                    <img src="images/products/11.png" alt="" />
                  </div>
                </div>
              </Col>

              <Col lg={18} span={24}>
                <Row gutter={100}>
                  {productsData?.juice.map((product, index) => (
                    <Col
                      lg={6}
                      span={24}
                      className={Style.listProductCol}
                      key={index}
                    >
                      <Link
                        href={ROUTERS.PRODUCTS_DETAIL(product.id.toString())}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div className={Style.listProductCard}>
                          <div className={Style.listProductCardImage}>
                            <img
                              src={
                                index === hoveredIndex
                                  ? product.hover
                                  : product.image
                              }
                              alt={product.title}
                            />
                          </div>
                          <h1>{product.title}</h1>
                          <h1>{product.subTitle}</h1>
                        </div>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.listProduct}>
          <div className={Style.listProductBottom}>
            <Row
              gutter={100}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Col lg={6} span={24}>
                <div className={Style.listProductBottom__left}>
                  <div className={Style.images}>
                    <img src="images/products/16.jpg" alt="" />
                  </div>
                </div>
              </Col>

              <Col lg={18} span={24}>
                <Row gutter={100}>
                  {productsData?.aloeVera.map((product, index) => (
                    <Col
                      lg={6}
                      span={24}
                      className={Style.listProductCol}
                      key={index}
                    >
                      <Link
                        href={ROUTERS.PRODUCTS_DETAIL(product.id.toString())}
                      >
                        <div className={Style.listProductCard}>
                          <div className={Style.listProductCardImage}>
                            <img src={product.image} alt={product.title} />
                          </div>
                          <h1>{product.title}</h1>
                          <h1>{product.subTitle}</h1>
                        </div>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.listProduct}>
          <div className={Style.listProductBottom}>
            <Row
              gutter={100}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Col lg={6} span={24}>
                <div className={Style.listProductBottom__left}>
                  <div className={Style.images}>
                    <img src="images/products/21.jpg" alt="" />
                  </div>
                </div>
              </Col>

              <Col lg={18} span={24}>
                <Row gutter={100}>
                  {productsData?.coffee.map((product, index) => (
                    <Col
                      lg={6}
                      span={24}
                      className={Style.listProductCol}
                      key={index}
                    >
                      <Link
                        href={ROUTERS.PRODUCTS_DETAIL(product.id.toString())}
                      >
                        <div className={Style.listProductCard}>
                          <div className={Style.listProductCardImage}>
                            <img src={product.image} alt={product.title} />
                          </div>
                          <h1>{product.title}</h1>
                          <h1>{product.subTitle}</h1>
                        </div>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={`${Style.listProduct} ${Style.listProductLast}`}>
          <div className={Style.listProductBottom}>
            <Row
              gutter={100}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Col lg={6} span={24}>
                <div className={Style.listProductBottom__left}>
                  <div className={Style.images}>
                    <img src="images/products/energy.jpg" alt="" />
                  </div>
                </div>
              </Col>

              <Col lg={18} span={24}>
                <Row gutter={100}>
                  {productsData?.energyDrink.map((product, index) => (
                    <Col
                      lg={6}
                      span={24}
                      className={Style.listProductCol}
                      key={index}
                    >
                      <Link
                        href={ROUTERS.PRODUCTS_DETAIL(product.id.toString())}
                      >
                        <div className={Style.listProductCard}>
                          <div className={Style.listProductCardImage}>
                            <img src={product.image} alt={product.title} />
                          </div>
                          <h1>{product.title}</h1>
                          <h1>{product.subTitle}</h1>
                        </div>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={`${Style.whyChooseUs} ${Style.aboutUs}`}>
          <div className={`${Style.aboutUsCover} ${Style.whyChooseUsCover}`}>
            <div className={Style.aboutUsTop}>
              <div className={`${Style.dflex} ${Style.whyChooseUsTopCover}`}>
                <div className={`${Style.dflex} ${Style.whyChooseUsTitle}`}>
                  <h1>{translateProducts('whyChooseUs')}</h1>
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
                    <h2>{translateProducts('hightQuality')}</h2>
                    <p>{translateProducts('hightQualityProduct')}</p>
                  </div>
                </Col>

                <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
                      <img src="images/why_choose_us/Untitled-29.png" alt="" />
                    </div>
                    <h2>{translateProducts('fastDelivery')}</h2>
                    <p>{translateProducts('fastDeliveryInOrder')}</p>
                  </div>
                </Col>

                <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
                      <img src="images/why_choose_us/Untitled-30.png" alt="" />
                    </div>
                    <h2>{translateProducts('flexiblePackaging')}</h2>
                    <p>
                      {translateProducts('flexiblePackagingWeConsistently')}
                    </p>
                  </div>
                </Col>

                <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
                      <img src="images/why_choose_us/Untitled-31.png" alt="" />
                    </div>
                    <h2>{translateProducts('freeSample')}</h2>
                    <p>{translateProducts('freeSampleBecause')}</p>
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
                  <h1>{translateProducts('customerInformation')}</h1>
                </div>
              </div>
            </div>

            <div className={Style.customerInformationCenter}>
              <p>{translateProducts('customerInformationPleaseProvide')}</p>
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
                  <Input placeholder={translateProducts('firstAndLastName')} />
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
                  <Input placeholder={translateProducts('phoneNumber')} />
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
                  <Input placeholder={translateProducts('email')} />
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
                    placeholder={translateProducts('informationNeededSupport')}
                  />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <div className={Style.btn_see_more}>
                    <button className={`${Style.dflex}`}>
                      <p>{translateProducts('sendInformation')}</p>
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
