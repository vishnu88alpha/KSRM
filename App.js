// App.js or your navigation setup file
import React, { useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoadingScreen from './Components/LoadingScreen';
import LoginScreen from './Components/LoginScreen';
import FacultyHome from './Faculty/FacultyHome';
import EventsScreen from './Screens/EventsScreen';
import AttendanceScreen from './Screens/AttendanceScreen';
import ResultsScreen from './Screens/ResultsScreen';
import LibraryScreen from './Screens/LibraryScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import AttendanceMkScreen from './Faculty/AttendanceMkScreen';
import AssignmentsScreen from './Faculty/AssignmentsScreen';
import Assignment from './Screens/Assignment';
import PostedAssignments from './Screens/PostedAssignments';
import TimeTableScreen from './Screens/TimeTableScreen';
import AnnouncementsScreen from './Screens/AnnouncementsScreen';
import TrialScreen from './Screens/TrialScreen';
import AnnouncementScreen from './Faculty/AnnouncementScreen';
import ConductingQuizScreen from './Faculty/ConductingQuizScreen';
import GradingScreen from './Faculty/GradingScreen';
import FacultyProfileScreen from './Faculty/FacultyProfileScreen';
import HomeScreen from './Screens/HomeScreen';

import { firebase } from './FirebaseConfig';


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
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Student Home',
            headerStyle: {
              backgroundColor: 'gold', // Set the background color for the header
            },
            headerTintColor: 'black', // Set the text color for the header
          }}
        />
        <Stack.Screen
          name="FacultyHome"
          component={FacultyHome}
          options={{
            title: 'Faculty Home',
            headerStyle: {
              backgroundColor: 'gold', // Set the background color for the header
            },
            headerTintColor: 'black', // Set the text color for the header
          }}
        />
        <Stack.Screen
          name="EventsScreen"
          component={EventsScreen}
          options={{
            title: 'Events',
            headerStyle: {
              backgroundColor: 'gold', // Set the background color for the header
            },
            headerTintColor: 'black', // Set the text color for the header
          }}
        />
        <Stack.Screen
          name="AttendanceScreen"
          component={AttendanceScreen}
          options={{
            title: 'Attendance',
            headerStyle: {
              backgroundColor: 'gold', // Set the background color for the header
            },
            headerTintColor: 'black', // Set the text color for the header
          }}
        />
        <Stack.Screen
          name="ResultsScreen"
          component={ResultsScreen}
          options={{
            title: 'Results',
            headerStyle: {
              backgroundColor: 'gold', // Set the background color for the header
            },
            headerTintColor: 'black', // Set the text color for the header
          }}
        />
        <Stack.Screen
          name="LibraryScreen"
          component={LibraryScreen}
          options={{
            title: 'Library',
            headerStyle: {
              backgroundColor: 'gold', // Set the background color for the header
            },
            headerTintColor: 'black', // Set the text color for the header
          }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            title: 'Settings',
            headerStyle: {
              backgroundColor: 'gold', // Set the background color for the header
            },
            headerTintColor: 'black', // Set the text color for the header
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerStyle: {
              backgroundColor: 'gold', // Set the background color for the header
            },
            headerTintColor: 'black', // Set the text color for the header
          }}
        />
<Stack.Screen
  name="AttendanceMkScreen"
  component={AttendanceMkScreen}
  options={{
    title: 'Attendance Marking',
    headerStyle: {
      backgroundColor: 'gold', // Set the background color for the header
    },
    headerTintColor: 'black', // Set the text color for the header
  }}
/>
<Stack.Screen
  name="AssignmentsScreen"
  component={AssignmentsScreen}
  options={{
    title: 'Assignment',
    headerStyle: {
      backgroundColor: 'gold', // Set the background color for the header
    },
    headerTintColor: 'black', // Set the text color for the header
  }}
/>
<Stack.Screen
  name="Assignment"
  component={Assignment}
  options={{
    title: 'Assignment',
    headerStyle: {
      backgroundColor: 'gold', // Set the background color for the header
    },
    headerTintColor: 'black', // Set the text color for the header
  }}
/>
<Stack.Screen
  name="TimeTableScreen"
  component={TimeTableScreen}
  options={{
    title: 'TimeTable',
    headerStyle: {
      backgroundColor: 'gold', // Set the background color for the header
    },
    headerTintColor: 'black', // Set the text color for the header
  }}
/>
<Stack.Screen
  name="TrialScreen"
  component={TrialScreen}
  options={{
    title: 'Trial',
    headerStyle: {
      backgroundColor: 'gold', // Set the background color for the header
    },
    headerTintColor: 'black', // Set the text color for the header
  }}
/>
<Stack.Screen
  name="AnnouncementScreen"
  component={AnnouncementScreen}
  options={{
    title: 'AnnouncementScreen',
    headerStyle: {
      backgroundColor: 'gold', // Set the background color for the header
    },
    headerTintColor: 'black', // Set the text color for the header
  }}
/>

<Stack.Screen
  name="AnnouncementsScreen"
  component={AnnouncementsScreen}
  options={{
    title: 'Announcements',
    headerStyle: {
      backgroundColor: 'gold', // Set the background color for the header
    },
    headerTintColor: 'black', // Set the text color for the header
  }}
/>
<Stack.Screen
  name="ConductingQuizScreen"
  component={ConductingQuizScreen}
  options={{
    title: 'Quiz',
    headerStyle: {
      backgroundColor: 'gold', // Set the background color for the header
    },
    headerTintColor: 'black', // Set the text color for the header
  }}
/>
<Stack.Screen
  name="GradingScreen"
  component={GradingScreen}
  options={{
    title: 'Grade',
    headerStyle: {
      backgroundColor: 'gold', // Set the background color for the header
    },
    headerTintColor: 'black', // Set the text color for the header
    
  }}
/>
<Stack.Screen
  name="PostedAssignments"
  component={PostedAssignments}
  options={{
    title: 'PostedAssignments',
    headerStyle: {
      backgroundColor: 'gold', // Set the background color for the header
    },
    headerTintColor: 'black', // Set the text color for the header
  }}
/>
<Stack.Screen
  name="FacultyProfileScreen"
  component={FacultyProfileScreen}
  options={{
    title: 'Profile',
    headerStyle: {
      backgroundColor: 'gold', // Set the background color for the header
    },
    headerTintColor: 'black', // Set the text color for the header
  }}
/>
      </Stack.Navigator>
  )
}

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [role, setRole] = useState(); // State for user role

  useEffect(() => {
      const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, []);
   // Empty dependency array to ensure the effect runs once on mount

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);

    if (user) {
      // User is signed in.
      console.log("User signed in:", user.email);
      
      // Fetch additional user information from Firestore
      firebase.firestore().collection("users").where("email", "==", user.email).get().then(snapshot => {
        if (!snapshot.empty) {
          const userData = snapshot.docs[0].data();
          console.log("User data:", userData);
          const userRole = userData.role;
          if (!userRole) {
            // User role not found, stay in login screen
            alert("User role not found. Please contact support.");
            firebase.auth().signOut(); // Sign out user
          } else {
            setRole(userRole); // Set user role
          }
        } else {
          console.log("No user data found in Firestore");
        }
      }).catch(error => {
        console.error("Error getting user data:", error);
      });
    } else {
      // User is signed out.
      console.log("User signed out");
    }
  }

  if (initializing) return null;

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={user ? 'Inside' : 'LoadingScreen'}>
            {user && role ? (
                <Stack.Screen name="Inside" component={InsideLayout} options={{ headerShown: false }} />
            ) : (
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
            )}
        </Stack.Navigator>
    </NavigationContainer>
);
}