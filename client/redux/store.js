// store.js
import { configureStore } from '@reduxjs/toolkit';
import isLoadingReducer from './slices/isLoading';
import isSearchLoadingReducer from './slices/isSearchLoading';
import jobDataReducer from './slices/jobData';
import locationReducer from './slices/location';
import favoriteJobDataReducer from './slices/favoriteJobData';
import favoriteIndexCardReducer from './slices/favoriteIndexCard';
import userReducer from './slices/user';
import searchJobDataReducer from './slices/searchJobData';
import sliceIndexSliceReducer from './slices/sliceIndex';
import cardDetailsReducer from './slices/cardDetails'
import indexCardReducer from './slices/indexCard';
import sliceFavoritedIndexReducer from './slices/sliceFavoritedIndex'
import favoritedCardDetailsReducer from './slices/favoritedCardDetails'
import profileInfoReducer from './slices/profileInfo';

export const store = configureStore({
    reducer: {
        loading: isLoadingReducer,
        searchLoading: isSearchLoadingReducer,
        location: locationReducer,
        jobData: jobDataReducer,
        favoriteJobData: favoriteJobDataReducer,
        favoriteIndexCard: favoriteIndexCardReducer,
        searchJobData: searchJobDataReducer, // Use the searchJobDataSlice.reducer
        user: userReducer,
        sliceIndex: sliceIndexSliceReducer,
        cardDetails: cardDetailsReducer,
        indexCard: indexCardReducer,
        sliceFavoritedIndex: sliceFavoritedIndexReducer,
        favoritedCardDetails: favoritedCardDetailsReducer,
        profileInfo: profileInfoReducer
    },
});
