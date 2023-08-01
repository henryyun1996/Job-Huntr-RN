// redux/sliceFavoritedIndex.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sliceFavoritedIndex: 25,
};

export const sliceFavoritedIndexSlice = createSlice({
    name: 'sliceFavoritedIndex',
    initialState,
    reducers: {
        setSliceFavoritedIndex: (state, action) => {
            state.sliceFavoritedIndex = action.payload;
        },
    },
});

export const { setSliceFavoritedIndex } = sliceFavoritedIndexSlice.actions;

export default sliceFavoritedIndexSlice.reducer;
