// redux/settingsInfo.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    settingsInfo: false,
};

export const settingsInfoSlice = createSlice({
    name: 'settingsInfo',
    initialState,
    reducers: {
        setSettingsInfo: (state, action) => {
            state.settingsInfo = action.payload;
        },
    },
});

export const { setSettingsInfo } = settingsInfoSlice.actions;

export default settingsInfoSlice.reducer;
