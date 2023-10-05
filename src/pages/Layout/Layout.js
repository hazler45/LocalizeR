import React from "react";
import { NavMenu } from "../../components/NavBar/NavMenu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/Footer/Footer";
export default function LandingPage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const landingPageStyle = {
    backgroundImage: `url("/images/homeImg1.jpg")`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className=" pt-8 px-28 selection:" style={landingPageStyle}>
      {/* this is navbar */}
        <NavMenu />
        {/* slider header */}
        <Slider {...sliderSettings}>
          <div className="slider-item">
            <div className="slider-content px-28 py-32">
              <h3 className="text-6xl  mb-2 text-white font-bold">
                Lorem Ispum is
                <br /> a Dummy Text.
              </h3>
              <p className="text-40 mb-8  text-gray-200 font-semibold">
                Slide 1 Description
              </p>
              <button className=" bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-sm font-semibold">
                Explore
              </button>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-content px-28 py-32">
              <h3 className="text-6xl mb-2 text-white font-bold">
                Lorem Ispum is
                <br /> a Dummy Text.
              </h3>
              <p className="text-40 mb-8  text-gray-200 font-semibold">
                Slide 2 Description
              </p>
              <button className=" bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-sm font-semibold">
                Explore
              </button>
            </div>
          </div>
        </Slider>
      </div>
      <div className="py-32">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequatur ipsam mollitia quos non voluptatibus, nesciunt eligendi debitis 
        nulla corrupti dolore, sint provident minus quibusdam molestiae, dicta dignissimos! Voluptate, earum.
      </div>
    <Footer/>
    </>
  );
}
