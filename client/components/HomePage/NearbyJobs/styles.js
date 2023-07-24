import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    nearbyJobsTitle: {
        padding: 10,
        fontSize: 16,
        fontWeight: 600
    },
    jobsList: {
        paddingVertical: 10
    },
    jobCard: {
        backgroundColor: "#F2F2F2",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        width: 200,
        borderRadius: 25,
    },

    jobTitle: {
        fontWeight: 600
    },
    applyHereText: {
        paddingVertical: 10,
        textAlign: "right"
    }
})

export default styles