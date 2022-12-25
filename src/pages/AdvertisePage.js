import React, { useEffect } from "react";
import classes from "./AdvertisePage.module.scss";
import imgExp from "../assets/images/bgPicExp.jpg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { ReactComponent as BackArrowIcon } from "../assets/icons/backA.svg";
import { ReactComponent as SaveIcon } from "../assets/icons/save.svg";
import { ReactComponent as CallIcon } from "../assets/icons/call.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/location.svg";
import { ReactComponent as SiteIcon } from "../assets/icons/site.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";
import { ReactComponent as WhatsAppIcon } from "../assets/icons/whatsApp.svg";
import { ReactComponent as GalleryIcon } from "../assets/icons/gallery.svg";
import { useParams } from "react-router-dom";

const AdvertisePage = () => {
  const { advertiseId } = useParams();
  console.log(advertiseId);
  useEffect(() => {}, []);
  return (
    <div
      className={classes.main}
      style={{ background: `url(${imgExp}) no-repeat center center/cover` }}
    >
      <div className={classes.overlay} />
      <div className={classes["top-bar"]}>
        <div className={classes.icon}>
          <SaveIcon />
        </div>
        <div className={classes.icon}>
          <BackArrowIcon />
        </div>
      </div>
      <div className={classes.header}>
        <h1>فروشگاه ارزان ساعت</h1>
      </div>
      <div className={classes["bottom-bar"]}>
        <div className={classes.links}>
          <div className={classes.link}>
            <GalleryIcon />
          </div>
          <div className={classes.link}>
            <WhatsAppIcon />
          </div>
          <div className={classes.link}>
            <SiteIcon />
          </div>
          <div className={classes.link}>
            <InstagramIcon />
          </div>
          <div className={classes.link}>
            <LocationIcon />
          </div>
          <div className={classes.link}>
            <CallIcon />
          </div>
        </div>
        <div className={classes.discount}>
          با استفاده از کد تخفیف
          <span></span>
          5٪ تخفیف بگیرید
        </div>
        <div className={classes.address}>
          <h3>فروشگاه و بورس ساعت ارزان - شعبه ونک</h3>
        </div>
      </div>
      <div className={classes["gold-bar"]} />
    </div>
  );
};

export default AdvertisePage;
