import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box sx={{position: "absolute", right: 650, top: 300}}>
      <CircularProgress />
    </Box>
  );
}
