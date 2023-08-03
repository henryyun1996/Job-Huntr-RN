// redux/phoneNumberChange.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    phoneNumberChange: false,
};

export const phoneNumberChangeSlice = createSlice({
    name: 'phoneNumberChange',
    initialState,
    reducers: {
        setPhoneNumberChange: (state, action) => {
            state.phoneNumberChange = action.payload;
        },
    },
});

export const { setPhoneNumberChange } = phoneNumberChangeSlice.actions;

export default phoneNumberChangeSlice.reducer;
