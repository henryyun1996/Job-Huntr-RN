import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';
import Api from '../Api/Api';

export default function App() {
  const [jobData, setJobData] = useState({})
  console.log(jobData)

  return (
    <View style={styles.container}>
      <Api setJobData={setJobData} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

