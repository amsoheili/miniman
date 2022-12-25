import React, { useEffect, useState } from "react";
import classes from "./AdvertisesPage.module.scss";
import { ReactComponent as BackIcon } from "../assets/icons/backB.svg";
import listPic from "../assets/images/listPic.jpg";
import VehicleFilter from "../components/filters/VehicleFilter";
import AdvertisesList from "../components/Advertises/AdvertisesList";
import ADTypeFilter from "../components/filters/ADTypeFilter";
import axios from "axios";

// let advertises = [
//   {
//     name: "فروشگاه ساعت ارزان",
//     address: "میدان تجریش، مجتمع ارگ، پلاک 256",
//     phoneNumber: "02122396264",
//   },
//   {
//     name: "فروشگاه ساعت ارزان",
//     address: "میدان تجریش، مجتمع ارگ، پلاک 256",
//     phoneNumber: "02122396264",
//   },
//   {
//     name: "فروشگاه ساعت ارزان",
//     address: "میدان تجریش، مجتمع ارگ، پلاک 256",
//     phoneNumber: "02122396264",
//   },
//   {
//     name: "فروشگاه ساعت ارزان",
//     address: "میدان تجریش، مجتمع ارگ، پلاک 256",
//     phoneNumber: "02122396264",
//   },
//   {
//     name: "فروشگاه ساعت ارزان",
//     address: "میدان تجریش، مجتمع ارگ، پلاک 256",
//     phoneNumber: "02122396264",
//   },
// ];

const AdvertisesPage = () => {
  const [vehicleFilterValue, setVehicleFilterValue] = useState(1);
  const [ADTypeFilterValue, setADTypeFilterValue] = useState(1);
  const [advertises, setAdvertises] = useState(null);

  const handleVehicleFilterChange = (value) => {
    setVehicleFilterValue(value);
  };

  const handleADTypeFilterChange = (value) => {
    setADTypeFilterValue(value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nimman.net/api/v1/get-advertises/${vehicleFilterValue}/type/${ADTypeFilterValue}`,
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzE1NDQ1YTA3ZjE3NGIxZjU1MGNmODA3ZDMyOTQ2Mzc0NWY1OTc2YmVmNjgyM2ZjOWFhZTY5MDkxZTMwOWI3NjBjNGI1YWFiOTQ5NmIzMzEiLCJpYXQiOjE2NjEzMjA5NjguNDczODM4LCJuYmYiOjE2NjEzMjA5NjguNDczODQzLCJleHAiOjE2OTI4NTY5NjguNDQ3NjMsInN1YiI6IjIwIiwic2NvcGVzIjpbInVzZXIiXX0.w__5-csjInkLr_TEMVVE276K78t91pDs77UcEXHLiR5htfCYAbQP3xncT6aRhBVs_WPcWREJmtOF-V5d-oVUbiHSXzWVKluFzcG7mmHQANNO2U0esPW7FySlbzcL6Xbcose8ozfIzoXM7sfxa3m1obsjHyZRAyCifhXJO4rBuHTKXI69mXpTbQ91-WFfj1EC2JABCar6yhfZqQqFpIIdExO1p8aqvj3wgb3fh8XFScywGZc-4eSXCHMgn1ltATEuoSwBxh76iba-L15PaPwxUolCuAu2mh8ly9u8Rf3KEeF8jc1OIQRbtW0-Z0pO1vCuCjZYoq75rwAipPM7bBIEy2nGqW2-Yq3uya00kmfoKKL1V8-wAQfdL1quoRBuuP_yp0tWMpuGVRBxP2zHFyP3p7WJu1HlJKS_o_KuxSKhU0PiDiorM3s3iGKMJUaXFwBX11mJfH3M4F7EPY7JPPdc9d5yura3hwek8yPdh2gz1Zt7X-bYBOmij_NJrcnqenZU6RrYwFaq-njYcHDz4mkYWLkM7EsSTHtzFUYkWMd5vTw9zqjwDrD4pNm4qVCbB00uOhg87GVeV73rTlmPMngVKTGrqQc5hQ4GuylcAakBQ9Pe6DZQt1JR4JBcM1fOeqan0EaGXn1S2335nNBy4G6Z2yhOj3T1BLklugBD0Vh_IGk",
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setAdvertises(res.data.data);
      });
  }, [vehicleFilterValue, ADTypeFilterValue]);

  return (
    <div className={classes.main}>
      <div className={classes["back-icon"]}>
        <BackIcon />
      </div>
      <div className={classes.container}>
        <div className={classes.pic}>
          <img src={listPic} />
        </div>
        <div className={classes.title}>
          <h1>لیست تبلیغات</h1>
        </div>

        <VehicleFilter onVehicleFilterChange={handleVehicleFilterChange} />
        <div className={classes["ads-list"]}>
          {advertises && <AdvertisesList advertises={advertises} />}
        </div>
      </div>
      <div className={classes["ad-type-filter"]}>
        <ADTypeFilter onADTypeFilterChange={handleADTypeFilterChange} />
      </div>
    </div>
  );
};

export default AdvertisesPage;
