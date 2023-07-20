import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    nearbyList: {
        height: 500
    },
    nearbyText: {
        fontSize: 16, // Use numbers for fontSize
        fontWeight: '600', // Use strings for fontWeight
        padding: 10,
    },
    popularText: {
        fontSize: 16, // Use numbers for fontSize
        fontWeight: '600', // Use strings for fontWeight
        padding: 10,
    },
    cardList: {
        flex: 1, // Use flex: 1 to take up the entire available space
        paddingBottom: 10,
    },
    nearbyJobCard: {
        flex: 1,
        padding: 10,
        margin: 10,
        shadowColor: '#000', // Use shadowColor instead of boxShadow
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.4, // Adjust the shadowOpacity value for your needs
        shadowRadius: 4, // Adjust the shadowRadius value for your needs
        borderRadius: 15,
        backgroundColor: '#f3f3f3',
        elevation: 4, // Use elevation for shadow on Android
    },
    jobCard: {
        padding: 10,
        width: 200,
        margin: 10,
        shadowColor: '#000', // Use shadowColor instead of boxShadow
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.4, // Adjust the shadowOpacity value for your needs
        shadowRadius: 4, // Adjust the shadowRadius value for your needs
        borderRadius: 15,
        backgroundColor: '#f3f3f3',
        elevation: 4, // Use elevation for shadow on Android
    },
    jobTitle: {
        fontWeight: '600', // Use strings for fontWeight
        fontSize: 14, // Use numbers for fontSize
    },
    employerName: {
        fontSize: 12, // Use numbers for fontSize
    },
    jobLocation: {
        fontSize: 12, // Use numbers for fontSize
    }
});
