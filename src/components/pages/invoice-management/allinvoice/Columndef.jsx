import React, { useState } from "react";
import EditIcon from "../../../../assets/allinvoice-assets/edit.svg";
import ArrowUp from "../../../../assets/allinvoice-assets/arrow-up.svg";
import AlertCircle from "../../../../assets/allinvoice-assets/alert-circle.svg";
import Disc from "../../../../assets/allinvoice-assets/disc.svg";
import CheckCircle from "../../../../assets/allinvoice-assets/checkCircle.svg";
import { Box, Grid, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { lightPalette } from "../../../../theme";
import Action from "./Action";

const iconSize = {
  xxl: 24,
  xl: 22,
  lg: 20,
  md: 18,
  sm: 16,
  xs: 14,
};

function responsiveHeader(params) {
  const value = params.displayName;
  const showArrow =
    params.displayName === "Status" || params.displayName === " ";
  const Action = params.displayName === " ";
  return (
    <>
      {/* { Action ? <EditIcon /> :  <Typography variant="body1" sx={{ color: "#1E1E1E" }}>
        {value}
      </Typography>
      {showArrow ? null : (
        <Box sx={{ pl: 1.5 }}>
          <img src={ArrowUp} alt="arrow-up" />
        </Box>
      )}} */}
      {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {Action ? (
        <Box>
          <img src={ArrowUp} alt="arrow-up" />
        </Box>
      ) : (
        <Typography variant="body1" sx={{ color: '#1E1E1E' }}>
          {value}
        </Typography>
      )}
      {showArrow ? null : (
        <Box sx={{ pl: 1.5 }}>
          <img src={ArrowUp} alt="arrow-up" />
        </Box>
      )}
    </div> */}
      <Typography variant="body1" sx={{ color: "#1E1E1E" }}>
        {value}
      </Typography>
      {showArrow ? null : (
        <Box sx={{ pl: 1.5 }}>
          <img src={ArrowUp} alt="arrow-up" />
        </Box>
      )}
      {Action ? (
          <MoreVertIcon
            sx={{
              color: lightPalette.color134.main,
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
      ) : null}
    </>
  );
}

const ResponsiveFontsize = (params) => {
  const value = params.value;

  return (
    <Typography
      variant="body1"
    >
      {value}
    </Typography>
  );
};

const DocumentNameRow = (params) => {

  return (
    <Box
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "rgba(0, 0, 0, 0.60)",
        }}
      >
        {params.value}
      </Typography>
      <Box
        component="img"
        src={EditIcon}
        alt="Edit"
        className="my-icon"
        sx={{
          marginLeft: "2vw",
          width: { xxl: 22, xl: 20, lg: 18, md: 16, sm: 14, xs: 12 },
          height: { xxl: 22, xl: 20, lg: 18, md: 16, sm: 14, xs: 12 },
        }}
      />
    </Box>
  );
};

const StatusRow = (params) => {
  let statusIcon;
  switch (params.value) {
    case "failed":
      statusIcon = (
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={AlertCircle}
            alt="Failed"
            sx={{
              width: iconSize,
              height: iconSize,
            }}
          />
        </Grid>
      );
      break;
    case "pending":
      statusIcon = (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={Disc}
            alt="Pending"
            sx={{
              width: iconSize,
              height: iconSize,
            }}
          />
        </Box>
      );
      break;
    case "success":
      statusIcon = (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={CheckCircle}
            alt="Success"
            sx={{
              width: iconSize,
              height: iconSize,
            }}
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
    <Typography
      variant="body1"
      sx={{
        color: "rgba(0, 0, 0, 0.60)",
        display: "flex",
        alignItems: "center",
      }}
    >
      {value}
    </Typography>
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
    minWidth: 200,
    headerCheckboxSelection: true,
    checkboxSelection: true,
    cellRenderer: DocumentNameRow,
  },
  {
    headerName: "Status",
    field: "status",
    headerComponent: responsiveHeader,
    cellRenderer: StatusRow,
  },
  {
    headerName: "Uploaded",
    field: "uploaded",
    headerComponent: responsiveHeader,
    cellRenderer: ResponsiveFontsize,
  },
  {
    headerName: "Validated",
    field: "validated",
    headerComponent: responsiveHeader,
    cellRenderer: ResponsiveFontsize,
  },
  {
    headerName: "Exported",
    field: "exported",
    headerComponent: responsiveHeader,
    cellRenderer: ResponsiveFontsize,
  },
  {
    headerName: "Tags",
    field: "tags",
    headerComponent: responsiveHeader,
    cellRenderer: TagRow,
  },
  {
    headerName: " ",
    field: " ",
    minWidth: 150,
    headerComponent: responsiveHeader,
    cellRenderer: IconRenderer,
  },
];
