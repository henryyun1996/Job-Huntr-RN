import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import NavbarFooter from '../NavbarFooter/NavbarFooter';

function LandingPage({ jobData, user, setUser }) {

    return (
        <>
            <View style={styles.landingPage}>
                <NavbarFooter jobData={jobData} user={user} setUser={setUser} />
            </View>
        </>
    );
}

export default LandingPage;
