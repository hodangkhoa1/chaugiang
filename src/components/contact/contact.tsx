import React from 'react';
import Style from './contact.module.scss';
import { Breadcrumb, Col, Form, Image, Input, Row } from 'antd';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Reveal } from '../commons/reveal';
import useI18n from '@/i18n/useI18N';
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

export default function ContactPage() {
  const { translate: translateContact } = useI18n('contact');
  const { translate: translateCommon } = useI18n('common');

  return (
    <div>
      <Reveal>
        <div className={Style.headerBackground}></div>
      </Reveal>

      <Reveal>
        <div className={Style.contactUs}>
          <div className={Style.background}>
            <Image
              src="/images/contact/contact2.png"
              alt="logo"
              className={Style.backgroundImage}
              preview={false}
            />
          </div>
          <div className={Style.introduce}>
            <div className={`${Style.dflex} ${Style.introduceTopCover}`}>
              <div className={Style.introduceTitle}>
                <h1>{translateContact('contactUs')}</h1>
              </div>
            </div>

            <Breadcrumb
              className={Style.introduceBreadcrumb}
              items={[
                {
                  title: `${translateCommon('home')}`,
                },
                {
                  title: `${translateContact('contactUs')}`,
                },
              ]}
            />
          </div>
          <div className={Style.contactUsBody}>
            <Row>
              <Col md={12} lg={12} span={24}>
                <h1>We Would Be Happy To Assist You</h1>
                <div className={`${Style.dflex} ${Style.contactUsBodyAddress}`}>
                  <EnvironmentOutlined
                    className={Style.contactUsBodyAddressIcon}
                  />
                  <div>
                    <p>
                      Factory Block 1, Lot C1-1/X6-X7, Road D4, Tan Phu Trung
                      Industrial Park, Cu Chi District, HCMC, Vietnam.
                    </p>
                  </div>
                </div>
                <div className={`${Style.dflex} ${Style.contactUsBodyHotline}`}>
                  <PhoneOutlined className={Style.contactUsBodyHotlineIcon} />
                  <div>
                    <p>Internal Markets:</p>
                    <p>+ (84) 903.722.771 (Mrs.Tứ)</p>
                    <p>+ (84) 912.004.560 Luyện (MrLeon Trinh)</p>s
                  </div>
                </div>
                <div className={Style.contactUsBodyFaxNumber}>
                  <div
                    className={`${Style.dflex} ${Style.contactUsBodyFaxBody}`}
                  >
                    <MailOutlined className={Style.contactUsBodyHotlineIcon} />
                    <div>
                      <div style={{ display: 'flex' }}>
                        <p>Email:</p>
                        <Link
                          href={'mailto:trinhxuanluyen.luyen@gmail.com'}
                          className={Style.contactUsBodyFaxLink}
                        >
                          trinhxuanluyen.luyen@gmail.com
                        </Link>
                      </div>
                      <div style={{ display: 'flex' }}>
                        <p>Email:</p>
                        <Link
                          href={'mailto:Kgray@chaugiangfood.com'}
                          className={Style.contactUsBodyFaxLink}
                        >
                          Kgray@chaugiangfood.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${Style.dflex} ${Style.contactUsBodyHotline}`}>
                  <PhoneOutlined className={Style.contactUsBodyHotlineIcon} />
                  <div>
                    <p>Foreign Markets:</p>
                    <p>+ (84) 903.722.771 (Mrs.Tứ)</p>
                    <p>+ (84) 353.960.786 (Mr.Gray)s</p>
                  </div>
                </div>
                <div className={`${Style.dflex} ${Style.contactUsBodyHotline}`}>
                  <InfoCircleOutlined
                    className={Style.contactUsBodyHotlineIcon}
                  />
                  <div>
                    <p>- Arabic language from 22 countries ( العربیە)</p>
                    <p>- Russian ( руский)- Kurdish ( کوردی)</p>
                    <p>Please contact:</p>
                    <p>Mr David - Sales Manager</p>
                    <p>Sales@chaugiangfood.com</p>
                    <p>WhatsApp: 0035794513370</p>
                  </div>
                </div>
              </Col>
              <Col md={12} lg={12} span={24}>
                <h2>Call Us, Write Us, Or Knock On Our Door</h2>
                <div className={`${Style.dflex} ${Style.contactUsMeetYou}`}>
                  <div className={Style.contactUsMeetYouTitle}>
                    <h1>
                      We would be happy to meet you and learn all about your
                      business
                    </h1>
                  </div>
                  <div className={Style.contactUsMeetYouLine}></div>
                </div>
                <h3>Monday - Friday: 8AM - 5PM</h3>
                <h3>Saturday: 8AM - 12PM</h3>
                <h3>Sunday: Closed</h3>
              </Col>
            </Row>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.contactUsMap}>
          <Row>
            <Col md={12} lg={12} span={24}>
              <div className={Style.aboutOurService}>
                <div>
                  <h1>Would like</h1>
                  <h1>to learn more</h1>
                  <h1>about our services?</h1>
                </div>
                <div className={Style.btn_see_more}>
                  <button className={`${Style.dflex}`}>
                    <p>Our Product</p>
                    <ArrowRightOutlined className={Style.iconBtn} />
                  </button>
                </div>
              </div>
            </Col>
            <Col md={12} lg={12} span={24}>
              <div className={Style.aboutOurMap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125387.42749806099!2d106.55453178714727!3d10.860419778307271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d54f5b284dd9%3A0x8a2b57778172399f!2zQ8O0bmcgdHkgVE5ISCBDaOG6vyBCaeG6v24gTMawxqFuZyBUaOG7sWMgVGjhu7FjIFBo4bqpbSBUaMawxqFuZyBN4bqhaSBDaMOidSBHaWFuZw!5e0!3m2!1sen!2s!4v1690885173636!5m2!1sen!2s"
                  width="100%"
                  height="600"
                  loading="lazy"
                ></iframe>
              </div>
            </Col>
          </Row>
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
                  <h1>{translateContact('customerInformation')}</h1>
                </div>
              </div>
            </div>

            <div className={Style.customerInformationCenter}>
              <p>{translateContact('customerInformationPleaseProvide')}</p>
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
                  <Input placeholder={translateContact('firstAndLastName')} />
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
                  <Input placeholder={translateContact('phoneNumber')} />
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
                  <Input placeholder={translateContact('email')} />
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
                    placeholder={translateContact('informationNeededSupport')}
                  />
                </Form.Item>

                <Form.Item className={Style.dflex}>
                  <div className={Style.btn_see_more}>
                    <button className={`${Style.dflex}`}>
                      <p>{translateContact('sendInformation')}</p>
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
