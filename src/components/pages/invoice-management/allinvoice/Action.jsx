import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Popover,
  TextField,
} from "@mui/material";
import tag from "../../../../assets/allinvoice-assets/tag.svg";
import CheckCircle from "../../../../assets/allinvoice-assets/check-circle.svg";
import trash from "../../../../assets/allinvoice-assets/trash-2.svg";
import upload from "../../../../assets/allinvoice-assets/upload.svg";
import AddIcon from "@mui/icons-material/Add";
import { classes } from "./utils";
import axios from "axios";
import TagsButton from "../invoice-tabs/TagsButton";
import AddTag from "./AddTag";

function Action() {
  return (
    <>
      <Box sx={{display:"flex", alignItems:"center"}}>
        <AddTag />
        <Box
          component="img"
          src={CheckCircle}
          alt="check-circle"
          // className="my-icon"
          className={classes.actionIcons}
        />
        <Box
          component="img"
          src={upload}
          alt="Upload"
          className={classes.actionIcons}
          // className="my-icon"
        />
        <Box
          component="img"
          src={trash}
          alt="trash"
          className={classes.actionIcons}
          // className="my-icon"
        />
      </Box>
    </>
  );
}

export default Action;
