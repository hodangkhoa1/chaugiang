// import useI18n from '@/i18n/useI18N';
import React from 'react';
import Style from './contact.module.scss';
import { Breadcrumb } from 'antd';

export default function ContactPage() {
  // const { translate: translateHome } = useI18n('common');

  return (
    <div>
      <div className={Style.headerBackground}></div>

      <div className={Style.introduce}>
        <div className={`${Style.dflex} ${Style.introduceTopCover}`}>
          <div className={Style.introduceTitle}>
            <h1>Contact Us</h1>
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
              title: 'Contact Us',
            },
          ]}
        />
      </div>
    </div>
  );
}
