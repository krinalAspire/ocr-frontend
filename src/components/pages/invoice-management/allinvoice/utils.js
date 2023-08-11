import { styled } from "@mui/material/styles";
import { up } from "../../../../theme";

export const classes = {
  root: "root",
};

export const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    margin:"0px 2vw",
    //    background:"yellow",
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
}));