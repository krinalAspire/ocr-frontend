import React, { useEffect, useState } from "react";
import Popover from "@mui/material/Popover";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Checkbox, Autocomplete } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { classes } from "./utils";
import axios from "axios";
import TagSelection from "../allinvoice/TagSelection";
import { top100Films } from "./options";

const TagsButton = () => {
  // const [anchorEl, setAnchorEl] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [tag, setTagdata] = useState([]);

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const getTag = (event) => {
    // setInputValue(event.target.value);
    // // console.log(inputValue);
    // setTagdata(inputValue)
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
        // setTagdata([...tag, response.data]);
        console.log(response?.data);
        // setTagdata(response?.data);
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

  // const handleCreateClick = () => {
  //   if (inputValue.trim() !== "") {
  //     //   dispatch(addTag({ title: inputValue, checked: false }));
  //     setInputValue("");
  //   }
  // };

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);

  return (
    <>
      <div>
        <Button onClick={handleClick} className={classes.TagButton}>
          Tag
          <KeyboardArrowDownIcon />
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <div
            style={{
              padding: "16px",
              // height: "52vh",
            }}
          >
            <Autocomplete
              //  freeSolo
              sx={{ width: "21vw" }}
              multiple
              id="checkboxes-tags-demo"
              // options={top100Films}
              options={tag}
              disableCloseOnSelect
              // getOptionLabel={(option) => option.title}
              getOptionLabel={(option) => option.tag}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox style={{ marginRight: 8 }} checked={selected} />
                  {/* {option.title}
                   */}
                  {option.tag}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} placeholder="Search Tags" />
              )}
            />
          </div>
        </Popover>
      </div>
      {/* <Root> */}
      {/* <Button
        variant="text"
        onClick={handleClick}
        className={classes.TagButton}
      >
        Tags
        <KeyboardArrowDownIcon />
      </Button> */}
      {/* <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      > */}
      {/* <TagSelection /> */}
      {/* <Box
          // className={classes.PopOverBox}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "18vw",
          }}
        >
          <TextField
            autoFocus
            placeholder="Search tags"
            variant="outlined"
            margin="normal"
            name="tag"
            value={inputValue}
            onChange={handleInputChange}
          />
          {tag.map((tag) => (
            <Box
              key={tag.id}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  padding: "0.5rem",
                  height: "100%",
                  width: "100%",
                  marginBottom: "1vh",
                  backgroundColor: "rgba(30, 30, 30, 0.1)",
                }}
              >
                {tag.tag}
              </Typography>
            </Box>
          ))}
          {tag.length > 0 || inputValue ? (
            <Button
              disabled={!inputValue}
              onClick={getTag}
              variant="contained"
              startIcon={<AddIcon />}
              // className={classes.CreatePopOverButton}
              sx={{
                backgroundColor: "rgba(30, 30, 30, 0.1)",
                color: "rgba(43, 43, 43, 0.8)",
                ":hover": {
                  backgroundColor: "rgba(30, 30, 30, 0.1)",
                  color: "rgba(43, 43, 43, 0.8)",
                },
                padding: "1vh 0vw",
              }}
            >
              {`Create ${inputValue}`}
            </Button>
          ) : (
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: "rgba(0, 0, 0, 0.60)",
                padding: "1vh 0vw",
              }}
            >
              Type to create tag..{" "}
            </Typography>
          )}
        </Box> */}
      {/* </Popover> */}
      {/* </Root> */}
    </>
  );
};

export default TagsButton;
