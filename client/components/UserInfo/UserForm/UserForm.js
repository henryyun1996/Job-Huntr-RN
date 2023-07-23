import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import styles from './styles';

function UserForm({ setUser, setSideNav }) {
    const [login, setLogin] = useState(true);
    const loginUrl =
        'https://5341-2603-8001-4800-2320-3ca7-c4c7-d437-61fb.ngrok-free.app/login';
    const registerUrl =
        'https://5341-2603-8001-4800-2320-3ca7-c4c7-d437-61fb.ngrok-free.app/signup';

    const validationSchema = yup.object().shape({
        fname: yup.string(),
        lname: yup.string(),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup
            .string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
            ),
    });

    const initialValues = {
        fname: '',
        lname: '',
        email: '',
        password: '',
    };

    const handleSubmit = (values) => {
        fetch(login ? loginUrl : registerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...values, password: values.password }),
        }).then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => {
                    setUser(user);
                    setSideNav(false)
                });
            } else {
                resp.json().then(console.log);
            }
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
                )}
            </Formik>
        </View>
    );
}

export default UserForm;
