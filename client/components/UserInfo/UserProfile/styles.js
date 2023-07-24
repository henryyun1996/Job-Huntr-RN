import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    userProfile: {
        flex: 1,
        padding: 20,
    },
    userInfo: {
        flex: .1,
        flexDirection: "row",
        alignItems: "center"
    },
    fname: {
        fontWeight: 600
    },
    email: {
        fontSize: 12
    },
    userNav: {
        flex: .8,
        paddingVertical: 40
    },
    navList: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#E9E9E9"
    },
    logout: {
        flex: .1
    }
})

export default styles