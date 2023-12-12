import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {Product} from "../utils/types/Product.ts";

interface SearchProductResponse {
    products: Product[],
    total: number,
    skip: number,
    limit: number
}

export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
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
        searchProducts: builder.query<SearchProductResponse, string>({
            query: (text: string = '') => {
                if (text) {
                    return { url: `products/search?q=${text}&limit=0` };
                } else {
                    return { url: `products` };
                }
            }
        })
    })
})

export const {
    useFetchProductsQuery,
    useFetchCurrentProductQuery,
    useSearchProductsQuery
} = productsAPI;