export const ROUTERS = {
  HOME: '/',
  WHO_WE_ARE: '/introduce/who-we-are',
  COMPANY_PROFILE: '/introduce/company-profile',
  CATALOGUE: '/introduce/catalogue',
  PRODUCTS: '/products',
  PRODUCTS_DETAIL: (productId: string) => `/products/detail/${productId}`,
  BEVERAGE_PACKAGING_DESIGN: '/service/beverage-packaging-design',
  BEVERAGE_PRODUCT_DEVELOPMENT: '/service/beverage-product-development',
  PRIVATE_LABEL_SERVICES: '/service/private-label-services',
  RECRUITMENT: '/recruitment',
  CONTACT: '/contact',
  NEWS: (newsId: string) => `/news/${newsId}`,
};
