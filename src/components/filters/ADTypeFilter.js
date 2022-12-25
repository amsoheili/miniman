import React from "react";
import classes from "./ADTypeFilter.module.scss";
import { Tab, Tabs } from "@mui/material";
import { ReactComponent as GoldADIcon } from "../../assets/icons/goldAdIcon.svg";
import { ReactComponent as SilverADIcon } from "../../assets/icons/silverAdIcon.svg";
import { ReactComponent as BronzeADIcon } from "../../assets/icons/bronzeAdIcon.svg";

const ADTypeFilter = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.main}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="تبلیغات طلایی" icon={<GoldADIcon />} />
        <Tab value="two" label="تبلیغات نقره ای" icon={<SilverADIcon />} />
        <Tab value="three" label="تبليغات برنزي" icon={<BronzeADIcon />} />
      </Tabs>
    </div>
  );
};

export default ADTypeFilter;
