// redux/streetAddressChange.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    streetAddressChange: false,
};

export const streetAddressChangeSlice = createSlice({
    name: 'streetAddressChange',
    initialState,
    reducers: {
        setStreetAddressChange: (state, action) => {
            state.streetAddressChange = action.payload;
        },
    },
});

export const { setStreetAddressChange } = streetAddressChangeSlice.actions;

export default streetAddressChangeSlice.reducer;
