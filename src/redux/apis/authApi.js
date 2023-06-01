import baseApiSlice from './baseApiSlice';

export const authApi = baseApiSlice.injectEndpoints({
  endpoints: build => ({
    customerLogin: build.mutation({
      query(body) {
        return {
          url: 'customer/verify',
          method: 'POST',
          body,
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const {useCustomerLoginMutation} = authApi;
