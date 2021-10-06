import React, { useEffect, useState } from "react";

import "./Course.css";

import { Link } from "react-scroll";

function Course({
  title,
  imageTag,
  punchLine,
  paragraph1,
  paragraph2,
  benefit1,
  benefit2,
  benefit3,
  benefit4,
  benefit5,
  benefit6,
  hargaLunas,
  hargaAngsuran,
}) {
  const [showCourseLogo, handleShowCourseLogo] = useState(false);
  const [rotate, handleRotate] = useState(false);

  useEffect(() => {
    let items = document.getElementsByClassName("course-button-view");
    // items.map((item) => (item.style.display = "block"));
    for (let index = 0; index < items.length; index++) {
      items[index].style.display = "block";
    }
    // item.style.display = "block";
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 1520) {
          handleShowCourseLogo(true);
        } else handleShowCourseLogo(false);
      });
    } else {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 1000) {
          handleShowCourseLogo(true);
        } else handleShowCourseLogo(false);
      });
      // return () => {
      //   window.removeEventListener("scroll");
      // };
    }
  }, []);

  const rotateToFront = () => {
    handleRotate(false);
  };

  const rotateToBack = () => {
    handleRotate(true);
  };
  // console.log(document.getElementById("course-button-view-id"));

  // item.style.display = "block";
  // document.getElementById("course-button-view-id").style.display = "block";
  return (
    // <div className="row course">
    //   <div className="col-md-6 course-left">
    //     <div className="course-top">
    //       <div className="course-top-left">
    //         <div className="tentang-kami-title-div">
    //           <h1 className="tentang-kami-title">
    //             {title.split()[0]}
    //             <br />
    //             {title.split()[1]}
    //           </h1>

    //         </div>
    //       </div>
    //       <div className="course-top-right">
    // <img
    //   src={process.env.PUBLIC_URL + "/web-asset-" + imageTag + ".png"}
    //   alt=""
    //   className={`course-logo ${
    //     showCourseLogo ? "show-course-logo" : "hide-course-logo"
    //   }`}
    //         />
    //       </div>
    //     </div>
    //     <h1 className="course-title">"{punchLine}"</h1>
    //     <div className="course-desc">
    // <p className="course-paragraph">
    //   {paragraph1}
    //   <br></br>
    //   <br></br>
    //   {paragraph2}
    // </p>
    //     </div>
    //   </div>
    //   <div className="col-md-6 course-right">
    //     <div className="course-materi">
    //       <div className="course-circle-icon"></div>
    //       <h3 className="course-materi-title">Materi</h3>
    //     </div>

    // <p className="course-impact">{benefit1}</p>

    // <p className="course-impact">{benefit2}</p>

    // <p className="course-impact">{benefit3}</p>

    // <p className="course-impact">{benefit4}</p>

    // <p className="course-impact">{benefit5}</p>

    // <p className="course-impact">{benefit6}</p>

    // <p className="course-impact">
    //   <span className="course-harga">
    //     * Harga Lunas : Rp. {hargaLunas},-
    //   </span>
    // </p>

    // <p className="course-impact">
    //   <span className="course-harga">
    //     * Angsuran 2x : Rp. {hargaAngsuran},- per bulan
    //   </span>
    // </p>
    //   </div>
    // <div className="course-button-div">
    //   <Link
    //     to="pendaftaran"
    //     spy={true}
    //     smooth={true}
    //     offset={-100}
    //     duration={500}>
    //     <button className="course-button">Daftar Sekarang</button>
    //   </Link>

    // </div>
    // </div>
    <div class="flip-card">
      <div class={`flip-card-inner ${rotate ? "showBack" : "showFront"}`}>
        <div class="flip-card-front">
          {/* <img
            src="img_avatar.png"
            alt="Avatar"
            style={{ width: 300, height: 300 }}
          /> */}
          <div className="course-image-circle">
            <img
              src={"/static/img" + "/web-asset-" + imageTag + ".png"}
              alt=""
              className={`course-logo ${
                showCourseLogo ? "show-course-logo" : "hide-course-logo"
              }`}
            />
          </div>
          <h1 className="course-title-flip">{title}</h1>
          <p className="course-paragraph">
            {paragraph1}
            {paragraph2}
          </p>

          {/* hi */}

          <button
            className="course-button-view"
            id="course-button-view-id"
            onClick={() => rotateToBack()}>
            View More
          </button>
          {/* <span className="course-back-button" onClick={() => rotateToBack()}>
            Back
          </span> */}
        </div>
        <div class="flip-card-back">
          <span className="course-back-button" onClick={() => rotateToFront()}>
            Back
          </span>
          <h3 className="course-materi-title">Materi</h3>
          <p className="course-impact">- {benefit1}</p>

          <p className="course-impact">- {benefit2}</p>

          <p className="course-impact">- {benefit3}</p>

          <p className="course-impact">- {benefit4}</p>

          <p className="course-impact">- {benefit5}</p>

          <p className="course-impact">- {benefit6}</p>

          <p className="course-impact">
            <span className="course-harga">
              * Harga Lunas : Rp. {hargaLunas},-
            </span>
          </p>

          <p className="course-impact">
            <span className="course-harga">
              * Angsuran 2x : Rp. {hargaAngsuran},- per bulan
            </span>
          </p>
          <div className="course-button-div-view course-button-div">
            <Link
              to="pendaftaran"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              <button className="course-button">Daftar Sekarang</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
