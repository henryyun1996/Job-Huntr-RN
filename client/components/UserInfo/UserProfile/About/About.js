import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAbout } from '../../../../redux/slices/about';
import { Ionicons } from '@expo/vector-icons'; // Import icons from react-native-vector-icons
import styles from './styles';

function About() {
    const dispatch = useDispatch()

    const handleReturn = () => {
        dispatch(setAbout(false))
    }


    return (
        <View style={styles.about}>
            <ScrollView>
                <Text style={styles.sectionTitle}>About :</Text>
                <Text style={styles.appDescription}>
                    Job Huntr is a modern and efficient job search app developed by Christian Hernandez. Our app aims to simplify the job hunting process and provide a user-friendly platform for finding and saving job opportunities.
                </Text>
                <Text style={styles.sectionTitle}>Upcoming Launch:</Text>
                <Text style={styles.appDescription}>
                    We are excited to announce that Job Huntr will soon be officially launched. Get ready to experience a better and more streamlined way of searching for jobs.
                </Text>
                <Text style={styles.sectionTitle}>Let's Connect:</Text>
                <Text style={styles.appDescription}>
                    At Job Huntr, we value your feedback. Feel free to connect with us and share your insights as we strive to continuously improve your job search experience.
                </Text>
                <Text style={styles.appDescription}>
                    Join Job Huntr today and discover a new level of efficiency and convenience in your job search!
                </Text>
            </ScrollView>
            <TouchableOpacity onPress={handleReturn}>
                <Ionicons style={styles.icons} name="arrow-back-circle-sharp" />
            </TouchableOpacity>
        </View>
    );
}

export default About;





