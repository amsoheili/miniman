import React from "react";
import classes from "./SaveIcon.module.scss";
import { ReactComponent as Icon } from "../assets/icons/save.svg";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const SaveIcon = (props) => {
  console.log(props.isFavourite);

  const handleClick = () => {
    props.onClick();
  };
  return (
    <div
      className={
        classes[`${props.isFavourite ? "is-favourite" : "is-not-favourite"}`]
      }
      onClick={handleClick}
    >
      <BookmarkIcon />
      {/* {props.isFavourite ? <BookmarkIcon /> : <BookmarkBorderIcon />} */}
    </div>
  );
};

export default SaveIcon;
