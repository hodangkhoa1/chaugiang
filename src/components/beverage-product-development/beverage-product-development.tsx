import useI18n from '@/i18n/useI18N';
import React from 'react';
import Style from './beverage-product-development.module.scss';
import { Breadcrumb, Col, Row, Image } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

export default function BeverageProductDevelopmentPage() {
  const { translate: translateBeverageProductDevelopment } = useI18n(
    'beverageProductDevelopment'
  );
  const { translate: translateCommon } = useI18n('common');

  return (
    <div>
      <div className={Style.headerBackground}></div>

      <div className={Style.introduce}>
        <div className={`${Style.dflex} ${Style.introduceTopCover}`}>
          <div className={Style.introduceTitle}>
            <h1>{translateBeverageProductDevelopment('ourServices')}</h1>
          </div>
        </div>

        <Breadcrumb
          className={Style.introduceBreadcrumb}
          items={[
            {
              title: `${translateCommon('home')}`,
            },
            {
              title: `${translateBeverageProductDevelopment('ourServices')}`,
            },
            {
              title: `${translateCommon('beverageProductDevelopment')}`,
            },
          ]}
        />
      </div>

      <div className={`${Style.introducePackagingDesigner}`}>
        <Row>
          <Col lg={24} span={24}>
            <div className={Style.introducePackagingDesignerTitle}>
              <h1>
                {translateBeverageProductDevelopment(
                  'weDevelopBeverageProducts'
                )}
              </h1>
            </div>
          </Col>
          <Col lg={24} span={24} className={Style.dflex}>
            <div className={Style.introducePackagingDesignerCenter}>
              <p>
                {translateBeverageProductDevelopment(
                  'weDevelopBeverageProducts1'
                )}
              </p>
              <p style={{ marginTop: '20px' }}>
                {translateBeverageProductDevelopment(
                  'weDevelopBeverageProducts2'
                )}
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
                {translateBeverageProductDevelopment(
                  'weDevelopBeverageProducts3'
                )}
              </p>
              <p style={{ marginTop: '20px' }}>
                {translateBeverageProductDevelopment(
                  'weDevelopBeverageProducts4'
                )}
              </p>
              <p style={{ marginTop: '20px' }}>
                {translateBeverageProductDevelopment(
                  'forMoreDetailsPleaseContact'
                )}
              </p>
              <p>
                {translateBeverageProductDevelopment(
                  'forMoreDetailsPleaseContactChauGiang'
                )}
              </p>
              <p>
                {translateBeverageProductDevelopment(
                  'forMoreDetailsPleaseContactAddress'
                )}
              </p>
              <p>
                {translateBeverageProductDevelopment(
                  'forMoreDetailsPleaseContactTel'
                )}
              </p>
              <p>
                {translateBeverageProductDevelopment(
                  'forMoreDetailsPleaseContactHotline'
                )}
              </p>
              <p>
                {translateBeverageProductDevelopment(
                  'forMoreDetailsPleaseContactHotlineMrLuyen'
                )}
              </p>
              <p>
                {translateBeverageProductDevelopment(
                  'forMoreDetailsPleaseContactHotlineMrGray'
                )}
              </p>
              <p>{translateBeverageProductDevelopment('faxNumber')}</p>
              <p>
                {translateBeverageProductDevelopment(
                  'forMoreDetailsPleaseContactEmail'
                )}
              </p>
              <p>
                {translateBeverageProductDevelopment(
                  'forMoreDetailsPleaseContactWebsite'
                )}
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div className={Style.whyChooseUs}>
        <div className={Style.whyChooseUsCover}>
          <div className={Style.whyChooseUsTop}>
            <div className={`${Style.dflex} ${Style.whyChooseUsTopCover}`}>
              <div className={`${Style.dflex} ${Style.whyChooseUsTitle}`}>
                <h1>{translateBeverageProductDevelopment('whyChooseUs')}</h1>
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
                  <h2>{translateBeverageProductDevelopment('hightQuality')}</h2>
                  <p>
                    {translateBeverageProductDevelopment('hightQualityProduct')}
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-29.png" alt="" />
                  </div>
                  <h2>{translateBeverageProductDevelopment('fastDelivery')}</h2>
                  <p>
                    {translateBeverageProductDevelopment('fastDeliveryInOrder')}
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-30.png" alt="" />
                  </div>
                  <h2>
                    {translateBeverageProductDevelopment('flexiblePackaging')}
                  </h2>
                  <p>
                    {translateBeverageProductDevelopment(
                      'flexiblePackagingWeConsistently'
                    )}
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-31.png" alt="" />
                  </div>
                  <h2>{translateBeverageProductDevelopment('freeSample')}</h2>
                  <p>
                    {translateBeverageProductDevelopment('freeSampleBecause')}
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
                <h1>
                  {translateBeverageProductDevelopment('customerInformation')}
                </h1>
              </div>
            </div>
          </div>

          <div className={Style.customerInformationCenter}>
            <p>
              {translateBeverageProductDevelopment(
                'customerInformationPleaseProvide'
              )}
            </p>
          </div>

          <div className={`${Style.dflex} ${Style.customerInformationBottom}`}>
            <input
              type="text"
              placeholder={translateBeverageProductDevelopment(
                'firstAndLastName'
              )}
            />
            <input
              type="tel"
              placeholder={translateBeverageProductDevelopment('phoneNumber')}
            />
            <input
              type="text"
              placeholder={translateBeverageProductDevelopment('email')}
            />
            <textarea
              cols={22}
              placeholder={translateBeverageProductDevelopment(
                'informationNeededSupport'
              )}
            ></textarea>

            <div className={Style.btn_see_more}>
              <button className={`${Style.dflex}`}>
                <p>{translateBeverageProductDevelopment('sendInformation')}</p>
                <ArrowRightOutlined className={Style.iconBtn} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
