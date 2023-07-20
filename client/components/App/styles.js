import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appTitle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    title: {
        marginVertical: 20,
    },
    loaderImage: {
        width: 250,
        height: 250,
    },
    loadedContainer: {
        opacity: 1,
    },
    contentContainer: {
        flex: 1, // Take up the entire available space
    },
    navigationContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,

    },
});
