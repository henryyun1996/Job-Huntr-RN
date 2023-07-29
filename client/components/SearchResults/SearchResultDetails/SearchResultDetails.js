import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector hook
import { setCardDetails } from '../../../redux/slices/cardDetails';
import { Ionicons } from '@expo/vector-icons'; // Import icons from react-native-vector-icons
import styles from './styles';

function SearchResultDetails() {
    const dispatch = useDispatch()
    const searchJobData = useSelector((state) => state.searchJobData.searchJobData);
    const indexCard = useSelector((state) => state.indexCard.indexCard);
    const user = useSelector((state) => state.user.user);

    const handleOpenJobURL = async (url) => {
        const supported = await Linking.canOpenURL(url);

        if (supported && user) {
            await Linking.openURL(url);
        } else if (!supported) {
            alert("URL not supported");
        } else {
            alert("Must be singed in to apply");
        }
    };

    const handleCloseDetails = () => {
        dispatch(setCardDetails(false))
    }
    return (
        <View style={styles.searchResultDetails}>
            <ScrollView>
                <TouchableOpacity onPress={handleCloseDetails}>
                    <Ionicons style={styles.icons} name="close" />
                </TouchableOpacity>
                <View style={styles.cardWrapper}>
                    <Text style={styles.jobTitle}>{searchJobData.data[indexCard].job_title}</Text>
                    <Text style={styles.employername}>{searchJobData.data[indexCard].employer_name}</Text>
                    <Text style={styles.employerLocation}>{searchJobData.data[indexCard].job_city}, {searchJobData.data[indexCard].job_state}</Text>
                    <View style={styles.jobSubInfo}>
                        <Text style={styles.salaryText}>
                            {searchJobData.data[indexCard].job_min_salary !== null && searchJobData.data[indexCard].job_max_salary !== null
                                ? `$${searchJobData.data[indexCard].job_min_salary} - $${searchJobData.data[indexCard].job_max_salary}`
                                : '$N/A'}
                        </Text>
                        <Text style={styles.jobType}>{searchJobData.data[indexCard].job_employment_type}</Text>
                    </View>
                    <TouchableOpacity style={styles.applyBtn} onPress={() => handleOpenJobURL(searchJobData.data[indexCard].job_apply_link)}>
                        <Text style={styles.applyText}>Apply Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.hr}></View>
                <View style={styles.cardWrapper}>
                    <Text style={styles.jobTitle}>Descrription</Text>
                    {searchJobData.data[indexCard].job_description ? <Text>{searchJobData.data[indexCard].job_description}</Text> : <Text>No descrription to display</Text>}
                    <Text style={styles.jobTitle}>Responsibilities</Text>
                    {searchJobData.data[indexCard].job_responsibilities ? <Text>{searchJobData.data[indexCard].job_responsibilities}</Text> : <Text>No responsibilities to display</Text>}
                    <Text style={styles.jobTitle}>Qualifications</Text>
                    {searchJobData.data[indexCard].job_qualifications ? <Text>{searchJobData.data[indexCard].job_qualifications}</Text> : <Text>No qualifications to display</Text>}
                    <Text style={styles.jobTitle}>Benefits</Text>
                    {searchJobData.data[indexCard].job_benefits ? <Text>{searchJobData.data[indexCard].job_benefits}</Text> : <Text>No benefits to display</Text>}
                </View>
            </ScrollView>
        </View>
    )
}

export default SearchResultDetails