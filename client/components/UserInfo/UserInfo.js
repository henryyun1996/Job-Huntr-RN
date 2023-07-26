import React from 'react';
import { Animated } from 'react-native';
import styles from './styles';
import UserProfile from './UserProfile/UserProfile';
import UserForm from './UserForm/UserForm';

function UserInfo({ route }) {
    const { user, setUser } = route.params;

    return (
        <Animated.View style={[styles.userInfo]}>
            {user ? <UserProfile user={user} setUser={setUser} /> : <UserForm setUser={setUser} />}
        </Animated.View>
    );
}

export default UserInfo;
