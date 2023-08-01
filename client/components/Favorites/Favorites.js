import React, { useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Linking } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setFavoriteJobData } from '../../redux/slices/favoriteJobData';
import { Ionicons } from '@expo/vector-icons'; // Import icons from react-native-vector-icons
import styles from './styles';
import FavoritedCardDetails from './FavoritedCardDetails/FavoritedCardDetails';

function Favorites() {
    const dispatch = useDispatch();
    const favoriteJobData = useSelector((state) => state.favoriteJobData.favoriteJobData);
    const user = useSelector((state) => state.user.user);

    const handleOpenJobURL = async (url) => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            alert("URL not supported");
        }
    };

    const fetchSavedData = () => {
        fetch("https://fd4d-2603-8001-4800-2320-e4e2-280-7c3f-9142.ngrok-free.app/favorites")
            .then((resp) => resp.json())
            .then((savedData) => dispatch(setFavoriteJobData(savedData)));
    };

    const handleDeleteCard = async (id) => {
        try {
            await fetch(`https://fd4d-2603-8001-4800-2320-e4e2-280-7c3f-9142.ngrok-free.app/favorites/${id}`, {
                method: 'DELETE',
            });

            // Update the favoriteJobData state after deletion
            const updatedFavoriteData = favoriteJobData.filter((item) => item.id !== id);
            dispatch(setFavoriteJobData(updatedFavoriteData));
        } catch (error) {
            console.error("Error deleting card:", error);
        }
    };

    const getNumberOfSavedJobs = () => {
        if (user) {
            return favoriteJobData.filter((item) => item.user?.id === user.id).length;
        }
        return 0;
    };

    useEffect(() => {
        fetchSavedData();
    }, []);

    return (
        <View style={styles.favorites}>
            {/* <FavoritedCardDetails /> */}
            <ScrollView>
                <Text style={styles.favoritesText}>Saved Jobs ({getNumberOfSavedJobs()})</Text>
                {user ? (
                    favoriteJobData.map((item) => {
                        if (item.user?.id === user.id) {
                            return (
                                <View style={styles.savedJobCard} key={item.id}>
                                    <TouchableOpacity>
                                        <View style={styles.titleWrapper}>
                                            <Text style={styles.savedJobTitle} numberOfLines={1}>{item.job_title}</Text>
                                            <TouchableOpacity onPress={() => handleDeleteCard(item.id)}>
                                                <Ionicons
                                                    style={styles.icons}
                                                    name="bookmark"
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={styles.savedEmployerName} numberOfLines={1}>
                                            {item.employer_name}
                                        </Text>
                                        <Text style={styles.savedJobLocation} numberOfLines={1}>
                                            {item.job_city}, {item.job_state}
                                        </Text>
                                        <View style={styles.savedJobSubInfo}>
                                            <Text style={styles.savedSalaryText}>
                                                {item.job_min_salary !== null && item.job_max_salary !== null
                                                    ? `$${item.job_min_salary} - $${item.job_max_salary}`
                                                    : '$N/A'}
                                            </Text>
                                            <Text style={styles.savedJobType}>{item.job_employment_type}</Text>
                                        </View>
                                        <Text
                                            style={styles.savedApplyHereText}
                                            onPress={() => handleOpenJobURL(item.job_apply_link)}
                                        >
                                            Apply Here
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        }
                        return null;
                    })
                ) : (
                    <View>
                        <Text style={{ textAlign: "center" }}>User must be logged in.</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

export default Favorites;
