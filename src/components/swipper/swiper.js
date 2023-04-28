import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import odu from "../brassImg/Rectangle 19.png";
import coffe from "../brassImg/Image (1).png";
import { Pagination } from "swiper";

const SwiperComponent = () => {
  const [swiper, setSwiper] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (swiper) {
      intervalRef.current = setInterval(() => {
        swiper.slideNext();
      }, 5000);
    }

    return () => clearInterval(intervalRef.current);
  }, [swiper]);

  return (
    <Swiper
      modules={[Pagination]}
      onSwiper={setSwiper}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 5000 }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        el: ".swiperPagination",
      }}
    >
      <SwiperSlide>
        <div className="swipper_container">
          <div className="swipper_left">
            <div className="swipper_left_inner">
              <h3>
                “The ease of opening an account completely won me over. The app
                is very easy to navigate and it’s obvious they have the best
                insterests of SMEs at heart. I’m proud to call them my bank.”
              </h3>
              <p>Olakunbi Adedipe, Odu Fashion</p>

              <img src={odu} alt="odu" />
            </div>
          </div>

          <div className="swipper_right">
            <img src={coffe} alt="coffe" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swipper_container">
          <div className="swipper_left">
            <div className="swipper_left_inner">
              <h3>
                “We have to move really fast with our portfolio companies and
                Brass has helped us validate a lot of ideas and turned them to
                businesses with the ease of creating sub-accounts.”
              </h3>
              <p>Simi Adejumo, Hustler Capital</p>

              <img src={odu} alt="odu" />
            </div>
          </div>

          <div className="swipper_right">
            <img src={coffe} alt="coffe" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swipper_container">
          <div className="swipper_left">
            <div className="swipper_left_inner">
              <h3>
                “The ease of opening an account completely won me over. The app
                is very easy to navigate and it’s obvious they have the best
                insterests of SMEs at heart. I’m proud to call them my bank.”
              </h3>
              <p>Olakunbi Adedipe, Odu Fashion</p>

              <img src={odu} alt="odu" />
            </div>
          </div>

          <div className="swipper_right">
            <img src={coffe} alt="coffe" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
