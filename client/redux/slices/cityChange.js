// redux/cityChange.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cityChange: false,
};

export const cityChangeSlice = createSlice({
    name: 'cityChange',
    initialState,
    reducers: {
        setCityChange: (state, action) => {
            state.cityChange = action.payload;
        },
    },
});

export const { setCityChange } = cityChangeSlice.actions;

export default cityChangeSlice.reducer;
