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
import filter from "../../../assets/paymenthistory-assets/filter.svg";
import Checkbox from "@mui/material/Checkbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Payment.css";
import NavPayment from "./NavPayment";
import Backdrop from "@mui/material/Backdrop";
import axios from "axios";
import { Root } from "./utils";
import { classes } from "./utils";
import { PAYMENT } from "../../services/constantServices";
import { theme } from "../../../theme";
import { PaymentData } from "./rowData";
import AddPayment from "./AddPayment";
import { lightPalette } from "../../../theme";
import { getrowData } from "../../services/api";
import { columnData } from "./columndef";

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

  
  // useEffect(()=>{
  //   // const resp= getrowData();
  //   // console.log(resp?.data);
  //   (async () => {
  //     try {
  //       const resp = await getrowData();
  //       console.log(resp?.data);
  //       setrowData(resp?.data);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   })();
  //   // setrowData(resp.data);
  // },[]);


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

  const FilterLabel = () => {
    return (
      <Box sx={{ display: "flex" }}>
        <Box
          component="img"
          src={filter}
          alt="Filter Icon"
          className={classes.filterIcon}
        />
        <Typography color={lightPalette.color134.main} variant="body1">
          {PAYMENT.SELECT_TEXT}
        </Typography>
      </Box>
    );
  };

  const [columnDefs, setColumnDefs]=useState(columnData);

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
                  color={lightPalette.color43.darker}
                >
                  {PAYMENT.SUBTITLE}
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
                  </Button>
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={open}
                  >
                    <AddPayment handleClose={handleClose}/>
                  </Backdrop>

                  <Box
                  className={classes.GridBoxAddbtnSelect}
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
                                background:lightPalette.color30.lightest,
                                color: lightPalette.color30.main,
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
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <FilterLabel />;
                          }
                          return selected.join(", ");
                        }}
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
    </>
  );
}

export default Payment;
