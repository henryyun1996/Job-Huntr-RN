import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    searchResults: { flex: 1, backgroundColor: "#fff", padding: 10 },
    resultsText: {
        padding: 10,
        fontSize: 16,
        fontWeight: 600
    },
    searchJobCard: {
        backgroundColor: "#F2F2F2",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
        borderRadius: 25,
    },
    titleWrapper: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    searchJobTitle: {
        fontWeight: 600
    },
    icons: {
        fontSize: 18
    },
    searchJobSubInfo: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5
    },
    searchSalaryText: {
        fontWeight: 600
    },
    searchJobType: {
        fontWeight: 600,
        marginHorizontal: 10
    },
    searchApplyHereText: {
        paddingVertical: 10,
        textAlign: "right"
    },
    noDataText: {
        padding: 10
    },
    loadMoreBtn: {
        alignItems: "center",
        margin: 10,
        padding: 10
    }
})

export default styles