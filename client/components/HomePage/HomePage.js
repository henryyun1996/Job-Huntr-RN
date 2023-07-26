import React from 'react'
import { View, ScrollView } from 'react-native';
import SearchFrom from './SearchForm/SearchForm'
import NearbyJobs from './NearbyJobs/NearbyJobs';
import RecentJobs from './RecentJobs/RecentJobs';
import styles from './styles'

function HomePage({ route }) {
    const { jobData } = route.params;

    return (
        <View style={styles.homePage}>
            <ScrollView>
                <SearchFrom />
                <NearbyJobs jobData={jobData} />
                <RecentJobs jobData={jobData} />
            </ScrollView>
        </View>
    )
}

export default HomePage