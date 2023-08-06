// import useI18n from '@/i18n/useI18N';
import React from 'react';
import Style from './contact.module.scss';
import { Breadcrumb, Col, Image, Row } from 'antd';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ChromeOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { ArrowRightOutlined } from '@ant-design/icons';

export default function ContactPage() {
  // const { translate: translateHome } = useI18n('common');

  return (
    <div>
      <div className={Style.headerBackground}></div>

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
              <h1>Contact Us</h1>
            </div>
          </div>

          <Breadcrumb
            className={Style.introduceBreadcrumb}
            items={[
              {
                title: 'Home',
              },
              {
                title: 'Contact Us',
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
                  <p>Chau Giang Food Processing and Trading Co., Ltd</p>
                  <p>
                    Address: Warehouse No. 1, Lot C1-1/X1, Road D4, Tan Phu
                    Trung Industrial Park, Cu Chi District, Ho Chi Minh City,
                    Vietnam.
                  </p>
                  <p>Tel: +84 903722771 ( Mrs. Tứ)</p>
                </div>
              </div>
              <div className={`${Style.dflex} ${Style.contactUsBodyHotline}`}>
                <PhoneOutlined className={Style.contactUsBodyHotlineIcon} />
                <div>
                  <p>Hotline: Viber/Line/WhatsApp:</p>
                  <p>+084903722771 (Mr. Luyen)</p>
                  <p>+84 353960786 (Mr. Gray)</p>
                </div>
              </div>
              <div className={Style.contactUsBodyFaxNumber}>
                <p>Fax number:</p>
                <div className={`${Style.dflex} ${Style.contactUsBodyFaxBody}`}>
                  <MailOutlined className={Style.contactUsBodyHotlineIcon} />
                  <p>Email:</p>
                  <Link
                    href={'mailto:info@chaugiangfood.com'}
                    className={Style.contactUsBodyFaxLink}
                  >
                    info@chaugiangfood.com
                  </Link>
                </div>
                <div className={`${Style.dflex} ${Style.contactUsBodyFaxBody}`}>
                  <ChromeOutlined className={Style.contactUsBodyHotlineIcon} />
                  <p>Website:</p>
                  <Link
                    href={'https://chaugiang.vercel.app'}
                    className={Style.contactUsBodyFaxLink}
                  >
                    https://chaugiang.vercel.app
                  </Link>
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
