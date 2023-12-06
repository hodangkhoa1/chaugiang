import useI18n from '@/i18n/useI18N';
import React from 'react';
import Style from './beverage-product-development.module.scss';
import { Breadcrumb, Col, Row, Image, Form, Input } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Reveal } from '../commons/reveal';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
const { TextArea } = Input;

const onFinish = async (values: any) => {
  try {
    await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Email sent successfully!',
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error sending email!',
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

const onFinishFailed = (errorInfo: any) => {
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: `Failed: ${errorInfo}`,
    showConfirmButton: false,
    timer: 1500,
  });
};

type FieldType = {
  firstAndLastName?: string;
  phoneNumber?: string;
  email?: string;
  informationNeededSupport?: string;
};

export default function BeverageProductDevelopmentPage() {
  const { translate: translateBeverageProductDevelopment } = useI18n(
    'beverageProductDevelopment'
  );
  const { translate: translateCommon } = useI18n('common');

  return (
    <div>
      <Reveal>
        <div className={Style.headerBackground}></div>
      </Reveal>

      <Reveal>
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
      </Reveal>

      <Reveal>
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
      </Reveal>

      <Reveal>
        <div className={`${Style.whyChooseUs} ${Style.aboutUs}`}>
          <div className={`${Style.aboutUsCover} ${Style.whyChooseUsCover}`}>
            <div className={Style.aboutUsTop}>
              <div className={`${Style.dflex} ${Style.whyChooseUsTopCover}`}>
                <div className={`${Style.dflex} ${Style.whyChooseUsTitle}`}>
                  <h1>{translateBeverageProductDevelopment('whyChooseUs')}</h1>
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
                    <h2>
                      {translateBeverageProductDevelopment('hightQuality')}
                    </h2>
                    <p>
                      {translateBeverageProductDevelopment(
                        'hightQualityProduct'
                      )}
                    </p>
                  </div>
                </Col>

                <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
                      <img src="/images/why_choose_us/Untitled-29.png" alt="" />
                    </div>
                    <h2>
                      {translateBeverageProductDevelopment('fastDelivery')}
                    </h2>
                    <p>
                      {translateBeverageProductDevelopment(
                        'fastDeliveryInOrder'
                      )}
                    </p>
                  </div>
                </Col>

                <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
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
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
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

            <div
              className={`${Style.dflex} ${Style.customerInformationBottom}`}
            >
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item<FieldType>
                  name="firstAndLastName"
                  rules={[
                    {
                      required: true,
                      message: 'Please input first and last name!',
                    },
                  ]}
                >
                  <Input
                    placeholder={translateBeverageProductDevelopment(
                      'firstAndLastName'
                    )}
                  />
                </Form.Item>

                <Form.Item<FieldType>
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: 'Please input phone number!',
                    },
                  ]}
                >
                  <Input
                    placeholder={translateBeverageProductDevelopment(
                      'phoneNumber'
                    )}
                  />
                </Form.Item>

                <Form.Item<FieldType>
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input email!',
                    },
                  ]}
                >
                  <Input
                    placeholder={translateBeverageProductDevelopment('email')}
                  />
                </Form.Item>

                <Form.Item<FieldType>
                  name="informationNeededSupport"
                  rules={[
                    {
                      required: true,
                      message: 'Please input information needed support!',
                    },
                  ]}
                >
                  <TextArea
                    className={Style.styleTextArea}
                    cols={22}
                    placeholder={translateBeverageProductDevelopment(
                      'informationNeededSupport'
                    )}
                  />
                </Form.Item>

                <Form.Item className={Style.dflex}>
                  <div className={Style.btn_see_more}>
                    <button className={`${Style.dflex}`}>
                      <p>
                        {translateBeverageProductDevelopment('sendInformation')}
                      </p>
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
