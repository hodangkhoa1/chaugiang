// import useI18n from '@/i18n/useI18N';
import React from 'react';
import Style from './products-detail.module.scss';
import { Breadcrumb, Carousel, Col, Row, Image } from 'antd';
import {
  ArrowRightOutlined,
  DeliveredProcedureOutlined,
  StarFilled,
} from '@ant-design/icons';
import Link from 'next/link';

export default function ProductDetailPage() {
  // const { translate: translateHome } = useI18n('common');

  return (
    <div style={{ background: '#fff' }}>
      <div className={Style.headerBackground}></div>

      <div className={`${Style.product}`}>
        <div className={`${Style.dflex} ${Style.productTopCover}`}>
          <div className={Style.productTitle}>
            <h1>Product</h1>
          </div>
        </div>
      </div>

      <div className={Style.introduce}>
        <Breadcrumb
          className={Style.introduceBreadcrumb}
          items={[
            {
              title: 'Home',
            },
            {
              title: 'Product',
            },
            {
              title: 'Coffee Capuchino Drink',
            },
          ]}
        />
      </div>

      <div className={Style.productElement}>
        <Row gutter={100}>
          <Col lg={8} span={24}>
            <div className={`${Style.productElementLeft}`}>
              <div className={Style.productImg}>
                <img src="/images/products/22.png" alt="" />
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
                <h3>Coffe capuchino drink</h3>
              </div>

              <div className={`${Style.dflex} ${Style.productLinkImg}`}>
                <Link href="#" className={Style.mediaLink}>
                  <img src="/images/zalo.png" alt="Zalo" />
                </Link>

                <Link href="#" className={Style.mediaLink}>
                  <img src="/images/fb.png" alt="Facebook" />
                </Link>

                <Link href="#" className={Style.mediaLink}>
                  <img src="/images/call.png" alt="Call" />
                </Link>

                <Link href="#" className={Style.mediaLink}>
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
                  <p>Chau Giang Food Processing Trade Co., LTD</p>
                </div>
                <div
                  className={`${Style.productElementContent} ${Style.dflex}`}
                >
                  <p>Packing Specification:</p>
                  <p>24 cans/ carton, 6 cans/ wrap, 4 wraps/ carton</p>
                </div>
                <div
                  className={`${Style.productElementContent} ${Style.dflex}`}
                >
                  <p>Certificate:</p>
                  <p>FDA, ISO, FCSS, GMP, HACCAP</p>
                </div>
                <div
                  className={`${Style.productElementContent} ${Style.dflex}`}
                >
                  <p>MOQ:</p>
                  <p>500 cartons</p>
                </div>
                <div
                  className={`${Style.productElementContent} ${Style.dflex}`}
                >
                  <p>Shelflife:</p>
                  <p>24 months</p>
                </div>
                <div
                  className={`${Style.productElementContent} ${Style.dflex}`}
                >
                  <p>Volume:</p>
                  <p>245ml</p>
                </div>
                <div
                  className={`${Style.productElementContent} ${Style.dflex}`}
                >
                  <p>Payment:</p>
                  <p>Options:L/C, T/T, Western Union, MoneyGram, Paypal</p>
                </div>
                <div
                  className={`${Style.productElementContent} ${Style.dflex}`}
                >
                  <p>Selling Points:</p>
                  <p>OEM, ODM, Free sample, Free label design</p>
                </div>
                <div
                  className={`${Style.productElementContent} ${Style.dflex}`}
                >
                  <p>Place of Origin:</p>
                  <p>Vietnam</p>
                </div>
              </div>

              <div className={`${Style.dflex} ${Style.requestBtn}`}>
                <button className={Style.dflex}>
                  <DeliveredProcedureOutlined className={Style.iconButton} />
                  <p>Request free samples now</p>
                </button>
              </div>

              <div className={`${Style.dflex} ${Style.productElementNote}`}>
                <p>OEM/ODM Services</p>
                <p>Free Product Customization</p>
                <p>Min. Order: 500 Cartons</p>
              </div>

              <div
                className={`${Style.dflex} ${Style.productElementBottomContent}`}
              >
                <p>Customized logo</p>
                <p>Customized packaging</p>
                <p>Graphic customization</p>
                <p>Formula customization</p>
                <p>Mixed container: Max 8 flavors</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className={Style.productDescription}>
        <Row>
          <Col lg={24} span={24}>
            <h1>Introduction</h1>
          </Col>
          <Col lg={24} span={24}>
            <p>
              Chan Giang Food Processing Trade Co., Ltd is a 100% capital
              private enterprise in Vietnam with more than 33 years of
              experience in the field of production and processing of beverages
              with domestic and export brands, has achieved many acknowledge and
              awards in Vietnam and worldwide also.
            </p>
          </Col>
          <Col lg={6} span={24}>
            <Image
              src="/images/bin_products/bin_products_3.png"
              alt="logo"
              width="100%"
              height={195}
              preview={true}
            />
          </Col>
          <Col lg={6} span={24}>
            <Image
              src="/images/bin_products/bin_products_14.png"
              alt="logo"
              width="100%"
              height={195}
              preview={true}
            />
          </Col>
          <Col lg={6} span={24}>
            <Image
              src="/images/bin_products/bin_products_11.png"
              alt="logo"
              width="100%"
              height={195}
              preview={true}
            />
          </Col>
          <Col lg={6} span={24}>
            <Image
              src="/images/bin_products/bin_products_4.png"
              alt="logo"
              width="100%"
              height={195}
              preview={true}
            />
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
          <Col lg={6} span={24}>
            <Image
              src="/images/products/2.png"
              alt="logo"
              width="100%"
              height={270}
              preview={true}
            />
          </Col>
          <Col lg={6} span={24}>
            <Image
              src="/images/products/28.png"
              alt="logo"
              width="100%"
              height={270}
              preview={true}
            />
          </Col>
          <Col lg={6} span={24}>
            <Image
              src="/images/products/tamarind_330_short_can.png"
              alt="logo"
              width="100%"
              height={270}
              preview={true}
            />
          </Col>
          <Col lg={6} span={24}>
            <Image
              src="/images/products/17.png"
              alt="logo"
              width="100%"
              height={270}
              preview={true}
            />
          </Col>
        </Row>

        <Row style={{ marginTop: '40px' }}>
          <Col lg={24} span={24}>
            <h1>Our Factory</h1>
          </Col>
          <Col lg={24} span={24}>
            <p>
              Since 2017, Chau Giang Food Processing Trade Co., Ltd has expanded
              production lines, improve production processes, enhance product
              quality towards promoting exports to markets worldwide, and
              develop domestic demand also. Chau Giang’s products have a modern
              design, high quality, and reasonable prices in accordance with the
              tastes of consumers. In addition, Chau Giang has been processing
              beverage products for supermarkets, retail, and big brands
              worldwide.
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

      <div className={Style.affiliateProduct}>
        <div className={`${Style.dflex} ${Style.affiliateProductTopCover}`}>
          <div className={Style.affiliateProductTitle}>
            <h1>You May Also Like...</h1>
          </div>
        </div>
      </div>

      <div className={Style.carouselProductBackground}>
        <Carousel slidesToShow={4} className={Style.productCarousel} autoplay>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/22.png" alt="" />
            </div>
            <h1>Coffee Mocha</h1>
            <h4>250ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/23.png" alt="" />
            </div>
            <h1>Coffee Latte</h1>
            <h4>250ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/24.png" alt="" />
            </div>
            <h1>Bubble Tea With Lemon</h1>
            <h4>330ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/25.png" alt="" />
            </div>
            <h1>Lotus Heart Tea</h1>
            <h4>250ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/22.png" alt="" />
            </div>
            <h1>Coffee Mocha</h1>
            <h4>250ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/23.png" alt="" />
            </div>
            <h1>Coffee Latte</h1>
            <h4>250ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/24.png" alt="" />
            </div>
            <h1>Bubble Tea With Lemon</h1>
            <h4>330ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/25.png" alt="" />
            </div>
            <h1>Lotus Heart Tea</h1>
            <h4>250ml</h4>
          </div>
        </Carousel>
      </div>

      <div className={Style.whyChooseUs}>
        <div className={Style.whyChooseUsCover}>
          <div className={Style.whyChooseUsTop}>
            <div className={`${Style.dflex} ${Style.whyChooseUsTopCover}`}>
              <div className={`${Style.dflex} ${Style.whyChooseUsTitle}`}>
                <h1>Why choose Us?</h1>
              </div>
            </div>
          </div>

          <div className={Style.whyChooseUsBottom}>
            <Row
              gutter={100}
              style={{ marginLeft: 'unset', marginRight: 'unset' }}
            >
              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-28.png" alt="" />
                  </div>
                  <h2>Hight Quality</h2>
                  <p>
                    Nam Viet continuously develops new drinks which bring
                    original natural tastes, high nutrition facts, catch the
                    newest trends in the market.
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-29.png" alt="" />
                  </div>
                  <h2>Fast Delivery</h2>
                  <p>
                    Production runs in accordance with world highest standards
                    of Food Safety. Big variety of soft drinks, non-alcohol
                    drinks, fruit juice drinks.
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-30.png" alt="" />
                  </div>
                  <h2>Flexible Packaging</h2>
                  <p>
                    Production runs in accordance with world highest standards
                    of Food Safety. Big variety of soft drinks, non-alcohol
                    drinks, fruit juice drinks.
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-31.png" alt="" />
                  </div>
                  <h2>Free Sample</h2>
                  <p>
                    Production runs in accordance with world highest standards
                    of Food Safety. Big variety of soft drinks, non-alcohol
                    drinks, fruit juice drinks.
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
