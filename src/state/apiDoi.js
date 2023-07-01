import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiDoi = createApi({
  reducerPath: "doiApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CROSSREF_URL }),
  tagTypes: ["Metadata"],
  endpoints: (builder) => ({
    // Define the getMetadata endpoint
    getMetadata: builder.query({
      query: (doi) => ({
        url: `/works/${doi}`,
        providesTags: ["Metadata"],
      }),
    }),
  }),
});

export const { useGetMetadataQuery } = apiDoi;
