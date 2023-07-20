import { useState, useEffect, useRef } from 'react';
import { StatusBar, Image, View, Animated, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import Api from '../Api/Api';
import PopularJobs from '../PopularJobs/PopularJobs';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import NearbyJobs from '../NearbyJobs/NearbyJobs';

export default function App() {
  const [jobData, setJobData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!isLoading) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000, // Adjust the duration as needed
        useNativeDriver: true,
      }).start();
    }
  }, [isLoading, fadeAnim]);

  return (
    <View style={styles.container}>
      <Api setJobData={setJobData} setIsLoading={setIsLoading} />
      {isLoading ? (
        <View style={styles.loader}>
          <Text style={styles.appTitle}>Job Huntr</Text>
          <Image
            style={styles.loaderImage}
            source={require('../../assets/loading_screen.gif')}
          />
        </View>
      ) : (
        <>
          <View style={styles.contentContainer}>
            <Animated.View style={[styles.loadedContainer, { opacity: fadeAnim }]}>
              <LinearGradient
                colors={['rgba(235, 235, 235, 1)', 'rgba(255, 255, 255, 1)']}
              >
                <Text style={[styles.appTitle, styles.title]}>Job Huntr</Text>
                <SearchForm />
              </LinearGradient>
              <PopularJobs jobData={jobData} />
              <NearbyJobs jobData={jobData} />
              <View style={styles.navigationContainer}>
                <Navigation />
              </View>
            </Animated.View>
          </View>
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
