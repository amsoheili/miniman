import React, { useEffect, useState } from "react";
import classes from "./AdvertisesPage.module.scss";
import { ReactComponent as BackIcon } from "../assets/icons/backB.svg";
import listPic from "../assets/images/listPic.jpg";
import VehicleFilter from "../components/filters/VehicleFilter";
import AdvertisesList from "../components/Advertises/AdvertisesList";
import ADTypeFilter from "../components/filters/ADTypeFilter";
import axios from "axios";
import instance from "../api/instance";

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    instance({
      url: `/get-advertises/${vehicleFilterValue}/type/${ADTypeFilterValue}`,
      method: "GET",
    }).then((res) => {
      console.log(res.data.data);
      setAdvertises(res.data.data);
      scrollToTop();
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
        <div className={classes["top-bar"]}>
          <div className={classes.title}>
            <h1>لیست تبلیغات</h1>
          </div>
          <div className={classes["vehicle-filter"]}>
            <VehicleFilter onVehicleFilterChange={handleVehicleFilterChange} />
          </div>
        </div>
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
