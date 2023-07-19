import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    loader: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    appTitle: {
        fontSize: "20px",
        fontWeight: 600
    },
    loaderImage: {
        width: 250,
        height: 250
    },
    loadedContainer: {
        opacity: 1,
    },
});
