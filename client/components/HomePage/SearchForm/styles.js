import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    searchForm: {
        paddingHorizontal: 20
    },
    input: {
        paddingHorizontal: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: "#A9A9A9",
        borderRadius: 25
    },
    inputWrapper: {
        flexDirection: "row",
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#A9A9A9",
        borderRadius: 25
    },
    innerInput: {
        flex: 1
    },
    submitBtn: {
        padding: 0,
        backgroundColor: "transparent",
        justifyContent: "center"
    },
    submitText: {
        display: "flex",
        justifyContent: "center"
    }
})

export default styles