import React, { useState } from "react";
import Nav from "../../pages/accountsettings/Nav";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InvoiceRecord from "./InvoicerRecord";
import checkCircle from "../../../assets/invoice-assets/check-circle.svg";
import trash from "../../../assets/invoice-assets/trash-2.svg";
import AddIcon from "@mui/icons-material/Add";
import { Root } from "./utils";
import { classes } from "./utils";
import { INVOICE } from "../../services/constantServices";

function Invoice() {

  const AddField = () => {
    const [fieldCount, setFieldCount] = useState(2); // Initial field count is 2 (for the first two InvoiceRecord components)

    const handleAddField = () => {
      setFieldCount((prevCount) => prevCount + 1);
      console.log(fieldCount);
    };

    return (
      <>
        {Array.from({ length: fieldCount - 2 }).map((_, index) => (
          <InvoiceRecord
            key={index}
            fieldName=" Add Field"
            fieldData="Add Data"
          />
        ))}

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box sx={{ marginLeft: 4 }}>
            <AddIcon
              sx={{
                color: "#868686",
                width: {
                  xl: "20px",
                  lg: "18px",
                  md: "17px",
                  sm: "14px",
                  xs: "14px",
                },
                height: {
                  xl: "20px",
                  lg: "18px",
                  md: "17px",
                  sm: "14px",
                  xs: "14px",
                },
                marginRight: 1,
              }}
            />
          </Box>
          <Box>
            <Typography
              variant="body2"
              sx={{
                cursor: "pointer",
                color: "#868686",
              }}
              onClick={handleAddField}
              // onClick={onAddField}
            >
              Add More Fields
            </Typography>
          </Box>
        </Box>
      </>
    );
  };

  return (
    <>
      <Nav />
      <Root className={classes.root}>
        <Grid container columns={{ xs: 4, sm: 7, md: 12 }}>
          <Grid item xs={9}>
            <Box
              className={classes.InvoiceGridMainBox}
            >
              <Box
                className={classes.InvoicePdfBox}
              >
                <Box sx={{
                  height: "100vh",
                }}>
                <div>Hello</div>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={3} className={classes.InvoiceGrid}>
            <Box className={classes.InvoiceGridMainBox}>
              <Box
                className={classes.InvoiceGridBox}
              >
                <Box className={classes.InvoiceRecordBox}>
                  <Typography
                    variant="body2"
                    className={classes.InvoiceRecordTitle}
                  >
                    Invoice
                  </Typography>
                  <InvoiceRecord fieldName="Invoice No" fieldData="1325533" />
                  <InvoiceRecord
                    fieldName="Invoice Date"
                    fieldData="12/02/2023"
                  />
                  <InvoiceRecord
                    fieldName="Invoice Order Date"
                    fieldData="10/02/2023"
                  />
                  <InvoiceRecord
                    fieldName="Invoice Order No."
                    fieldData="SD-1245632"
                  />
                </Box>

                <Box className={classes.InvoiceRecordBox}>
                  <Typography
                    variant="body2"
                    className={classes.InvoiceRecordTitle}
                  >
                    Supplier
                  </Typography>
                  <InvoiceRecord
                    fieldName="Supplier Name"
                    fieldData="Supplier Address"
                  />
                  <InvoiceRecord
                    fieldName="Supplier Address"
                    fieldData="2118 Thornridge Cir. Syracuse, Connecticut 35624"
                  />

                </Box>

                <Box className={classes.InvoiceRecordBox}>
                  <Typography
                    variant="body2"
                    className={classes.InvoiceRecordTitle}
                  >
                    Customer
                  </Typography>
                  <InvoiceRecord
                    fieldName="Customer Name"
                    fieldData="Cameron Williamson"
                  />
                  <InvoiceRecord
                    fieldName="Customer Address"
                    fieldData="3891 Ranchview Dr. Richardson, California 62639"
                  />
                </Box>

                <Box
                  sx={{
                    mb: { xxl: 10.5, xl: 8, lg: 6, md: 4.1, sm: 6, xs: 6.5 },
                  }}
                >
                  <Typography
                    variant="body2"
                    className={classes.InvoiceRecordTitle}
                  >
                    Payment
                  </Typography>
                  <InvoiceRecord fieldName="Payment  Total" fieldData="9.460" />
                  <InvoiceRecord
                    fieldName="Payment Total Value"
                    fieldData="2.00"
                  />
                </Box>

                <Box>
                  <Grid container>
                    <Grid item xs={10.5}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Button className={classes.Validatebtn}>
                          <Box
                            component="img"
                            src={checkCircle}
                            alt="check-circle"
                            className={classes.CheckCircleIcon}
                          />
                          {INVOICE.BUTTON_TEXT}
                        </Button>
                      </Box>
                    </Grid>
                    <Grid item xs={1.5} align="right">
                      <Box className={classes.trashbtn}>
                        <img src={trash} alt={"trash"} />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Root>
    </>
  );
}

export default Invoice;
