import Head from 'next/head';

function ProductDetail() {
  return (
    <>
      <Head>
        <title>ChauGiang | Products Detail</title>
      </Head>
      <ProductDetailPage />
    </>
  );
}

export default ProductDetail;
import { getStatic } from '@/lib/getStaticProps';
import ProductDetailPage from '@/components/products/product-detail';
export const getStaticProps = getStatic(['common', 'productDetail']);
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
