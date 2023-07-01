import { Typography, Box } from "@mui/material";
import React from "react";

const Titel = ({ title }) => {
  return (
    <Box>
      <Typography
        variant="h4"
        color="primary.dark"
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Titel;
