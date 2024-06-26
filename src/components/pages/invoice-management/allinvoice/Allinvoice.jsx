import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { columnData } from "./Columndef";
import { rowdata } from "./rowdata";
import "./Allinvoice.css";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Popover,
  TextField,
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
import axios from "axios";
// import { lightPalette } from "../../../../theme";
// import FourIcons from "./FourIcons";
// import Navinvoice from "./NavInvoice";

function Allinvoice() {
  // const [rowData, setRowData] = useState([]);
  // const [rowData, setRowData] = useState(rowdata);
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState(columnData);
  const [gridApi, setGridApi] = useState(null);
  const [columnApi, setColumnApi] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [dropDownField, setDropDownField] = useState({});
  // const [selectedColumns, setSelectedColumns] = useState({});
  const [selectedColumns, setSelectedColumns] = useState(
    columnDefs.reduce((obj, column) => {
      obj[column.field] = true;
      return obj;
    }, {})
  );

  useEffect(() => {
    axios
      .get("http://localhost:5000/allinvoicedata")
      .then((response) => {
        setRowData(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // function ColumnSelection() {
  //   const [anchorEl, setAnchorEl] = useState(null);

  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  //   const handleClose = () => {
  //     console.log("handleclose of popover");
  //     setAnchorEl(null);
  //   };

  //   const open = Boolean(anchorEl);
  //   const id = open ? "simple-popover" : undefined;
  //   return (
  //     <>
  //       <Box>
  //         <Box className={classes.HeaderMoreVertIcon}>
  //           <MoreVertIcon
  //             sx={{
  //               color: lightPalette.color134.main,
  //             }}
  //             onClick={handleClick}
  //           />
  //         </Box>
  //         <Popover
  //           id={id}
  //           open={open}
  //           anchorEl={anchorEl}
  //           onClose={handleClose}
  //           anchorOrigin={{
  //             vertical: "bottom",
  //             horizontal: "right",
  //           }}
  //           transformOrigin={{
  //             vertical: "top",
  //             horizontal: "right",
  //           }}
  //         >
  //           <List
  //             sx={{
  //               width: {
  //                 xxl: "10vw",
  //                 xl: "12vw",
  //                 lg: "11vw",
  //                 md: "12vw",
  //                 sm: "11.5vh",
  //                 xs: "13vw",
  //               },
  //             }}
  //           >
  //             {columnDefs.map((column) =>
  //               column.field !== " " ? (
  //                 <ListItem key={column.field} disablePadding>
  //                   <Checkbox
  //                     checked={selectedColumns[column.field] || false}
  //                     onChange={(e) =>
  //                       handleCheckboxChange(column.field, e.target.checked)
  //                     }
  //                   />
  //                   <ListItemText primary={column.headerName} />
  //                 </ListItem>
  //               ) : null
  //             )}
  //           </List>
  //         </Popover>
  //       </Box>
  //     </>
  //   );
  // }

  function ColumnSelection() {
    const [anchorEl, setAnchorEl] = useState(null);
    const initialSelectedColumns = Object.fromEntries(
      columnDefs
        .filter((column) => column.field !== " ")
        .map((column) => [column.field, true]) // Set all columns to initially checked
    );
    const [selectedColumns, setSelectedColumns] = useState(
      initialSelectedColumns
    );
    // const [selectedColumns, setSelectedColumns] = useState({});
    // const columnDefs = [/* Your column definitions here */];

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleCheckboxChange = (columnName, isChecked) => {
      setSelectedColumns((prevSelectedColumns) => ({
        ...prevSelectedColumns,
        [columnName]: isChecked,
      }));
      console.log("selectedColumns", selectedColumns);

      if (columnApi) {
        columnApi.setColumnVisible(columnName, isChecked);
        // gridApi.refreshHeader();
        // console.log("column",columnApi.setColumnVisible(columnName, isChecked));
        console.log(`Column '${columnName}' visibility set to ${isChecked}`);
      }
    };

    return (
      <Box>
        <MoreVertIcon onClick={handleClick} />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {/* {columnDefs.map((column) =>
            column.field !== " " ? (
              <MenuItem key={column.field}>
              <Checkbox
              checked={selectedColumns[column.field] || false}
              onChange={(e) =>
                handleCheckboxChange(column.field, e.target.checked)
              }
                />
                <ListItemText primary={column.headerName} />
                </MenuItem>
                ) : null
              )} */}
          {columnDefs.map((column) =>
            column.field !== " " ? (
              <MenuItem
                key={column.field}
                sx={
                  {
                    // display: "grid", // Use CSS Grid to align items in one line
                    // gridTemplateColumns: "auto 1fr", // Create two columns
                    // alignItems: "center",
                    // padding: "6px 16px", // Adjust the padding values as needed
                    // padding: "2px 16px 2px 6px",
                  }
                }
              >
                {/* <label>
                  <Checkbox
                    checked={selectedColumns[column.field] || false}
                    onChange={(e) =>
                      handleCheckboxChange(column.field, e.target.checked)
                    }
                    />
                    <ListItemText primary={column.headerName} />
                    </label>
                  </MenuItem> */}

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedColumns[column.field] || false}
                      onChange={(e) =>
                        handleCheckboxChange(column.field, e.target.checked)
                      }
                    />
                  }
                  // label={<ListItemText primary={column.headerName} />}
                  label={
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          {column.headerName}
                        </Typography>
                      }
                    />
                  }
                />
              </MenuItem>
            ) : null
          )}
        </Menu>

        {/* {columnDefs.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
          {option}
          </MenuItem>
        ))} */}
      </Box>
    );
  }

  //    const ColumnSelection = () => {
  //   const [anchorEl, setAnchorEl] = useState(null);
  //   const [selectedColumns, setSelectedColumns] = useState({});

  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };

  //   // const handleCheckboxChange = (columnField, isChecked) => {
  //   //   setSelectedColumns((prevSelectedColumns) => ({
  //   //     ...prevSelectedColumns,
  //   //     [columnField]: isChecked,
  //   //   }));

  //   //   console.log("selectedColumns", selectedColumns);

  //   //   if (columnApi) {
  //   //     columnApi.setColumnVisible(columnField, isChecked);
  //   //     // console.log("column",columnApi.setColumnVisible(columnName, isChecked));
  //   //     console.log(`Column '${columnField}' visibility set to ${isChecked}`);
  //   //   }
  //   // };

  //   const open = Boolean(anchorEl);
  //   const id = open ? 'simple-popover' : undefined;

  //   useEffect(() => {
  //     const initialSelected = {};
  //     columnData.forEach((column) => {
  //       // Check if the column is initially visible, and set its checkbox accordingly
  //       initialSelected[column.field] = true; // You can adjust this condition
  //     });
  //     setSelectedColumns(initialSelected);
  //   }, []);

  //   // const columnData = [
  //   //   { field: 'column1', headerName: 'Column 1' },
  //   //   { field: 'column2', headerName: 'Column 2' },
  //   //   { field: 'column3', headerName: 'Column 3' },
  //   //   // Add your column data here
  //   // ];

  //   return (
  //     <>
  //       <Box>
  //         <Box>
  //           <MoreVertIcon
  //             // sx={{
  //             //   color: 'blue',
  //             // }}
  //             onClick={handleClick}
  //           />
  //         </Box>
  //         <Popover
  //           id={id}
  //           open={open}
  //           anchorEl={anchorEl}
  //           onClose={handleClose}
  //           anchorOrigin={{
  //             vertical: 'bottom',
  //             horizontal: 'right',
  //           }}
  //           transformOrigin={{
  //             vertical: 'top',
  //             horizontal: 'right',
  //           }}
  //         >
  //           <List>
  //             {columnData.map((column) => (
  //               <ListItem key={column.field} disablePadding>
  //                 <Checkbox
  //                   checked={selectedColumns[column.field] || false}
  //                   onChange={(e) =>
  //                     handleCheckboxChange(column.field, e.target.checked)
  //                   }
  //                 />
  //                 <ListItemText primary={column.headerName} />
  //               </ListItem>
  //             ))}
  //           </List>
  //         </Popover>
  //       </Box>
  //     </>
  //   );
  // };

  // const handleCheckboxChange = (columnName, isChecked) => {
  //   console.log("handlecheckbox called");
  //   setSelectedColumns((prevSelectedColumns) => ({
  //     ...prevSelectedColumns,
  //     [columnName]: isChecked,
  //   }));
  //   console.log("selectedColumns", selectedColumns);

  //   if (columnApi) {
  //     columnApi.setColumnVisible(columnName, isChecked);
  //     // console.log("column",columnApi.setColumnVisible(columnName, isChecked));
  //     console.log(`Column '${columnName}' visibility set to ${isChecked}`);
  //   }
  // };

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
    const abc = params?.columnApi?.columnModel?.columnDefs
      .filter((c) => c.filter === "CustomFilter")
      .map((m) => m.field);
    const dropdownFilter = abc.reduce((acc, key) => {
      acc[key] = [];
      return acc;
    }, {});

    setDropDownField(dropdownFilter);
  };

  console.log("dropdown", dropDownField);
  const defaultColDef = {
    flex: 1,
    resizable: true,
  };

  const CustomFilter = (prop) => {
    console.log("prop", prop?.colDef?.field);
    const [tagdata, setTagdata] = useState([]);

    async function getTagfromAPi() {
      const response = await axios.get("http://localhost:5000/Tag");
      setTagdata(response.data);
      return response.data;
    }

    async function getStatus() {
      const response = await axios.get("http://localhost:5000/stage");
      setTagdata(response.data);
      return response.data;
    }

    useEffect(() => {
      if(prop?.colDef?.field === 'tag'){
      getTagfromAPi();
      } else {
        getStatus();
      }
    }, [prop?.colDef?.field]);

    const handleAddValue = (newValue) => {
      console.log("newvalue", newValue);
      // const dropdownValue = {};
      // dropdownValue[prop.colDef.field] = newValue;
      // setDropDownField(dropdownValue);
      setDropDownField(prevDropdownField => ({
        ...prevDropdownField,
        [prop.colDef.field]: newValue
      }));
    };
    return (
      <Box sx={{ bgcolor: "background.paper" }}>
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={tagdata}
          disableCloseOnSelect
          onChange={(event, newValue) => {
            handleAddValue(newValue);
          }}
          getOptionLabel={(option) => option.tag || option.status}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox style={{ marginRight: 8 }} checked={selected} />
              {option.tag || option.status}
            </li>
          )}
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} label="Checkboxes" placeholder="Favorites" />
          )}
          PaperComponent={({ children }) => (
            <div onMouseDown={(event) => event.stopPropagation()}>
              {children}
            </div>
          )}
        />
      </Box>
    );
  };

  const gridOptions = {
    rowHeight: 50,
    onSelectionChanged: onSelectionChanged,
    rowSelection: "multiple",
    suppressRowClickSelection: true,
    components: {
      CustomFilter: CustomFilter,
    },
    // rowModelType: "infinite",
    // paginationPageSize: 50, // Number of rows to load per page
    // cacheBlockSize: 50, // Number of rows to load per chunk
    // maxBlocksInCache: 10, // Maximum number of chunks to keep in memory
    // domLayout: "autoHeight", // Automatically adjust the grid height
    // infiniteInitialRowCount: 100,
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
            <Box
              sx={{
                margin: "8px 15px",
                p: 1,
                display: "flex",
                bgcolor: "background.paper",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.5)",
                zIndex: 1000,
                position: "absolute",
              }}
            >
              {/* <Box > */}
              <Typography sx={{ marginRight: "1vw" }}>
                {selectedRows.length} row selected
              </Typography>
              {/* <Box component="img" src={tag} alt="tag" className={classes.actionIcons} /> */}
              <AddTag />
              <Box
                component="img"
                src={CheckCircle}
                alt="tag"
                className={classes.actionIcons}
              />
              <Box
                component="img"
                src={upload}
                alt="tag"
                className={classes.actionIcons}
              />
              <Box
                component="img"
                src={trash}
                alt="tag"
                className={classes.actionIcons}
              />
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
