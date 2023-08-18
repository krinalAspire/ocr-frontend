import React, { useState } from "react";
import EditIcon from "../../../../assets/allinvoice-assets/edit.svg";
import ArrowUp from "../../../../assets/allinvoice-assets/arrow-up.svg";
import AlertCircle from "../../../../assets/allinvoice-assets/alert-circle.svg";
import Disc from "../../../../assets/allinvoice-assets/disc.svg";
import CheckCircle from "../../../../assets/allinvoice-assets/checkCircle.svg";
import {
  Box,
  Grid,
  Typography,
  Chip,
  Tooltip,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  IconButton,
  ListItemButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { lightPalette } from "../../../../theme";
import Action from "./Action";
import { classes } from "./utils";
import AddTag from "./AddTag";
import TagSelection from "./TagSelection";

export function ColumnSelection() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const items = [
    { id: 1, label: "Document Name" },
    { id: 2, label: "Status" },
    { id: 3, label: "Uploaded" },
    { id: 4, label: "Validated" },
    { id: 5, label: "Exported" },
    { id: 6, label: "Tags" },
    // Add more items as needed
  ];

  return (
    <>
      {/* <Box> */}
      <Box className={classes.HeaderMoreVertIcon}>
        <MoreVertIcon
          sx={{
            color: lightPalette.color134.main,
          }}
          onClick={handleClick}
        />
      </Box>
      <Popover
        id={id}
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
        <List sx={{width:"13vw"}}>
          {items.map((item) => (
            <ListItem
              key={item.id}
              // button
              // onClick={handleToggle(item.id)}
              onClick={handleToggle(item.label)}
              sx={{
                // display: "flex",
                // alignItems: "center",
                "& .MuiListItemIcon-root": {
                  minWidth: 15, 
                  // paddingLeft: 0, // Adjust this value to control spacing
                },
              }}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  // checked={checked.indexOf(item.id) !== -1}
                  checked={checked.indexOf(item.label) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Popover>
      {/* </Box> */}
    </>
  );
}

function responsiveHeader(params) {
  const value = params.displayName;
  const showArrow =
    params.displayName === "Status" || params.displayName === " ";
  const Action = params.displayName === " ";
  return (
    <>
      {/* <Box> */}
      <Typography variant="body1" color={lightPalette.color30.main}>
        {value}
      </Typography>
      {showArrow ? null : (
        <Box sx={{ pl: 1.5 }}>
          <img src={ArrowUp} alt="arrow-up" />
        </Box>
      )}
      {Action ? <ColumnSelection /> : null}
      {/* </Box> */}
    </>
  );
}

const ResponsiveFontsize = (params) => {
  const value = params.value;

  return (
    <Typography variant="body1" color={lightPalette.color134.main}>
      {value}
    </Typography>
  );
};

const DocumentNameRow = (params) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="body1" color={lightPalette.color134.main}>
        {params.value}
      </Typography>
      <Box className="my-icon">
        <Box
          component="img"
          src={EditIcon}
          alt="Edit"
          className={classes.EditIcon}
        />
        {/* <AddTag /> */}
      </Box>
    </Box>
  );
};

const StatusRow = (params) => {
  let statusIcon;
  switch (params.value) {
    case "failed":
      statusIcon = (
        <Grid className={classes.StatusIcon}>
          <Box
            component="img"
            src={AlertCircle}
            alt="Failed"
            className={classes.StatusIconSize}
          />
        </Grid>
      );
      break;
    case "pending":
      statusIcon = (
        <Box className={classes.StatusIcon}>
          <Box
            component="img"
            src={Disc}
            alt="Pending"
            className={classes.StatusIconSize}
          />
        </Box>
      );
      break;
    case "success":
      statusIcon = (
        <Box className={classes.StatusIcon}>
          <Box
            component="img"
            src={CheckCircle}
            alt="Success"
            className={classes.StatusIconSize}
          />
        </Box>
      );
      break;
    default:
      statusIcon = params.value;
      break;
  }
  return statusIcon;
};

const TagRow = (params) => {
  const value = params.value;

  return (
    <>
      <Tooltip title={value} placement="bottom-end" arrow>
        {value ? (
          <Chip label={value} className={classes.TagChip} />
        ) : (
          <Chip label="Tags" variant="outlined" className={classes.TagChip} />
        )}
      </Tooltip>
    </>
  );
};

const IconRenderer = (props) => (
  // <Box className="my-icon">
  <Action />
  // <TagSelection />
  // <AddTag />
  // </Box>
);

// function handleIconClick(rowId) {
//   console.log('Icon clicked for row ID:', rowId);
//   return(
//     <AddTag />
//   )
//   // Implement your logic here
// }

export const columnData = [
  {
    headerName: "Document Name",
    field: "documentName",
    headerComponent: responsiveHeader,
    minWidth: 330,
    headerCheckboxSelection: true,
    checkboxSelection: true,
    cellRenderer: DocumentNameRow,
    hide: false,
  },
  {
    headerName: "Status",
    field: "status",
    minWidth: 70,
    headerComponent: responsiveHeader,
    cellRenderer: StatusRow,
    hide: false,
  },
  {
    headerName: "Uploaded",
    field: "uploaded",
    minWidth: 115,
    headerComponent: responsiveHeader,
    cellRenderer: ResponsiveFontsize,
    hide: false,
  },
  {
    headerName: "Validated",
    field: "validated",
    minWidth: 115,
    headerComponent: responsiveHeader,
    cellRenderer: ResponsiveFontsize,
    hide: false,
  },
  {
    headerName: "Exported",
    field: "exported",
    minWidth: 115,
    headerComponent: responsiveHeader,
    cellRenderer: ResponsiveFontsize,
    hide: false,
  },
  {
    headerName: "Tags",
    field: "tags",
    minWidth: 50,
    headerComponent: responsiveHeader,
    cellRenderer: TagRow,
    hide: false,
  },
  {
    headerName: " ",
    field: " ",
    minWidth: 145,
    headerComponent: responsiveHeader,
    cellRenderer: IconRenderer,
    // cellRenderer: function (params) {
    // return (
    // <Action onclick={handleIconClick(params.node.id)}/>
    // <Box >
    // <AddTag onclick={handleIconClick(params.node.id)}/>
    // </Box>
    // <i class="fas fa-trash my-icon" onclick={handleIconClick(params.node.id)}></i>
    // )
    // `<i class="fas fa-trash my-icon" onclick="handleIconClick(${params.node.id})"></i>`;
    // },
  },
];
