import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ProfileScreen = () => {
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [profileDetails, setProfileDetails] = useState(null);
  const [showProfileButton, setShowProfileButton] = useState(true);

  const departments = ['AIML', 'CSE', 'ECE', 'EEE', 'MECH', 'CIVIL'];
  const roles = ['HOD', 'Principal', 'Teaching Staff', 'Non-Teaching Staff'];

  const handleProfileDisplay = () => {
    let profile = null;
    if (department === 'CSE' && role === 'HOD') {
      // Mock profile details for CSE HOD
      profile = {
        name: 'Dr. V. Lokeswara Reddy',
        title: 'Professor & HOD',
        email: 'lokeswara.reddy@example.com',
        phone: '+1234567890',
        Experience: '13 year',
        image: require('../assets/hod.jpg')
      };
    } else if (department === 'CSE' && role === 'Teaching Staff') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.S.Nageswara Rao',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'nageswara@gamil.com',
        phone: '+1234567890',
        Experience: '13 year',
        image: require('../assets/NageswarRao.png')
      };
    } else if (department === 'CSE' && role === 'Non-Teaching Staff') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.S.Gouri',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'gouri@gamil.com',
        phone: '+1234567890',
        Experience: '10 year',
        image: require('../assets/Gouri.png')
      };
    }
    // Add more else-if blocks for other departments and roles as needed
        // Add more else-if blocks for other departments and roles as needed
    // Note: I've removed repeated else-if blocks for brevity
    // Add more else-if blocks for other departments and roles as needed
    if (department === 'AIML' && role === 'HOD') {
      // Mock profile details for CSE HOD
      profile = {
        name: 'Dr. V. Lokeswara Reddy',
        title: 'Professor & HOD',
        email: 'lokeswara.reddy@example.com',
        phone: '+1234567890',
        Experience : '13 year',
        image: require('../assets/hod.jpg')
      };
    } else if (department === 'AIML' && role === 'Teaching Staff') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.S.Nageswara Rao',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'nageswara@gamil.com',
        phone: '+1234567890',
        Experience : '13 year',
        image: require('../assets/NageswarRao.png')
        

        // Add the image source if available
      };
    } else if (department === 'AIML' && role === 'Non-Teaching Staff') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.S.Gouri',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'gouri@gamil.com',
        phone: '+1234567890',
        Experience : '10 year',
        image: require('../assets/Gouri.png')
        

        // Add the image source if available
      };
    }
    if (department === 'EEE' && role === 'HOD') {
      // Mock profile details for CSE HOD
      profile = {
        name: 'Dr. V. Lokeswara Reddy',
        title: 'Professor & HOD',
        email: 'lokeswara.reddy@example.com',
        phone: '+1234567890',
        Experience : '13 year',
        image: require('../assets/hod.jpg')
      };
    } else if (department === 'EEE' && role === 'Teaching Staff') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.S.Nageswara Rao',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'nageswara@gamil.com',
        phone: '+1234567890',
        Experience : '13 year',
        image: require('../assets/NageswarRao.png')
        

        // Add the image source if available
      };
    } else if (department === 'EEE' && role === 'Non-Teaching Staff') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.S.Gouri',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'gouri@gamil.com',
        phone: '+1234567890',
        Experience : '10 year',
        image: require('../assets/Gouri.png')
        

        // Add the image source if available
      };
    }
    // Add more else-if blocks for other departments and roles as needed
    if (department === 'ECE' && role === 'HOD') {
      // Mock profile details for CSE HOD
      profile = {
        name: 'Dr. V. Lokeswara Reddy',
        title: 'Professor & HOD',
        email: 'lokeswara.reddy@example.com',
        phone: '+1234567890',
        Experience : '13 year',
        image: require('../assets/hod.jpg')
      };
    } else if (department === 'ECE' && role === 'Teaching Staff') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.S.Nageswara Rao',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'nageswara@gamil.com',
        phone: '+1234567890',
        Experience : '13 year',
        image: require('../assets/NageswarRao.png')
        

        // Add the image source if available
      };
    } else if (department === 'ECE' && role === 'Non-Teaching Staff') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.S.Gouri',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'gouri@gamil.com',
        phone: '+1234567890',
        Experience : '10 year',
        image: require('../assets/Gouri.png')
        

        // Add the image source if available
      };
    }
    if (department === 'MECH' && role === 'HOD') {
      // Mock profile details for CSE HOD
      profile = {
        name: 'Dr. V. Lokeswara Reddy',
        title: 'Professor & HOD',
        email: 'lokeswara.reddy@example.com',
        phone: '+1234567890',
        Experience : '13 year',
        image: require('../assets/hod.jpg')
      };
    } else if (department === 'MECH' && role === 'Teaching Staff') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.S.Nageswara Rao',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'nageswara@gamil.com',
        phone: '+1234567890',
        Experience : '13 year',
        image: require('../assets/NageswarRao.png')
        

        // Add the image source if available
      };
    } else if (department === 'MECH' && role === 'Non-Teaching Staff') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.S.Gouri',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'gouri@gamil.com',
        phone: '+1234567890',
        Experience : '10 year',
        image: require('../assets/Gouri.png')
        

        // Add the image source if available
      };
    }
    // Add more else-if blocks for other departments and roles as needed
    if (department === 'CIVIL' && role === 'HOD') {
      // Mock profile details for CSE HOD
      profile = {
        name: 'Dr. V. Lokeswara Reddy',
        title: 'Professor & HOD',
        email: 'lokeswara.reddy@example.com',
        phone: '+1234567890',
        Experience : '13 year',
        image: require('../assets/hod.jpg')
      };
    } else if (department === 'CIVIL' && role === 'Teaching Staff') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.S.Nageswara Rao',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'nageswara@gamil.com',
        phone: '+1234567890',
        Experience : '13 year',
        image: require('../assets/NageswarRao.png')
        

        // Add the image source if available
      };
    } else if (department === 'CIVIL' && role === 'Non-Teaching Staff') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.S.Gouri',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'gouri@gamil.com',
        phone: '+1234567890',
        Experience : '10 year',
        image: require('../assets/Gouri.png')
        

        // Add the image source if available
      };
    } else if (department === 'AIML' && role === 'Principal') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.V.S.S.Murthy',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'murthy@gamil.com',
        phone: '+1234567890',
        Experience : '20 year',
        image: require('../assets/Principal.png')
        

        // Add the image source if available
      };
    }else if (department === 'CIVIL' && role === 'Principal') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.V.S.S.Murthy',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'murthy@gamil.com',
        phone: '+1234567890',
        Experience : '20 year',
        image: require('../assets/Principal.png')
        

        // Add the image source if available
      };
    }else if (department === 'EEE' && role === 'Principal') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.V.S.S.Murthy',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'murthy@gamil.com',
        phone: '+1234567890',
        Experience : '20 year',
        image: require('../assets/Principal.png')
        

        // Add the image source if available
      };
    }else if (department === 'ECE' && role === 'Principal') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.V.S.S.Murthy',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'murthy@gamil.com',
        phone: '+1234567890',
        Experience : '20 year',
        image: require('../assets/Principal.png')
        

        // Add the image source if available
      };
    }else if (department === 'CSE' && role === 'Principal') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.V.S.S.Murthy',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'murthy@gamil.com',
        phone: '+1234567890',
        Experience : '20 year',
        image: require('../assets/Principal.png')
        

        // Add the image source if available
      };
    }else if (department === 'MECH' && role === 'Principal') {
      // Mock profile details for CSE Teaching Staff
      profile = {
        name: 'Dr.V.S.S.Murthy',
        title: 'Assistant Professor',
        Qualification: 'M.Tech.,Ph.D.',
        email: 'murthy@gamil.com',
        phone: '+1234567890',
        Experience : '20 year',
        image: require('../assets/Principal.png')
        

        // Add the image source if available
      }; 
    }
    // Add more else-if blocks for other departments and roles as needed

    if (profile) {
      setProfileDetails(profile);
      setShowProfileButton(false);
    } else {
      setProfileDetails(null);
      setShowProfileButton(true);
    }
  };

  const handleCloseProfile = () => {
    setProfileDetails(null);
    setShowProfileButton(true);
  };

  return (
    <View style={styles.container}>
      {showProfileButton && (
        <>
          <Picker
            selectedValue={department}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setDepartment(itemValue)}>
            <Picker.Item label="Select Department" value="" />
            {departments.map((dept, index) => (
              <Picker.Item key={index} label={dept} value={dept} />
            ))}
          </Picker>

          {department !== '' && (
            <Picker
              selectedValue={role}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setRole(itemValue)}>
              <Picker.Item label="Select Role" value="" />
              {roles.map((r, index) => (
                <Picker.Item key={index} label={r} value={r} />
              ))}
            </Picker>
          )}

          {(department !== '' && role !== '') && (
            <TouchableOpacity onPress={handleProfileDisplay} style={styles.button}>
              <Text style={styles.buttonText}>View Profile</Text>
            </TouchableOpacity>
          )}
        </>
      )}

      {profileDetails && (
        <View style={styles.profileContainer}>
          {Array.isArray(profileDetails) ? (
            profileDetails.map((profile, index) => (
              <View key={index}>
                <Text>Name: {profile.name}</Text>
                <Text>Title: {profile.title}</Text>
                <Text>Email: {profile.email}</Text>
                <Text>Phone: {profile.phone}</Text>
                <Text>Experience: {profile.Experience}</Text>
                <Text>Qualification: {profile.Qualification}</Text>
              </View>
            ))
          ) : (
            <View>
              {profileDetails.image && (
                <Image source={profileDetails.image} style={styles.image} />
              )}
              <Text>Name: {profileDetails?.name}</Text>
              <Text>Title: {profileDetails?.title}</Text>
              <Text>Email: {profileDetails?.email}</Text>
              <Text>Phone: {profileDetails?.phone}</Text>
              <Text>Experience: {profileDetails?.Experience}</Text>
              <Text>Qualification: {profileDetails?.Qualification}</Text>
            </View>
          )}
          <TouchableOpacity onPress={handleCloseProfile} style={styles.closeButton}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    borderRadius:7,
  },
  picker: {
    height: 50,
    width: 200,
    backgroundColor: '#ffffff',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'gold', // yellow
    padding: 10,
    borderRadius: 5,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#f00', // red
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#000', // black
  },
  profileContainer: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    width: 300,
    borderRadius: 10,
    padding: 30,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default ProfileScreen;
