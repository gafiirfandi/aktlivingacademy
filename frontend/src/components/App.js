import React from "react";
import Slider from "react-slick";
import "./App.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link, animateScroll as scroll } from "react-scroll";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import NavigationBar from "./NavigationBar";
import Banner from "./Banner";
import TentangKami from "./TentangKami";
import Course from "./Course";
import Pengajar from "./Pengajar";
import Pendaftaran from "./Pendaftaran";
import Gallery from "./Gallery";
import Maps from "./Maps";
import Footer from "./Footer";

import courseDetail from "../resources/courseDetail";
import pengajarDetail from "../resources/pengajarDetail";
import galleryDetail from "../resources/galleryDetail";

function App() {
  let settingsCourse;
  let settingsPengajar;
  let settingsGallery;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    settingsCourse = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      infinite: false,
    };
    settingsPengajar = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      infinite: false,
    };
    settingsGallery = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: false,
      nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
      prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
    };
  } else {
    settingsCourse = {
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      dots: true,
      infinite: false,
      nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
      prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
      ],
    };
    settingsPengajar = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      infinite: false,
      nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
      prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
    };
    settingsGallery = {
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      dots: true,
      infinite: false,
      nextArrow: <FontAwesomeIcon icon={faAngleRight} />,
      prevArrow: <FontAwesomeIcon icon={faAngleLeft} />,
    };
  }

  return (
    <div className="app">
      <NavigationBar />
      <Banner id="banner" />
      <TentangKami id="tentang-kami" />
      <div className="container-fluid container-slider" id="course">
        <h1
          className="tentang-kami-title"
          style={{ textAlign: "center", marginTop: 100 }}>
          Program
        </h1>
        <Slider {...settingsCourse} className="slider1">
          {/* <div className="course-flex"> */}
          {courseDetail.map(({ ...course }) => {
            return <Course {...course} />;
          })}
          {/* </div> */}

          {/* <Course imageTag="personalbranding" />
          <Course imageTag="personalbranding" />
          <Course imageTag="personalbranding" /> */}
        </Slider>
      </div>
      <div className="container-fluid container-slider" id="pengajar">
        <h1
          className="tentang-kami-title"
          style={{ textAlign: "center", marginTop: 100 }}>
          Pengajar
        </h1>
        <Slider {...settingsPengajar} className="slider1">
          {pengajarDetail.map(({ ...pengajar }) => {
            return <Pengajar {...pengajar} />;
          })}
          {/* <Pengajar />
          <Pengajar /> */}
        </Slider>
      </div>
      {/* <div className="app-yellow-trapesium-div"> */}
      {/* <img
        src={process.env.PUBLIC_URL + "/web-asset-yellow-trapesium.png"}
        alt=""
        className="app-yellow-trapesium-image"
      /> */}
      {/* </div> */}
      <Pendaftaran id="pendaftaran" />
      <div className="container-fluid container-slider" id="gallery">
        <h1
          className="tentang-kami-title"
          style={{ textAlign: "center", marginTop: 100 }}>
          Kegiatan
        </h1>
        <Slider {...settingsGallery} className="slider1">
          {galleryDetail.map((gallery) => {
            return (
              <div className="gallery-div">
                <img
                  src={"/static/img" + "/" + gallery}
                  className="gallery-images"
                />
              </div>
            );
          })}
        </Slider>
      </div>
      {/* <Gallery id="gallery" /> */}
      <Maps id="maps" />

      {/* <div style={{ width: "25%", height: 200, backgroundColor: "red" }}></div> */}
      {/* <img src={process.env.PUBLIC_URL + "/Optimized-gallery-1.JPG"} alt="" /> */}
      <Footer />
    </div>
  );
}

export default App;
