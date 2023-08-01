import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector hook
import { setFavoritedCardDetails } from '../../../redux/slices/favoritedCardDetails';
import { Ionicons } from '@expo/vector-icons'; // Import icons from react-native-vector-icons
import styles from './styles';

function FavoritedCardDetails() {
    const dispatch = useDispatch()
    const indexCard = useSelector((state) => state.indexCard.indexCard);
    const user = useSelector((state) => state.user.user);

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
                    <Text style={styles.jobTitle}>{user.favorited_jobs[indexCard].job_title}</Text>
                    <Text style={styles.employername}>{user.favorited_jobs[indexCard].employer_name}</Text>
                    <Text style={styles.employerLocation}>{user.favorited_jobs[indexCard].job_city}, {user.favorited_jobs[indexCard].job_state}</Text>
                    <View style={styles.jobSubInfo}>
                        <Text style={styles.salaryText}>
                            {user.favorited_jobs[indexCard].job_min_salary !== null && user.favorited_jobs[indexCard].job_max_salary !== null
                                ? `$${user.favorited_jobs[indexCard].job_min_salary} - $${user.favorited_jobs[indexCard].job_max_salary}`
                                : '$N/A'}
                        </Text>
                        <Text style={styles.jobType}>{user.favorited_jobs[indexCard].job_employment_type}</Text>
                    </View>
                    <TouchableOpacity style={styles.applyBtn} onPress={() => handleOpenJobURL(user.favorited_jobs[indexCard].job_apply_link)}>
                        <Text style={styles.applyText}>Apply Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.hr}></View>
                <View style={styles.cardWrapper}>
                    <Text style={styles.jobTitle}>Descrription</Text>
                    {user.favorited_jobs[indexCard].job_description ? <Text>{user.favorited_jobs[indexCard].job_description}</Text> : <Text>No descrription to display</Text>}
                    <Text style={styles.jobTitle}>Responsibilities</Text>
                    {user.favorited_jobs[indexCard].job_responsibilities ? <Text>{user.favorited_jobs[indexCard].job_responsibilities}</Text> : <Text>No responsibilities to display</Text>}
                    <Text style={styles.jobTitle}>Qualifications</Text>
                    {user.favorited_jobs[indexCard].job_qualifications ? <Text>{user.favorited_jobs[indexCard].job_qualifications}</Text> : <Text>No qualifications to display</Text>}
                    <Text style={styles.jobTitle}>Benefits</Text>
                    {user.favorited_jobs[indexCard].job_benefits ? <Text>{user.favorited_jobs[indexCard].job_benefits}</Text> : <Text>No benefits to display</Text>}
                </View>
            </ScrollView>
        </View>
    )
}

export default FavoritedCardDetails