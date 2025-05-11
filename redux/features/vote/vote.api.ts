import { TQueryParam } from '@/lib/types/global.type';
import { baseApi } from '@/redux/api/baseApi';
import { tagTypes } from '@/redux/tagTypes';

const voteApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createVote: builder.mutation({
      query: (voteData) => ({
        url: '/votes',
        method: 'POST',
        body: voteData,
      }),
      invalidatesTags: [tagTypes.vote, tagTypes.review],
    }),
    getAllVotes: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: '/votes',
          method: 'GET',
          params,
        };
      },
      providesTags: [tagTypes.vote],
    }),
    getSingleVote: builder.query({
      query: (id) => ({
        url: `/votes/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.vote],
    }),
    updateVote: builder.mutation({
      query: ({ id, ...voteData }) => ({
        url: `/votes/${id}`,
        method: 'PATCH',
        body: voteData,
      }),
      invalidatesTags: [tagTypes.vote, tagTypes.review],
    }),
    deleteVote: builder.mutation({
      query: (id) => ({
        url: `/votes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.vote, tagTypes.review],
    }),
  }),
});

export const {
  useCreateVoteMutation,
  useGetAllVotesQuery,
  useGetSingleVoteQuery,
  useUpdateVoteMutation,
  useDeleteVoteMutation,
} = voteApi;
