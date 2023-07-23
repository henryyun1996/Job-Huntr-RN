import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    recentJobsTitle: {
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
        marginVertical: 5,
        borderRadius: 25,
    },

    jobTitle: {
        fontWeight: 600
    },
    jobSubInfo: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5
    },
    salaryText: {
        fontWeight: 600
    },
    jobType: {
        fontWeight: 600,
        marginHorizontal: 10
    },
    applyHereText: {
        paddingVertical: 10,
        textAlign: "right"
    }
})

export default styles