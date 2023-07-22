import { useState } from 'react'
import { View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles'
import Api from './components/Api/Api';
import IsLoading from './components/IsLoading/IsLoading';
import LandingPage from './components/LandingPage/LandingPage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [jobData, setJobData] = useState({})

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['rgba(211,211,211,0.8)', 'transparent']}
        style={styles.background}
      />
      <View style={styles.container}>
        <Api setJobData={setJobData} setIsLoading={setIsLoading} />
        {isLoading ? <IsLoading /> : <LandingPage jobData={jobData} />}
      </View>
    </SafeAreaView>

  );
}

