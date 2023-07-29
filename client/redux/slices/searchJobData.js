// redux/searchJobData.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchJobData: null,
};

export const searchJobDataSlice = createSlice({
    name: 'searchJobData',
    initialState,
    reducers: {
        setSearchJobData: (state, action) => {
            state.searchJobData = action.payload;
        },
    },
});

export const { setSearchJobData } = searchJobDataSlice.actions;

export default searchJobDataSlice.reducer;
