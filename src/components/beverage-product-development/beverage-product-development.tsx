import useI18n from '@/i18n/useI18N';
import React, { useEffect } from 'react';
import Style from './beverage-product-development.module.scss';
import { Breadcrumb, Col, Row, Image, Form, Input } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Reveal } from '../commons/reveal';
import 'sweetalert2/src/sweetalert2.scss';
const { TextArea } = Input;
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { useMutation } from 'react-query';
import { ICreateCustomerCare, IFormValues } from './interface';
import { createCustomerCare } from './fetcher';
import { errorToast, successToast } from '@/hook/toast';
import { API_MESSAGE } from '@/constant/message';

const initialValue = {
  fullName: '',
  phoneNumber: '',
  email: '',
  customerCareContent: '',
};

export default function BeverageProductDevelopmentPage() {
  const { translate: translateBeverageProductDevelopment } = useI18n(
    'beverageProductDevelopment'
  );
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
                    placeholder={translateBeverageProductDevelopment(
                      'firstAndLastName'
                    )}
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
                    placeholder={translateBeverageProductDevelopment(
                      'phoneNumber'
                    )}
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
                    placeholder={translateBeverageProductDevelopment('email')}
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
                    placeholder={translateBeverageProductDevelopment(
                      'informationNeededSupport'
                    )}
                  />
                </Form.Item>

                <Form.Item className={Style.dflex}>
                  <div className={Style.btn_see_more}>
                    <button type="submit" className={`${Style.dflex}`}>
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
