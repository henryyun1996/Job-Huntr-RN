import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setSliceIndex } from '../../redux/slices/sliceIndex';
import { setCardDetails } from '../../redux/slices/cardDetails';
import { setIndexCard } from '../../redux/slices/indexCard';
import { setFavoriteJobData } from '../../redux/slices/favoriteJobData';
import { Ionicons } from '@expo/vector-icons'; // Import icons from react-native-vector-icons
import IsLoading from '../IsLoading/IsLoading';
import SearchResultDetails from './SearchResultDetails/SearchResultDetails';
import styles from './styles';

function SearchResults() {
    const dispatch = useDispatch();

    const searchJobData = useSelector((state) => state.searchJobData.searchJobData);
    const sliceIndex = useSelector((state) => state.sliceIndex.sliceIndex);
    const isSearchLoading = useSelector((state) => state.searchLoading.isSearchLoading);
    const user = useSelector((state) => state.user.user);
    const favoriteJobData = useSelector((state) => state.favoriteJobData.favoriteJobData);
    const cardDetails = useSelector((state) => state.cardDetails.cardDetails);

    // Get the slice of jobData.data from index 0 to 14
    const slicedSearchJobData = searchJobData?.data?.slice(0, sliceIndex) || []; // Use empty array if jobData or jobData.data is undefined


    const handleIconClick = (index) => {
        const conditionalJobSave = favoriteJobData.some((favItem) => favItem.job_id === searchJobData.data[index].job_id)

        if (user && conditionalJobSave) {
            console.log("already saved")
        } else {
            console.log("not saved")
            handleSavedCard(index);
            // alert("You must be signed in to save a job.");
        }
    };

    const handleSavedCard = async (index) => {
        const jobData = searchJobData?.data;
        if (!jobData || !Array.isArray(jobData) || index < 0 || index >= jobData.length) {
            console.error("Invalid searchJobData or index.");
            return;
        }

        const selectedJob = jobData[index];
        const job_title = selectedJob?.job_title;
        const employer_name = selectedJob?.employer_name;
        const job_city = selectedJob?.job_city;
        const job_state = selectedJob?.job_state;
        const job_min_salary = selectedJob?.job_min_salary;
        const job_max_salary = selectedJob?.job_max_salary;
        const job_employment_type = selectedJob?.job_employment_type;
        const job_apply_link = selectedJob?.job_apply_link;
        const job_description = selectedJob?.job_description;
        const job_qualifications = selectedJob?.job_qualifications;
        const job_responsibilities = selectedJob?.job_responsibilities;
        const job_benefits = selectedJob?.job_benefits ? JSON.stringify(selectedJob.job_benefits) : null; // Convert array to string
        const job_id = selectedJob?.job_id;

        try {
            const response = await fetch('https://3908-2603-8001-4800-2320-591e-f5ec-bb1d-37e4.ngrok-free.app/favorites', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    job_title,
                    employer_name,
                    job_city,
                    job_state,
                    job_min_salary,
                    job_max_salary,
                    job_employment_type,
                    job_apply_link,
                    job_description,
                    job_qualifications,
                    job_responsibilities,
                    job_benefits,
                    job_id,
                    user_id: user.id
                }),
            });
            const newFavorite = await response.json();
            // Dispatch an action to update the Redux store with the new favorite data
            dispatch(setFavoriteJobData([...favoriteJobData, newFavorite]));
        } catch (error) {
            console.error("Error adding favorite:", error);
        }
    };


    // Function to handle opening the job URL
    const handleOpenJobURL = async (url) => {
        const supported = await Linking.canOpenURL(url);

        if (supported && user) {
            await Linking.openURL(url);
        } else if (!supported) {
            alert("URL not supported");
        } else {
            alert("Must be singed in to apply");
        }
    };

    const handleCardDetail = (index) => {
        dispatch(setCardDetails(true));
        dispatch(setIndexCard(index));
    };

    // Function to render each job card
    const renderSearchJobCard = ({ item, index }) => {
        const conditionalIcon = favoriteJobData.some((favItem) => favItem.job_id === searchJobData.data[index].job_id)

        return (
            <TouchableOpacity
                style={styles.searchJobCard}
                key={item.id || index}
                onPress={() => handleCardDetail(index)}
            >
                <View>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.searchJobTitle} numberOfLines={1}>
                            {item.job_title}
                        </Text>
                        <TouchableOpacity onPress={() => handleIconClick(index)}>
                            <Ionicons
                                style={styles.icons}
                                name={user && conditionalIcon ? "bookmark" : "bookmark-outline"}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.searchEmployerName} numberOfLines={1}>
                        {item.employer_name}
                    </Text>
                    <Text style={styles.searchJobLocation} numberOfLines={1}>
                        {item.job_city}, {item.job_state}
                    </Text>
                    <View style={styles.searchJobSubInfo}>
                        <Text style={styles.searchSalaryText}>
                            {item.job_min_salary !== null && item.job_max_salary !== null
                                ? `$${item.job_min_salary} - $${item.job_max_salary}`
                                : '$N/A'}
                        </Text>
                        <Text style={styles.searchJobType}>{item.job_employment_type}</Text>
                    </View>
                    <Text
                        style={styles.searchApplyHereText}
                        onPress={() => handleOpenJobURL(item.job_apply_link)}
                    >
                        Apply Here
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };


    const handleLoadMore = () => {
        dispatch(setSliceIndex(sliceIndex + 15));
    };

    return (
        <View style={styles.searchResults}>
            {isSearchLoading ? (
                <IsLoading />
            ) : (
                <>
                    {cardDetails && <SearchResultDetails />}
                    <ScrollView>
                        <Text style={styles.resultsText}>Search Results</Text>
                        {slicedSearchJobData.length > 0 ? (
                            <View>
                                {slicedSearchJobData.map((item, index) => (
                                    <View key={item.id || index}>{renderSearchJobCard({ item, index })}</View>
                                ))}
                            </View>
                        ) : (
                            <Text style={styles.noDataText}>No data found in the search query.</Text>
                        )}
                        <TouchableOpacity style={styles.loadMoreBtn} onPress={handleLoadMore}>
                            <Text>Load More</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </>

            )}
        </View>
    );
}

export default SearchResults;
