import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../HomePage/HomePage';
import Favorites from '../Favorites/Favorites';
import Notifications from '../Notifications/Notifications';
import UserInfo from '../UserInfo/UserInfo';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

function NavbarFooter({ jobData, user, setUser }) {
    const Tab = createBottomTabNavigator();

    return (

        <View style={{ flex: 1 }}>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomePage}
                    initialParams={{ jobData }}
                    options={{
                        title: 'Custom Profile Title',
                    }}
                />
                <Tab.Screen
                    name="Favorites"
                    component={Favorites}
                    options={{}}
                />
                <Tab.Screen
                    name="Notifications"
                    component={Notifications}
                    options={{}}
                />
                <Tab.Screen
                    name="User"
                    component={UserInfo}
                    initialParams={{ user, setUser }}
                    options={{}}
                />
            </Tab.Navigator>
        </View>
    )
}

export default NavbarFooter;
