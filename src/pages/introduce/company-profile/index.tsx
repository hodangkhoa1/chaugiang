import Head from 'next/head';

function CompanyProfile() {
  return (
    <>
      <Head>
        <title>ChauGiang | Company Profile</title>
      </Head>
      <CompanyProfilePage />
    </>
  );
}

export default CompanyProfile;
import { getStatic } from '@/lib/getStaticProps';
import CompanyProfilePage from '@/components/company-profile/company-profile';
export const getStaticProps = getStatic(['common', 'companyprofile']);
