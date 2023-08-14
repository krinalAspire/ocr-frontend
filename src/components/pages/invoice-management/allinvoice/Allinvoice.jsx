import React, { useCallback, useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import EditIcon from "../../../../assets/allinvoice-assets/edit.svg";
import ArrowUp from "../../../../assets/allinvoice-assets/arrow-up.svg";
import AlertCircle from "../../../../assets/allinvoice-assets/alert-circle.svg";
import Disc from "../../../../assets/allinvoice-assets/disc.svg";
import CheckCircle from "../../../../assets/allinvoice-assets/checkCircle.svg";
import { columnData, IconRenderer } from "./Columndef";
import { rowdata } from "./rowdata";
import "./Allinvoice.css";
import { Box, Typography } from "@mui/material";
import { classes, Root } from "./utils";
import { lightPalette } from "../../../../theme";
import FourIcons from "./FourIcons";
// import Navinvoice from "./NavInvoice";

function Allinvoice() {
  // const [gridApi, setGridApi] = useState(null);
  // const [columnDefsResponsive, setColumnDefsResponsive] = useState([]);
  const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);
  const [showIcons, setShowIcons] = useState(false);
  // const [rowData, setRowData] = useState([]);
  const [rowData, setRowData] = useState(rowdata);
  const [columnDefs, setColumnDefs] = useState(columnData);

  const defaultColDef = {
    flex: 1,
    resizable: true,
  };

  const gridOptions = {
    rowHeight: 50,
  };

  function responsiveHeader(params) {
    const value = params.displayName;
    const showArrow = params.displayName === "Status";
    return (
      <>
        <Typography
          variant="body1"
          sx={{ color: "#1E1E1E" }}
          color={lightPalette.color30.main}
        >
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

  // const columnDefs = [
  //   {
  //     headerName: "Document name",
  //     field: "documentName",
  //     checkboxSelection: true,
  //     headerCheckboxSelection: true,
  //     headerComponent: responsiveHeader,
  //     minWidth: 200,
  //     editable: true,
  //     cellRenderer: (params) => {
  //       const handleMouseEnter = () => {
  //         setHoveredRowIndex(params.rowIndex);
  //         setShowIcons(true);
  //       };

  //       const handleMouseLeave = () => {
  //         setShowIcons(false);
  //         setHoveredRowIndex(-1);
  //       };

  //       return (
  //         <Box
  //           // className="document-name-cell"
  //           style={{
  //             display: "flex",
  //             // height: "100%",
  //             // width: "100%",
  //             alignItems: "center",
  //           }}
  //           onMouseEnter={handleMouseEnter}
  //           onMouseLeave={handleMouseLeave}
  //         >
  //           <Typography
  //             variant="body1"
  //             sx={{
  //               color: "rgba(0, 0, 0, 0.60)",
  //             }}
  //           >
  //             {params.value}
  //           </Typography>
  //           {hoveredRowIndex === params.rowIndex && showIcons && (
  //             <Box
  //               component="img"
  //               src={EditIcon}
  //               alt="Edit"
  //               sx={{
  //                 marginLeft: "2vw",
  //                 width: { xxl: 22, xl: 20, lg: 18, md: 16, sm: 14, xs: 12 },
  //                 height: { xxl: 22, xl: 20, lg: 18, md: 16, sm: 14, xs: 12 },
  //               }}
  //             />
  //             // <img
  //             //   // className="edit-icon"
  //             //   src={EditIcon}
  //             //   alt="Edit"
  //             //   sx={{
  //             //     marginLeft:"2vw",
  //             //     width: { xxl: 22, xl: 20, lg: 18, md: 16, sm: 14, xs: 12 },
  //             //     height: { xxl: 22, xl: 20, lg: 18, md: 16, sm: 14, xs: 12 },
  //             //   }}
  //             //   onClick={() => {
  //             //     // Handle edit functionality here
  //             //   }}
  //             // />
  //           )}
  //         </Box>
  //       );
  //     },
  //   },
  //   {
  //     headerName: "Status",
  //     field: "status",
  //     headerComponent: responsiveHeader,
  //     cellRenderer: (params) => {
  //       let statusIcon;
  //       switch (params.value) {
  //         case "failed":
  //           statusIcon = (
  //             <Box
  //               sx={{
  //                 height: "100%",
  //                 display: "flex",
  //                 alignItems: "center",
  //               }}
  //             >
  //               <Box
  //                 component="img"
  //                 src={Disc}
  //                 alt="Failed"
  //                 // className="edit-icon"
  //                 sx={{
  //                   // marginLeft:"2vw",
  //                   width: { xxl: 24, xl: 22, lg: 20, md: 18, sm: 16, xs: 14 },
  //                   height: { xxl: 24, xl: 22, lg: 20, md: 18, sm: 16, xs: 14 },
  //                 }}
  //               />
  //               {/* <img src={Disc} alt="Failed" style={{}} /> */}
  //             </Box>
  //           );
  //           break;
  //         case "pending":
  //           statusIcon = (
  //             <Box
  //               sx={{
  //                 // height: "100%",
  //                 display: "flex",
  //                 alignItems: "center",
  //               }}
  //             >
  //               <Box
  //                 component="img"
  //                 src={AlertCircle}
  //                 alt="Pending"
  //                 // className="edit-icon"
  //                 sx={{
  //                   // marginLeft:"2vw",
  //                   width: { xxl: 24, xl: 22, lg: 20, md: 18, sm: 16, xs: 14 },
  //                   height: { xxl: 24, xl: 22, lg: 20, md: 18, sm: 16, xs: 14 },
  //                 }}
  //               />
  //               {/* <img src={AlertCircle} alt="Pending" /> */}
  //             </Box>
  //           );
  //           break;
  //         case "success":
  //           statusIcon = (
  //             <Box
  //               sx={{
  //                 height: "100%",
  //                 display: "flex",
  //                 alignItems: "center",
  //               }}
  //             >
  //                <Box
  //                 component="img"
  //                 src={CheckCircle}
  //                 alt="Success"
  //                 // className="edit-icon"
  //                 sx={{
  //                   // marginLeft:"2vw",
  //                   width: { xxl: 24, xl: 22, lg: 20, md: 18, sm: 16, xs: 14 },
  //                   height: { xxl: 24, xl: 22, lg: 20, md: 18, sm: 16, xs: 14 },
  //                 }}
  //               />
  //               {/* <img src={CheckCircle} alt="Success" /> */}
  //             </Box>
  //           );
  //           break;
  //         default:
  //           statusIcon = params.value;
  //           break;
  //       }
  //       return statusIcon;
  //     },
  //   },
  //   {
  //     headerName: "Uploaded",
  //     field: "uploaded",
  //     headerComponent: responsiveHeader,
  //     cellRenderer: ResponsiveFontsize,
  //   },
  //   {
  //     headerName: "Validated",
  //     field: "validated",
  //     headerComponent: responsiveHeader,
  //     cellRenderer: ResponsiveFontsize,
  //   },
  //   {
  //     headerName: "Exported",
  //     field: "exported",
  //     headerComponent: responsiveHeader,
  //     cellRenderer: ResponsiveFontsize,
  //   },
  //   {
  //     headerName: "Tags",
  //     field: "tags",
  //     headerComponent: responsiveHeader,
  //     cellRenderer: (params) => {
  //       const value = params.value;
  //       const handleMouseEnter = () => {
  //         setHoveredRowIndex(params.rowIndex);
  //         setShowIcons(true);
  //       };

  //       const handleMouseLeave = () => {
  //         setShowIcons(false);
  //         setHoveredRowIndex(-1);
  //       };

  //       return (
  //         <Typography
  //           variant="body1"
  //           onMouseEnter={handleMouseEnter}
  //           onMouseLeave={handleMouseLeave}
  //           sx={{
  //             color: "rgba(0, 0, 0, 0.60)",
  //             // height: "100%",
  //             // width: "100%",
  //             display: "flex",
  //             alignItems: "center",
  //           }}
  //         >
  //           {value}
  //         </Typography>
  //       );
  //     },
  //   },
  //   {
  //     headerName: "",
  //     field: "",
  //     minWidth:150,
  //     cellRenderer:IconRenderer
  //     // cellRenderer: (params) => {
  //     //   const handleMouseEnter = () => {
  //     //     setHoveredRowIndex(params.rowIndex);
  //     //     setShowIcons(true);
  //     //   };

  //     //   const handleMouseLeave = () => {
  //     //     setShowIcons(false);
  //     //     setHoveredRowIndex(-1);
  //     //   };
  //     //   return (
  //     //     <div
  //     //       onMouseEnter={handleMouseEnter}
  //     //       onMouseLeave={handleMouseLeave}
  //     //       style={{
  //     //         // height: "100%",
  //     //         display: "flex",
  //     //         alignItems: "center",
  //     //       }}
  //     //     >
  //     //       {hoveredRowIndex === params.rowIndex && showIcons && (
  //     //         // <img src={AlertCircle} alt="jdg" />
  //     //         <FourIcons />
  //     //       )}
  //     //     </div>
  //       // );
  //     // },
  //   },
  // ];

  // useEffect(() => {
  //     const resizeListener = () => {
  //       if (gridApi) {
  //         const containerWidth =
  //           document.getElementById("ag-grid-container").offsetWidth;

  //         const desiredColumnWidth = Math.min(200, containerWidth / 7);

  //         const updatedColumnDefs = columnDefsResponsive.map((colDef) => ({
  //           ...colDef,
  //           width: desiredColumnWidth,
  //         }));
  //         setColumnDefsResponsive(updatedColumnDefs);

  //         gridApi.sizeColumnsToFit();
  //       }
  //     };

  //     window.addEventListener("resize", resizeListener);

  //     return () => {
  //       window.removeEventListener("resize", resizeListener);
  //     };
  //   }, [gridApi, columnDefsResponsive]);

  //   const onGridReady = useCallback((params) => {
  //     setGridApi(params.api);
  //     // Initially set the columnDefs with the default column width
  //     const initialColumnDefs = columnDefs.map((colDef) => ({
  //       ...colDef,
  //       width: 200,
  //     }));
  //     setColumnDefsResponsive(initialColumnDefs);
  //     params.api.sizeColumnsToFit();
  //     // fetch("http://localhost:3001/rowData")
  //     //   .then((resp) => resp.json())
  //     //   .then((data) => {
  //     //     const dataSource = {
  //     //       rowCount: undefined,
  //     //       getRows: (params) => {
  //     //         console.log(
  //     //           "asking for " + params.startRow + " to " + params.endRow
  //     //         );
  //     //         setTimeout(function () {
  //     //           const rowsThisPage = data.slice(params.startRow, params.endRow);
  //     //           let lastRow = -1;
  //     //           if (data.length <= params.endRow) {
  //     //             lastRow = data.length;
  //     //           }
  //     //           params.successCallback(rowsThisPage, lastRow);
  //     //         }, 500);
  //     //       },
  //     //     };
  //     //     params.api.setDatasource(dataSource);
  //     //   });
  //   }, []);

  // const frameworkComponents = {
  //   iconRenderer: IconRenderer,
  // };

  return (
    <>
      {/* <Navinvoice /> */}
      <Root className={classes.root}>
        <Box
          id="ag-grid-container"
          className="ag-theme-alpine"
          sx={{
            //   height: "50vh",
            height: {
              xxl: "55vh",
              xl: "53vh",
              lg: "41.5vh",
              md: "47vh",
              sm: "53vh",
              xs: "58vh",
            },
            //   width: "76vw",
            //   margin: "2vh 2vh 0vh 2vh",
            //   overflowY: "auto",
          }}
        >
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={defaultColDef}
            gridOptions={gridOptions}
            // frameworkComponents={frameworkComponents}
            // domLayout="autoHeight"
            // rowBuffer={0}
            // rowSelection={"multiple"}
            // rowModelType={"infinite"}
            // cacheBlockSize={5}
            // cacheOverflowSize={2}
            // maxConcurrentDatasourceRequests={1}
            // infiniteInitialRowCount={6}
            // maxBlocksInCache={6}
            // onGridReady={onGridReady}
          />
        </Box>
      </Root>
    </>
  );
}

export default Allinvoice;
