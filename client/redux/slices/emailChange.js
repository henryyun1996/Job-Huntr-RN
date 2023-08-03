// redux/emailChange.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    emailChange: false,
};

export const emailChangeSlice = createSlice({
    name: 'emailChange',
    initialState,
    reducers: {
        setEmailChange: (state, action) => {
            state.emailChange = action.payload;
        },
    },
});

export const { setEmailChange } = emailChangeSlice.actions;

export default emailChangeSlice.reducer;
