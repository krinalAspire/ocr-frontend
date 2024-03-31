import React, { useEffect, useState } from "react";
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
  Autocomplete,
  TextField,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { lightPalette } from "../../../../theme";
import Action from "./Action";
import { classes } from "./utils";
import AddTag from "./AddTag";
import TagSelection from "./TagSelection";
import axios from "axios";

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
      {/* {Action ? <ColumnSelection /> : null} */}
      {/* </Box> */}
    </>
  );
}

const ResponsiveFontsize = (params) => {
  const value = params.value;
  // const isSelected = params.node.isSelected(); 
//   const iconHTML = isSelected
//   ? '<i class="fa fa-check-circle"></i>' // Replace with your icon HTML
//   : ''; // Leave it empty if the row is not selected

// // Return the HTML content to render in the cell
// return iconHTML;

  return (
    <Typography variant="body1" color={lightPalette.color134.main}>
      {value}
    </Typography>
  );
};

export const DocumentNameRow = (params) => {
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
      </Box>
    </Box>
  );
};

export const StatusRow = (params) => {
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

export const TagRow = (params) => {
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


const IconRenderer = (params) => {
  const [id, setID]= useState(null)
  // console.log('HOVERID',params?.data?.id);
  const handleclick = () => {
    // console.log(id);
    const id= params?.data?.id
    setID(id)
    // return id;
  };

  return (
    <Box onClick={handleclick}>
      <Action id={id} handleclick={handleclick}/>
    </Box>
  );
}; 


export const columnData = [
  // {
  //   headerCheckboxSelection: true,
  //   checkboxSelection: true,
  //   headerCheckboxSelectionFilteredOnly: true,
  //   headerName: 'Custom Select All', // Custom header text
  //   field: 'make'
  // },
  {
    headerName: "Document Name",
    field: "documentName",
    headerComponent: responsiveHeader,
    minWidth: 330,
    headerCheckboxSelection: true,
    checkboxSelection: true,
    cellRenderer: DocumentNameRow,
  },
  {
    headerName: "Status",
    field: "status",
    minWidth: 130,
    // headerComponent: responsiveHeader,
    cellRenderer: StatusRow,
    filter: 'CustomFilter',
    // headerCheckboxSelection: (params) => {
    //   const displayedColumns = params.columnApi.getAllDisplayedColumns();
    //   return displayedColumns[0] === params.column;
    // },
  },
  {
    headerName: "Uploaded",
    field: "uploaded",
    minWidth: 115,
    headerComponent: responsiveHeader,
    cellRenderer: ResponsiveFontsize,
  },
  {
    headerName: "Validated",
    field: "validated",
    minWidth: 115,
    headerComponent: responsiveHeader,
    cellRenderer: ResponsiveFontsize,
  },
  {
    headerName: "Exported",
    field: "exported",
    minWidth: 115,
    headerComponent: responsiveHeader,
    cellRenderer: ResponsiveFontsize,
  },
  {
    headerName: "Tags",
    field: "tag",
    minWidth: 100,
    // headerComponent: responsiveHeader,
    filter: 'CustomFilter',
    cellRenderer: TagRow,
  },
  {
    headerName: " ",
    field: " ",
    minWidth: 145,
    headerComponent: responsiveHeader,
    cellRenderer: IconRenderer,
  },
];
