import { TQueryParam } from '@/lib/types/global.type';
import { baseApi } from '@/redux/api/baseApi';
import { tagTypes } from '@/redux/tagTypes';

const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createComment: builder.mutation({
      query: (commentData) => ({
        url: '/comments',
        method: 'POST',
        body: commentData,
      }),
      invalidatesTags: [tagTypes.comment, tagTypes.review],
    }),
    getAllComments: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: '/comments',
          method: 'GET',
          params,
        };
      },
      providesTags: [tagTypes.comment],
    }),
    getSingleComment: builder.query({
      query: (id) => `/comments/${id}`,
      providesTags: [tagTypes.comment],
    }),
    updateComment: builder.mutation({
      query: ({ id, ...commentData }) => ({
        url: `/comments/${id}`,
        method: 'PATCH',
        body: commentData,
      }),
      invalidatesTags: [tagTypes.comment, tagTypes.review],
    }),
    deleteComment: builder.mutation({
      query: (id) => ({
        url: `/comments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.comment, tagTypes.review],
    }),
  }),
});

export const {
  useCreateCommentMutation,
  useGetAllCommentsQuery,
  useGetSingleCommentQuery,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = commentApi;
