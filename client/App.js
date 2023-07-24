import { useState, useEffect } from 'react'
import { View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles'
import Api from './components/Api/Api';
import IsLoading from './components/IsLoading/IsLoading';
import LandingPage from './components/LandingPage/LandingPage';
import Favorites from './components/Favorites/Favorites';
import Notifications from './components/Notifications/Notifications';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [jobData, setJobData] = useState({})

  return (

    <NavigationContainer>
      <Api setJobData={setJobData} setIsLoading={setIsLoading}/>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="isLoading"
            component={IsLoading}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="LandingPage"
              component={LandingPage}
              initialParams={{jobData:jobData}}
              options={{ headerShown: false}}
            />
            <Stack.Screen 
              name="Favorites"
              component={Favorites}
              options={{ headerShown: true}}
            />
            <Stack.Screen
              name="Notfication"
              component={Notifications}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>

  );
}
