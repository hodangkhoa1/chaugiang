// import useI18n from '@/i18n/useI18N';
import React from 'react';
import Style from './recruitment.module.scss';
import { Breadcrumb, Col, Row, Image, Carousel } from 'antd';
import { ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';

export default function RecruitmentPage() {
  // const { translate: translateHome } = useI18n('common');

  return (
    <div style={{ background: '#fff' }}>
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

      <div className={Style.recruimentBody}>
        <Row>
          <Col md={18} lg={18} span={24}>
            <div className={Style.recruimentBodyLeft}>
              <Image
                src="/images/recruitment/recruitment2.png"
                alt="logo"
                width="100%"
                height={500}
                preview={false}
              />
              <div className={Style.recruimentBodyContent}>
                <h1>Nhân viên Marketing: 5 người</h1>
                <h1>Nhân viên kinh doanh: 5 người</h1>
                <h1>
                  Nhân viên thiết kế hình ảnh & quản lý trang website: 3 người
                </h1>
                <h1>Kế toán & Văn phòng: 2 người</h1>
                <h1>Nhân viên phòng Xuất Nhập Khẩu: 5 người</h1>
              </div>
              <div className={Style.recruimentJob}>
                <p>Yêu cầu:</p>
                <h2>– Tốt nghiệp cao đẳng hoặc đại học trở lên.</h2>
                <h2>
                  – Ưu tiên có kinh nghiệm làm việc trong các lĩnh vực tuyển
                  dụng.
                </h2>
                <h2>– Sử dụng thành thạo Tiếng Anh & Tiếng Trung.</h2>
                <h2>– Độ tuổi: từ 23-35 tuổi.</h2>
              </div>
              <div className={Style.recruimentJob}>
                <p>Chế độ:</p>
                <h2>– Lương theo thỏa thuận.</h2>
                <h2>– Có hợp đồng lao động.</h2>
                <h2>– Được đóng Bảo hiểm xã hội & Bảo hiểm y tế.</h2>
                <h2>– Du lịch hằng năm.</h2>
              </div>
              <div className={Style.recruimentJob}>
                <p>Liên hệ:</p>
                <h2>– Các ứng viên nộp hồ sơ xin việc (CV) về địa chỉ:</h2>
                <h3>+ Email: kgray@chaugiangfood.com</h3>
                <h3>+ SDT: 0353960786 (Mr. Hoàng)</h3>
                <h3>+ Thời gian nhận hồ sơ: Từ 01/06/2023 đến 30/06/2023.</h3>
                <h2>
                  – Thời gian phỏng vấn: 8:30 ngày 03 tháng 07 năm 2023, tại văn
                  phòng công ty.
                </h2>
                <h2>
                  – Địa chỉ: Đường N6, KCN Tân Phú Trung, Củ Chi, TP. HCM, Việt
                  Nam.
                </h2>
                <h2>– Các hồ sơ cần chuẩn bị khi tham gia phỏng vấn:</h2>
                <h3>+ Hồ sơ xin việc.</h3>
                <h3>
                  + Bản sao công chứng các văn bằng chứng chỉ có liên quan.
                </h3>
                <h3>+ Bản sao căn cước công dân có công chứng.</h3>
              </div>
              <div className={Style.recruimentJob}>
                <h1>Kế Toán</h1>
                <div className={Style.recruimentJobLine}></div>
              </div>
              <div className={Style.recruimentJob}>
                <h1>Logistic</h1>
                <div className={Style.recruimentJobLine}></div>
              </div>
              <div className={Style.recruimentJob}>
                <h1>Marketing</h1>
                <div className={Style.recruimentJobLine}></div>
              </div>
              <div className={Style.recruimentJob}>
                <h1>Nhân Viên Kinh Doanh</h1>
                <div className={Style.recruimentJobLine}></div>
              </div>
              <div className={Style.recruimentJob}>
                <h1>Thiết Kế</h1>
                <div className={Style.recruimentJobLine}></div>
              </div>
              <div className={Style.recruimentJob}>
                <h1>Tuyển Dụng</h1>
                <div className={Style.recruimentJobLine}></div>
              </div>
              <div className={Style.recruimentJob}>
                <h1>Văn Phòng</h1>
                <div className={Style.recruimentJobLine}></div>
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
                <div className={Style.lastestPostContent}>
                  <p>Milk Tea – Top Concern Of Vietnam Beverage Company</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>Ready for Summer with Private Label Seltzer!</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>New Variants Of Private Label Energy Drink</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>Some Private Label Healthy Drinks For Your Business</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
                <div className={Style.lastestPostContent}>
                  <p>OEM Energy Drinks: Energize Your Day</p>
                  <div className={Style.lastestPostContent}></div>
                </div>
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
      </div>

      <div className={Style.affiliateProduct}>
        <div className={`${Style.dflex} ${Style.affiliateProductTopCover}`}>
          <div className={Style.affiliateProductTitle}>
            <h1>You May Also Like...</h1>
          </div>
        </div>
      </div>

      <div className={Style.carouselProductBackground}>
        <Carousel slidesToShow={4} className={Style.productCarousel} autoplay>
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
