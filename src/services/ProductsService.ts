import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {Product} from "../utils/types/Product.ts";

export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        fetchProducts: builder.query({
            query: () => ({
                url: 'products'
            })
        }),
        fetchCurrentProduct: builder.query<Product, string>({
            query: (id = '1') => ({
                url: `products/${id}`
            })
        }),
        searchProducts: builder.query({
            query: (text: string = '') => ({
                url: `products/search?q=${text}`
            })
        })
    })
})

export const {useFetchProductsQuery,
    useFetchCurrentProductQuery,
useSearchProductsQuery} = productsAPI;