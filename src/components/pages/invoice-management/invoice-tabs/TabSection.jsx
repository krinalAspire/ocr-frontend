import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import TagsButton from "./TagsButton";
import { Root, classes } from "./utils";
import { lightPalette } from "../../../../theme";

function TabSection() {
  return (
    <Root className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <Typography
            variant="h4"
            color={lightPalette.secondaryBlack.main}
          >
            All Invoices
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Box
          className={classes.SecondGridBox}
          >
            <TagsButton />
            <TextField
              size="small"
              placeholder="Search Documents"
              className={classes.SearchField}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              startIcon={<FileUploadOutlinedIcon className={classes.UploadIcon}/>}
              className={classes.UploadButton}
            >
              Upload
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Root>
  );
}

export default TabSection;
