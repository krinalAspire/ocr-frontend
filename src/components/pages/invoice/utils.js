import { styled } from "@mui/material/styles";
import { up } from "../../../theme";

export const classes = {
  root: "root",
  InvoicePdfMainBox: "InvoicePdfMainBox",
  InvoicePdfBox: "InvoicePdfBox",
  InvoiceGridMainBox: "InvoiceGridMainBox",
  InvoiceGrid: "InvoiceGrid",
  InvoiceGridBox: "InvoiceGridBox",
  InvoiceRecordBox: "InvoiceRecordBox",
  InvoiceRecordTitle: "InvoiceRecordTitle",
  Validatebtn: "Validatebtn",
  trashbtn: "trashbtn",
  CheckCircleIcon: "CheckCircleIcon",
  GridContainer: "GridContainer",
  CheckedFieldIcon: "CheckedFieldIcon",
  FiberManualRecordIcon: "FiberManualRecordIcon",
  contentEditableField: "contentEditableField",
  TypographyField: "TypographyField",
  GridAlign: "GridAlign",
  CheckCloseIcon: "CheckCloseIcon",
};

export const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
  },
  [`& .${classes.InvoicePdfMainBox}`]: {
    [up("xs")]: {
      height: "20vh",
    },
    [up("sm")]: {
      height: "20vh",
    },
    [up("md")]: {
      height: "86vh",
    },
    [up("lg")]: {
      height: "50vh",
    },
    [up("xl")]: {
      height: "80vh",
    },
    [up("xxl")]: {
      height: "80vh", 
    },
  },
  [`& .${classes.InvoicePdfBox}`]: {
    border: "1px solid red",
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
    [up("xs")]: {
      height: "74vh",
      margin:"8px 8px"
    },
    [up("sm")]: {
      height: "37vh",
      margin:"12px 12px"
    },
    [up("md")]: {
      height: "81vh",
      margin:"16px 16px"
    },
    [up("lg")]: {
      height: "81vh",
      margin:"20px 20px"
    },
    [up("xl")]: {
      height: "74vh",
      margin:"24px 24px"
    },
    [up("xxl")]: {
      height: "75vh",
      margin:"24px 24px"
    },
  },
  [`& .${classes.InvoiceGridMainBox}`]: {
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
    [up("xs")]: {
      height: "77.5vh",
    },
    [up("sm")]: {
      height: "40vh",
    },
    [up("md")]: {
      height: "86vh",
    },
    [up("lg")]: {
      height: "88.8vh",
    },
    [up("xl")]: {
      height: "80vh",
    },
    [up("xxl")]: {
      height: "80vh",
    },
  },
  [`& .${classes.InvoiceGrid}`]: {
    borderLeft: "1px solid rgba(0, 0, 0, 0.06)",
    background:theme.palette.color247.main
  },
  [`& .${classes.InvoiceGridBox}`]: {
    [up("xs")]: {
      margin: "9px 10px",
    },
    [up("sm")]: {
      margin: "10px 11px",
    },
    [up("md")]: {
      margin: "11px 12px",
    },
    [up("lg")]: {
      margin: "14px 13px",
    },
    [up("xl")]: {
      margin: "12px 11px",
    },
    [up("xxl")]: {
      margin: "20px 14px",
    },
  },
  [`& .${classes.InvoiceRecordBox}`]: {
    [up("xs")]: {
      marginBottom: "16px",
    },
    [up("sm")]: {
      marginBottom: "16px",
    },
    [up("md")]: {
      marginBottom: "16px",
    },
    [up("lg")]: {
      marginBottom: "16px",
    },
    [up("xl")]: {
      marginBottom: "16px",
    },
    [up("xxl")]: {
      marginBottom: "25px",
    },
  },
  [`& .${classes.InvoiceRecordTitle}`]: {
    color:theme.palette.color30.semidark,
    [up("xs")]: {
      paddingLeft: "10px",
    },
    [up("sm")]: {
      paddingLeft: "12px",
    },
    [up("md")]: {
      paddingLeft: "12px",
    },
    [up("lg")]: {
      paddingLeft: "16px",
    },
    [up("xl")]: {
      paddingLeft: "20px",
    },
    [up("xxl")]: {
      paddingLeft: "23px",
    },
  },
  [`& .${classes.Validatebtn}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.primary.main,
    color: "white",
    ":hover": {
      background: theme.palette.primary.main,
      color: "white",
    },
    [up("xs")]: {
      width: "210px",
      height: "35px",
    },
    [up("sm")]: {
      width: "256px",
      height: "40px",
    },
    [up("md")]: {
      width: "190px",
      height: "35px",
    },
    [up("lg")]: {
      width: "260px",
      height: "45px",
    },
    [up("xl")]: {
      width: "285px",
      height: "47px",
    },
    [up("xxl")]: {
      width: "376px",
      height: "54px",
    },
  },
  [`& .${classes.trashbtn}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.color134.lighter,
    borderRadius: "5px",
    [up("xs")]: {
      width: "35px",
      height: "35px",
    },
    [up("sm")]: {
      width: "40px",
      height: "40px",
    },
    [up("md")]: {
      width: "35px",
      height: "35px",
    },
    [up("lg")]: {
      width: "45px",
      height: "45px",
    },
    [up("xl")]: {
      width: "47px",
      height: "47px",
    },
    [up("xxl")]: {
      width: "54px",
      height: "54px",
    },
  },
  [`& .${classes.CheckCircleIcon}`]: {
    marginRight: "14px",
  },
  [`& .${classes.GridContainer}`]: {
    borderRadius: "5px",
    [up("xs")]: {
      padding: "4px",
    },
    [up("sm")]: {
      padding: "5px",
    },
    [up("md")]: {
      padding: "4px",
    },
    [up("lg")]: {
      padding: "5px",
    },
    [up("xl")]: {
      padding: "6px",
    },
    [up("xxl")]: {
      padding: "8px",
    },
  },
  [`& .${classes.CheckedFieldIcon}`]: {
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
  [`& .${classes.FiberManualRecordIcon}`]: {
    [up("xs")]: {
      width: "7px",
      height: "7px",
    },
    [up("sm")]: {
      width: "8px",
      height: "8px",
    },
    [up("md")]: {
      width: "7px",
      height: "7px",
    },
    [up("lg")]: {
      width: "8px",
      height: "8px",
    },
    [up("xl")]: {
      width: "9px",
      height: "9px",
    },
    [up("xxl")]: {
      width: "10px",
      height: "10px",
    },
  },
  [`& .${classes.contentEditableField}`]: {
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
  [`& .${classes.TypographyField}`]: {
    cursor: "pointer",
  },
  [`& .${classes.GridAlign}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  [`& .${classes.CheckCloseIcon}`]: {
    cursor: "pointer",
    [up("xs")]: {
      width: "15px",
      height: "15px",
    },
    [up("sm")]: {
      width: "17px",
      height: "17px",
    },
    [up("md")]: {
      width: "14px",
      height: "14px",
    },
    [up("lg")]: {
      width: "17px",
      height: "17px",
    },
    [up("xl")]: {
      width: "19px",
      height: "19px",
    },
    [up("xxl")]: {
      width: "22px",
      height: "22px",
    },
  },
}));
