import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import LayoutStyle from './layout.module.scss';
import { Layout, Space, Typography, Image, Button, Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { appLocalStorage } from '@/utils/localstorage';
import { LOCAL_STORAGE_KEYS } from '@/constant/localstorage';
import { LANGUAGE } from '@/constant';
import { ROUTERS } from '@/constant/router';
import Link from 'next/link';

const { Text } = Typography;
const { Header, Content, Footer } = Layout;
export const HEADER_HEIGHT = 90;
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
            borderBottom: '1px solid',
          }}
        >
          <Space style={{ width: '100%', justifyContent: 'space-between' }}>
            <Space>
              <Image
                preview={false}
                style={{
                  paddingRight: '8px',
                  cursor: 'pointer',
                  width: '192px',
                }}
                src="/images/logo.png"
                onClick={() => router.push(ROUTERS.HOME)}
                alt="logo"
              />
            </Space>
            <Space>
              <ul className={LayoutStyle.navbarNav}>
                <li className={LayoutStyle.navItem}>
                  <Link href="#" className={LayoutStyle.navLink}>
                    Home
                  </Link>
                </li>
                <li className={LayoutStyle.navItem}>
                  <Link href="#" className={LayoutStyle.navLink}>
                    Introduce
                  </Link>
                </li>
                <li className={LayoutStyle.navItem}>
                  <Link href="#" className={LayoutStyle.navLink}>
                    Products
                  </Link>
                </li>
                <li className={LayoutStyle.navItem}>
                  <Link href="#" className={LayoutStyle.navLink}>
                    Services
                  </Link>
                </li>
                <li className={LayoutStyle.navItem}>
                  <Link href="#" className={LayoutStyle.navLink}>
                    News
                  </Link>
                </li>
                <li className={LayoutStyle.navItem}>
                  <Link href="#" className={LayoutStyle.navLink}>
                    Contact
                  </Link>
                </li>
                <li className={LayoutStyle.navItem}>
                  <Link href="#" className={LayoutStyle.navLink}>
                    Recruitment
                  </Link>
                </li>
              </ul>
            </Space>
            <Space>
              <div className={LayoutStyle.headerTool}>
                <div id="searchBox" className={LayoutStyle.searchBox}>
                  <div className={LayoutStyle.buttonSearch}>
                    <SearchOutlined className={LayoutStyle.btnSearch} />
                  </div>
                  <input
                    className={LayoutStyle.searchPlace}
                    type="text"
                    placeholder="Search..."
                  />
                  <button type="button" className={LayoutStyle.buttonMic}>
                    <svg
                      className={LayoutStyle.goxjub}
                      focusable="false"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#4285f4"
                        d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                      ></path>
                      <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                      <path
                        fill="#fbbc04"
                        d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </Space>
            <Space>
              <Button type="text">VN</Button>
              <Divider type="vertical" />
              <Button type="text">EN</Button>
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

          <Footer
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              height: `${FOOTER_HEIGHT}px`,
              backgroundColor: '#00894f',
            }}
          >
            <Text disabled style={{ color: '#fff', fontSize: '16px' }}>
              Copyright 2022 ©Chau Giang Beverage Companies - chaugiangfood.com
              Design by Daitran
            </Text>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
}
