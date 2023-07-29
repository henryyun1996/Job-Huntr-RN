// redux/slices/bookmarkedJobs.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const bookmarkedJobsSlice = createSlice({
    name: 'bookmarkedJobs',
    initialState,
    reducers: {
        toggleBookmark: (state, action) => {
            const itemId = action.payload;
            if (state[itemId]) {
                delete state[itemId];
            } else {
                state[itemId] = true;
            }
        },
    },
});

export const { toggleBookmark } = bookmarkedJobsSlice.actions;

export default bookmarkedJobsSlice.reducer;
