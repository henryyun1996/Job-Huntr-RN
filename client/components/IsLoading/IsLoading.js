import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

function IsLoading() {
    return (
        <View style={styles.isLoading}>
            <Text style={styles.apptitle}>Job Huntr</Text>
            <Image style={styles.loadingGif} source={require('../../assets/loading_screen.gif')} />
        </View>
    );
}

export default IsLoading;
