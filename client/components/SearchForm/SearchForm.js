import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { styles } from '../SearchForm/style';

const MyForm = () => {
    const initialValues = {
        searchQuery: '',
        searchLocation: '',
    };

    const validationSchema = yup.object().shape({
        searchQuery: yup.string().required('Job type is required'),
        searchLocation: yup.string().required('Location is required'),
    });

    const handleSubmit = (values) => {
        // Handle form submission logic here
        console.log('Form Values:', values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleChange, handleSubmit, values, errors }) => (
                <View>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Job title, keyword, or company"
                        value={values.searchQuery}
                        onChangeText={handleChange('searchQuery')}
                    />
                    {errors.searchQuery && <Text>{errors.searchQuery}</Text>}

                    <TextInput
                        style={styles.searchInput}
                        placeholder="City, state, zip code, or 'remote'"
                        value={values.searchLocation}
                        onChangeText={handleChange('searchLocation')}
                    />
                    {errors.searchLocation && <Text>{errors.searchLocation}</Text>}

                    <TouchableOpacity onPress={handleSubmit}>
                        <Text style={styles.submitBtn}>Submit</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    );
};

export default MyForm;
