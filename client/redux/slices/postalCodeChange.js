// redux/postalCodeChange.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    postalCodeChange: false,
};

export const postalCodeChangeSlice = createSlice({
    name: 'postalCodeChange',
    initialState,
    reducers: {
        setPostalCodeChange: (state, action) => {
            state.postalCodeChange = action.payload;
        },
    },
});

export const { setPostalCodeChange } = postalCodeChangeSlice.actions;

export default postalCodeChangeSlice.reducer;
