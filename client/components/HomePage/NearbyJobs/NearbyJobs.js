import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

function NearbyJobs({ jobData }) {
    // Get the slice of jobData.data from index 0 to 14
    const slicedJobData = jobData?.data?.slice(0, 15) || []; // Use empty array if jobData or jobData.data is undefined

    // Function to handle opening the job URL
    const handleOpenJobURL = async (url) => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            console.error('Cannot open the URL:', url);
        }
    };

    // Function to render each job card
    const renderJobCard = ({ item, index }) => (

        <TouchableOpacity style={styles.jobCard} onPress={() => handleOpenJobURL(item.job_apply_link)}>
            <View key={item.id || index}>
                <Text style={styles.jobTitle} numberOfLines={1}>{item.job_title}</Text>
                <Text style={styles.employerName} numberOfLines={1}>{item.employer_name}</Text>
                <Text style={styles.jobLocation} numberOfLines={1}>{item.job_city}, {item.job_state}</Text>
                <Text style={styles.applyHereText}>Apply Here</Text>
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
