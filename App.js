import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

//Common Stack Screen
import CommonStackScreen from './Components/CommonStackScreen'; // Import your CommonStackScreen component

//Faculty Screens
import FacultyHome from './Faculty/FacultyHome';
import AttendanceMkScreen from './Faculty/AttendanceMkScreen';
import AssignmentsScreen from './Faculty/AssignmentsScreen';
import AnnouncementScreen from './Faculty/AnnouncementScreen';
import ConductingQuizScreen from './Faculty/ConductingQuizScreen';
import GradingScreen from './Faculty/GradingScreen';
import FacultyProfileScreen from './Faculty/FacultyProfileScreen';
import EventUploadScreen from './Faculty/EventUploadScreen';

//Student Screens
import HomeScreen from './Screens/HomeScreen';
import EventsScreen from './Screens/EventsScreen';
import AttendanceScreen from './Screens/AttendanceScreen';
import ResultsScreen from './Screens/ResultsScreen';
import LibraryScreen from './Screens/LibraryScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import Assignment from './Screens/Assignment';
import StudentAnnouncementsScreen from './Screens/StudentAnnouncementsScreen';
import PostedAssignments from './Screens/PostedAssignments';
import TimeTableScreen from './Screens/TimeTableScreen';
import TrialScreen from './Screens/TrialScreen';




const Stack = createStackNavigator();

const FacultyStackScreen = () => (
  <Stack.Navigator>
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
      <Stack.Screen
        name="EventUploadScreen"
        component={EventUploadScreen} // Add EventUploadScreen as a component
        options={{
          title: 'Upload Event',
          headerStyle: {
            backgroundColor: 'gold', // Set the background color for the header
          },
          headerTintColor: 'black', // Set the text color for the header
        }}
      />
  </Stack.Navigator>
);

const StudentStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={({ navigation }) => ({
        title: 'Student Home',
        headerStyle: {
          backgroundColor: 'gold', // Set the background color for the header
        },
        headerTintColor: 'black', // Set the text color for the header
        headerRight: () => (
          <Icon
            name="user-circle"
            size={24}
            color="black"
            style={{ marginRight: 15 }} // Adjust the margin as needed
            onPress={() => {
              // Navigate to the profile screen
              navigation.navigate('ProfileScreen');
            }}
          />
        ),
      })}
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
          name="StudentAnnouncementsScreen"
          component={StudentAnnouncementsScreen}
          options={{
            title: 'StudentAnnouncementsScreen',
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
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CommonStackScreen" component={CommonStackScreen} />
        <Stack.Screen name="FacultyStackScreen" component={FacultyStackScreen} />
        <Stack.Screen name="StudentStackScreen" component={StudentStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
