// import useI18n from '@/i18n/useI18N';
import React, { useEffect, useState } from 'react';
import Style from './products.module.scss';
import { Col, Row, Image, Breadcrumb } from 'antd';
import { ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';
import { ROUTERS } from '@/constant/router';
import { ProductsData } from './interface';

export default function ProductsPage() {
  // const { translate: translateHome } = useI18n('common');
  const [productsData, setProductsData] = useState<ProductsData>();

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
      <div className={Style.headerBackground}></div>

      <div className={`${Style.product}`}>
        <div className={`${Style.dflex} ${Style.productTopCover}`}>
          <div className={Style.productTitle}>
            <h1>Product</h1>
          </div>
        </div>
      </div>

      <div className={Style.productHome}>
        <Row>
          <Col md={6} lg={6} span={24}>
            <div className={Style.productHomeLeft}>
              <Breadcrumb
                className={Style.productHomeBreadcrumb}
                items={[
                  {
                    title: 'Home',
                  },
                  {
                    title: 'Product',
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
                    placeholder="Search..."
                  />
                </div>
              </div>
              <div className={Style.portfolio}>
                <h1>Product Portfolio</h1>
              </div>
              <a href="#">
                <div className={Style.productBodyDetail}>
                  <p>Coconut water</p>
                  <div className={Style.productBodyDetailLine}></div>
                </div>
              </a>
              <a href="#">
                <div className={Style.productBodyDetail}>
                  <p>Fruit Juice Drink</p>
                  <div className={Style.productBodyDetailLine}></div>
                </div>
              </a>
              <a href="#">
                <div className={Style.productBodyDetail}>
                  <p>Milk Drink</p>
                  <div className={Style.productBodyDetailLine}></div>
                </div>
              </a>
              <a href="#">
                <div className={Style.productBodyDetail}>
                  <p>Sparkling Juice Drink</p>
                  <div className={Style.productBodyDetailLine}></div>
                </div>
              </a>
              <a href="#">
                <div className={Style.productBodyDetail}>
                  <p>Coffee</p>
                  <div className={Style.productBodyDetailLine}></div>
                </div>
              </a>
              <a href="#">
                <div className={Style.productBodyDetail}>
                  <p>Energy Drink</p>
                  <div className={Style.productBodyDetailLine}></div>
                </div>
              </a>
              <a href="#">
                <div className={Style.productBodyDetail}>
                  <p>PET Aloe Vera Drink</p>
                  <div className={Style.productBodyDetailLine}></div>
                </div>
              </a>
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
                    <a href={ROUTERS.PRODUCTS_DETAIL(product.id.toString())}>
                      <div className={Style.listProductCard}>
                        <div className={Style.listProductCardImage}>
                          <img src={product.image} alt={product.title} />
                        </div>
                        <h1>{product.title}</h1>
                        <h1>{product.subTitle}</h1>
                      </div>
                    </a>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>

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
                    <a href={ROUTERS.PRODUCTS_DETAIL(product.id.toString())}>
                      <div className={Style.listProductCard}>
                        <div className={Style.listProductCardImage}>
                          <img src={product.image} alt={product.title} />
                        </div>
                        <h1>{product.title}</h1>
                        <h1>{product.subTitle}</h1>
                      </div>
                    </a>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>

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
                    <a href={ROUTERS.PRODUCTS_DETAIL(product.id.toString())}>
                      <div className={Style.listProductCard}>
                        <div className={Style.listProductCardImage}>
                          <img src={product.image} alt={product.title} />
                        </div>
                        <h1>{product.title}</h1>
                        <h1>{product.subTitle}</h1>
                      </div>
                    </a>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>

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
                    <a href={ROUTERS.PRODUCTS_DETAIL(product.id.toString())}>
                      <div className={Style.listProductCard}>
                        <div className={Style.listProductCardImage}>
                          <img src={product.image} alt={product.title} />
                        </div>
                        <h1>{product.title}</h1>
                        <h1>{product.subTitle}</h1>
                      </div>
                    </a>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>

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
                    <a href={ROUTERS.PRODUCTS_DETAIL(product.id.toString())}>
                      <div className={Style.listProductCard}>
                        <div className={Style.listProductCardImage}>
                          <img src={product.image} alt={product.title} />
                        </div>
                        <h1>{product.title}</h1>
                        <h1>{product.subTitle}</h1>
                      </div>
                    </a>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>

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
                    <a href={ROUTERS.PRODUCTS_DETAIL(product.id.toString())}>
                      <div className={Style.listProductCard}>
                        <div className={Style.listProductCardImage}>
                          <img src={product.image} alt={product.title} />
                        </div>
                        <h1>{product.title}</h1>
                        <h1>{product.subTitle}</h1>
                      </div>
                    </a>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>

      <div className={`${Style.whyChooseUs} ${Style.aboutUs}`}>
        <div className={`${Style.aboutUsCover} ${Style.whyChooseUsCover}`}>
          <div className={Style.aboutUsTop}>
            <div className={`${Style.dflex} ${Style.whyChooseUsTopCover}`}>
              <div className={`${Style.dflex} ${Style.whyChooseUsTitle}`}>
                <h1>Why choose Us?</h1>
              </div>

              <div
                className={`${Style.lineWhyChooseUs} ${Style.whyChooseUsLine}`}
              ></div>
            </div>
          </div>

          <div className={`${Style.aboutUsBottom}`}>
            <Row
              gutter={100}
              style={{ marginLeft: 'unset', marginRight: 'unset' }}
            >
              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/why_choose_us/Untitled-28.png" alt="" />
                  </div>
                  <h2>Hight Quality</h2>
                  <p>
                    Product quality is always developed by CG Food to meet
                    national and international requirements. We are certain that
                    our products will have a natural flavor, be highly
                    nutritious, and follow the latest trends in the market.
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/why_choose_us/Untitled-29.png" alt="" />
                  </div>
                  <h2>Fast Delivery</h2>
                  <p>
                    In order to ensure the leading time in accordance with
                    client requests, CG Food has a sizable packing and labeling
                    area. We also have a skilled logistic crew on hand to assist
                    you whenever you need it.
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/why_choose_us/Untitled-30.png" alt="" />
                  </div>
                  <h2>Flexible Packaging</h2>
                  <p>
                    We consistently satisfy the demands for product packaging
                    from clients across the global market by combining modernism
                    and experience. Our employees are trained to catch up with
                    recent trends of packing specification.
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                  <div className={Style.aboutUsBottomImage}>
                    <img src="images/why_choose_us/Untitled-31.png" alt="" />
                  </div>
                  <h2>Free Sample</h2>
                  <p>
                    Because their satisfaction makes us happy, we only deliver
                    the best products to our consumers. In order for the model
                    to rapidly reach clients, we always select the best shipping
                    services.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className={Style.customerInformation}>
        <div className={Style.customerInformationCover}>
          <div className={Style.customerInformationTop}>
            <div
              className={`${Style.dflex} ${Style.customerInformationTopCover}`}
            >
              <div
                className={`${Style.dflex} ${Style.customerInformationTitle}`}
              >
                <h1>Customer Information</h1>
              </div>

              <div className={Style.customerInformationLine}></div>
            </div>
          </div>

          <div className={Style.customerInformationCenter}>
            <p>
              Please provide the information below to receive our free
              consultation service package
            </p>
          </div>

          <div className={`${Style.dflex} ${Style.customerInformationBottom}`}>
            <input type="text" placeholder="First and last name" />
            <input type="tel" placeholder="Phone number" />
            <input type="text" placeholder="Email" />
            <textarea
              cols={22}
              placeholder="Information needed support"
            ></textarea>

            <div className={Style.btn_see_more}>
              <button className={`${Style.dflex}`}>
                <p>Send information</p>
                <ArrowRightOutlined className={Style.iconBtn} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
