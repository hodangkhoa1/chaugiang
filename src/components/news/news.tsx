// import useI18n from '@/i18n/useI18N';
import React from 'react';
import Style from './news.module.scss';
import { Breadcrumb, Col, Row, Image } from 'antd';
import {
  ClockCircleOutlined,
  SearchOutlined,
  StarFilled,
} from '@ant-design/icons';

export default function NewsPage() {
  // const { translate: translateHome } = useI18n('common');

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
              title: 'Some Private Label Healthy Drinks For Your Business',
            },
          ]}
        />
      </div>

      <div className={`${Style.newsTime} ${Style.dflex}`}>
        <ClockCircleOutlined className={Style.newsTimeIcon} />
        <p>July 10, 2023</p>
        <p>News</p>
        <div className={Style.newsTimeLine}></div>
      </div>

      <div className={Style.newsTimeBody}>
        <h1>Some Private Label Healthy Drinks For Your Business</h1>

        <Row>
          <Col md={18} lg={18} span={24}>
            <div className={Style.recruimentBodyLeft}>
              <p>
                Welcome to the world of private label healthy drinks! As
                consumers become more health-conscious and demand for healthier
                beverage options continues to rise, the private label offers a
                unique opportunity for businesses to create their own line of
                drinks that cater to these evolving consumer preferences. Get
                ready to explore the exciting world of private label healthy
                drinks and craft your own signature line of beverages that
                resonate with health-conscious consumers!
              </p>
              <Image
                src="/images/news/news1.png"
                alt="logo"
                width="100%"
                height={500}
              />
              <div className={Style.newsContent}>
                <h2>Cold-pressed juices</h2>
                <p>
                  Cold-pressed juices are a type of juice that is extracted
                  using a hydraulic press, which applies thousands of pounds of
                  pressure to fruits and vegetables to extract the juice without
                  using heat or oxygenation. This method is believed to help
                  retain more of the natural flavors, colors, nutrients, and
                  enzymes present in the fruits and vegetables, compared to
                  traditional juicing methods that use heat and high-speed
                  blades.
                </p>
                <p>
                  One of the key aspects that make cold-pressed juices special
                  is their focus on using raw, fresh, and high-quality
                  ingredients. Cold-pressed juices often feature a variety of
                  fruits, vegetables, and sometimes herbs or spices, in
                  different combinations to create unique flavor profiles.
                  Popular ingredients used in cold-pressed juices include kale,
                  spinach, cucumber, apple, pineapple, carrot, beetroot, ginger,
                  lemon, and many more. These ingredients are typically sourced
                  from local farms or organic sources to ensure their freshness
                  and quality.
                </p>
              </div>
              <div className={Style.newsContent}>
                <h2>Functional beverages</h2>
                <p>
                  Functional beverages are a category of beverages that are
                  formulated with added functional ingredients to provide
                  specific health benefits beyond basic hydration and nutrition.
                  These functional ingredients can include vitamins, minerals,
                  antioxidants, probiotics, prebiotics, adaptogens, botanical
                  extracts, and other bioactive compounds that are believed to
                  have beneficial effects on health and wellness.
                </p>
                <p>
                  What makes functional beverages special is their ability to
                  offer targeted health benefits in a convenient and enjoyable
                  form. They are designed to go beyond traditional beverages by
                  providing additional functional properties that are intended
                  to support specific health goals or address specific health
                  concerns. Functional beverages can come in various forms such
                  as ready-to-drink (RTD) beverages, powders, shots,
                  concentrates, and more.
                </p>
              </div>
              <Image
                src="/images/news/news2.png"
                alt="logo"
                width="100%"
                height={500}
              />
              <div className={Style.newsContent}>
                <p style={{ marginTop: '30px' }}>
                  Kombucha is the best choice for summer heat, you can make it
                  by your own. Freeze it in the fridge and then you can drink it
                  every day, good for your digestion, and skin and make you
                  satisfied a lot.
                </p>
              </div>
              <div className={Style.newsContent}>
                <h2>Plant-based Milk Alternatives</h2>
                <p>
                  Plant-based milk alternatives are a growing category of
                  beverages that are made from plant-based ingredients and serve
                  as substitutes for traditional dairy milk. These milk
                  alternatives are typically made from a variety of plant
                  sources such as nuts, seeds, grains, legumes, and fruits, and
                  are formulated to provide a similar taste and texture to dairy
                  milk while being suitable for those who follow a plant-based
                  or dairy-free lifestyle.
                </p>
                <p>
                  What makes plant-based milk alternatives special is their
                  ability to provide a dairy-free and vegan-friendly option for
                  those who are lactose intolerant, have a dairy allergy, or
                  choose to avoid animal products for ethical, environmental, or
                  health reasons. Plant-based milk alternatives offer a wide
                  range of flavors, textures, and nutritional profiles,
                  providing consumers with a diverse array of choices to suit
                  their preferences and dietary needs.
                </p>
              </div>
              <div className={Style.newsContent}>
                <h2>Herbal Teas</h2>
                <p>
                  Herbal teas are made from the infusion of various herbs,
                  spices, flowers, or fruits and are known for their potential
                  health benefits and soothing properties. Private label herbal
                  teas could offer a wide range of flavors and formulations,
                  such as calming chamomile, energizing ginseng, or
                  digestion-boosting peppermint, appealing to consumers who seek
                  natural and flavorful beverages for different wellness needs.
                </p>
              </div>
              <Image
                src="/images/news/news3.png"
                alt="logo"
                width="100%"
                height={500}
              />
              <div className={Style.newsContent}>
                <h2>Sparkling Water with Natural Flavors</h2>
                <p>
                  Sparkling water has gained popularity as a refreshing and
                  zero-calorie alternative to sugary sodas. Private label
                  sparkling water with natural flavors could offer a variety of
                  fruit-infused options like lemon, raspberry, or cucumber,
                  providing a healthier and hydrating choice for consumers who
                  are looking for fizzy and flavorful beverages without added
                  sugars.
                </p>
              </div>
              <div className={Style.newsContent}>
                <h2>Enhanced Water</h2>
                <p>
                  Enhanced water beverages are fortified with added vitamins,
                  minerals, electrolytes, or other functional ingredients to
                  provide hydration and additional health benefits. Private
                  label enhanced water could include options like
                  electrolyte-rich sports drinks, vitamin-infused water, or
                  alkaline water, targeting health-conscious consumers who are
                  looking for hydration options with added benefits.
                </p>
                <p>
                  With private label healthy drinks, the possibilities are
                  limitless. From crafting unique flavor profiles to
                  incorporating functional ingredients, you have the flexibility
                  to create a customized beverage lineup that sets your brand
                  apart. So, embrace the opportunity to create your own line of
                  healthy drinks with private label and tap into the growing
                  market for better-for-you beverages. Cheers to a successful
                  venture in the world of private label healthy drinks.
                </p>
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
    </div>
  );
}
