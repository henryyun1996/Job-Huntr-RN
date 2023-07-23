import React from 'react'
import { Text, View } from 'react-native';
import SearchFrom from './SearchForm/SearchForm'
import NearbyJobs from './NearbyJobs/NearbyJobs';
import RecentJobs from './RecentJobs/RecentJobs';
import styles from './styles'

function HomePage({ jobData }) {
    return (
        <View style={styles.homePage}>
            <SearchFrom />
            <NearbyJobs jobData={jobData} />
            <RecentJobs jobData={jobData} />
        </View>
    )
}

export default HomePage