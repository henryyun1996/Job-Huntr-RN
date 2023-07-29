import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, SafeAreaView } from 'react-native';
import styles from './styles';
import Api from './components/Api/Api';
import IsLoading from './components/IsLoading/IsLoading';
import LandingPage from './components/LandingPage/LandingPage';

const Stack = createStackNavigator();

export default function index() {
  const isLoading = useSelector((state) => state.loading.isLoading);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Api />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isLoading ? (
              <Stack.Screen name="isLoading" component={IsLoading} />
            ) : (
              <Stack.Screen name="LandingPage" component={LandingPage} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}
