// redux/favoritedCardDetails.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoritedCardDetails: false,
};

export const favoritedCardDetailsSlice = createSlice({
    name: 'favoritedCardDetails',
    initialState,
    reducers: {
        setFavoritedCardDetails: (state, action) => {
            state.favoritedCardDetails = action.payload;
        },
    },
});

export const { setFavoritedCardDetails } = favoritedCardDetailsSlice.actions;

export default favoritedCardDetailsSlice.reducer;
