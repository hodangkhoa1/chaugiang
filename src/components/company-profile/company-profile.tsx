// import useI18n from '@/i18n/useI18N';
import React from 'react';
import Style from './company-profile.module.scss';
import { Breadcrumb, Col, Image, Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

export default function CompanyProfilePage() {
  // const { translate: translateHome } = useI18n('common');

  return (
    <div>
      <div className={Style.headerBackground}></div>

      <div className={Style.introduceCompanyProfile}>
        <div
          className={`${Style.dflex} ${Style.introduceCompanyProfileTopCover}`}
        >
          <div className={Style.introduceCompanyProfileTitle}>
            <h1>Introduce</h1>
          </div>
        </div>

        <Breadcrumb
          className={Style.introduceCompanyProfileBreadcrumb}
          items={[
            {
              title: 'Home',
            },
            {
              title: 'Introduce',
            },
            {
              title: 'Company Profile',
            },
          ]}
        />
      </div>

      <div className={`${Style.dflex} ${Style.introduceLeadership}`}>
        <div className={`${Style.dflex} ${Style.introduceLeadershipTopCover}`}>
          <div className={Style.introduceLeadershipTitle}>
            <h1>Leadership Structure Of The Company</h1>
          </div>
        </div>

        <div className={Style.introduceLeadershipCenter}>
          <p>
            The Chau Giang Company&apos;s director, Mrs. Le Thi Tu, founded and
            grew the company over the years. Along with supporting Chau Giang
            Company continue expanding steadily nowadays, it is essential for
            the support and companionship of significant departments like the
            R&D team, Accounting Office, Human Resources, Import and Export
            Department, and Quality Control Department to regulate product
            quality and the production process. The company&apos;s long-term
            development objectives are ensured by the thorough selection and
            training of every component.
          </p>
        </div>

        <div className={`${Style.dflex} ${Style.introduceLeadershipLogo}`}>
          <Image
            src="/images/introduce/introduce_leadership_group.png"
            alt="logo"
            width="100%"
            height={500}
          />
        </div>
      </div>

      <div className={`${Style.aboutTheDirector}`}>
        <Row>
          <Col md={12} lg={12} span={24}>
            <div className={`${Style.dflex} ${Style.aboutTheDirectorLeft}`}>
              <div className={Style.aboutTheDirectorLeftBackground}></div>
            </div>
          </Col>
          <Col md={12} lg={12} span={24}>
            <div className={`${Style.dflex} ${Style.aboutTheDirectorRight}`}>
              <div
                className={`${Style.dflex} ${Style.aboutTheDirectorRightCover}`}
              >
                <div className={Style.aboutTheDirectorRightTitle}>
                  <h1>About The Director</h1>
                </div>
                <div className={Style.aboutTheDirectorRightLine}></div>
              </div>

              <div className={Style.aboutTheDirectorRightCenter}>
                <p>
                  Mrs. Lê Thị Tứ is the Director of Chau Giang Food Processing
                  Trade Co., Ltd. Up to now, Mrs. Tứ has contributed to the
                  beverage manufacturing industry for more than 30 years and she
                  is a pioneer in the production and creation of beverages are
                  currently popular on the market today. Her goals are to
                  provide products that are the best for consumers in terms of
                  safety, quality, and taste. CG Food&apos;s products must be
                  prepared with natural and fresh ingredients, particularly they
                  are produced in Vietnam and by Vietnamese workers.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className={`${Style.employeeSystem}`}>
        <Row>
          <Col md={12} lg={12} span={24}>
            <div className={`${Style.dflex} ${Style.employeeSystemLeft}`}>
              <div
                className={`${Style.dflex} ${Style.employeeSystemLeftCover}`}
              >
                <div className={Style.employeeSystemLeftTitle}>
                  <h1>Employee System</h1>
                </div>
              </div>

              <div className={Style.employeeSystemLeftCenter}>
                <p>
                  Mrs. Lê Thị Tứ is the Director of Chau Giang Food Processing
                  Trade Co., Ltd. Up to now, Mrs. Tứ has contributed to the
                  beverage manufacturing industry for more than 30 years and she
                  is a pioneer in the production and creation of beverages are
                  currently popular on the market today. Her goals are to
                  provide products that are the best for consumers in terms of
                  safety, quality, and taste. CG Food&apos;s products must be
                  prepared with natural and fresh ingredients, particularly they
                  are produced in Vietnam and by Vietnamese workers.
                </p>
              </div>
            </div>
          </Col>
          <Col md={12} lg={12} span={24}>
            <div className={`${Style.dflex} ${Style.employeeSystemRight}`}>
              <div className={Style.employeeSystemRightBackground}></div>
            </div>
          </Col>
        </Row>
      </div>

      <div className={Style.orderNowBackground}></div>

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
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-28.png" alt="" />
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
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-29.png" alt="" />
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
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-30.png" alt="" />
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
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-31.png" alt="" />
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
