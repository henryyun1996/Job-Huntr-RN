import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

function NavbarFooter() {
    return (
        <View style={styles.footerNavbar}>
            <TouchableOpacity>
                <Text>
                    <Icon name="home" size={24} />
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    <Icon name="bookmark" size={24} />
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navSearchBtn}>
                <Text>
                    <Icon name="search" size={24} color="#fff" />
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    <Icon name="bell" size={24} />
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    <Icon name="user" size={24} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default NavbarFooter