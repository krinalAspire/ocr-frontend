import React, { useEffect, useState } from "react";
import Popover from "@mui/material/Popover";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, createFilterOptions } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Checkbox, Autocomplete } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { classes } from "./utils";
import axios from "axios";
import TagSelection from "../allinvoice/TagSelection";
import tag from "../../../../assets/allinvoice-assets/tag.svg";
// import { Tag } from "./options";

const AddTag = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [tagdata, setTagdata] = useState([]);
  // const [createTagValue, setCreateTagValue] = useState("");

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setInputValue(" ");
    // setCreateTagValue("");
  };
  const open = Boolean(anchorEl);

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  // const filter = createFilterOptions();

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
      <Box>
        {/* <Button onClick={handleClick} className={classes.TagButton}>
          Tag
          <KeyboardArrowDownIcon />
        </Button> */}
        <Box component="img" onClick={handleClick} src={tag} alt="sdesf"/>
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
                "& .MuiAutocomplete-popper .MuiListbox-root": {
                  overflowY: "auto",
                  scrollbarWidth: "thin", // For Firefox
                  scrollbarColor: "rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.1)",
                  "&::-webkit-scrollbar": {
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    borderRadius: "6px",
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    borderRadius: "6px",
                  },
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
              // renderTags={(value, getTagProps) => (
              //   <div>
              //     {value.map((option, index) => (
              //       <div key={option.tag} {...getTagProps({ index })}>
              //         {option.tag}
              //       </div>
              //     ))}
              //     {inputValue && !tag.some((option) => option.tag.toLowerCase() === inputValue.toLowerCase()) && (
              //       <Button onClick={getTag} variant="contained" >
              //         Create Tag "{inputValue}"
              //       </Button>
              //     )}
              //   </div>
              // )}
              // renderInput={(params) => (
              //   <TextField
              //     {...params}
              //     // label="Search Tags"
              //     placeholder="Search Tags"
              //     variant="outlined"
              //     autoFocus
              //     InputProps={{
              //       ...params.InputProps,
              //       endAdornment: (
              //         <>
              //           {inputValue && !tag.some((option) => option.tag.toLowerCase() === inputValue.toLowerCase()) && (
              //             <Button onClick={getTag} color="primary">
              //               Create Tag "{inputValue}"
              //             </Button>
              //           )}
              //           {params.InputProps.endAdornment}
              //         </>
              //       ),
              //     }}
              //   />
              // )}
            />
            {/* {inputValue &&
              !tag.some(
                (option) =>
                  option.tag.toLowerCase() === inputValue.toLowerCase()
              ) && (
                <Button onClick={getTag} color="primary">
                  Create Tag "{inputValue}"
                </Button>
              )} */}
            {/* <Button
              variant="contained"
              onClick={getTag}
              sx={{
                width: "21vw",
                height: "15vh",
                marginTop: "5vh",
                backgroundColor: "rgba(30, 30, 30, 0.1)",
                color: "rgba(43, 43, 43, 0.8)",
                ":hover": {
                  backgroundColor: "rgba(30, 30, 30, 0.1)",
                  color: "rgba(43, 43, 43, 0.8)",
                },
              }}
            >
              {`Create ${inputValue}`}
            </Button> */}
            {/* {inputValue &&
              !tag.some(
                (option) =>
                  option.tag.toLowerCase() === inputValue.toLowerCase()
              ) && (
                <Button
                  onClick={() => {
                    setCreateTagValue(inputValue);
                    getTag();
                  }}
                  variant="contained"
                  sx={{
                    width: "21vw",
                    height: "15vh",
                    marginTop: "5vh",
                    backgroundColor: "rgba(30, 30, 30, 0.1)",
                    color: "rgba(43, 43, 43, 0.8)",
                    ":hover": {
                      backgroundColor: "rgba(30, 30, 30, 0.1)",
                      color: "rgba(43, 43, 43, 0.8)",
                    },
                  }}
                >
                  {`Create ${inputValue}`}
                </Button>
              )} */}
          </Box>
        </Popover>
      </Box>
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

export default AddTag;