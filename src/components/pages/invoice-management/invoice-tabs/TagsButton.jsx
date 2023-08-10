import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import { classes } from "./utils";

const TagsButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCreateClick = () => {
    if (inputValue.trim() !== "") {
      //   dispatch(addTag({ title: inputValue, checked: false }));
      setInputValue("");
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
    {/* <Root> */}
      <Button
        variant="text"
        onClick={handleClick}
        className={classes.TagButton}
      >
        Tags
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
        <Box
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
            value={inputValue}
            onChange={handleInputChange}
          />
          {/* {tags.map((tag, index) => (
            <div
              key={index}
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
                {tag.title}
              </Typography>
            </div>
          ))} */}
          {inputValue ? (
            <Button
              disabled={!inputValue}
              onClick={handleCreateClick}
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
        </Box>
      </Popover>
      {/* </Root> */}
    </>
  );
};

export default TagsButton;
