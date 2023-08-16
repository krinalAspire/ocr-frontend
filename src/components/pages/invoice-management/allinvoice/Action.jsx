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

  const AssignTag = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [tagdata, setTagdata] = useState([]);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
      setInputValue(" ");
    };
    const open = Boolean(anchorEl);

    const handleInputChange = (event, newInputValue) => {
      setInputValue(newInputValue);
    };

    const getTag = (event) => {
      const data = {
        id: Math.random().toString(36).substr(2, 9),
        tag: inputValue,
      };
      console.log(data);
      axios
        .post("http://localhost:5000/Tag", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response?.data);
          setInputValue("");
        })
        .catch((err) => {
          console.log(err);
        });
    };

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
        <Box sx={{display:"flex", alignItems:"center"}}>
          <Box
            component="img"
            src={tag}
            alt="Tag"
            onClick={handleClick}
            className={classes.actionIcons}
          />
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            // sx={{ height: "41vh" }}
          >
            <Box
              sx={{
                padding: "16px",
                // height: "52vh",
              }}
            >
              <Autocomplete
                //  freeSolo
                sx={{
                  width: "21vw",
                }}
                multiple
                id="checkboxes-tags-demo"
                // options={top100Films}
                options={tagdata}
                inputValue={inputValue}
                onInputChange={handleInputChange}
                disableCloseOnSelect
                freeSolo
                // getOptionLabel={(option) => option.title}
                getOptionLabel={(option) => option.tag}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox sx={{ marginRight: 1 }} checked={selected} />
                    {option.tag}
                  </li>
                )}
                renderInput={(params) => (
                  <Box>
                    <TextField {...params} placeholder="Search Tags" />
                    {inputValue &&
                      !tagdata.some(
                        (option) =>
                          option.tag.toLowerCase() === inputValue.toLowerCase()
                      ) && (
                        <Button
                          onClick={getTag}
                          variant="contained"
                          sx={{
                            width: "21vw",
                            height: "7vh",
                            marginTop: "10px",
                            backgroundColor: "rgba(30, 30, 30, 0.1)",
                            color: "rgba(43, 43, 43, 0.8)",
                            ":hover": {
                              backgroundColor: "rgba(30, 30, 30, 0.1)",
                              color: "rgba(43, 43, 43, 0.8)",
                            },
                          }}
                        >
                          <AddIcon sx={{ marginRight: "1vw" }} />
                          Create "{inputValue}"
                        </Button>
                      )}
                  </Box>
                )}
              />
            </Box>
          </Popover>
        </Box>
      </>
    );
  };

  return (
    <>
      {/* <Test /> */}
      <Box sx={{display:"flex", alignItems:"center"}}>
        {/* <Box> */}
        {/* <Box
          component="img"
          src={tag}
          alt="Tag"
          onClick={handleClick}
          className={classes.actionIcons}
        /> */}
        <AssignTag />
        {/* <TagsButton /> */}
        {/* <AddTag /> */}
        {/* </Box> */}
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
