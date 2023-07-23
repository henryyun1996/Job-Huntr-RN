import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

function NavbarFooter({ sideNav, setSideNav }) {
    return (
        <View style={styles.footerNavbar}>
            <TouchableOpacity>
                <Icon name="home" size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="bookmark" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navSearchBtn}>
                <Icon name="search" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="bell" size={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSideNav(!sideNav)}>
                <Icon name="user" size={24} />
            </TouchableOpacity>
        </View>
    )
}

export default NavbarFooter;
