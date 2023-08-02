// redux/slices/favoriteIndexCard.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoriteIndexCard: null, // Set the initial value to null or any default value that fits your needs
};

export const favoriteIndexCardSlice = createSlice({
    name: 'favoriteIndexCard',
    initialState,
    reducers: {
        setFavoriteIndexCard: (state, action) => {
            state.favoriteIndexCard = action.payload;
        },
    },
});

export const { setFavoriteIndexCard } = favoriteIndexCardSlice.actions;

export default favoriteIndexCardSlice.reducer;
