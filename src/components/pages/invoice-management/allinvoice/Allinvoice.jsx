import React, { useCallback, useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { columnData } from "./Columndef";
import { rowdata } from "./rowdata";
import "./Allinvoice.css";
import { Box } from "@mui/material";
// import Navinvoice from "./NavInvoice";

function Allinvoice() {
  const [gridApi, setGridApi] = useState(null);
  const [columnDefsResponsive, setColumnDefsResponsive] = useState([]);
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

  return (
    <>
      {/* <Navinvoice /> */}
      <Box sx={{mt:3}}>
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
          columnDefs={columnData}
          rowData={rowData}
          defaultColDef={defaultColDef}
          gridOptions={gridOptions}
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
      </Box>
    </>
  );
}

export default Allinvoice;