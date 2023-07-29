// redux/cardDetails.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cardDetails: false,
};

export const cardDetailsSlice = createSlice({
    name: 'cardDetails',
    initialState,
    reducers: {
        setCardDetails: (state, action) => {
            state.cardDetails = action.payload;
        },
    },
});

export const { setCardDetails } = cardDetailsSlice.actions;

export default cardDetailsSlice.reducer;
