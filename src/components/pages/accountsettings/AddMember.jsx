import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import closeIcon from "../../../assets/accountsetting-assets/x-circle.svg";
import { classes } from "./utils";
import { ADDMEMBER } from "../../services/constantServices";

function AddMember({ handleClose }) {

  return (
    <Card className={classes.CardComponent}>
      <CardHeader
        className={classes.Cardheader}
        title={
          <Grid container alignItems="center">
            <Grid item xs={10}>
              <Typography variant="h6">
                {ADDMEMBER.CARD_TITLE}
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
          {ADDMEMBER.SUB_TITLE}
        </Typography>

        <Typography variant="subtitle1" className={classes.EmailTextfieldText}>
          {ADDMEMBER.EMAIL}
        </Typography>
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          variant="outlined"
          className={classes.TextField}
        />

        <Button variant="contained" className={classes.AdduserBtn}>
          {ADDMEMBER.INVITE_BUTTON}
        </Button>
      </CardContent>
    </Card>
  );
}

export default AddMember;
