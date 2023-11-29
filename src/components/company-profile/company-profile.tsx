import useI18n from '@/i18n/useI18N';
import React from 'react';
import Style from './company-profile.module.scss';
import { Breadcrumb, Col, Image, Row, Input, Form } from 'antd';
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

export default function CompanyProfilePage() {
  const { translate: translateCompanyProfile } = useI18n('companyProfile');
  const { translate: translateCommon } = useI18n('common');

  return (
    <div>
      <Reveal>
        <div className={Style.headerBackground}></div>
      </Reveal>

      <Reveal>
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
      </Reveal>

      <Reveal>
        <div className={`${Style.dflex} ${Style.introduceLeadership}`}>
          <div
            className={`${Style.dflex} ${Style.introduceLeadershipTopCover}`}
          >
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
            />
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={`${Style.aboutTheDirector}`}>
          <Row>
            <Col md={12} lg={12} span={24}>
              <div className={`${Style.dflex} ${Style.aboutTheDirectorLeft}`}>
                <div className={Style.aboutTheDirectorLeftBackground}>
                  <Image
                    src="/images/introduce/MrsTu.jpg"
                    alt="logo"
                    width="100%"
                  />
                </div>
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
      </Reveal>

      <Reveal>
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
                <div className={Style.employeeSystemRightBackground}>
                  <Image
                    src="/images/introduce/CG.jpg"
                    alt="logo"
                    width="100%"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.orderNowBackground}></div>
      </Reveal>

      <Reveal>
        <div className={`${Style.whyChooseUs} ${Style.aboutUs}`}>
          <div className={`${Style.aboutUsCover} ${Style.whyChooseUsCover}`}>
            <div className={Style.aboutUsTop}>
              <div className={`${Style.dflex} ${Style.whyChooseUsTopCover}`}>
                <div className={`${Style.dflex} ${Style.whyChooseUsTitle}`}>
                  <h1>{translateCompanyProfile('whyChooseUs')}</h1>
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
                    <h2>{translateCompanyProfile('hightQuality')}</h2>
                    <p>{translateCompanyProfile('hightQualityProduct')}</p>
                  </div>
                </Col>

                <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
                      <img src="/images/why_choose_us/Untitled-29.png" alt="" />
                    </div>
                    <h2>{translateCompanyProfile('fastDelivery')}</h2>
                    <p>{translateCompanyProfile('fastDeliveryInOrder')}</p>
                  </div>
                </Col>

                <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                  <div className={`${Style.dflex} ${Style.aboutUsItem}`}>
                    <div className={Style.aboutUsBottomImage}>
                      <img src="/images/why_choose_us/Untitled-30.png" alt="" />
                    </div>
                    <h2>{translateCompanyProfile('flexiblePackaging')}</h2>
                    <p>
                      {translateCompanyProfile(
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
                    <h2>{translateCompanyProfile('freeSample')}</h2>
                    <p>{translateCompanyProfile('freeSampleBecause')}</p>
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
                  <h1>{translateCompanyProfile('customerInformation')}</h1>
                </div>
              </div>
            </div>

            <div className={Style.customerInformationCenter}>
              <p>
                {translateCompanyProfile('customerInformationPleaseProvide')}
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
                    placeholder={translateCompanyProfile('firstAndLastName')}
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
                  <Input placeholder={translateCompanyProfile('phoneNumber')} />
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
                  <Input placeholder={translateCompanyProfile('email')} />
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
                    placeholder={translateCompanyProfile(
                      'informationNeededSupport'
                    )}
                  />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <div className={Style.btn_see_more}>
                    <button className={`${Style.dflex}`}>
                      <p>{translateCompanyProfile('sendInformation')}</p>
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
