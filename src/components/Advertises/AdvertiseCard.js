import React from "react";
import classes from "./AdvertiseCard.module.scss";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrowLeftWhite.svg";
import { Link } from "react-router-dom";

const AdvertiseCard = (props) => {
  return (
    <div
      className={classes.main}
      style={{
        background: `url(${props.data.image}) no-repeat center center/cover`,
      }}
    >
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div className={classes.data}>
          <div className={classes.name}>
            <p>{props.data.description}</p>
          </div>
          <div className={classes.address}>{props.data.address}</div>
          <div className={classes.phoneNumber}>{props.data.phone}</div>
        </div>
        <div className={classes.controls}>
          <Link to={`/advertise/${props.data.advertise_id}`}>
            <ArrowBackIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCard;
