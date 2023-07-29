import React from 'react';
import { Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';

function IsLoading() {
    const isLoading = useSelector((state) => state.loading.isLoading);

    return (
        <View style={styles.isLoading}>
            {isLoading ? <Text style={styles.apptitle}>Job Huntr</Text> : <Text style={styles.apptitle}>Searching...</Text>}
            <Image style={styles.loadingGif} source={require('../../assets/loading_screen.gif')} />
        </View>
    );
}

export default IsLoading;
