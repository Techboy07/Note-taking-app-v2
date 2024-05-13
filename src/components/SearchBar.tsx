import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function SearchBar() {
  return (
    <div className="max-w-5xl mx-auto my-10  px-4 xl:px-1 ">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Search" variant="outlined" />
      </Box>
    </div>
  );
}

export default SearchBar;
