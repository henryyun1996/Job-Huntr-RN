import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    settingsInfo: {
        flex: 1,
        justifyContent: "center",
        paddingVertical: 40
    },
    infoTxt: {
        padding: 10,
        fontSize: 16,
        fontWeight: 600
    },
    inputForm: {
        padding: 10,
        margin: 5,
        borderBottomWidth: 1,
        borderRadius: 8,
        borderBottomColor: "#00000055",
    },
    inputWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 5
    },
    inputName: {
        fontSize: 16
    },
    inputBtn: {
        fontWeight: '600',
        borderRadius: 5,
        padding: 15,
    },
    saveTxt: {
        textAlign: "center",
        padding: 20,
        fontWeight: 600,
    },
    icons: {
        fontSize: 24,
        marginVertical: 20
    }
})

export default styles