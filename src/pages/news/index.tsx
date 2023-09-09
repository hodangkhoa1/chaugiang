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
export const getStaticProps = getStatic(['common']);
