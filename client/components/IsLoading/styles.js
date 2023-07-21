import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    isLoading: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    apptitle: {
        fontSize: 20,
        fontWeight: 600
    },
    loadingGif: {
        width: 300, // Adjust the width as needed
        height: 300, // Adjust the height as needed
        resizeMode: 'contain',
    },
});
