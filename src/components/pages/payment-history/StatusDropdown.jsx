import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography, Grid, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import disc from "../images/disc.svg";
import AlertCircle from "../images/alert-circle.svg";
import CheckCircle from "../images/checkCircle.svg";
import { classes } from "./utils";
import { InputBase } from "@mui/material";
import { theme } from "../Theme";

function StatusDropdown() {
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
    // console.log(event.target.value);
  };

  const MenuItemContent = ({ Icon, Status }) => {
    return (
      <Grid container alignItems="center">
        <Grid item xs={4} sm={2}>
          <Box
            component="img"
            src={Icon}
            alt={Icon}
            // className={classes.MenuItemIcon}
            sx={{width:{xxl:24, xl:22, lg:20, md:18, sm:16, xs:14},
              height:{xxl:24, xl:22, lg:20, md:18, sm:16, xs:14},
              display: 'flex',
              alignItems: 'center',
              }}
          />
        </Grid>
        <Grid item xs={8} sm={10} alignItems="center">
          {Status}
        </Grid>
      </Grid>
    );
  };

  return (
    <FormControl fullWidth>
      <Select
        // className={classes.SelectComponent}  
        // variant="outlined"
        input={<InputBase classes={{ input: classes.StatusDropDown }} />}
        IconComponent={KeyboardArrowDownIcon}
        value={status}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        renderValue={(selected) => {
          if (!selected) {
            return <Typography variant="body1" color={theme.palette.color134.dark}>Select Status</Typography>;
          }
          return selected;
        }}
      >
        <MenuItem value="Pending">
          <MenuItemContent Icon={disc} Status="Pending" />
        </MenuItem>
        <MenuItem value="Failed">
          <MenuItemContent Icon={AlertCircle} Status="Failed" />
        </MenuItem>
        <MenuItem value="Done">
          <MenuItemContent Icon={CheckCircle} Status="Done" />
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default StatusDropdown;
