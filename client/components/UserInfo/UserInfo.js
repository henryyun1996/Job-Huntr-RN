import React from 'react';
import { Animated } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import UserProfile from './UserProfile/UserProfile';
import UserForm from './UserForm/UserForm';

function UserInfo() {
    const user = useSelector((state) => state.user.user);

    return (
        <Animated.View style={[styles.userInfo]}>
            {user ? <UserProfile /> : <UserForm />}
        </Animated.View>
    );
}

export default UserInfo;
