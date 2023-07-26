import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, SafeAreaView } from 'react-native';
import styles from './styles';
import Api from './components/Api/Api';
import IsLoading from './components/IsLoading/IsLoading';
import LandingPage from './components/LandingPage/LandingPage';

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [jobData, setJobData] = useState({});

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Api setJobData={setJobData} setIsLoading={setIsLoading} />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isLoading ? (
              <Stack.Screen name="isLoading" component={IsLoading} />
            ) : (
              <Stack.Screen name="LandingPage">
                {(props) => (
                  <LandingPage
                    {...props}
                    jobData={jobData}
                    setUser={setUser}
                    user={user}
                  />
                )}
              </Stack.Screen>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}
