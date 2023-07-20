import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { styles } from '../PopularJobs/styles'

function NearbyJobs({ jobData }) {

    const keyExtractor = (item, index) => item?.id?.toString() || index.toString();

    return (
        <View style={styles.nearbyList}> {/* Use "style" instead of "styles" */}
            <Text style={styles.nearbyText}>Nearby Jobs</Text>
            <FlatList
                style={styles.cardList}
                data={jobData.slice(0, 25)}
                keyExtractor={keyExtractor}
                renderItem={({ item }) => (
                    <View style={styles.nearbyJobCard}>
                        <Text style={styles.jobTitle} numberOfLines={1}>{item.job_title}</Text>
                        <Text style={styles.employerName}>{item.employer_name}</Text>
                        <Text style={styles.jobLocation}>{item.job_city}, {item.job_state}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default NearbyJobs
