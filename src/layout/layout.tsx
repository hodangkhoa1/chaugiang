import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import LayoutStyle from './layout.module.scss';
import { Layout, Space, Typography, Image, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { appLocalStorage } from '@/utils/localstorage';
import { LOCAL_STORAGE_KEYS } from '@/constant/localstorage';
import { LANGUAGE } from '@/constant';
import { ROUTERS } from '@/constant/router';
import Link from 'next/link';

const { Text } = Typography;
const { Header, Content, Footer } = Layout;
export const HEADER_HEIGHT = 80;
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
            padding: '0 24px',
            background: '#fff',
            height: HEADER_HEIGHT,
          }}
        >
          <Space style={{ width: '100%', justifyContent: 'space-between' }}>
            <Space>
              <Image
                preview={false}
                style={{
                  paddingRight: '8px',
                  cursor: 'pointer',
                  width: '180px',
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
                  <Link href="#" className={LayoutStyle.navLink}>
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
                  <Link href="#" className={LayoutStyle.navLink}>
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
            <div className={`${LayoutStyle.info}`}></div>

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
