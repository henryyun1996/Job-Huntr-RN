import React from 'react'
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux'; // Import useSelector hook
import SearchFrom from './SearchForm/SearchForm'
import NearbyJobs from './NearbyJobs/NearbyJobs';
import RecentJobs from './RecentJobs/RecentJobs';
import CardDetails from './CardDetails/CardDetails';
import styles from './styles'

function HomePage() {
    const cardDetails = useSelector((state) => state.cardDetails.cardDetails);

    return (
        <View style={styles.homePage}>
            {cardDetails && <CardDetails />}
            <ScrollView>
                <SearchFrom />
                <NearbyJobs />
                <RecentJobs />
            </ScrollView>
        </View>
    )
}

export default HomePage