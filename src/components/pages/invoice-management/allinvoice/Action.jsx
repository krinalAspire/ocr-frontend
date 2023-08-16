import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import tag from "../../../../assets/allinvoice-assets/tag.svg";
import CheckCircle from "../../../../assets/allinvoice-assets/check-circle.svg";
import trash from "../../../../assets/allinvoice-assets/trash-2.svg";
import upload from "../../../../assets/allinvoice-assets/upload.svg";
import { classes } from "./utils";
import axios from "axios";

function Action() {
  const [anchorEl, setAnchorEl] = useState(null);
  // const [inputValue, setInputValue] = useState("");
  const [tag, setTagdata] = useState([]);
  // const [createTagValue, setCreateTagValue] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  //   setInputValue(" ");
  //   setCreateTagValue("");
  // };
  // const open = Boolean(anchorEl);

  // const handleInputChange = (event, newInputValue) => {
  //   setInputValue(newInputValue);
  // };

  useEffect(() => {
    axios
      .get("http://localhost:5000/Tag")
      .then((res) => {
        setTagdata(res.data);
        //  console.log(res.data)
      })
      .catch((err) => {
        // toast.error("Failed: " + err.message);
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* <h5>Tag</h5> */}
      <Box>
        <Box
          component="img"
          src={tag}
          alt="Tag"
          onClick={handleClick}
          className={classes.actionIcons}
        />
        <Box
          component="img"
          src={CheckCircle}
          alt="check-circle"
          className={classes.actionIcons}
        />
        <Box
          component="img"
          src={upload}
          alt="Upload"
          className={classes.actionIcons}
        />
        <Box
          component="img"
          src={trash}
          alt="trash"
          className={classes.actionIcons}
        />
      </Box>
    </>
  );
}

export default Action;
