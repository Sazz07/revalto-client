import { TQueryParam } from '@/lib/types/global.type';
import { baseApi } from '@/redux/api/baseApi';
import { tagTypes } from '@/redux/tagTypes';

const tagApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTag: builder.mutation({
      query: (tagData) => ({
        url: '/tags',
        method: 'POST',
        body: tagData,
      }),
      invalidatesTags: [tagTypes.tag],
    }),
    getAllTags: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: '/tags',
          method: 'GET',
          params,
        };
      },
      providesTags: [tagTypes.tag],
    }),
    getSingleTag: builder.query({
      query: (id) => ({
        url: `/tags/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.tag],
    }),
    updateTag: builder.mutation({
      query: ({ id, ...tagData }) => ({
        url: `/tags/${id}`,
        method: 'PATCH',
        body: tagData,
      }),
      invalidatesTags: [tagTypes.tag],
    }),
    deleteTag: builder.mutation({
      query: (id) => ({
        url: `/tags/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.tag],
    }),
  }),
});

export const {
  useCreateTagMutation,
  useGetAllTagsQuery,
  useGetSingleTagQuery,
  useUpdateTagMutation,
  useDeleteTagMutation,
} = tagApi;
