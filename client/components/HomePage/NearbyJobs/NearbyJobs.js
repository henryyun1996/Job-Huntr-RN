import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Linking } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector hook
import { setCardDetails } from '../../../redux/slices/cardDetails';
import { setIndexCard } from '../../../redux/slices/indexCard';
import { Ionicons } from '@expo/vector-icons'; // Import icons from react-native-vector-icons
import styles from './styles';

function NearbyJobs() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user);
    // Get the jobData from the Redux store
    const jobData = useSelector((state) => state.jobData.jobData);
    // Get the slice of jobData.data from index 0 to 14
    const slicedJobData = jobData?.data?.slice(0, 15) || []; // Use empty array if jobData or jobData.data is undefined

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
    const renderJobCard = ({ item, index }) => (

        <TouchableOpacity
            style={styles.jobCard}
            onPress={() => handleCardDetail(index)}

        >
            <View key={item.id || index}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.jobTitle} numberOfLines={1}>{item.job_title}</Text>
                    <TouchableOpacity>
                        <Ionicons style={styles.icons} name="bookmark-outline" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.employerName} numberOfLines={1}>{item.employer_name}</Text>
                <Text style={styles.jobLocation} numberOfLines={1}>{item.job_city}, {item.job_state}</Text>
                <Text style={styles.applyHereText} onPress={() => handleOpenJobURL(item.job_apply_link)}>Apply Here</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.nearbyJobs}>
            <Text style={styles.nearbyJobsTitle}>Nearby Jobs</Text>
            <FlatList
                horizontal
                style={styles.jobsList}
                data={slicedJobData}
                renderItem={renderJobCard}
                keyExtractor={(item, index) => item?.id?.toString() || index.toString()} // Use index if item or item.id is undefined
            />
        </View>
    );
}

export default NearbyJobs;
