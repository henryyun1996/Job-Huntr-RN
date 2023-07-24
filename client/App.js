import { useState } from 'react'
import { View, SafeAreaView } from 'react-native';
import styles from './styles'
import Api from './components/Api/Api';
import IsLoading from './components/IsLoading/IsLoading';
import LandingPage from './components/LandingPage/LandingPage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [jobData, setJobData] = useState({})

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Api setJobData={setJobData} setIsLoading={setIsLoading} />
        {isLoading ? <IsLoading /> :
          <LandingPage
            jobData={jobData}
            setUser={setUser}
            user={user}
          />}
      </View>
    </SafeAreaView>
  );
}

