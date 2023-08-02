// store.js
import { configureStore } from '@reduxjs/toolkit';
import isLoadingReducer from './slices/isLoading';
import isSearchLoadingReducer from './slices/isSearchLoading';
import jobDataReducer from './slices/jobData';
import favoriteJobDataReducer from './slices/favoriteJobData';
import userReducer from './slices/user';
import searchJobDataReducer from './slices/searchJobData';
import sliceIndexSliceReducer from './slices/sliceIndex';
import cardDetailsReducer from './slices/cardDetails'
import indexCardReducer from './slices/indexCard';
import favoriteIndexCardReducer from './slices/favoriteIndexCard';
import sliceFavoritedIndexReducer from './slices/sliceFavoritedIndex'
import favoritedCardDetailsReducer from './slices/favoritedCardDetails'
import profileInfoReducer from './slices/profileInfo';

export const store = configureStore({
    reducer: {
        loading: isLoadingReducer,
        searchLoading: isSearchLoadingReducer,
        jobData: jobDataReducer,
        favoriteJobData: favoriteJobDataReducer,
        searchJobData: searchJobDataReducer, // Use the searchJobDataSlice.reducer
        user: userReducer,
        sliceIndex: sliceIndexSliceReducer,
        cardDetails: cardDetailsReducer,
        indexCard: indexCardReducer,
        favoriteIndexCard: favoriteIndexCardReducer,
        sliceFavoritedIndex: sliceFavoritedIndexReducer,
        favoritedCardDetails: favoritedCardDetailsReducer,
        profileInfo: profileInfoReducer,
    },
});
