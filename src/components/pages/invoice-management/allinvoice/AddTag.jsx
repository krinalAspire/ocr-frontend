import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Popover,
  Button,
  Checkbox,
  Autocomplete,
  Popper,
  Fade,
  Paper
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { classes } from "./utils";
import axios from "axios";
import tag from "../../../../assets/allinvoice-assets/tag.svg";
import { tagOptions } from "./rowdata";

const AddTag = () => {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [open, setOpen] = React.useState(false);
  // const [placement, setPlacement] = React.useState();

  // // const handleClick = (event) => {
  // //   setAnchorEl(anchorEl ? null : event.currentTarget);
  // // };

  // const handleClick = (newPlacement) => (event) => {
  //   setAnchorEl(event.currentTarget);
  //   setOpen((prev) => placement !== newPlacement || !prev);
  //   setPlacement(newPlacement);
  // };


  // // const open = Boolean(anchorEl);
  // const id = open ? "simple-popper" : undefined;

  const [anchorEl, setAnchorEl] = useState(null);
  const [inputValue, setInputValue] = useState("");
  // const [hovered, setHovered] = useState(false);
  const [tagdata, setTagdata] = useState([]);
  // // const [clicked, setClicked] = useState(false);

  // const handleHoverEnter = () => {
  //   setHovered(true);
  // };

  // const handleHoverLeave = () => {
  //   setHovered(false);
  // };

  const handleClick = (event) => {
    console.log("anchorEl", event.currentTarget);
    setAnchorEl(event.currentTarget);
    // setHovered(true);
    // setClicked(true);
    // const cellElement = event.currentTarget.closest(".my-icon");
    // setAnchorEl(cellElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setInputValue(" ");
    // setHovered(false);
    // setClicked(false);
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

  return (
    <>
      {/* <Box sx={{display:"flex", alignItems:"center"}}>
        <Box>
        <Box component="img" src={tag} alt="tag" aria-describedby={id} type="button" onClick={handleClick('bottom-end')} className={classes.actionIcons}/>
        </Box> */}
        {/* <Popper id={id} open={open} anchorEl={anchorEl}> */}
        {/* <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
          <Box sx={{ bgcolor: "background.paper", p: 1, boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.5)"}}>
             <Autocomplete
              sx={{
                width: {
                  xxl: "13vw",
                  xl: "12vw",
                  lg: "14vw",
                  md: "13.5vw",
                  sm: " 13vh",
                  xs: "15vh",
                },
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
                  <TextField
                    {...params}
                    placeholder="Search Tags"
                    size="small"
                  />
                  {inputValue &&
                    !tagdata.some(
                      (option) =>
                        option.tag.toLowerCase() === inputValue.toLowerCase()
                    ) && (
                      <Button
                        onClick={getTag}
                        variant="contained"
                        sx={{
                          width: {
                            xxl: "13vw",
                            xl: "12vw",
                            lg: "14vw",
                            md: "13.5vw",
                            sm: " 13vh",
                            xs: "15vh",
                          },
                          height: {
                            xxl: "40px",
                            xl: "40px",
                            lg: "35px",
                            md: "34px",
                            sm: " 40px",
                            xs: "36px",
                          },
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
          </Paper>
          </Fade>
        )}
        </Popper>
      </Box> */}

      
      <Box sx={{ display: "flex", alignItems: "center"}}>
        <Box className={open ? "action" : "my-icon"}>
          {/* <Box className="my-icon"> */}
        <Box
          component="img"
          onClick={handleClick}
          // onMouseEnter={handleClick}
          // onMouseLeave={handleClose}
          src={tag}
          alt="tag"
          className={classes.actionIcons}
          // className="my-icon"
        />
        </Box>
       {/* {hovered && !clicked && (   */}
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
         
        >  
      {/* {anchorEl  ? */}
      <Box
            sx={{
              padding: {
                xxl: "10px",
                xl: "7px",
                lg: "6px",
                md: "5px",
                sm: "5px",
                xs: "5px",
              },
            }}
          >
            <Autocomplete
              sx={{
                width: {
                  xxl: "13vw",
                  xl: "12vw",
                  lg: "14vw",
                  md: "13.5vw",
                  sm: " 13vh",
                  xs: "15vh",
                },
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
                  <TextField
                    {...params}
                    placeholder="Search Tags"
                    size="small"
                  />
                  {inputValue &&
                    !tagdata.some(
                      (option) =>
                        option.tag.toLowerCase() === inputValue.toLowerCase()
                    ) && (
                      <Button
                        onClick={getTag}
                        variant="contained"
                        sx={{
                          width: {
                            xxl: "13vw",
                            xl: "12vw",
                            lg: "14vw",
                            md: "13.5vw",
                            sm: " 13vh",
                            xs: "15vh",
                          },
                          height: {
                            xxl: "40px",
                            xl: "40px",
                            lg: "35px",
                            md: "34px",
                            sm: " 40px",
                            xs: "36px",
                          },
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
      {/* {/* : null } */}
      </Popover>
      {/* // )} */}
      </Box>
    </>
  );
};

export default AddTag;
