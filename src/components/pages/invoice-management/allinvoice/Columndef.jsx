import React, { useState } from "react";
import EditIcon from "../../../../assets/allinvoice-assets/edit.png";
import ArrowUp from "../../../../assets/allinvoice-assets/arrow-up.svg";
import AlertCircle from "../../../../assets/allinvoice-assets/alert-circle.png";
import Disc from "../../../../assets/allinvoice-assets/disc.png";
import CheckCircle from "../../../../assets/allinvoice-assets/check-circle.png";
import { Box, Typography } from "@mui/material";

function responsiveHeader(params) {
  const value = params.displayName;
  const showArrow = params.displayName === "Status";
  return (
    <>
      <Typography variant="body1" sx={{ color: "#1E1E1E" }}>
        {value}
      </Typography>
      {showArrow ? null : (
        <Box sx={{ pl: 1.5 }}>
          <img src={ArrowUp} alt="arrow-up" />
        </Box>
      )}
    </>
  );
}

const ResponsiveFontsize = (params) => {
  const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);
  const [showIcons, setShowIcons] = useState(false);
  const value = params.value;
  const handleMouseEnter = () => {
    setHoveredRowIndex(params.rowIndex);
    setShowIcons(true);
  };

  const handleMouseLeave = () => {
    setShowIcons(false);
    setHoveredRowIndex(-1);
  };

  return (
    <Typography
      variant="body1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
    <Box
    sx={{display:"flex", alignItems: "center"}}
    //   className="document-name-cell"
    //   style={{
    //     display: "flex",
    //     height: "100%",
    //     width: "100%",
    //     alignItems: "center",
    //   }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Typography
        variant="body1"
        sx={{
          color: "rgba(0, 0, 0, 0.60)",
        }}
      >
        {params.value}
      </Typography>
      {hoveredRowIndex === params.rowIndex && showIcons && (
        <img
          className="edit-icon"
          src={EditIcon}
          alt="Edit"
          onClick={() => {
            // Handle edit functionality here
          }}
        />
      )}
    </Box>
  );
};

const StatusRow = (params) => {
  let statusIcon;
  switch (params.value) {
    case "failed":
      statusIcon = (
        <Box
          sx={{
            // height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent:"center"
          }}
        >
          <img src={AlertCircle} alt="Failed" style={{}} />
        </Box>
      );
      break;
    case "pending":
      statusIcon = (
        <Box
          sx={{
            // height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent:"center"
          }}
        >
          <img src={Disc} alt="Pending" />
        </Box>
      );
      break;
    case "success":
      statusIcon = (
        <Box
          sx={{
            // height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent:"center"
          }}
        >
          <img src={CheckCircle} alt="Success" />
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
  const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);
  const [showIcons, setShowIcons] = useState(false);
  const value = params.value;
  const handleMouseEnter = () => {
    setHoveredRowIndex(params.rowIndex);
    setShowIcons(true);
  };

  const handleMouseLeave = () => {
    setShowIcons(false);
    setHoveredRowIndex(-1);
  };

  return (
    <Typography
      variant="body1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        color: "rgba(0, 0, 0, 0.60)",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {value}
    </Typography>
  );
};

const Icons = (params) => {
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
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* {hoveredRowIndex === params.rowIndex && showIcons && <FourIcons />} */}
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
    headerName: "",
    field: "",
        // sortable: true,
        // filter: true,
    // cellRenderer: ResponsiveFontsize,
    cellRenderer: Icons,
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
    //       onMouseEnter={handleMouseEnter}
    //       onMouseLeave={handleMouseLeave}
    //       style={{
    //         height: "100%",
    //         display: "flex",
    //         alignItems: "center",
    //       }}
    //     >
    //       {/* {hoveredRowIndex === params.rowIndex && showIcons && <FourIcons />} */}
    //     </div>
    //   );
    // },
  },
];