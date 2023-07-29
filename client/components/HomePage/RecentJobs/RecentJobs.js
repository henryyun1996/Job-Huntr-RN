import React from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector hook
import { setCardDetails } from '../../../redux/slices/cardDetails';
import { setIndexCard } from '../../../redux/slices/indexCard';
import { Ionicons } from '@expo/vector-icons'; // Import icons from react-native-vector-icons
import styles from './styles';

function RecentJobs() {
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user.user);
    const jobData = useSelector((state) => state.jobData.jobData);

    const slicedJobData = jobData?.data?.slice(0, 25) || []; // Use empty array if jobData or jobData.data is undefined

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
            key={item.id || index}
            onPress={() => handleCardDetail(index)}
        >
            <View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.jobTitle} numberOfLines={1}>{item.job_title}</Text>
                    <TouchableOpacity>
                        <Ionicons style={styles.icons} name="bookmark-outline" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.employerName} numberOfLines={1}>
                    {item.employer_name}
                </Text>
                <Text style={styles.jobLocation} numberOfLines={1}>
                    {item.job_city}, {item.job_state}
                </Text>
                <View style={styles.jobSubInfo}>
                    <Text style={styles.salaryText}>
                        {item.job_min_salary !== null && item.job_max_salary !== null
                            ? `$${item.job_min_salary} - $${item.job_max_salary}`
                            : '$N/A'}
                    </Text>
                    <Text style={styles.jobType}>{item.job_employment_type}</Text>
                </View>
                <Text style={styles.applyHereText} onPress={() => handleOpenJobURL(item.job_apply_link)}
                >Apply Here</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.recentJobs}>
            <Text style={styles.recentJobsTitle}>Recent Jobs</Text>
            <View>
                {slicedJobData.map((item, index) => (
                    <View key={item.id || index}>{renderJobCard({ item, index })}</View>
                ))}
            </View>
        </View>
    );
}

export default RecentJobs;
