import { Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import HomePage from '../HomePage/HomePage';
import Favorites from '../Favorites/Favorites';
import Notifications from '../Notifications/Notifications';
import UserInfo from '../UserInfo/UserInfo';
import NavbarFooter from '../NavbarFooter/NavbarFooter';

function LandingPage({ jobData }) {
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
                    <UserInfo />
                </ScrollView>
            </View>
            <View style={styles.navbarFooter}>
                <NavbarFooter />
            </View>
        </View>
    );
}

export default LandingPage;
