import Head from 'next/head';

function News() {
  return (
    <>
      <Head>
        <title>ChauGiang | News</title>
      </Head>
      <NewsPage />
    </>
  );
}

export default News;
import { getStatic } from '@/lib/getStaticProps';
import NewsPage from '@/components/news/news';
export const getStaticProps = getStatic(['common', 'news']);
export const getStaticPaths = async ({ locales }: { locales: [] }) => {
  const ids: string[] = [];
  const paths = ids.map(() =>
    locales.map(() => ({
      params: {},
    }))
  );
  return {
    paths,
    fallback: true,
  };
};
