import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    userForm: {
        flex: 1,
        justifyContent: "center",
        padding: 40
    },
    formBtn: {
        flexDirection: "row",
        justifyContent: "center"
    },
    loginBtn: {
        padding: 10
    },
    registerBtn: {
        padding: 10
    },
    inputForm: {
        padding: 10,
        margin: 5,
        borderBottomWidth: 1,
        borderRadius: 8,
        borderBottomColor: "#00000055",
    },
    loginRegisterBtn: {
        textAlign: "center",
        padding: 10,
        margin: 5
    }
})

export default styles