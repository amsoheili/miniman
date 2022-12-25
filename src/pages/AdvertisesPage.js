import React from "react";
import classes from "./AdvertisesPage.module.scss";
import { ReactComponent as Icon } from "../assets/icons/backB.svg";
import listPic from "../assets/images/listPic.jpg";
import VehicleFilter from "../components/filters/VehicleFilter";
import AdvertisesList from "../components/Advertises/AdvertisesList";
import ADTypeFilter from "../components/filters/ADTypeFilter";

const AdvertisesPage = () => {
  return (
    <div className={classes.main}>
      <div className={classes["back-icon"]}>
        <Icon />
      </div>
      <div className={classes.container}>
        <div className={classes.pic}>
          <img src={listPic} />
        </div>
        <div className={classes.title}>
          <h1>لیست تبلیغات</h1>
        </div>

        <VehicleFilter />
        <AdvertisesList />
        <ADTypeFilter />
      </div>
    </div>
  );
};

export default AdvertisesPage;
