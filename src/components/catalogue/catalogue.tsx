import useI18n from '@/i18n/useI18N';
import React from 'react';
import Style from './catalogue.module.scss';
import { Breadcrumb, Col, Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

export default function CataloguePage() {
  const { translate: translateCatalogue } = useI18n('catalogue');
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
              title: `${translateCommon('catalogue')}`,
            },
          ]}
        />
      </div>

      <div
        style={{
          marginTop: '10px',
          backgroundColor: '#EDEDED',
        }}
      >
        <iframe
          allowFullScreen={true}
          scrolling="no"
          className="fp-iframe"
          style={{
            border: '1px solid lightgray',
            width: '100%',
            height: '600px',
          }}
          src="https://heyzine.com/flip-book/6ce0108ce9.html"
        ></iframe>
      </div>

      <div className={Style.whyChooseUs}>
        <div className={Style.whyChooseUsCover}>
          <div className={Style.whyChooseUsTop}>
            <div className={`${Style.dflex} ${Style.whyChooseUsTopCover}`}>
              <div className={`${Style.dflex} ${Style.whyChooseUsTitle}`}>
                <h1>{translateCatalogue('whyChooseUs')}</h1>
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
                  <h2>{translateCatalogue('hightQuality')}</h2>
                  <p>{translateCatalogue('hightQualityProduct')}</p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-29.png" alt="" />
                  </div>
                  <h2>{translateCatalogue('fastDelivery')}</h2>
                  <p>{translateCatalogue('fastDeliveryInOrder')}</p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-30.png" alt="" />
                  </div>
                  <h2>{translateCatalogue('flexiblePackaging')}</h2>
                  <p>{translateCatalogue('flexiblePackagingWeConsistently')}</p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-31.png" alt="" />
                  </div>
                  <h2>{translateCatalogue('freeSample')}</h2>
                  <p>{translateCatalogue('freeSampleBecause')}</p>
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
                <h1>{translateCatalogue('customerInformation')}</h1>
              </div>
            </div>
          </div>

          <div className={Style.customerInformationCenter}>
            <p>{translateCatalogue('customerInformationPleaseProvide')}</p>
          </div>

          <div className={`${Style.dflex} ${Style.customerInformationBottom}`}>
            <input
              type="text"
              placeholder={translateCatalogue('firstAndLastName')}
            />
            <input type="tel" placeholder={translateCatalogue('phoneNumber')} />
            <input type="text" placeholder={translateCatalogue('email')} />
            <textarea
              cols={22}
              placeholder={translateCatalogue('informationNeededSupport')}
            ></textarea>

            <div className={Style.btn_see_more}>
              <button className={`${Style.dflex}`}>
                <p>{translateCatalogue('sendInformation')}</p>
                <ArrowRightOutlined className={Style.iconBtn} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
