import { styled } from "@mui/material/styles";
import { up } from "../../../theme";

export const classes = {
  root: "root",
  MainBox:"MainBox",
  MainTitle: "MainTitle",
  box: "box",
  title: "title",
  titlegrid: "titlegrid",
  IndividualGrid: "IndividualGrid",
  Icon: "Icon",
  btn: "btn",
  fontweight: "fontweight",
  Gridpadding: "Gridpadding",
  Avatar: "Avatar",
  AdduserBox: "AdduserBox",
  AddIcon: "AddIcon",
  TextFieldContainer: "TextFieldContainer",
  CardComponent: "CardComponent",
  Cardheader: "Cardheader",
  AdduserBtn: "AdduserBtn",
  CardContent: "CardContent",
  SubTitle: "SubTitle",
  CloseAction: "CloseAction",
  EmailTextfieldText: "EmailTextfieldText",
  TextField:"TextField",
  Input:"Input",
  Progressbar:"Progressbar",
  checkBox:"checkBox"
};

export const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]:{
    //  background:"yellow"
  },
  [`& .${classes.MainTitle}`]:{
    fontSize: "Poppins",
    fontWeight: 600,
    [up('xs')]:{
      margin:"16px 21px 6px"
    },
    [up('sm')]:{
      margin:"18px 22px 8px"
    },
    [up('md')]:{
      margin:"19px 23px 11px"
    },
    [up('lg')]:{
      margin:"23px 23px 12px"
    },
    [up('xl')]:{
      margin:"27px 23px 14px"
    },
    [up('xxl')]:{
      margin:"32px 43px 16px"
    },
  },
  [`& .${classes.MainBox}`]: {
    // background:"yellow",
    [up("xs")]: {
      marginLeft: "20px",
      marginRight: "20px",
      height: "83vh",
    },
    [up("sm")]: {
      marginLeft: "20px",
      marginRight: "20px",
      height: "85vh",
    },
    [up("md")]: {
      marginLeft: "20px",
      marginRight: "20px",
      height: "75vh",
    },
    [up("lg")]: {
      marginLeft: "20px",
      marginRight: "20px",
      height: "75vh",
    },
    [up("xl")]: {
      marginLeft: "20px",
      marginRight: "20px",
      height: "79vh",
    },
    [up("xxl")]: {
      marginLeft: "40px",
      marginRight: "40px",
      height: "81.5vh",
    },
    borderRadius: "5px",
    border: `1px solid ${theme.palette.secondaryBlack.lighter}`,
    overflow: "auto",
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      background: "#D9D9D9",
      borderRadius: "5px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#868686",
      borderRadius: "5px",
    },
  },
  [`& .${classes.box}`]: {
    [up("xs")]: {
      margin: "15px 17px 15px 17px",
    },
    [up("sm")]: {
      margin: "16px 19px 16px 19px",
    },
    [up("md")]: {
      margin: "14px 19px 14px 19px",
    },
    [up("lg")]: {
      margin: "16px 20px 16px 20px",
    },
    [up("xl")]: {
      margin: "18px 23px 18px 23px",
    },
    [up("xxl")]: {
      margin: "20px 25px 20px 25px",
    },
  },
  [`& .${classes.title}`]: {
    color: theme.palette.color30.semidark,
    [up("xs")]: {
      marginBottom: "7px",
    },
    [up("sm")]: {
      marginBottom: "8px",
    },
    [up("md")]: {
      marginBottom: "9px",
    },
    [up("lg")]: {
      marginBottom: "10px",
    },
    [up("xl")]: {
      marginBottom: "11px",
    },
    [up("xxl")]: {
      marginBottom: "13px",
    },
  },
  [`& .${classes.titlegrid}`]: {
    borderRadius: "5px",
    background: theme.palette.color134.lightest,
    [up("xs")]: {
      marginBottom: "20px",
    },
    [up("sm")]: {
      marginBottom: "25px",
    },
    [up("md")]: {
      marginBottom: "30px",
    },
    [up("lg")]: {
      marginBottom: "35px",
    },
    [up("xl")]: {
      marginBottom: "40px",
    },
    [up("xxl")]: {
      marginBottom: "45px",
    },
  },
  [`& .${classes.IndividualGrid}`]: {
    [up("xs")]: {
      padding: "14px 0px 14px 14px",
    },
    [up("sm")]: {
      padding: "16px 0px 16px 16px",
    },
    [up("md")]: {
      padding: "18px 0px 18px 18px",
    },
    [up("lg")]: {
      padding: "20px 0px 20px 20px",
    },
    [up("xl")]: {
      padding: "22px 0px 22px 22px",
    },
    [up("xxl")]: {
      padding: "24px 0px 24px 24px",
    },
  },
  [`& .${classes.Icon}`]: {
    [up("xs")]: {
      width: "13px",
      height: "13px",
      marginTop: "1.6px",
    },
    [up("sm")]: {
      width: "15px",
      height: "15px",
      marginTop: "2.4px",
    },
    [up("md")]: {
      width: "18px",
      height: "18px",
      marginTop: "1.6px",
    },
    [up("lg")]: {
      width: "20px",
      height: "20px",
      marginTop: "3.2px",
    },
    [up("xl")]: {
      width: "22px",
      height: "22px",
      marginTop: "4.8px",
    },
    [up("xxl")]: {
      width: "24px",
      height: "24px",
      marginTop: "3.2px",
    },
    paddingRight: "16px",
  },
  [`& .${classes.btn}`]: {
    boxShadow: 'none',
    background: theme.palette.color134.semilight,
    color: theme.palette.color30.main,
    ":hover": {
      background: theme.palette.color134.semilight,
      color: "1E1E1E",
    },
    [up("xs")]: {
      width: "144px",
      height: "30px",
      marginBottom: "10px",
    },
    [up("sm")]: {
      width: "159px",
      height: "33px",
      margin: "20px 0px",
    },
    [up("md")]: {
      width: "156px",
      height: "34px",
      margin: "20px 0px",
    },
    [up("lg")]: {
      width: "165px",
      height: "37px",
      margin: "22px 0px",
    },
    [up("xl")]: {
      width: "185px",
      height: "40px",
      margin: "23px 0px",
    },
    [up("xxl")]: {
      width: "209px",
      height: "44px",
      margin: "24px 0px",
    },
  },
  [`& .${classes.fontweight}`]: {
    fontWeight: 500,
  },
  [`& .${classes.Gridpadding}`]: {
    paddingLeft: "37.6px",
  },
  [`& .${classes.Avatar}`]: {
    marginRight: "16px",
    [up("xs")]: {
      width: "19px",
      height: "19px",
    },
    [up("sm")]: {
      width: "20px",
      height: "20px",
    },
    [up("md")]: {
      width: "25px",
      height: "25px",
    },
    [up("lg")]: {
      width: "33px",
      height: "33px",
    },
    [up("xl")]: {
      width: "35px",
      height: "35px",
    },
    [up("xxl")]: {
      width: "45px",
      height: "45px",
    },
  },
  [`& .${classes.AdduserBox}`]: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "0.8vh",
    [up("xs")]: {
      marginBottom: "20px",
    },
    [up("sm")]: {
      marginBottom: "25px",
    },
    [up("md")]: {
      marginBottom: "30px",
    },
    [up("lg")]: {
      marginBottom: "35px",
    },
    [up("xl")]: {
      marginBottom: "40px",
    },
    [up("xxl")]: {
      marginBottom: "45px",
    },
  },
  [`& .${classes.AddIcon}`]: {
    color: theme.palette.primary.main,
    cursor: "pointer",
    marginRight: "0.8vh",
    [up("xs")]: {
      width: "11px",
      height: "11px",
    },
    [up("sm")]: {
      width: "12px",
      height: "12px",
    },
    [up("md")]: {
      width: "13px",
      height: "13px",
    },
    [up("lg")]: {
      width: "14px",
      height: "14px",
    },
    [up("xl")]: {
      width: "15px",
      height: "15px",
    },
    [up("xxl")]: {
      width: "16px",
      height: "16px",
    },
  },
  [`& .${classes.TextFieldContainer}`]: {
    [up("xs")]: {
      margin: "10px 0px",
    },
    [up("sm")]: {
      margin: "10px 0px",
    },
    [up("md")]: {
      margin: "15px 0px",
    },
    [up("lg")]: {
      margin: "20px 0px",
    },
    [up("xl")]: {
      margin: "25px 0px",
    },
    [up("xxl")]: {
      margin: "30px 0px",
    },
  },
  [`& .${classes.CardComponent}`]: {
    borderRadius: "5px",
    [up("xs")]: {
      width: "295px",
      height: "285px",
    },
    [up("sm")]: {
      width: "410px",
      height: "290px",
    },
    [up("md")]: {
      width: "425px",
      height: "300px",
    },
    [up("lg")]: {
      width: "500px",
      height: "330px",
    },
    [up("xl")]: {
      width: "530px",
      height: "400px",
    },
    [up("xxl")]: {
      width: "650px",
      height: "440px",
    },
  },
  [`& .${classes.Cardheader}`]: {
    background:theme.palette.color134.lighter,
    borderBottom:`1px solid ${theme.palette.color134.lightest}`
  },
  [`& .${classes.AdduserBtn}`]: {
    ":hover": {
      background: theme.palette.primary.main,
      color: "white",
    },
    [up("xs")]: {
      width: "70px",
      height: "25px",
      marginTop: "29px",
    },
    [up("sm")]: {
      width: "74px",
      height: "24px",
      marginTop: "30px",
    },
    [up("md")]: {
      width: "92px",
      height: "26px",
      marginTop: "30px",
    },
    [up("lg")]: {
      width: "105px",
      height:"35px",
      marginTop: "35px",
    },
    [up("xl")]: {
      width: "115px",
      height: "40px",
      marginTop: "40px",
    },
    [up("xxl")]: {
      width:"133px",
      height:"52px",
      marginTop: "45px",
    },
  },
  [`& .${classes.CardContent}`]: {
    [up("xs")]: {
      margin: "4px 0px 0px",
    },
    [up("sm")]: {
      margin: "4px 2px 0px",
    },
    [up("md")]: {
      margin: "5px 2px 0px",
    },
    [up("lg")]: {
      margin: "10px 5px 0px",
    },
    [up("xl")]: {
      margin: "13px 8px 0px",
    },
    [up("xxl")]: {
      margin: "18px 11px 0px",
    },
  },
  [`& .${classes.SubTitle}`]: {
    color: theme.palette.color43.dark,
    [up("xs")]: {
      marginBottom: theme.spacing(1),
    },
    [up("sm")]: {
      marginBottom: theme.spacing(1.3),
    },
    [up("md")]: {
      marginBottom: theme.spacing(1.5),
    },
    [up("lg")]: {
      marginBottom: theme.spacing(1.5),
    },
    [up("xl")]: {
      marginBottom: theme.spacing(2),
    },
    [up("xxl")]: {
      marginBottom: theme.spacing(2.5),
    },
  },
  [`& .${classes.CloseAction}`]: {
    cursor: "pointer",
    [up("xs")]: {
      width: "16px",
      height: "16px",
    },
    [up("sm")]: {
      width: "18px",
      height: "18px",
    },
    [up("md")]: {
      width: "20px",
      height: "20px",
    },
    [up("lg")]: {
      width: "22px",
      height: "22px",
    },
    [up("xl")]: {
      width: "23px",
      height: "23px",
    },
    [up("xxl")]: {
      width: "24px",
      height: "24px",
    },
  },
  [`& .${classes.EmailTextfieldText}`]: {
    fontWeight: 500,
    paddingBottom: theme.spacing(1.5),
  },
  [`& .${classes.TextField}`]:{
    '& .MuiInputBase-input': {
      [up('xs')]:{
        height:"6px" 
      },
      [up('sm')]:{
        height:"13px" 
      },
      [up('md')]:{
        height:"13px" 
      },
      [up('lg')]:{
        height:"17px" 
      },
      [up('xl')]:{
        height:"25px" 
      },
      [up('xxl')]:{
        height:"34px" 
      },
    },
  },
  [`& .${classes.Progressbar}`]: {
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
      width: "15vw",
      height: "1.29vh",
    },
  },
  [`& .${classes.checkBox}`]:{
    padding:"1px 8px"
  }
}));
