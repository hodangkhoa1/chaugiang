import React, { useEffect, useState } from 'react';
import Style from './news.module.scss';
import { Breadcrumb, Col, Row, Image, Carousel, Form, Input } from 'antd';
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
import { LastestPostsData, NewsProductData } from './interface';
import Link from 'next/link';
import { ROUTERS } from '@/constant/router';
import { Reveal } from '../commons/reveal';
import useI18n from '@/i18n/useI18N';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
const { TextArea } = Input;

const onFinish = async (values: any) => {
  try {
    await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Email sent successfully!',
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Error sending email!',
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

const onFinishFailed = (errorInfo: any) => {
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: `Failed: ${errorInfo}`,
    showConfirmButton: false,
    timer: 1500,
  });
};

type FieldType = {
  firstAndLastName?: string;
  phoneNumber?: string;
  email?: string;
  informationNeededSupport?: string;
};

export default function NewsPage() {
  const { translate: translateCommon } = useI18n('common');
  const { translate: translateNews } = useI18n('news');
  const router = useRouter();
  const { id } = router.query;
  const newsData = getItemById(id as string);
  const [lastestPostsData, setLastestPostsData] =
    useState<LastestPostsData[]>();
  const [newsProductData, setNewsProductData] = useState<NewsProductData[]>();

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

    import('../../data/productInPrivateLabelService.json')
      .then((response) => {
        const data: NewsProductData[] = response.default;
        setNewsProductData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Reveal>
        <div className={Style.headerBackground}></div>
      </Reveal>

      <Reveal>
        <div className={Style.introduce}>
          <div className={`${Style.dflex} ${Style.introduceTopCover}`}>
            <div className={Style.introduceTitle}>
              <h1>{translateNews('newsAndEvent')}</h1>
            </div>
          </div>

          <Breadcrumb
            className={Style.introduceBreadcrumb}
            items={[
              {
                title: `${translateCommon('home')}`,
              },
              {
                title: `${translateNews('blog')}`,
              },
              {
                title: `${translateCommon('news')}`,
              },
              {
                title: newsData?.title,
              },
            ]}
          />
        </div>
      </Reveal>

      <Reveal>
        <div className={`${Style.newsTime} ${Style.dflex}`}>
          <ClockCircleOutlined className={Style.newsTimeIcon} />
          <p>{newsData?.dateCreate}</p>
          <p>{translateCommon('news')}</p>
          <div className={Style.newsTimeLine}></div>
        </div>
      </Reveal>

      <Reveal>
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
                  <h1>{translateNews('search')}</h1>
                  <div className={Style.searchBox}>
                    <div className={Style.buttonSearch}>
                      <SearchOutlined className={Style.btnSearch} />
                    </div>
                    <input
                      className={Style.searchPlace}
                      type="text"
                      placeholder={translateCommon('search')}
                    />
                  </div>
                </div>
                <div className={Style.recruimentBodyLastestPost}>
                  <h1>{translateNews('lastestPosts')}</h1>
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
                  <h1>{translateNews('productCagories')}</h1>
                  <Link
                    href={ROUTERS.PRODUCTS_DETAIL('1')}
                    className={Style.lastestPostContent}
                  >
                    <p>Coconut water</p>
                    <div className={Style.lastestPostContent}></div>
                  </Link>
                  <Link
                    href={ROUTERS.PRODUCTS_DETAIL('10')}
                    className={Style.lastestPostContent}
                  >
                    <p>Fruit Juice Drink</p>
                    <div className={Style.lastestPostContent}></div>
                  </Link>
                  <Link
                    href={ROUTERS.PRODUCTS_DETAIL('25')}
                    className={Style.lastestPostContent}
                  >
                    <p>Milk Drink</p>
                    <div className={Style.lastestPostContent}></div>
                  </Link>
                  <Link
                    href={ROUTERS.PRODUCTS_DETAIL('18')}
                    className={Style.lastestPostContent}
                  >
                    <p>Sparkling Juice Drink</p>
                    <div className={Style.lastestPostContent}></div>
                  </Link>
                  <Link
                    href={ROUTERS.PRODUCTS_DETAIL('17')}
                    className={Style.lastestPostContent}
                  >
                    <p>Coffee</p>
                    <div className={Style.lastestPostContent}></div>
                  </Link>
                  <Link
                    href={ROUTERS.PRODUCTS_DETAIL('8')}
                    className={Style.lastestPostContent}
                  >
                    <p>Energy Drink</p>
                    <div className={Style.lastestPostContent}></div>
                  </Link>
                  <Link
                    href={ROUTERS.PRODUCTS_DETAIL('4')}
                    className={Style.lastestPostContent}
                  >
                    <p>Aloe Vera Drink</p>
                    <div className={Style.lastestPostContent}></div>
                  </Link>
                </div>
                <div className={Style.recruimentBodyLastestPost}>
                  <h1>{translateNews('categories')}</h1>
                  <Link
                    href={ROUTERS.NEWS('1')}
                    className={Style.lastestPostContent}
                  >
                    <p>{translateCommon('news')}</p>
                    <div className={Style.lastestPostContent}></div>
                  </Link>
                  <Link
                    href={ROUTERS.RECRUITMENT}
                    className={Style.lastestPostContent}
                  >
                    <p>{translateNews('event')}</p>
                    <div className={Style.lastestPostContent}></div>
                  </Link>
                </div>
                <div className={Style.recruimentBodyLastestPost}>
                  <h1>{translateNews('introductionVideo')}</h1>
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
      </Reveal>

      <Reveal>
        <div className={Style.affiliateProduct}>
          <div className={`${Style.dflex} ${Style.affiliateProductTopCover}`}>
            <div className={Style.affiliateProductTitle}>
              <h1>{translateNews('youMayAlsoLike')}</h1>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.carouselProductBackground}>
          <Carousel
            slidesToShow={4}
            className={Style.productCarousel}
            autoplay
            responsive={carouselResponsiveSettings}
            arrows
            {...settings}
          >
            {newsProductData?.map((bestSelling, index) => (
              <Link
                href={ROUTERS.PRODUCTS_DETAIL(bestSelling.productDetail)}
                className={Style.productCard}
                key={index}
              >
                <div className={Style.productCardImage}>
                  <img src={bestSelling.image} alt="" />
                </div>
                <h1>{bestSelling.name}</h1>
                <h4>{bestSelling.volume}</h4>
              </Link>
            ))}
          </Carousel>
        </div>
      </Reveal>

      <Reveal>
        <div className={Style.customerInformation}>
          <div className={Style.customerInformationCover}>
            <div className={Style.customerInformationTop}>
              <div
                className={`${Style.dflex} ${Style.customerInformationTopCover}`}
              >
                <div
                  className={`${Style.dflex} ${Style.customerInformationTitle}`}
                >
                  <h1>{translateNews('customerInformation')}</h1>
                </div>
              </div>
            </div>

            <div className={Style.customerInformationCenter}>
              <p>{translateNews('customerInformationPleaseProvide')}</p>
            </div>

            <div
              className={`${Style.dflex} ${Style.customerInformationBottom}`}
            >
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item<FieldType>
                  name="firstAndLastName"
                  rules={[
                    {
                      required: true,
                      message: 'Please input first and last name!',
                    },
                  ]}
                >
                  <Input placeholder={translateNews('firstAndLastName')} />
                </Form.Item>

                <Form.Item<FieldType>
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: 'Please input phone number!',
                    },
                  ]}
                >
                  <Input placeholder={translateNews('phoneNumber')} />
                </Form.Item>

                <Form.Item<FieldType>
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input email!',
                    },
                  ]}
                >
                  <Input placeholder={translateNews('email')} />
                </Form.Item>

                <Form.Item<FieldType>
                  name="informationNeededSupport"
                  rules={[
                    {
                      required: true,
                      message: 'Please input information needed support!',
                    },
                  ]}
                >
                  <TextArea
                    className={Style.styleTextArea}
                    cols={22}
                    placeholder={translateNews('informationNeededSupport')}
                  />
                </Form.Item>

                <Form.Item className={Style.dflex}>
                  <div className={Style.btn_see_more}>
                    <button className={`${Style.dflex}`}>
                      <p>{translateNews('sendInformation')}</p>
                      <ArrowRightOutlined className={Style.iconBtn} />
                    </button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
