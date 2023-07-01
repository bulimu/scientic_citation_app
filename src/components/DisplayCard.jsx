import React from "react";
import { Card, CardContent, Typography, Divider } from "@mui/material";

// Function to format the issued date
const formatIssuedDate = (issued) => {
  if (!issued?.["date-parts"]?.[0]) {
    return "";
  }
  const dateParts = issued["date-parts"][0];

  //return `${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`;
  const datePartsFormat = dateParts.map((parts) => parts).join("-");
  return datePartsFormat;
};

const DisplayCard = ({ data }) => {
  const issuedDate = formatIssuedDate(data?.issued);

  // Check if citation count und reference count is available in the data
  const citationCount =
    "is-referenced-by-count" in data ? data["is-referenced-by-count"] : false;

  const citedByCount =
    "reference-count" in data ? data["reference-count"] : false;

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        {/* Render the title if available */}
        {data?.title && (
          <Typography variant="h5" component="div">
            {data.title}
          </Typography>
        )}

        <Divider />

        {data?.abstract && (
          <Typography variant="body2" color="text.secondary">
            Abstract: {data?.abstract.replace(/<\/?jats:p>/g, "")}
          </Typography>
        )}

        <Divider />

        {data?.author && (
          <Typography variant="subtitle1" color="text.primary">
            Authors:{" "}
            {data.author
              .map(
                (author) =>
                  `${author?.suffix ? author.suffix : ""} ${author.given} ${
                    author.family
                  }`
              )
              .join(", ")}
          </Typography>
        )}

        {data?.DOI && (
          <Typography variant="subtitle2" color="text.secondary">
            DOI: {data.DOI}
          </Typography>
        )}

        {issuedDate && (
          <Typography variant="subtitle2" color="text.secondary">
            Issued: {issuedDate}
          </Typography>
        )}
        <Divider />
        {citationCount && (
          <Typography variant="subtitle2" color="text.primary">
            Citation Count: {citationCount}
          </Typography>
        )}

        {citedByCount && (
          <Typography variant="subtitle2" color="text.primary">
            Reference Count: {citedByCount}
          </Typography>
        )}

        <Divider />

        {data?.type && (
          <Typography variant="subtitle2" color="text.secondary">
            Type: {data.type}
          </Typography>
        )}

        {data?.ISSN && (
          <Typography variant="subtitle2" color="text.secondary">
            ISSN: {data.ISSN.join(", ")}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default DisplayCard;
