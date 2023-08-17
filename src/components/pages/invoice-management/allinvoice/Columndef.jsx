import React from "react";
import EditIcon from "../../../../assets/allinvoice-assets/edit.svg";
import ArrowUp from "../../../../assets/allinvoice-assets/arrow-up.svg";
import AlertCircle from "../../../../assets/allinvoice-assets/alert-circle.svg";
import Disc from "../../../../assets/allinvoice-assets/disc.svg";
import CheckCircle from "../../../../assets/allinvoice-assets/checkCircle.svg";
import { Box, Grid, Typography, Chip, Tooltip } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { lightPalette } from "../../../../theme";
import Action from "./Action";
import { classes } from "./utils";
import AddTag from "./AddTag";

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
      {Action ? (
        <Box className={classes.HeaderMoreVertIcon}>
          <MoreVertIcon
            sx={{
              color: lightPalette.color134.main,
            }}
          />
        </Box>
      ) : null}
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
      <Typography
        variant="body1"
        color={lightPalette.color134.main}
      >
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
        <Grid
        className={classes.StatusIcon}
        >
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
        <Box
        className={classes.StatusIcon}
        >
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
        <Box
        className={classes.StatusIcon}
        >
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
          <Chip
            label={value}
            className={classes.TagChip}
          />
        ) : (
          <Chip
            label="Tags"
            variant="outlined"
            className={classes.TagChip}
          />
        )}
      </Tooltip>
    </>
  );
};

const IconRenderer = (props) => (
  <Box className="my-icon">
    <Action />
  </Box>
);

export const columnData = [
  {
    headerName: "Document name",
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
    minWidth: 70,
    headerComponent: responsiveHeader,
    cellRenderer: StatusRow,
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
    field: "tags",
    minWidth: 50,
    headerComponent: responsiveHeader,
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
