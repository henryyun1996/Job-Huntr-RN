import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    searchResultDetails: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        padding: 10,
        elevation: 5,
        borderRadius: 15,
    },
    icons: {
        padding: 10,
        fontSize: 18,
        fontWeight: 600,
        textAlign: "right"
    },
    cardWrapper: {
        padding: 10,
    },
    jobTitle: {
        fontSize: 18,
        fontWeight: 600,
        marginVertical: 5
    },
    employername: {
        fontSize: 14
    },
    employerLocation: {
        fontSize: 14
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
    applyBtn: {
        marginVertical: 10,
        padding: 8,
        alignItems: "center",
        backgroundColor: "#d21e1e",
        width: 100
    },
    applyText: {
        color: "#fff"
    },
    hr: {
        borderBottomWidth: .5,
        borderBottomColor: "#c7c8c9",
        marginVertical: 20,
    }
})

export default styles