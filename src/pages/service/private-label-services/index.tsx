import Head from 'next/head';

function PrivateLabelServices() {
  return (
    <>
      <Head>
        <title>ChauGiang | Private Label Services</title>
      </Head>
      <PrivateLabelServicesPage />
    </>
  );
}

export default PrivateLabelServices;
import { getStatic } from '@/lib/getStaticProps';
import PrivateLabelServicesPage from '@/components/private-label-services/private-label-services';
export const getStaticProps = getStatic(['common']);
