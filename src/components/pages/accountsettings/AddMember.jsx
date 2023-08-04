import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TextField from "@mui/material/TextField";
import closeIcon from "../../../assets/accountsetting-assets/x-circle.svg";
import { classes } from "./utils";
import {theme} from "../../../theme";
import { Box, Button, Grid } from "@mui/material";

function AddMember({ handleClose }) {

  return (
    <Card className={classes.CardComponent}>
      <CardHeader
        className={classes.Cardheader}
        // action={
        //   <Box className={classes.actionsContainer}>
        //     <Avatar
        //       onClick={handleClose}
        //       src={closeIcon}
        //       className={classes.CloseAction}
        //       // sx={{ cursor: "pointer" }}
        //     />
        //   </Box>
        // }
        title={
          <Grid container alignItems="center">
            <Grid item xs={10}>
              <Typography variant="h6">
                Add a Member to Aspire software
              </Typography>
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

      <CardContent className={classes.CardContent}>
        <Typography variant="subtitle1" className={classes.SubTitle}>
          Organizations allow you to invite team members and assign them.
        </Typography>

        <Typography variant="subtitle1" className={classes.EmailTextfieldText}>
          Email
        </Typography>
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          variant="outlined"
          className={classes.TextField}
          // InputProps={{ className: classes.input }}
        />

        <Button variant="contained" className={classes.AdduserBtn}>
          Add User
        </Button>
      </CardContent>
    </Card>
  );
}

export default AddMember;
