import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import styles from './styles';
import UserProfile from './UserProfile/UserProfile';
import UserForm from './UserForm/UserForm';

function UserInfo({ sideNav, setSideNav, user, setUser }) {
    const widthAnim = useRef(new Animated.Value(sideNav ? 1 : 0)).current;

    useEffect(() => {
        Animated.timing(widthAnim, {
            toValue: sideNav ? 1 : 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [widthAnim, sideNav]);

    // Interpolate the animated value (0 to 1) to calculate the width value
    const width = widthAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
    });

    return (
        <Animated.View style={[styles.userInfo, { width }]}>
            {sideNav && (user ? <UserProfile user={user} setUser={setUser} /> : <UserForm setUser={setUser} setSideNav={setSideNav} />)}
        </Animated.View>
    );
}

export default UserInfo;
