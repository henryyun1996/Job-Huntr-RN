import React from 'react'
import { Text, View } from 'react-native';
import SearchFrom from './SearchForm/SearchForm'
import NearbyJobs from './NearbyJobs/NearbyJobs';
import RecentJobs from './RecentJobs/RecentJobs';
import styles from './styles'

function HomePage() {
    return (
        <View>
            <SearchFrom />
            <NearbyJobs />
            <RecentJobs />
        </View>
    )
}

export default HomePage