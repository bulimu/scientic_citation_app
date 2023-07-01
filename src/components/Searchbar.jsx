import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, TextField, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Updates the search term state
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Calls the onSearch callback with the current search term
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Box
      component="form"
      onSubmit={handleFormSubmit}
      display="flex"
      justifyContent="left"
      padding={2}
    >
      <TextField
        onChange={handleInputChange}
        sx={{ mb: "0.5rem", width: "20rem" }}
        variant="standard"
        value={searchTerm}
        placeholder="Enter DOI"
      />
      <IconButton type="submit" aria-label="search">
        <Search />
      </IconButton>
    </Box>
  );
};

SearchBar.propTypes = {
  // Specifies that the onSearch prop must be a function and is required
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
