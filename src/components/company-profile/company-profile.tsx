import useI18n from '@/i18n/useI18N';
import React from 'react';
import Style from './company-profile.module.scss';
import { Breadcrumb, Col, Image, Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

export default function CompanyProfilePage() {
  const { translate: translateCompanyProfile } = useI18n('companyProfile');
  const { translate: translateCommon } = useI18n('common');

  return (
    <div>
      <div className={Style.headerBackground}></div>

      <div className={Style.introduceCompanyProfile}>
        <div
          className={`${Style.dflex} ${Style.introduceCompanyProfileTopCover}`}
        >
          <div className={Style.introduceCompanyProfileTitle}>
            <h1>{translateCommon('introduce')}</h1>
          </div>
        </div>

        <Breadcrumb
          className={Style.introduceCompanyProfileBreadcrumb}
          items={[
            {
              title: `${translateCommon('home')}`,
            },
            {
              title: `${translateCommon('introduce')}`,
            },
            {
              title: `${translateCommon('companyProfile')}`,
            },
          ]}
        />
      </div>

      <div className={`${Style.dflex} ${Style.introduceLeadership}`}>
        <div className={`${Style.dflex} ${Style.introduceLeadershipTopCover}`}>
          <div className={Style.introduceLeadershipTitle}>
            <h1>{translateCompanyProfile('leadershipStructure')}</h1>
          </div>
        </div>

        <div className={Style.introduceLeadershipCenter}>
          <p>{translateCompanyProfile('leadershipStructureChauGiang')}</p>
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
                  <h1>{translateCompanyProfile('aboutTheDirector')}</h1>
                </div>
                <div className={Style.aboutTheDirectorRightLine}></div>
              </div>

              <div className={Style.aboutTheDirectorRightCenter}>
                <p>{translateCompanyProfile('aboutTheDirectorLeThiTu')}</p>
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
                  <h1>{translateCompanyProfile('employeeSystem')}</h1>
                </div>
              </div>

              <div className={Style.employeeSystemLeftCenter}>
                <p>{translateCompanyProfile('aboutTheDirectorLeThiTu')}</p>
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
                <h1>{translateCompanyProfile('whyChooseUs')}</h1>
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
                  <h2>{translateCompanyProfile('hightQuality')}</h2>
                  <p>{translateCompanyProfile('hightQualityProduct')}</p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-29.png" alt="" />
                  </div>
                  <h2>{translateCompanyProfile('fastDelivery')}</h2>
                  <p>{translateCompanyProfile('fastDeliveryInOrder')}</p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-30.png" alt="" />
                  </div>
                  <h2>{translateCompanyProfile('flexiblePackaging')}</h2>
                  <p>
                    {translateCompanyProfile('flexiblePackagingWeConsistently')}
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-31.png" alt="" />
                  </div>
                  <h2>{translateCompanyProfile('freeSample')}</h2>
                  <p>{translateCompanyProfile('freeSampleBecause')}</p>
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
                <h1>{translateCompanyProfile('customerInformation')}</h1>
              </div>
            </div>
          </div>

          <div className={Style.customerInformationCenter}>
            <p>{translateCompanyProfile('customerInformationPleaseProvide')}</p>
          </div>

          <div className={`${Style.dflex} ${Style.customerInformationBottom}`}>
            <input
              type="text"
              placeholder={translateCompanyProfile('firstAndLastName')}
            />
            <input
              type="tel"
              placeholder={translateCompanyProfile('phoneNumber')}
            />
            <input type="text" placeholder={translateCompanyProfile('email')} />
            <textarea
              cols={22}
              placeholder={translateCompanyProfile('informationNeededSupport')}
            ></textarea>

            <div className={Style.btn_see_more}>
              <button className={`${Style.dflex}`}>
                <p>{translateCompanyProfile('sendInformation')}</p>
                <ArrowRightOutlined className={Style.iconBtn} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
