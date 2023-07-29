// redux/slices/indexCard.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    indexCard: null, // Set the initial value to null or any default value that fits your needs
};

export const indexCardSlice = createSlice({
    name: 'indexCard',
    initialState,
    reducers: {
        setIndexCard: (state, action) => {
            state.indexCard = action.payload;
        },
    },
});

export const { setIndexCard } = indexCardSlice.actions;

export default indexCardSlice.reducer;
