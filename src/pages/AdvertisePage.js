import React, { useEffect, useState } from "react";
import classes from "./AdvertisePage.module.scss";
import imgExp from "../assets/images/bgPicExp.jpg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SaveIcon from "../components/SaveIcon";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { ReactComponent as BackArrowIcon } from "../assets/icons/backA.svg";
import { ReactComponent as CallIcon } from "../assets/icons/call.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/location.svg";
import { ReactComponent as SiteIcon } from "../assets/icons/site.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";
import { ReactComponent as WhatsAppIcon } from "../assets/icons/whatsApp.svg";
import { ReactComponent as GalleryIcon } from "../assets/icons/gallery.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import instance from "../api/instance";
import GalleryModal from "../components/Advertises/GalleryModal";

const AdvertisePage = () => {
  const { advertiseId } = useParams();
  const [advertiseData, setAdvertiseData] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleOpenGallery = () => setIsGalleryOpen(true);
  const handleCloseGallery = () => setIsGalleryOpen(false);

  useEffect(() => {
    instance({
      url: `get-advertise/${advertiseId}`,
      method: "GET",
    }).then((res) => {
      console.log(res.data.data);
      setAdvertiseData(res.data.data);
    });
  }, []);

  const handleToggleFavourite = () => {
    setAdvertiseData((prev) => ({ ...prev, favourite: !prev.favourite }));
    console.log(advertiseData?.favourite);
    instance({
      method: "POST",
      url: `set-ads-favourite`,
      data: {
        advertise_id: `${advertiseData.advertise_id}`,
      },
    }).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div
      className={classes.main}
      style={{
        background: `url(${advertiseData?.image}) no-repeat center center/cover`,
      }}
    >
      <div className={classes.overlay} />
      <div className={classes["top-bar"]}>
        <SaveIcon
          isFavourite={advertiseData?.favourite}
          onClick={handleToggleFavourite}
        />
        {/* </div> */}
        <div className={classes.icon}>
          <Link to="/">
            <BackArrowIcon />
          </Link>
        </div>
      </div>
      {/* <div className={classes.header}>
        <h1>{advertiseData?.description}</h1>
      </div> */}
      <div className={classes["bottom-bar"]}>
        <div className={classes.links}>
          <div className={classes.link} onClick={handleOpenGallery}>
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
        {advertiseData?.discount_code && (
          <div className={classes.discount}>
            <h4>
              {`
              با استفاده از کد تخفیف
            `}
              <span>{advertiseData.discount_code}</span>
              {`به اندازه ی 
               ${advertiseData.discount_value}
               تخفیف بگیرید
              `}
            </h4>
          </div>
        )}
        <div className={classes.address}>
          <h3>{advertiseData?.description}</h3>
        </div>
      </div>
      <div className={classes["gold-bar"]} />
      {advertiseData.AdvertiseGalleries && (
        <GalleryModal
          isOpen={isGalleryOpen}
          images={advertiseData?.AdvertiseGalleries}
          onClose={handleCloseGallery}
        />
      )}
    </div>
  );
};

export default AdvertisePage;
