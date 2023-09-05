// import useI18n from '@/i18n/useI18N';
import React from 'react';
import Style from './beverage-product-development.module.scss';
import { Breadcrumb, Col, Row, Image } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

export default function BeverageProductDevelopmentPage() {
  // const { translate: translateHome } = useI18n('common');

  return (
    <div>
      <div className={Style.headerBackground}></div>

      <div className={Style.introduce}>
        <div className={`${Style.dflex} ${Style.introduceTopCover}`}>
          <div className={Style.introduceTitle}>
            <h1>Our Services</h1>
          </div>
        </div>

        <Breadcrumb
          className={Style.introduceBreadcrumb}
          items={[
            {
              title: 'Home',
            },
            {
              title: 'Our Services',
            },
            {
              title: 'Beverage Product Development',
            },
          ]}
        />
      </div>

      <div className={`${Style.introducePackagingDesigner}`}>
        <Row>
          <Col lg={24} span={24}>
            <div className={Style.introducePackagingDesignerTitle}>
              <h1>We Develop Beverage Products</h1>
            </div>
          </Col>
          <Col lg={24} span={24} className={Style.dflex}>
            <div className={Style.introducePackagingDesignerCenter}>
              <p>
                Are you starting a new beverage business or are you already
                running a beverage company? We are sure that you have a lot of
                questions about creating and producing or selling and marketing
                your new beverage brand? Contact us now for a free consultation
                with our beverage industry experts.
              </p>
              <p style={{ marginTop: '20px' }}>
                Our team is made up of beverage scientists, beverage packaging
                design & development experts, beverage production & logistics
                specialists, beverage marketing & sales teams that work directly
                with major on-line and up and down the street retailers.
                ChauGiang Beverage can help create, market & sell your new
                beverages in the right places at the right prices.
              </p>
            </div>
          </Col>
          <Col lg={24} span={24}>
            <Image
              src="/images/services/can.png"
              alt="logo"
              width="100%"
              height={500}
              preview={false}
            />
          </Col>
          <Col lg={24} span={24} className={Style.dflex}>
            <div className={Style.introducePackagingDesignerCenter}>
              <p>
                Are you beginning a new beverage company or are you already the
                owner of one? We know you probably have a lot of inquiries about
                developing, manufacturing or marketing your new beverage brand.
                Make an appointment with our beverage industry experts right
                away for a free consultation.
              </p>
              <p style={{ marginTop: '20px' }}>
                Our team includes an experienced R&D team, professionals in the
                design and development of beverage packaging, and experts in the
                management of beverage production. Chau Giang Food Processing
                Trade Co. is always the best choice for your long-term
                development.
              </p>
              <p style={{ marginTop: '20px' }}>
                For more details please contact
              </p>
              <p>Chau Giang Food Processing and Trading Co., Ltd</p>
              <p>
                Address: Warehouse No. 1, Lot C1-1/X1, Road D4, Tan Phu Trung
                Industrial Park, Cu Chi District, Ho Chi Minh City, Vietnam.
              </p>
              <p>Tel: +84 903722771 ( Mrs. Tứ)</p>
              <p>Hotline: Viber/Line/WhatsApp:</p>
              <p>+084903722771 (Mr. Luyen)</p>
              <p>+84 353960786 (Mr. Gray)</p>
              <p>Fax number:</p>
              <p>Email: info@chaugiangfood.com</p>
              <p>Website: chaugiangfood.com</p>
            </div>
          </Col>
        </Row>
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
