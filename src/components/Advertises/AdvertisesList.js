import React from "react";
import AdvertiseCard from "./AdvertiseCard";
import classes from "./AdvertisesList.module.scss";
const AdvertisesList = (props) => {
  return (
    <div>
      {props.advertises.map((ad, index) => (
        <div className={classes["single-ad-container"]}>
          <AdvertiseCard data={ad} key={index} />
        </div>
      ))}
    </div>
  );
};

export default AdvertisesList;
