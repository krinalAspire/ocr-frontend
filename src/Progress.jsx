import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { up } from "./theme";
import { classes } from "./components/pages/accountsettings/utils";

function Progress() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    [up("xs")]: {
      width: "45vw",
      height: "1vh",
    },
    [up("sm")]: {
      width: "23vw",
      height: "0.8vh",
    },
    [up("md")]: {
      width: "17vw",
      height: "1.3vh",
    },
    [up("lg")]: {
      width: "17vw",
      height: "1.7vh",
    },
    [up("xl")]: {
      width: "17vw",
      height: "1.29vh",
    },
    [up("xxl")]: {
      // width:'16.92vw',
      width: "15vw",
      height: "1.29vh",
    },
    borderRadius: 7,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[300],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 7,
      //   backgroundColor: theme.palette.mode === 'light' ? '#9F77EB' : '#D9D9D9',
      backgroundColor: "#9F77EB",
    },
  }));

  return (
    <>
    {/* <BorderLinearProgress variant="determinate" value={85} /> */}
     <LinearProgress variant="determinate" value={85} className={classes.Progressbar} />
    </>
  )
}

export default Progress;
