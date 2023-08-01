// redux/slices/savedIndexCard.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    savedIndexCard: null, // Set the initial value to null or any default value that fits your needs
};

export const savedIndexCardSlice = createSlice({
    name: 'savedIndexCard',
    initialState,
    reducers: {
        setSavedIndexCard: (state, action) => {
            state.savedIndexCard = action.payload;
        },
    },
});

export const { setSavedIndexCard } = savedIndexCardSlice.actions;

export default savedIndexCardSlice.reducer;
