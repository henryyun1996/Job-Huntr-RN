import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../Navigation/style';


function Navigation() {
    return (
        <View style={styles.navigation}>
            <TouchableOpacity style={styles.iconButton}>
                <Image source={require('../../assets/home.png')} style={styles.iconImage} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../assets/ribbon.png')} style={styles.iconImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchImage}>
                <Image source={require('../../assets/search.png')} style={[styles.iconImage]} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../assets/bell.png')} style={styles.iconImage} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../assets/user.png')} style={styles.iconImage} />
            </TouchableOpacity>
        </View>
    );
}

export default Navigation