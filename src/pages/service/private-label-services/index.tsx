import Head from 'next/head';

function PrivateLabelServices() {
  return (
    <>
      <Head>
        <title>ChauGiang | Private Label Services</title>
      </Head>
      {/* <CompanyProfilePage /> */}
    </>
  );
}

export default PrivateLabelServices;
import { getStatic } from '@/lib/getStaticProps';
export const getStaticProps = getStatic(['common', 'privateLabelServices']);
