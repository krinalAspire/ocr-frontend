import React from "react";
import { Box } from "@mui/material";
import  tag from "../../../../assets/allinvoice-assets/tag.svg";
import  CheckCircle  from "../../../../assets/allinvoice-assets/check-circle.svg";
import  trash  from "../../../../assets/allinvoice-assets/trash-2.svg";
import  upload  from "../../../../assets/allinvoice-assets/upload.svg";
import { classes } from "./utils";

function FourIcons(){
    return(
     <>
     {/* <h5>Tag</h5> */}
     <Box>
       <Box component="img" src={tag} alt="Tag" className={classes.actionIcons}/>
       <Box component="img" src={CheckCircle} alt="check-circle" className={classes.actionIcons}/>
       <Box component="img" src={upload} alt="Upload" className={classes.actionIcons}/>
       <Box component="img" src={trash} alt="trash" className={classes.actionIcons}/>
     </Box>
     </>
    );
}

export default FourIcons;