import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { useGetMetadataQuery } from "../state/apiDoi";
import DisplayCard from "./DisplayCard";
import NotFound from "./NotFound";

const GetDOIMetaData = ({ doi }) => {
  // Fetch metadata based on the provided DOI
  const { data, isLoading, isError } = useGetMetadataQuery(doi);

  // Renders a loading indicator while fetching the metadata
  if (isLoading) {
    return (
      <Box sx={{ textAlign: "left", padding: 2 }}>
        <CircularProgress />
      </Box>
    );
  }

  // An error occurred during the fetching process
  if (isError) {
    return <NotFound />;
  }

  // Successfully fetched data
  return <DisplayCard data={data.message} />;
};

export default GetDOIMetaData;
