import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { Box } from "@mui/material";
import {theme} from "./theme";
// import Typography from "@mui/material/Typography";

function SelectButton(props) {
  const [role, setRole] = useState(props.label);
  // console.log(role);

  const isDisabled = true;

  const handleChange = (event) => {
    setRole(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          my: { xxl: 3, xl: 2.9, lg: 2.75, md: 2.5, sm: 2.5 },
          mb: { xs: 1.3 },
          maxWidth: {
            xxl: "9.47vw",
            xl: "12.5vw",
            lg: "13vw",
            md: "14vw",
            sm: "15vw",
            xs: "29vw",
          },
        }}
      >
        <FormControl fullWidth size="small">
          <Select
            disabled={role === "Admin" ? isDisabled : null}
            IconComponent={KeyboardArrowDownIcon}
            value={role}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              color: theme.palette.color43.superdark,
            }}
          >
            <MenuItem value={role}>{role}</MenuItem>
            <MenuItem value={role === "Admin" ? "Member" : "Admin"}>
              {role === "Admin" ? "Member" : "Admin"}
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default SelectButton;
