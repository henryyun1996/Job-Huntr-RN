import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import { setIsSearchLoading } from '../../../redux/slices/isSearchLoading';
import { setSearchJobData } from '../../../redux/slices/searchJobData'; // Import setSearchJobData
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

function SearchForm() {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    const validationSchema = yup.object().shape({
        jobSearch: yup.string(),
        locationSearch: yup.string(),
    });

    const initialValues = {
        jobSearch: "",
        locationSearch: "",
    };

    const handleSubmit = async (values) => {
        // Check if jobSearch and locationSearch values are not empty
        dispatch(setIsSearchLoading(true))
        if (values.jobSearch && values.locationSearch) {

            // Pass the jobSearch and locationSearch values to the options object
            const options = {
                method: 'GET',
                url: 'https://jsearch.p.rapidapi.com/search',
                params: {
                    query: `${values.jobSearch} in ${values.locationSearch}, USA`,
                    page: '3',
                    num_pages: '20',
                    radius: "100",
                },
                headers: {
                    'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
                    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
                },
            };

            try {
                navigation.navigate('Search'); // Navigate to the "SearchResults" screen
                const response = await axios.request(options);
                dispatch(setSearchJobData(response.data));
                dispatch(setIsSearchLoading(false))
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log('Please enter both job search and location.');
        }
    };

    return (
        <View style={styles.searchForm}>
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Job title, keyword, or company'
                            onChangeText={handleChange('jobSearch')}
                            onBlur={handleBlur('jobSearch')}
                            value={values.jobSearch}
                        />
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.innerInput}
                                placeholder="City, state, zip code, or 'remote'"
                                onChangeText={handleChange('locationSearch')}
                                onBlur={handleBlur('locationSearch')}
                                value={values.locationSearch}
                            />
                            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                                <Text style={styles.submitText}><Icon name="search" /></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    );
}

export default SearchForm;
