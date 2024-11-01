/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config');

const appEnv = process.env.APP_ENV || 'dev';
const version = process.env.VERSION || '0.1.0';

const API_MAIN_GW = {
  dev: 'https://dienmaysaigonxanh.id.vn:444',
  staging: 'https://dienmaysaigonxanh.id.vn:444',
  production: 'https://dienmaysaigonxanh.id.vn:444',
};

const env = {
  VERSION: version,
  APP_ENV: appEnv,
  API_MAIN_GW: API_MAIN_GW[appEnv],
};

const nextConfig = {
  reactStrictMode: false,
  i18n,
  env,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
