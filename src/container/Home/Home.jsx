import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import images from '../../constants/images';
import "./Home.css";

// import required modules
import { EffectCards } from "swiper";



const Home = () => {
  return (
    <div className="app__home section__padding">
      <div className="app__home-content">
        <h1 >DISCOVER AND COLLECT THE HOTTEST NFTS</h1>
        <p className="p__font1">Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
        <button className="button_1">Explore Now</button>
        <div className="app__home-content_amount">
          <div>
            <h1>98K+</h1>
            <p>Artwork</p>
          </div>
          <div>
            <h1>12K+</h1>
            <p>Auction</p>
          </div>
          <div>
            <h1>15K+</h1>
            <p>Artist</p>
          </div>
        </div>
      </div>
      <div className="app__home-images">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          loop = {true}
        >
          <SwiperSlide>
            <img src={images.NFT_1} alt="NFT 1" />
            <div className="swiper__content">
              <div className="swiper__content-top">
                <h1>Transcendant Collection</h1>
                <div className="swiper__content_profil">
                  <img src={images.avatar_1} alt="Arief Profil" />
                  <p>Turbo Zangief</p>
                </div>
              </div>
              <div className="swiper__content-bottom">
                <div className="content__1">
                  <h1>Current Bid</h1>
                    <div className="current__bid">
                      <img src={images.eth} alt="Etherum Logo" />
                      <p>0.25 ETH</p>
                    </div>
                </div>
                <div className="content__2">
                  <div className="ends__in">
                        <h1>Ends in</h1>
                        <ul>
                          <li>12h</li>
                          <li>43m</li>
                          <li>42s</li>
                        </ul>
                      </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.NFT_2} alt="NFT 2" />
              <div className="swiper__content">
                <div className="swiper__content-top">
                  <h1>Abstr NFT NFT</h1>
                  <div className="swiper__content_profil">
                    <img src={images.profil} alt="Arief Profil" />
                    <p>Arief Wahyudi</p>
                  </div>
                </div>
                <div className="swiper__content-bottom">
                  <div className="content__1">
                    <h1>Current Bid</h1>
                      <div className="current__bid">
                        <img src={images.eth} alt="Etherum Logo" />
                        <p>0.25 ETH</p>
                      </div>
                  </div>
                  <div className="content__2">
                    <div className="ends__in">
                          <h1>Ends in</h1>
                          <ul>
                            <li>12h</li>
                            <li>43m</li>
                            <li>42s</li>
                          </ul>
                        </div>
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.NFT_3} alt="NFT 3" />
                <div className="swiper__content">
                  <div className="swiper__content-top">
                    <h1>Abstr NFT NFT</h1>
                    <div className="swiper__content_profil">
                      <img src={images.profil} alt="Arief Profil" />
                      <p>Arief Wahyudi</p>
                    </div>
                  </div>
                  <div className="swiper__content-bottom">
                    <div className="content__1">
                      <h1>Current Bid</h1>
                        <div className="current__bid">
                          <img src={images.eth} alt="Etherum Logo" />
                          <p>0.25 ETH</p>
                        </div>
                    </div>
                    <div className="content__2">
                      <div className="ends__in">
                            <h1>Ends in</h1>
                            <ul>
                              <li>12h</li>
                              <li>43m</li>
                              <li>42s</li>
                            </ul>
                          </div>
                    </div>
                  </div>
                </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.NFT_4} alt="NFT 4" />
                  <div className="swiper__content">
                    <div className="swiper__content-top">
                      <h1>Abstr NFT NFT</h1>
                      <div className="swiper__content_profil">
                        <img src={images.profil} alt="Arief Profil" />
                        <p>Arief Wahyudi</p>
                      </div>
                    </div>
                    <div className="swiper__content-bottom">
                      <div className="content__1">
                        <h1>Current Bid</h1>
                          <div className="current__bid">
                            <img src={images.eth} alt="Etherum Logo" />
                            <p>0.25 ETH</p>
                          </div>
                      </div>
                      <div className="content__2">
                        <div className="ends__in">
                              <h1>Ends in</h1>
                              <ul>
                                <li>12h</li>
                                <li>43m</li>
                                <li>42s</li>
                              </ul>
                            </div>
                      </div>
                    </div>
                  </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.NFT_5} alt="NFT 5" />
                  <div className="swiper__content">
                    <div className="swiper__content-top">
                      <h1>Abstr NFT NFT</h1>
                      <div className="swiper__content_profil">
                        <img src={images.profil} alt="Arief Profil" />
                        <p>Arief Wahyudi</p>
                      </div>
                    </div>
                    <div className="swiper__content-bottom">
                      <div className="content__1">
                        <h1>Current Bid</h1>
                          <div className="current__bid">
                            <img src={images.eth} alt="Etherum Logo" />
                            <p>0.25 ETH</p>
                          </div>
                      </div>
                      <div className="content__2">
                        <div className="ends__in">
                              <h1>Ends in</h1>
                              <ul>
                                <li>12h</li>
                                <li>43m</li>
                                <li>42s</li>
                              </ul>
                            </div>
                      </div>
                    </div>
                  </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.NFT_6} alt="NFT 6" />
                  <div className="swiper__content">
                    <div className="swiper__content-top">
                      <h1>Abstr NFT NFT</h1>
                      <div className="swiper__content_profil">
                        <img src={images.profil} alt="Arief Profil" />
                        <p>Arief Wahyudi</p>
                      </div>
                    </div>
                    <div className="swiper__content-bottom">
                      <div className="content__1">
                        <h1>Current Bid</h1>
                          <div className="current__bid">
                            <img src={images.eth} alt="Etherum Logo" />
                            <p>0.25 ETH</p>
                          </div>
                      </div>
                      <div className="content__2">
                        <div className="ends__in">
                              <h1>Ends in</h1>
                              <ul>
                                <li>12h</li>
                                <li>43m</li>
                                <li>42s</li>
                              </ul>
                            </div>
                      </div>
                    </div>
                  </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={images.NFT_7} alt="NFT 7" />
                  <div className="swiper__content">
                    <div className="swiper__content-top">
                      <h1>Abstr NFT NFT</h1>
                      <div className="swiper__content_profil">
                        <img src={images.profil} alt="Arief Profil" />
                        <p>Arief Wahyudi</p>
                      </div>
                    </div>
                    <div className="swiper__content-bottom">
                      <div className="content__1">
                        <h1>Current Bid</h1>
                          <div className="current__bid">
                            <img src={images.eth} alt="Etherum Logo" />
                            <p>0.25 ETH</p>
                          </div>
                      </div>
                      <div className="content__2">
                        <div className="ends__in">
                              <h1>Ends in</h1>
                              <ul>
                                <li>12h</li>
                                <li>43m</li>
                                <li>42s</li>
                              </ul>
                            </div>
                      </div>
                    </div>
                  </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Home;