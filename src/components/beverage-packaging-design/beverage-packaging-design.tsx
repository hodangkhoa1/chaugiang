// import useI18n from '@/i18n/useI18N';
import React, { useEffect, useState } from 'react';
import Style from './beverage-packaging-design.module.scss';
import { Breadcrumb, Col, Row, Image, Carousel } from 'antd';
import {
  ArrowRightOutlined,
  RightOutlined,
  LeftOutlined,
} from '@ant-design/icons';
import { ProductData } from './interface';
import Link from 'next/link';
import { ROUTERS } from '@/constant/router';

export default function BeveragePackagingDesignPage() {
  // const { translate: translateHome } = useI18n('common');

  const carouselResponsiveSettings = [
    {
      breakpoint: 1258,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 876,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: '#00894f',
          fontSize: '16px',
          background: '#8dc63f',
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          marginRight: '10px',
          marginTop: '-60px',
        }}
        onClick={onClick}
      >
        <RightOutlined />
      </div>
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          color: '#00894f',
          fontSize: '16px',
          background: '#8dc63f',
          width: '30px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          marginLeft: '10px',
          marginTop: '-60px',
        }}
        onClick={onClick}
      >
        <LeftOutlined />
      </div>
    );
  };

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [productData, setProductData] = useState<ProductData[]>();

  useEffect(() => {
    import('../../data/productInOtherPage.json')
      .then((response) => {
        const data: ProductData[] = response.default;
        setProductData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <div className={Style.headerBackground}></div>

      <div className={Style.introduce}>
        <div className={`${Style.dflex} ${Style.introduceTopCover}`}>
          <div className={Style.introduceTitle}>
            <h1>Our Services</h1>
          </div>
        </div>

        <Breadcrumb
          className={Style.introduceBreadcrumb}
          items={[
            {
              title: 'Home',
            },
            {
              title: 'Our Services',
            },
            {
              title: 'Beverage Packaging Design',
            },
          ]}
        />
      </div>

      <div className={`${Style.dflex} ${Style.introducePackagingDesigner}`}>
        <div
          className={`${Style.dflex} ${Style.introducePackagingDesignerTopCover}`}
        >
          <div className={Style.introducePackagingDesignerTitle}>
            <h1>Packaging Designer</h1>
          </div>
        </div>

        <div className={Style.introducePackagingDesignerCenter}>
          <h2>
            Are you looking for beverage packaging options or a great beverage
            packaging designer?
          </h2>
          <p className={Style.introducePackagingDesignerSub}>
            Need a packaging designer?
          </p>
          <p>
            Each member of our core design team has been designing packaging for
            most of their professional careers and many of them have been
            directly involved in the beverage packaging design field for
            decades. Want to know more about beverage packaging design and how
            to find and buy the best beverage packaging for your new beverage
            brand?
          </p>
        </div>

        <div
          className={`${Style.dflex} ${Style.introducePackagingDesignerLogo}`}
        >
          <Image
            src="/images/services/can.png"
            alt="logo"
            width="100%"
            height={500}
          />
        </div>
      </div>

      <div className={`${Style.dflex} ${Style.usefulTips}`}>
        <div className={`${Style.dflex} ${Style.usefulTipsLeft}`}>
          <div className={Style.aboutTheDirectorLeftCenter}>
            <h2>Useful tips for great beverage packaging design</h2>
            <p>1) Make sure you chose the right style of packaging.</p>
            <p style={{ marginBottom: '20px' }}>
              Always keep in mind that the starting vessel or shape is going to
              make a big difference to the final product i.e. its tough to make
              a boring shape exciting so start with an interesting container and
              your job will be much easier.
            </p>
            <p>
              2) Find out what is possible to print on the container that you
              select.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Many types of beverage packaging are limited in the amount or
              types of colors and textures that you can print on them. As an
              example many beverage can manufacturing facilities can only print
              6 or 7 colors on a beverage can.
            </p>
            <p>3) Design your logo.</p>
            <p style={{ marginBottom: '20px' }}>
              Decide what your brand stands for? Who are the consumers that you
              want to appeal to? What message or feeling do you want to get
              across to them? And anything else thats important to the image and
              message of your new product.
            </p>
            <p>
              4) Decide what you want the beverage packaging design to
              communicate to your customer?
            </p>
            <p style={{ marginBottom: '20px' }}>
              Are you trying to let them know that your product is “ALL
              NATURAL”? Then make sure your main message is front and center and
              that its not hidden or confusing to the customer.
            </p>
            <p>
              5) Make sure you dont over crowd the packaging with too much
              information and that the information is well organized.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Keeping the label of your beverage simple and easy to read is key,
              if you are going to put a lot of information make sure its well
              placed. Keep the front of the packaging simple and to the point,
              put the detail on the side and on the back.
            </p>
            <p>
              If you would like to discuss your beverage packaging design in
              detail contact us.
            </p>
          </div>
        </div>
        <div className={`${Style.dflex} ${Style.usefulTipsRight}`}>
          <div className={Style.usefulTipsRightBackground}>
            <Image
              src="/images/services/service2.png"
              alt="logo"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>

      <div className={Style.affiliateProduct}>
        <div className={`${Style.dflex} ${Style.affiliateProductTopCover}`}>
          <div className={Style.affiliateProductTitle}>
            <h1>Affiliate Products</h1>
          </div>
        </div>
      </div>

      <div className={Style.carouselProductBackground}>
        <Carousel
          slidesToShow={4}
          className={Style.productCarousel}
          autoplay
          responsive={carouselResponsiveSettings}
          arrows
          {...settings}
        >
          {productData?.map((product, index) => (
            <Link
              href={ROUTERS.PRODUCTS_DETAIL(product.productDetail)}
              className={Style.productCard}
              key={index}
            >
              <div className={Style.productCardImage}>
                <img src={product.image} alt="" />
              </div>
              <h1>{product.name}</h1>
              <h4>{product.volume}</h4>
            </Link>
          ))}
        </Carousel>
      </div>

      <div className={Style.whyChooseUs}>
        <div className={Style.whyChooseUsCover}>
          <div className={Style.whyChooseUsTop}>
            <div className={`${Style.dflex} ${Style.whyChooseUsTopCover}`}>
              <div className={`${Style.dflex} ${Style.whyChooseUsTitle}`}>
                <h1>Why choose Us?</h1>
              </div>
            </div>
          </div>

          <div className={Style.whyChooseUsBottom}>
            <Row
              gutter={100}
              style={{ marginLeft: 'unset', marginRight: 'unset' }}
            >
              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-28.png" alt="" />
                  </div>
                  <h2>Hight Quality</h2>
                  <p>
                    Product quality is always developed by CG Food to meet
                    national and international requirements. We are certain that
                    our products will have a natural flavor, be highly
                    nutritious, and follow the latest trends in the market.
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-29.png" alt="" />
                  </div>
                  <h2>Fast Delivery</h2>
                  <p>
                    In order to ensure the leading time in accordance with
                    client requests, CG Food has a sizable packing and labeling
                    area. We also have a skilled logistic crew on hand to assist
                    you whenever you need it.
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-30.png" alt="" />
                  </div>
                  <h2>Flexible Packaging</h2>
                  <p>
                    We consistently satisfy the demands for product packaging
                    from clients across the global market by combining modernism
                    and experience. Our employees are trained to catch up with
                    recent trends of packing specification.
                  </p>
                </div>
              </Col>

              <Col className={Style.colWhyChooseUs} md={12} lg={6} span={24}>
                <div className={`${Style.dflex} ${Style.whyChooseUsItem}`}>
                  <div className={Style.whyChooseUsBottomImage}>
                    <img src="/images/why_choose_us/Untitled-31.png" alt="" />
                  </div>
                  <h2>Free Sample</h2>
                  <p>
                    Because their satisfaction makes us happy, we only deliver
                    the best products to our consumers. In order for the model
                    to rapidly reach clients, we always select the best shipping
                    services.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className={Style.customerInformation}>
        <div className={Style.customerInformationCover}>
          <div className={Style.customerInformationTop}>
            <div
              className={`${Style.dflex} ${Style.customerInformationTopCover}`}
            >
              <div
                className={`${Style.dflex} ${Style.customerInformationTitle}`}
              >
                <h1>Customer Information</h1>
              </div>
            </div>
          </div>

          <div className={Style.customerInformationCenter}>
            <p>
              Please provide the information below to receive our free
              consultation service package
            </p>
          </div>

          <div className={`${Style.dflex} ${Style.customerInformationBottom}`}>
            <input type="text" placeholder="First and last name" />
            <input type="tel" placeholder="Phone number" />
            <input type="text" placeholder="Email" />
            <textarea
              cols={22}
              placeholder="Information needed support"
            ></textarea>

            <div className={Style.btn_see_more}>
              <button className={`${Style.dflex}`}>
                <p>Send information</p>
                <ArrowRightOutlined className={Style.iconBtn} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
