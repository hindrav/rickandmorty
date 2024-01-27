import { configureStore } from "@reduxjs/toolkit";
import characterReducer from './slices/characterSlice';
import searchReducer from './slices/searchSlice';
import loaderReducer from './slices/loaderSlice';

export const store = configureStore({
    reducer: {
        character: characterReducer,
        search: searchReducer,
        loader: loaderReducer,
    }
})