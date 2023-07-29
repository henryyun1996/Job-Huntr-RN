// store.js
import { configureStore } from '@reduxjs/toolkit';
import isLoadingReducer from './slices/isLoading';
import isSearchLoadingReducer from './slices/isSearchLoading';
import jobDataReducer from './slices/jobData';
import userReducer from './slices/user';
import searchJobDataReducer from './slices/searchJobData';
import sliceIndexSliceReducer from './slices/sliceIndex';
import cardDetailsReducer from './slices/cardDetails'
import indexCardReducer from './slices/indexCard';

export const store = configureStore({
    reducer: {
        loading: isLoadingReducer,
        searchLoading: isSearchLoadingReducer,
        jobData: jobDataReducer,
        searchJobData: searchJobDataReducer, // Use the searchJobDataSlice.reducer
        user: userReducer,
        sliceIndex: sliceIndexSliceReducer,
        cardDetails: cardDetailsReducer,
        indexCard: indexCardReducer,
    },
});
