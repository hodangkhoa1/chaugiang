import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';
import { Baloo_2 } from '@next/font/google';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { AppLayout } from '@/layout/layout';
import { useLocaleAnt } from '@/constant';

const inter = Baloo_2({ subsets: ['latin'] });
export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  Layout?: React.ElementType;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const L = Component.Layout ? Component.Layout : AppLayout;
  const localeApp = useLocaleAnt();

  return (
    <ConfigProvider
      locale={localeApp}
      theme={{
        token: {},
        components: {
          Input: {},
        },
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <L>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </L>
    </ConfigProvider>
  );
}

export default appWithTranslation(App);
