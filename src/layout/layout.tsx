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
