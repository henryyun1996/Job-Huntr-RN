// redux/stateChange.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    stateChange: false,
};

export const stateChangeSlice = createSlice({
    name: 'stateChange',
    initialState,
    reducers: {
        setStateChange: (state, action) => {
            state.stateChange = action.payload;
        },
    },
});

export const { setStateChange } = stateChangeSlice.actions;

export default stateChangeSlice.reducer;
