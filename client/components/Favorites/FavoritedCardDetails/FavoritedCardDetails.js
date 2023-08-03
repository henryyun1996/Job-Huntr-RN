import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector hook
import { setFavoritedCardDetails } from '../../../redux/slices/favoritedCardDetails';
import { Ionicons } from '@expo/vector-icons'; // Import icons from react-native-vector-icons
import styles from './styles';

function FavoritedCardDetails() {
    const dispatch = useDispatch()
    const favoriteJobData = useSelector((state) => state.favoriteJobData.favoriteJobData);
    const favoriteIndexCard = useSelector((state) => state.favoriteIndexCard.favoriteIndexCard);

    const handleOpenJobURL = async (url) => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            alert("URL not supported");
        }
    };

    const handleCloseDetails = () => {
        dispatch(setFavoritedCardDetails(false))
    }

    return (
        <View style={styles.favoritedCardDetails}>
            <ScrollView>
                <TouchableOpacity onPress={handleCloseDetails}>
                    <Ionicons style={styles.icons} name="close" />
                </TouchableOpacity>
                <View style={styles.cardWrapper}>
                    <Text style={styles.jobTitle}>{favoriteJobData[favoriteIndexCard].job_title}</Text>
                    <Text style={styles.employername}>{favoriteJobData[favoriteIndexCard].employer_name}</Text>
                    <Text style={styles.employerLocation}>{favoriteJobData[favoriteIndexCard].job_city}, {favoriteJobData[favoriteIndexCard].job_state}</Text>
                    <View style={styles.jobSubInfo}>
                        <Text style={styles.salaryText}>
                            {favoriteJobData[favoriteIndexCard].job_min_salary !== null && favoriteJobData[favoriteIndexCard].job_max_salary !== null
                                ? `$${favoriteJobData[favoriteIndexCard].job_min_salary} - $${favoriteJobData[favoriteIndexCard].job_max_salary}`
                                : '$N/A'}
                        </Text>
                        <Text style={styles.jobType}>{favoriteJobData[favoriteIndexCard].job_employment_type}</Text>
                    </View>
                    <TouchableOpacity style={styles.applyBtn} onPress={() => handleOpenJobURL(favoriteJobData[favoriteIndexCard].job_apply_link)}>
                        <Text style={styles.applyText}>Apply Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.hr}></View>
                <View style={styles.cardWrapper}>
                    <Text style={styles.jobTitle}>Descrription</Text>
                    {favoriteJobData[favoriteIndexCard].job_description ? <Text>{favoriteJobData[favoriteIndexCard].job_description}</Text> : <Text>No descrription to display</Text>}
                    <Text style={styles.jobTitle}>Responsibilities</Text>
                    {favoriteJobData[favoriteIndexCard].job_responsibilities ? <Text>{favoriteJobData[favoriteIndexCard].job_responsibilities}</Text> : <Text>No responsibilities to display</Text>}
                    <Text style={styles.jobTitle}>Qualifications</Text>
                    {favoriteJobData[favoriteIndexCard].job_qualifications ? <Text>{favoriteJobData[favoriteIndexCard].job_qualifications}</Text> : <Text>No qualifications to display</Text>}
                    <Text style={styles.jobTitle}>Benefits</Text>
                    {favoriteJobData[favoriteIndexCard].job_benefits ? <Text>{favoriteJobData[favoriteIndexCard].job_benefits}</Text> : <Text>No benefits to display</Text>}
                </View>
            </ScrollView>
        </View>
    )
}

export default FavoritedCardDetails