import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    currentPage: 1,
    totalPages: 42
}

export const characterSlice = createSlice({
    name:  "character",
    initialState,
    reducers: {
        setCharacters: (state, action) => {
            state.characters = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    }
})

export const { setCharacters, setCurrentPage } = characterSlice.actions;
export default characterSlice.reducer;