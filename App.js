// App.js or your navigation setup file
import React, { useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import LoadingScreen from './Screens/LoadingScreen';
import LoginScreen from './Components/LoginScreen';
import ForgotPasswordScreen from './Components/ForgotPasswordScreen';
import FacultyHome from './Faculty/FacultyHome';
import EventsScreen from './Screens/EventsScreen';
import AttendanceScreen from './Screens/AttendanceScreen';
import ResultsScreen from './Screens/ResultsScreen';
import LibraryScreen from './Screens/LibraryScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import AttendanceMkScreen from './Faculty/AttendanceMkScreen';
import AssignmentsScreen from './Faculty/AssignmentsScreen';
import TestScreen from './Screens/TestScreen';
import DummyScreen from './Screens/DummyScreen';
import AnnouncementsScreen from './Screens/AnnouncementsScreen';
import TrialScreen from './Screens/TrialScreen';
import BlankScreen from './Faculty/BlankScreen';
import ConductingQuizScreen from './Faculty/ConductingQuizScreen';
import GradingScreen from './Faculty/GradingScreen';
import FacultyProfileScreen from './Faculty/FacultyProfileScreen';
import HomeScreen from './Screens/HomeScreen';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
const Stack = createNativeStackNavigator();

function InsideLayout() {
  return (
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Student Home' }}
        />
        <Stack.Screen
          name="FacultyHome"
          component={FacultyHome}
          options={{ title: 'Faculty Home' }}
        />
        <Stack.Screen
          name="EventsScreen"
          component={EventsScreen}
          options={{ title: 'Events' }}
        />
        <Stack.Screen
          name="AttendanceScreen"
          component={AttendanceScreen}
          options={{ title: 'Attendance' }}
        />
        <Stack.Screen
          name="ResultsScreen"
          component={ResultsScreen}
          options={{ title: 'Results' }}
        />
        <Stack.Screen
          name="LibraryScreen"
          component={LibraryScreen}
          options={{ title: 'Library' }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
        <Stack.Screen
          name="AttendanceMkScreen"
          component={AttendanceMkScreen}
          options={{ title: 'Attendance Marking' }}
        />
        <Stack.Screen
          name="AssignmentsScreen"
          component={AssignmentsScreen}
          options={{ title: 'Assignment' }}
        />
        <Stack.Screen
          name="TestScreen"
          component={TestScreen}
          options={{ title: 'Test' }}
        />
        <Stack.Screen
          name="DummyScreen"
          component={DummyScreen}
          options={{ title: 'Dummy' }}
        />
        <Stack.Screen
          name="AnnouncementsScreen"
          component={AnnouncementsScreen}
          options={{ title: 'Announcements' }}
        />
        <Stack.Screen
          name="TrialScreen"
          component={TrialScreen}
          options={{ title: 'Trial' }}
        />
        <Stack.Screen
          name="BlankScreen"
          component={BlankScreen}
          options={{ title: 'Blank' }}
        />
        <Stack.Screen
          name="ConductingQuizScreen"
          component={ConductingQuizScreen}
          options={{ title: 'Quiz' }}
        />
        <Stack.Screen
        name="GradingScreen"
        component={GradingScreen}
        options={{ title: 'Grade' }}
      />
      <Stack.Screen
      name="FacultyProfileScreen"
      component={FacultyProfileScreen}
      options={{ title: 'Profile' }}
    />
      </Stack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        console.log('user', user.email);
        setUser(user);
      } else {
        console.log('User is not authenticated');
        setUser(null);
      }
    });
  
    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);
   // Empty dependency array to ensure the effect runs once on mount

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'Inside' : 'Login'}>
        {user ? (
          <Stack.Screen name="Inside" component={InsideLayout} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


