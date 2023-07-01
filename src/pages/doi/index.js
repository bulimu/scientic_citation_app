import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import Titel from "../../components/Titel";
import SearchBar from "../../components/Searchbar";
import GetDOIMetaData from "../../components/GetDOIMetaData";

const Doi = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handles the search term input
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Container maxWidth="sm">
      <Box mt="1.5rem" mb="2.5rem">
        <Titel title={"Scientific Source Information"} />
      </Box>

      <SearchBar onSearch={handleSearch} />

      {/* Fetch DOI metadata if a search term exists  */}
      {searchTerm && <GetDOIMetaData doi={searchTerm} />}
    </Container>
  );
};

export default Doi;
