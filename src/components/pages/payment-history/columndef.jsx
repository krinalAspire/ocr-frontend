import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { lightPalette } from "../../../theme";
import ArrowUp from "../../../assets/paymenthistory-assets/arrow-up.svg";
import download from "../../../assets/paymenthistory-assets/download.svg";

function responsiveHeader(params) {
  const value = params.displayName;
  const showArrow = params.displayName === "Status";
  return (
    <>
      <Typography variant="body1" color={lightPalette.color30.main}>
        {value}
      </Typography>
      {showArrow ? null : (
        <Box sx={{ pl: 1.5 }}>
          <img src={ArrowUp} alt="arrow-up" />
        </Box>
      )}
    </>
  );
}

const ResponsiveFontsize = (params) => {
  const value = params.value;
  return (
    <Typography variant="body1" color={lightPalette.secondaryBlack.semidark}>
      {value}
    </Typography>
  );
};

const handleInvoice = () => {
  const handleClicked = () => {
    alert(`It's Working!!`);
  };

  return (
    <Grid>
      <Grid container alignItems="center" justifyContent="flex-start">
        <Grid item xs={3}>
          {" "}
          <Box>
            <img
              src={download}
              alt="download"
              style={{ marginRight: "8px", marginTop: "9px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Typography
            variant="body1"
            sx={{
              // color: "#9F77EB",
              color: lightPalette.primary.main,
              cursor: "pointer",
              // fontFamily: "Heebo",
              // fontWeight: "500",
              // fontSize: "16px !important",
            }}
            onClick={() => handleClicked()}
          >
            Download Invoice
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const columnData = [
  {
    headerName: "Payment Invoice",
    field: "payment_invoice",
    checkboxSelection: true,
    headerCheckboxSelection: true,
    minWidth: 395,
    headerComponent: responsiveHeader,
    cellRenderer: ResponsiveFontsize,
  },
  {
    headerName: "Organization",
    field: "Organization",
    minWidth: 315,
    headerComponent: responsiveHeader,
    cellRenderer: ResponsiveFontsize,
  },
  {
    headerName: "Amount",
    field: "amount",
    minWidth: 65,
    headerComponent: responsiveHeader,
    cellRenderer: ResponsiveFontsize,
  },
  {
    headerName: "Date",
    field: "date",
    minWidth: 90,
    headerComponent: responsiveHeader,
    cellRenderer: ResponsiveFontsize,
  },
  {
    headerName: "Status",
    field: "status",
    minWidth: 70,
    headerComponent: responsiveHeader,
    cellRenderer: ResponsiveFontsize,
  },
  {
    headerName: " ",
    field: " ",
    minWidth: 165,
    // sortable: false,
    cellRenderer: handleInvoice,
  },
];
