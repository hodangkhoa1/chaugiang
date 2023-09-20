import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import LayoutStyle from './layout.module.scss';
import {
  Layout,
  Space,
  Typography,
  Image,
  Select,
  Col,
  Row,
  Menu,
  MenuProps,
  Drawer,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { appLocalStorage } from '@/utils/localstorage';
import { LOCAL_STORAGE_KEYS } from '@/constant/localstorage';
import { LANGUAGE, useLocale } from '@/constant';
import { ROUTERS } from '@/constant/router';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  CaretRightOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { MenuInfo } from 'rc-menu/lib/interface';
import useI18n from '@/i18n/useI18N';
const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wow.js') : null;

const { Text } = Typography;
const { Header, Content, Footer } = Layout;
export const HEADER_HEIGHT = 85;
export const FOOTER_HEIGHT = 50;

interface Props {
  children: React.ReactNode;
}

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export function AppLayout(props: Props) {
  const { translate: translateCommon } = useI18n('common');
  const router = useRouter();
  const [languageSelected, setLanguage] = useState<string>(LANGUAGE.en);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedKey, setSelectedKey] = useState(ROUTERS.HOME);
  const locale = useLocale();

  const items: MenuItem[] = [
    getItem('Home', ROUTERS.HOME),

    getItem('Introduce', 'sub1', null, [
      getItem('Who we are', ROUTERS.WHO_WE_ARE),
      getItem('Company Profile', ROUTERS.COMPANY_PROFILE),
      getItem('Catalogue', 'Catalogue'),
    ]),

    getItem('Products', 'sub2', null, [
      getItem('Best selling', 'Best selling', null, [
        getItem('Brown rice', 'Brown rice'),
        getItem('Oats', 'Oats'),
        getItem('Coconut meat', 'Coconut meat'),
        getItem('Sparkling coconut', 'Sparkling coconut'),
        getItem('Tamarind', 'Tamarind'),
        getItem('Mango', 'Mango'),
        getItem('Bottle of aloe vera', 'Bottle of aloe vera'),
      ]),
      getItem('New products', 'New products', null, [
        getItem('Sparkling watermelon', 'Sparkling watermelon'),
        getItem('Sparkling fragrant coconut', 'Sparkling fragrant coconut'),
        getItem('Black coffee', 'Black coffee'),
        getItem('Cappuccino', 'Cappuccino'),
        getItem('Custard apple', 'Custard apple'),
        getItem('Peach tea', 'Peach tea'),
        getItem('Lemon tea', 'Lemon tea'),
      ]),
      getItem('Featured product', 'Featured product', null, [
        getItem('Brown rice milk', 'Brown rice milk'),
        getItem('Soy milk', 'Soy milk'),
        getItem('mung bean milk', 'mung bean milk'),
        getItem('Corn milk', 'Corn milk'),
        getItem('Bird&apos;s nest', 'Bird&apos;s nest'),
        getItem('Stir-fried bird&apos;s nest', 'Stir-fried bird&apos;s nest'),
        getItem('Aloe vera bird&apos;s nest', 'Aloe vera bird&apos;s nest'),
      ]),
    ]),

    getItem('Services', 'Services', null, [
      getItem(
        'Beverage Product Development',
        ROUTERS.BEVERAGE_PRODUCT_DEVELOPMENT
      ),
      getItem('Beverage packaging design', ROUTERS.BEVERAGE_PACKAGING_DESIGN),
      getItem(
        'Private Label Services (OEM/ODM)',
        ROUTERS.PRIVATE_LABEL_SERVICES
      ),
    ]),

    getItem('News', ROUTERS.NEWS),
    getItem('Contact', ROUTERS.CONTACT),
    getItem('Recruitment', ROUTERS.RECRUITMENT),
  ];

  const handleClickMenuItem = (path: MenuInfo) => {
    setSelectedKey(path.key);
    setShowMobileMenu(false);
    router.push(path.key);
  };

  function onClickChangeLanguage(key: string) {
    setLanguage(key as string);
    const { pathname, asPath, query } = router;
    router.replace({ pathname, query }, asPath, { locale: key });
    appLocalStorage.set(LOCAL_STORAGE_KEYS.LANGUAGE, key);
  }

  useEffect(() => {
    setLanguage(locale);
    appLocalStorage.set(LOCAL_STORAGE_KEYS.LANGUAGE, locale);
  }, [languageSelected, locale]);

  useEffect(() => {
    new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      mobile: false,
      live: true,
    }).init();
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Head>
        <link rel="favicon" href="/images/logo.png" />
        <link rel="shortcut icon" href="/images/logo.png" />
      </Head>

      <Layout>
        <Header
          className={LayoutStyle.appHeader}
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 999,
            padding: '9px 70px 10px 70px',
            background: '#fff',
            height: '80px',
          }}
        >
          <Space
            className="animate__animated animate__slideInDown animate__delay-2s"
            style={{
              width: '100%',
              justifyContent: 'space-between',
              animationDelay: `1s`,
            }}
          >
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
            <div className={LayoutStyle.headerCenter}>
              <Space style={{ marginRight: '8px' }}>
                <ul className={LayoutStyle.navbarNav}>
                  <li className={`${LayoutStyle.navItem}`}>
                    <Link href={ROUTERS.HOME} className={LayoutStyle.navLink}>
                      {translateCommon('home')}
                    </Link>
                  </li>
                  <li className={`${LayoutStyle.navItem}`}>
                    <Link
                      href={ROUTERS.WHO_WE_ARE}
                      className={LayoutStyle.navLink}
                    >
                      {translateCommon('introduce')}
                    </Link>
                    <ul className={LayoutStyle.dropdownContent}>
                      <li className={LayoutStyle.dropdownContentItem}>
                        <Link
                          href={ROUTERS.WHO_WE_ARE}
                          className={LayoutStyle.linkDropdown}
                        >
                          {translateCommon('whoWeAre')}
                        </Link>
                      </li>
                      <li className={LayoutStyle.dropdownContentItem}>
                        <Link
                          href={ROUTERS.COMPANY_PROFILE}
                          className={LayoutStyle.linkDropdown}
                        >
                          {translateCommon('companyProfile')}
                        </Link>
                      </li>
                      <li className={LayoutStyle.dropdownContentItem}>
                        <Link href="#" className={LayoutStyle.linkDropdown}>
                          {translateCommon('catalogue')}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`${LayoutStyle.navItem}`}>
                    <Link
                      href={ROUTERS.PRODUCTS}
                      className={LayoutStyle.navLink}
                    >
                      {translateCommon('products')}
                    </Link>
                    <ul className={LayoutStyle.dropdownContent}>
                      <li className={LayoutStyle.dropdownContentItem}>
                        <Link href="#" className={LayoutStyle.linkDropdown}>
                          {translateCommon('bestSelling')}
                        </Link>
                        <ul className={LayoutStyle.subMenu}>
                          <li className={LayoutStyle.subMenuItem}>
                            <Link
                              href={ROUTERS.PRODUCTS_DETAIL('5')}
                              className={LayoutStyle.linkSubMenu}
                            >
                              Brown rice
                            </Link>
                          </li>
                          <li className={LayoutStyle.subMenuItem}>
                            <Link
                              href={ROUTERS.PRODUCTS_DETAIL('25')}
                              className={LayoutStyle.linkSubMenu}
                            >
                              Oats
                            </Link>
                          </li>
                          <li className={LayoutStyle.subMenuItem}>
                            <Link
                              href={ROUTERS.PRODUCTS_DETAIL('1')}
                              className={LayoutStyle.linkSubMenu}
                            >
                              Coconut meat
                            </Link>
                          </li>
                          <li className={LayoutStyle.subMenuItem}>
                            <Link
                              href={ROUTERS.PRODUCTS_DETAIL('4')}
                              className={LayoutStyle.linkSubMenu}
                            >
                              Sparkling coconut
                            </Link>
                          </li>
                          <li className={LayoutStyle.subMenuItem}>
                            <Link
                              href={ROUTERS.PRODUCTS_DETAIL('10')}
                              className={LayoutStyle.linkSubMenu}
                            >
                              Tamarind
                            </Link>
                          </li>
                          <li className={LayoutStyle.subMenuItem}>
                            <Link
                              href={ROUTERS.PRODUCTS_DETAIL('3')}
                              className={LayoutStyle.linkSubMenu}
                            >
                              Mango
                            </Link>
                          </li>
                          <li className={LayoutStyle.subMenuItem}>
                            <Link
                              href={ROUTERS.PRODUCTS_DETAIL('13')}
                              className={LayoutStyle.linkSubMenu}
                            >
                              Bottle of aloe vera
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={LayoutStyle.dropdownContentItem}>
                        <Link href="#" className={LayoutStyle.linkDropdown}>
                          {translateCommon('newProducts')}
                        </Link>
                        <ul className={LayoutStyle.subMenu}>
                          {/* <li className={LayoutStyle.subMenuItem}>
                            <Link
                              href={ROUTERS.PRODUCTS_DETAIL('16')}
                              className={LayoutStyle.linkSubMenu}
                            >
                              Sparkling watermelon
                            </Link>
                          </li> */}
                          <li className={LayoutStyle.subMenuItem}>
                            <Link href="#" className={LayoutStyle.linkSubMenu}>
                              Sparkling fragrant coconut
                            </Link>
                          </li>
                          <li className={LayoutStyle.subMenuItem}>
                            <Link
                              href={ROUTERS.PRODUCTS_DETAIL('18')}
                              className={LayoutStyle.linkSubMenu}
                            >
                              Black coffee
                            </Link>
                          </li>
                          <li className={LayoutStyle.subMenuItem}>
                            <Link
                              href={ROUTERS.PRODUCTS_DETAIL('17')}
                              className={LayoutStyle.linkSubMenu}
                            >
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
                            <Link
                              href={ROUTERS.PRODUCTS_DETAIL('19')}
                              className={LayoutStyle.linkSubMenu}
                            >
                              Lemon tea
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className={LayoutStyle.dropdownContentItem}>
                        <Link href="#" className={LayoutStyle.linkDropdown}>
                          {translateCommon('featuredProduct')}
                        </Link>
                        <ul className={LayoutStyle.subMenu}>
                          <li className={LayoutStyle.subMenuItem}>
                            <Link
                              href={ROUTERS.PRODUCTS_DETAIL('5')}
                              className={LayoutStyle.linkSubMenu}
                            >
                              Brown rice milk
                            </Link>
                          </li>
                          <li className={LayoutStyle.subMenuItem}>
                            <Link
                              href={ROUTERS.PRODUCTS_DETAIL('7')}
                              className={LayoutStyle.linkSubMenu}
                            >
                              Soy milk
                            </Link>
                          </li>
                          <li className={LayoutStyle.subMenuItem}>
                            <Link
                              href={ROUTERS.PRODUCTS_DETAIL('6')}
                              className={LayoutStyle.linkSubMenu}
                            >
                              mung bean milk
                            </Link>
                          </li>
                          <li className={LayoutStyle.subMenuItem}>
                            <Link
                              href={ROUTERS.PRODUCTS_DETAIL('8')}
                              className={LayoutStyle.linkSubMenu}
                            >
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
                  <li className={`${LayoutStyle.navItem}`}>
                    <Link
                      href={ROUTERS.BEVERAGE_PRODUCT_DEVELOPMENT}
                      className={LayoutStyle.navLink}
                    >
                      {translateCommon('services')}
                    </Link>
                    <ul className={LayoutStyle.dropdownContent}>
                      <li className={LayoutStyle.dropdownContentItem}>
                        <Link
                          href={ROUTERS.BEVERAGE_PRODUCT_DEVELOPMENT}
                          className={LayoutStyle.linkDropdown}
                        >
                          {translateCommon('beverageProductDevelopment')}
                        </Link>
                      </li>
                      <li className={LayoutStyle.dropdownContentItem}>
                        <Link
                          href={ROUTERS.BEVERAGE_PACKAGING_DESIGN}
                          className={LayoutStyle.linkDropdown}
                        >
                          {translateCommon('beveragePackagingDesign')}
                        </Link>
                      </li>
                      <li className={LayoutStyle.dropdownContentItem}>
                        <Link
                          href={ROUTERS.PRIVATE_LABEL_SERVICES}
                          className={LayoutStyle.linkDropdown}
                        >
                          {translateCommon('privateLabelServices')}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`${LayoutStyle.navItem}`}>
                    <Link href={ROUTERS.NEWS} className={LayoutStyle.navLink}>
                      {translateCommon('news')}
                    </Link>
                  </li>
                  <li className={`${LayoutStyle.navItem}`}>
                    <Link
                      href={ROUTERS.CONTACT}
                      className={LayoutStyle.navLink}
                    >
                      {translateCommon('contact')}
                    </Link>
                  </li>
                  <li className={`${LayoutStyle.navItem}`}>
                    <Link
                      href={ROUTERS.RECRUITMENT}
                      className={LayoutStyle.navLink}
                    >
                      {translateCommon('recruitment')}
                    </Link>
                  </li>
                </ul>
              </Space>
              <Space style={{ marginRight: '8px' }}>
                <div className={LayoutStyle.headerTool}>
                  <div id="searchBox" className={LayoutStyle.searchBox}>
                    <input
                      className={LayoutStyle.searchPlace}
                      type="text"
                      placeholder={translateCommon('search')}
                    />
                    <div className={LayoutStyle.buttonSearch}>
                      <SearchOutlined className={LayoutStyle.btnSearch} />
                    </div>
                  </div>
                </div>
              </Space>
              <Space>
                <Select
                  defaultValue={locale}
                  className={LayoutStyle.dropdownLanguage}
                  options={[
                    { value: 'en', label: `${translateCommon('english')}` },
                    { value: 'vn', label: `${translateCommon('vietnamese')}` },
                    { value: 'cn', label: `${translateCommon('chinese')}` },
                  ]}
                  onChange={(selectedValues) => {
                    onClickChangeLanguage(selectedValues);
                  }}
                />
              </Space>
            </div>
            <MenuOutlined
              className={LayoutStyle.menuButton}
              onClick={() => setShowMobileMenu(true)}
            />
          </Space>
          <Drawer
            title={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
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
              </div>
            }
            placement="right"
            zIndex={99999}
            onClose={() => setShowMobileMenu(false)}
            open={showMobileMenu}
          >
            <Row
              style={{
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <Col flex={1}>
                <Menu
                  mode="inline"
                  items={items}
                  selectedKeys={[selectedKey]}
                  onClick={handleClickMenuItem}
                />
              </Col>
            </Row>
          </Drawer>
        </Header>
        <Content>
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
                    <h1>Chau Giang Food Beverage</h1>
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
                      <div>
                        <p className={LayoutStyle.contentFooterOut}>
                          Factory Block 1, Lot C1-1/X6-X7, Road D4, Tan Phu
                          Trung Industrial Park, Cu Chi District, HCMC, Vietnam.
                        </p>
                      </div>
                    </div>

                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <MailOutlined className={LayoutStyle.iconFooterOut} />
                      <a href="mailto:chaugiangfood@gmail.com">
                        <p>chaugiangfood@gmail.com</p>
                      </a>
                    </div>

                    <div
                      className={`${LayoutStyle.dflex} ${LayoutStyle.footerItem}`}
                    >
                      <GlobalOutlined className={LayoutStyle.iconFooterOut} />
                      <a href="https://chaugiangfood.com">
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
                          <img src="/images/zalo.png" alt="" />
                        </div>
                      </a>

                      <a href="">
                        <div className={LayoutStyle.imgMedia}>
                          <img src="/images/fb.png" alt="" />
                        </div>
                      </a>

                      <a href="">
                        <div className={LayoutStyle.imgMedia}>
                          <img src="/images/call.png" alt="" />
                        </div>
                      </a>

                      <a href="">
                        <div className={LayoutStyle.imgMedia}>
                          <img src="/images/youtobe.png" alt="" />
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
                          <img src="/images/alibaba.png" alt="" />
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
