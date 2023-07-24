import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

function UserProfile({ user, setUser }) {

    const handleLogout = () => {
        fetch('https://5341-2603-8001-4800-2320-3ca7-c4c7-d437-61fb.ngrok-free.app/logout', {
            method: "DELETE",
        }).then(res => {
            if (res.ok) {
                setUser(null);
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
                    <Text style={styles.fname}>{user.user.fname} {user.user.lname}</Text>
                    <Text style={styles.email}>{user.user.email}</Text>
                </View>
            </View>
            <View style={styles.userNav}>
                <TouchableOpacity >
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