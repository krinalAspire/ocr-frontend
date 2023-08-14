import React, { useState } from "react";
import EditIcon from "../../../../assets/allinvoice-assets/edit.svg";
import ArrowUp from "../../../../assets/allinvoice-assets/arrow-up.svg";
import AlertCircle from "../../../../assets/allinvoice-assets/alert-circle.svg";
import Disc from "../../../../assets/allinvoice-assets/disc.svg";
import CheckCircle from "../../../../assets/allinvoice-assets/checkCircle.svg";
import { Box, Grid, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FourIcons from "./FourIcons";
import { lightPalette } from "../../../../theme";

const iconSize = {
  xxl: 24,
  xl: 22,
  lg: 20,
  md: 18,
  sm: 16,
  xs: 14,
};

export const IconRenderer = (props) => (
  <Box className="my-icon">
    {/* <i className="fa fa-trash"></i> */}
    <FourIcons />
  </Box>
);

function responsiveHeader(params) {
  const value = params.displayName;
  const showArrow =
    params.displayName === "Status" || params.displayName === " ";
  const Action = params.displayName === " ";
  return (
    <>
      {/* { Action ? <EditIcon /> :  <Typography variant="body1" sx={{ color: "#1E1E1E" }}>
        {value}
      </Typography>
      {showArrow ? null : (
        <Box sx={{ pl: 1.5 }}>
          <img src={ArrowUp} alt="arrow-up" />
        </Box>
      )}} */}
      {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {Action ? (
        <Box>
          <img src={ArrowUp} alt="arrow-up" />
        </Box>
      ) : (
        <Typography variant="body1" sx={{ color: '#1E1E1E' }}>
          {value}
        </Typography>
      )}
      {showArrow ? null : (
        <Box sx={{ pl: 1.5 }}>
          <img src={ArrowUp} alt="arrow-up" />
        </Box>
      )}
    </div> */}
      <Typography variant="body1" sx={{ color: "#1E1E1E" }}>
        {value}
      </Typography>
      {showArrow ? null : (
        <Box sx={{ pl: 1.5 }}>
          <img src={ArrowUp} alt="arrow-up" />
        </Box>
      )}
      {Action ? (
        <Grid>
          <MoreVertIcon
            sx={{
              color: lightPalette.color134.main,
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
        </Grid>
      ) : null}
    </>
  );
}

const ResponsiveFontsize = (params) => {
  // const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);
  // const [showIcons, setShowIcons] = useState(false);
  const value = params.value;
  // const handleMouseEnter = () => {
  //   setHoveredRowIndex(params.rowIndex);
  //   setShowIcons(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowIcons(false);
  //   setHoveredRowIndex(-1);
  // };

  return (
    <Typography
      variant="body1"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      //   sx={{
      //     color: "rgba(0, 0, 0, 0.60)",
      //     height: "100%",
      //     width: "100%",
      //     display: "flex",
      //     alignItems: "center",
      //   }}
    >
      {value}
    </Typography>
  );
};

const DocumentNameRow = (params) => {
  // const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);
  // const [showIcons, setShowIcons] = useState(false);
  // const handleMouseEnter = () => {
  //   setHoveredRowIndex(params.rowIndex);
  //   setShowIcons(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowIcons(false);
  //   setHoveredRowIndex(-1);
  // };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center" }}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <Typography
        variant="body1"
        sx={{
          color: "rgba(0, 0, 0, 0.60)",
        }}
      >
        {params.value}
      </Typography>
      <Box
        component="img"
        src={EditIcon}
        alt="Edit"
        className="my-icon"
        sx={{
          marginLeft: "2vw",
          width: { xxl: 22, xl: 20, lg: 18, md: 16, sm: 14, xs: 12 },
          height: { xxl: 22, xl: 20, lg: 18, md: 16, sm: 14, xs: 12 },
        }}
      />
    </Box>
  );
};

const StatusRow = (params) => {
  let statusIcon;
  switch (params.value) {
    case "failed":
      statusIcon = (
        <Grid
          sx={{
            // height: "100%",
            // width:"100%",
            // background:"yellow",
            display: "flex",
            alignItems: "center",
            // justifyContent:"center"
          }}
        >
          <Box
            component="img"
            src={AlertCircle}
            alt="Failed"
            // className="edit-icon"
            sx={{
              // marginLeft:"2vw",
              width: iconSize,
              height: iconSize,
            }}
          />
          {/* <img src={AlertCircle} alt="Failed" style={{}} /> */}
        </Grid>
      );
      break;
    case "pending":
      statusIcon = (
        <Box
          sx={{
            // height: "100%",
            // width:"100%",
            display: "flex",
            alignItems: "center",
            // justifyContent:"center"
          }}
        >
          <Box
            component="img"
            src={Disc}
            alt="Pending"
            // className="edit-icon"
            sx={{
              // marginLeft:"2vw",
              width: iconSize,
              height: iconSize,
            }}
          />
          {/* <img src={Disc} alt="Pending" /> */}
        </Box>
      );
      break;
    case "success":
      statusIcon = (
        <Box
          sx={{
            // height: "100%",
            // width:"100%",
            display: "flex",
            alignItems: "center",
            // justifyContent:"center"
          }}
        >
          <Box
            component="img"
            src={CheckCircle}
            alt="Success"
            // className="edit-icon"
            sx={{
              // marginLeft:"2vw",
              width: iconSize,
              height: iconSize,
            }}
          />
          {/* <img src={CheckCircle} alt="Success" /> */}
        </Box>
      );
      break;
    default:
      statusIcon = params.value;
      break;
  }
  return statusIcon;
};

const TagRow = (params) => {
  // const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);
  // const [showIcons, setShowIcons] = useState(false);
  const value = params.value;
  // const handleMouseEnter = () => {
  //   setHoveredRowIndex(params.rowIndex);
  //   setShowIcons(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowIcons(false);
  //   setHoveredRowIndex(-1);
  // };

  return (
    <Typography
      variant="body1"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      sx={{
        color: "rgba(0, 0, 0, 0.60)",
        // height: "100%",
        // width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {value}
    </Typography>
  );
};

const HoverIcons = (params) => {
  // const value=params.value;
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };
  const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);
  const [showIcons, setShowIcons] = useState(false);
  const handleMouseEnter = () => {
    setHoveredRowIndex(params.rowIndex);
    setShowIcons(true);
  };

  const handleMouseLeave = () => {
    setShowIcons(false);
    setHoveredRowIndex(-1);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        // height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* {value} */}
      {/* {isHovered && <i className="material-icons">star</i>} */}
      {hoveredRowIndex === params.rowIndex && showIcons && (
        <img src={AlertCircle} alt="sccg" />
      )}
    </div>
  );
};

export const columnData = [
  //   {
  //     headerCheckboxSelection: true,
  //     checkboxSelection: true,
  //     width: 10,
  //   },
  {
    headerName: "Document name",
    field: "documentName",
    // sortable: true,
    headerComponent: responsiveHeader,
    minWidth: 200,
    headerCheckboxSelection: true,
    checkboxSelection: true,
    // filter: true,
    editable: true,
    // cellRenderer: ResponsiveFontsize,
    cellRenderer: DocumentNameRow,
    // cellRenderer: (params) => {
    //   const handleMouseEnter = () => {
    //     setHoveredRowIndex(params.rowIndex);
    //     setShowIcons(true);
    //   };

    //   const handleMouseLeave = () => {
    //     setShowIcons(false);
    //     setHoveredRowIndex(-1);
    //   };

    //   return (
    //     <div
    //       className="document-name-cell"
    //       style={{
    //         display: "flex",
    //         height: "100%",
    //         width: "100%",
    //         alignItems: "center",
    //       }}
    //       onMouseEnter={handleMouseEnter}
    //       onMouseLeave={handleMouseLeave}
    //     >
    //       <Typography
    //         variant="body1"
    //         sx={{
    //           color: "rgba(0, 0, 0, 0.60)",
    //         }}
    //       >
    //         {params.value}
    //       </Typography>
    //       {hoveredRowIndex === params.rowIndex && showIcons && (
    //         <img
    //           className="edit-icon"
    //           src={EditIcon}
    //           alt="Edit"
    //           onClick={() => {
    //             // Handle edit functionality here
    //           }}
    //         />
    //       )}
    //     </div>
    //   );
    // },
  },
  {
    headerName: "Status",
    field: "status",
    // sortable: true,
    // filter: true,
    headerComponent: responsiveHeader,
    // cellRenderer: ResponsiveFontsize,
    cellRenderer: StatusRow,
    // cellRenderer: (params) => {
    //   let statusIcon;
    //   switch (params.value) {
    //     case "failed":
    //       statusIcon = (
    //         <Box
    //           sx={{
    //             height: "100%",
    //             display: "flex",
    //             alignItems: "center",
    //           }}
    //         >
    //           <img src={AlertCircle} alt="Failed" style={{}} />
    //         </Box>
    //       );
    //       break;
    //     case "pending":
    //       statusIcon = (
    //         <Box
    //           sx={{
    //             height: "100%",
    //             display: "flex",
    //             alignItems: "center",
    //           }}
    //         >
    //           <img src={Disc} alt="Pending" />
    //         </Box>
    //       );
    //       break;
    //     case "success":
    //       statusIcon = (
    //         <Box
    //           sx={{
    //             height: "100%",
    //             display: "flex",
    //             alignItems: "center",
    //           }}
    //         >
    //           <img src={CheckCircle} alt="Success" />
    //         </Box>
    //       );
    //       break;
    //     default:
    //       statusIcon = params.value;
    //       break;
    //   }
    //   return statusIcon;
    // },
  },
  {
    headerName: "Uploaded",
    field: "uploaded",
    // sortable: true,
    // filter: true,
    headerComponent: responsiveHeader,
    cellRenderer: ResponsiveFontsize,
  },
  {
    headerName: "Validated",
    field: "validated",
    // sortable: true,
    // filter: true,
    headerComponent: responsiveHeader,
    cellRenderer: ResponsiveFontsize,
  },
  {
    headerName: "Exported",
    field: "exported",
    // sortable: true,
    // filter: true,
    headerComponent: responsiveHeader,
    cellRenderer: ResponsiveFontsize,
  },
  {
    headerName: "Tags",
    field: "tags",
    // sortable: true,
    // filter: true,
    headerComponent: responsiveHeader,
    // cellRenderer: ResponsiveFontsize,
    cellRenderer: TagRow,
    // cellRenderer: (params) => {
    //   const value = params.value;
    //   const handleMouseEnter = () => {
    //     setHoveredRowIndex(params.rowIndex);
    //     setShowIcons(true);
    //   };

    //   const handleMouseLeave = () => {
    //     setShowIcons(false);
    //     setHoveredRowIndex(-1);
    //   };

    //   return (
    //     <Typography
    //       variant="body1"
    //       onMouseEnter={handleMouseEnter}
    //       onMouseLeave={handleMouseLeave}
    //       sx={{
    //         color: "rgba(0, 0, 0, 0.60)",
    //         height: "100%",
    //         width: "100%",
    //         display: "flex",
    //         alignItems: "center",
    //       }}
    //     >
    //       {value}
    //     </Typography>
    //   );
    // },
  },
  {
    headerName: " ",
    field: " ",
    minWidth: 150,
    headerComponent: responsiveHeader,
    // sortable: true,
    // filter: true,
    // cellRenderer: ResponsiveFontsize,
    // cellRendererFramework: HoverIcons,
    cellRenderer: IconRenderer,
    // cellRenderer: HoverIcons,
    //   cellRenderer: (params) => {
    //     const handleMouseEnter = () => {
    //       setHoveredRowIndex(params.rowIndex);
    //       setShowIcons(true);
    //     };

    //     const handleMouseLeave = () => {
    //       setShowIcons(false);
    //       setHoveredRowIndex(-1);
    //     };
    //     return (
    //       <div
    //         onMouseEnter={handleMouseEnter}
    //         onMouseLeave={handleMouseLeave}
    //         style={{
    //           height: "100%",
    //           display: "flex",
    //           alignItems: "center",
    //         }}
    //       >
    //         {hoveredRowIndex === params.rowIndex && showIcons && <AlertCircle />}
    //       </div>
    //     );
    //   },
  },
];
