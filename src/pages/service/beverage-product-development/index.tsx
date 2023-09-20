import Head from 'next/head';

function BeverageProductDevelopment() {
  return (
    <>
      <Head>
        <title>ChauGiang | Beverage Product Development</title>
      </Head>
      <BeverageProductDevelopmentPage />
    </>
  );
}

export default BeverageProductDevelopment;
import { getStatic } from '@/lib/getStaticProps';
import BeverageProductDevelopmentPage from '@/components/beverage-product-development/beverage-product-development';
export const getStaticProps = getStatic([
  'common',
  'beverageProductDevelopment',
]);
