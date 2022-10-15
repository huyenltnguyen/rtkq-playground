import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetListResponse {
  list: ListItem[];
}

interface ListItem {
  id: string;
  title: string;
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getList: builder.query<ListItem[], void>({
      query: () => `list`,
      transformResponse: (response: GetListResponse) => {
        const { list } = response;

        return list.map((item) => item);
      }
    })
  })
});

export const { useGetListQuery } = api;
