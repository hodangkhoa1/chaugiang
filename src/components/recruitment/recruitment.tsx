// import useI18n from '@/i18n/useI18N';
import React from 'react';
import Style from './recruitment.module.scss';
import { Breadcrumb } from 'antd';

export default function RecruitmentPage() {
  // const { translate: translateHome } = useI18n('common');

  return (
    <div>
      <div className={Style.headerBackground}></div>

      <div className={Style.introduce}>
        <div className={`${Style.dflex} ${Style.introduceTopCover}`}>
          <div className={Style.introduceTitle}>
            <h1>Recruitment</h1>
          </div>
          <div className={Style.introduceLine}></div>
        </div>

        <Breadcrumb
          className={Style.introduceBreadcrumb}
          items={[
            {
              title: 'Home',
            },
            {
              title: 'Recruitment',
            },
          ]}
        />
      </div>

      <div className={Style.recruimentAnouncement}>
        <h1>Thông báo tuyển dụng:</h1>
        <h2>Công ty TNHH CBLT-TP Châu Giang tuyển các vị trí sau:</h2>
      </div>
    </div>
  );
}
