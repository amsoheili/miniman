import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import classes from "./VehicleFilter.module.scss";
import { ReactComponent as BusIcon } from "../../assets/icons/bus.svg";
import { ReactComponent as SubwayIcon } from "../../assets/icons/subway.svg";
import { ReactComponent as TaxiIcon } from "../../assets/icons/taxi.svg";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";

const VehicleFilter = (props) => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.onVehicleFilterChange(+newValue);
  };

  return (
    <div className={classes.main}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="none"
        aria-label="secondary tabs example"
      >
        <Tab
          value="1"
          label="تاکسی"
          icon={<LocalTaxiIcon />}
          iconPosition="start"
        />
        <Tab
          value="2"
          label="مترو"
          icon={<DirectionsSubwayIcon />}
          iconPosition="start"
        />
        <Tab
          value="3"
          label="اتوبوس"
          icon={<DirectionsBusFilledIcon />}
          iconPosition="start"
        />
      </Tabs>
    </div>
  );
};

export default VehicleFilter;
