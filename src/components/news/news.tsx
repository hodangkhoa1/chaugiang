// import useI18n from '@/i18n/useI18N';
import React, { useEffect, useState } from 'react';
import Style from './news.module.scss';
import { Breadcrumb, Col, Row, Image, Carousel } from 'antd';
import {
  ClockCircleOutlined,
  SearchOutlined,
  StarFilled,
  LeftOutlined,
  RightOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import news from '../../data/news.json';
import { useRouter } from 'next/router';
import { LastestPostsData } from './interface';
import Link from 'next/link';
import { ROUTERS } from '@/constant/router';

export default function NewsPage() {
  // const { translate: translateHome } = useI18n('common');
  const router = useRouter();
  const { id } = router.query;
  const newsData = getItemById(id as string);
  const [lastestPostsData, setLastestPostsData] =
    useState<LastestPostsData[]>();

  function getItemById(id: string) {
    return news.find((item: { id: string }) => item.id === id);
  }

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

  useEffect(() => {
    import('../../data/newsHome.json')
      .then((response) => {
        const data: LastestPostsData[] = response.default;
        setLastestPostsData(data);
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
            <h1>News And Event</h1>
          </div>
        </div>

        <Breadcrumb
          className={Style.introduceBreadcrumb}
          items={[
            {
              title: 'Home',
            },
            {
              title: 'Blog',
            },
            {
              title: 'News',
            },
            {
              title: newsData?.title,
            },
          ]}
        />
      </div>

      <div className={`${Style.newsTime} ${Style.dflex}`}>
        <ClockCircleOutlined className={Style.newsTimeIcon} />
        <p>{newsData?.dateCreate}</p>
        <p>News</p>
        <div className={Style.newsTimeLine}></div>
      </div>

      <div className={Style.newsTimeBody}>
        <h1>{newsData?.title}</h1>

        <Row>
          <Col md={18} lg={18} span={24}>
            <div className={Style.recruimentBodyLeft}>
              <Image
                src={newsData?.image1}
                alt="logo"
                width="100%"
                height="100%"
              />
              <div className={Style.newsContent}>
                <h2>{newsData?.title2}</h2>
                <p>{newsData?.title2_content1}</p>
                <p>{newsData?.title2_content2}</p>
              </div>
              <div style={{ marginTop: '20px' }}>
                <Image
                  src={newsData?.image2}
                  alt="logo"
                  width="100%"
                  height="100%"
                />
              </div>
              <div style={{ marginTop: '20px' }}>
                <Image
                  src={newsData?.image3}
                  alt="logo"
                  width="100%"
                  height="100%"
                />
              </div>
              <div style={{ marginTop: '20px' }}>
                <Image
                  src={newsData?.image4}
                  alt="logo"
                  width="100%"
                  height="100%"
                />
              </div>
              <div style={{ marginTop: '20px' }}>
                <Image
                  src={newsData?.image5}
                  alt="logo"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </Col>
          <Col md={6} lg={6} span={24}>
            <div className={Style.recruimentBodyRight}>
              <div className={Style.recruimentBodySearch}>
                <h1>Search</h1>
                <div className={Style.searchBox}>
                  <div className={Style.buttonSearch}>
                    <SearchOutlined className={Style.btnSearch} />
                  </div>
                  <input
                    className={Style.searchPlace}
                    type="text"
                    placeholder="Search..."
                  />
                </div>
              </div>
              <div className={Style.recruimentBodyLastestPost}>
                <h1>Lastest Posts</h1>
                {lastestPostsData?.map((lastestPosts, index) => (
                  <Link
                    href={ROUTERS.NEWS(lastestPosts.detailID)}
                    key={index}
                    className={Style.lastestPostContent}
                  >
                    <p>{lastestPosts.title}</p>
                    <div className={Style.lastestPostContent}></div>
                  </Link>
                ))}
              </div>
              <div className={Style.recruimentBodyLastestPost}>
                <h1>Product Cagories</h1>
                <div className={Style.lastestPostContent}>
                  <p>Coconut water</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>Fruit Juice Drink</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>Milk Drink</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>Sparkling Juice Drink</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>Coffee</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>Energy Drink</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>PET Aloe Vera Drink</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
              </div>
              <div className={Style.recruimentBodyLastestPost}>
                <h1>Categories</h1>
                <div className={Style.lastestPostContent}>
                  <p>News</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>Event</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
              </div>
              <div className={Style.recruimentBodyLastestPost}>
                <h1>Chau Giang Beverage Introduction Video</h1>
                <div>
                  <iframe
                    width="100%"
                    height="195"
                    src="https://www.youtube.com/embed/vyqrV-t0sPc?autoplay=1&controls=0&rel=0&mute=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className={`${Style.dflex} ${Style.rating}`}>
          <StarFilled className={Style.starIcon} />
          <StarFilled className={Style.starIcon} />
          <StarFilled className={Style.starIcon} />
          <StarFilled className={Style.starIcon} />
          <StarFilled className={Style.starIcon} />

          <p>5/5 - (1 vote)</p>
        </div>
        <p className={Style.comment}>0 Conment</p>
        <div className={Style.commentLine}></div>
      </div>

      <div className={Style.affiliateProduct}>
        <div className={`${Style.dflex} ${Style.affiliateProductTopCover}`}>
          <div className={Style.affiliateProductTitle}>
            <h1>You May Also Like...</h1>
          </div>
        </div>
      </div>

      <div className={Style.carouselProductBackground}>
        <Carousel
          slidesToShow={4}
          className={Style.productCarousel}
          autoplay
          arrows
          {...settings}
          responsive={carouselResponsiveSettings}
        >
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/22.png" alt="" />
            </div>
            <h1>Coffee Mocha</h1>
            <h4>250ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/23.png" alt="" />
            </div>
            <h1>Coffee Latte</h1>
            <h4>250ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/24.png" alt="" />
            </div>
            <h1>Bubble Tea With Lemon</h1>
            <h4>330ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/25.png" alt="" />
            </div>
            <h1>Lotus Heart Tea</h1>
            <h4>250ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/22.png" alt="" />
            </div>
            <h1>Coffee Mocha</h1>
            <h4>250ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/23.png" alt="" />
            </div>
            <h1>Coffee Latte</h1>
            <h4>250ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/24.png" alt="" />
            </div>
            <h1>Bubble Tea With Lemon</h1>
            <h4>330ml</h4>
          </div>
          <div className={Style.productCard}>
            <div className={Style.productCardImage}>
              <img src="/images/products/25.png" alt="" />
            </div>
            <h1>Lotus Heart Tea</h1>
            <h4>250ml</h4>
          </div>
        </Carousel>
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
