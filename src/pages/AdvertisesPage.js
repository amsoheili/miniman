import React from "react";
import classes from "./AdvertisesPage.module.scss";
import { ReactComponent as BackIcon } from "../assets/icons/backB.svg";
import listPic from "../assets/images/listPic.jpg";
import VehicleFilter from "../components/filters/VehicleFilter";
import AdvertisesList from "../components/Advertises/AdvertisesList";
import ADTypeFilter from "../components/filters/ADTypeFilter";

const advertises = [
  {
    name: "فروشگاه ساعت ارزان",
    address: "میدان تجریش، مجتمع ارگ، پلاک 256",
    phoneNumber: "02122396264",
  },
  {
    name: "فروشگاه ساعت ارزان",
    address: "میدان تجریش، مجتمع ارگ، پلاک 256",
    phoneNumber: "02122396264",
  },
  {
    name: "فروشگاه ساعت ارزان",
    address: "میدان تجریش، مجتمع ارگ، پلاک 256",
    phoneNumber: "02122396264",
  },
  {
    name: "فروشگاه ساعت ارزان",
    address: "میدان تجریش، مجتمع ارگ، پلاک 256",
    phoneNumber: "02122396264",
  },
  {
    name: "فروشگاه ساعت ارزان",
    address: "میدان تجریش، مجتمع ارگ، پلاک 256",
    phoneNumber: "02122396264",
  },
];

const AdvertisesPage = () => {
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

        <VehicleFilter />
        <div className={classes["ads-list"]}>
          <AdvertisesList advertises={advertises} />
        </div>
      </div>
      <div className={classes["ad-type-filter"]}>
        <ADTypeFilter />
      </div>
    </div>
  );
};

export default AdvertisesPage;
