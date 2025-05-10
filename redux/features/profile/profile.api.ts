import { baseApi } from '@/redux/api/baseApi';
import { tagTypes } from '@/redux/tagTypes';

const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: '/profile',
        method: 'GET',
      }),
      providesTags: [tagTypes.profile],

      keepUnusedDataFor: 0,
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: '/profile',
        method: 'PATCH',
        data,
      }),
      invalidatesTags: [tagTypes.profile],
    }),
  }),
});
