// redux/passwordChange.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    passwordChange: false,
};

export const passwordChangeSlice = createSlice({
    name: 'passwordChange',
    initialState,
    reducers: {
        setPasswordChange: (state, action) => {
            state.passwordChange = action.payload;
        },
    },
});

export const { setPasswordChange } = passwordChangeSlice.actions;

export default passwordChangeSlice.reducer;
