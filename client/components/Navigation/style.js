import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    navigation: {
        backgroundColor: "#F8F8F8",
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: "#5F5F5F",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4
    },
    iconButton: {
        padding: 5,
    },
    iconImage: {
        width: 25,
        height: 25,
    },
    searchImage: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#ff6565',
        shadowColor: '#b10000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 5,
    },
    buttonText: {
        fontSize: 14,
    },
})