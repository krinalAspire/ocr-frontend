import React from "react";
import Box from "@mui/material/Box";
import { Avatar, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import user from "../../../assets/accountsetting-assets/user.svg";
import mail from "../../../assets/accountsetting-assets/mail.svg";
import SelectButton from "./Select";
import layers from "../../../assets/accountsetting-assets/layers.svg";
import Progress from "./Progress";
import Nav from "./Nav";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
// import Chip from '@mui/material/Chip';
import { Root } from "./utils";
import { classes } from "./utils";
import { PROFILE } from "../../services/constantServices";
import {theme} from "../../../theme";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import AddMember from "./AddMember";

function Profile() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Nav />
      <Typography
        variant="h5"
        // className={classes.MainTitle}
        sx={{
          fontSize: "Poppins",
          fontWeight: 600,
          margin: {
            xxl: "32px 43px 16px",
            xl: "27px 23px 14px",
            lg: "23px 23px 12px",
            md: "19px 23px 11px",
            sm: "18px 22px 8px",
            xs: "16px 21px 6px",
          },
        }}
      >
        {PROFILE.HEADING}
        {/* Account Settings */}
      </Typography>

      <Root className={classes.root}>
        <Box className={classes.box}>
          <Typography variant="subtitle1" className={classes.title}>
            {PROFILE.CHANGE_PASSWORD}
            {/* Change Password */}
          </Typography>

          <Grid
            container
            className={classes.titlegrid}
            columns={{ xs: 4, sm: 12 }}
          >
            <Grid item xs={5}>
              <Grid container className={classes.IndividualGrid}>
                <Grid item xs={1} align="center">
                  <Box className={classes.Icon}>
                    <img src={user} alt="user" />
                  </Box>
                </Grid>
                <Grid item xs={11} align="left">
                  <Typography
                    variant="body1"
                    className={classes.fontweight}
                    color={theme.palette.color30.main}
                    // sx={{
                    //   // color: "#1E1E1E",
                    //   color:"color30"
                    // }}
                  >
                    Pratik Patel
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color={theme.palette.color43.superdark}
                    // sx={{
                    //   color: "rgba(43, 43, 43, 0.80)",
                    // }}
                  >
                    pratik.patel@aspiresoftserv.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={7} className={classes.Gridpadding}>
              <Button className={classes.btn}>{PROFILE.BUTTON_TEXT}</Button>
            </Grid>
          </Grid>

          <Typography variant="subtitle1" className={classes.title}>
            {PROFILE.MEMBER}
            {/* Members */}
          </Typography>

          <Grid
            container
            sx={{
              // background: "rgba(159, 119, 235, 0.10)",
              background: theme.palette.primary.dark,
              borderRadius: "5px",
            }}
            mb={{ xl: 1.3, lg: 1, md: 0.9, sm: 0.7, xs: 0.5 }}
            columns={{ xs: 4, sm: 12 }}
          >
            <Grid item xs={5}>
              <Grid container className={classes.IndividualGrid}>
                <Grid item xs={1} align="center">
                  <Avatar
                    alt="Remy Sharp"
                    // src={selectedImage}
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    className={classes.Avatar}
                  />
                </Grid>
                <Grid item xs={11} align="left">
                  <Typography
                    variant="subtitle1"
                    className={classes.fontweight}
                    color={theme.palette.color30.main}
                    // sx={{
                    //   color: "#1E1E1E",
                    // }}
                  >
                    Pratik Patel
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color={theme.palette.color43.superdark}
                    // sx={{
                    //   color: "rgba(43, 43, 43, 0.80)",
                    // }}
                  >
                    pratik.patel@aspiresoftserv.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={7} className={classes.Gridpadding}>
              <TextField
                className={classes.TextFieldContainer}
                size="small"
                value="Admin"
                variant="outlined"
                disabled
              />
              {/* <SelectButton label="Admin" /> */}
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              background: theme.palette.color134.light,
              // background: "rgba(134, 134, 134, 0.10)",
              borderRadius: "5px",
            }}
            columns={{ xs: 4, sm: 12 }}
          >
            <Grid item xs={5}>
              <Grid container className={classes.IndividualGrid}>
                <Grid item xs={1} align="center">
                  <Box className={classes.Icon}>
                    <img src={mail} alt="mail" />
                  </Box>
                </Grid>
                <Grid item xs={11} align="left">
                  <Typography
                    variant="subtitle1"
                    className={classes.fontweight}
                    color={theme.palette.color30.main}
                    // sx={{
                    //   color: "#1E1E1E",
                    // }}
                  >
                    poonampavakar5632@gmail.com
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color={theme.palette.color43.superdark}
                    // sx={{
                    //   color: "rgba(43, 43, 43, 0.80)",
                    // }}
                  >
                    Invited by Poonam Pavaskar. Expires 1 week from now
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={7} className={classes.Gridpadding}>
              <TextField
                className={classes.TextFieldContainer}
                size="small"
                value="Member"
                variant="outlined"
                disabled
              />
              {/* <Chip
                label="Chip Outlined"
                // value="Member"
                variant="outlined"
                className={classes.TextFieldContainer}
              /> */}
              {/* <SelectButton label="Members" /> */}
            </Grid>
          </Grid>

          <Box className={classes.AdduserBox}>
            <Box>
              <AddIcon className={classes.AddIcon} />
            </Box>
            <Box>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.primary.main, cursor: "pointer" }}
                onClick={handleOpen}
              >
                {PROFILE.ADD_MORE_USERS}
                {/* Add More Users */}
              </Typography>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
                // onClick={handleClose}
              >
                <AddMember handleClose={handleClose}/>
                {/* <CircularProgress color="inherit" /> */}
              </Backdrop>
            </Box>
          </Box>

          <Typography variant="subtitle1" className={classes.title}>
            {PROFILE.PLAN}
            {/* My Plan */}
          </Typography>

          <Grid
            container
            className={classes.titlegrid}
            columns={{ xs: 4, sm: 12 }}
          >
            <Grid item xs={5}>
              <Grid container className={classes.IndividualGrid}>
                <Grid item xs={1} align="center">
                  <Box className={classes.Icon}>
                    <img src={layers} alt="layers" />
                  </Box>
                </Grid>
                <Grid item xs={11} align="left">
                  <Typography
                    variant="h5"
                    color={theme.palette.color30.main}
                    // sx={{
                    //   color: "#1E1E1E",
                    // }}
                  >
                    {PROFILE.MY_CURRENT_PLAN}
                    {/* My Current Plan */}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.color43.superdark}
                    // sx={{
                    //   color: "rgba(43, 43, 43, 0.80)",
                    // }}
                  >
                    {PROFILE.PLAN_EXPIRY}
                    {/* please check your plan which dated expires. */}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={7} className={classes.Gridpadding}>
              <Box
                sx={{
                  my: { xxl: 3, xl: 2.9, lg: 2.75, md: 2.5, sm: 2.5 },
                  mb: { xs: 1.3 },
                }}
              >
                <Progress />
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.color43.superdark,
                    // color: "rgba(43, 43, 43, 0.80)",
                    marginTop: {
                      xxl: 2,
                      xl: 1.9,
                      lg: 1.7,
                      md: 1.5,
                      sm: 1.2,
                      xs: 1,
                    },
                  }}
                >
                  190 of 200 credits remaining
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    // color: "rgba(43, 43, 43, 0.60)",
                    color: theme.palette.color43.dark,
                    fontWeight: 400,
                  }}
                >
                  Expires April 25th, 2023
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Typography variant="subtitle1" className={classes.title}>
            {PROFILE.SUMMERY}
            {/* Summary */}
          </Typography>

          <Box
            sx={{
              border: "1px solid #9F77EB",
              width: "auto",
              height: {
                xl: "430px",
                lg: "400px",
                md: "370px",
                sm: "330px",
                xs: "300px",
              },
            }}
            mb={{ xl: 5.7, lg: 4.7, md: 3.7, sm: 2.7, xs: 1.7 }}
          ></Box>
        </Box>
      </Root>
    </>
  );
}

export default Profile;
