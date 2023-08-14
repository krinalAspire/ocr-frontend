import { styled } from "@mui/material/styles";
import { up } from "../../../../theme";

export const classes = {
  root: "root",
  actionIcons:"actionIcons"
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
  [`& .${classes.actionIcons}`]:{
    marginRight:"1vw",
    [up('xs')]:{
      width:"12",
      height:"12px"
    },
    [up('sm')]:{
      width:"14",
      height:"14px"
    },
    [up('md')]:{
      width:"16",
      height:"16px"
    },
    [up('lg')]:{
      width:"18",
      height:"18px"
    },
    [up('xl')]:{
      width:"20",
      height:"20px"
    },
    [up('xxl')]:{
      width:"22",
      height:"22px"
    },
  }
}));