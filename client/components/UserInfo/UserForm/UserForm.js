import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/slices/user';
import { Formik } from 'formik';
import * as yup from 'yup';
import styles from './styles';

function UserForm() {
    const dispatch = useDispatch();

    const [login, setLogin] = useState(true);
    const loginUrl =
        'https://3908-2603-8001-4800-2320-591e-f5ec-bb1d-37e4.ngrok-free.app/login';
    const signUpUrl =
        'https://3908-2603-8001-4800-2320-591e-f5ec-bb1d-37e4.ngrok-free.app/signup';

    const validationSchema = yup.object().shape({
        fname: yup.string(),
        lname: yup.string(),
        email: yup.string().email('Invalid email').required('Email is required'),
        phone_number: yup
            .string()
            .transform((value) => (value ? value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3') : ''))
            .matches(/^\(\d{3}\) \d{3}-\d{4}$/, 'Invalid phone number'),
        street_address: yup.string(),
        city: yup.string(),
        state: yup.string(),
        postal_code: yup.number(),
        password: yup
            .string()
            .required('Password is required'),
    });

    const initialValues = {
        fname: '',
        lname: '',
        email: 'f@gmail.com',
        phone_number: '',
        street_address: '',
        city: '',
        state: '',
        postal_code: '',
        password: 'Extra004!',
    };

    const navigation = useNavigation();

    const handleSubmit = (values) => {
        console.log("submit")
        fetch(login ? loginUrl : signUpUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...values, password: values.password }),
        })
            .then((resp) => {
                if (resp.ok) {
                    resp.json().then((user) => {
                        console.log('Login successful:', user);
                        dispatch(setUser(user));
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'LandingPage' }],
                        });
                    });
                } else {
                    resp.json().then((error) => {
                        console.log('Login error:', error);
                    });
                }
            })
            .catch((error) => {
                console.log('Error occurred:', error);
            });
    };


    return (
        <View style={styles.userForm}>
            <View style={styles.formBtn}>
                <TouchableOpacity style={styles.loginBtn} onPress={() => setLogin(true)}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerBtn} onPress={() => setLogin(false)}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
            <Formik
                style={styles.formikForm}
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <ScrollView>
                        <View>
                            {!login && (
                                <View>
                                    <TextInput
                                        style={styles.inputForm}
                                        placeholder="First Name"
                                        onChangeText={handleChange('fname')}
                                        onBlur={handleBlur('fname')}
                                        value={values.fname}
                                    />
                                    <TextInput
                                        style={styles.inputForm}
                                        placeholder="Last Name"
                                        onChangeText={handleChange('lname')}
                                        onBlur={handleBlur('lname')}
                                        value={values.lname}
                                    />
                                </View>
                            )}
                            <TextInput
                                style={styles.inputForm}
                                placeholder="Email"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                            {!login && (
                                <>
                                    <TextInput
                                        style={styles.inputForm}
                                        placeholder="(999) 999-9999"
                                        onChangeText={handleChange('phone_number')}
                                        onBlur={handleBlur('phone_number')}
                                        value={values.phone_number}
                                    />
                                    <TextInput
                                        style={styles.inputForm}
                                        placeholder="Street Address"
                                        onChangeText={handleChange('street_address')}
                                        onBlur={handleBlur('street_address')}
                                        value={values.street_address}
                                    />
                                    <TextInput
                                        style={[styles.inputForm, styles.location]}
                                        placeholder="City"
                                        onChangeText={handleChange('city')}
                                        onBlur={handleBlur('city')}
                                        value={values.city}
                                    />
                                    <TextInput
                                        style={[styles.inputForm, styles.location]}
                                        placeholder="State"
                                        onChangeText={handleChange('state')}
                                        onBlur={handleBlur('state')}
                                        value={values.state}
                                    />
                                    <TextInput
                                        style={styles.inputForm}
                                        placeholder="Postal Code"
                                        onChangeText={handleChange('postal_code')}
                                        onBlur={handleBlur('postal_code')}
                                        value={values.postal_code}
                                    />
                                </>
                            )}
                            <TextInput
                                style={styles.inputForm}
                                placeholder="Password"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                            <TouchableOpacity onPress={handleSubmit}>
                                <Text style={styles.loginRegisterBtn}>{login ? 'Login' : 'Register'}</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                )}
            </Formik>
        </View>
    );
}

export default UserForm;
