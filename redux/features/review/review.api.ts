import { TQueryParam } from '@/lib/types/global.type';
import { baseApi } from '@/redux/api/baseApi';
import { tagTypes } from '@/redux/tagTypes';

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (reviewData) => ({
        url: '/reviews',
        method: 'POST',
        body: reviewData,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    getAllReviews: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: '/reviews',
          method: 'GET',
          params,
        };
      },
      providesTags: [tagTypes.review],
    }),
    getSingleReview: builder.query({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.review],
    }),
    updateReview: builder.mutation({
      query: ({ id, ...reviewData }) => ({
        url: `/reviews/${id}`,
        method: 'PATCH',
        body: reviewData,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.review],
    }),
    moderateReview: builder.mutation({
      query: ({ id, ...moderationData }) => ({
        url: `/reviews/${id}/moderate`,
        method: 'PATCH',
        body: moderationData,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    saveReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}/save`,
        method: 'POST',
      }),
      invalidatesTags: [tagTypes.review, tagTypes.user],
    }),
    unsaveReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}/save`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.review, tagTypes.user],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useGetAllReviewsQuery,
  useGetSingleReviewQuery,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
  useModerateReviewMutation,
  useSaveReviewMutation,
  useUnsaveReviewMutation,
} = reviewApi;
