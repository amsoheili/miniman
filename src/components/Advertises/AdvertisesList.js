import React from "react";
import AdvertiseCard from "./AdvertiseCard";
import classes from "./AdvertisesList.module.scss";
const AdvertisesList = (props) => {
  return (
    <div className={classes.main}>
      {props.advertises.map((ad, index) => (
        <div className={classes["single-ad-container"]} key={index}>
          <AdvertiseCard data={ad} />
        </div>
      ))}
    </div>
  );
};

export default AdvertisesList;
