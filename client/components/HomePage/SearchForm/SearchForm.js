import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

function SearchForm() {
    const validationSchema = yup.object().shape({
        jobSearch: yup.string(),
        locationSearch: yup.string(),
    });

    const initialValues = {
        jobSearch: "",
        locationSearch: "",
    };

    const handleSubmit = (values) => {
        console.log("Form data", values);
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
