import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/slices/user';
import styles from './styles';

function UserProfile() {
    const user = useSelector((state) => state.user.user);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleLogout = () => {
        fetch('https://fd4d-2603-8001-4800-2320-e4e2-280-7c3f-9142.ngrok-free.app/logout', {
            method: "DELETE",
        }).then(res => {
            if (res.ok) {
                dispatch(setUser(null));
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'LandingPage' }], // Replace 'LandingPage' with the name of your home page screen
                });
            }
        })
    }

    return (
        <View style={styles.userProfile}>
            <View style={styles.userInfo}>
                <Image
                    source={require('../../../assets/userImage.jpg')}
                    style={{ width: 80, height: 80 }}
                />
                <View style={styles.userInfoWrapper}>
                    <Text style={styles.fname}>{user.fname} {user.lname}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                </View>
            </View>
            <View style={styles.userNav}>
                <TouchableOpacity>
                    <Text style={styles.navList}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.navList}>Favorites</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.navList}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.navList}>Help Center</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.logout}>
                <TouchableOpacity onPress={handleLogout} >
                    <Text>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UserProfile