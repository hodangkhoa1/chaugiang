import Head from 'next/head';

function BeveragePackagingDesign() {
  return (
    <>
      <Head>
        <title>ChauGiang | Beverage Packaging Design</title>
      </Head>
      <BeveragePackagingDesignPage />
    </>
  );
}

export default BeveragePackagingDesign;
import { getStatic } from '@/lib/getStaticProps';
import BeveragePackagingDesignPage from '@/components/beverage-packaging-design/beverage-packaging-design';
export const getStaticProps = getStatic(['common', 'beveragePackagingDesign']);
