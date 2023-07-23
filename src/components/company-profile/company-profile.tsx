// import useI18n from '@/i18n/useI18N';
import React from 'react';
import Style from './company-profile.module.scss';
import { Breadcrumb, Col, Image, Row } from 'antd';

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
          <div className={Style.introduceCompanyProfileLine}></div>
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
          <div className={Style.introduceLeadershipLine}></div>
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

      <div className={`${Style.dflex} ${Style.aboutTheDirector}`}>
        <div className={`${Style.dflex} ${Style.aboutTheDirectorLeft}`}>
          <div className={Style.aboutTheDirectorLeftBackground}></div>
        </div>
        <div className={`${Style.dflex} ${Style.aboutTheDirectorRight}`}>
          <div className={`${Style.dflex} ${Style.aboutTheDirectorRightCover}`}>
            <div className={Style.aboutTheDirectorRightTitle}>
              <h1>About The Director</h1>
            </div>
            <div className={Style.aboutTheDirectorRightLine}></div>
          </div>

          <div className={Style.aboutTheDirectorRightCenter}>
            <p>
              Mrs. Lê Thị Tứ is the Director of Chau Giang Food Processing Trade
              Co., Ltd. Up to now, Mrs. Tứ has contributed to the beverage
              manufacturing industry for more than 30 years and she is a pioneer
              in the production and creation of beverages are currently popular
              on the market today. Her goals are to provide products that are
              the best for consumers in terms of safety, quality, and taste. CG
              Food&apos;s products must be prepared with natural and fresh
              ingredients, particularly they are produced in Vietnam and by
              Vietnamese workers.
            </p>
          </div>
        </div>
      </div>

      <div className={`${Style.dflex} ${Style.employeeSystem}`}>
        <div className={`${Style.dflex} ${Style.employeeSystemLeft}`}>
          <div className={`${Style.dflex} ${Style.employeeSystemLeftCover}`}>
            <div className={Style.employeeSystemLeftTitle}>
              <h1>Employee System</h1>
            </div>
            <div className={Style.employeeSystemLeftLine}></div>
          </div>

          <div className={Style.employeeSystemLeftCenter}>
            <p>
              Mrs. Lê Thị Tứ is the Director of Chau Giang Food Processing Trade
              Co., Ltd. Up to now, Mrs. Tứ has contributed to the beverage
              manufacturing industry for more than 30 years and she is a pioneer
              in the production and creation of beverages are currently popular
              on the market today. Her goals are to provide products that are
              the best for consumers in terms of safety, quality, and taste. CG
              Food&apos;s products must be prepared with natural and fresh
              ingredients, particularly they are produced in Vietnam and by
              Vietnamese workers.
            </p>
          </div>
        </div>
        <div className={`${Style.dflex} ${Style.employeeSystemRight}`}>
          <div className={Style.employeeSystemRightBackground}></div>
        </div>
      </div>

      <div className={Style.orderNowBackground}></div>

      <div className={Style.whyChooseUs}>
        <div className={Style.whyChooseUsCover}>
          <div className={Style.whyChooseUsTop}>
            <div className={`${Style.dflex} ${Style.whyChooseUsTopCover}`}>
              <div className={`${Style.dflex} ${Style.whyChooseUsTitle}`}>
                <h1>Why choose Us?</h1>
              </div>

              <div className={Style.whyChooseUsLine}></div>
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
    </div>
  );
}