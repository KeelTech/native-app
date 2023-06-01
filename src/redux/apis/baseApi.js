import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '@utils/Config';

// initialize an empty api service that we'll inject endpoints into later as needed
const baseApiSlice = createApi({
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: [],
  endpoints: build => ({}),
});

export default baseApiSlice;
