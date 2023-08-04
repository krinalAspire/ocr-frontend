import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button, Grid, Typography, ListItemText } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import filter from "../images/filter.svg";
import Checkbox from "@mui/material/Checkbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import download from "../images/download.svg";
import "./Payment.css";
// import { PaymentData } from "../rowData";
import NavPayment from "../NavPayment";
import Backdrop from "@mui/material/Backdrop";
import ArrowUp from "../images/arrow-up.svg";
import axios from "axios";
import { Root } from "./Style";
import { classes } from "./Style";
import { PAYMENT } from "../Services/constantService";
import { theme } from "../Theme";
import { PaymentData } from "../rowData";
import AddPayment from "./AddPayment";
import CircularProgress from "@mui/material/CircularProgress";

function Payment() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  // const [rowData, setrowData] = useState([]);
  const [rowData, setrowData] = useState(PaymentData);

  const [organization, setOrganization] = useState([]);

  const handleChange = (event) => {
    //   const organization = Array.isArray(event.target.value) ? event.target.value : [event.target.value];
    // setOrganization(organization);
    const selectedOrganizations = Array.isArray(event.target.value)
      ? event.target.value
      : [event.target.value];
    // console.log(selectedOrganizations);
    setOrganization(selectedOrganizations);
    // console.log(organization);
    // console.log(rowData && rowData.filter((item)=>item.Organization.includes(organization)));

    // console.log(
    //   rowData &&
    //     rowData.filter((item) =>
    //       selectedOrganizations.includes(item.Organization)
    //     )
    // );
  };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/PaymentData")
  //     .then((res) => {
  //       setrowData(res.data);
  //       // console.log(res.data)
  //     })
  //     .catch((err) => {
  //       // toast.error("Failed: " + err.message);
  //       console.log(err.message);
  //     });
  // }, []);

  //   const filteredRowData = rowData && rowData.filter((item) =>
  //   organization.includes(item.Organization)
  // );

  const filteredRowData =
    organization.length > 0
      ? rowData.filter((item) => organization.includes(item.Organization))
      : rowData;

  const DataCount = filteredRowData.length;
  // console.log("rawdata", filteredRowData.length);

  // console.log("Filterdata", filteredRowData);

  // const options = [
  //   { value: "Aspire Softserv Private Limited", label: "Aspire Softserv Private Limited" },
  //   { value: "Simmoms Infotech Private Limited", label: "Simmoms Infotech Private Limited" },
  //   { value: "Surekha Infotech Private Limited", label: "Surekha Infotech Private Limited" },
  //   // Other options
  // ];

  const options = Array.from(
    new Set(rowData.map((item) => item.Organization))
  ).map((organization) => ({
    value: organization,
    label: organization,
  }));

  // const Customicons = {
  //   sortAscending: '<i class="fa fa-arrow-up"/><i class="fa fa-arrow-down"/>',
  //   sortDescending: '<i class="fa fa-arrow-down"/><i class="fa fa-arrow-up "/>',
  // };

  function responsiveHeader(params) {
    const value = params.displayName;
    const showArrow = params.displayName === "Status";
    return (
      <>
        <Typography variant="body1" color={theme.palette.color30.main}>
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
      <Typography
        variant="body1"
        color={theme.palette.secondaryBlack.superdark}
      >
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
                color: theme.palette.primary.main,
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

  const FilterLabel = () => {
    return (
      <Box sx={{ display: "flex" }}>
        <Box
          component="img"
          src={filter}
          alt="Filter Icon"
          className={classes.filterIcon}
        />
        <Typography color={theme.palette.color134.main} variant="body1">
          {PAYMENT.SELECT_TEXT}
          {/* Filter by organiztion */}
        </Typography>
      </Box>
    );
  };

  const [columnDefs] = useState([
    {
      field: "Payment Invoice",
      checkboxSelection: true,
      headerCheckboxSelection: true,
      minWidth: 395,
      headerComponent: responsiveHeader,
      cellRenderer: ResponsiveFontsize,
    },
    {
      field: "Organization",
      minWidth: 315,
      headerComponent: responsiveHeader,
      cellRenderer: ResponsiveFontsize,
    },
    {
      field: "Amount",
      minWidth: 65,
      headerComponent: responsiveHeader,
      cellRenderer: ResponsiveFontsize,
    },
    {
      field: "Date",
      minWidth: 90,
      headerComponent: responsiveHeader,
      cellRenderer: ResponsiveFontsize,
    },
    {
      field: "Status",
      minWidth: 70,
      headerComponent: responsiveHeader,
      cellRenderer: ResponsiveFontsize,
    },
    {
      field: " ",
      minWidth: 165,
      // sortable: false,
      cellRenderer: handleInvoice,
    },
  ]);

  const defaultColDef = {
    // sortable: true,
    flex: 1,
    resizable: true,
    // minWidth: 100,
  };

  const gridOptions = {
    rowHeight: 50,
  };

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <NavPayment />
      <Root className={classes.root}>
        <Box m={{ xxl: 4, xl: 3.5, lg: 3, md: 2.5, sm: 2, xs: 2 }}>
          <Typography
            variant="h4"
            sx={{
              marginBottom: 0.7,
            }}
          >
            {PAYMENT.HEADING}({DataCount})
          </Typography>
          <Grid>
            <Grid container columns={{ xs: 4, sm: 12 }} mb={2}>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  color={theme.palette.color43.superdark}
                  // SX={{ color: "rgba(43, 43, 43, 0.80)" }}
                >
                  {PAYMENT.SUBTITLE}
                  {/* See history of your payment plan invoice */}
                </Typography>
              </Grid>

              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", mt: { xs: 1 } }}
                >
                  <Button className={classes.btn} onClick={handleOpen}>
                    <AddIcon className={classes.addIcon} />
                    {PAYMENT.BUTTON_TEXT}
                    {/* Add Payment Detail */}
                  </Button>
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={open}
                    // onClick={handleClose}
                  >
                    <AddPayment handleClose={handleClose}/>
                  </Backdrop>

                  <Box
                    sx={{
                      width: {
                        xxl: "14.11vw",
                        xl: "16vw",
                        lg: "17vw",
                        md: "18vw",
                        sm: "24vw",
                        xs: "42vw",
                      },
                    }}
                  >
                    <FormControl fullWidth size="small">
                      <Select
                        multiple
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={organization}
                        onChange={handleChange}
                        displayEmpty
                        IconComponent={KeyboardArrowDownIcon}
                        MenuProps={{
                          sx: {
                            height: "55vh",
                            "& .MuiMenuItem-root": {
                              "&:hover": {
                                background: "rgba(30, 30, 30, 0.10)",
                                color: theme.palette.color30.main,
                              },
                              "&.Mui-selected": {
                                background: "rgba(159, 119, 235, 0.28)",
                                color: theme.palette.color30.main,
                              },
                              "&.Mui-selected:hover": {
                                background: "rgba(159, 119, 235, 0.28)",
                                color: theme.palette.color30.main,
                              },
                            },
                          },
                        }}
                        // renderValue={(selected) => selected.join(", ")}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <FilterLabel />;
                          }
                          return selected.join(", ");
                          // return selected;
                        }}
                        // renderValue={(selected) => selected}
                      >
                        {options.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            <Checkbox
                              checked={organization.includes(option.value)}
                            />
                            <ListItemText primary={option.label} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Box
            className="ag-theme-alpine"
            // id="my-ag-grid-container"
            //  custom-scrollbar
            sx={{
              height: {
                xxl: "55vh",
                xl: "53vh",
                lg: "41.5vh",
                md: "47vh",
                sm: "53vh",
                xs: "58vh",
              },
            }}
          >
            <div className="custom-scrollbar">
              {/* Your custom scrollbar content */}
              {/* For example, you can add scroll buttons or other elements here */}
            </div>
            <AgGridReact
              // rowData={rowData}
              // rowData={rowData && rowData.filter((item)=>item.Organization.includes(organization))}
              rowData={filteredRowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              // icons={Customicons}
              gridOptions={gridOptions}
              className=" ag-root-wrapper"
            ></AgGridReact>
          </Box>
        </Box>
      </Root>
      {/* </ThemeProvider> */}
    </>
  );
}

export default Payment;
