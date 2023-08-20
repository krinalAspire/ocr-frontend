import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColumnSelection, columnData } from "./Columndef";
import { rowdata } from "./rowdata";
import "./Allinvoice.css";
import { Box } from "@mui/material";
import { classes, Root } from "./utils";
import AddTag from "./AddTag";
// import { lightPalette } from "../../../../theme";
// import FourIcons from "./FourIcons";
// import Navinvoice from "./NavInvoice";

function Allinvoice() {
  // const [rowData, setRowData] = useState([]);
  const [rowData, setRowData] = useState(rowdata);
  const [columnDefs, setColumnDefs] = useState(columnData);
  const [gridApi, setGridApi] = useState(null);
  const [columnApi, setColumnApi] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setColumnApi(params.columnApi);
  };

  const showColumn = (columnName) => {
    columnApi.setColumnVisible(columnName, true);
  };

  const hideColumn = (columnName) => {
    columnApi.setColumnVisible(columnName, false);
  };

  const defaultColDef = {
    flex: 1,
    resizable: true,
  };

  const gridOptions = {
    rowHeight: 50,
    sideBar: true,
  };

  // const [gridApi, setGridApi] = useState(null);
  // const [columnApi, setColumnApi] = useState(null);

  // const onGridReady = (params) => {
  //   setGridApi(params.api);
  //   setColumnApi(params.columnApi);
  // };

  // const showColumn = (columnName) => {
  //   if (columnApi) {
  //     columnApi.setColumnVisible(columnName, true);
  //   }
  // };

  // const hideColumn = (columnName) => {
  //   if (columnApi) {
  //     columnApi.setColumnVisible(columnName, false);
  //   }
  // };

  // const columnDefs = [
  //   { headerName: "Name", field: "name" },
  //   { headerName: "Age", field: "age" },
  //   // Other columns
  // ];

  // const rowData = [
  //   { name: "John", age: 28 },
  //   { name: "Jane", age: 24 },
  //   // Other rows
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
      <Root className={classes.root}>
        {/* <AddTag />s */}
        <Box
          id="ag-grid-container"
          className="ag-theme-alpine"
          sx={{
            height: {
              xxl: "55vh",
              xl: "53vh",
              lg: "60vh",
              md: "47vh",
              sm: "53vh",
              xs: "58vh",
            },
            // position:"relative"
            // overflow:"visible"
          }}
        >
         <button onClick={() => showColumn("documentName")}>Show Document Name Column</button>
      <button onClick={() => hideColumn("documentName")}>Hide Document Name Column</button>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={defaultColDef}
            gridOptions={gridOptions}
            onGridReady={onGridReady}
          />
          {/* <ColumnSelection columnDefs={columnDefs} setColumnDefs={setColumnDefs}/> */}
        </Box>
        {/* <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <button onClick={() => showColumn("age")}>Show Age Column</button>
      <button onClick={() => hideColumn("age")}>Hide Age Column</button>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        onGridReady={onGridReady}
      />
    </div> */}
      </Root>
    </>
  );
}

export default Allinvoice;
