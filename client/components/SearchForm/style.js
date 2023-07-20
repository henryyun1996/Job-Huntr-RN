import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    searchInput: {
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 3,
        shadowColor: '#000', // Use shadowColor instead of boxShadow
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.4, // Adjust the shadowOpacity value for your needs
        shadowRadius: 4, // Adjust the shadowRadius value for your needs
        borderRadius: 15,
        elevation: 4, // Use elevation for shadow on Android    }
    },
    submitBtn: {
        display: "initial"
    }
})