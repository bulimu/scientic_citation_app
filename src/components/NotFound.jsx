import React from "react";
import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box maxWidth="sm" sx={{ textAlign: "left", marginTop: 4 }}>
      <Typography variant="h2" color="error">
        404
      </Typography>
      <Typography variant="h5" color="textSecondary">
        Oops! Resource not found.
      </Typography>
    </Box>
  );
};

export default NotFound;
