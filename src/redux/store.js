import { configureStore } from "@reduxjs/toolkit";
import characterReducer from './slices/characterSlice';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
    reducer: {
        character: characterReducer,
        search: searchReducer,
    }
})