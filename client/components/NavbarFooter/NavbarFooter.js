// NavbarFooter.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../HomePage/HomePage';
import Favorites from '../Favorites/Favorites';
import Notifications from '../Notifications/Notifications';
import UserInfo from '../UserInfo/UserInfo';
import SearchResults from '../SearchResults/SearchResults';
import { Ionicons } from '@expo/vector-icons'; // Import icons from react-native-vector-icons

function NavbarFooter() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="bookmark" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen
                name="Search"
                component={SearchResults}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" color={color} size={size} />
                    ),
                }} />

            <Tab.Screen
                name="User"
                component={UserInfo}
                options={{
                    tabBarVisible: false, // Hide the tab bar when on the UserInfo screen
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default NavbarFooter;
