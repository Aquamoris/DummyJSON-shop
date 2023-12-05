import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {productsAPI} from "../services/ProductsService.ts";

const rootReducer = combineReducers({
    [productsAPI.reducerPath]: productsAPI.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;