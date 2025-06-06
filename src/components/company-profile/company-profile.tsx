import useI18n from '@/i18n/useI18N';
import React, { useEffect } from 'react';
import Style from './company-profile.module.scss';
import { Breadcrumb, Col, Image, Row, Input, Form } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Reveal } from '../commons/reveal';
import 'sweetalert2/src/sweetalert2.scss';
import { useMutation } from 'react-query';
import { ICreateCustomerCare, IFormValues } from './interface';
import { createCustomerCare } from './fetcher';
import { errorToast, successToast } from '@/hook/toast';
import { API_MESSAGE } from '@/constant/message';
const { TextArea } = Input;
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const initialValue = {
  fullName: '',
  phoneNumber: '',
  email: '',
  customerCareContent: '',
};

export default function CompanyProfilePage() {
  const { translate: translateCompanyProfile } = useI18n('companyProfile');
  const { translate: translateCommon } = useI18n('common');
  const [form] = Form.useForm();

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const createMutation = useMutation({
    mutationFn: (body: ICreateCustomerCare) => {
      return createCustomerCare(body);
    },
  });

  const onFinish = (formValues: IFormValues) => {
    const _requestData: ICreateCustomerCare = {
      fullName: formValues.fullName || '',
      phoneNumber: formValues.phoneNumber || '',
      email: formValues.email || '',
      customerCareContent: formValues.customerCareContent || '',
    };
    createMutation.mutate(_requestData, {
      onSuccess: (data) => {
        data.status
          ? (successToast(data.message), form.resetFields())
          : errorToast(data.message);
      },
      onError() {
        errorToast(API_MESSAGE.ERROR);
      },
    });
  };

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
                form={form}
                initialValues={initialValue}
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  name="fullName"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập họ và tên!',
                    },
                  ]}
                >
                  <Input
                    placeholder={translateCompanyProfile('firstAndLastName')}
                    prefix={<UserOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập số điện thoại để được hỗ trợ!',
                    },
                    {
                      pattern: new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g),
                      message: 'Số điện thoại không đúng định dạng',
                    },
                  ]}
                >
                  <Input
                    placeholder={translateCompanyProfile('phoneNumber')}
                    prefix={<PhoneOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input email!',
                    },
                  ]}
                >
                  <Input
                    placeholder={translateCompanyProfile('email')}
                    prefix={<MailOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  name="customerCareContent"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập nội dung cần hỗ trợ!',
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

                <Form.Item className={Style.dflex}>
                  <div className={Style.btn_see_more}>
                    <button type="submit" className={`${Style.dflex}`}>
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
