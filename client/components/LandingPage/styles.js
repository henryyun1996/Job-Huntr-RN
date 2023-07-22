import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    landingPage: {
        flex: 1,
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '20%', // Adjust this value to control the height of the gradient
    },
    appName: {
        flex: .1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingVertical: 10
    },
    appTitle: {
        fontWeight: 600,
        fontSize: 18,
    },
    contentComponents: {
        flex: .8
    },
    navbarFooter: {
        flex: .1,
        justifyContent: "center"
    }
})

export default styles;
