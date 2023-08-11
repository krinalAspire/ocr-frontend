import React, { useState } from "react";
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
import { Checkbox, TextField,Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledAutocompletePopper = styled("div")(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: "none",
    margin: 0,
    color: "inherit",
    fontSize: 13,
  },
  [`& .${autocompleteClasses.listbox}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1c2128",
    padding: 0,
    [`& .${autocompleteClasses.option}`]: {
      minHeight: "auto",
      alignItems: "flex-start",
      padding: 8,
      borderBottom: `1px solid  ${
        theme.palette.mode === "light" ? " #eaecef" : "#30363d"
      }`,
      '&[aria-selected="true"]': {
        backgroundColor: "transparent",
      },
      [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]:
        {
          backgroundColor: theme.palette.action.hover,
        },
    },
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: "relative",
  },
}));

function PopperComponent(props) {
  const { disablePortal, anchorEl, open, ...other } = props;
  return <StyledAutocompletePopper {...other} />;
}

PopperComponent.propTypes = {
  anchorEl: PropTypes.any,
  disablePortal: PropTypes.bool,
  open: PropTypes.bool.isRequired,
};

const StyledPopper = styled(Popper)(({ theme }) => ({
  border: `1px solid ${theme.palette.mode === "light" ? "#e1e4e8" : "#30363d"}`,
  boxShadow: `0 8px 24px ${
    theme.palette.mode === "light" ? "rgba(149, 157, 165, 0.2)" : "rgb(1, 4, 9)"
  }`,
  borderRadius: 6,
  width: 300,
  zIndex: theme.zIndex.modal,
  fontSize: 13,
  color: theme.palette.mode === "light" ? "#24292e" : "#c9d1d9",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1c2128",
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 10,
  width: "100%",
  borderBottom: `1px solid ${
    theme.palette.mode === "light" ? "#eaecef" : "#30363d"
  }`,
  "& input": {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#0d1117",
    padding: 8,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    border: `1px solid ${
      theme.palette.mode === "light" ? "#eaecef" : "#30363d"
    }`,
    fontSize: 14,
    "&:focus": {
      boxShadow: `0px 0px 0px 3px ${
        theme.palette.mode === "light"
          ? "rgba(3, 102, 214, 0.3)"
          : "rgb(12, 45, 107)"
      }`,
      borderColor: theme.palette.mode === "light" ? "#0366d6" : "#388bfd",
    },
  },
}));

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
  const [value, setValue] = React.useState([labels[1], labels[11]]);
  const [pendingValue, setPendingValue] = React.useState([]);
  const theme = useTheme();

  const handleClick = (event) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setValue(pendingValue);
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "github-label" : undefined;

  return (
    <>
      <Box sx={{  fontSize: 13 }}>
        <Button variant="contained" disableRipple aria-describedby={id} onClick={handleClick}>
          Tag
          <KeyboardArrowDownIcon />
        </Button>
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
      </Box>
      <StyledPopper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
      >
        <ClickAwayListener onClickAway={handleClose}>
          <div>
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
            <Autocomplete
              open
              multiple
              onClose={(event, reason) => {
                if (reason === "escape") {
                  handleClose();
                }
              }}
              value={pendingValue}
              onChange={(event, newValue, reason) => {
                if (
                  event.type === "keydown" &&
                  event.key === "Backspace" &&
                  reason === "removeOption"
                ) {
                  return;
                }
                setPendingValue(newValue);
              }}
              disableCloseOnSelect
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
              //   renderOption={(props, option, { selected }) => (
              //     <li {...props}>
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
              getOptionLabel={(option) => option.name}
              //   renderInput={(params) => (
              //     <TextField {...params} label="Checkboxes" placeholder="Favorites" />
              //   )}
              renderInput={(params) => (
                <StyledInput
                  {...params}
                  ref={params.InputProps.ref}
                  inputProps={params.inputProps}
                  //   autoFocus
                  placeholder="Filter labels"
                />
              )}
            />
          </div>
        </ClickAwayListener>
      </StyledPopper>
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
