import useI18n from '@/i18n/useI18N';
import React, { useEffect, useState } from 'react';
import Style from './products.module.scss';
import { Col, Row, Image, Breadcrumb, Input, Form } from 'antd';
import {
  ArrowRightOutlined,
  SearchOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { ROUTERS } from '@/constant/router';
import { ICreateCustomerCare, IFormValues, ProductsData } from './interface';
import Link from 'next/link';
import { Reveal } from '../commons/reveal';
import 'sweetalert2/src/sweetalert2.scss';
import { useMutation } from 'react-query';
import { createCustomerCare } from './fetcher';
import { errorToast, successToast } from '@/hook/toast';
import { API_MESSAGE } from '@/constant/message';
const { TextArea } = Input;

const initialValue = {
  fullName: '',
  phoneNumber: '',
  email: '',
  customerCareContent: '',
};

export default function ProductsPage() {
  const { translate: translateProducts } = useI18n('products');
  const { translate: translateCommon } = useI18n('common');
  const [productsData, setProductsData] = useState<ProductsData>();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

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
                    <img src="/images/products/6.jpg" alt="" />
                  </div>
                </div>
              </Col>

              <Col lg={18} span={24}>
                <Row gutter={100}>
                  {productsData?.milk.map((product, index) => (
                    <Col
                      md={24}
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
                    <img src="/images/products/11.png" alt="" />
                  </div>
                </div>
              </Col>

              <Col lg={18} span={24}>
                <Row gutter={100}>
                  {productsData?.juice.map((product, index) => (
                    <Col
                      md={24}
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
                    <img src="/images/products/16.jpg" alt="" />
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
                    <img src="/images/products/21.jpg" alt="" />
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
                    <img src="/images/products/energy.jpg" alt="" />
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
                      <img src="/images/why_choose_us/Untitled-28.png" alt="" />
                    </div>
                    <h2>{translateProducts('hightQuality')}</h2>
                    <p>{translateProducts('hightQualityProduct')}</p>
                  </div>
                </Col>

                <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
                      <img src="/images/why_choose_us/Untitled-29.png" alt="" />
                    </div>
                    <h2>{translateProducts('fastDelivery')}</h2>
                    <p>{translateProducts('fastDeliveryInOrder')}</p>
                  </div>
                </Col>

                <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
                      <img src="/images/why_choose_us/Untitled-30.png" alt="" />
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
                      <img src="/images/why_choose_us/Untitled-31.png" alt="" />
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
                    placeholder={translateProducts('firstAndLastName')}
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
                    placeholder={translateProducts('phoneNumber')}
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
                    placeholder={translateProducts('email')}
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
                    placeholder={translateProducts('informationNeededSupport')}
                  />
                </Form.Item>

                <Form.Item className={Style.dflex}>
                  <div className={Style.btn_see_more}>
                    <button type="submit" className={`${Style.dflex}`}>
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
