// redux/isSearchLoading.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSearchLoading: null,
};

export const isSearchLoadingSlice = createSlice({
    name: 'searchLoading',
    initialState,
    reducers: {
        setIsSearchLoading: (state, action) => {
            state.isSearchLoading = action.payload;
        },
    },
});

export const { setIsSearchLoading } = isSearchLoadingSlice.actions;

export default isSearchLoadingSlice.reducer;
