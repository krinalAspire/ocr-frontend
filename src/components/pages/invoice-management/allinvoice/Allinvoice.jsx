import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { columnData } from "./Columndef";
import { rowdata } from "./rowdata";
import "./Allinvoice.css";
import {
  Box,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography,
} from "@mui/material";
import { classes, Root } from "./utils";
import AddTag from "./AddTag";
import { lightPalette } from "../../../../theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckCircle from "../../../../assets/allinvoice-assets/check-circle.svg";
import trash from "../../../../assets/allinvoice-assets/trash-2.svg";
import upload from "../../../../assets/allinvoice-assets/upload.svg";
import tag from "../../../../assets/allinvoice-assets/tag.svg";
// import { lightPalette } from "../../../../theme";
// import FourIcons from "./FourIcons";
// import Navinvoice from "./NavInvoice";

function Allinvoice() {
  // const [rowData, setRowData] = useState([]);
  const [rowData, setRowData] = useState(rowdata);
  const [columnDefs, setColumnDefs] = useState(columnData);
  const [gridApi, setGridApi] = useState(null);
  const [columnApi, setColumnApi] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  // const [selectedColumns, setSelectedColumns] = useState({});
  const [selectedColumns, setSelectedColumns] = useState(
    columnDefs.reduce((obj, column) => {
      obj[column.field] = true;
      return obj;
    }, {})
  );

  function ColumnSelection() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
      <>
        <Box>
          <Box className={classes.HeaderMoreVertIcon}>
            <MoreVertIcon
              sx={{
                color: lightPalette.color134.main,
              }}
              onClick={handleClick}
            />
          </Box>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <List
              sx={{
                width: {
                  xxl: "10vw",
                  xl: "12vw",
                  lg: "11vw",
                  md: "12vw",
                  sm: "11.5vh",
                  xs: "13vw",
                },
              }}
            >
              {columnDefs.map((column) =>
                column.field !== " " ? (
                  <ListItem key={column.field} disablePadding>
                    <Checkbox
                      checked={selectedColumns[column.field] || false}
                      onChange={(e) =>
                        handleCheckboxChange(column.field, e.target.checked)
                      }
                    />
                    <ListItemText primary={column.headerName} />
                  </ListItem>
                ) : null
              )}
            </List>
          </Popover>
        </Box>
      </>
    );
  }

  const handleCheckboxChange = (columnName, isChecked) => {
    setSelectedColumns((prevSelectedColumns) => ({
      ...prevSelectedColumns,
      [columnName]: isChecked,
    }));
    console.log("selectedColumns", selectedColumns);

    if (columnApi) {
      columnApi.setColumnVisible(columnName, isChecked);
      // console.log("column",columnApi.setColumnVisible(columnName, isChecked));
      console.log(`Column '${columnName}' visibility set to ${isChecked}`);
    }
  };

  function onSelectionChanged() {
    const selectedNodes = gridOptions.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    setSelectedRows(selectedData);
  }

  function handleButtonClick() {
    // Perform your action on the selected rows
    console.log("Selected Rows:", selectedRows);
  }

  // const handleSelectionChanged = (event) => {
  //   setSelectedRows(event.api.getSelectedRows());
  //   console.log(selectedRows);
  // };

  const onGridReady = (params) => {
    setGridApi(params.api);
    setColumnApi(params.columnApi);
  };

  const defaultColDef = {
    flex: 1,
    resizable: true,
  };

  const gridOptions = {
    rowHeight: 50,
    onSelectionChanged: onSelectionChanged,
    // rowSelection: 'multiple',
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
      <Root className={classes.root}>
        <AddTag />
        {selectedRows.length > 0 && (
            <Box
              // className="selected-row-button-container"
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Box sx={{ margin:"8px 15px", p:1, display:"flex", bgcolor: 'background.paper',boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.5)", zIndex:1000, position:"absolute"}}>
                {/* <Box > */}
                <Typography sx={{marginRight:"1vw"}}>{selectedRows.length} row selected</Typography>
                {/* <Box component="img" src={tag} alt="tag" className={classes.actionIcons} /> */}
                <AddTag />
                <Box component="img" src={CheckCircle} alt="tag" className={classes.actionIcons} />
                <Box component="img" src={upload} alt="tag" className={classes.actionIcons} />
                <Box component="img" src={trash} alt="tag" className={classes.actionIcons} />
              </Box>
            </Box>
          )}
        <Box
          id="ag-grid-container"
          className="ag-theme-alpine"
          sx={{
            height: {
              xxl: "68vh",
              xl: "65vh",
              // lg: "65vh",
              lg: "58vh",
              md: "67vh",
              sm: "75vh",
              xs: "75vh",
            },
            // position: "relative",
            // zIndex: 1000,
            // overflow:"visible"
          }}
        >
          <Box className={classes.ColumnSelectionBox}>
            <ColumnSelection />
          </Box>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={defaultColDef}
            gridOptions={gridOptions}
            onGridReady={onGridReady}
          />
        </Box>
      </Root>
    </>
  );
}

export default Allinvoice;
