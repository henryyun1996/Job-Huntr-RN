import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    profileInfo: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 40,
        backgroundColor: "#f2f2f2",
        borderRadius: 10
    },
    userInfo: {
        paddingHorizontal: 20
    },
    icons: {
        fontSize: 22,
        color: "#767676",
    },
    infoWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    infoIcons: {
        marginHorizontal: 10,
        color: "#767676",
    },
    userInfoTxt: {
        marginVertical: 2.5,
        color: "#767676",
        fontWeight: 500
    }
})

export default styles