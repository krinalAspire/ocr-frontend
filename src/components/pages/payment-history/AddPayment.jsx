import React, { useState, useRef } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import closeIcon from "../../../assets/paymenthistory-assets/x-circle.svg";
import calendar from "../../../assets/paymenthistory-assets/calendar.svg";
// import calendar from "../images/calendar.png";
// import Calendar from "../images/Calendar.svg";
// import SvgIcon from '@mui/material/SvgIcon';
import AccessibleIcon from "@mui/icons-material/Accessible";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { DatePickerToolbar } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import InputAdornment from "@mui/material/InputAdornment";

// import { ReactComponent as CalendarIcon } from "../images/calendar.svg";
import { classes } from "./utils";
import { Box, Button, Grid } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import StatusDropdown from "./StatusDropdown";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import IconButton from "@mui/material/IconButton";
import { theme } from "../../../theme";
import { AssessmentOutlined } from "@mui/icons-material";
import { ADDPAYMENT } from "../../services/constantServices";

function AddPayment({ handleClose }) {
  const [date, setDate]=useState(null);
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDate=(date)=>{
    // const date=event.target.value;
    const newdate=date;
    // const newdate=new Date(date)
    console.log("Date", newdate.$d);
    console.log("type",typeof(newdate.$d));
    setDate(newdate);
  }

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  function CustomOpenPickerIcon(props) {
    return <img src={calendar} alt="calendar" />;
  }

  const customDatePickerStyle = {
    backgroundImage: `url(${calendar})`,
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    paddingRight: "25px", // Adjust as needed to make space for the icon
  };

  // function CustomToolbar(props) {
  //   return (
  //     <Box
  //       // Pass the className to the root element to get correct layout
  //       className={props.className}
  //       sx={{ width:"30px", height:"20px", overflow:"hidden" }}
  //     >
  //       <DatePickerToolbar {...props} />
  //       {/* <RocketLaunchIcon fontSize="large" sx={{ m: 5 }} /> */}
  //     </Box>
  //   );
  // }

  return (
    <Card className={classes.CardComponent}>
      <CardHeader
        className={classes.Cardheader}
        title={
          <Grid container alignItems="center">
            <Grid item xs={10}>
              <Typography variant="h6">{ADDPAYMENT.CARD_TITLE}</Typography>
            </Grid>
            <Grid item xs={2} align="right">
              <Avatar
                onClick={handleClose}
                src={closeIcon}
                className={classes.CloseAction}
              />
            </Grid>
          </Grid>
        }
      />

      {/* <CustomOpenPickerIcon /> */}
      <CardContent className={classes.CardContent}>
        <Typography variant="subtitle1" className={classes.TypographyText}>
          {ADDPAYMENT.ORGANIZATION_NAME}
          {/* Organization Name */}
        </Typography>
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          // rows={1}
          variant="outlined"
          className={classes.TextField}
        />

        <Grid
          container
          // rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 4 }}
          className={classes.AddPaymentGridContainer}
        >
          <Grid item xs={4}>
            <Typography variant="subtitle1" className={classes.TypographyText}>
              {ADDPAYMENT.AMOUNT}
              {/* Amount */}
            </Typography>
            <TextField fullWidth size="small" className={classes.TextField} />
          </Grid>
          {/* <img src={Calendar} alt="bj"/> */}
          <Grid item xs={4}>
            <Typography variant="subtitle1" className={classes.TypographyText}>
              {ADDPAYMENT.DATE}
              {/* Date */}
            </Typography>
            {/* <TextField
      label="Select a date"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <img
            src={calendar}
            alt="Calendar Icon"
            style={{ cursor: 'pointer', paddingRight: '8px' }}
          />
        ),
      }}
    /> */}
            {/* <CustomOpenPickerIcon /> */}
            {/* <img src={calendar} alt="ghgjh"/> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                // minDate={dayjs(new Date(2022, 0, 1))}
                // maxDate={dayjs(new Date(2024, 12, 31))}
                value={date}
                onChange={(date) => handleDate(date)}
                reduceAnimations
                slots={
                  {
                    // openPickerIcon:calendar
                    // openPickerIcon:<CalendarIcon/>
                    // openPickerIcon:AccessibleIcon
                    // openPickerIcon:CalendarTodayOutlinedIcon
                    // OpenPickerIcon:CustomOpenPickerIcon
                    // toolbar: CustomToolbar,
                  }
                }
                className={classes.TextField}
                // renderInput={(params) => <TextField {...params} />}
                classes={{ calendarRoot: classes.customCalendarRoot }}
                // format="dd/MM/yyyy"
                // openTo="month"
                // views={['year', 'month', 'day']}
                // views={['month', 'year', 'day']}
                format="DD/MM/YYYY"
                slotProps={{
                  textField: {
                    size: "small",

                    // InputProps: { endAdornment: <CustomOpenPickerIcon /> },
                  },
                  // textField: {  }
                  // tabs: {
                  //   dateIcon: <CalendarIcon/>,
                  //   timeIcon: <CalendarIcon/>,
                  // },
                  // actionBar: calendar,
                  // toolbar: calendar,
                  // openPickerIcon: <CalendarIcon/>
                  // keyboardPicker: {
                  //   keyboardIcon: <img src={calendar} alt="Calendar" />,
                  // },
                }}
                // renderInput={(props) => (
                //   <div>
                //     <input {...props} />
                //     <IconButton edge="end" onClick={props.openPicker}>
                //     <img src={calendar} alt="Calendar" />
                //     </IconButton>
                //   </div>
                // )}
                // inputFormat="MM/dd/yyyy"
                // renderInput={(props) => (
                //   <div>
                //     <input {...props} />
                //     <img src={calendar} alt="Calendar" />
                //   </div>
                // )}
                // openPickerIcon={<img src={calendar} alt="Calendar" />}
                // components={{openPickerIcon:calendar}}
                // openPickerIcon={<img src={calendar} alt="Calendar" />}
                // slots={{
                //   openPickerIcon: <img src={calendar} alt="Calendar" />, // Use the SVG icon here
                // }}
                // TextFieldComponent={({ InputProps, ...other }) => (
                //   <TextField
                //     {...other}
                //     InputProps={{
                //       ...InputProps,
                //       startAdornment: (
                //         <InputAdornment position="start">
                //           <img src={calendar} alt="Calendar Icon" />
                //         </InputAdornment>
                //       ),
                //     }}
                //   />
                // )}
                // TextFieldComponent={({ InputProps, ...other }) => (
                //   <TextField
                //     {...other}
                //     InputProps={{
                //       ...InputProps,
                //       style: customDatePickerStyle,
                //     }}
                //   />
                // )}
                // renderInput={(params) => (
                //   <TextField
                //     {...params}
                //     InputProps={{
                //       ...params.InputProps,
                //       style: customDatePickerStyle,
                //     }}
                //   />
                // )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1" className={classes.TypographyText}>
              {ADDPAYMENT.STATUS}
              {/* Status */}
            </Typography>
            <StatusDropdown />
            {/* <Dropdown /> */}
          </Grid>
        </Grid>

        <Box className={classes.AddPaymentGridContainer}>
          <Typography variant="subtitle1" className={classes.TypographyText}>
            {ADDPAYMENT.UPLOAD_INVOICE}
            {/* Upload Payment Invoice */}
          </Typography>
          <Box className={classes.BrowseFileBox}>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />
            <Box className={classes.BrowseFileButtonBox}>
              <Button
                onClick={() => fileInputRef.current.click()}
                className={classes.BrowseFileButton}
              >
                {ADDPAYMENT. BROWSEFILE_BUTTON}
                {/* Browse File */}
              </Button>

              <Typography
                variant="subtitle1"
                className={classes.SelectFileTypography}
                color={
                  selectedFile
                    ? theme.palette.color30.main
                    : theme.palette.color30.semilight
                }
              >
                {selectedFile ? selectedFile.name : ADDPAYMENT.FILE_SELECTED}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button className={classes.AddPaymentbtn}>{ADDPAYMENT.ADD_PAYMENT}</Button>
      </CardContent>
    </Card>
  );
}

export default AddPayment;
