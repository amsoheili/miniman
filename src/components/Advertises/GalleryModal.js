import { Backdrop, Box, Fade, Modal, Paper, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import classes from "./GalleryModal.module.scss";
import { Pagination } from "swiper";
import Carousel from "react-material-ui-carousel";

const GalleryModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const imageList = props.images ? props.images : [];
  // console.log(props?.images);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className={classes.main}>
      <Modal
        className={classes.modal}
        open={props.isOpen}
        onClose={props.onClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className={classes["carousel-container"]}>
          <Carousel sx={{ height: "100%", width: "100%" }}>
            {props.images?.map((image, index) => (
              <div className={classes.slide} key={index}>
                <img alt="gallery image" src={image?.url_path} />
              </div>
            ))}
          </Carousel>
        </div>
      </Modal>
    </div>
  );
};

export default GalleryModal;
