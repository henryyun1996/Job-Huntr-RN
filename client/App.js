import { useState } from 'react'
import { View } from 'react-native';
import styles from './styles'
import Api from './components/Api/Api';
import IsLoading from './components/IsLoading/IsLoading';
import HomeScreen from './components/HomeScreen/HomeScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [jobData, setJobData] = useState({})
  console.log(jobData, "Api")

  return (
    <View style={styles.container}>
      <Api setJobData={setJobData} setIsLoading={setIsLoading} />
      {isLoading ? <IsLoading /> : <HomeScreen />}
    </View>
  );
}

