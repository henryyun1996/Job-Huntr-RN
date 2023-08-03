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
import settingsInfoReducer from './slices/settingsInfo';
import emailChangeReducer from './slices/emailChange';
import phoneNumberChangeReducer from './slices/phoneNumberChange';
import streetAddressChangeReducer from './slices/streetAddressChange';
import cityChangeReducer from './slices/cityChange';
import stateChangeReducer from './slices/stateChange';
import postalCodeChangeReducer from './slices/postalCodeChange';
import passwordChangeReducer from './slices/passwordChange';
import aboutReducer from './slices/about';

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
        settingsInfo: settingsInfoReducer,
        emailChange: emailChangeReducer,
        phoneNumberChange: phoneNumberChangeReducer,
        streetAddressChange: streetAddressChangeReducer,
        cityChange: cityChangeReducer,
        stateChange: stateChangeReducer,
        postalCodeChange: postalCodeChangeReducer,
        passwordChange: passwordChangeReducer,
        about: aboutReducer
    },
});
