import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    userInfo: {
        position: 'absolute',
        height: '100%',
        borderRadius: 15,
        top: 0,
        backgroundColor: 'white',
        overflow: 'hidden', // Ensure that content doesn't overflow during animation
        ...Platform.select({
            ios: {
                shadowColor: '#000000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
});

export default styles;
