import { styled } from "@mui/material/styles";
import { up } from "../../../../theme";

export const classes = {
  root: "root",
  SecondGridBox: "SecondGridBox",
  UploadButton: "UploadButton",
  SearchField: "SearchField",
};

export const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    //    background:"yellow"
    [up("xs")]: {
        margin: "20px 14px",
      },
      [up("sm")]: {
        margin: "20px 16px",
      },
      [up("md")]: {
        margin: "23px 18px",
      },
      [up("lg")]: {
        margin: "25px 20px",
      },
      [up("xl")]: {
        margin: "30px 23px",
      },
      [up("xxl")]: {
        margin: "35px 25px",
      },
  },
  [`& .${classes.SecondGridBox}`]: {
    display: "flex",
    justifyContent: "flex-end",
  },
  [`& .${classes.UploadButton}`]: {
    background: theme.palette.primary.main,
    ":hover": {
      background: theme.palette.primary.darker,
    },
    [up("xs")]: {
      width: "80px",
      height: "25px",
    },
    [up("sm")]: {
      width: "90px",
      height: "30px",
    },
    [up("md")]: {
      width: "95px",
      height: "30px",
    },
    [up("lg")]: {
      width: "100px",
      height: "35px",
    },
    [up("xl")]: {
      width: "115px",
      height: "40px",
    },
    [up("xxl")]: {
      width: "125px",
      height: "45px",
    },
  },
  [`& .${classes.SearchField}`]: {
    marginRight: "1vh",
    "& .MuiInputBase-input": {
      [up("xs")]: {
        width: "155px",
        height: "8px",
      },
      [up("sm")]: {
        width: "100px",
        height: "13px",
      },
      [up("md")]: {
        width: "125px",
        height: "13px",
      },
      [up("lg")]: {
        width: "145px",
        height: "18px",
      },
      [up("xl")]: {
        width: "185px",
        height: "23px",
      },
      [up("xxl")]: {
        width: "210px",
        height: "29px",
      },
    },
  },
}));
