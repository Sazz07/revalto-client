import { TQueryParam } from '@/lib/types/global.type';
import { baseApi } from '@/redux/api/baseApi';
import { tagTypes } from '@/redux/tagTypes';

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    initPayment: builder.mutation({
      query: (paymentData) => ({
        url: '/payments/init',
        method: 'POST',
        body: paymentData,
      }),
    }),
    getAllPayments: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: '/payments',
          method: 'GET',
          params,
        };
      },
      providesTags: [tagTypes.payment],
    }),
    getUserPayments: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: '/payments/my-payments',
          method: 'GET',
          params,
        };
      },
      providesTags: [tagTypes.payment],
    }),
    getSinglePayment: builder.query({
      query: (id) => ({
        url: `/payments/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.payment],
    }),
  }),
});

export const {
  useInitPaymentMutation,
  useGetAllPaymentsQuery,
  useGetUserPaymentsQuery,
  useGetSinglePaymentQuery,
} = paymentApi;
