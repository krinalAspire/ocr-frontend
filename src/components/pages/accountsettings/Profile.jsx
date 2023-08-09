import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Avatar, Button, Typography, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import user from "../../../assets/accountsetting-assets/user.svg";
import mail from "../../../assets/accountsetting-assets/mail.svg";
import layers from "../../../assets/accountsetting-assets/layers.svg";
import Nav from "./Nav";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { Root } from "./utils";
import { classes } from "./utils";
import { PROFILE } from "../../services/constantServices";
import Backdrop from "@mui/material/Backdrop";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import AddMember from "./AddMember";
import { lightPalette } from "../../../theme";

function Profile() {
  const [active, setActive] =useState("Active")
  const [isChecked, setIsChecked] = useState(active === "Active");

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Nav />
      <Root className={classes.root}>
      <Typography
        variant="h5"
        className={classes.MainTitle}
      >
        {PROFILE.HEADING}
      </Typography>

      <Box className={classes.MainBox}>
        <Box className={classes.box}>
          <Typography variant="subtitle1" className={classes.title}>
            {PROFILE.CHANGE_PASSWORD}
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
                    color={lightPalette.color30.main}
                  >
                    Pratik Patel
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color={lightPalette.color43.darker}
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
          </Typography>

          <Grid
            container
            sx={{
              background: lightPalette.primary.lightest,
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
                    color={lightPalette.color30.main}
                  >
                    Pratik Patel
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color={lightPalette.color43.darker}
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
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              background: lightPalette.color134.lightest,
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
                    color={lightPalette.color30.main}
                  >
                    poonampavakar5632@gmail.com
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color={lightPalette.color43.darker}
                  >
                    Invited by Poonam Pavaskar. Expires 1 week from now
                  </Typography>
                  <FormControlLabel
                    label={
                      <Typography
                        variant="subtitle1"
                        color={lightPalette.color43.darker}
                      >
                        {active}
                      </Typography>
                    }
                    control={
                      <Checkbox
                        className={classes.checkBox}
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                    }
                  />
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
            </Grid>
          </Grid>

          <Box className={classes.AdduserBox}>
            <Box>
              <AddIcon className={classes.AddIcon} />
            </Box>
            <Box>
              <Typography
                variant="body2"
                sx={{ color: lightPalette.primary.main, cursor: "pointer" }}
                onClick={handleOpen}
              >
                {PROFILE.ADD_MORE_USERS}
              </Typography>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
              >
                <AddMember handleClose={handleClose} />
              </Backdrop>
            </Box>
          </Box>

          <Typography variant="subtitle1" className={classes.title}>
            {PROFILE.PLAN}
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
                  <Typography variant="h5" color={lightPalette.color30.main}>
                    {PROFILE.MY_CURRENT_PLAN}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={lightPalette.color43.darker}
                  >
                    {PROFILE.PLAN_EXPIRY}
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
                <LinearProgress
                  variant="determinate"
                  value={85}
                  className={classes.Progressbar}
                />
                <Typography
                  variant="h5"
                  sx={{
                    color: lightPalette.color43.darker,
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
                    color: lightPalette.color43.semidark,
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
      </Box>
      </Root>
    </>
  );
}

export default Profile;
