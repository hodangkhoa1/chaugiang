import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import LayoutStyle from './layout.module.scss';
import { Layout, Space, Typography, Image, Select, Col, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { appLocalStorage } from '@/utils/localstorage';
import { LOCAL_STORAGE_KEYS } from '@/constant/localstorage';
import { LANGUAGE } from '@/constant';
import { ROUTERS } from '@/constant/router';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  CaretRightOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const { Text } = Typography;
const { Header, Content, Footer } = Layout;
export const HEADER_HEIGHT = 85;
export const FOOTER_HEIGHT = 50;

interface Props {
  children: React.ReactNode;
}

export function AppLayout(props: Props) {
  // const { translate: translateCommon } = useI18n('common');
  const router = useRouter();
  const [languageSelected, setLanguage] = useState<string>(LANGUAGE.EN);
  const [languageSelectedName, setLanguageSelectedName] = useState('');

  useEffect(() => {
    setLanguage(
      appLocalStorage.get(LOCAL_STORAGE_KEYS.LANGUAGE) || LANGUAGE.EN
    );

    languageSelected === 'en'
      ? setLanguageSelectedName('English')
      : setLanguageSelectedName('Vietnamese');
  }, [languageSelected, languageSelectedName]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Head>
        <link rel="favicon" href="/images/logo.png" />
        <link rel="shortcut icon" href="/images/logo.png" />
      </Head>
      <Layout>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 999,
            padding: '9px 70px 10px 70px',
            background: '#fff',
            height: '80px',
          }}
        >
          <Space style={{ width: '100%', justifyContent: 'space-between' }}>
            <Space>
              <Image
                preview={false}
                style={{
                  paddingRight: '22px',
                  marginTop: '-10px',
                  cursor: 'pointer',
                  width: '222px',
                }}
                src="/images/logo.png"
                onClick={() => router.push(ROUTERS.HOME)}
                alt="logo"
              />
            </Space>
            <Space>
              <ul className={LayoutStyle.navbarNav}>
                <li className={LayoutStyle.navItem}>
                  <Link href={ROUTERS.HOME} className={LayoutStyle.navLink}>
                    Home
                  </Link>
                </li>
                <li className={LayoutStyle.navItem}>
                  <Link href="#" className={LayoutStyle.navLink}>
                    Introduce
                  </Link>
                  <ul className={LayoutStyle.dropdownContent}>
                    <li className={LayoutStyle.dropdownContentItem}>
                      <Link
                        href={ROUTERS.WHO_WE_ARE}
                        className={LayoutStyle.linkDropdown}
                      >
                        Who we are
                      </Link>
                    </li>
                    <li className={LayoutStyle.dropdownContentItem}>
                      <Link
                        href={ROUTERS.COMPANY_PROFILE}
                        className={LayoutStyle.linkDropdown}
                      >
                        Company Profile
                      </Link>
                    </li>
                    <li className={LayoutStyle.dropdownContentItem}>
                      <Link href="#" className={LayoutStyle.linkDropdown}>
                        Catalogue
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={LayoutStyle.navItem}>
                  <Link href={ROUTERS.PRODUCTS} className={LayoutStyle.navLink}>
                    Products
                  </Link>
                  <ul className={LayoutStyle.dropdownContent}>
                    <li className={LayoutStyle.dropdownContentItem}>
                      <Link href="#" className={LayoutStyle.linkDropdown}>
                        Best selling
                      </Link>
                      <ul className={LayoutStyle.subMenu}>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Brown rice
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Oats
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Coconut meat
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Sparkling coconut
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Tamarind
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Mango
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Bottle of aloe vera
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={LayoutStyle.dropdownContentItem}>
                      <Link href="#" className={LayoutStyle.linkDropdown}>
                        New products
                      </Link>
                      <ul className={LayoutStyle.subMenu}>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Sparkling watermelon
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Sparkling fragrant coconut
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Black coffee
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Cappuccino
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Custard apple
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Peach tea
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Lemon tea
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={LayoutStyle.dropdownContentItem}>
                      <Link href="#" className={LayoutStyle.linkDropdown}>
                        Featured product
                      </Link>
                      <ul className={LayoutStyle.subMenu}>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Brown rice milk
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Soy milk
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            mung bean milk
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Corn milk
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Bird&apos;s nest
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Stir-fried bird&apos;s nest
                          </Link>
                        </li>
                        <li className={LayoutStyle.subMenuItem}>
                          <Link href="#" className={LayoutStyle.linkSubMenu}>
                            Aloe vera bird&apos;s nest
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={LayoutStyle.navItem}>
                  <Link
                    href={ROUTERS.BEVERAGE_PRODUCT_DEVELOPMENT}
                    className={LayoutStyle.navLink}
                  >
                    Services
                  </Link>
                  <ul className={LayoutStyle.dropdownContent}>
                    <li className={LayoutStyle.dropdownContentItem}>
                      <Link
                        href={ROUTERS.BEVERAGE_PRODUCT_DEVELOPMENT}
                        className={LayoutStyle.linkDropdown}
                      >
                        Beverage Product Development
                      </Link>
                    </li>
                    <li className={LayoutStyle.dropdownContentItem}>
                      <Link
                        href={ROUTERS.BEVERAGE_PACKAGING_DESIGN}
                        className={LayoutStyle.linkDropdown}
                      >
                        Beverage packaging design
                      </Link>
                    </li>
                    <li className={LayoutStyle.dropdownContentItem}>
                      <Link href="#" className={LayoutStyle.linkDropdown}>
                        Private Label Services (OEM/ODM)
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={LayoutStyle.navItem}>
                  <Link href={ROUTERS.NEWS} className={LayoutStyle.navLink}>
                    News
                  </Link>
                </li>
                <li className={LayoutStyle.navItem}>
                  <Link href={ROUTERS.CONTACT} className={LayoutStyle.navLink}>
                    Contact
                  </Link>
                </li>
                <li className={LayoutStyle.navItem}>
                  <Link
                    href={ROUTERS.RECRUITMENT}
                    className={LayoutStyle.navLink}
                  >
                    Recruitment
                  </Link>
                </li>
              </ul>
            </Space>
            <Space>
              <div className={LayoutStyle.headerTool}>
                <div id="searchBox" className={LayoutStyle.searchBox}>
                  <input
                    className={LayoutStyle.searchPlace}
                    type="text"
                    placeholder="Search..."
                  />
                  <div className={LayoutStyle.buttonSearch}>
                    <SearchOutlined className={LayoutStyle.btnSearch} />
                  </div>
                </div>
              </div>
            </Space>
            <Space>
              <Select
                defaultValue="en"
                className={LayoutStyle.dropdownLanguage}
                options={[
                  { value: 'en', label: 'Tiếng Anh' },
                  { value: 'vn', label: 'Tiếng Việt' },
                  { value: 'cn', label: 'Tiếng Trung' },
                ]}
              />
            </Space>
          </Space>
        </Header>
        <Content
          style={{
            maxHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
            overflowY: 'auto',
          }}
        >
          <main>{props.children}</main>

          <Footer className={LayoutStyle.footerCG}>
            <div className={`${LayoutStyle.info}`}>
              <Row gutter={100}>
                <Col
                  md={14}
                  xl={6}
                  span={24}
                  className={LayoutStyle.listFooter}
                >
                  <div className={LayoutStyle.footerLogo}>
                    <img src="/images/logo.png" alt="" />
                  </div>

                  <div className={LayoutStyle.footerTitle}>
                    <h1>ChauGiang food beverage</h1>
                  </div>

                  <div
                    className={`${LayoutStyle.dflex} ${LayoutStyle.footerBottom}`}
                  >
                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <EnvironmentOutlined
                        className={LayoutStyle.iconFooterOut}
                      />
                      <p className={LayoutStyle.contentFooterOut}>
                        Factory Block 1, Lot C1-1/X6-X7, Road D4, Tan Phu Trung
                        Industrial Park, Cu Chi District, HCMC, Vietnam.
                      </p>
                    </div>

                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <a
                        className={LayoutStyle.dflex}
                        href="mailto:chaugiangfood@gmail.com"
                      >
                        <MailOutlined className={LayoutStyle.iconFooter} />
                        <p>chaugiangfood@gmail.com</p>
                      </a>
                    </div>

                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <a
                        className={LayoutStyle.dflex}
                        href="https://chaugiangfood.com"
                      >
                        <GlobalOutlined className={LayoutStyle.iconFooter} />
                        <p>chaugiangfood.com</p>
                      </a>
                    </div>

                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <PhoneOutlined className={LayoutStyle.iconFooterOut} />
                      <div className={LayoutStyle.content}>
                        <p>Internal Markets:</p>

                        <a href="tel:+84903772771">
                          <p>+ (84)903.772.771 (Mrs.Tứ)</p>
                        </a>

                        <a href="tel:+84353960786">
                          <p>+ (84)353.960.786 (Mr.Gray)</p>
                        </a>
                      </div>
                    </div>

                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <PhoneOutlined className={LayoutStyle.iconFooterOut} />
                      <div className={LayoutStyle.content}>
                        <p>Foreign Markets:</p>

                        <a href="tel:+84903772771">
                          <p>+ (84)903.772.771 (Mrs.Tứ)</p>
                        </a>

                        <a href="tel:+84353960786">
                          <p>+ (84)353.960.786 (Mr.Gray)</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col
                  md={10}
                  xl={6}
                  span={24}
                  className={LayoutStyle.listFooter}
                >
                  <div
                    className={`${LayoutStyle.dflex} ${LayoutStyle.footerTitle} ${LayoutStyle.footerTitleUpper}`}
                  >
                    <div className={LayoutStyle.upper}>
                      <p>i</p>
                    </div>
                    <h1>Information</h1>
                  </div>

                  <div
                    className={`${LayoutStyle.dflex} ${LayoutStyle.footerBottom}`}
                  >
                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <a className={LayoutStyle.dflex} href="">
                        <CaretRightOutlined
                          className={LayoutStyle.iconFooter}
                        />
                        <p>Introduce</p>
                      </a>
                    </div>

                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <a className={LayoutStyle.dflex} href="">
                        <CaretRightOutlined
                          className={LayoutStyle.iconFooter}
                        />
                        <p>Our Services</p>
                      </a>
                    </div>

                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <a className={LayoutStyle.dflex} href="">
                        <CaretRightOutlined
                          className={LayoutStyle.iconFooter}
                        />
                        <p>Story about us</p>
                      </a>
                    </div>

                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <a className={LayoutStyle.dflex} href="">
                        <CaretRightOutlined
                          className={LayoutStyle.iconFooter}
                        />
                        <p>Brands and products</p>
                      </a>
                    </div>

                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <a className={LayoutStyle.dflex} href="">
                        <CaretRightOutlined
                          className={LayoutStyle.iconFooter}
                        />
                        <p>News</p>
                      </a>
                    </div>

                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <a className={LayoutStyle.dflex} href="">
                        <CaretRightOutlined
                          className={LayoutStyle.iconFooter}
                        />
                        <p>Recruitment</p>
                      </a>
                    </div>

                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <a href="">
                        <div className={LayoutStyle.imgMedia}>
                          <img src="./images/zalo.png" alt="" />
                        </div>
                      </a>

                      <a href="">
                        <div className={LayoutStyle.imgMedia}>
                          <img src="./images/fb.png" alt="" />
                        </div>
                      </a>

                      <a href="">
                        <div className={LayoutStyle.imgMedia}>
                          <img src="./images/call.png" alt="" />
                        </div>
                      </a>

                      <a href="">
                        <div className={LayoutStyle.imgMedia}>
                          <img src="./images/youtobe.png" alt="" />
                        </div>
                      </a>
                    </div>

                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <a href="">
                        <div
                          className={`${LayoutStyle.imgMedia} ${LayoutStyle.imgMediaLast}`}
                        >
                          <img src="./images/alibaba.png" alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </Col>

                <Col
                  md={10}
                  xl={5}
                  span={24}
                  className={LayoutStyle.listFooter}
                >
                  <div
                    className={`${LayoutStyle.dflex} ${LayoutStyle.footerTitle} ${LayoutStyle.footerTitleUpper}`}
                  >
                    <div className={LayoutStyle.upper}>
                      <p>P</p>
                    </div>
                    <h1>Policy only</h1>
                  </div>

                  <div
                    className={`${LayoutStyle.dflex} ${LayoutStyle.footerBottom}`}
                  >
                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <a className={LayoutStyle.dflex} href="">
                        <CaretRightOutlined
                          className={LayoutStyle.iconFooter}
                        />
                        <p>Refund and Return Policy</p>
                      </a>
                    </div>

                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <a className={LayoutStyle.dflex} href="">
                        <CaretRightOutlined
                          className={LayoutStyle.iconFooter}
                        />
                        <p>Privacy Policy</p>
                      </a>
                    </div>

                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <a className={LayoutStyle.dflex} href="">
                        <CaretRightOutlined
                          className={LayoutStyle.iconFooter}
                        />
                        <p>Terms and condition</p>
                      </a>
                    </div>

                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <a className={LayoutStyle.dflex} href="">
                        <CaretRightOutlined
                          className={LayoutStyle.iconFooter}
                        />
                        <p>Frequently asked questions</p>
                      </a>
                    </div>
                  </div>
                </Col>

                <Col
                  md={14}
                  xl={7}
                  span={24}
                  className={LayoutStyle.listFooter}
                >
                  <div className={LayoutStyle.rectangle}></div>

                  <div className={LayoutStyle.map}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125387.42749806099!2d106.55453178714727!3d10.860419778307271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d54f5b284dd9%3A0x8a2b57778172399f!2zQ8O0bmcgdHkgVE5ISCBDaOG6vyBCaeG6v24gTMawxqFuZyBUaOG7sWMgVGjhu7FjIFBo4bqpbSBUaMawxqFuZyBN4bqhaSBDaMOidSBHaWFuZw!5e0!3m2!1sen!2s!4v1690885173636!5m2!1sen!2s"
                      width="100%"
                      height="400"
                      loading="lazy"
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </div>

            <div className={`${LayoutStyle.copyRight}`}>
              <Text className={LayoutStyle.content} disabled>
                Copyright 2022 ©Chau Giang Beverage Companies -
                chaugiangfood.com Design by Daitran
              </Text>
            </div>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
}
