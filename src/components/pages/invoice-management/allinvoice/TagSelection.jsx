import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTheme, styled } from "@mui/material/styles";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import ButtonBase from "@mui/material/ButtonBase";
// import Button from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import { Checkbox, TextField, Button, Fade, Paper } from "@mui/material";
import Popover from "@mui/material/Popover";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { classes } from "../invoice-tabs/utils";
import tag from "../../../../assets/allinvoice-assets/tag.svg";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

// const StyledAutocompletePopper = styled("div")(({ theme }) => ({
//   [`& .${autocompleteClasses.paper}`]: {
//     boxShadow: "none",
//     margin: 0,
//     color: "inherit",
//     fontSize: 13,
//   },
//   [`& .${autocompleteClasses.listbox}`]: {
//     backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1c2128",
//     padding: 0,
//     [`& .${autocompleteClasses.option}`]: {
//       minHeight: "auto",
//       alignItems: "flex-start",
//       padding: 8,
//       borderBottom: `1px solid  ${
//         theme.palette.mode === "light" ? " #eaecef" : "#30363d"
//       }`,
//       '&[aria-selected="true"]': {
//         backgroundColor: "transparent",
//       },
//       [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]:
//         {
//           backgroundColor: theme.palette.action.hover,
//         },
//     },
//   },
//   [`&.${autocompleteClasses.popperDisablePortal}`]: {
//     position: "relative",
//   },
// }));

// function PopperComponent(props) {
//   const { disablePortal, anchorEl, open, ...other } = props;
//   return <StyledAutocompletePopper {...other} />;
// }

// PopperComponent.propTypes = {
//   anchorEl: PropTypes.any,
//   disablePortal: PropTypes.bool,
//   open: PropTypes.bool.isRequired,
// };

// const StyledPopper = styled(Popper)(({ theme }) => ({
//   border: `1px solid ${theme.palette.mode === "light" ? "#e1e4e8" : "#30363d"}`,
//   boxShadow: `0 8px 24px ${
//     theme.palette.mode === "light" ? "rgba(149, 157, 165, 0.2)" : "rgb(1, 4, 9)"
//   }`,
//   borderRadius: 6,
//   width: 300,
//   zIndex: theme.zIndex.modal,
//   fontSize: 13,
//   color: theme.palette.mode === "light" ? "#24292e" : "#c9d1d9",
//   backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1c2128",
// }));

// const StyledInput = styled(InputBase)(({ theme }) => ({
//   padding: 10,
//   width: "100%",
//   borderBottom: `1px solid ${
//     theme.palette.mode === "light" ? "#eaecef" : "#30363d"
//   }`,
//   "& input": {
//     borderRadius: 4,
//     backgroundColor: theme.palette.mode === "light" ? "#fff" : "#0d1117",
//     padding: 8,
//     transition: theme.transitions.create(["border-color", "box-shadow"]),
//     border: `1px solid ${
//       theme.palette.mode === "light" ? "#eaecef" : "#30363d"
//     }`,
//     fontSize: 14,
//     "&:focus": {
//       boxShadow: `0px 0px 0px 3px ${
//         theme.palette.mode === "light"
//           ? "rgba(3, 102, 214, 0.3)"
//           : "rgb(12, 45, 107)"
//       }`,
//       borderColor: theme.palette.mode === "light" ? "#0366d6" : "#388bfd",
//     },
//   },
// }));

// const Button = styled(Button)(({ theme }) => ({
//   fontSize: 13,
//   width: "100%",
//   textAlign: "left",
//   paddingBottom: 8,
//   color: theme.palette.mode === "light" ? "#586069" : "#8b949e",
//   fontWeight: 600,
//   "&:hover,&:focus": {
//     color: theme.palette.mode === "light" ? "#0366d6" : "#58a6ff",
//   },
//   "& span": {
//     width: "100%",
//   },
//   "& svg": {
//     width: 16,
//     height: 16,
//   },
// }));

function TagSelection() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  // // const handleClick = (event) => {
  // //   setAnchorEl(anchorEl ? null : event.currentTarget);
  // // };

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  // const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  // const [anchorEl, setAnchorEl] = useState(null);
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

  // const handleClick = (event) => {
  //   console.log("anchorEl", event.currentTarget);
  //   setAnchorEl(event.currentTarget);
  //   // setHovered(true);
  //   // setClicked(true);
  //   // const cellElement = event.currentTarget.closest(".my-icon");
  //   // setAnchorEl(cellElement);
  // };

  const handleClose = () => {
    setAnchorEl(null);
    setInputValue(" ");
    // setHovered(false);
    // setClicked(false);
  };
  // const open = Boolean(anchorEl);

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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box className="my-icon">
          <Box
            component="img"
            src={tag}
            alt="tag"
            aria-describedby={id}
            type="button"
            // onClick={handleClick("bottom-end")}
            onMouseEnter={handleClick("bottom-end")}
            onMouseLeave={handleClose}
            className={classes.actionIcons}
          />
        </Box>
        {/* <Popper id={id} open={open} anchorEl={anchorEl}> */}
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Box
                  sx={{
                    bgcolor: "background.paper",
                    p: 1,
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.5)",
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
                              option.tag.toLowerCase() ===
                              inputValue.toLowerCase()
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
      </Box>
      {/* <div>
      <Button onClick={handleClick}  className={classes.TagButton}>
        Tag
        <KeyboardArrowDownIcon/>
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div style={{ padding: '16px' }}>
          <Autocomplete
          sx={{ width:"21vw"}}
            multiple
            id="checkboxes-tags-demo"
            options={top100Films}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </li>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Checkboxes"/>
            )}
          />
        </div>
      </Popover>
    </div> */}
      {/* <Box sx={{  fontSize: 13 }}>
        <Button variant="contained" disableRipple aria-describedby={id} onClick={handleClick}>
          Tag
          <KeyboardArrowDownIcon />
        </Button> */}
      {/* {value.map((label) => (
          <Box
            key={label.name}
            sx={{
              mt: "3px",
              height: 20,
              padding: ".15em 4px",
              fontWeight: 600,
              lineHeight: "15px",
              borderRadius: "2px",
            }}
            style={{
              backgroundColor: label.color,
              color: theme.palette.getContrastText(label.color),
            }}
          >
            {label.name}
          </Box>
        ))} */}
      {/* </Box>
      <StyledPopper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
      >
        <ClickAwayListener onClickAway={handleClose}>
          <div> */}
      {/* <Box
              sx={{
                borderBottom: `1px solid ${
                  theme.palette.mode === "light" ? "#eaecef" : "#30363d"
                }`,
                padding: "8px 10px",
                fontWeight: 600,
              }}
            >
              Apply labels to this pull request
            </Box> */}
      {/* <Autocomplete
              open
              multiple
              onClose={(event, reason) => {
                if (reason === "escape") {
                  handleClose();
                }
              }}
              // value={pendingValue}
              onChange={(event, newValue, reason) => {
                if (
                  event.type === "keydown" &&
                  event.key === "Backspace" &&
                  reason === "removeOption"
                ) {
                  return;
                }
                setPendingValue(newValue); */}
      {/* }}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              PopperComponent={PopperComponent}
              renderTags={() => null}
              noOptionsText="No labels"
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    // icon={icon}
                    // checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </li>
              )}
              //   renderOption={(props, option, { selected }) => ( */}
      {/* //     <li {...props}>
              //       <Box
              //         component={DoneIcon}
              //         sx={{ width: 17, height: 17, mr: "5px", ml: "-2px" }}
              //         style={{
              //           visibility: selected ? "visible" : "hidden",
              //         }}
              //       />
              //       <Box
              //         component="span"
              //         sx={{
              //           width: 14,
              //           height: 14,
              //           flexShrink: 0,
              //           borderRadius: "3px",
              //           mr: 1,
              //           mt: "2px",
              //         }}
              //         style={{ backgroundColor: option.color }}
              //       />
              //       <Box
              //         sx={{
              //           flexGrow: 1,
              //           "& span": {
              //             color:
              //               theme.palette.mode === "light"
              //                 ? "#586069"
              //                 : "#8b949e",
              //           },
              //         }}
              //       >
              //         {option.name}
              //         <br />
              //         <span>{option.description}</span>
              //       </Box>
              //       <Box
              //         component={CloseIcon}
              //         sx={{ opacity: 0.6, width: 18, height: 18 }}
              //         style={{
              //           visibility: selected ? "visible" : "hidden",
              //         }}
              //       />
              //     </li>
              //   )}
              options={top100Films}
              //   options={[...labels].sort((a, b) => {
              //     // Display the selected labels first.
              //     let ai = value.indexOf(a);
              //     ai = ai === -1 ? value.length + labels.indexOf(a) : ai;
              //     let bi = value.indexOf(b);
              //     bi = bi === -1 ? value.length + labels.indexOf(b) : bi;
              //     return ai - bi;
              //   })}
              // getOptionLabel={(option) => option.name}
              //   renderInput={(params) => (
              //     <TextField {...params} label="Checkboxes" placeholder="Favorites" />
              //   )}
              // renderInput={(params) => (
              //   <TextField {...params} label="Checkboxes" placeholder="Favorites" />
              // )}
              renderInput={(params) => (
                <StyledInput
                  {...params}
                  label="Checkboxes"
                  ref={params.InputProps.ref}
                  inputProps={params.inputProps}
                  //   autoFocus
                  placeholder="Filter labels"
                />
              )}
            />
          </div>
        </ClickAwayListener>
      </StyledPopper> */}
    </>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
];

const labels = [
  {
    name: "good first issue",
    color: "#7057ff",
    description: "Good for newcomers",
  },
  {
    name: "help wanted",
    color: "#008672",
    description: "Extra attention is needed",
  },
  {
    name: "priority: critical",
    color: "#b60205",
    description: "",
  },
  {
    name: "priority: high",
    color: "#d93f0b",
    description: "",
  },
  {
    name: "priority: low",
    color: "#0e8a16",
    description: "",
  },
  {
    name: "priority: medium",
    color: "#fbca04",
    description: "",
  },
  {
    name: "status: can't reproduce",
    color: "#fec1c1",
    description: "",
  },
  {
    name: "status: confirmed",
    color: "#215cea",
    description: "",
  },
  {
    name: "status: duplicate",
    color: "#cfd3d7",
    description: "This issue or pull request already exists",
  },
  {
    name: "status: needs information",
    color: "#fef2c0",
    description: "",
  },
  {
    name: "status: wont do/fix",
    color: "#eeeeee",
    description: "This will not be worked on",
  },
  {
    name: "type: bug",
    color: "#d73a4a",
    description: "Something isn't working",
  },
  {
    name: "type: discussion",
    color: "#d4c5f9",
    description: "",
  },
  {
    name: "type: documentation",
    color: "#006b75",
    description: "",
  },
  {
    name: "type: enhancement",
    color: "#84b6eb",
    description: "",
  },
  {
    name: "type: epic",
    color: "#3e4b9e",
    description: "A theme of work that contain sub-tasks",
  },
  {
    name: "type: feature request",
    color: "#fbca04",
    description: "New feature or request",
  },
  {
    name: "type: question",
    color: "#d876e3",
    description: "Further information is requested",
  },
];

export default TagSelection;
