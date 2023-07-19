import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';

function PopularJobs({ jobData }) {
    console.log(jobData)
    const keyExtractor = (item) => item?.id?.toString() || '';

    return (
        <View style={styles.popularJobs}>
            <Text style={styles.nearbyText}>Nearby Jobs</Text>
            <FlatList
                style={styles.cardList}
                horizontal
                data={jobData.slice(0, 15)}
                keyExtractor={keyExtractor}
                renderItem={({ item }) => (
                    <View style={styles.jobCard}>
                        <Text style={styles.jobTitle}>{item.job_title}</Text>
                        <Text style={styles.employerName}>{item.employer_name}</Text>
                        <Text style={styles.jobLocation}>{item.job_city}, {item.job_state}</Text>
                    </View>
                )}
            />
        </View>
    );
}

export default PopularJobs;
