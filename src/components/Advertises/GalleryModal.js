import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import classes from "./GalleryModal.module.scss";

const GalleryModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        // sx={{ width: "200px", height: "200px", }}
        open={props.isOpen}
        onClose={props.onClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Swiper
          className={classes.mySwiper}
          spaceBetween={50}
          pagination={{
            clickable: false,
          }}
          modules={[Navigation]}
          style={{ width: "100%", height: "100%", borderRadius: "50px" }}
          allowTouchMove={false}
        >
          {props.images?.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className={classes.slide}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <img
                  src={image.url_path}
                  style={{ width: "100%", height: "100%", cursor: "pointer" }}
                  className={classes["slide-img"]}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal>
    </div>
  );
};

export default GalleryModal;
