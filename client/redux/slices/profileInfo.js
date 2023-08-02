// redux/profileInfo.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profileInfo: false,
};

export const profileInfoSlice = createSlice({
    name: 'profileInfo',
    initialState,
    reducers: {
        setProfileInfo: (state, action) => {
            state.profileInfo = action.payload;
        },
    },
});

export const { setProfileInfo } = profileInfoSlice.actions;

export default profileInfoSlice.reducer;
