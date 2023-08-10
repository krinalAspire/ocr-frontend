import { Box, Button, Typography } from "@mui/material";
import React from "react";
// import NavUpload from "./NavUpload";
import { classes, Root } from "./utils";
import uploadFile from "../../../../assets/uploadfile-assets/uploadFile.png";
import { useRef } from "react";

function UploadFile() {
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      {/* <NavUpload /> */}
      <Root className={classes.root}>
        <Box className={classes.centerContent}>
          <img
            src={uploadFile}
            alt="uploadFile"
            className={classes.uploadFile}
          />

          <Typography variant="h4">Drag and drop all documents here</Typography>

          <Box className={classes.ParagraphTextBox}>
            <Typography variant="subtitle1">
              PDF, Word Documents, and images accepted. Documents will be
              intelligently classified into: Resumes, Receipts, Invoices etc.
            </Typography>
          </Box>

          <Box>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            <Button
              variant="contained"
              className={classes.ChooseFilebtn}
              onClick={handleButtonClick}
            >
              Choose Files
            </Button>
          </Box>
        </Box>
      </Root>
    </>
  );
}

export default UploadFile;
