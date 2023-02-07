import React from "react";
import rightArrow from "../assets/images/chevron-right-solid (1).svg";
import leftArrow from "../assets/images/chevron-left-solid (1).svg";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopHeader from "./TopHeader";

const bannerList = [
  {
    id: 1,
    imgUrl: banner1,
    bannerText: "test1",
  },
  {
    id: 2,
    imgUrl: banner2,
    bannerText: "test2",
  },
];

const MainBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img src={rightArrow} alt="left" />,
    prevArrow: <img src={leftArrow} alt="right" />,
  };
  return (
    <>
    <TopHeader />
      <Slider {...settings}>
        {bannerList?.map((banner) => {
          return (
            <div
              key={banner?.id}
              className="container-fluid p-0"
              style={{ position: "relative" }}
            >
              <img
                style={{ width: "100%", height: "80vh" }}
                src={banner?.imgUrl}
                alt=""
              />
              {/* <div className=" mainBannerContent">
                <h1>{banner?.bannerText}</h1>
              </div> */}
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default MainBanner;
