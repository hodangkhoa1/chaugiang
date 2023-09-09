import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import enUS from 'antd/lib/locale/en_US';
import vi_VN from 'antd/lib/locale/vi_VN';
import zh_CN from 'antd/lib/locale/zh_CN';

export enum LANGUAGE {
  'vn' = 'vn',
  'en' = 'en',
  'cn' = 'cn',
}

export function useLocale(): LANGUAGE {
  const router = useRouter();
  return (router.locale as LANGUAGE) || LANGUAGE.en;
}

export function useLocaleAnt() {
  const [localeApp, setLocaleApp] = useState(enUS);
  const locale = useLocale();
  useEffect(() => {
    switch (locale) {
      case 'en':
        setLocaleApp(enUS);
        break;
      case 'vn':
        setLocaleApp(vi_VN);
        break;
      case 'cn':
        setLocaleApp(zh_CN);
        break;
      default:
        setLocaleApp(enUS);
        break;
    }
  }, [locale]);
  return localeApp;
}
