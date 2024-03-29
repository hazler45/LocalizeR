import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavMenu } from "../../components/NavBar/NavMenu";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import './Layout.module.css'
import { FetchServiceProvider } from "../../components/Card/serviceprovider.service";
export default function LandingPage() {

  const [provider, setProvider] = useState([]);

  useEffect(() => {
    FetchServiceProvider().then((res) => {
      if (res.status === 200) {
        res.json().then((body) => {
          setProvider(body);
        });
      }
    });
  }, []);
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
        <NavMenu provider={provider}/>
        {/* slider header */}
        <Slider {...sliderSettings}>
          <div className="slider-item">
            <div className="slider-content px-28 py-32">
              <h3 className="text-6xl  mb-2 text-white font-bold">
                Welcome to
                <br /> LocalizeR
              </h3>
              <p className="text-40 mb-8  text-gray-200 font-semibold">
                One Easy Junction For The Best
              </p>
              <button className=" bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded-sm font-semibold">
                Explore
              </button>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-content px-28 py-32">
              <h3 className="text-6xl mb-2 text-white font-bold">
                Find The Best
                <br /> Local Services
              </h3>
              <p className="text-40 mb-8  text-gray-200 font-semibold">
                Compare service providers to your benifit
              </p>
              <button className=" bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded-sm font-semibold">
                Explore
              </button>
            </div>
          </div>
        </Slider>
      </div>
      <div className="py-12 px-28 " >
      LocalizeR is an online platform that serves as a space for connecting users to service providers. A service provider module can be an independent person or a group of people. The main theme behind this project is to help users find a proper household service, which for now is limited to a certain domain.
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 px-28 ">
        <Card provider={provider}/>
      </div>
      <Footer />
    </>
  );
}
