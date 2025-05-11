import { baseApi } from '@/redux/api/baseApi';
import { tagTypes } from '@/redux/tagTypes';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: () => ({
        url: '/user/profile/me',
        method: 'GET',
      }),
      providesTags: [tagTypes.user],
    }),
    updateMyProfile: builder.mutation({
      query: (data) => ({
        url: '/user/profile/me',
        method: 'PATCH',
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetMyProfileQuery, useUpdateMyProfileMutation } = userApi;
