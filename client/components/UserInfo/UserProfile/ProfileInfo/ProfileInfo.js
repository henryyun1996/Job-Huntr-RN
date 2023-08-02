import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'; // Import icons from react-native-vector-icons
import { setProfileInfo } from '../../../../redux/slices/profileInfo';
import styles from './styles';

function ProfileInfo() {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch()

    const handleReturn = () => {
        dispatch(setProfileInfo(false))
    }

    return (
        <View style={styles.profileInfo}>
            <View style={styles.backBtn}>
                <TouchableOpacity onPress={handleReturn}>
                    <Ionicons style={styles.icons} name="arrow-back-circle-sharp" />
                </TouchableOpacity>
            </View>
            <View style={styles.userInfo}>
                <View style={styles.infoWrapper}>
                    <Ionicons style={styles.infoIcons} name="person-sharp" />
                    <Text style={styles.userInfoTxt}>
                        {user.fname} {user.lname}
                    </Text>
                </View>
                <View style={styles.infoWrapper}>
                    <Ionicons style={styles.infoIcons} name="mail" />
                    <Text style={styles.userInfoTxt}>
                        {user.email}
                    </Text>
                </View>
                <View style={styles.infoWrapper}>
                    <Ionicons style={styles.infoIcons} name="call" />
                    <Text style={styles.userInfoTxt}>
                        {user.phone_number}
                    </Text>
                </View>
                <View style={styles.infoWrapper}>
                    <Ionicons style={styles.infoIcons} name="location" />
                    <Text style={styles.userInfoTxt}>
                        {user.city}, {user.state}, {user.postal_code}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ProfileInfo

