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

const AdvertisePage = () => {
  const { advertiseId } = useParams();
  const [advertiseData, setAdvertiseData] = useState(null);

  // console.log(advertiseId);
  useEffect(() => {
    axios
      .get(`https://api.nimman.net/api/v1/get-advertise/${advertiseId}`, {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzE1NDQ1YTA3ZjE3NGIxZjU1MGNmODA3ZDMyOTQ2Mzc0NWY1OTc2YmVmNjgyM2ZjOWFhZTY5MDkxZTMwOWI3NjBjNGI1YWFiOTQ5NmIzMzEiLCJpYXQiOjE2NjEzMjA5NjguNDczODM4LCJuYmYiOjE2NjEzMjA5NjguNDczODQzLCJleHAiOjE2OTI4NTY5NjguNDQ3NjMsInN1YiI6IjIwIiwic2NvcGVzIjpbInVzZXIiXX0.w__5-csjInkLr_TEMVVE276K78t91pDs77UcEXHLiR5htfCYAbQP3xncT6aRhBVs_WPcWREJmtOF-V5d-oVUbiHSXzWVKluFzcG7mmHQANNO2U0esPW7FySlbzcL6Xbcose8ozfIzoXM7sfxa3m1obsjHyZRAyCifhXJO4rBuHTKXI69mXpTbQ91-WFfj1EC2JABCar6yhfZqQqFpIIdExO1p8aqvj3wgb3fh8XFScywGZc-4eSXCHMgn1ltATEuoSwBxh76iba-L15PaPwxUolCuAu2mh8ly9u8Rf3KEeF8jc1OIQRbtW0-Z0pO1vCuCjZYoq75rwAipPM7bBIEy2nGqW2-Yq3uya00kmfoKKL1V8-wAQfdL1quoRBuuP_yp0tWMpuGVRBxP2zHFyP3p7WJu1HlJKS_o_KuxSKhU0PiDiorM3s3iGKMJUaXFwBX11mJfH3M4F7EPY7JPPdc9d5yura3hwek8yPdh2gz1Zt7X-bYBOmij_NJrcnqenZU6RrYwFaq-njYcHDz4mkYWLkM7EsSTHtzFUYkWMd5vTw9zqjwDrD4pNm4qVCbB00uOhg87GVeV73rTlmPMngVKTGrqQc5hQ4GuylcAakBQ9Pe6DZQt1JR4JBcM1fOeqan0EaGXn1S2335nNBy4G6Z2yhOj3T1BLklugBD0Vh_IGk",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setAdvertiseData(res.data.data);
      });
  }, []);

  const handleToggleFavourite = () => {
    setAdvertiseData((prev) => ({ ...prev, favourite: !prev.favourite }));
    console.log(advertiseData?.favourite);
    axios({
      method: "post",
      url: `https://api.nimman.net/api/v1/set-ads-favourite`,
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzE1NDQ1YTA3ZjE3NGIxZjU1MGNmODA3ZDMyOTQ2Mzc0NWY1OTc2YmVmNjgyM2ZjOWFhZTY5MDkxZTMwOWI3NjBjNGI1YWFiOTQ5NmIzMzEiLCJpYXQiOjE2NjEzMjA5NjguNDczODM4LCJuYmYiOjE2NjEzMjA5NjguNDczODQzLCJleHAiOjE2OTI4NTY5NjguNDQ3NjMsInN1YiI6IjIwIiwic2NvcGVzIjpbInVzZXIiXX0.w__5-csjInkLr_TEMVVE276K78t91pDs77UcEXHLiR5htfCYAbQP3xncT6aRhBVs_WPcWREJmtOF-V5d-oVUbiHSXzWVKluFzcG7mmHQANNO2U0esPW7FySlbzcL6Xbcose8ozfIzoXM7sfxa3m1obsjHyZRAyCifhXJO4rBuHTKXI69mXpTbQ91-WFfj1EC2JABCar6yhfZqQqFpIIdExO1p8aqvj3wgb3fh8XFScywGZc-4eSXCHMgn1ltATEuoSwBxh76iba-L15PaPwxUolCuAu2mh8ly9u8Rf3KEeF8jc1OIQRbtW0-Z0pO1vCuCjZYoq75rwAipPM7bBIEy2nGqW2-Yq3uya00kmfoKKL1V8-wAQfdL1quoRBuuP_yp0tWMpuGVRBxP2zHFyP3p7WJu1HlJKS_o_KuxSKhU0PiDiorM3s3iGKMJUaXFwBX11mJfH3M4F7EPY7JPPdc9d5yura3hwek8yPdh2gz1Zt7X-bYBOmij_NJrcnqenZU6RrYwFaq-njYcHDz4mkYWLkM7EsSTHtzFUYkWMd5vTw9zqjwDrD4pNm4qVCbB00uOhg87GVeV73rTlmPMngVKTGrqQc5hQ4GuylcAakBQ9Pe6DZQt1JR4JBcM1fOeqan0EaGXn1S2335nNBy4G6Z2yhOj3T1BLklugBD0Vh_IGk",
      },
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
        {/* <div className={classes.icon}> */}
        {/* <SaveIcon /> */}
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
    </div>
  );
};

export default AdvertisePage;
