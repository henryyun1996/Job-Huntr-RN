import { Text, View, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setEmailChange } from '../../../../redux/slices/emailChange';
import { setPhoneNumberChange } from '../../../../redux/slices/phoneNumberChange';
import { setStreetAddressChange } from '../../../../redux/slices/streetAddressChange';
import { setCityChange } from '../../../../redux/slices/cityChange';
import { setStateChange } from '../../../../redux/slices/stateChange';
import { setPostalCodeChange } from '../../../../redux/slices/postalCodeChange';
import { setPasswordChange } from '../../../../redux/slices/passwordChange';
import { setSettingsInfo } from '../../../../redux/slices/settingsInfo';
import { setUser } from '../../../../redux/slices/user';
import { Ionicons } from '@expo/vector-icons'; // Import icons from react-native-vector-icons
import { Formik } from 'formik';
import * as yup from 'yup';
import styles from './styles';

function SettingsInfo() {
    const user = useSelector((state) => state.user.user);
    const emailChange = useSelector((state) => state.emailChange.emailChange);
    const phoneNumberChange = useSelector((state) => state.phoneNumberChange.phoneNumberChange);
    const streetAddressChange = useSelector((state) => state.streetAddressChange.streetAddressChange);
    const cityChange = useSelector((state) => state.cityChange.cityChange);
    const stateChange = useSelector((state) => state.stateChange.stateChange);
    const postalCodeChange = useSelector((state) => state.postalCodeChange.postalCodeChange);
    const passwordChange = useSelector((state) => state.passwordChange.passwordChange);
    const dispatch = useDispatch()

    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email'),
        phone_number: yup
            .string()
            .transform((value) => (value ? value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3') : ''))
            .matches(/^\(\d{3}\) \d{3}-\d{4}$/, 'Invalid phone number'),
        street_address: yup.string(),
        city: yup.string(),
        state: yup.string(),
        postal_code: yup.number(),
        password: yup.string(),
    });

    const initialValues = {
        email: '',
        phone_number: '',
        street_address: '',
        city: '',
        state: '',
        postal_code: '',
        password: '',
    };

    const handleSubmit = async (values) => {
        try {
            const response = await fetch(`https://3908-2603-8001-4800-2320-591e-f5ec-bb1d-37e4.ngrok-free.app/users/${user.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...values, _password_hash: values.password }),
            });

            if (!response.ok) {
                // Handle the error if the response is not successful
                console.error('Error updating user info:', response.statusText);
                return;
            }

            const updatedUserData = await response.json();

            // Dispatch the setUser action to update the user data in the Redux store
            dispatch(setUser(updatedUserData));

            // Hide the settings info form after successful update
            dispatch(setSettingsInfo(false));

            console.log(updatedUserData);
        } catch (error) {
            console.error('Error updating user info:', error);
        }
    };

    const handleEmailChange = () => {
        dispatch(setEmailChange(!emailChange))
    }

    const handlePhoneNumberChange = () => {
        dispatch(setPhoneNumberChange(!phoneNumberChange))
    }

    const handleStreetAddressChange = () => {
        dispatch(setStreetAddressChange(!streetAddressChange))
    }

    const handleCityChange = () => {
        dispatch(setCityChange(!cityChange))
    }

    const handleStateChange = () => {
        dispatch(setStateChange(!stateChange))
    }

    const handlePostalCodeChange = () => {
        dispatch(setPostalCodeChange(!postalCodeChange))
    }

    const handlePasswordChange = () => {
        dispatch(setPasswordChange(!passwordChange))
    }

    const handleReturn = () => {
        dispatch(setSettingsInfo(false))
    }

    return (
        <View style={styles.settingsInfo}>
            <Text style={styles.infoTxt}>
                Update Info
            </Text>
            <Formik
                style={styles.formikForm}
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => {
                    return (
                        <>
                            <ScrollView>
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.inputName}>Email</Text>
                                    <Button style={styles.inputBtn} title="Edit" onPress={handleEmailChange} />
                                </View>
                                {emailChange &&
                                    <TextInput
                                        style={styles.inputForm}
                                        placeholder="New Email"
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                    />
                                }
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.inputName}>Phone Number</Text>
                                    <Button style={styles.inputBtn} title="Edit" onPress={handlePhoneNumberChange} />
                                </View>
                                {phoneNumberChange &&
                                    <TextInput
                                        style={styles.inputForm}
                                        placeholder="(999) 999-9999"
                                        onChangeText={handleChange('phone_number')}
                                        onBlur={handleBlur('phone_number')}
                                        value={values.phone_number}
                                    />
                                }
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.inputName}>Street Address</Text>
                                    <Button style={styles.inputBtn} title="Edit" onPress={handleStreetAddressChange} />
                                </View>
                                {streetAddressChange &&
                                    <TextInput
                                        style={styles.inputForm}
                                        placeholder="New Street Address"
                                        onChangeText={handleChange('street_address')}
                                        onBlur={handleBlur('street_address')}
                                        value={values.street_address}
                                    />
                                }
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.inputName}>City</Text>
                                    <Button style={styles.inputBtn} title="Edit" onPress={handleCityChange} />
                                </View>
                                {cityChange &&
                                    <TextInput
                                        style={[styles.inputForm, styles.location]}
                                        placeholder="New City"
                                        onChangeText={handleChange('city')}
                                        onBlur={handleBlur('city')}
                                        value={values.city}
                                    />
                                }
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.inputName}>State</Text>
                                    <Button style={styles.inputBtn} title="Edit" onPress={handleStateChange} />
                                </View>
                                {stateChange &&
                                    <TextInput
                                        style={[styles.inputForm, styles.location]}
                                        placeholder="New State"
                                        onChangeText={handleChange('state')}
                                        onBlur={handleBlur('state')}
                                        value={values.state}
                                    />
                                }
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.inputName}>Postal Code</Text>
                                    <Button style={styles.inputBtn} title="Edit" onPress={handlePostalCodeChange} />
                                </View>
                                {postalCodeChange &&
                                    <TextInput
                                        style={styles.inputForm}
                                        placeholder="New Postal Code"
                                        onChangeText={handleChange('postal_code')}
                                        onBlur={handleBlur('postal_code')}
                                        value={values.postal_code}
                                    />
                                }
                                <View style={styles.inputWrapper}>
                                    <Text style={styles.inputName}>Password</Text>
                                    <Button style={styles.inputBtn} title="Edit" onPress={handlePasswordChange} />
                                </View>
                                {passwordChange &&
                                    <TextInput
                                        style={styles.inputForm}
                                        placeholder="New Password"
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                    />
                                }
                            </ScrollView>
                            <TouchableOpacity style={styles.saveBtn} onPress={handleSubmit}>
                                <Text style={styles.saveTxt}>Save Changes</Text>
                            </TouchableOpacity>
                        </>
                    )
                }}
            </Formik>
            <TouchableOpacity onPress={handleReturn}>
                <Ionicons style={styles.icons} name="arrow-back-circle-sharp" />
            </TouchableOpacity>
        </View>
    )
}

export default SettingsInfo