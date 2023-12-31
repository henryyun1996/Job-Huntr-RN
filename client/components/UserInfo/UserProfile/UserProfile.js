import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/slices/user';
import { setProfileInfo } from '../../../redux/slices/profileInfo';
import { setSettingsInfo } from '../../../redux/slices/settingsInfo';
import { setAbout } from '../../../redux/slices/about';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import SettingsInfo from './SettingsInfo/SettingsInfo';
import About from './About/About';
import styles from './styles';

function UserProfile() {
    const user = useSelector((state) => state.user.user);
    const profileInfo = useSelector((state) => state.profileInfo.profileInfo);
    const settingsInfo = useSelector((state) => state.settingsInfo.settingsInfo);
    const about = useSelector((state) => state.about.about);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleLogout = () => {
        fetch('https://3908-2603-8001-4800-2320-591e-f5ec-bb1d-37e4.ngrok-free.app/logout', {
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

    const handleProfileInfo = () => {
        dispatch(setProfileInfo(true))
    }

    const handleSettingsInfo = () => {
        dispatch(setSettingsInfo(true))
    }

    const handleAbout = () => {
        dispatch(setAbout(true))
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
            {profileInfo && <ProfileInfo />}
            {settingsInfo && <SettingsInfo />}
            {about && <About />}
            {!profileInfo && !settingsInfo && !about &&
                <>
                    <View style={styles.userNav}>
                        <TouchableOpacity onPress={handleProfileInfo}>
                            <Text style={styles.navList}>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                            <Text style={styles.navList}>Favorites</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSettingsInfo}>
                            <Text style={styles.navList}>Settings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleAbout}>
                            <Text style={styles.navList}>About</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logout}>
                        <TouchableOpacity onPress={handleLogout} >
                            <Text>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </>

            }
        </View>
    )
}

export default UserProfile