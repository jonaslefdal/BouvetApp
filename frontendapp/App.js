import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [values, setValues] = useState([]); // For å lagre verdiene fra backend
  const [loading, setLoading] = useState(true); // For å vise en loader mens vi venter på data

  useEffect(() => {
    // Henter data fra backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5279/api/values'); // Endre URL om nødvendig
        const data = await response.json();
        setValues(data); // Lagre dataen i state
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Skjul loaderen
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
