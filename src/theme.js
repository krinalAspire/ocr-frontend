import { createTheme } from "@mui/material";

const breakpoints = {
  values: {
    xs: 0, // Extra small devices (portrait phones)
    sm: 600, // Small devices (landscape phones)
    md: 900, // Medium devices (tablets)
    lg: 1200, // Large devices (desktops)
    xl: 1440, // Extra large devices (large desktops)
    xxl: 1700,
  },
};

const lightPalette = {
  type: "light",
  primary: {
    main: "rgba(159, 119, 235, 1)",
    superdark: "rgba(159, 119, 235, 0.8)",
    dark: "rgba(159, 119, 235, 0.10)",
    medium: "",
    superlight: "",
    light: "rgba(159, 119, 235, 0.2)",
  },
  secondaryBlack: {
    main: "rgba(0, 0, 0, 1)",
    superdark: "rgba(0, 0, 0, 0.60)",
    dark: "",
    medium: "",
    superlight: "",
    light:"rgba(0, 0, 0, 0.2)"
  },
  secondaryWhite: {
    main: "rgba(255, 255, 255, 1)",
    superdark: "",
    dark: "",
    medium: "",
    superlight: "",
    light: "rgba(255, 255, 255, 0.2)",
  },
  color30: {
    main: "rgba(30, 30, 30, 1)",
    superdark: "rgba(30, 30, 30, 0.8)",
    dark: "rgba(30, 30, 30, 0.6)",
    medium: "",
    superlight: "rgba(30, 30, 30, 0.40)",
    light: "rgba(30, 30, 30, 0.2)",
  },
  color43: {
    main: "rgba( 43, 43 ,43 ,1)",
    superdark: "rgba(43, 43 ,43, 0.8)",
    dark: "rgba(43, 43 ,43, 0.6)",
    medium: "",
    superlight: "rgba(43, 43 ,43,0.4)",
    light: "rgba(43, 43 ,43, 0.2)",
  },
  color45: {
    main: "rgba( 45, 45 ,45 ,1)",
    superdark: "rgba(45, 45 ,45, 0.8)",
    dark: "rgba(45, 45 ,45, 0.6)",
    medium: "",
    superlight: "",
    light: "rgba(45, 45 ,45, 0.2)",
  },
  color134: {
    main: "rgba(134, 134, 134, 1)",
    superdark: "",
    dark: "rgba(134, 134, 134, 0.6)",
    medium: "rgba(134, 134, 134, 0.40)",
    superlight: "rgba(134, 134, 134, 0.20)",
    light: "rgba(134, 134, 134, 0.1)",
  },
  color247: {
    main: "rgba(247, 247, 247, 1)",
  },
}

export const { up } = createTheme({ breakpoints }).breakpoints;

export const theme = createTheme({
  breakpoints,
  palette:lightPalette,
  typography: {
    body1: {
      fontFamily: "Heebo",
      fontWeight: 500,
      letterSpacing: 0,
      [up("xs")]: {
        fontSize: "10px",
      },
      [up("sm")]: {
        fontSize: "11px",
      },
      [up("md")]: {
        fontSize: "11px",
      },
      [up("lg")]: {
        fontSize: "12px",
      },
      [up("xl")]: {
        fontSize: "14px",
      },
      [up("xxl")]: {
        fontSize: "16px",
      },
    },
    body2: {
      fontFamily: "Heebo",
      fontWeight: 400,
      letterSpacing: 0,
      [up("xs")]: {
        fontSize: "10px",
      },
      [up("sm")]: {
        fontSize: "11px",
      },
      [up("md")]: {
        fontSize: "11px",
      },
      [up("lg")]: {
        fontSize: "12px",
      },
      [up("xl")]: {
        fontSize: "13px",
      },
      [up("xxl")]: {
        fontSize: "14px",
      },
    },
    subtitle1: {
      fontFamily: "Heebo",
      fontWeight: 400,
      letterSpacing: 0,
      [up("xs")]: {
        fontSize: "7px",
      },
      [up("sm")]: {
        fontSize: "7px",
      },
      [up("md")]: {
        fontSize: "9px",
      },
      [up("lg")]: {
        fontSize: "11px",
      },
      [up("xl")]: {
        fontSize: "13px",
      },
      [up("xxl")]: {
        fontSize: "15px",
      },
    },
    h4: {
      fontFamily: "Poppins",
      fontWeight: 600,
      letterSpacing: 0,
      [up("xs")]: {
        fontSize: "15px",
      },
      [up("sm")]: {
        fontSize: "17px",
      },
      [up("md")]: {
        fontSize: "18px",
      },
      [up("lg")]: {
        fontSize: "20px",
      },
      [up("xl")]: {
        fontSize: "22px",
      },
      [up("xxl")]: {
        fontSize: "24px",
      },
    },
    h5: {
      fontFamily: "Heebo",
      fontWeight: 500,
      letterSpacing: 0,
      [up("xs")]: {
        fontSize: "10px",
      },
      [up("sm")]: {
        fontSize: "11px",
      },
      [up("md")]: {
        fontSize: "12px",
      },
      [up("lg")]: {
        fontSize: "14px",
      },
      [up("xl")]: {
        fontSize: "16px",
      },
      [up("xxl")]: {
        fontSize: "18px",
      },
    },
    h6: {
      fontFamily: "Poppins",
      fontWeight: 600,
      letterSpacing: 0,
      [up("xs")]: {
        fontSize: "13px",
      },
      [up("sm")]: {
        fontSize: "15px",
      },
      [up("md")]: {
        fontSize: "16px",
      },
      [up("lg")]: {
        fontSize: "17px",
      },
      [up("xl")]: {
        fontSize: "18px",
      },
      [up("xxl")]: {
        fontSize: "20px",
      },
    },
  },

  components: {
    // MuiBox: {
    //   styleOverrides: {
    //     root: {
    //       scrollableBox: {
    //         background:"yellow",
    //         scrollbarWidth: 'thin',
    //         scrollbarColor: '#888 #f1f1f1',
    //         '&::-webkit-scrollbar': {
    //           width: '8px',
    //         },
    //         '&::-webkit-scrollbar-track': {
    //           background: '#f1f1f1',
    //         },
    //         '&::-webkit-scrollbar-thumb': {
    //           background: '#888',
    //           borderRadius: '4px',
    //         },
    //         '&::-webkit-scrollbar-thumb:hover': {
    //           background: '#555',
    //         },
    //       },
    //     },
    //   },
    // },
    // MuiBox: {
    //     styleOverrides: {
    //       root: {
    //         background:"yellow",
    //         "&::-webkit-scrollbar": {
    //             width: "0.4em",
    //           },
    //           "&::-webkit-scrollbar-track": {
    //             background: "#D9D9D9",
    //             borderRadius: "5px",
    //           },
    //           "&::-webkit-scrollbar-thumb": {
    //             background: "#868686",
    //             borderRadius: "5px",
    //           },
    //       },
    //     },
    //   },
    // MuiFormControl: {
    //   styleOverrides: {
    //     root: {
    //       background:'yellow',
    //       size:'small'
    //     },
    //   },
    // },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#9F77EB",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          border: "1px solid rgba(0, 0, 0, 0.20)",
          // position: "relative",
          // background: 'yellow',
          // width: '150px',
          // width:'13vw'
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
          paper: {
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
            "&::-webkit-scrollbar": {
              width: "0.4em",
            },
            "&::-webkit-scrollbar-track": {
              background: "#D9D9D9",
              borderRadius: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#868686",
              borderRadius: "5px",
            },
          },
        },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "Heebo",
          fontWeight: 500,
          "&:hover": {
            backgroundColor: "rgba(30, 30, 30, 0.3)",
            color: "#FFFFFF",
          },
          "&.Mui-selected": {
            backgroundColor: "#9F77EB",
            color: "#FFFFFF",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#9F77EB",
            color: "#FFFFFF",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Heebo",
          fontWeight: 400,
          letterSpacing: 0,
          display: "flex",
          textAlign: "center",
          [up("xs")]: {
            fontSize: "10px",
          },
          [up("sm")]: {
            fontSize: "11px",
          },
          [up("md")]: {
            fontSize: "12px",
          },
          [up("lg")]: {
            fontSize: "13px",
          },
          [up("xl")]: {
            fontSize: "15px",
          },
          [up("xxl")]: {
            fontSize: "16px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Heebo",
          fontWeight: 500,
          borderRadius: "5px",
          textTransform: "none",
          padding: 0,
          boxShadow: 0,
          letterSpacing: 0,
          [up("xs")]: {
            fontSize: "10px",
          },
          [up("sm")]: {
            fontSize: "11px",
          },
          [up("md")]: {
            fontSize: "11px",
          },
          [up("lg")]: {
            fontSize: "12px",
          },
          [up("xl")]: {
            fontSize: "14px",
          },
          [up("xxl")]: {
            fontSize: "16px",
          },
        },
      },
    },
  },
});
