//library imports
import React, { useState, useRef } from "react";
import axios from "axios";

//config imports
import { BASE_URL } from "../../config/config";

//component imports
import Topbar from "../../components/Topbar";
import Form from "../../components/Form";

export default function HomePage(props) {
  const audience = [
    { name: "West Amman Dentists" },
    { name: "Shemesani Internists" },
    { name: "Aqaba Cardiologists" },
    { name: "Khilda Cardiologists" },
    { name: "East Amman GPs" },
    { name: "Irbid Dermatologists" },
  ];
  const [audienceData, setAudienceData] = useState([]);
  const [s3, setS3] = useState({});

  const fileInput = useRef();

  const handleAudienceChange = (e) => {
    if (e.target.checked) {
      audienceData.push(e.target.name);
    } else {
      audienceData.pop(e.target.name);
    }
    setAudienceData(audienceData);
  };

  function brodcast() {
    axios
      .post(`${BASE_URL}/promotions`, {
        name: "NA",
        image: s3.image,
        audience: audienceData,
        send_notification: false,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function preview_image(event) {
    event.preventDefault();
    let file = event.target.files[0];
    const data = new FormData();
    data.append("file", file);

    axios
      .post(`${BASE_URL}/promotions/upload_image`, data)
      .then(function (response) {
        // console.log(response.data);
        setS3(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <Topbar />
      <Form
        audience={audience}
        handleChange={handleAudienceChange}
        submit={brodcast}
        preview_image={preview_image}
        fileInput={fileInput}
        s3={s3}
      />
    </div>
  );
}
