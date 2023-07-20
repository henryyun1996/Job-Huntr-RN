// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        flex: 1, // Use flex: 1 to take up the entire available space
    },
    loader: {
        flex: 1, // Use flex: 1 to take up the entire available space
        justifyContent: 'center',
        alignItems: 'center',
    },
    appTitle: {
        fontSize: 20, // Use numbers for fontSize
        fontWeight: '600', // Use strings for fontWeight
    },
    loaderImage: {
        width: 250,
        height: 250,
    },
    loadedContainer: {
        opacity: 1,
    },
    navigationContainer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
    },
});
