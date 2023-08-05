// import useI18n from '@/i18n/useI18N';
import React from 'react';
import Style from './products.module.scss';
import { Col, Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

export default function ProductsPage() {
  // const { translate: translateHome } = useI18n('common');

  return (
    <div>
      <div className={Style.headerBackground}></div>

      <div className={`${Style.product}`}>
        <div className={`${Style.productCover}`}>
          <div className={Style.productTop}>
            <div className={`${Style.dflex} ${Style.productCover}`}>
              <div className={`${Style.dflex} ${Style.productTitle}`}>
                <h1>Product</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={Style.productHome}></div>

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
                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img src="images/products/2.png" alt="" />
                      </div>
                      <h1>Pure Coconut Water</h1>
                      <h1>325ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img src="images/products/3.png" alt="" />
                      </div>
                      <h1>Coconut Water 100% Pure</h1>
                      <h1>330ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img
                          src="images/products/productList/coconut mango 1.png"
                          alt=""
                        />
                      </div>
                      <h1>Coconut Water With</h1>
                      <h1>Mango 330ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img
                          src="images/products/productList/Sparkling coconut pure.png"
                          alt=""
                          style={{ width: '178%' }}
                        />
                      </div>
                      <h1>Sparkling Coconut Water</h1>
                      <h1>330ml</h1>
                    </div>
                  </a>
                </Col>
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
                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img src="images/products/7.png" alt="" />
                      </div>
                      <h1>Brown Rice Milk</h1>
                      <h1>500ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img src="images/products/productList/16.png" alt="" />
                      </div>
                      <h1>Green Bean Milk</h1>
                      <h1>500ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img src="images/products/productList/17.png" alt="" />
                      </div>
                      <h1>Soya Milk</h1>
                      <h1>500ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img src="images/products/productList/18.png" alt="" />
                      </div>
                      <h1>Corn Milk</h1>
                      <h1>500ml</h1>
                    </div>
                  </a>
                </Col>
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
                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img src="images/products/12.png" alt="" />
                      </div>
                      <h1>Mango Juice</h1>
                      <h1>330ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img src="images/products/productList/1.png" alt="" />
                      </div>
                      <h1>Tamarind Juice</h1>
                      <h1>330ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img
                          src="images/products/productList/soursop 330 short can.png"
                          alt=""
                        />
                      </div>
                      <h1>Soursop Juice</h1>
                      <h1>330ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img src="images/products/productList/2.png" alt="" />
                      </div>
                      <h1>Orange Fruit</h1>
                      <h1>330ml</h1>
                    </div>
                  </a>
                </Col>
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
                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img src="images/products/17.png" alt="" />
                      </div>
                      <h1>Aloe Vera 100% Pure</h1>
                      <h1>500ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img src="images/products/18.png" alt="" />
                      </div>
                      <h1>Aloe Vera With Pulp</h1>
                      <h1>Flavor Strawberry 500ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img src="images/products/19.png" alt="" />
                      </div>
                      <h1>Aloe Vera With Pulp</h1>
                      <h1>Flavor Passion Fruit 500ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img
                          src="images/products/productList/dua hau Pet bottle 500ml.png"
                          alt=""
                        />
                      </div>
                      <h1>Aloe Vera With Pulp</h1>
                      <h1>Flavor Watermelon 500ml</h1>
                    </div>
                  </a>
                </Col>
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
                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img src="images/products/22.png" alt="" />
                      </div>
                      <h1>Coffee Capuchino</h1>
                      <h1>250ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img
                          src="images/products/productList/cafe latte.png"
                          alt=""
                        />
                      </div>
                      <h1>Coffee Latte</h1>
                      <h1>250ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img src="images/products/24.png" alt="" />
                      </div>
                      <h1>Bubble Tea With Lemon</h1>
                      <h1>330ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img src="images/products/25.png" alt="" />
                      </div>
                      <h1>Lotus Heart Tea</h1>
                      <h1>250ml</h1>
                    </div>
                  </a>
                </Col>
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
                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img src="images/products/27.png" alt="" />
                      </div>
                      <h1>Strawberry Flavor 109</h1>
                      <h1>Energy Drink 250ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img
                          src="images/products/productList/19-removebg-preview.png"
                          alt=""
                        />
                      </div>
                      <h1>Energy Drink CG 109</h1>
                      <h1>330ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img
                          src="images/products/productList/250 short can.png"
                          alt=""
                        />
                      </div>
                      <h1>Energy Drink</h1>
                      <h1>250ml</h1>
                    </div>
                  </a>
                </Col>

                <Col lg={6} span={24} className={Style.listProductCol}>
                  <a href="#">
                    <div className={Style.listProductCard}>
                      <div className={Style.listProductCardImage}>
                        <img
                          src="images/products/productList/energy_250 slin can.png"
                          alt=""
                        />
                      </div>
                      <h1>Energy Drink</h1>
                      <h1>250ml</h1>
                    </div>
                  </a>
                </Col>
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
