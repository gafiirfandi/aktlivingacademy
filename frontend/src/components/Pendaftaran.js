import React, { useEffect, useState } from "react";

import "./Pendaftaran.css";

import ModalDaftar from "./ModalDaftar";

import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

import "../resources/courseDetail";
import courseDetail from "../resources/courseDetail";
import axios from "axios";

function Pendaftaran({ id }) {
  const [showPendaftaran, handleShowPendaftaran] = useState(false);

  const [programStudi, changeProgramStudi] = useState("");
  const [hargaProgram, changeHargaProgram] = useState("");
  const [namaLengkap, changeNamaLengkap] = useState("");
  const [alamatLengkap, changeAlamatLengkap] = useState("");
  const [tanggal, changeTanggal] = useState("");
  const [bulan, changeBulan] = useState("");
  const [tahun, changeTahun] = useState("");
  const [email, changeEmail] = useState("");
  const [jenisKelamin, changeJenisKelamin] = useState("");
  const [noTelp, changeNoTelp] = useState("");

  const [changedProgramStudi, handleChangedProgramStudi] = useState(false);
  const [optionsHargaProgram, changeOptionHargaProgram] = useState([
    <option>*Pilih Program Studi Terlebih Dahulu</option>,
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const day = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];
  const month = [
    "Januari",
    "Febuari",
    "Maret",
    "April",
    "May",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const date = new Date();
  let year = [];
  // const yearDiff = date.getFullYear()-2000;
  for (let i = 2000; i <= date.getFullYear(); i++) {
    year.push(<option value={i}>{i}</option>);
  }

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 3220) {
          handleShowPendaftaran(true);
        } else handleShowPendaftaran(false);
      });
      return () => {
        window.removeEventListener("scroll");
      };
    } else {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 2450) {
          handleShowPendaftaran(true);
        } else handleShowPendaftaran(false);
      });
      return () => {
        window.removeEventListener("scroll");
      };
    }
  }, []);

  const changeData = (item) => {
    if (item.name === "program-studi") {
      handleChangedProgramStudi(true);
      console.log("program changed");
      changeProgramStudi(item.value);
      let tempOptionsHargaProgram = [
        <option disabled selected>
          *Pilih Harga Program
        </option>,
      ];
      courseDetail.map(({ title, hargaLunas, hargaAngsuran }) => {
        console.log(item.value + " - " + title);
        // changeopt
        if (item.value === title) {
          console.log(true);
          tempOptionsHargaProgram.push(
            <option value={hargaLunas}>{hargaLunas}</option>
          );
          tempOptionsHargaProgram.push(
            <option value={hargaAngsuran}>{hargaAngsuran}</option>
          );
        }
      });
      changeOptionHargaProgram(tempOptionsHargaProgram);
    } else if (item.name === "harga-program") {
      console.log("harga changed");
      changeHargaProgram(item.value);
    } else if (item.name === "nama-lengkap") {
      console.log("nama changed");
      changeNamaLengkap(item.value);
    } else if (item.name === "alamat-lengkap") {
      console.log("alamat changed");
      changeAlamatLengkap(item.value);
    } else if (item.name === "tanggal") {
      console.log("tanggal changed");
      changeTanggal(item.value);
    } else if (item.name === "bulan") {
      console.log("bulan changed");
      changeBulan(item.value);
    } else if (item.name === "tahun") {
      console.log("tahun changed");
      changeTahun(item.value);
    } else if (item.name === "email") {
      console.log("email changed");
      changeEmail(item.value);
    } else if (item.name === "jenis-kelamin") {
      console.log("jenis kelamin changed");
      changeJenisKelamin(item.value);
    } else if (item.name === "no-telp") {
      console.log("no telp changed");
      changeNoTelp(item.value);
    }
  };

  // changeHargaProgram = (value)
  const optionsProgramStudi = [
    <option disabled selected>
      Pilih Program Studi
    </option>,
    courseDetail.map(({ title }) => <option value={title}>{title}</option>),
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    var formData = new FormData();
    formData.append("programStudi", programStudi);
    formData.append("hargaProgram", hargaProgram);
    formData.append("namaLengkap", namaLengkap);
    formData.append("alamatLengkap", alamatLengkap);
    formData.append("tanggal", tanggal);
    formData.append("bulan", bulan);
    formData.append("tahun", tahun);
    formData.append("email", email);
    formData.append("jenisKelamin", jenisKelamin);
    formData.append("noTelp", noTelp);
    axios
      .post(
        "http://localhost:8000",
        {
          programStudi: programStudi,
          hargaProgram: hargaProgram,
          namaLengkap: namaLengkap,
          alamatLengkap: alamatLengkap,
          tanggal: tanggal,
          bulan: bulan,
          tahun: tahun,
          email: email,
          jenisKelamin: jenisKelamin,
          noTelp: noTelp,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        setModalShow(true);
      })
      .catch((error) => {
        console.log(error);
      });

    // window.emailjs
    //   .sendForm("contact_service", "contact_form", event.target)
    //   .then((res) => {
    //     setModalShow(true);
    //     console.log("Email successfully sent!");
    //   })
    //   // Handle errors here however you like, or use a React error boundary
    //   .catch((err) =>
    //     console.error(
    //       "Oh well, you failed. Here some thoughts on the error that occured:",
    //       err
    //     )
    //   );

    // this.setState({
    //   formSubmitted: true,
    // });
  };

  return (
    <div className="container-fluid pendaftaran" id={id}>
      <div className="row pendaftaran-row flex-column-reverse flex-md-row">
        <div className="col-md-7 pendaftaran-left">
          <h1 className="tentang-kami-title">Pendaftaran Online</h1>
          <form
            className="pendaftaran-form"
            onSubmit={(event) => handleSubmit(event)}>
            <div className="form-pendaftaran form-group row">
              <label for="exampleFormControlSelect1" className="col-sm-4">
                Program Studi
              </label>
              <div className="col-sm-8">
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  name="program-studi"
                  placeholder="Pilih program studi"
                  onChange={(event) => changeData(event.target)}>
                  {optionsProgramStudi}
                </select>
              </div>
            </div>
            <div className="form-pendaftaran form-group row">
              <label for="exampleFormControlSelect1" className="col-sm-4">
                Harga Program
              </label>
              <div className="col-sm-8">
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  name="harga-program"
                  onChange={(event) => changeData(event.target)}>
                  {optionsHargaProgram}
                  {/* <option value="1">1</option>
                  <option value="1">4</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="1">5</option> */}
                </select>
              </div>
            </div>
            <div className="form-pendaftaran form-group row">
              <label for="exampleFormControlInput1" className="col-sm-4">
                Nama Lengkap
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Nama Lengkap"
                  name="nama-lengkap"
                  onChange={(event) => changeData(event.target)}
                />
              </div>
            </div>
            <div className="form-pendaftaran form-group row">
              <label for="exampleFormControlInput1" className="col-sm-4">
                Alamat Lengkap
              </label>
              ​
              <div className="col-sm-8">
                <textarea
                  className="form-control"
                  id="txtArea"
                  rows="4"
                  placeholder="Alamat Lengkap"
                  name="alamat-lengkap"
                  onChange={(event) => changeData(event.target)}></textarea>
              </div>
            </div>
            <div className="form-pendaftaran form-group row">
              <label for="exampleFormControlInput1" className="col-sm-4">
                Tanggal Lahir
              </label>
              ​
              <div className="col-sm-8">
                <span>
                  <select
                    className="custom-form-control"
                    name="tanggal"
                    onChange={(event) => changeData(event.target)}>
                    {day.map((dayOption) => (
                      <option value={dayOption}>{dayOption}</option>
                    ))}
                  </select>
                </span>
                <span>
                  <select
                    className="custom-form-control"
                    name="bulan"
                    onChange={(event) => changeData(event.target)}>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </span>
                <span>
                  <select
                    className="custom-form-control"
                    name="tahun"
                    onChange={(event) => changeData(event.target)}>
                    {year.map((yearOption) => yearOption)}
                  </select>
                </span>
              </div>
            </div>
            <div className="form-pendaftaran form-group row">
              <label for="exampleFormControlInput1" className="col-sm-4">
                Email
              </label>
              ​
              <div className="col-sm-8">
                <input
                  type="email"
                  id="exampleFormControlInput1"
                  className="form-control"
                  onChange={(event) => changeData(event.target)}
                  name="email"
                />
              </div>
            </div>

            <div className="form-pendaftaran form-group row">
              <label for="exampleFormControlInput1" className="col-sm-4">
                Jenis Kelamin
              </label>
              ​
              <div className="col-sm-8">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="perempuan"
                    onChange={(event) => changeData(event.target)}
                    name="jenis-kelamin"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Perempuan
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="laki-laki"
                    onChange={(event) => changeData(event.target)}
                    name="jenis-kelamin"
                  />
                  <label className="form-check-label" for="inlineRadio2">
                    Laki-Laki
                  </label>
                </div>
              </div>
            </div>

            <div className="form-pendaftaran form-group row">
              <label for="exampleFormControlInput1" className="col-sm-4">
                No. telp
              </label>
              ​
              <div className="col-sm-8">
                <input
                  type="number"
                  id="exampleFormControlInput1"
                  className="form-control"
                  onChange={(event) => changeData(event.target)}
                  name="no-telp"
                />
              </div>
            </div>

            {/* <input
                type=""
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Nama Lengkap"
              /> */}
            <div className="pendaftaran-submit d-flex align-items-center">
              <button
                type="submit"
                className="btn pendaftaran-button"
                onClick={() => setIsLoading(true)}>
                Daftar
              </button>
              <Spinner
                animation="border"
                role="status"
                className={`loadingSpinner m-2 ${!isLoading && "hideSpinner"}`}>
                <span className="sr-only">Loading...</span>
              </Spinner>
            </div>
          </form>
        </div>
        <div className="col-md-5 pendaftaran-right">
          <img
            src={"/static/img" + "/002.png"}
            alt=""
            className={`pendaftaran-image ${
              showPendaftaran
                ? "show-pendaftaran-image"
                : "hide-pendaftaran-image"
            }`}
            style={{ marginTop: 100 }}
          />
        </div>
      </div>
      <ModalDaftar show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Pendaftaran;