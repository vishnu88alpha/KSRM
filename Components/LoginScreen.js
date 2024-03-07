import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import the icons you need
import { firebase } from '../FirebaseConfig';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to track password visibility
    const [loading, setLoading] = useState(false); // State to track loading status

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const loginUser = async (email, password) => {
        try {
            setLoading(true); // Set loading to true when login starts
            const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;

            // Fetch user role from Firestore
            firebase.firestore().collection("users").where("email", "==", user.email).get()
                .then(snapshot => {
                    if (!snapshot.empty) {
                        const userData = snapshot.docs[0].data();
                        const userRole = userData.role;
                        if (userRole === 'faculty') {
                            navigation.replace('FacultyHome');
                        } else if (userRole === 'student') {
                            navigation.replace('HomeScreen');
                        } else {
                            Alert.alert('Error', 'Invalid user role.');
                        }
                    } else {
                        Alert.alert('Error', 'User data not found.');
                    }
                })
                .catch(error => {
                    Alert.alert('Error', 'Error getting user data: ' + error.message);
                })
                .finally(() => {
                    setLoading(false); // Set loading to false when login finishes
                });
        } catch (error) {
            setLoading(false); // Set loading to false in case of error
            Alert.alert('Error', error.message);
        }
    };

    const handleLoginPress = () => {
        loginUser(email, password);
    };

    const forgotPassword = () => {
        if (!email) {
            Alert.alert('Error', 'Please enter your email address to reset your password.');
            return;
        }
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                Alert.alert('Password Reset Email Sent', 'Please check your email inbox for further instructions.');
            })
            .catch((error) => {
                Alert.alert('Error', error.message);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>KSRM CONNECT</Text>
            <View style={styles.card}>
                <View style={styles.inputContainer}>
                    <View style={styles.inputIcon}>
                        <FontAwesomeIcon icon={faEnvelope} size={20} color="#777" />
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Email'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputIcon}>
                        <FontAwesomeIcon icon={faLock} size={20} color="#777" />
                    </View>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Password'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={!showPassword} // Use secureTextEntry based on showPassword state
                    />
                    <TouchableOpacity
                        style={styles.passwordIcon}
                        onPress={togglePasswordVisibility}
                    >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} size={20} color="#777" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={handleLoginPress}
                    style={styles.button}
                    disabled={loading} // Disable button when loading
                >
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Login</Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={forgotPassword}
                    style={styles.forgotPasswordButton}
                >
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '80%', // Set width to 80% of the screen width
        maxWidth: 400, // Set maximum width to 400 pixels
        elevation: 3, // For shadow on Android
        shadowColor: '#000', // For shadow on iOS
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    inputIcon: {
        marginRight: 10,
    },
    textInput: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        fontSize: 16,
    },
    passwordIcon: {
        position: 'absolute',
        right: 20,
        top: '50%',
        transform: [{ translateY: -10 }], // Adjust vertically to center with text input
    },
    button: {
        backgroundColor: '#026efd',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPasswordButton: {
        marginTop: 10,
        alignItems: 'center',
    },
    forgotPasswordText: {
        fontSize: 16,
        color: '#026efd',
        textDecorationLine: 'underline',
    },
});
