import React from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

function RecentJobs({ jobData }) {
    // Get the slice of jobData.data from index 0 to 14
    const slicedJobData = jobData?.data?.slice(0, 25) || []; // Use empty array if jobData or jobData.data is undefined

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
        <TouchableOpacity
            style={styles.jobCard}
            key={item.id || index}
        >
            <View>
                <Text style={styles.jobTitle} numberOfLines={1}>
                    {item.job_title}
                </Text>
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
