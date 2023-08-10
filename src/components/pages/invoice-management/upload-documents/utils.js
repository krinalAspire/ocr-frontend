import { styled } from "@mui/material/styles";
import { up } from "../../../../theme";

export const classes = {
  root: "root",
  centerContent: "centerContent",
  uploadFile: "uploadFile",
  ChooseFilebtn: "ChooseFilebtn",
  TitleText:"TitleText",
  ParagraphTextBox:"ParagraphTextBox"
};

export const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    //   background:"yellow",
    // marginTop: "2.5vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    // border: "1px solid red",
    border: `1px dashed ${theme.palette.secondaryBlack.lighter}`,
    [up("xs")]: {
      margin: "14px",
      height: "74vh",
    },
    [up("sm")]: {
      margin: "16px",
      height: "75vh",
    },
    [up("md")]: {
      margin: "18px",
      height: "68vh",
    },
    [up("lg")]: {
      margin: "20px",
      height: "64vh",
    },
    [up("xl")]: {
      margin: "23px",
      height:"65vh"
    //   height: "68vh",
    },
    [up("xxl")]: {
      margin: "25px",
      height: "65vh",
    },
  },
  [`& .${classes.centerContent}`]: {
    textAlign: "center",
  },
  [`& .${classes.uploadFile}`]: {
    marginBottom: theme.spacing(2),
    [up("xs")]: {
      width: "60px",
      height: "45px",
    },
    [up("sm")]: {
      width: "90px",
      height: "65px",
    },
    [up("md")]: {
      width: "90px",
      height: "65px",
    },
    [up("lg")]: {
      width: "115px",
      height: "80px",
    },
    [up("xl")]: {
      width: "130px",
      height: "85px",
    },
    [up("xxl")]: {
      width: "146px",
      height: "110px",
    },
  },
  [`& .${classes.ChooseFilebtn}`]: {
    background: theme.palette.primary.main,
    color:"white",
    ":hover": {
      background: theme.palette.primary.main,
      color: "white",
    },
    [up("xs")]: {
      width: "75px",
      height: "20px",
    },
    [up("sm")]: {
      width: "90px",
      height: "30px",
    },
    [up("md")]: {
      width: "93px",
      height: "33px",
    },
    [up("lg")]: {
      width: "130px",
      height: "40px",
    },
    [up("xl")]: {
      width: "130px",
      height: "40px",
    },
    [up("xxl")]: {
      width: "150px",
      height: "50px",
    },
  },
  [`& .${classes.ParagraphTextBox}`]: {
    width:"63%",
    [up('xs')]:{
        margin: '10px auto 25px',
    },
    [up('sm')]:{
        margin: '8px auto 26px',
    },
    [up('md')]:{
        margin: '10px auto 28px',
    },
    [up('lg')]:{
        margin: '10px auto 32px',
    },
    [up('xl')]:{
        margin: '12px auto 37px',
    },
    [up('xxl')]:{
        margin: '16px auto 43px',
    },
  },
}));
