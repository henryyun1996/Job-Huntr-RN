import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import NavbarFooter from '../NavbarFooter/NavbarFooter';

function LandingPage() {

    return (
        <View style={styles.landingPage}>
            <View style={styles.appName}>
                <Text style={styles.title}>Job Huntr</Text>
            </View>
            <View style={styles.navbarFooter}>
                <NavbarFooter />
            </View>
        </View>
    );
}

export default LandingPage;
