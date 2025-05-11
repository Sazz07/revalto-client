import { TQueryParam } from '@/lib/types/global.type';
import { baseApi } from '@/redux/api/baseApi';
import { tagTypes } from '@/redux/tagTypes';

const reportApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReport: builder.mutation({
      query: (reportData) => ({
        url: '/reports',
        method: 'POST',
        body: reportData,
      }),
      invalidatesTags: [tagTypes.report],
    }),
    getAllReports: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: '/reports',
          method: 'GET',
          params,
        };
      },
      providesTags: [tagTypes.report],
    }),
    getSingleReport: builder.query({
      query: (id) => `/reports/${id}`,
      providesTags: [tagTypes.report],
    }),
    updateReportStatus: builder.mutation({
      query: ({ id, ...statusData }) => ({
        url: `/reports/${id}/status`,
        method: 'PATCH',
        body: statusData,
      }),
      invalidatesTags: [tagTypes.report],
    }),
  }),
});

export const {
  useCreateReportMutation,
  useGetAllReportsQuery,
  useGetSingleReportQuery,
  useUpdateReportStatusMutation,
} = reportApi;
