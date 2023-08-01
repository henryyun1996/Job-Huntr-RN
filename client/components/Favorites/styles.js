import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    favorites: { flex: 1, backgroundColor: "#fff", padding: 10 },
    favoritesText: {
        padding: 10,
        fontSize: 16,
        fontWeight: 600
    },
    savedJobCard: {
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
    savedJobTitle: {
        fontWeight: 600
    },
    icons: {
        fontSize: 18
    },
    savedJobSubInfo: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5
    },
    savedSalaryText: {
        fontWeight: 600
    },
    savedJobType: {
        fontWeight: 600,
        marginHorizontal: 10
    },
    savedApplyHereText: {
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