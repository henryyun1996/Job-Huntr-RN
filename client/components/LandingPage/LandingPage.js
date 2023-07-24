import { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import HomePage from '../HomePage/HomePage';
import Favorites from '../Favorites/Favorites';
import Notifications from '../Notifications/Notifications';
import UserInfo from '../UserInfo/UserInfo';
import NavbarFooter from '../NavbarFooter/NavbarFooter';

function LandingPage({ jobData, user, setUser }) {
    const [sideNav, setSideNav] = useState(false)

    return (
        <View style={styles.landingPage}>
            <LinearGradient
                colors={['rgba(211,211,211,0.8)', 'transparent']}
                style={styles.background}
            />
            <View style={styles.appName}>
                <Text style={styles.appTitle}>Job Huntr</Text>
            </View>
            <View style={styles.contentComponents}>
                <ScrollView>
                    <HomePage jobData={jobData} />
                    <Favorites />
                    <Notifications />
                </ScrollView>
                <UserInfo sideNav={sideNav} setSideNav={setSideNav} user={user} setUser={setUser} />
            </View>
            <View style={styles.navbarFooter}>
                <NavbarFooter setSideNav={setSideNav} sideNav={sideNav} />
            </View>
        </View>
    );
}

export default LandingPage;
