import { TQueryParam } from '@/lib/types/global.type';
import { baseApi } from '@/redux/api/baseApi';
import { tagTypes } from '@/redux/tagTypes';

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAdmin: builder.mutation({
      query: (data) => ({
        url: '/admin/create-admin',
        method: 'POST',
        data,
      }),
      invalidatesTags: [tagTypes.admin, tagTypes.user],
    }),
    getAllUsers: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: '/admin',
          method: 'GET',
          params,
        };
      },
      providesTags: [tagTypes.admin],
    }),
    getSingleUser: builder.query({
      query: (id: string) => ({
        url: `/admin/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.admin],
    }),
    updateUserStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/admin/${id}/status`,
        method: 'PATCH',
        data: { status },
      }),
    }),
    deleteUser: builder.mutation({
      query: (id: string) => ({
        url: `/admin/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useCreateAdminMutation,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useUpdateUserStatusMutation,
  useDeleteUserMutation,
} = adminApi;
