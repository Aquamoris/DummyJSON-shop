import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        fetchProducts: builder.query({
            query: () => ({
                url: 'products'
            })
        })
    })
})

export const {useFetchProductsQuery} = productsAPI;