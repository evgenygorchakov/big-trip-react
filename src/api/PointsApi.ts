import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPoint } from "../models/IPoint";
import { BASE_URL, TOKEN } from "./const";

export const pointsApi = createApi({
  reducerPath: "pointsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("authorization", `Basic ${TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPoints: builder.query<IPoint[], string>({
      query: (items) => `${items}`,
    }),
  }),
});

export const { useGetPointsQuery } = pointsApi;
