import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// HomeScreen-komponenten
function HomeScreen() {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5279/api/values');
        const data = await response.json();
        setValues(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Laster inn...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Verdier fra backend:</Text>
      {values.map((value, index) => (
        <Text key={index}>{value}</Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

// ProfileScreen-komponenten
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Dette er Profile-skjermen!</Text>
    </View>
  );
}
function DrivingScreen() {
  return (
    <View style={styles.container}>
      <Text>Dette er kjøre siden</Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Kjøring" component={DrivingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
