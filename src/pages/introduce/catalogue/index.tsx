import Head from 'next/head';

function Catalogue() {
  return (
    <>
      <Head>
        <title>ChauGiang | Catalogue</title>
      </Head>
      <CataloguePage />
    </>
  );
}

export default Catalogue;
import { getStatic } from '@/lib/getStaticProps';
import CataloguePage from '@/components/catalogue/catalogue';
export const getStaticProps = getStatic(['common', 'catalogue']);
