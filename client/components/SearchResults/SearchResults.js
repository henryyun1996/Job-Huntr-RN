import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setSliceIndex } from '../../redux/slices/sliceIndex';
import { setCardDetails } from '../../redux/slices/cardDetails';
import { setIndexCard } from '../../redux/slices/indexCard';
import { Ionicons } from '@expo/vector-icons'; // Import icons from react-native-vector-icons
import IsLoading from '../IsLoading/IsLoading';
import styles from './styles';
import SearchResultDetails from './SearchResultDetails/SearchResultDetails';

function SearchResults() {
    const dispatch = useDispatch();

    const searchJobData = useSelector((state) => state.searchJobData.searchJobData);
    const sliceIndex = useSelector((state) => state.sliceIndex.sliceIndex);
    const isSearchLoading = useSelector((state) => state.searchLoading.isSearchLoading);
    const user = useSelector((state) => state.user.user);
    const cardDetails = useSelector((state) => state.cardDetails.cardDetails);

    // Get the slice of jobData.data from index 0 to 14
    const slicedSearchJobData = searchJobData?.data?.slice(0, sliceIndex) || []; // Use empty array if jobData or jobData.data is undefined

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
        console.log("Clicked index:", index); // Log the clicked index to check if it's a valid value
        dispatch(setCardDetails(true));
        dispatch(setIndexCard(index));
    };


    // Function to render each job card
    const renderSearchJobCard = ({ item, index }) => (
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
                    <TouchableOpacity>
                        <Ionicons style={styles.icons} name="bookmark-outline" />
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
